/**
 * CIVICA ગુજરાત - Urban Intelligence, Gujarat Municipal & Officer Data Model
 * Municipalities: AMC (Ahmedabad), SMC (Surat), VMC (Vadodara), RMC (Rajkot), GMC (Gandhinagar)
 */

const GUJARAT_CIVIC_DATA = {
  activeCity: {
    id: "AMC",
    name: "Ahmedabad Municipal Corporation",
    shortName: "AMC Ahmedabad",
    zone: "West Zone",
    ward: "Ward 7 · Navrangpura",
    centerCoords: [23.0375, 72.5625]
  },

  cities: [
    { id: "AMC", name: "AMC Ahmedabad", gujarati: "અમદાવાદ મહાનગરપાલિકા", zone: "West Zone", ward: "Ward 7 · Navrangpura" },
    { id: "SMC", name: "SMC Surat", gujarati: "સુરત મહાનગરપાલિકા", zone: "Athwa Zone", ward: "Ward 12 · Vesu" },
    { id: "VMC", name: "VMC Vadodara", gujarati: "વડોદરા મહાનગરપાલિકા", zone: "Central Zone", ward: "Ward 4 · Alkapuri" },
    { id: "RMC", name: "RMC Rajkot", gujarati: "રાજકોટ મહાનગરપાલિકા", zone: "West Zone", ward: "Ward 9 · Kalawad Road" },
    { id: "GMC", name: "GMC Gandhinagar", gujarati: "ગાંધીનગર મહાનગરપાલિકા", zone: "Sector Zone", ward: "Sector 7 · Sachivalay" }
  ],

  // Gujarat 6 Common Issue Types
  issueTypes: [
    { id: "streetlight", name: "Streetlight", gujarati: "સ્ટ્રીટલાઈટ", icon: "💡" },
    { id: "pothole", name: "Pothole", gujarati: "ખાડા (Pothole)", icon: "🚧" },
    { id: "garbage", name: "Garbage", gujarati: "કચરો / ગંદકી", icon: "🗑️" },
    { id: "waterlogging", name: "Waterlogging", gujarati: "ચોમાસુ પાણી ભરાવ (Monsoon)", icon: "🌊" },
    { id: "brts", name: "BRTS / Bus Stop", gujarati: "બીઆરટીએસ / બસ સ્ટેન્ડ", icon: "🚌" },
    { id: "water", name: "Water Supply", gujarati: "પાણી પુરવઠો", icon: "💧" }
  ],

  // Gujarati Status Mapping
  statusMap: {
    received: { en: "Received", gu: "પ્રાપ્ત", class: "status-received" },
    assigned: { en: "Assigned", gu: "સોંપાયેલ", class: "status-assigned" },
    in_progress: { en: "In Progress", gu: "પ્રગતિમાં", class: "status-inprogress" },
    resolved: { en: "Resolved", gu: "ઉકેલાયેલ", class: "status-resolved" },
    need_info: { en: "Need Info", gu: "માહિતી જોઈએ છે", class: "status-needinfo" },
    closed: { en: "Closed", gu: "બંધ કરેલ", class: "status-closed" },
    new: { en: "New", gu: "નવી", class: "status-new" }
  },

  // Officer Profile
  officerProfile: {
    name: "R. Patel",
    title: "Ward Officer & Electrical Supervisor",
    role: "AMC Ward 7",
    department: "AMC Street Lighting & Roads",
    avatar: "RP"
  },

  // Officer Dashboard Metrics (Page 2)
  officerKPIs: {
    openTickets: 28,
    dueToday: 9,
    needCitizenReply: 6,
    resolvedThisWeek: 14
  },

  // Officer Shift Actions Checklist (Page 2)
  shiftActions: [
    { id: 1, text: "Assign 4 new tickets", done: false },
    { id: 2, text: "Send 3 citizen updates", done: false },
    { id: 3, text: "Close 2 resolved jobs", done: false },
    { id: 4, text: "Monsoon pin review (Law Garden & Underpasses)", done: false },
    { id: 5, text: "Crew 14 overtime authorization", done: false }
  ],

  // Officer Complaint Inbox List (Page 3)
  inboxTickets: [
    { id: "18492", fullId: "GJ-AMC-2026-18492", citizen: "K. Shah", issue: "Streetlight", place: "CG Road", age: "4d", status: "in_progress", statusLabel: "In progress", filterCategory: "assigned_to_me", priority: true, slaRisk: false, isMonsoon: false },
    { id: "18501", fullId: "GJ-AMC-2026-18501", citizen: "M. Joshi", issue: "Waterlogging", place: "Law Garden", age: "2h", status: "new", statusLabel: "New", filterCategory: "new", priority: true, slaRisk: false, isMonsoon: true },
    { id: "18470", fullId: "GJ-AMC-2026-18470", citizen: "A. Mehta", issue: "Pothole", place: "Ashram Road", age: "1d", status: "assigned", statusLabel: "Assigned", filterCategory: "assigned_to_me", priority: true, slaRisk: false, isMonsoon: false },
    { id: "18388", fullId: "GJ-AMC-2026-18388", citizen: "S. Rana", issue: "Garbage", place: "Pol lane 12", age: "6d", status: "need_info", statusLabel: "Need info", filterCategory: "assigned_to_me", priority: true, slaRisk: true, isMonsoon: false },
    { id: "18312", fullId: "GJ-AMC-2026-18312", citizen: "P. Desai", issue: "Water supply", place: "Naranpura", age: "3d", status: "assigned", statusLabel: "Assigned", filterCategory: "all", priority: false, slaRisk: false, isMonsoon: false },
    { id: "18290", fullId: "GJ-AMC-2026-18290", citizen: "R. Vyas", issue: "BRTS stop", place: "Iskcon", age: "5d", status: "in_progress", statusLabel: "In progress", filterCategory: "all", priority: false, slaRisk: true, isMonsoon: false }
  ],

  // Civic Anti-Spam Wallet & Security Deposit State
  citizenWallet: {
    balance: 150.00,
    currency: "₹",
    depositFee: 50.00,
    transactions: [
      { id: "TX-9821", type: "credit", title: "Initial Civic Top-up", amount: 150.00, date: "10 Sep 2026", method: "FamPay UPI", status: "completed" },
      { id: "TX-9822", type: "held", title: "Security Deposit (Escrow) · #18492 Streetlight", amount: 50.00, date: "12 Sep 2026", method: "Civic Wallet", status: "held", ticketId: "GJ-AMC-2026-18492" }
    ]
  },

  // Detailed Complaints Model (Linked between Citizen & Officer)
  complaints: [
    {
      id: "GJ-AMC-2026-18492",
      shortId: "18492",
      citizen: "K. Shah",
      citizenPhone: "98765 43210",
      title: "Streetlight out — CG Road, Navrangpura",
      type: "streetlight",
      categoryName: "Streetlight",
      categoryGu: "સ્ટ્રીટલાઈટ",
      location: "CG Road, Navrangpura",
      distance: "120 m",
      ward: "Ward 7",
      zone: "West Zone",
      agency: "AMC Street Lighting",
      status: "in_progress",
      depositAmount: 50,
      depositStatus: "held", // 'held' | 'refunded' | 'forfeited'
      depositMethod: "Civic Wallet",
      depositTxId: "ESC-18492",
      filedDate: "12 Sep 2026",
      dueDate: "20 Sep 2026",
      slaDate: "20 Sep",
      assignedCrew: "Street Lighting Crew 14 — West Zone",
      note: "AMC electrical crew inspected the pole near Law Garden crossing. Replacement fixture arrives 19 Sep. You will get a Gujarati SMS when the light is back on. — R. Patel",
      steps: [
        { label: "Received", labelGu: "પ્રાપ્ત", date: "12 Sep 10:14", completed: true },
        { label: "Assigned", labelGu: "સોંપાયેલ", date: "13 Sep Crew 14", completed: true },
        { label: "In progress", labelGu: "પ્રગતિમાં", date: "16 Sep Fixture", completed: true, active: true },
        { label: "Resolved", labelGu: "ઉકેલાયેલ", date: "Due 20 Sep", completed: false }
      ],
      photoUrl: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "GJ-AMC-2026-18501",
      shortId: "18501",
      citizen: "M. Joshi",
      citizenPhone: "98251 12345",
      title: "Monsoon Waterlogging · Law Garden subway",
      type: "waterlogging",
      categoryName: "Waterlogging",
      categoryGu: "પાણી ભરાવ",
      location: "Law Garden underpass",
      distance: "400 m",
      ward: "Ward 7",
      zone: "West Zone",
      agency: "AMC Storm Water Drainage",
      status: "new",
      filedDate: "Today 08:30",
      dueDate: "Today 18:00",
      slaDate: "Today",
      assignedCrew: "Pending Assignment",
      note: "New monsoon waterlogging alert flagged by resident. Dewatering tractor pump request generated.",
      steps: [
        { label: "Received", labelGu: "પ્રાપ્ત", date: "Today 08:30", completed: true, active: true },
        { label: "Assigned", labelGu: "સોંપાયેલ", date: "Pending", completed: false },
        { label: "In progress", labelGu: "પ્રગતિમાં", date: "Pending", completed: false },
        { label: "Resolved", labelGu: "ઉકેલાયેલ", date: "Due Today", completed: false }
      ],
      photoUrl: "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "GJ-AMC-2026-18470",
      shortId: "18470",
      citizen: "A. Mehta",
      citizenPhone: "98980 98765",
      title: "Deep Pothole on Commuter Lane · Ashram Road",
      type: "pothole",
      categoryName: "Pothole",
      categoryGu: "ખાડો",
      location: "Ashram Road · near Vadaj Circle",
      distance: "240 m",
      ward: "Ward 7",
      zone: "West Zone",
      agency: "AMC Road Project Dept",
      status: "assigned",
      filedDate: "Yesterday",
      dueDate: "Tomorrow",
      slaDate: "19 Sep",
      assignedCrew: "Road Maintenance Crew 08",
      note: "Assigned to Crew 08. Cold-mix patch truck scheduled for night shift deployment.",
      steps: [
        { label: "Received", labelGu: "પ્રાપ્ત", date: "Yesterday 09:30", completed: true },
        { label: "Assigned", labelGu: "સોંપાયેલ", date: "Yesterday 14:00 Crew 08", completed: true, active: true },
        { label: "In progress", labelGu: "પ્રગતિમાં", date: "Scheduled tonight", completed: false },
        { label: "Resolved", labelGu: "ઉકેલાયેલ", date: "Due 19 Sep", completed: false }
      ],
      photoUrl: "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "GJ-AMC-2026-18388",
      shortId: "18388",
      citizen: "S. Rana",
      citizenPhone: "97123 45678",
      title: "Bulk Garbage in Pol lane 12",
      type: "garbage",
      categoryName: "Garbage",
      categoryGu: "કચરો",
      location: "Pol lane 12, Navrangpura",
      distance: "350 m",
      ward: "Ward 7",
      zone: "West Zone",
      agency: "AMC Solid Waste",
      status: "need_info",
      filedDate: "6 days ago",
      dueDate: "Overdue (SLA Risk)",
      slaDate: "15 Sep",
      assignedCrew: "Sanitation Supervisor Vyas",
      note: "AMC supervisor visited the lane. Commercial gate was locked. Requested citizen to provide phone of gatekeeper or night access time.",
      steps: [
        { label: "Received", labelGu: "પ્રાપ્ત", date: "6d ago", completed: true },
        { label: "Assigned", labelGu: "સોંપાયેલ", date: "5d ago", completed: true },
        { label: "Need Info", labelGu: "માહિતી જોઈએ છે", date: "Waiting on resident", completed: true, active: true },
        { label: "Resolved", labelGu: "ઉકેલાયેલ", date: "Pending", completed: false }
      ],
      photoUrl: "https://images.unsplash.com/photo-1605600659873-d808a13e4d2a?auto=format&fit=crop&w=600&q=80"
    }
  ],

  // Ready Report Message Templates (Page 5)
  reportTemplates: {
    parts_ordered: {
      title: "Parts ordered",
      subtext: "Give expected date",
      gu: "નમસ્તે {citizen},\n\nAMC વોર્ડ 7 એ તમારી {issue} ફરિયાદ {id} તપાસી છે. નવી ફિક્સચર 19 સપ્ટેમ્બરે આવશે. લાઇટ ચાલુ થાય ત્યારે SMS આવશે.\n\n— {officer}, AMC Street Lighting",
      en: "Namaste {citizen},\n\nAMC Ward 7 inspected your {issue} complaint {id}. Replacement parts ordered, expected on 19 Sep. You will receive an SMS when service is restored.\n\n— {officer}, AMC Street Lighting"
    },
    work_started: {
      title: "Work started",
      subtext: "Crew reached the site",
      gu: "નમસ્તે {citizen},\n\nAMC ફિલ્ડ ક્રૂ 14 તમારી {issue} ફરિયાદ {id} પર CG Road પહોંચી ગઈ છે અને કામગીરી શરૂ કરી દીધી છે.\n\n— {officer}, AMC Ward 7",
      en: "Namaste {citizen},\n\nAMC Field Crew 14 has arrived on site for your {issue} complaint {id} and repair work has commenced.\n\n— {officer}, AMC Ward 7"
    },
    need_photo: {
      title: "Need photo",
      subtext: "Ask citizen for more",
      gu: "નમસ્તે {citizen},\n\nતમારી ફરિયાદ {id} ની ઝડપી તપાસ માટે કૃપા કરીને પોલ નંબર અથવા રાત્રિ સમયનો ફોટો અપલોડ કરવા વિનંતી છે.\n\n— {officer}, AMC Ward 7",
      en: "Namaste {citizen},\n\nTo expedite your complaint {id}, please upload a clear night photo showing the pole identification plate.\n\n— {officer}, AMC Ward 7"
    },
    resolved: {
      title: "Resolved",
      subtext: "Light is working",
      gu: "નમસ્તે {citizen},\n\nતમારી {issue} ફરિયાદ {id} સફળતાપૂર્વક પૂર્ણ થઈ ગઈ છે. લાઇટ કાર્યરત છે. જો હજુ કોઈ સમસ્યા હોય તો તમે 7 દિવસમાં ફરિયાદ ફરી ખોલી શકો છો.\n\n— {officer}, AMC Ward 7",
      en: "Namaste {citizen},\n\nYour {issue} complaint {id} has been resolved and verified by supervisor. If issue persists, you may reopen within 7 days.\n\n— {officer}, AMC Ward 7"
    },
    not_municipal: {
      title: "Not municipal",
      subtext: "Send to GEB / police",
      gu: "નમસ્તે {citizen},\n\nઆ પોલ UGVCL/GEB હાઇ-ટેન્શન લાઇન સાથે જોડાયેલ છે. ફરિયાદ વીજ કંપની હેલ્પલાઇન 19122 પર ફોરવર્ડ કરવામાં આવી છે.\n\n— {officer}, AMC Ward 7",
      en: "Namaste {citizen},\n\nThis infrastructure falls under the state electricity board (UGVCL). Your report has been routed to Helpline 19122.\n\n— {officer}, AMC Ward 7"
    }
  },

  // Ward 7 Public Weekly Report (Page 7)
  wardWeeklyReport: {
    ward: "Ward 7",
    period: "This week Ward 7",
    summary: {
      filed: 41,
      resolved: 33,
      open: 8,
      acknowledgedPct: "98%"
    },
    topIssues: [
      { name: "Streetlights", count: 14 },
      { name: "Potholes", count: 9 },
      { name: "Waterlogging", count: 7 },
      { name: "SWM (Solid Waste)", count: 6 }
    ],
    citizenUpdates: {
      total: 52,
      gujaratiMessages: 52,
      whatsapp: 40,
      smsOnly: 12
    },
    slaWatch: {
      nearBreach: 2,
      assignedCrew: "Both assigned to Crew 14"
    }
  },

  // BRTS / Metro Information
  transit: [
    { id: "brts-janmarg", name: "Janmarg Green Line (BRTS)", nameGu: "જનમાર્ગ ગ્રીન લાઇન (BRTS)", status: "on time", eta: "4 min", corridor: "RTO Circle ↔ Maninagar via CG Road", crowd: "Normal (55%)" },
    { id: "metro-ahmedabad", name: "Ahmedabad Metro (North-South)", nameGu: "અમદાવાદ મેટ્રો", status: "on time", eta: "7 min", corridor: "APMC → Old High Court", crowd: "Moderate (65%)" },
    { id: "gsrtc-bus", name: "GSRTC Intercity 18:40", nameGu: "જીએસઆરટીસી ઇન્ટરસિટી", status: "Boarding", eta: "18:40", corridor: "Geeta Mandir stand → Vadodara", crowd: "High Load" }
  ]
};

window.GUJARAT_CIVIC_DATA = GUJARAT_CIVIC_DATA;
