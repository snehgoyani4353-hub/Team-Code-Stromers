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

while ($listener.IsListening) {
    try {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response

        $rawUrl = $request.Url.AbsolutePath
        if ($rawUrl -eq "/" -or $rawUrl -eq "" -or $rawUrl -eq "/index.html") {
            $targetFile = Join-Path $baseDir "index.html"
            $contentType = "text/html; charset=utf-8"
        } elseif ($rawUrl -eq "/rules-and-contact.html") {
            $targetFile = Join-Path $baseDir "rules-and-contact.html"
            $contentType = "text/html; charset=utf-8"
        } else {
            $fileName = $rawUrl.TrimStart('/')
            $targetFile = Join-Path $baseDir $fileName
            if ($fileName.EndsWith(".css")) { $contentType = "text/css" }
            elseif ($fileName.EndsWith(".js")) { $contentType = "application/javascript" }
            elseif ($fileName.EndsWith(".png")) { $contentType = "image/png" }
            elseif ($fileName.EndsWith(".jpg") -or $fileName.EndsWith(".jpeg")) { $contentType = "image/jpeg" }
            else { $contentType = "text/html; charset=utf-8" }
        }

        if (Test-Path $targetFile) {
            $bytes = [System.IO.File]::ReadAllBytes($targetFile)
            $response.ContentType = $contentType
            $response.ContentLength64 = $bytes.Length
            $response.AddHeader("Access-Control-Allow-Origin", "*")
            $response.AddHeader("Cache-Control", "no-cache, no-store, must-revalidate")
            $response.OutputStream.Write($bytes, 0, $bytes.Length)
        } else {
            $targetFile = Join-Path $baseDir "index.html"
            if (Test-Path $targetFile) {
                $bytes = [System.IO.File]::ReadAllBytes($targetFile)
                $response.ContentType = "text/html; charset=utf-8"
                $response.ContentLength64 = $bytes.Length
                $response.AddHeader("Access-Control-Allow-Origin", "*")
                $response.OutputStream.Write($bytes, 0, $bytes.Length)
            } else {
                $response.StatusCode = 404
            }
        }
        $response.OutputStream.Close()
    } catch {
        # ignore client disconnects
    }
}
