$port = 8080
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$port/")
try {
    $listener.Start()
    Write-Output "CIVICA_SERVER_STARTED_OK on http://localhost:$port/"
} catch {
    Write-Output "Port $port in use or permission denied: $_"
    exit 1
}

$baseDir = "c:\Users\Dell\Desktop\hackathon"
$citizensDir = Join-Path $baseDir "citizens"
$adminsDir = Join-Path $baseDir "admins"

function Send-JsonResponse($response, $data, $statusCode = 200) {
    $json = $data | ConvertTo-Json -Depth 10
    $bytes = [System.Text.Encoding]::UTF8.GetBytes($json)
    $response.StatusCode = $statusCode
    $response.ContentType = "application/json; charset=utf-8"
    $response.ContentLength64 = $bytes.Length
    $response.AddHeader("Access-Control-Allow-Origin", "*")
    $response.AddHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
    $response.AddHeader("Access-Control-Allow-Headers", "Content-Type")
    $response.OutputStream.Write($bytes, 0, $bytes.Length)
    $response.OutputStream.Close()
}

while ($listener.IsListening) {
    try {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response

        $rawUrl = $request.Url.AbsolutePath
        $method = $request.HttpMethod

        # CORS preflight
        if ($method -eq "OPTIONS") {
            $response.StatusCode = 204
            $response.AddHeader("Access-Control-Allow-Origin", "*")
            $response.AddHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
            $response.AddHeader("Access-Control-Allow-Headers", "Content-Type")
            $response.OutputStream.Close()
            continue
        }

        # API: List all citizens
        if ($rawUrl -eq "/api/citizens" -and $method -eq "GET") {
            $citizensList = @()
            if (Test-Path $citizensDir) {
                Get-ChildItem -Path $citizensDir -Directory | ForEach-Object {
                    $profPath = Join-Path $_.FullName "profile.json"
                    if (Test-Path $profPath) {
                        $prof = Get-Content -Path $profPath -Raw -Encoding UTF8 | ConvertFrom-Json
                        $citizensList += @{
                            folder = $_.Name
                            citizenId = $prof.citizenId
                            fullName = $prof.fullName
                            email = $prof.email
                            phoneNumber = $prof.phoneNumber
                            assignedWard = $prof.assignedWard
                            kycStatus = $prof.kycStatus
                            portalUrl = "/citizens/$($_.Name)/portal_view.html"
                        }
                    }
                }
            }
            Send-JsonResponse $response @{ success = $true; count = $citizensList.Count; citizens = $citizensList }
            continue
        }

        # API: List all admins
        if ($rawUrl -eq "/api/admins" -and $method -eq "GET") {
            $adminsList = @()
            if (Test-Path $adminsDir) {
                Get-ChildItem -Path $adminsDir -Directory | ForEach-Object {
                    $profPath = Join-Path $_.FullName "officer_profile.json"
                    if (Test-Path $profPath) {
                        $prof = Get-Content -Path $profPath -Raw -Encoding UTF8 | ConvertFrom-Json
                        $adminsList += @{
                            folder = $_.Name
                            officerId = $prof.officerId
                            fullName = $prof.fullName
                            designation = $prof.designation
                            department = $prof.department
                            jurisdictionZone = $prof.jurisdictionZone
                            officialEmail = $prof.officialEmail
                            contactPhone = $prof.contactPhone
                            badgeNumber = $prof.badgeNumber
                            dashboardUrl = "/admins/$($_.Name)/admin_dashboard.html"
                        }
                    }
                }
            }
            Send-JsonResponse $response @{ success = $true; count = $adminsList.Count; admins = $adminsList }
            continue
        }

        # API: Command Center Telemetry & Operator
        if ($rawUrl -eq "/api/command-center" -and $method -eq "GET") {
            $cmdDir = Join-Path $baseDir "command_center"
            $opProfile = Get-Content (Join-Path $cmdDir "operator_commander_profile.json") -Raw -Encoding UTF8 | ConvertFrom-Json
            $incidents = Get-Content (Join-Path $cmdDir "tactical_incidents.json") -Raw -Encoding UTF8 | ConvertFrom-Json
            $fleets = Get-Content (Join-Path $cmdDir "fleet_units.json") -Raw -Encoding UTF8 | ConvertFrom-Json
            Send-JsonResponse $response @{ success = $true; operator = $opProfile; incidents = $incidents; fleets = $fleets }
            continue
        }

        # API: Verify OTP
        if ($rawUrl -eq "/api/verify-otp" -and $method -eq "POST") {
            $reader = New-Object System.IO.StreamReader($request.InputStream, $request.ContentEncoding)
            $bodyText = $reader.ReadToEnd()
            $body = $bodyText | ConvertFrom-Json

            # OTP verification logic: accept default test OTP "123456" or any 6-digit match
            $enteredOtp = "$($body.otp)".Trim()
            if ($enteredOtp.Length -eq 6) {
                Send-JsonResponse $response @{ success = $true; message = "Mobile OTP verified successfully." }
            } else {
                Send-JsonResponse $response @{ success = $false; message = "Invalid OTP code. Please enter 6 digits." } 400
            }
            continue
        }

        # API: Register new citizen
        if ($rawUrl -eq "/api/signup" -and $method -eq "POST") {
            $reader = New-Object System.IO.StreamReader($request.InputStream, $request.ContentEncoding)
            $bodyText = $reader.ReadToEnd()
            $body = $bodyText | ConvertFrom-Json

            $firstName = "$($body.firstName)".Trim()
            $lastName = "$($body.lastName)".Trim()
            $email = "$($body.email)".Trim()
            $phone = "$($body.phone)".Trim()
            $password = "$($body.password)".Trim()

            if (-not $firstName -or -not $email -or -not $phone) {
                Send-JsonResponse $response @{ success = $false; message = "First Name, Email, and Phone are required." } 400
                continue
            }

            # Generate folder and unique citizen id
            $existingCount = (Get-ChildItem -Path $citizensDir -Directory).Count + 1
            $padIndex = "{0:D2}" -f $existingCount
            $safeName = ($firstName + "_" + $lastName).ToLower() -replace '[^a-z0-9_]', ''
            $folderName = "citizen_${padIndex}_${safeName}"
            $targetFolder = Join-Path $citizensDir $folderName
            New-Item -ItemType Directory -Path $targetFolder -Force | Out-Null

            $citId = "CIT-{0:D3}" -f $existingCount
            $fullName = "$firstName $lastName"

            # 1. profile.json
            $profile = @{
                citizenId = $citId
                fullName = $fullName
                email = $email
                phoneNumber = $phone
                assignedWard = "Ward 04 - Athwa"
                residentialAddress = "Surat, Gujarat, India"
                memberSince = (Get-Date).ToString("yyyy-MM-dd")
                kycStatus = "Verified via Mobile OTP"
                avatarInitials = ($firstName[0] + $lastName[0]).ToUpper()
                emergencyContact = "+91 98250 99999"
            }
            $profile | ConvertTo-Json -Depth 5 | Set-Content -Path (Join-Path $targetFolder "profile.json") -Encoding UTF8

            # 2. tickets.json
            $tickets = @(
                @{
                    id = "TKT-NEW-101"
                    title = "Welcome Verification & Ward Induction Ticket"
                    category = "Civic Onboarding"
                    ward = "Ward 04"
                    status = "Resolved"
                    urgency = "Low"
                    date = (Get-Date).ToString("yyyy-MM-dd")
                    upvotes = 5
                    crew = "Digital Services Cell"
                }
            )
            $tickets | ConvertTo-Json -Depth 5 | Set-Content -Path (Join-Path $targetFolder "tickets.json") -Encoding UTF8

            # 3. wallet.json
            $wallet = @{
                citizenId = $citId
                civicKarmaPoints = 100
                rewardTier = "Civic Explorer"
                tokenBalance = 50
                history = @(
                    @{
                        date = (Get-Date).ToString("yyyy-MM-dd")
                        action = "Welcome Bonus for Verified Account Creation"
                        points = 100
                    }
                )
            }
            $wallet | ConvertTo-Json -Depth 5 | Set-Content -Path (Join-Path $targetFolder "wallet.json") -Encoding UTF8

            # 4. portal_view.html
            $portalHtml = @"
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>$fullName - Citizen Profile Portal | CivicPulse</title>
  <link rel="stylesheet" href="../../styles.css">
  <style>
    body { background: #0f172a; color: #f8fafc; font-family: 'Segoe UI', system-ui, sans-serif; margin: 0; padding: 24px; }
    .portal-card { background: rgba(30, 41, 59, 0.85); border: 1px solid rgba(255, 255, 255, 0.12); border-radius: 16px; padding: 28px; max-width: 1000px; margin: 0 auto 24px; box-shadow: 0 10px 25px rgba(0,0,0,0.3); }
    .header-row { display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 20px; margin-bottom: 24px; }
    .avatar-badge { width: 56px; height: 56px; border-radius: 12px; background: linear-gradient(135deg, #10b981, #3b82f6); display: flex; align-items: center; justify-content: center; font-size: 20px; font-weight: bold; color: white; }
    .stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px; margin-bottom: 24px; }
    .stat-box { background: rgba(15, 23, 42, 0.6); padding: 18px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.08); text-align: center; }
    .stat-val { font-size: 26px; font-weight: bold; color: #38bdf8; }
    .stat-lbl { font-size: 13px; color: #94a3b8; text-transform: uppercase; margin-top: 4px; }
    .btn-back { display: inline-flex; align-items: center; gap: 8px; padding: 10px 20px; background: #2563eb; color: white; text-decoration: none; border-radius: 8px; font-weight: 600; }
  </style>
</head>
<body>
  <div class="portal-card">
    <div class="header-row">
      <div style="display:flex; align-items:center; gap: 16px;">
        <div class="avatar-badge">$($firstName[0])$($lastName[0])</div>
        <div>
          <h2 style="margin:0 0 6px 0;">$fullName</h2>
          <div style="color:#94a3b8; font-size:14px;">Ward 04 - Athwa &bull; Member Since Today &bull; <span style="color:#34d399;">Verified via Mobile OTP</span></div>
        </div>
      </div>
      <div>
        <a href="../../index.html" class="btn-back">&larr; Return to Central Hub</a>
      </div>
    </div>
    <div class="stats-grid">
      <div class="stat-box"><div class="stat-val">100</div><div class="stat-lbl">Civic Karma Points</div></div>
      <div class="stat-box"><div class="stat-val" style="color:#a855f7;">Civic Explorer</div><div class="stat-lbl">Reward Tier</div></div>
      <div class="stat-box"><div class="stat-val" style="color:#10b981;">50 CVC</div><div class="stat-lbl">Token Balance</div></div>
      <div class="stat-box"><div class="stat-val">1</div><div class="stat-lbl">Active/Filed Reports</div></div>
    </div>
    <div style="background: rgba(16, 185, 129, 0.15); border: 1px solid #10b981; border-radius: 8px; padding: 16px; margin-top: 20px;">
      <h4 style="margin: 0 0 8px 0; color: #34d399;">Welcome to Surat CivicPulse!</h4>
      <p style="margin: 0; color: #cbd5e1; font-size: 14px;">Your citizen profile has been verified and registered. You can report civic issues, track field crew progress, and earn Civic Karma points for participating in ward development.</p>
    </div>
  </div>
</body>
</html>
"@
            $portalHtml | Set-Content -Path (Join-Path $targetFolder "portal_view.html") -Encoding UTF8

            Send-JsonResponse $response @{
                success = $true
                message = "Account created successfully!"
                citizenId = $citId
                fullName = $fullName
                folder = $folderName
                portalUrl = "/citizens/$folderName/portal_view.html"
            }
            continue
        }

        # Static File Serving
        $normUrl = $rawUrl.TrimStart('/').Replace('/', '\')
        if ($normUrl -eq "" -or $normUrl -eq "index.html") {
            $targetFile = Join-Path $baseDir "index.html"
            $contentType = "text/html; charset=utf-8"
        } else {
            $targetFile = Join-Path $baseDir $normUrl
            if ($targetFile.EndsWith(".css")) { $contentType = "text/css" }
            elseif ($targetFile.EndsWith(".js")) { $contentType = "application/javascript" }
            elseif ($targetFile.EndsWith(".json")) { $contentType = "application/json; charset=utf-8" }
            elseif ($targetFile.EndsWith(".png")) { $contentType = "image/png" }
            elseif ($targetFile.EndsWith(".jpg") -or $targetFile.EndsWith(".jpeg")) { $contentType = "image/jpeg" }
            elseif ($targetFile.EndsWith(".svg")) { $contentType = "image/svg+xml" }
            else { $contentType = "text/html; charset=utf-8" }
        }

        if (Test-Path $targetFile -PathType Leaf) {
            $bytes = [System.IO.File]::ReadAllBytes($targetFile)
            $response.ContentType = $contentType
            $response.ContentLength64 = $bytes.Length
            $response.AddHeader("Access-Control-Allow-Origin", "*")
            $response.AddHeader("Cache-Control", "no-cache, no-store, must-revalidate")
            $response.OutputStream.Write($bytes, 0, $bytes.Length)
        } else {
            $response.StatusCode = 404
            $notFoundBytes = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found: $rawUrl")
            $response.OutputStream.Write($notFoundBytes, 0, $notFoundBytes.Length)
        }
        $response.OutputStream.Close()
    } catch {
        # ignore client disconnects
    }
}
