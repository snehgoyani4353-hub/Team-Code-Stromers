/**
 * CIVICA ગુજરાત - Master Application Controller
 * Unifies Landing Page, Citizen Portal ("Normal Dashboard"), Municipal Officer Portal, and Tactical Command Center
 */

const I18N_DATA = {
  en: {
    nav_home: "HOME",
    nav_about: "ABOUT US",
    nav_contact: "RULES & CONTACT",
    nav_solutions: "SOLUTIONS",
    nav_services: "SERVICES",
    btn_member_login: "MEMBER LOGIN",
    hero_title: "Civic Engagement &<br>Urban Mobility",
    hero_bullet_1: "Citizen-centered software that turns neighborhood reports into action.",
    hero_bullet_2: "Live community dashboards for infrastructure, safety, and transit flow.",
    hero_bullet_3: "Mobile tools that make public commuting clearer, faster, and fairer.",
    btn_hero_citizen: "Access Citizen Portal &rarr;",
    btn_hero_officer: "Municipal Officer Sign-In",
    btn_hero_command: "Launch Command Center 🛰️",
    dash_back_home: "&larr; Back to Civica Home",
    dash_signed_citizen: "Signed in as Citizen",
    dash_service_badge: "Gujarat Citizen Service",
    gallery_title: "OUR PROJECT GALLERY & CIVIC INITIATIVES",
    gallery_subtitle: "Explore live municipal projects, intelligent transit corridors, rapid pothole resurfacing fleets, and automated command operations across Gujarat.",
    filter_all: "All Projects (All)",
    filter_transit: "🚍 Smart Transit & BRTS",
    filter_roads: "🛣️ Roads & Potholes",
    filter_sanitation: "♻️ Cleanliness & Waste",
    filter_utilities: "💡 Lighting & Water SCADA",
    filter_tech: "🖥️ Command & Control",
    carousel_back: "Back",
    carousel_front: "Front",
    banner_rules_title: "📜 Citizen Civic Charter & Emergency Helplines Directory",
    banner_rules_desc: "Read about our mandatory SLA timelines, 100% refundable ₹50 escrow policy, and get direct contact numbers for AMC 24x7 control rooms and zonal offices.",
    banner_rules_btn: "View Rules, Regulations & Contact Numbers &rarr;",
    services_heading: "OUR PLATFORM SERVICES",
    service_title_1: "Civic Feedback Hub",
    service_desc_1: "Crowdsource neighborhood reports on broken infrastructure, delays, and safety risks.",
    service_title_2: "Community Dashboards",
    service_desc_2: "Live maps of civic issues, service SLAs, and neighborhood trendlines.",
    service_title_3: "Urban Mobility Apps",
    service_desc_3: "Multimodal routing, delay alerts, and first-to-last-mile commute planning.",
    service_title_4: "Transit Optimization",
    service_desc_4: "Demand-responsive scheduling and corridor performance analytics.",
    service_title_5: "Safety Networks",
    service_desc_5: "Verified incident sharing and neighborhood alert channels for residents.",
    service_title_6: "Tactical Command Center",
    service_desc_6: "Real-time geospatial dispatch, emergency broadcasts, and multi-department triage.",
    about_heading: "ABOUT US & OUR MISSION",
    about_intro_text: "Empowering Gujarat's urban future through citizen engagement, resilient public infrastructure, and cutting-edge municipal technology.",
    mv_mission_tag: "OUR MISSION",
    mv_mission_title: "Empower Innovators & Urban Infrastructure",
    mv_mission_desc: "To empower developers, designers, and innovators to build scalable, technology-driven solutions that address critical urban challenges, improve public infrastructure, and enhance the overall quality of life for city residents.",
    mv_vision_tag: "OUR VISION",
    mv_vision_title: "Connected, Resilient Urban Ecosystem",
    mv_vision_desc: "To create a connected, sustainable, and inclusive urban ecosystem where smart technology seamlessly improves everyday life, fosters economic growth, and builds resilient communities for the future.",
    why_heading: "WHY CHOOSE CIVICA",
    pillar_title_1: "Citizen-First Design",
    pillar_desc_1: "Simple reporting, visible progress, ₹50 refundable escrow protection, and real replies from officers.",
    pillar_title_2: "Urban Intelligence",
    pillar_desc_2: "We blend open city data with live mobility signals so administrators see problems as neighborhoods feel them.",
    pillar_title_3: "Trusted Delivery",
    pillar_desc_3: "Transparent SLAs, audited issue trails, and dedicated municipal success teams keep programs on schedule.",
    track_heading: "OUR TRACK RECORD",
    stat_label_1: "NEIGHBORHOODS LIVE",
    stat_label_2: "ISSUE ACKNOWLEDGEMENT",
    footer_tagline: "Civic Engagement & Premier Urban Mobility Software.",
    footer_copy: "&copy; 2026 Civica Civic Systems & Ahmedabad Municipal Corporation. All rights reserved.",
    auth_modal_title: "Member Portal Sign-In",
    auth_modal_sub: "Choose your portal role or use a 1-click demo account below",
    demo_box_title: "1-Click Direct Demo Login",
    demo_box_sub: "Access full portal features immediately without entering credentials:",
    demo_role_citizen: "CITIZEN RESIDENT",
    demo_name_citizen: "Priya Patel (Citizen)",
    demo_role_officer: "AMC OFFICER",
    demo_name_officer: "R. Patel (Ward Officer)",
    demo_role_command: "COMMAND CENTER",
    demo_name_command: "Cmdr. V. Rathore",
    auth_tab_citizen: "Citizen Resident",
    auth_tab_officer: "Municipal Officer",
    auth_tab_command: "Command Center",
    auth_btn_google: "Continue with Google / Gmail",
    auth_divider_or: "or Resident Email",
    auth_lbl_email: "Resident Email / Phone",
    auth_lbl_pass: "Password",
    auth_btn_submit: "Sign In to Citizen Dashboard &rarr;",
    btn_autofill_demo: "⚡ Auto-Fill Demo Credentials",
    auth_create_prompt: "New to CIVICA or need a citizen account?",
    auth_btn_create: "Create New Account",
    tab_track: "🔍 Track Complaint",
    tab_report: "📝 Register Complaint",
    tab_wallet: "👛 Civic Wallet",
    tab_address: "📍 My Addresses",
    tab_wardmap: "📍 My Addresses",
    tab_community: "📢 Community Feed",
    tab_transit: "🚍 Transit Flow",
    tab_rules_dir: "📜 Rules & SLAs",
    dt_report_title: "Register a Civic Complaint",
    dt_report_sub: "Direct dispatch to AMC & SMC Ward Control Rooms & Rapid Response Units",
    dt_step1_label: "1. Select Issue Category",
    dt_step2_label: "2. Exact Incident Location",
    dt_step3_label: "3. Description & Evidence",
    dt_cat_streetlight: "Streetlight",
    dt_cat_streetlight_sub: "Dark pole, faulty fixture",
    dt_cat_pothole: "Road Pothole",
    dt_cat_pothole_sub: "Damaged asphalt, road crater",
    dt_cat_garbage: "Garbage & Waste",
    dt_cat_garbage_sub: "Uncleared solid waste or bin overflow",
    dt_cat_waterlogging: "Waterlogging",
    dt_cat_waterlogging_sub: "Monsoon drain blockage, road flooding",
    dt_cat_water: "Water Supply",
    dt_cat_water_sub: "Contamination, burst pipeline, low pressure",
    dt_cat_others: "Others",
    dt_cat_others_sub: "Specify custom issue or problem",
    dt_custom_prompt: "Type Your Specific Problem / Grievance:",
    dt_custom_badge: "Custom Category",
    dt_custom_help: "Please type the details of your problem so AMC dispatchers can classify it.",
    dt_custom_routed: "✓ Routed to Ward Rapid Triage Desk",
    dt_location_confirmed: "📍 GPS Tagged: Ward 7 Navrangpura (Coordinates confirmed)",
    btn_attach_photo: "📷 Attach Photo",
    escrow_pill_label: "🛡️ Anti-Spam Security Escrow",
    dt_escrow_title: "₹50 Refundable Security Deposit",
    dt_escrow_desc: "To eliminate prank reports, ₹50 is temporarily held in municipal escrow until AMC inspection verifies real civic issue.",
    lbl_wallet_bal: "Your Civic Wallet:",
    dt_wallet_option: "Civic Wallet (Instant)",
    dt_online_option: "Pay Online (UPI / Paytm / FamPay / Cards)",
    dt_btn_submit: "Pay ₹50 Escrow & Submit Complaint &rarr;",
    track_page_title: "Track Complaint",
    track_placeholder: "Enter Complaint ID (e.g. 18492, 18501, 18470)",
    track_btn: "TRACK COMPLAINT",
    latest_note_title: "Latest Official Field Note",
    btn_upload_photo: "📷 Upload Inspection Photo",
    btn_reopen: "Reopen Complaint",
    side_escrow_title: "100% Refundable Escrow Guarantee",
    side_escrow_desc: "₹50 deposit held in municipal escrow to eliminate prank reports. Auto-refunded 100% to wallet upon engineer site verification.",
    side_sms_title: "Real-Time SMS & WhatsApp Alerts",
    side_sms_desc: "Automated status notifications dispatched directly to your mobile in English & Gujarati as field crews progress.",
    side_support_title: "AMC Ward 7 Navrangpura Desk",
    side_support_desc: "Navrangpura Zonal Office • Shift: 08:00 - 16:00<br>Central Helplines: <strong>155303 / 1913</strong>",
    dt_wallet_header_title: "Civic Wallet & Anti-Spam Escrow",
    dt_wallet_header_sub: "Transparent municipal deposit holding and instant citizen refund account",
    dt_btn_add_funds: "+ Add Funds / Top Up",
    floating_ai_btn: "AI Assistant",
    ai_popup_title: "Civica AI Assistant",
    ai_popup_sub: "Gemini & ChatGPT Core • AMC 24x7",
    ai_input_placeholder: "Ask your doubt about tickets, refunds, or AMC...",
    lightbox_metrics_title: "Civic Metrics & Impact",
    btn_close: "Close",
    btn_acknowledged: "✓ Acknowledged &rarr;",
    auth_lbl_corp: "Municipal Corporation",
    auth_lbl_officer_email: "Officer Gov Email",
    auth_lbl_pin: "Security PIN / Access Code",
    auth_btn_officer_submit: "Authenticate Officer Portal &rarr;",
    auth_command_banner: "🛡️ <strong>Restricted Security Clearance:</strong> Access to Gujarat Integrated Command & Control Centre (ICCC) requires Tier-1 authorization and passcode.",
    auth_lbl_command_agency: "Command Agency / Station",
    auth_lbl_command_email: "Commander Official Gov Email",
    auth_lbl_command_pass: "Command Security Passcode / Key",
    auth_btn_command_submit: "Authenticate Tactical Command Center &rarr;",
    btn_autofill_commander: "⚡ Auto-Fill Commander Credentials",
    wallet_card_label: "Anti-Spam Escrow Balance",
    wallet_badge_verified: "Verified Citizen",
    btn_wallet_add: "+ Add Money",
    btn_wallet_subtext: "₹50 held per complaint &bull; Auto-refunded upon inspection",
    wallet_guarantee_title: "💡 100% Refundable Civic Security Guarantee",
    wallet_guarantee_desc: "To prevent fake calls, complaints require a nominal ₹50 security deposit held in municipal escrow. When AMC inspects real issues, ₹50 is instantly refunded to your wallet.",
    wallet_guarantee_stat: "Over 99.4% of genuine reports refunded within 24 hours.",
    wallet_ledger_title: "Transaction & Escrow Ledger",
    feed_page_title: "Community Incident Feed & Voting",
    feed_page_sub: "Crowdsourced hazard verification and citizen confirmation stream",
    feed_filter_all: "All Reports",
    feed_filter_trending: "🔥 Trending",
    feed_filter_critical: "🚨 Critical",
    feed_filter_resolved: "✓ Resolved",
    crowd_reward_title: "🤝 Crowdsource Verification Reward",
    crowd_reward_desc: "Tap <strong>\"Confirm\"</strong> on any incident you observe in your neighborhood. Confirmations assist AMC dispatchers in prioritizing field units and earn you <strong>+2 Civic Karma</strong>.",
    rules_tab_title: "Citizen Charter, SLAs & 24x7 Helplines",
    rules_tab_sub: "Mandatory resolution timelines under Gujarat GPMC Act",
    rules_btn_open_page: "Open Standalone Page ↗",
    hotline_amc_title: "AMC Central Control Room (24x7)",
    hotline_monsoon_title: "Monsoon Flood & Waterlogging",
    hotline_allindia_title: "All-India Emergency & Police",
    sla_table_title: "Mandatory SLA Timelines (Gujarat Municipal Corporations Act)",
    escrow_transparency_title: "🛡️ ₹50 Refundable Security Escrow Transparency",
    escrow_transparency_desc: "A refundable deposit of ₹50 is temporarily held in municipal escrow when filing a complaint to prevent bot spam and false reports. The entire ₹50 deposit is instantly credited back to your Civica Wallet as soon as the assigned municipal engineer verifies the photo and geo-location on site.",
    escrow_transparency_stat: "Over 99.4% of all citizen escrow deposits are refunded within 24 hours. Your civic participation is safe and protected.",
    of_portal_badge: "AMC OFFICER CONSOLE",
    of_nav_dashboard: "01 Dashboard",
    of_nav_inbox: "02 Inbox",
    of_nav_action: "03 Take action",
    of_nav_notify: "04 Notify & Ratings ⭐",
    of_nav_reports: "05 Resolution Reports",
    of_headline_dashboard: "Today in Ward 7, AMC Ahmedabad",
    of_kpi_open: "Open tickets",
    of_kpi_due: "Due today",
    of_kpi_reply: "Need citizen reply",
    of_kpi_resolved: "Resolved this week",
    of_priority_queue: "Priority Queue",
    of_shift_actions: "Shift Actions Checklist",
    of_add_action: "➕ Add Action",
    of_inbox_headline: "Review What Citizens Filed",
    of_action_headline: "Open Complaint & Decide Next Step",
    of_select_problem_lbl: "📋 Select Problem / Ticket:",
    of_assign_crew_lbl: "Assign crew",
    of_status_pipeline_lbl: "Status Pipeline",
    of_escrow_title: "🛡️ Citizen Anti-Spam Security Escrow",
    of_escrow_desc: "Citizen deposited ₹50 refundable security escrow. If real hazard, click to verify and immediately refund ₹50 to their wallet.",
    of_btn_verify_refund: "✅ Verify Real Issue & Refund ₹50",
    of_btn_flag_fake: "❌ Flag Fake / Prank & Forfeit",
    of_quick_decide: "Quick Decide",
    btn_qd_assign: "ASSIGN CREW",
    btn_qd_progress: "IN PROGRESS",
    btn_qd_needinfo: "NEED INFO",
    btn_qd_resolve: "RESOLVE + REFUND",
    cmd_radar_title: "Live Geospatial Problem Radar & Mobile Fleets",
    cmd_radar_sub: "Interactive GPS coordinates of active potholes, flooded underpasses, dark streetlights, and dispatched municipal squads.",
    cmd_kanban_title: "Tactical Triage & Dispatch Kanban",
    cmd_kanban_sub: "Live tracking of multi-agency field dispatches",
    cmd_lane_triage: "<i class=\"fa-solid fa-triangle-exclamation\" style=\"color:#ef4444;\"></i> 01 Emergency Triage",
    cmd_lane_dispatched: "<i class=\"fa-solid fa-truck-fast\" style=\"color:#38bdf8;\"></i> 02 Dispatched & Transit",
    cmd_lane_onsite: "<i class=\"fa-solid fa-wrench\" style=\"color:#f59e0b;\"></i> 03 On-Site Remediation",
    cmd_lane_resolved: "<i class=\"fa-solid fa-check-double\" style=\"color:#10b981;\"></i> 04 Finish & Resolved"
  },
  gu: {
    nav_home: "મુખ્ય પેજ",
    nav_about: "અમારા વિશે",
    nav_contact: "નિયમો અને સંપર્ક",
    nav_solutions: "ઉકેલો",
    nav_services: "સેવાઓ",
    btn_member_login: "સભ્ય પ્રવેશ",
    hero_title: "નાગરિક સહભાગિતા અને<br>શહેરી ગતિશીલતા",
    hero_bullet_1: "નાગરિક-કેન્દ્રિત સિસ્ટમ જે સ્થાનિક ફરિયાદોને તાત્કાલિક ઉકેલમાં ફેરવે છે.",
    hero_bullet_2: "મૂળભૂત માળખાકીય સુવિધા, સલામતી અને ટ્રાફિક વ્યવસ્થા માટે લાઈવ ડેશબોર્ડ.",
    hero_bullet_3: "જાહેર પરિવહન અને નાગરિક સુવિધાઓને સરળ, ઝડપી અને પારદર્શક બનાવતા સાધનો.",
    btn_hero_citizen: "નાગરિક પોર્ટલ શરૂ કરો &rarr;",
    btn_hero_officer: "મ્યુનિસિપલ અધિકારી પ્રવેશ",
    btn_hero_command: "કમાન્ડ સેન્ટર શરૂ કરો 🛰️",
    dash_back_home: "&larr; મુખ્ય પેજ પર પાછા જાઓ",
    dash_signed_citizen: "નાગરિક તરીકે પ્રવેશ કરેલ છે",
    dash_service_badge: "ગુજરાત નાગરિક સેવા",
    gallery_title: "અમારી પ્રોજેક્ટ ગેલેરી અને નાગરિક પહેલ",
    gallery_subtitle: "સમગ્ર ગુજરાતમાં લાઈવ મ્યુનિસિપલ પ્રોજેક્ટ્સ, સ્માર્ટ ટ્રાન્ઝિટ કોરિડોર, ઝડપી રોડ રિપેરિંગ ફ્લીટ અને કમાન્ડ કંટ્રોલ સેન્ટરની કામગીરી જુઓ.",
    filter_all: "બધા પ્રોજેક્ટ્સ (All)",
    filter_transit: "🚍 સ્માર્ટ ટ્રાન્ઝિટ અને BRTS",
    filter_roads: "🛣️ રસ્તા અને ખાડા સમારકામ",
    filter_sanitation: "♻️ સ્વચ્છતા અને કચરા વ્યવસ્થા",
    filter_utilities: "💡 લાઇટિંગ અને વોટર SCADA",
    filter_tech: "🖥️ કમાન્ડ અને કંટ્રોલ સેન્ટર",
    carousel_back: "પાછળ",
    carousel_front: "આગળ",
    banner_rules_title: "📜 નાગરિક સિવિક ચાર્ટર અને ઇમરજન્સી હેલ્પલાઇન ડિરેક્ટરી",
    banner_rules_desc: "અમારી ફરજિયાત SLA સમયમર્યાદા, ૧૦૦% રિફંડેબલ ₹૫૦ એસ્ક્રો નીતિ વાંચો અને AMC ૨૪x૭ કંટ્રોલ રૂમના સીધા સંપર્ક નંબર મેળવો.",
    banner_rules_btn: "નિયમો, શરતો અને સંપર્ક નંબરો જુઓ &rarr;",
    services_heading: "અમારી પ્લેટફોર્મ સેવાઓ",
    service_title_1: "નાગરિક પ્રતિસાદ કેન્દ્ર",
    service_desc_1: "તૂટેલા રસ્તા, સ્ટ્રીટલાઇટ કે સફાઈ જેવી સમસ્યાઓ અંગે નાગરિકો દ્વારા સીધો અહેવાલ.",
    service_title_2: "સામુદાયિક ડેશબોર્ડ",
    service_desc_2: "નાગરિક ફરિયાદો, નિવારણ સમય અને વોર્ડ પ્રમાણે પારદર્શક લાઈવ નકશા.",
    service_title_3: "શહેરી મોબિલિટી એપ",
    service_desc_3: "બસ ટ્રેકિંગ, વિલંબ ચેતવણી અને સરળ જાહેર મુસાફરી આયોજન.",
    service_title_4: "ટ્રાન્ઝિટ ઑપ્ટિમાઇઝેશન",
    service_desc_4: "માંગ અનુસાર બસ શેડ્યુલિંગ અને ટ્રાફિક કોરિડોર કામગીરી વિશ્લેષણ.",
    service_title_5: "સુરક્ષા નેટવર્ક",
    service_desc_5: "વિસ્તારના રહીશો માટે સુરક્ષા એલર્ટ અને ચકાસાયેલ માહિતી ચેનલો.",
    service_title_6: "કમાન્ડ એન્ડ કંટ્રોલ સેન્ટર",
    service_desc_6: "રીયલ-ટાઇમ જીપીએસ ડિસ્પેચ, કટોકટી પ્રસારણ અને તાત્કાલિક ફિલ્ડ ટીમો.",
    about_heading: "અમારા વિશે અને અમારું મિશન",
    about_intro_text: "નાગરિક સહભાગિતા, સ્થિતિસ્થાપક જાહેર માળખાકીય સુવિધાઓ અને અદ્યતન મ્યુનિસિપલ ટેકનોલોજી દ્વારા ગુજરાતના શહેરી ભવિષ્યનું નિર્માણ.",
    mv_mission_tag: "અમારું મિશન",
    mv_mission_title: "નવીનતાકારો અને શહેરી ઇન્ફ્રાસ્ટ્રક્ચરનું સશક્તિકરણ",
    mv_mission_desc: "ડેવલપર્સ, ડિઝાઇનર્સ અને નવીનતાકારોને સ્કેલેબલ, ટેકનોલોજી-સંચાલિત ઉકેલો બનાવવા માટે સશક્ત કરવા જે મહત્વપૂર્ણ શહેરી પડકારોનો સામનો કરે, જાહેર ઇન્ફ્રાસ્ટ્રક્ચરમાં સુધારો કરે અને શહેરના રહેવાસીઓના જીવનની એકંદર ગુણવત્તામાં વધારો કરે.",
    mv_vision_tag: "અમારું વિઝન",
    mv_vision_title: "સંકળાયેલ, ટકાઉ અને સ્થિતિસ્થાપક શહેરી ઇકોસિસ્ટમ",
    mv_vision_desc: "એક જોડાયેલ, ટકાઉ અને સર્વસમાવેશક શહેરી ઇકોસિસ્ટમ બનાવવું જ્યાં સ્માર્ટ ટેકનોલોજી રોજિંદા જીવનમાં સરળતાથી સુધારો કરે, આર્થિક વિકાસને પ્રોત્સાહન આપે અને ભવિષ્ય માટે સ્થિતિસ્થાપક સમુદાયોનું નિર્માણ કરે.",
    why_heading: "સિવિકા શા માટે પસંદ કરવી",
    pillar_title_1: "નાગરિક-પ્રથમ અભિગમ",
    pillar_desc_1: "સરળ ફરિયાદ નોંધણી, લાઈવ પ્રગતિ, ₹૫૦ સુરક્ષા એસ્ક્રો રિફંડ અને અધિકારીઓના સીધા જવાબો.",
    pillar_title_2: "શહેરી ઇન્ટેલિજન્સ",
    pillar_desc_2: "અમે લાઈવ સેન્સર અને ડેટાનો સમન્વય કરીએ છીએ જેથી અધિકારીઓને સમસ્યાઓ તાત્કાલિક દેખાય.",
    pillar_title_3: "વિશ્વસનીય અમલીકરણ",
    pillar_desc_3: "પારદર્શક સમયમર્યાદા, ઓડિટ ટ્રેક અને સમર્પિત મ્યુનિસિપલ ટીમો કામગીરી સમયસર રાખે છે.",
    track_heading: "અમારો અત્યાર સુધીનો રેકોર્ડ",
    stat_label_1: "વિસ્તારો સક્રિય",
    stat_label_2: "સમસ્યા સ્વીકૃતિ દર",
    footer_tagline: "નાગરિક સહભાગિતા અને અગ્રણી શહેરી મોબિલિટી સોફ્ટવેર.",
    footer_copy: "&copy; ૨૦૨૬ સિવિકા સિવિક સિસ્ટમ્સ અને અમદાવાદ મ્યુનિસિપલ કોર્પોરેશન. સર્વાધિકાર સુરક્ષિત.",
    auth_modal_title: "સભ્ય પોર્ટલ પ્રવેશ",
    auth_modal_sub: "આપની પોર્ટલ ભૂમિકા પસંદ કરો અથવા નીચે આપેલ ૧-ક્લિક ડેમો પસંદ કરો",
    demo_box_title: "૧-ક્લિક સીધો ડેમો પ્રવેશ (પાસવર્ડ વગર)",
    demo_box_sub: "પાસવર્ડ વગર સીધા પોર્ટલમાં પ્રવેશવા માટે નીચે આપેલ એકાઉન્ટ પસંદ કરો:",
    demo_role_citizen: "નાગરિક રહીશ",
    demo_name_citizen: "પ્રિયા પટેલ (નાગરિક)",
    demo_role_officer: "AMC અધિકારી",
    demo_name_officer: "આર. પટેલ (વોર્ડ અધિકારી)",
    demo_role_command: "કમાન્ડ સેન્ટર",
    demo_name_command: "કમાન્ડર વી. રાઠોડ",
    auth_tab_citizen: "નાગરિક રહીશ",
    auth_tab_officer: "મ્યુનિસિપલ અધિકારી",
    auth_tab_command: "કમાન્ડ સેન્ટર",
    auth_btn_google: "ગૂગલ / જીમેલ સાથે ચાલુ રાખો",
    auth_divider_or: "અથવા ઈમેલ / ફોન નંબર",
    auth_lbl_email: "રહીશ ઈમેલ અથવા ફોન નંબર",
    auth_lbl_pass: "પાસવર્ડ",
    auth_btn_submit: "નાગરિક ડેશબોર્ડમાં પ્રવેશ કરો &rarr;",
    btn_autofill_demo: "⚡ ડેમો આઈડી/પાસવર્ડ ઓટો-ભરો",
    auth_create_prompt: "સિવિકામાં નવા છો કે નાગરિક એકાઉન્ટ જોઈએ છે?",
    auth_btn_create: "નવું એકાઉન્ટ બનાવો",
    tab_track: "🔍 ફરિયાદ ટ્રેક કરો",
    tab_report: "📝 નવી ફરિયાદ નોંધાવો",
    tab_wallet: "👛 નાગરિક વૉલેટ",
    tab_address: "📍 સાચવેલા સરનામા",
    tab_wardmap: "🗺️ વોર્ડ નકશો",
    tab_community: "📢 નાગરિક ફીડ",
    tab_transit: "🚍 ટ્રાન્ઝિટ વ્યવસ્થા",
    tab_rules_dir: "📜 નિયમો અને ડિરેક્ટરી",
    dt_report_title: "નવી નાગરિક ફરિયાદ નોંધાવો",
    dt_report_sub: "AMC અને SMC વોર્ડ કંટ્રોલ રૂમ અને ઝડપી પ્રતિસાદ ટીમોને સીધી મોકલો",
    dt_step1_label: "૧. સમસ્યાની શ્રેણી પસંદ કરો",
    dt_step2_label: "૨. ચોક્કસ સ્થળ દાખલ કરો",
    dt_step3_label: "૩. વિગત અને પુરાવા (ફોટો)",
    dt_cat_streetlight: "સ્ટ્રીટલાઇટ",
    dt_cat_streetlight_sub: "બંધ લાઇટ, ખામીયુક્ત થાંભલો",
    dt_cat_pothole: "રસ્તા પર ખાડો",
    dt_cat_pothole_sub: "તૂટેલો ડામર, ખાડો",
    dt_cat_garbage: "કચરો અને સફાઈ",
    dt_cat_garbage_sub: "ન ઉપાડેલ કચરો, છલકાતી કચરાપેટી",
    dt_cat_waterlogging: "પાણી ભરાવું",
    dt_cat_waterlogging_sub: "ચોમાસુ ગટર બ્લોકેજ, જળભરાવ",
    dt_cat_water: "પીવાનું પાણી",
    dt_cat_water_sub: "દૂષિત પાણી, પાઇપલાઇન લીકેજ",
    dt_cat_others: "અન્ય સમસ્યા",
    dt_cat_others_sub: "વિશેષ સમસ્યા વિગત જણાવો",
    dt_custom_prompt: "આપની સમસ્યા વિગતવાર લખો:",
    dt_custom_badge: "કસ્ટમ શ્રેણી",
    dt_custom_help: "સમસ્યાની વિગત લખો જેથી કંટ્રોલ રૂમ ઝડપથી ટીમ મોકલી શકે.",
    dt_custom_routed: "✓ વોર્ડ રેપિડ એક્શન ડેસ્કને મોકલાશે",
    dt_location_confirmed: "📍 GPS ટેગ થયેલ: વોર્ડ ૭ નવરંગપુરા (સ્થળ ચકાસાયેલ)",
    btn_attach_photo: "📷 ફોટો જોડો",
    escrow_pill_label: "🛡️ ૧૦૦% રિફંડેબલ એસ્ક્રો ડિપોઝિટ",
    dt_escrow_title: "₹૫૦ પરતપાત્ર સુરક્ષા ડિપોઝિટ",
    dt_escrow_desc: "ખોટી ફરિયાદો અટકાવવા ₹૫૦ ડિપોઝિટ રાખવામાં આવે છે. સ્થળ તપાસ બાદ આ રકમ ૧૦૦% આપના વૉલેટમાં તુરંત રિફંડ થઈ જાય છે.",
    lbl_wallet_bal: "આપનું નાગરિક વૉલેટ:",
    dt_wallet_option: "નાગરિક વૉલેટ (તાત્કાલિક)",
    dt_online_option: "ઓનલાઇન ચુકવણી (UPI / Paytm / FamPay / કાર્ડ)",
    dt_btn_submit: "₹૫૦ એસ્ક્રો ચૂકવો અને ફરિયાદ નોંધાવો &rarr;",
    track_page_title: "ફરિયાદ ટ્રેક કરો (લાઈવ સ્થિતિ)",
    track_placeholder: "ફરિયાદ આઈડી દાખલ કરો (દા.ત. 18492, 18501)",
    track_btn: "ટ્રેક કરો",
    latest_note_title: "અધિકારીની તાજેતરની નોંધ",
    btn_upload_photo: "📷 તપાસ માટે ફોટો અપલોડ કરો",
    btn_reopen: "ફરિયાદ ફરીથી ખોલો",
    side_escrow_title: "૧૦૦% રિફંડેબલ એસ્ક્રો ડિપોઝિટ",
    side_escrow_desc: "ખોટી ફરિયાદો અટકાવવા ₹૫૦ ની સુરક્ષા ડિપોઝિટ રાખવામાં આવે છે. AMC ટીમ દ્વારા સ્થળ તપાસ થતાં જ ₹૫૦ આપના વૉલેટમાં તુરંત રિફંડ થઈ જાય છે.",
    side_sms_title: "SMS અને WhatsApp એલર્ટ",
    side_sms_desc: "ગુજરાતીમાં તાત્કાલિક અપડેટ્સ સક્રિય છે",
    side_support_title: "🏛️ AMC વોર્ડ ૭ કંટ્રોલ રૂમ",
    side_support_desc: "નવરંગપુરા ઝોનલ કચેરી • સમય: ૦૮:૦૦ થી ૧૬:૦૦<br>મધ્યસ્થ હેલ્પલાઇન: 155303 / 1913",
    dt_wallet_header_title: "નાગરિક વૉલેટ અને એસ્ક્રો ખાતું",
    dt_wallet_header_sub: "પારદર્શક મ્યુનિસિપલ ડિપોઝિટ સુરક્ષા અને તાત્કાલિક રિફંડ ખાતું",
    dt_btn_add_funds: "+ નાણાં ઉમેરો / ટોપ-અપ",
    floating_ai_btn: "AI સહાયક",
    ai_popup_title: "સિવિકા AI સહાયક",
    ai_popup_sub: "Gemini & ChatGPT આર્કિટેક્ચર • AMC સેવા",
    ai_input_placeholder: "ફરિયાદ, રિફંડ કે AMC નિયમો વિશે પૂછો...",
    lightbox_metrics_title: "મ્યુનિસિપલ કામગીરી અને અસર",
    btn_close: "બંધ કરો",
    btn_acknowledged: "✓ સ્વીકારેલ &rarr;",
    auth_lbl_corp: "મહાનગરપાલિકા",
    auth_lbl_officer_email: "અધિકારી સરકારી ઈમેલ",
    auth_lbl_pin: "સિક્યુરિટી પિન / એક્સેસ કોડ",
    auth_btn_officer_submit: "અધિકારી પોર્ટલમાં પ્રવેશ કરો &rarr;",
    auth_command_banner: "🛡️ <strong>પ્રતિબંધિત સુરક્ષા ક્લિયરન્સ:</strong> ગુજરાત ઇન્ટિગ્રેટેડ કમાન્ડ એન્ડ કંટ્રોલ સેન્ટર (ICCC) માં પ્રવેશ માટે ટાયર-૧ અધિકૃતતા જરૂરી છે.",
    auth_lbl_command_agency: "કમાન્ડ એજન્સી / સ્ટેશન",
    auth_lbl_command_email: "કમાન્ડર સત્તાવાર ઈમેલ",
    auth_lbl_command_pass: "કમાન્ડ સુરક્ષા પાસકોડ / કી",
    auth_btn_command_submit: "કમાન્ડ સેન્ટરમાં પ્રવેશ કરો &rarr;",
    btn_autofill_commander: "⚡ કમાન્ડર વિગતો ઓટો-ભરો",
    wallet_card_label: "એન્ટિ-સ્પામ એસ્ક્રો બેલેન્સ",
    wallet_badge_verified: "ચકાસાયેલ નાગરિક",
    btn_wallet_add: "+ નાણાં ઉમેરો",
    btn_wallet_subtext: "ફરિયાદ દીઠ ₹૫૦ હોલ્ડ &bull; સ્થળ તપાસ બાદ તુરંત રિફંડ",
    wallet_guarantee_title: "💡 ૧૦૦% રિફંડેબલ નાગરિક સુરક્ષા ગેરંટી",
    wallet_guarantee_desc: "ખોટી ફરિયાદો અટકાવવા ₹૫૦ ડિપોઝિટ રાખવામાં આવે છે. સાચી સમસ્યાની સ્થળ તપાસ બાદ આ રકમ ૧૦૦% આપના વૉલેટમાં તુરંત રિફંડ થઈ જાય છે.",
    wallet_guarantee_stat: "૯૯.૪% થી વધુ સાચા અહેવાલો ૨૪ કલાકમાં રિફંડ કરવામાં આવે છે.",
    wallet_ledger_title: "વ્યવહાર અને એસ્ક્રો લેજર",
    feed_page_title: "સામુદાયિક સમસ્યા ફીડ અને મત",
    feed_page_sub: "નાગરિકો દ્વારા ચકાસણી અને સમર્થન પ્રવાહ",
    feed_filter_all: "બધા અહેવાલો",
    feed_filter_trending: "🔥 ટ્રેન્ડિંગ",
    feed_filter_critical: "🚨 કટોકટી",
    feed_filter_resolved: "✓ ઉકેલાયેલ",
    crowd_reward_title: "🤝 નાગરિક ચકાસણી પુરસ્કાર",
    crowd_reward_desc: "આપના વિસ્તારમાં દેખાતી સમસ્યા પર <strong>\"પુષ્ટિ કરો\"</strong> પર ક્લિક કરો. આનાથી ઝડપી મદદ મળશે અને આપને <strong>+૨ સિવિક કર્મા</strong> મળશે.",
    rules_tab_title: "નાગરિક અધિકાર પત્ર, SLAs અને ૨૪x૭ હેલ્પલાઇન",
    rules_tab_sub: "ગુજરાત જીપીએમસી એક્ટ હેઠળ ફરજિયાત સમયમર્યાદા",
    rules_btn_open_page: "સંપૂર્ણ પેજ ખોલો ↗",
    hotline_amc_title: "AMC સેન્ટ્રલ કંટ્રોલ રૂમ (૨૪x૭)",
    hotline_monsoon_title: "ચોમાસુ જળભરાવ હેલ્પલાઇન",
    hotline_allindia_title: "અખિલ ભારતીય ઇમરજન્સી અને પોલીસ",
    sla_table_title: "ફરજિયાત SLA સમયમર્યાદા (ગુજરાત મહાનગરપાલિકા કાયદો)",
    escrow_transparency_title: "🛡️ ₹૫૦ પરતપાત્ર સુરક્ષા એસ્ક્રો પારદર્શિતા",
    escrow_transparency_desc: "ખોટી ફરિયાદો અટકાવવા ફરિયાદ નોંધાવતી વખતે ₹૫૦ ની ડિપોઝિટ રાખવામાં આવે છે. સ્થળ પર એન્જિનિયર દ્વારા ફોટો અને લોકેશન ચકાસણી થતાં જ આખી રકમ આપના વૉલેટમાં તુરંત રિફંડ થઈ જાય છે.",
    escrow_transparency_stat: "૯૯.૪% થી વધુ નાગરિક એસ્ક્રો ડિપોઝિટ ૨૪ કલાકમાં રિફંડ થાય છે. આપની નાગરિક સહભાગિતા સંપૂર્ણ સુરક્ષિત છે.",
    of_portal_badge: "AMC અધિકારી કન્સોલ",
    of_nav_dashboard: "૦૧ ડેશબોર્ડ",
    of_nav_inbox: "૦૨ ઇનબૉક્સ",
    of_nav_action: "૦૩ કાર્યવાહી",
    of_nav_notify: "૦૪ સૂચના અને રેટિંગ ⭐",
    of_nav_reports: "૦૫ નિવારણ અહેવાલો",
    of_headline_dashboard: "આજે વોર્ડ ૭, AMC અમદાવાદ",
    of_kpi_open: "ખુલ્લી ફરિયાદો",
    of_kpi_due: "આજની સમયમર્યાદા",
    of_kpi_reply: "નાગરિક પ્રતિસાદ બાકી",
    of_kpi_resolved: "આ અઠવાડિયે ઉકેલાયેલ",
    of_priority_queue: "પ્રાથમિકતા કતાર",
    of_shift_actions: "શિફ્ટ કાર્યસૂચિ ચેકલિસ્ટ",
    of_add_action: "➕ કાર્ય ઉમેરો",
    of_inbox_headline: "નાગરિકો દ્વારા નોંધાયેલ ફરિયાદોની સમીક્ષા",
    of_action_headline: "ફરિયાદ તપાસો અને આગળનું પગલું નક્કી કરો",
    of_select_problem_lbl: "📋 સમસ્યા / ટિકિટ પસંદ કરો:",
    of_assign_crew_lbl: "ટીમ સોંપો",
    of_status_pipeline_lbl: "સ્થિતિ પાઇપલાઇન",
    of_escrow_title: "🛡️ નાગરિક એન્ટિ-સ્પામ સુરક્ષા એસ્ક્રો",
    of_escrow_desc: "નાગરિકે ₹૫૦ ની પરતપાત્ર ડિપોઝિટ જમા કરાવી છે. વાસ્તવિક સમસ્યા હોય તો ચકાસીને તુરંત ₹૫૦ રિફંડ કરો.",
    of_btn_verify_refund: "✅ સાચી સમસ્યા ચકાસો અને ₹૫૦ રિફંડ કરો",
    of_btn_flag_fake: "❌ ખોટી ફરિયાદ તરીકે ચિહ્નિત કરો અને જપ્ત કરો",
    of_quick_decide: "ઝડપી નિર્ણય",
    btn_qd_assign: "ટીમ સોંપો",
    btn_qd_progress: "કામ ચાલુ છે",
    btn_qd_needinfo: "વધુ માહિતી જોઈએ",
    btn_qd_resolve: "ઉકેલો + રિફંડ કરો",
    cmd_radar_title: "લાઈવ ભૌગોલિક સમસ્યા રડાર અને મોબાઇલ ફ્લીટ્સ",
    cmd_radar_sub: "ખાડા, પાણી ભરાવ, બંધ સ્ટ્રીટલાઇટ અને મોકલેલ મ્યુનિસિપલ ટીમોના લાઈવ જીપીએસ કોઓર્ડિનેટ્સ.",
    cmd_kanban_title: "ટેક્ટિકલ ત્રિયાજ અને ડિસ્પેચ કાનબાન",
    cmd_kanban_sub: "વિવિધ એજન્સીઓની ફિલ્ડ ટીમોનું લાઈવ ટ્રેકિંગ",
    cmd_lane_triage: "<i class=\"fa-solid fa-triangle-exclamation\" style=\"color:#ef4444;\"></i> ૦૧ કટોકટી ત્રિયાજ",
    cmd_lane_dispatched: "<i class=\"fa-solid fa-truck-fast\" style=\"color:#38bdf8;\"></i> ૦૨ રવાના અને માર્ગમાં",
    cmd_lane_onsite: "<i class=\"fa-solid fa-wrench\" style=\"color:#f59e0b;\"></i> ૦૩ સ્થળ પર સમારકામ",
    cmd_lane_resolved: "<i class=\"fa-solid fa-check-double\" style=\"color:#10b981;\"></i> ૦૪ પૂર્ણ અને ઉકેલાયેલ"
  },
  hi: {
    nav_home: "मुख्य पृष्ठ",
    nav_about: "हमारे बारे में",
    nav_contact: "नियम व संपर्क",
    nav_solutions: "समाधान",
    nav_services: "सेवाएं",
    btn_member_login: "सदस्य लॉगिन",
    hero_title: "नागरिक सहभागिता एवं<br>शहरी गतिशीलता",
    hero_bullet_1: "नागरिक-केंद्रित सॉफ्टवेयर जो स्थानीय शिकायतों को त्वरित कार्रवाई में बदलता है।",
    hero_bullet_2: "बुनियादी ढांचे, सुरक्षा और यातायात प्रवाह के लिए लाइव समुदाय डैशबोर्ड।",
    hero_bullet_3: "सार्वजनिक आवागमन को सरल, तेज और पारदर्शी बनाने वाले डिजिटल साधन।",
    btn_hero_citizen: "नागरिक पोर्टल शुरू करें &rarr;",
    btn_hero_officer: "नगर निगम अधिकारी लॉगिन",
    btn_hero_command: "कमांड सेंटर शुरू करें 🛰️",
    dash_back_home: "&larr; सिविका होम पर वापस जाएं",
    dash_signed_citizen: "नागरिक के रूप में लॉगिन",
    dash_service_badge: "गुजरात नागरिक सेवा",
    gallery_title: "हमारी परियोजना गैलरी एवं नागरिक पहल",
    gallery_subtitle: "गुजरात भर में लाइव नगर निगम परियोजनाएं, स्मार्ट ट्रांजिट कॉरिडोर, रैपिड रोड रिपेयरिंग फ्लीट और कमांड कंट्रोल सेंटर संचालन देखें।",
    filter_all: "सभी परियोजनाएं (All)",
    filter_transit: "🚍 स्मार्ट ट्रांजिट एवं BRTS",
    filter_roads: "🛣️ सड़कें एवं गड्ढे मरम्मत",
    filter_sanitation: "♻️ स्वच्छता एवं कचरा प्रबंधन",
    filter_utilities: "💡 लाइटिंग व जल SCADA",
    filter_tech: "🖥️ कमांड एवं कंट्रोल सेंटर",
    carousel_back: "पीछे",
    carousel_front: "आगे",
    banner_rules_title: "📜 नागरिक सिविक चार्टर एवं आपातकालीन हेल्पलाइन निर्देशिका",
    banner_rules_desc: "हमारी अनिवार्य SLA समयसीमा, 100% रिफंडेबल ₹50 एस्क्रो नीति पढ़ें और AMC 24x7 कंट्रोल रूम के सीधे संपर्क नंबर प्राप्त करें।",
    banner_rules_btn: "नियम, विनियम व संपर्क नंबर देखें &rarr;",
    services_heading: "हमारी प्लेटफॉर्म सेवाएं",
    service_title_1: "नागरिक फीडबैक केंद्र",
    service_desc_1: "टूटी सड़कों, स्ट्रीटलाइट या स्वच्छता जैसी समस्याओं पर नागरिकों से सीधी रिपोर्ट।",
    service_title_2: "सामुदायिक डैशबोर्ड",
    service_desc_2: "नागरिक शिकायतों, निवारण समय और वार्ड स्तर पर लाइव नक्शे।",
    service_title_3: "शहरी गतिशीलता ऐप",
    service_desc_3: "बस ट्रैकिंग, विलंब अलर्ट और सुगम सार्वजनिक यात्रा योजना।",
    service_title_4: "ट्रांजिट अनुकूलन",
    service_desc_4: "मांग आधारित बस शेड्यूलिंग और ट्रैफिक कॉरिडोर प्रदर्शन विश्लेषण।",
    service_title_5: "सुरक्षा नेटवर्क",
    service_desc_5: "क्षेत्र के निवासियों के लिए सुरक्षा अलर्ट और सत्यापित सूचना।",
    service_title_6: "कमांड एंड कंट्रोल सेंटर",
    service_desc_6: "रियल-टाइम जीपीएस प्रेषण, आपातकालीन प्रसारण और त्वरित कार्रवाई।",
    about_heading: "हमारे बारे में एवं हमारा मिशन",
    about_intro_text: "नागरिक सहभागिता, मजबूत सार्वजनिक बुनियादी ढांचे और अत्याधुनिक नगर निगम प्रौद्योगिकी के माध्यम से गुजरात के शहरी भविष्य को सशक्त बनाना।",
    mv_mission_tag: "हमारा मिशन",
    mv_mission_title: "नवाचारियों और शहरी बुनियादी ढांचे का सशक्तिकरण",
    mv_mission_desc: "डेवलपर्स, डिजाइनरों और नवप्रवर्तकों को स्केलेबल, प्रौद्योगिकी-संचालित समाधान बनाने के लिए सशक्त बनाना जो महत्वपूर्ण शहरी चुनौतियों का समाधान करें, सार्वजनिक बुनियादी ढांचे में सुधार करें और शहर के निवासियों के जीवन की समग्र गुणवत्ता को बढ़ाएं।",
    mv_vision_tag: "हमारा विजन",
    mv_vision_title: "जुड़ा हुआ, संधारणीय और लचीला शहरी इकोसिस्टम",
    mv_vision_desc: "एक कनेक्टेड, टिकाऊ और समावेशी शहरी इकोसिस्टम बनाना जहां स्मार्ट तकनीक रोजमर्रा की जिंदगी को बेहतर बनाए, आर्थिक विकास को बढ़ावा दे और भविष्य के लिए लचीले समुदायों का निर्माण करे।",
    why_heading: "सिविका क्यों चुनें",
    pillar_title_1: "नागरिक-प्रथम दृष्टिकोण",
    pillar_desc_1: "सरल रिपोर्टिंग, लाइव प्रगति, ₹50 सुरक्षा एस्क्रो रिफंड और अधिकारियों से सीधे जवाब।",
    pillar_title_2: "शहरी इंटेलिजेंस",
    pillar_desc_2: "हम लाइव सेंसर और डेटा का समन्वय करते हैं ताकि अधिकारियों को समस्याएं तुरंत दिखाई दें।",
    pillar_title_3: "विश्वसनीय क्रियान्वयन",
    pillar_desc_3: "पारदर्शी समयसीमा, ऑडिट ट्रैक और समर्पित नगर निगम टीमें कार्यों को समयबद्ध रखती हैं।",
    track_heading: "हमारा अब तक का रिकॉर्ड",
    stat_label_1: "सक्रिय क्षेत्र",
    stat_label_2: "शिकायत स्वीकृति दर",
    footer_tagline: "नागरिक सहभागिता एवं अग्रणी शहरी गतिशीलता सॉफ्टवेयर।",
    footer_copy: "&copy; 2026 सिविका सिविक सिस्टम्स एवं अहमदाबाद नगर निगम। सर्वाधिकार सुरक्षित।",
    auth_modal_title: "सदस्य पोर्टल लॉगिन",
    auth_modal_sub: "अपनी पोर्टल भूमिका चुनें या नीचे दिए गए 1-क्लिक डेमो का उपयोग करें",
    demo_box_title: "1-क्लिक सीधा डेमो प्रवेश (बिना पासवर्ड)",
    demo_box_sub: "बिना पासवर्ड पोर्टल में सीधे प्रवेश के लिए नीचे दिए गए डेमो खाते पर क्लिक करें:",
    demo_role_citizen: "नागरिक निवासी",
    demo_name_citizen: "प्रिया पटेल (नागरिक)",
    demo_role_officer: "AMC अधिकारी",
    demo_name_officer: "आर. पटेल (वार्ड अधिकारी)",
    demo_role_command: "कमांड सेंटर",
    demo_name_command: "कमांडेंट वी. राठौर",
    auth_tab_citizen: "नागरिक निवासी",
    auth_tab_officer: "नगर निगम अधिकारी",
    auth_tab_command: "कमांड सेंटर",
    auth_btn_google: "गूगल / जीमेल के साथ जारी रखें",
    auth_divider_or: "अथवा निवासी ईमेल / मोबाइल",
    auth_lbl_email: "ईमेल अथवा मोबाइल नंबर",
    auth_lbl_pass: "पासवर्ड",
    auth_btn_submit: "नागरिक डैशबोर्ड में प्रवेश करें &rarr;",
    btn_autofill_demo: "⚡ डेमो क्रेडेंशियल्स स्वतः भरें",
    auth_create_prompt: "सिविका पर नए हैं या नागरिक खाता चाहिए?",
    auth_btn_create: "नया खाता बनाएं",
    tab_track: "🔍 शिकायत ट्रैक करें",
    tab_report: "📝 नई शिकायत दर्ज करें",
    tab_wallet: "👛 नागरिक वॉलेट",
    tab_address: "📍 सहेजे गए पते",
    tab_wardmap: "🗺️ वार्ड नक्शा",
    tab_community: "📢 नागरिक फ़ीड",
    tab_transit: "🚍 ट्रांजिट व घर्षण",
    tab_rules_dir: "📜 नियम व निर्देशिका",
    dt_report_title: "नई नागरिक शिकायत दर्ज करें",
    dt_report_sub: "AMC एवं SMC वार्ड कंट्रोल रूम और त्वरित प्रतिक्रिया टीमों को सीधा प्रेषण",
    dt_step1_label: "1. समस्या की श्रेणी चुनें",
    dt_step2_label: "2. सटीक स्थान दर्ज करें",
    dt_step3_label: "3. विवरण एवं साक्ष्य (फोटो)",
    dt_cat_streetlight: "स्ट्रीटलाइट",
    dt_cat_streetlight_sub: "बंद लाइट, खराब खंभा",
    dt_cat_pothole: "सड़क का गड्ढा",
    dt_cat_pothole_sub: "टूटा डामर, सड़क का गड्ढा",
    dt_cat_garbage: "कचरा एवं सफाई",
    dt_cat_garbage_sub: "अस्वच्छ कचरा, भरा हुआ डस्टबिन",
    dt_cat_waterlogging: "जलभराव",
    dt_cat_waterlogging_sub: "बारिश का पानी, नाली अवरुद्ध",
    dt_cat_water: "जल आपूर्ति",
    dt_cat_water_sub: "दूषित पानी, पाइपलाइन रिसाव",
    dt_cat_others: "अन्य समस्या",
    dt_cat_others_sub: "अपनी विशेष समस्या दर्ज करें",
    dt_custom_prompt: "अपनी समस्या विस्तार से लिखें:",
    dt_custom_badge: "कस्टम श्रेणी",
    dt_custom_help: "कृपया विवरण लिखें ताकि कंट्रोल रूम उचित टीम भेज सके।",
    dt_custom_routed: "✓ वार्ड रैपिड एक्शन डेस्क को भेजा जाएगा",
    dt_location_confirmed: "📍 GPS टैग: वार्ड 7 नवरंगपुरा (सत्यापित)",
    btn_attach_photo: "📷 फोटो संलग्न करें",
    escrow_pill_label: "🛡️ 100% रिफंडेबल एस्क्रो मॉडल",
    dt_escrow_title: "₹50 प्रतिदेय सुरक्षा जमा",
    dt_escrow_desc: "फर्जी शिकायतों की रोकथाम हेतु ₹50 की सुरक्षा राशि रखी जाती है। स्थल निरीक्षण उपरांत यह राशि तुरंत आपके वॉलेट में 100% वापस कर दी जाती है।",
    lbl_wallet_bal: "आपका नागरिक वॉलेट:",
    dt_wallet_option: "नागरिक वॉलेट (त्वरित)",
    dt_online_option: "ऑनलाइन भुगतान (UPI / Paytm / FamPay / कार्ड)",
    dt_btn_submit: "₹50 एस्क्रो जमा करें व शिकायत दर्ज करें &rarr;",
    track_page_title: "शिकायत ट्रैक करें (लाइव स्थिति)",
    track_placeholder: "शिकायत आईडी दर्ज करें (उदा. 18492, 18501)",
    track_btn: "ट्रैक करें",
    latest_note_title: "अधिकारी की नवीनतम टिप्पणी",
    btn_upload_photo: "📷 निरीक्षण फोटो अपलोड करें",
    btn_reopen: "शिकायत पुनः खोलें",
    side_escrow_title: "100% रिफंडेबल एस्क्रो मॉडल",
    side_escrow_desc: "फर्जी शिकायतों की रोकथाम हेतु ₹50 की सुरक्षा राशि रखी जाती है। स्थल निरीक्षण उपरांत यह राशि तुरंत आपके वॉलेट में 100% वापस कर दी जाती है।",
    side_sms_title: "SMS व WhatsApp अपडेट",
    side_sms_desc: "रियल-टाइम स्थिति संदेश सक्रिय हैं",
    side_support_title: "🏛️ AMC वार्ड 7 नियंत्रण कक्ष",
    side_support_desc: "नवरंगपुरा जोनल कार्यालय • समय: 08:00 से 16:00<br>केंद्रीय हेल्पलाइन: 155303 / 1913",
    dt_wallet_header_title: "नागरिक वॉलेट एवं एस्क्रो खाता",
    dt_wallet_header_sub: "पारदर्शी नगर निगम सुरक्षा जमा एवं त्वरित रिफंड खाता",
    dt_btn_add_funds: "+ राशि जोड़ें / टॉप-अप",
    floating_ai_btn: "AI सहायक",
    ai_popup_title: "सिविका AI सहायक",
    ai_popup_sub: "Gemini व ChatGPT कोर • AMC 24x7",
    ai_input_placeholder: "शिकायत, रिफंड या नगर निगम नियमों पर सवाल पूछें...",
    lightbox_metrics_title: "नगर निगम संचालन व प्रभाव",
    btn_close: "बंद करें",
    btn_acknowledged: "✓ स्वीकृत &rarr;",
    auth_lbl_corp: "नगर निगम",
    auth_lbl_officer_email: "अधिकारी सरकारी ईमेल",
    auth_lbl_pin: "सुरक्षा पिन / एक्सेस कोड",
    auth_btn_officer_submit: "अधिकारी पोर्टल में प्रवेश करें &rarr;",
    auth_command_banner: "🛡️ <strong>प्रतिबंधित सुरक्षा मंजूरी:</strong> गुजरात एकीकृत कमांड एवं नियंत्रण केंद्र (ICCC) में प्रवेश के लिए टियर-1 प्राधिकरण आवश्यक है।",
    auth_lbl_command_agency: "कमांड एजेंसी / स्टेशन",
    auth_lbl_command_email: "कमांडर आधिकारिक ईमेल",
    auth_lbl_command_pass: "कमांड सुरक्षा पासकोड / कुंजी",
    auth_btn_command_submit: "कमांड सेंटर में प्रवेश करें &rarr;",
    btn_autofill_commander: "⚡ कमांडर विवरण स्वतः भरें",
    wallet_card_label: "एंटी-स्पैम एस्क्रो बैलेंस",
    wallet_badge_verified: "सत्यापित नागरिक",
    btn_wallet_add: "+ राशि जोड़ें",
    btn_wallet_subtext: "प्रति शिकायत ₹50 होल्ड &bull; स्थल जांच उपरांत तुरंत रिफंड",
    wallet_guarantee_title: "💡 100% रिफंडेबल नागरिक सुरक्षा गारंटी",
    wallet_guarantee_desc: "फर्जी शिकायतों की रोकथाम हेतु ₹50 की सुरक्षा राशि रखी जाती है। स्थल निरीक्षण उपरांत यह राशि तुरंत आपके वॉलेट में 100% वापस कर दी जाती है।",
    wallet_guarantee_stat: "99.4% से अधिक वास्तविक शिकायतों पर 24 घंटे में रिफंड।",
    wallet_ledger_title: "लेनदेन एवं एस्क्रो लेजर",
    feed_page_title: "सामुदायिक घटना फ़ीड एवं वोटिंग",
    feed_page_sub: "नागरिकों द्वारा सत्यापन और पुष्टि धारा",
    feed_filter_all: "सभी रिपोर्ट",
    feed_filter_trending: "🔥 ट्रेंडिंग",
    feed_filter_critical: "🚨 गंभीर",
    feed_filter_resolved: "✓ हल किया गया",
    crowd_reward_title: "🤝 नागरिक सत्यापन पुरस्कार",
    crowd_reward_desc: "अपने क्षेत्र में देखी गई समस्या पर <strong>\"पुष्टि करें\"</strong> दबाएं। इससे त्वरित सहायता मिलती है और आपको <strong>+2 सिविक कर्मा</strong> मिलते हैं।",
    rules_tab_title: "नागरिक चार्टर, SLAs एवं 24x7 हेल्पलाइन",
    rules_tab_sub: "गुजरात जीपीएमसी अधिनियम के तहत अनिवार्य समयसीमा",
    rules_btn_open_page: "अलग पृष्ठ खोलें ↗",
    hotline_amc_title: "AMC सेंट्रल कंट्रोल रूम (24x7)",
    hotline_monsoon_title: "मानसून जलभराव हेल्पलाइन",
    hotline_allindia_title: "अखिल भारतीय आपातकालीन व पुलिस",
    sla_table_title: "अनिवार्य SLA समयसीमा (गुजरात नगर निगम अधिनियम)",
    escrow_transparency_title: "🛡️ ₹50 प्रतिदेय सुरक्षा एस्क्रो पारदर्शिता",
    escrow_transparency_desc: "फर्जी शिकायतों की रोकथाम हेतु शिकायत दर्ज करते समय ₹50 की जमा राशि रखी जाती है। स्थल पर इंजीनियर द्वारा सत्यापन होते ही यह राशि तुरंत आपके वॉलेट में वापस आ जाती है।",
    escrow_transparency_stat: "99.4% से अधिक एस्क्रो राशि 24 घंटे में वापस होती है। आपकी भागीदारी पूरी तरह सुरक्षित है।",
    of_portal_badge: "AMC अधिकारी कंसोल",
    of_nav_dashboard: "01 डैशबोर्ड",
    of_nav_inbox: "02 इनबॉक्स",
    of_nav_action: "03 कार्रवाई करें",
    of_nav_notify: "04 सूचना एवं रेटिंग ⭐",
    of_nav_reports: "05 समाधान रिपोर्ट",
    of_headline_dashboard: "आज वार्ड 7, AMC अहमदाबाद",
    of_kpi_open: "सक्रिय शिकायतें",
    of_kpi_due: "आज की समयसीमा",
    of_kpi_reply: "नागरिक जवाब अपेक्षित",
    of_kpi_resolved: "इस सप्ताह हल किए गए",
    of_priority_queue: "प्राथमिकता कतार",
    of_shift_actions: "शिफ्ट कार्यसूची चेकलिस्ट",
    of_add_action: "➕ कार्य जोड़ें",
    of_inbox_headline: "नागरिकों द्वारा दर्ज शिकायतों की समीक्षा",
    of_action_headline: "शिकायत देखें और अगला कदम तय करें",
    of_select_problem_lbl: "📋 समस्या / टिकट चुनें:",
    of_assign_crew_lbl: "टीम सौंपें",
    of_status_pipeline_lbl: "स्थिति पाइपलाइन",
    of_escrow_title: "🛡️ नागरिक एंटी-स्पैम सुरक्षा एस्क्रो",
    of_escrow_desc: "नागरिक ने ₹50 की प्रतिदेय सुरक्षा जमा की है। यदि वास्तविक समस्या है तो सत्यापित कर तुरंत ₹50 वापस करें।",
    of_btn_verify_refund: "✅ वास्तविक समस्या सत्यापित करें और ₹50 रिफंड करें",
    of_btn_flag_fake: "❌ फर्जी शिकायत के रूप में चिह्नित करें और जब्त करें",
    of_quick_decide: "त्वरित निर्णय",
    btn_qd_assign: "टीम सौंपें",
    btn_qd_progress: "प्रगति पर है",
    btn_qd_needinfo: "जानकारी चाहिए",
    btn_qd_resolve: "हल करें + रिफंड करें",
    cmd_radar_title: "लाइव भू-स्थानिक समस्या रडार और मोबाइल बेड़े",
    cmd_radar_sub: "गड्ढों, जलभराव, बंद स्ट्रीटलाइटों और तैनात फील्ड टीमों के इंटरैक्टिव जीपीएस निर्देशांक।",
    cmd_kanban_title: "टैक्टिकल ट्रियाज एवं डिस्पैच कानबान",
    cmd_kanban_sub: "विभिन्न एजेंसियों की फील्ड टीमों की लाइव ट्रैकिंग",
    cmd_lane_triage: "<i class=\"fa-solid fa-triangle-exclamation\" style=\"color:#ef4444;\"></i> 01 आपातकालीन ट्रियाज",
    cmd_lane_dispatched: "<i class=\"fa-solid fa-truck-fast\" style=\"color:#38bdf8;\"></i> 02 रवाना एवं मार्ग में",
    cmd_lane_onsite: "<i class=\"fa-solid fa-wrench\" style=\"color:#f59e0b;\"></i> 03 स्थल पर मरम्मत",
    cmd_lane_resolved: "<i class=\"fa-solid fa-check-double\" style=\"color:#10b981;\"></i> 04 पूर्ण एवं हल"
  }
};

const DEFAULT_CITIZEN_RATINGS = [
  {
    id: 'RAT-501',
    citizen: 'Priya Patel',
    ward: 'Ward 7 · Navrangpura',
    stars: 5,
    ticketId: 'GJ-AMC-2026-18501',
    notificationId: 'NOTIF-102',
    serviceType: 'Waterlogging & Jetting',
    comment: 'Water receded completely within 45 minutes of the jetting truck arriving. Officer R. Patel kept us updated on WhatsApp. Outstanding efficiency!',
    timestamp: '42 mins ago',
    verifiedResident: true
  },
  {
    id: 'RAT-502',
    citizen: 'Ketan Shah',
    ward: 'Ward 7 · Law Garden',
    stars: 5,
    ticketId: 'GJ-AMC-2026-18492',
    notificationId: 'NOTIF-101',
    serviceType: 'Streetlight Maintenance',
    comment: 'Prompt inspection and SMS alert received. Transparent communication about part arrival and dark spot eliminated.',
    timestamp: '2 hours ago',
    verifiedResident: true
  },
  {
    id: 'RAT-503',
    citizen: 'Aarav Mehta',
    ward: 'Ward 7 · Mithakhali',
    stars: 4,
    ticketId: 'GJ-AMC-2026-18470',
    notificationId: 'NOTIF-103',
    serviceType: 'Solid Waste Clearing',
    comment: 'Waste cleared cleanly and ₹50 escrow refunded instantly. Very happy with the automated verification process.',
    timestamp: 'Yesterday',
    verifiedResident: true
  },
  {
    id: 'RAT-504',
    citizen: 'Meera Desai',
    ward: 'Ward 7 · CG Road',
    stars: 5,
    ticketId: 'GJ-AMC-2026-18520',
    notificationId: 'NOTIF-104',
    serviceType: 'Electrical Repair',
    comment: 'Great initiative by AMC. Direct alerts make citizens feel heard and accountable. Full 5 stars!',
    timestamp: 'Yesterday',
    verifiedResident: true
  },
  {
    id: 'RAT-505',
    citizen: 'Harsh Vardhan',
    ward: 'Ward 7 · Stadium Road',
    stars: 5,
    ticketId: 'GJ-AMC-2026-18535',
    notificationId: 'NOTIF-105',
    serviceType: 'Pothole Resurfacing',
    comment: 'Cold mix patch laid down before morning rush hour. Smooth driving restored.',
    timestamp: '2 days ago',
    verifiedResident: true
  }
];

let appState = {
  currentView: 'landing', // 'landing' | 'citizen-desktop' | 'officer'
  currentUser: null,
  language: 'en',
  citizenWallet: { ...window.GUJARAT_CIVIC_DATA.citizenWallet },
  selectedEscrowGateway: 'Paytm',
  selectedTopupGateway: 'Paytm',
  activeDesktopTab: 'report',
  activeOfficerTab: 'dashboard',
  activeCityId: 'AMC',
  selectedOfficerTicketId: 'GJ-AMC-2026-18492',
  selectedOfficerTicket: null,
  inboxFilter: 'assigned_to_me',
  kanbanDeptFilter: 'all',
  notifyLang: 'en',
  activeTemplateKey: 'parts_ordered',
  officerKPIs: { ...window.GUJARAT_CIVIC_DATA.officerKPIs },
  shiftActions: [...window.GUJARAT_CIVIC_DATA.shiftActions],
  complaints: [...window.GUJARAT_CIVIC_DATA.complaints],
  inboxTickets: [...window.GUJARAT_CIVIC_DATA.inboxTickets],
  savedAddresses: [...(window.GUJARAT_CIVIC_DATA?.defaultAddresses || [])],
  selectedIssueType: 'streetlight',
  heatmapVisible: false,
  simRatingVal: 5,
  citizenTrackRatingScore: 5,
  ratingsFilter: 'all',
  citizenRatings: [...DEFAULT_CITIZEN_RATINGS]
};

// Map Engine Global
let leafletMap = null;
let mapMarkers = [];
let heatmapLayer = null;

// Initialize Master State
function initMasterState() {
  const savedLang = localStorage.getItem('civica_lang');
  if (savedLang && (savedLang === 'en' || savedLang === 'gu' || savedLang === 'hi')) {
    appState.language = savedLang;
  } else {
    appState.language = 'en';
    localStorage.setItem('civica_lang', 'en');
  }

  const savedComplaints = localStorage.getItem('civica_complaints');
  const savedWallet = localStorage.getItem('civica_wallet');
  const savedAddresses = localStorage.getItem('civica_addresses');
  const savedRatings = localStorage.getItem('civica_citizen_ratings');
  const savedShiftActions = localStorage.getItem('civica_shift_actions');
  const savedInboxTickets = localStorage.getItem('civica_inbox_tickets');

  if (savedComplaints) {
    try { appState.complaints = JSON.parse(savedComplaints); } catch (e) {}
  }
  if (savedWallet) {
    try { appState.citizenWallet = JSON.parse(savedWallet); } catch (e) {}
  }
  if (savedAddresses) {
    try { appState.savedAddresses = JSON.parse(savedAddresses); } catch (e) {}
  }
  if (savedRatings) {
    try { appState.citizenRatings = JSON.parse(savedRatings); } catch (e) {}
  }
  if (savedShiftActions) {
    try { appState.shiftActions = JSON.parse(savedShiftActions); } catch (e) {}
  }
  if (savedInboxTickets) {
    try { appState.inboxTickets = JSON.parse(savedInboxTickets); } catch (e) {}
  }
  if (!appState.savedAddresses || appState.savedAddresses.length === 0) {
    appState.savedAddresses = [...(window.GUJARAT_CIVIC_DATA?.defaultAddresses || [])];
  }
  if (!appState.citizenRatings || appState.citizenRatings.length === 0) {
    appState.citizenRatings = [...DEFAULT_CITIZEN_RATINGS];
  }

  appState.selectedOfficerTicket = appState.complaints.find(c => c.id === appState.selectedOfficerTicketId) || appState.complaints[0];
}

function saveMasterState() {
  localStorage.setItem('civica_complaints', JSON.stringify(appState.complaints));
  localStorage.setItem('civica_wallet', JSON.stringify(appState.citizenWallet));
  localStorage.setItem('civica_addresses', JSON.stringify(appState.savedAddresses));
  localStorage.setItem('civica_citizen_ratings', JSON.stringify(appState.citizenRatings));
  localStorage.setItem('civica_shift_actions', JSON.stringify(appState.shiftActions));
  localStorage.setItem('civica_inbox_tickets', JSON.stringify(appState.inboxTickets));
}

// Language Switcher (Clean English Default)
window.setAppLanguage = function(lang = 'en', closeModal = false) {
  if (!I18N_DATA[lang]) lang = 'en';
  appState.language = lang;
  localStorage.setItem('civica_lang', lang);
  document.documentElement.lang = lang;

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  const dict = I18N_DATA[lang] || I18N_DATA.en;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) el.innerHTML = dict[key];
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key]) el.placeholder = dict[key];
  });

  // Solutions 3D Carousel Cards Update
  if (typeof updateSolutionsCarousel === 'function') {
    updateSolutionsCarousel();
  }

  // Floating AI Assistant Widget
  const aiBtnLabel = document.getElementById('floating-ai-btn-label');
  if (aiBtnLabel) aiBtnLabel.textContent = dict.floating_ai_btn || (lang === 'gu' ? 'AI સહાયક' : lang === 'hi' ? 'AI सहायक' : 'AI Assistant');

  const aiTitle = document.getElementById('ai-popup-title-text');
  if (aiTitle) aiTitle.textContent = dict.ai_popup_title;

  const aiSub = document.getElementById('ai-popup-sub-text');
  if (aiSub) aiSub.textContent = dict.ai_popup_sub;

  const aiInput = document.getElementById('floating-ai-input');
  if (aiInput) aiInput.placeholder = dict.ai_input_placeholder;

  renderFloatingAiChips();
  initFloatingAiGreeting();

  // Re-render Dynamic Portal Components
  if (typeof renderDesktopPortal === 'function') renderDesktopPortal();
  if (typeof renderCivicWallet === 'function') renderCivicWallet();
  if (typeof renderOfficerDashboard === 'function') renderOfficerDashboard();
  if (typeof renderOfficerRatingsSection === 'function') renderOfficerRatingsSection();
  if (typeof renderKanbanBoard === 'function') renderKanbanBoard();

  // Active portal indicator translation
  const portalLabel = document.getElementById('active-portal-label');
  if (portalLabel) {
    if (appState.currentUser && (appState.currentUser.role === 'officer' || appState.currentUser.role === 'admin')) {
      portalLabel.textContent = lang === 'gu' ? 'AMC અધિકારી કન્સોલ' : lang === 'hi' ? 'AMC अधिकारी कंसोल' : 'AMC Officer Console';
    } else if (appState.currentUser && appState.currentUser.role === 'command') {
      portalLabel.textContent = lang === 'gu' ? 'ગુજરાત ICCC કમાન્ડ સેન્ટર' : lang === 'hi' ? 'गुजरात ICCC कमांड सेंटर' : 'ICCC Tactical Command Center';
    } else {
      portalLabel.textContent = lang === 'gu' ? 'નાગરિક સેવા પોર્ટલ' : lang === 'hi' ? 'नागरिक सेवा पोर्टल' : 'Citizen Resident Portal';
    }
  }

  if (closeModal) {
    const langModal = document.getElementById('language-select-modal');
    if (langModal) langModal.style.display = 'none';
  }
};

/* ==========================================================================
   NAVIGATION, VIEW ROUTING & AUTHENTICATION
   ========================================================================== */

window.returnToLandingPage = function() {
  appState.currentView = 'landing';
  document.getElementById('view-landing').style.display = 'block';
  document.getElementById('view-landing').classList.add('active-view');
  document.getElementById('view-dashboards-container').style.display = 'none';
  closeLoginModal();
  updateSessionUI();
  if (typeof initSolutionsCarousel === 'function') {
    initSolutionsCarousel();
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

window.openLoginModal = function(initialRole = 'citizen') {
  const overlay = document.getElementById('auth-modal-overlay');
  if (overlay) {
    overlay.style.display = 'flex';
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
  switchAuthRole(initialRole);
};

window.closeLoginModal = function() {
  const overlay = document.getElementById('auth-modal-overlay');
  if (overlay) {
    overlay.classList.remove('active');
    overlay.style.display = 'none';
    document.body.style.overflow = '';
  }
};

// ==========================================================================
// MULTI-STEP SIGNUP WIZARD LOGIC (MATCHING USER'S 3 SCREENSHOTS)
// ==========================================================================
window.signupWizardState = {
  step: 1,
  email: '',
  phone: '',
  captchaAnswer: 20,
  countdownSeconds: 118,
  timerInterval: null
};

window.openSignupModal = function() {
  closeLoginModal();
  const overlay = document.getElementById('signup-modal-overlay');
  if (overlay) {
    overlay.style.display = 'flex';
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
  goToSignupStep(1);
  generateSignupCaptcha();
};

window.closeSignupModal = function() {
  const overlay = document.getElementById('signup-modal-overlay');
  if (overlay) {
    overlay.style.display = 'none';
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }
  if (signupWizardState.timerInterval) {
    clearInterval(signupWizardState.timerInterval);
    signupWizardState.timerInterval = null;
  }
};

window.generateSignupCaptcha = function() {
  const num1 = Math.floor(Math.random() * 15) + 5;
  const num2 = Math.floor(Math.random() * 10) + 1;
  signupWizardState.captchaAnswer = num1 + num2;
  const display = document.getElementById('captcha-display-text');
  if (display) {
    display.textContent = `${num1} + ${num2} = ?`;
  }
  const input = document.getElementById('signup-captcha-val');
  if (input) input.value = '';
};

window.goToSignupStep = function(step) {
  signupWizardState.step = step;
  ['signup-step-1', 'signup-step-2', 'signup-step-3'].forEach((id, idx) => {
    const el = document.getElementById(id);
    if (el) {
      if (idx + 1 === step) {
        el.style.display = 'block';
        el.classList.add('active');
      } else {
        el.style.display = 'none';
        el.classList.remove('active');
      }
    }
  });

  if (step === 2) {
    startOtpCountdown();
  }
};

window.handleSignupStep1 = function(e) {
  if (e) e.preventDefault();
  const email = document.getElementById('signup-email').value.trim();
  const confirmEmail = document.getElementById('signup-confirm-email').value.trim();
  const phone = document.getElementById('signup-phone').value.trim();
  const confirmPhone = document.getElementById('signup-confirm-phone').value.trim();
  const terms = document.getElementById('signup-terms-check').checked;
  const captchaInput = parseInt(document.getElementById('signup-captcha-val').value.trim(), 10);

  if (email.toLowerCase() !== confirmEmail.toLowerCase()) {
    alert('Email Address and Confirm Email Address do not match.');
    return;
  }
  if (phone !== confirmPhone) {
    alert('Mobile Number and Confirm Mobile Number do not match.');
    return;
  }
  if (phone.length !== 10 || !/^\d{10}$/.test(phone)) {
    alert('Please enter a valid 10-digit mobile number without any prefix.');
    return;
  }
  if (!terms) {
    alert('You must agree to the Terms of Service and Privacy Policy to create an account.');
    return;
  }
  if (captchaInput !== signupWizardState.captchaAnswer) {
    alert('Captcha answer is incorrect. Please try again.');
    generateSignupCaptcha();
    return;
  }

  signupWizardState.email = email;
  signupWizardState.phone = phone;

  const displayPhone = document.getElementById('display-otp-phone');
  if (displayPhone) {
    displayPhone.textContent = `+91 ${phone.substring(0, 5)} ${phone.substring(5)}`;
  }

  goToSignupStep(2);
};

window.startOtpCountdown = function() {
  if (signupWizardState.timerInterval) clearInterval(signupWizardState.timerInterval);
  signupWizardState.countdownSeconds = 118;
  const timerElem = document.getElementById('otp-countdown');
  const resendBtn = document.getElementById('btn-resend-otp');
  if (resendBtn) resendBtn.disabled = true;

  const updateDisplay = () => {
    const m = Math.floor(signupWizardState.countdownSeconds / 60);
    const s = signupWizardState.countdownSeconds % 60;
    if (timerElem) {
      timerElem.textContent = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    }
  };
  updateDisplay();

  signupWizardState.timerInterval = setInterval(() => {
    signupWizardState.countdownSeconds--;
    updateDisplay();
    if (signupWizardState.countdownSeconds <= 0) {
      clearInterval(signupWizardState.timerInterval);
      signupWizardState.timerInterval = null;
      if (resendBtn) resendBtn.disabled = false;
    }
  }, 1000);
};

window.autoFillSignupOtp = function() {
  const otpInput = document.getElementById('signup-otp-code');
  if (otpInput) {
    otpInput.value = '123456';
    otpInput.focus();
  }
};

window.resendSignupOtp = function() {
  startOtpCountdown();
  alert(`A new verification OTP has been sent to +91 ${signupWizardState.phone}.`);
};

window.handleSignupStep2Verify = async function() {
  const otp = document.getElementById('signup-otp-code').value.trim();
  if (!otp || otp.length !== 6) {
    alert('Please enter the 6-digit OTP sent to your mobile number.');
    return;
  }

  try {
    const res = await fetch('/api/verify-otp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ phone: signupWizardState.phone, otp })
    });
    const data = await res.json();
    if (!data.success) {
      alert(data.message || 'Invalid OTP code.');
      return;
    }
  } catch (err) {
    // offline/fallback: accept valid 6-digit OTP
  }

  if (signupWizardState.timerInterval) clearInterval(signupWizardState.timerInterval);
  goToSignupStep(3);
};

window.handleSignupStep3Submit = async function(e) {
  if (e) e.preventDefault();
  const firstName = document.getElementById('signup-firstname').value.trim();
  const lastName = document.getElementById('signup-lastname').value.trim();
  const password = document.getElementById('signup-password').value;
  const confirmPassword = document.getElementById('signup-confirm-password').value;
  const ward = document.getElementById('signup-city-ward').value;

  if (password !== confirmPassword) {
    alert('Password and Confirm Password do not match.');
    return;
  }
  if (password.length < 6) {
    alert('Password must be at least 6 characters long.');
    return;
  }

  const payload = {
    firstName,
    lastName,
    email: signupWizardState.email,
    phone: signupWizardState.phone,
    password,
    ward
  };

  try {
    const res = await fetch('/api/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    const data = await res.json();
    console.log('Signup response:', data);
  } catch (err) {
    console.warn('Backend signup API notice:', err);
  }

  const fullName = `${firstName} ${lastName}`;
  const initials = `${firstName[0]}${lastName[0]}`.toUpperCase();

  appState.currentUser = {
    role: 'citizen',
    name: fullName,
    email: signupWizardState.email,
    phone: signupWizardState.phone,
    ward: ward,
    avatar: initials,
    cityId: 'SMC'
  };
  saveMasterState();

  closeSignupModal();

  alert(`Congratulations ${fullName}!\nYour citizen account has been successfully created and verified via mobile OTP.\nWelcome to the CIVICA Urban Mobility & Governance Platform.`);

  switchDashboardMode('citizen-desktop');
};

// ==========================================================================
// PERSONALIZED CIVIC DIRECTORY LOGIC (15 CITIZENS & 4 ADMINS)
// ==========================================================================
window.openCivicDirectoryModal = function() {
  const overlay = document.getElementById('civic-directory-modal-overlay');
  if (overlay) {
    overlay.style.display = 'flex';
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
  renderCivicDirectoryData();
};

window.closeCivicDirectoryModal = function() {
  const overlay = document.getElementById('civic-directory-modal-overlay');
  if (overlay) {
    overlay.style.display = 'none';
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }
};

window.switchDirectoryTab = function(tab) {
  const citizensTab = document.getElementById('dir-tab-citizens');
  const adminsTab = document.getElementById('dir-tab-admins');
  const citizensPanel = document.getElementById('dir-citizens-panel');
  const adminsPanel = document.getElementById('dir-admins-panel');

  if (tab === 'admins') {
    citizensTab?.classList.remove('active');
    adminsTab?.classList.add('active');
    if (citizensPanel) citizensPanel.style.display = 'none';
    if (adminsPanel) adminsPanel.style.display = 'block';
  } else {
    adminsTab?.classList.remove('active');
    citizensTab?.classList.add('active');
    if (adminsPanel) adminsPanel.style.display = 'none';
    if (citizensPanel) citizensPanel.style.display = 'block';
  }
};

window.renderCivicDirectoryData = function() {
  const citizensGrid = document.getElementById('dir-citizens-grid');
  const adminsGrid = document.getElementById('dir-admins-grid');

  if (citizensGrid && window.GUJARAT_CIVIC_DATA && GUJARAT_CIVIC_DATA.citizens) {
    citizensGrid.innerHTML = GUJARAT_CIVIC_DATA.citizens.map(c => `
      <div class="dir-card">
        <div class="dir-card-header">
          <div class="dir-avatar">${c.name.split(' ').map(p=>p[0]).join('')}</div>
          <div class="dir-meta">
            <h4>${c.name} <span style="font-size:0.75rem; color:#10b981;">(${c.id})</span></h4>
            <p>${c.ward}</p>
            <p style="font-size:0.75rem; color:#64748b;">${c.email} &bull; ${c.phone}</p>
          </div>
        </div>
        <div class="dir-files-row">
          <span class="dir-file-badge">📁 profile.json</span>
          <span class="dir-file-badge">📁 tickets.json</span>
          <span class="dir-file-badge">📁 wallet.json</span>
          <span class="dir-file-badge">🌐 portal_view.html</span>
        </div>
        <div class="dir-actions">
          <a href="${c.portalUrl}" target="_blank" class="btn-dir-view" title="Open citizen standalone portal in new tab">
            <i class="fa-solid fa-arrow-up-right-from-square"></i> Portal View
          </a>
          <button type="button" class="btn-dir-login" onclick="loginDirectlyAsCitizen('${c.id}')" title="Log into main dashboard as this citizen">
            <i class="fa-solid fa-right-to-bracket"></i> Login As
          </button>
        </div>
      </div>
    `).join('');
  }

  if (adminsGrid && window.GUJARAT_CIVIC_DATA && GUJARAT_CIVIC_DATA.admins) {
    adminsGrid.innerHTML = GUJARAT_CIVIC_DATA.admins.map(a => `
      <div class="dir-card" style="border-left: 3px solid #3b82f6;">
        <div class="dir-card-header">
          <div class="dir-avatar admin-badge">${a.badge.split('-')[1]}</div>
          <div class="dir-meta">
            <h4>${a.name} <span style="font-size:0.75rem; background:#1e3a8a; color:white; padding:2px 6px; border-radius:4px;">${a.badge}</span></h4>
            <p style="font-weight:600; color:#1e40af;">${a.designation}</p>
            <p style="font-size:0.75rem; color:#64748b;">${a.zone} &bull; Shift: ${a.shift}</p>
          </div>
        </div>
        <div class="dir-files-row">
          <span class="dir-file-badge">📁 officer_profile.json</span>
          <span class="dir-file-badge">📁 shift_roster.json</span>
          <span class="dir-file-badge">📁 ward_tickets.json</span>
          <span class="dir-file-badge">🌐 admin_dashboard.html</span>
        </div>
        <div class="dir-actions">
          <a href="${a.dashboardUrl}" target="_blank" class="btn-dir-view" style="background:#1e40af;" title="Open officer command console in new tab">
            <i class="fa-solid fa-arrow-up-right-from-square"></i> Console View
          </a>
          <button type="button" class="btn-dir-login" onclick="loginDirectlyAsAdmin('${a.id}')" title="Log into main dashboard as this officer">
            <i class="fa-solid fa-right-to-bracket"></i> Login As
          </button>
        </div>
      </div>
    `).join('');
  }
};

window.loginDirectlyAsCitizen = function(citizenId) {
  const c = GUJARAT_CIVIC_DATA.citizens.find(item => item.id === citizenId);
  if (!c) return;
  appState.currentUser = {
    role: 'citizen',
    name: c.name,
    email: c.email,
    phone: c.phone,
    ward: c.ward,
    avatar: c.name.split(' ').map(p => p[0]).join(''),
    cityId: 'SMC'
  };
  saveMasterState();
  closeCivicDirectoryModal();
  closeLoginModal();
  switchDashboardMode('citizen-desktop');
};

window.loginDirectlyAsAdmin = function(adminId) {
  const a = GUJARAT_CIVIC_DATA.admins.find(item => item.id === adminId);
  if (!a) return;
  appState.currentUser = {
    role: 'officer',
    name: `${a.name} (${a.designation})`,
    email: `${a.id.toLowerCase()}@suratadmin.gov.in`,
    avatar: a.badge.substring(4, 8),
    cityId: 'SMC',
    zone: a.zone
  };
  saveMasterState();
  closeCivicDirectoryModal();
  closeLoginModal();
  switchDashboardMode('officer');
};

window.switchAuthRole = function(role) {
  const citizenTab = document.getElementById('tab-role-citizen');
  const adminTab = document.getElementById('tab-role-admin');
  const commandTab = document.getElementById('tab-role-command');
  const citizenForm = document.getElementById('auth-form-citizen');
  const adminForm = document.getElementById('auth-form-admin');
  const commandForm = document.getElementById('auth-form-command');

  [citizenTab, adminTab, commandTab].forEach(t => t?.classList.remove('active'));
  [citizenForm, adminForm, commandForm].forEach(f => {
    if (f) { f.style.display = 'none'; f.classList.remove('active'); }
  });

  if (role === 'command') {
    commandTab?.classList.add('active');
    if (commandForm) { commandForm.style.display = 'block'; commandForm.classList.add('active'); }
  } else if (role === 'admin' || role === 'officer') {
    adminTab?.classList.add('active');
    if (adminForm) { adminForm.style.display = 'block'; adminForm.classList.add('active'); }
  } else {
    citizenTab?.classList.add('active');
    if (citizenForm) { citizenForm.style.display = 'block'; citizenForm.classList.add('active'); }
  }
};

window.loginAsDemo = function(role = 'citizen') {
  if (role === 'officer' || role === 'admin') {
    appState.currentUser = {
      role: 'officer',
      name: 'R. Patel (Ward Officer)',
      email: 'officer.amc@gujarat.gov.in',
      avatar: 'RP',
      cityId: 'AMC'
    };
    saveMasterState();
    closeLoginModal();
    switchDashboardMode('officer');
  } else if (role === 'command') {
    appState.currentUser = {
      role: 'command',
      name: 'Cmdr. Vikramaditya Rathore (ICCC Chief)',
      email: 'commander.rathore@iccc.gujarat.gov.in',
      avatar: 'VR',
      cityId: 'AMC'
    };
    saveMasterState();
    closeLoginModal();
    switchDashboardMode('command-center');
  } else {
    appState.currentUser = {
      role: 'citizen',
      name: 'પ્રિયા પટેલ (Priya Patel)',
      email: 'priya.patel@gmail.com',
      avatar: 'P',
      phone: '98250 84920',
      zone: 'West Zone · Ward 7'
    };
    appState.activeDesktopTab = 'report';
    saveMasterState();
    closeLoginModal();
    switchDashboardMode('citizen-desktop');
  }
};

window.loginWithGoogle = function() {
  loginAsDemo('citizen');
};

window.fillDemoCredentials = function(role = 'citizen') {
  if (role === 'command') {
    const cmdEmail = document.getElementById('command-email');
    const cmdToken = document.getElementById('command-token');
    if (cmdEmail) cmdEmail.value = 'commander.rathore@iccc.gujarat.gov.in';
    if (cmdToken) cmdToken.value = '2026';
  } else if (role === 'officer' || role === 'admin') {
    document.getElementById('admin-city-select').value = 'AMC';
    document.getElementById('admin-email').value = 'officer@amc.gujarat.gov.in';
    document.getElementById('admin-token').value = '2026';
  } else {
    document.getElementById('citizen-email').value = 'priya.patel@gmail.com';
    document.getElementById('citizen-pass').value = 'civica2026';
  }
};

window.handleCitizenFormLogin = function(e) {
  if (e) e.preventDefault();
  appState.activeDesktopTab = 'report';
  loginAsDemo('citizen');
};

window.handleAdminFormLogin = function(e) {
  if (e) e.preventDefault();
  loginAsDemo('officer');
};

window.handleCommandFormLogin = function(e) {
  if (e) e.preventDefault();
  const token = document.getElementById('command-token')?.value?.trim();
  if (token && token !== '2026' && token !== 'COMMAND2026') {
    showCivicaToast('❌ Invalid Command Passcode. Demo Key is 2026.');
    return;
  }
  loginAsDemo('command');
};

window.handleLogout = function() {
  appState.currentUser = null;
  returnToLandingPage();
  showCivicaToast('👋 Signed out successfully.');
};

function updateSessionUI() {
  const btnHeaderLogin = document.getElementById('btn-header-login');
  const dashSessionUserText = document.getElementById('dash-session-user-text');
  const activePill = document.getElementById('active-portal-pill-display');
  const activeIcon = document.getElementById('active-portal-icon');
  const activeLabel = document.getElementById('active-portal-label');

  if (appState.currentUser) {
    const role = appState.currentUser.role;

    if (btnHeaderLogin) {
      btnHeaderLogin.textContent = 'ENTER DASHBOARD ⚡';
      btnHeaderLogin.onclick = () => {
        if (role === 'command') {
          switchDashboardMode('command-center');
        } else if (role === 'officer') {
          switchDashboardMode('officer');
        } else {
          switchDashboardMode('citizen-desktop');
        }
      };
    }

    if (dashSessionUserText) {
      dashSessionUserText.textContent = `${appState.currentUser.name}`;
    }

    // Update the locked active portal badge display
    if (activePill && activeIcon && activeLabel) {
      if (role === 'command') {
        activePill.className = 'active-portal-pill command';
        activeIcon.className = 'fa-solid fa-satellite-dish';
        activeLabel.textContent = 'Tactical Command Center (ICCC)';
      } else if (role === 'officer') {
        activePill.className = 'active-portal-pill officer';
        activeIcon.className = 'fa-solid fa-user-shield';
        activeLabel.textContent = 'Municipal Officer Portal (AMC)';
      } else {
        activePill.className = 'active-portal-pill citizen';
        activeIcon.className = 'fa-solid fa-user-check';
        activeLabel.textContent = 'Citizen Resident Portal';
      }
    }
  } else {
    if (btnHeaderLogin) {
      btnHeaderLogin.textContent = 'MEMBER LOGIN';
      btnHeaderLogin.onclick = () => openLoginModal('citizen');
    }
    if (dashSessionUserText) {
      dashSessionUserText.textContent = 'Guest Session · Live System';
    }
    if (activePill && activeIcon && activeLabel) {
      activePill.className = 'active-portal-pill citizen';
      activeIcon.className = 'fa-solid fa-user-check';
      activeLabel.textContent = 'Citizen Resident Portal';
    }
  }
}

/**
 * Dashboard Mode Controller - Switching dashboards is DISABLED inside all 3 dashboards.
 * Users must Sign Out and authenticate with the respective role from the login page.
 */
window.switchDashboardMode = function(mode) {
  // If user is already authenticated in an active session, strictly lock them to their dashboard
  if (appState.currentUser) {
    const userRole = appState.currentUser.role;
    const allowedMode = (userRole === 'command') ? 'command-center' 
      : (userRole === 'officer' || userRole === 'admin') ? 'officer' 
      : 'citizen-desktop';

    if (mode !== allowedMode) {
      showCivicaToast(`🔒 Dashboard Switching Disabled: Authenticated as ${userRole.toUpperCase()}. Please Sign Out to access another dashboard.`);
      return;
    }
  } else {
    // If not logged in yet, prompt login modal for the requested role
    openLoginModal(mode === 'command-center' ? 'command' : mode === 'officer' ? 'officer' : 'citizen');
    return;
  }

  appState.currentView = mode;

  document.getElementById('view-landing').style.display = 'none';
  document.getElementById('view-dashboards-container').style.display = 'block';

  const subviews = {
    'citizen-desktop': document.getElementById('subview-citizen-desktop'),
    'officer': document.getElementById('subview-officer'),
    'command-center': document.getElementById('subview-command-center')
  };

  Object.keys(subviews).forEach(k => {
    if (subviews[k]) {
      if (k === mode) {
        subviews[k].style.display = 'block';
        subviews[k].classList.add('active');
      } else {
        subviews[k].style.display = 'none';
        subviews[k].classList.remove('active');
      }
    }
  });

  if (mode === 'command-center') {
    initTacticalMap();
    renderKanbanBoard();
  } else if (mode === 'officer') {
    renderOfficerDashboard();
  } else {
    renderDesktopPortal();
    switchDesktopTab(appState.activeDesktopTab || 'report');
  }

  updateSessionUI();
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

window.openCommandCenter = function() {
  if (appState.currentUser?.role === 'command') {
    switchDashboardMode('command-center');
  } else {
    openLoginModal('command');
  }
};

/* ==========================================================================
   CITIZEN PORTAL ("NORMAL DASHBOARD") CONTROLLERS
   ========================================================================== */

window.switchDesktopTab = function(tabName) {
  if (tabName === 'wardmap' || tabName === 'address' || tabName === 'transit') tabName = 'report';
  appState.activeDesktopTab = tabName;

  const tabs = ['report', 'track', 'wallet', 'community', 'rules-dir'];
  tabs.forEach(t => {
    const panel = document.getElementById(`dt-tab-${t}`);
    const btn = document.getElementById(`btn-tab-${t}`);
    if (panel) panel.style.display = (t === tabName) ? 'block' : 'none';
    if (btn) btn.classList.toggle('active', t === tabName);
  });

  const urlBar = document.getElementById('desktop-url-bar');
  if (urlBar) {
    urlBar.textContent = `https://civica.gujarat.in / portal / ${tabName}`;
  }
  const breadcrumb = document.getElementById('citizen-breadcrumb-tab');
  if (breadcrumb) {
    const tabLabels = {
      'report': 'Register Complaint (₹50 Escrow)',
      'track': 'Track Complaint',
      'wallet': 'Civic Wallet & Ledger',
      'community': 'Community Incident Feed',
      'rules-dir': 'Rules, SLAs & Helplines'
    };
    breadcrumb.textContent = tabLabels[tabName] || tabName;
  }

  if (tabName === 'wallet') renderCivicWallet();
  else if (tabName === 'track') renderDesktopPortal();
  else if (tabName === 'community') renderCommunityIncidentFeed();
};

function renderDesktopPortal() {
  const currentTicket = appState.complaints.find(c => c.id === appState.selectedOfficerTicketId) || appState.complaints[0];
  if (!currentTicket) return;

  const lang = appState.language || 'en';
  const titleEl = document.getElementById('dt-ticket-title');
  const metaEl = document.getElementById('dt-ticket-meta');
  const statusPill = document.getElementById('dt-ticket-status-pill');
  const noteEl = document.getElementById('dt-ticket-note');
  const inputEl = document.getElementById('desktop-track-input');
  const reopenBtn = document.getElementById('btn-reopen-ticket');

  const depStatusText = currentTicket.depositStatus === 'refunded'
    ? ' • 🛡️ ₹50 Escrow Refunded'
    : currentTicket.depositStatus === 'forfeited'
    ? ' • ❌ ₹50 Escrow Forfeited'
    : ' • 🛡️ ₹50 Escrow Protected';

  if (titleEl) titleEl.textContent = currentTicket.title;
  if (metaEl) metaEl.textContent = `${currentTicket.agency} • ${currentTicket.ward} ${currentTicket.zone} • Filed ${currentTicket.filedDate}${depStatusText}`;
  if (noteEl) noteEl.textContent = currentTicket.note;
  if (inputEl) inputEl.value = currentTicket.id;

  if (statusPill) {
    statusPill.className = `ticket-status-pill status-${currentTicket.status.replace('_', '')}`;
    statusPill.textContent = currentTicket.status.replace('_', ' ').toUpperCase();
  }

  if (reopenBtn) {
    reopenBtn.style.display = (currentTicket.status === 'resolved') ? 'inline-block' : 'none';
  }

  const stepsContainer = document.getElementById('dt-step-nodes');
  const fillBar = document.getElementById('dt-progress-bar-fill');

  if (stepsContainer && currentTicket.steps) {
    stepsContainer.innerHTML = currentTicket.steps.map(s => `
      <div class="step-node-item ${s.completed ? 'completed' : ''} ${s.active ? 'active' : ''}">
        <div class="step-dot"></div>
        <span class="step-title-gu">${lang === 'gu' ? s.labelGu : s.label}</span>
        <span class="step-date">${s.date}</span>
      </div>
    `).join('');

    const completedCount = currentTicket.steps.filter(s => s.completed).length;
    const pct = Math.min(100, Math.round((completedCount / currentTicket.steps.length) * 100));
    if (fillBar) fillBar.style.width = `${pct}%`;
  }
}

window.handleDesktopTrackLookup = function() {
  const val = document.getElementById('desktop-track-input')?.value.trim();
  if (!val) {
    alert('Please enter a Complaint ID (e.g. 18492, 18501, 18470).');
    return;
  }

  const found = appState.complaints.find(c =>
    c.id.toLowerCase() === val.toLowerCase() ||
    c.id.endsWith(val) ||
    c.id.includes(val) ||
    (c.shortId && c.shortId === val)
  );

  if (found) {
    appState.selectedOfficerTicketId = found.id;
    appState.selectedOfficerTicket = found;
    renderDesktopPortal();
    showCivicaToast(`Found ticket ${found.id}`);
  } else {
    alert(`Complaint ID "${val}" not found. Try 18492 or 18501.`);
  }
};

window.reopenTicket = function() {
  const current = appState.complaints.find(c => c.id === appState.selectedOfficerTicketId);
  if (!current) return;
  current.status = 'in_progress';
  current.note = 'Reopened by citizen: Problem still persists. Routed back to Officer R. Patel.';
  saveMasterState();
  renderDesktopPortal();
  alert('Complaint reopened and routed back to AMC supervisor.');
};

window.selectDesktopCategory = function(el, catId) {
  document.querySelectorAll('.dt-cat-card').forEach(c => c.classList.remove('active'));
  el.classList.add('active');
  appState.selectedIssueType = catId;

  const customSection = document.getElementById('dt-custom-issue-section');
  const customInput = document.getElementById('dt-custom-issue-input');
  if (customSection) {
    if (catId === 'others') {
      customSection.style.display = 'block';
      if (customInput) {
        setTimeout(() => customInput.focus(), 60);
      }
    } else {
      customSection.style.display = 'none';
    }
  }
};

window.toggleDtDepositMethod = function(method) {
  const lblWallet = document.getElementById('label-method-wallet');
  const lblOnline = document.getElementById('label-method-online');
  const onlineContainer = document.getElementById('dt-online-gateways-container');
  const btnSubmit = document.getElementById('btn-dt-submit-report');

  if (method === 'wallet') {
    lblWallet?.classList.add('active');
    lblOnline?.classList.remove('active');
    if (onlineContainer) onlineContainer.style.display = 'none';
    if (btnSubmit) btnSubmit.textContent = 'Pay ₹50 Escrow from Wallet & Submit →';
  } else {
    lblOnline?.classList.add('active');
    lblWallet?.classList.remove('active');
    if (onlineContainer) onlineContainer.style.display = 'block';
    if (btnSubmit) btnSubmit.textContent = `Pay ₹50 Escrow via ${appState.selectedEscrowGateway || 'Online'} & Submit →`;
  }
};

window.selectDtGateway = function(el, gatewayName) {
  document.querySelectorAll('#dt-online-gateways-container .gateway-option-card').forEach(c => c.classList.remove('selected'));
  el.classList.add('selected');
  appState.selectedEscrowGateway = gatewayName.toUpperCase();
  const btnSubmit = document.getElementById('btn-dt-submit-report');
  if (btnSubmit) btnSubmit.textContent = `Pay ₹50 Escrow via ${appState.selectedEscrowGateway} & Submit →`;
};

window.handleDesktopFileSelect = function(input) {
  const preview = document.getElementById('dt-photo-preview-tag');
  if (input.files && input.files[0] && preview) {
    preview.textContent = `✓ Photo attached: ${input.files[0].name}`;
    preview.style.display = 'block';
  }
};

window.handleDesktopSubmitComplaint = function(e) {
  e.preventDefault();
  const location = document.getElementById('dt-location-input')?.value.trim() || "CG Road, Navrangpura";
  const note = document.getElementById('dt-description-input')?.value.trim() || "Hazard observed by citizen";
  const customIssue = (appState.selectedIssueType === 'others')
    ? (document.getElementById('dt-custom-issue-input')?.value.trim() || '')
    : '';

  let typeConfig = window.GUJARAT_CIVIC_DATA.issueTypes.find(t => t.id === appState.selectedIssueType) || window.GUJARAT_CIVIC_DATA.issueTypes[0];
  if (appState.selectedIssueType === 'others') {
    const customTitle = customIssue || 'Custom Civic Grievance';
    typeConfig = {
      id: 'others',
      name: customTitle,
      gujarati: `અન્ય: ${customTitle}`,
      icon: '📋',
      dept: 'General Administration & Redressal'
    };
  }

  const depositSource = document.querySelector('input[name="dt_deposit_source"]:checked')?.value || 'wallet';
  const randomId = Math.floor(10000 + Math.random() * 90000);
  const newTicketId = `GJ-AMC-2026-${randomId}`;
  const paymentMethodName = depositSource === 'wallet' ? 'Civic Wallet' : (appState.selectedEscrowGateway || 'Online UPI');

  if (depositSource === 'wallet') {
    if (Number(appState.citizenWallet.balance) < 50) {
      alert(`Insufficient Civic Wallet balance (Current: ₹${Number(appState.citizenWallet.balance).toFixed(2)}).\nPlease pay using an online method or recharge your wallet.`);
      toggleDtDepositMethod('online');
      document.querySelector('input[name="dt_deposit_source"][value="online"]').checked = true;
      return;
    }

    appState.citizenWallet.balance -= 50.00;
    appState.citizenWallet.transactions.unshift({
      id: `TX-${Math.floor(1000 + Math.random() * 9000)}`,
      type: 'held',
      title: `Security Deposit (Escrow) · #${randomId} ${typeConfig.name}`,
      amount: 50.00,
      date: 'Just now',
      method: 'Civic Wallet',
      status: 'held',
      ticketId: newTicketId
    });
  } else {
    appState.citizenWallet.transactions.unshift({
      id: `TX-${Math.floor(1000 + Math.random() * 9000)}`,
      type: 'held',
      title: `Security Deposit (Escrow) · #${randomId} ${typeConfig.name}`,
      amount: 50.00,
      date: 'Just now',
      method: paymentMethodName,
      status: 'held',
      ticketId: newTicketId
    });
  }

  const issueTitle = (appState.selectedIssueType === 'others')
    ? `${typeConfig.name} · ${location}`
    : `${typeConfig.name} issue · ${location}`;

  const issueNote = (appState.selectedIssueType === 'others' && customIssue)
    ? `[Problem Category: ${customIssue}] ${note} — ₹50 security deposit held via ${paymentMethodName}. Inspection pending.`
    : `${note} — ₹50 security deposit held via ${paymentMethodName}. Inspection pending.`;

  const newComplaint = {
    id: newTicketId,
    shortId: `${randomId}`,
    citizen: appState.currentUser ? appState.currentUser.name : "Priya Patel",
    citizenPhone: "98250 84920",
    title: issueTitle,
    type: appState.selectedIssueType || 'streetlight',
    categoryName: typeConfig.name,
    categoryGu: typeConfig.gujarati,
    location: location,
    coords: [23.0375 + (Math.random() - 0.5) * 0.03, 72.5625 + (Math.random() - 0.5) * 0.03],
    distance: "60 m",
    ward: "Ward 7",
    zone: "West Zone",
    agency: `AMC Operations`,
    department: typeConfig.dept || "Public Works & Roads",
    status: "new",
    stage: "backlog",
    severity: "high",
    depositAmount: 50.00,
    depositStatus: "held",
    depositMethod: paymentMethodName,
    depositTxId: `ESC-${randomId}`,
    filedDate: "Today",
    dueDate: "Tomorrow",
    slaDate: "24h Mandatory SLA",
    confirmations: 1,
    assignedCrew: "Pending Assignment",
    note: issueNote,
    steps: [
      { label: "Received", labelGu: "પ્રાપ્ત", date: "Just now", completed: true, active: true },
      { label: "Deposit Held", labelGu: "₹50 ડિપોઝિટ", date: `Paid via ${paymentMethodName}`, completed: true },
      { label: "Inspection", labelGu: "તપાસ", date: "Pending", completed: false },
      { label: "Resolved", labelGu: "ઉકેલાયેલ", date: "Pending", completed: false }
    ],
    photoUrl: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80"
  };

  appState.complaints.unshift(newComplaint);
  appState.selectedOfficerTicketId = newTicketId;
  appState.officerKPIs.openTickets++;
  saveMasterState();

  e.target.reset();
  const customSec = document.getElementById('dt-custom-issue-section');
  if (customSec) customSec.style.display = 'none';
  document.querySelectorAll('.dt-cat-card').forEach(c => c.classList.remove('active'));
  document.querySelector('.dt-cat-card')?.classList.add('active');
  appState.selectedIssueType = 'streetlight';

  const preview = document.getElementById('dt-photo-preview-tag');
  if (preview) preview.style.display = 'none';

  renderCivicWallet();
  renderDesktopPortal();
  renderCommunityIncidentFeed();
  renderOfficerDashboard();

  showCivicaToast(`🛡️ Ticket ${newTicketId} registered! ₹50 held in municipal escrow.`);
  switchDesktopTab('track');
};

function renderCivicWallet() {
  const dtBal = document.getElementById('desktop-wallet-bal');
  const dtVal = document.getElementById('dt-wallet-balance-val');
  const dtReportVal = document.getElementById('dt-report-wallet-val');
  const dtPayStatus = document.getElementById('dt-wallet-pay-status');
  const dtTableBody = document.getElementById('dt-wallet-tx-tbody');

  const currentBal = Number(appState.citizenWallet.balance || 0);
  const balFormatted = currentBal.toFixed(2);

  if (dtBal) dtBal.textContent = `₹${balFormatted}`;
  if (dtVal) dtVal.textContent = balFormatted;
  if (dtReportVal) dtReportVal.textContent = `₹${balFormatted}`;

  if (dtPayStatus) {
    if (currentBal >= 50) {
      dtPayStatus.style.color = '#10b981';
      dtPayStatus.textContent = `Balance Sufficient (₹${balFormatted})`;
    } else {
      dtPayStatus.style.color = '#ef4444';
      dtPayStatus.textContent = `Insufficient Balance (₹${balFormatted} / ₹50 required)`;
    }
  }

  if (dtTableBody) {
    const txs = appState.citizenWallet.transactions || [];
    dtTableBody.innerHTML = txs.map(tx => `
      <tr>
        <td>${tx.date}</td>
        <td><code>${tx.id}</code></td>
        <td><strong>${tx.title}</strong></td>
        <td><span class="ticket-status-pill ${tx.type === 'credit' ? 'status-resolved' : tx.type === 'held' ? 'status-inprogress' : 'status-assigned'}">${tx.type.toUpperCase()}</span></td>
        <td>${tx.method}</td>
        <td style="font-weight:700; color:${tx.type === 'credit' ? '#166534' : tx.type === 'held' ? '#0369a1' : '#b91c1c'};">${tx.type === 'credit' ? '+' : tx.type === 'held' ? '⏳ ' : '-'}₹${Number(tx.amount).toFixed(2)}</td>
        <td><span style="font-size:0.75rem; font-weight:700; color:${tx.type === 'credit' ? '#166534' : tx.type === 'held' ? '#b45309' : '#475569'};">${tx.type === 'held' ? 'Escrow Protected' : tx.type === 'credit' ? 'Refunded / Added' : 'Deducted'}</span></td>
      </tr>
    `).join('');
  }
}

/* ==========================================================================
   WALLET TOP-UP & DYNAMIC UPI QR CODE CONTROLLER
   ========================================================================== */
let upiTimerInterval = null;
let upiSecondsRemaining = 299; // 4 mins 59 secs

window.openWalletTopupModal = function() {
  const m = document.getElementById('wallet-topup-modal');
  if (m) m.classList.add('active');
  setTopupAmount(100);
  selectTopupMethod('upi');
  startUpiTimer();
};

window.closeWalletTopupModal = function() {
  const m = document.getElementById('wallet-topup-modal');
  if (m) m.classList.remove('active');
  if (upiTimerInterval) clearInterval(upiTimerInterval);
};

window.setTopupAmount = function(amt) {
  const input = document.getElementById('topup-amount-input');
  if (input) input.value = amt;
  updateQrAmountDisplay(amt);
  document.querySelectorAll('.amount-chip').forEach(c => {
    c.classList.toggle('active', c.textContent.includes(amt));
  });
};

window.updateQrAmountDisplay = function(amt) {
  const parsed = parseFloat(amt) || 0;
  const formatted = parsed.toFixed(2);
  const qrDisplay = document.getElementById('qr-display-amount');
  const btnLabel = document.getElementById('btn-pay-amount-label');
  if (qrDisplay) qrDisplay.textContent = formatted;
  if (btnLabel) btnLabel.textContent = formatted;
};

window.selectTopupMethod = function(method) {
  const upiSec = document.getElementById('topup-section-upi');
  const cardSec = document.getElementById('topup-section-card');
  const btnUpi = document.getElementById('btn-method-upi');
  const btnCard = document.getElementById('btn-method-card');

  if (method === 'upi') {
    if (upiSec) upiSec.style.display = 'block';
    if (cardSec) cardSec.style.display = 'none';
    if (btnUpi) btnUpi.classList.add('active');
    if (btnCard) btnCard.classList.remove('active');
  } else {
    if (upiSec) upiSec.style.display = 'none';
    if (cardSec) cardSec.style.display = 'block';
    if (btnUpi) btnUpi.classList.remove('active');
    if (btnCard) btnCard.classList.add('active');
  }
};

window.copyUpiId = function() {
  const vpa = 'amc.civica@sbi';
  if (navigator.clipboard) {
    navigator.clipboard.writeText(vpa).then(() => {
      showCivicaToast(`📋 Copied UPI ID "${vpa}" to clipboard!`);
    }).catch(() => {
      showCivicaToast(`📋 UPI ID: ${vpa}`);
    });
  } else {
    showCivicaToast(`📋 UPI ID: ${vpa}`);
  }
};

function startUpiTimer() {
  if (upiTimerInterval) clearInterval(upiTimerInterval);
  upiSecondsRemaining = 299;
  updateTimerDisplay();
  upiTimerInterval = setInterval(() => {
    upiSecondsRemaining--;
    if (upiSecondsRemaining <= 0) {
      upiSecondsRemaining = 299; // auto-refresh dynamic QR
    }
    updateTimerDisplay();
  }, 1000);
}

function updateTimerDisplay() {
  const timerEl = document.getElementById('upi-qr-timer');
  if (!timerEl) return;
  const mins = String(Math.floor(upiSecondsRemaining / 60)).padStart(2, '0');
  const secs = String(upiSecondsRemaining % 60).padStart(2, '0');
  timerEl.textContent = `⏳ Expires: ${mins}:${secs}`;
}

window.executeUpiWalletTopup = function(paymentMethod = 'UPI / QR Scan') {
  const input = document.getElementById('topup-amount-input');
  const amount = parseFloat(input?.value) || 100;
  if (amount <= 0) {
    alert('Please enter a valid amount (minimum ₹10).');
    return;
  }

  const utrInput = document.getElementById('upi-utr-input');
  const utr = utrInput?.value.trim() || `${Math.floor(400000000000 + Math.random() * 900000000000)}`;

  const btn = document.getElementById('btn-confirm-upi-pay');
  if (btn) {
    btn.disabled = true;
    btn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Verifying Bank Gateway...`;
  }

  setTimeout(() => {
    appState.citizenWallet.balance = (Number(appState.citizenWallet.balance) || 0) + amount;
    appState.citizenWallet.transactions.unshift({
      id: `TX-UPI-${Math.floor(100000 + Math.random() * 900000)}`,
      type: 'credit',
      title: `Wallet Top-Up via ${paymentMethod}`,
      amount: amount,
      date: 'Just now',
      method: paymentMethod,
      status: 'completed',
      utr: utr
    });

    saveMasterState();
    closeWalletTopupModal();
    renderCivicWallet();

    if (btn) {
      btn.disabled = false;
      btn.innerHTML = `✓ I Have Paid ₹<span id="btn-pay-amount-label">${amount.toFixed(2)}</span> &bull; Confirm Top-Up`;
    }
    if (utrInput) utrInput.value = '';

    showCivicaToast(`✅ ₹${amount.toFixed(2)} added to Civic Wallet via UPI QR! (UTR: ${utr.slice(0, 4)}...${utr.slice(-4)})`);
  }, 700);
};

window.simulateInstantUpi = function() {
  executeUpiWalletTopup('UPI FastPay (Instant QR)');
};

window.executeWalletTopup = function(paymentMethod = 'UPI / QR Scan') {
  executeUpiWalletTopup(paymentMethod);
};

/* ==========================================================================
   SAVED ADDRESSES & MUNICIPAL WARD REGISTRY CONTROLLER
   ========================================================================== */
window.renderSavedAddresses = function() {
  const container = document.getElementById('dt-saved-addresses-list');
  const countText = document.getElementById('addr-count-text');
  if (!container) return;

  const list = appState.savedAddresses || [];
  if (countText) {
    const primaryCount = list.filter(a => a.isPrimary).length;
    countText.innerHTML = `${list.length} Active Addresses (${primaryCount} Primary Home)<br>Property Tax UIDs linked & geo-tagged`;
  }

  if (list.length === 0) {
    container.innerHTML = `
      <div style="background:#f8fafc; border:2px dashed #cbd5e1; border-radius:var(--radius-lg); padding:40px; text-align:center; grid-column:1/-1;">
        <div style="font-size:2.5rem; margin-bottom:10px;">📍</div>
        <h3 style="font-family:var(--font-heading); font-size:1.2rem; color:var(--civica-navy); margin-bottom:6px;">No Saved Addresses</h3>
        <p style="font-size:0.85rem; color:#64748b; margin-bottom:16px;">Add your primary residence or workplace to unlock automated municipal dispatches and sanitation notifications.</p>
        <button type="button" class="btn-hero-primary" onclick="openAddAddressModal()">+ Register First Address</button>
      </div>
    `;
    return;
  }

  container.innerHTML = list.map(addr => `
    <div class="citizen-address-card ${addr.isPrimary ? 'primary-address' : ''}">
      <div class="address-card-top">
        <div style="display:flex; align-items:center; gap:8px;">
          <span class="address-type-icon">${addr.label === 'Workplace' ? '💼' : addr.label === 'Other' ? '🏢' : '🏠'}</span>
          <div>
            <div style="display:flex; align-items:center; gap:8px;">
              <strong style="font-size:1.05rem; color:var(--civica-navy); font-family:var(--font-heading);">${addr.flatNo}</strong>
              ${addr.isPrimary ? '<span class="badge-primary-addr">★ Primary Residence</span>' : `<span class="badge-secondary-addr">${addr.label}</span>`}
            </div>
            <span style="font-size:0.75rem; color:#64748b;">${addr.tag || 'Registered Civic Property'}</span>
          </div>
        </div>
        <span class="badge-ward-verified">✓ AMC Ward Verified</span>
      </div>

      <div class="address-card-body">
        <div class="address-line"><strong>Society / Bldg:</strong> ${addr.street}</div>
        <div class="address-line"><strong>Landmark:</strong> ${addr.landmark || 'Navrangpura Central Area'}</div>
        <div class="address-line"><strong>Ward & Zone:</strong> <span style="font-weight:700; color:#0369a1;">${addr.ward}</span> &bull; ${addr.zone || 'West Zone'}</div>
        <div class="address-line"><strong>City & PIN:</strong> ${addr.city || 'AMC Ahmedabad'}, Gujarat — <strong>${addr.pincode}</strong></div>
      </div>

      <!-- Municipal Linkages Box -->
      <div class="address-linkages-box">
        <div class="linkage-item">
          <span class="linkage-label">Property Tax Index</span>
          <span class="linkage-value">${addr.taxIndexNo || '07-04-192-0048'}</span>
        </div>
        <div class="linkage-item">
          <span class="linkage-label">Property UID</span>
          <span class="linkage-value">${addr.propertyUid || 'AMC-W7-NV-4821'}</span>
        </div>
        <div class="linkage-item">
          <span class="linkage-label">Doorstep Sanitation</span>
          <span class="linkage-value" style="color:#166534;">${addr.garbageSchedule || 'Daily 07:30 AM (Shift A)'}</span>
        </div>
        <div class="linkage-item">
          <span class="linkage-label">Municipal Water Supply</span>
          <span class="linkage-value" style="color:#0369a1;">${addr.waterSupply || '06:00 - 08:30 AM'}</span>
        </div>
      </div>

      <!-- Address Action Buttons -->
      <div class="address-card-actions">
        <button type="button" class="btn-address-action primary-cta" onclick="reportIssueAtAddress('${addr.id}')" title="File complaint for this location">
          🚨 File Complaint Here
        </button>
        <button type="button" class="btn-address-action" onclick="copyAddressToClipboard('${addr.id}')" title="Copy address to clipboard">
          📋 Copy
        </button>
        ${!addr.isPrimary ? `
          <button type="button" class="btn-address-action" onclick="setPrimaryAddress('${addr.id}')" title="Make this your primary residence">
            ⭐ Make Primary
          </button>
        ` : ''}
        <button type="button" class="btn-address-action" onclick="openAddAddressModal('${addr.id}')" title="Edit address details">
          ✏️ Edit
        </button>
        ${!addr.isPrimary ? `
          <button type="button" class="btn-address-action delete-cta" onclick="deleteAddress('${addr.id}')" title="Delete address">
            🗑️
          </button>
        ` : ''}
      </div>
    </div>
  `).join('');
};

window.reportIssueAtAddress = function(addrId) {
  const addr = (appState.savedAddresses || []).find(a => a.id === addrId);
  if (!addr) return;
  const fullLoc = `${addr.flatNo}, ${addr.street}, ${addr.ward}`;
  const locInput = document.getElementById('dt-location-input');
  if (locInput) locInput.value = fullLoc;
  switchDesktopTab('report');
  showCivicaToast(`📍 Complaint location auto-filled with ${addr.label} address!`);
};

window.setPrimaryAddress = function(addrId) {
  (appState.savedAddresses || []).forEach(a => {
    a.isPrimary = (a.id === addrId);
  });
  saveMasterState();
  renderSavedAddresses();
  showCivicaToast('⭐ Primary residential address updated!');
};

window.deleteAddress = function(addrId) {
  if (confirm('Are you sure you want to remove this address from your municipal registry?')) {
    appState.savedAddresses = (appState.savedAddresses || []).filter(a => a.id !== addrId);
    saveMasterState();
    renderSavedAddresses();
    showCivicaToast('🗑️ Address removed from registry.');
  }
};

window.copyAddressToClipboard = function(addrId) {
  const addr = (appState.savedAddresses || []).find(a => a.id === addrId);
  if (!addr) return;
  const full = `${addr.flatNo}, ${addr.street}, Landmark: ${addr.landmark || 'Navrangpura'}, ${addr.ward}, ${addr.city || 'AMC Ahmedabad'} - ${addr.pincode}`;
  if (navigator.clipboard) {
    navigator.clipboard.writeText(full).then(() => {
      showCivicaToast('📋 Full address copied to clipboard!');
    }).catch(() => {
      showCivicaToast(`📋 ${full}`);
    });
  } else {
    showCivicaToast(`📋 ${full}`);
  }
};

window.openAddAddressModal = function(editId = null) {
  const m = document.getElementById('add-address-modal');
  const title = document.getElementById('address-modal-title');
  const editInput = document.getElementById('edit-address-id');
  const form = document.getElementById('add-address-form');

  if (form) form.reset();
  if (editInput) editInput.value = editId || '';

  if (editId) {
    const existing = (appState.savedAddresses || []).find(a => a.id === editId);
    if (existing) {
      if (title) title.textContent = 'Edit Civic Address';
      toggleAddressTypeRadio(existing.label || 'Home');
      const flat = document.getElementById('addr-flat-input');
      const bldg = document.getElementById('addr-building-input');
      const street = document.getElementById('addr-street-input');
      const ward = document.getElementById('addr-ward-select');
      const pin = document.getElementById('addr-pincode-input');
      const tax = document.getElementById('addr-tax-input');
      if (flat) flat.value = existing.flatNo || '';
      if (bldg) bldg.value = existing.street.split(',')[0] || '';
      if (street) street.value = existing.landmark || existing.street || '';
      if (ward) ward.value = existing.ward || 'Ward 7 · Navrangpura (West Zone)';
      if (pin) pin.value = existing.pincode || '380009';
      if (tax) tax.value = existing.taxIndexNo || '';
    }
  } else {
    if (title) title.textContent = 'Register New Civic Address';
    toggleAddressTypeRadio('Home');
  }

  if (m) m.classList.add('active');
};

window.closeAddAddressModal = function() {
  const m = document.getElementById('add-address-modal');
  if (m) m.classList.remove('active');
};

window.toggleAddressTypeRadio = function(type) {
  ['home', 'work', 'other'].forEach(t => {
    const lbl = document.getElementById(`label-addr-${t}`);
    if (lbl) lbl.classList.remove('active');
  });
  if (type === 'Home') document.getElementById('label-addr-home')?.classList.add('active');
  else if (type === 'Workplace') document.getElementById('label-addr-work')?.classList.add('active');
  else document.getElementById('label-addr-other')?.classList.add('active');
};

window.handleSaveAddress = function(e) {
  e.preventDefault();
  const editId = document.getElementById('edit-address-id')?.value;
  const typeRadio = document.querySelector('input[name="addr_type"]:checked')?.value || 'Home';
  const flat = document.getElementById('addr-flat-input')?.value.trim();
  const bldg = document.getElementById('addr-building-input')?.value.trim();
  const street = document.getElementById('addr-street-input')?.value.trim();
  const ward = document.getElementById('addr-ward-select')?.value || 'Ward 7 · Navrangpura (West Zone)';
  const pin = document.getElementById('addr-pincode-input')?.value.trim() || '380009';
  const tax = document.getElementById('addr-tax-input')?.value.trim() || `07-04-${Math.floor(100 + Math.random() * 900)}-${Math.floor(1000 + Math.random() * 9000)}`;

  if (!flat || !bldg || !street) {
    alert('Please fill in all required address fields.');
    return;
  }

  if (editId) {
    const idx = (appState.savedAddresses || []).findIndex(a => a.id === editId);
    if (idx !== -1) {
      appState.savedAddresses[idx].label = typeRadio;
      appState.savedAddresses[idx].flatNo = flat;
      appState.savedAddresses[idx].street = `${bldg}, ${street}`;
      appState.savedAddresses[idx].landmark = street;
      appState.savedAddresses[idx].ward = ward;
      appState.savedAddresses[idx].pincode = pin;
      appState.savedAddresses[idx].taxIndexNo = tax;
    }
  } else {
    const isFirst = (!appState.savedAddresses || appState.savedAddresses.length === 0);
    const newAddr = {
      id: `ADDR-${Math.floor(10 + Math.random() * 90)}`,
      label: typeRadio,
      isPrimary: isFirst || typeRadio === 'Home',
      tag: typeRadio === 'Home' ? 'Primary Residence' : typeRadio === 'Workplace' ? 'Commercial Office' : 'Alternate Property',
      recipient: 'Priya Patel',
      flatNo: flat,
      street: `${bldg}, ${street}`,
      landmark: street,
      locality: ward.split('·')[1]?.trim() || 'Navrangpura',
      ward: ward,
      zone: 'West Zone',
      city: 'AMC Ahmedabad',
      pincode: pin,
      propertyUid: `AMC-W7-${Math.floor(1000 + Math.random() * 9000)}`,
      taxIndexNo: tax,
      electricityNo: `${Math.floor(10000000 + Math.random() * 90000000)} (Torrent Power)`,
      garbageSchedule: 'Daily 07:30 AM (Shift A)',
      waterSupply: '06:00 AM - 08:30 AM (Active)',
      isVerified: true
    };
    if (newAddr.isPrimary) {
      (appState.savedAddresses || []).forEach(a => a.isPrimary = false);
    }
    appState.savedAddresses.push(newAddr);
  }

  saveMasterState();
  closeAddAddressModal();
  renderSavedAddresses();
  showCivicaToast(`✅ Address successfully saved to AMC Ward Registry!`);
};

// Community Feed & Commute Friction
function renderCommunityIncidentFeed(filter = 'all') {
  const container = document.getElementById('community-incidents-list');
  if (!container) return;

  let items = [...appState.complaints];
  if (filter === 'critical') items = items.filter(i => i.severity === 'critical');
  else if (filter === 'trending') items = items.sort((a, b) => (b.confirmations || 0) - (a.confirmations || 0));
  else if (filter === 'resolved') items = items.filter(i => i.status === 'resolved');

  container.innerHTML = items.map(t => `
    <div class="crowdsource-incident-item">
      <div class="incident-upvote-box" onclick="confirmIncident('${t.id}')">
        <span style="font-size:1.1rem;">▲</span>
        <span class="upvote-count" id="upvote-${t.id}">${t.confirmations || 12}</span>
        <span class="upvote-label">Confirm</span>
      </div>
      <div style="flex-grow:1;">
        <div style="display:flex; justify-content:space-between; align-items:flex-start;">
          <div>
            <strong style="font-size:0.95rem; color:var(--civica-navy);">${t.title}</strong>
            <div style="font-size:0.75rem; color:#64748b; margin-top:2px;">${t.agency} · ${t.location} · ${t.slaDate}</div>
          </div>
          <span class="priority-status-pill ${t.status === 'in_progress' ? 'inprogress' : t.status === 'resolved' ? 'resolved' : 'new'}">
            ${t.status.replace('_', ' ').toUpperCase()}
          </span>
        </div>
        <p style="font-size:0.84rem; color:#334155; margin:8px 0 0 0; line-height:1.4;">${t.note}</p>
      </div>
    </div>
  `).join('');
}

window.filterCommunityFeed = function(category) {
  document.querySelectorAll('.feed-filter-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.filter === category);
  });
  renderCommunityIncidentFeed(category);
};

window.confirmIncident = function(ticketId) {
  const t = appState.complaints.find(c => c.id === ticketId);
  if (t) {
    t.confirmations = (t.confirmations || 0) + 1;
    saveMasterState();
    const el = document.getElementById(`upvote-${ticketId}`);
    if (el) el.textContent = t.confirmations;
    showCivicaToast(`✓ You verified this hazard! +2 Civic Karma points awarded.`);
  }
};

function renderTransitFriction() {
  const list = document.getElementById('transit-corridors-list');
  if (!list) return;

  list.innerHTML = window.GUJARAT_CIVIC_DATA.transit.map(t => `
    <div style="background:#ffffff; border:1px solid #cbd5e1; border-radius:var(--radius-sm); padding:12px; display:flex; justify-content:space-between; align-items:center;">
      <div>
        <strong style="font-size:0.92rem; color:var(--civica-navy);">${t.name}</strong>
        <div style="font-size:0.76rem; color:#64748b;">${t.corridor} · Delay: +${t.delayMinutes || 0}m</div>
      </div>
      <div style="text-align:right;">
        <div style="font-size:1.1rem; font-weight:800; color:var(--civica-gold-dark);">${t.eta}</div>
        <span style="font-size:0.7rem; font-weight:700; color:#10b981;">● ${t.status}</span>
      </div>
    </div>
  `).join('');
}

window.computeTransitFriction = function() {
  const friction = Math.floor(40 + Math.random() * 35);
  document.getElementById('friction-score-num').textContent = friction;
  document.getElementById('friction-label-text').textContent = friction > 60 ? 'Moderate Congestion (+9m transit delays)' : 'Optimal Commute Flow';
  showCivicaToast(`Analyzed live road sensors & BRTS telemetry: Friction Index is ${friction}/100.`);
};

window.recordCommuterPulse = function(type) {
  showCivicaToast(`🛰️ Telemetry recorded: Condition "${type}" reported to transit ops.`);
};

/* ==========================================================================
   MUNICIPAL OFFICER PORTAL CONTROLLERS (WITH COMMAND CENTER LINK)
   ========================================================================== */

window.switchOfficerTab = function(tabKey) {
  if (tabKey === 'command') {
    showCivicaToast('🔒 Role Restricted: Command Center requires separate Tier-1 ICCC login.');
    openLoginModal('command');
    return;
  }

  appState.activeOfficerTab = tabKey;

  document.querySelectorAll('.desktop-sidebar.officer-sidebar .sidebar-nav-item').forEach(n => {
    n.classList.remove('active');
  });
  document.getElementById(`of-nav-${tabKey}`)?.classList.add('active');

  const subViews = ['dashboard', 'inbox', 'action', 'notify', 'reports'];
  subViews.forEach(s => {
    const el = document.getElementById(`officer-view-${s}`);
    if (el) el.style.display = (s === tabKey) ? 'block' : 'none';
  });

  const urlBar = document.getElementById('officer-url-bar');
  if (urlBar) {
    urlBar.textContent = `https://civica.gujarat.in / officer / ${tabKey}`;
  }
  const officerBreadcrumb = document.getElementById('officer-breadcrumb-tab');
  if (officerBreadcrumb) {
    const officerLabels = {
      'dashboard': '01 Today\'s Shift',
      'inbox': '02 Complaint Inbox',
      'action': '03 Take Action & Escrow',
      'notify': '04 Notify & Ratings (5★)',
      'reports': '05 Municipal Resolution & Audit Reports'
    };
    officerBreadcrumb.textContent = officerLabels[tabKey] || tabKey;
  }

  if (tabKey === 'reports') {
    initResolutionAuditReports();
  } else if (tabKey === 'notify') {
    renderOfficerNotify(appState.selectedOfficerTicketId);
    renderOfficerRatingsSection();
  }
};

function renderOfficerDashboard() {
  const kpiOpen = document.getElementById('of-kpi-open');
  const kpiDue = document.getElementById('of-kpi-due');
  const kpiReply = document.getElementById('of-kpi-reply');
  const kpiResolved = document.getElementById('of-kpi-resolved');

  if (kpiOpen) kpiOpen.textContent = appState.officerKPIs.openTickets;
  if (kpiDue) kpiDue.textContent = appState.officerKPIs.dueToday;
  if (kpiReply) kpiReply.textContent = appState.officerKPIs.needCitizenReply;
  if (kpiResolved) kpiResolved.textContent = appState.officerKPIs.resolvedThisWeek;

  const pList = document.getElementById('of-priority-queue-list');
  if (pList) {
    pList.innerHTML = appState.complaints.slice(0, 4).map(item => `
      <div class="priority-item-row" onclick="openOfficerTicket('${item.id}')">
        <div class="priority-id-issue">
          <span class="priority-id">${item.shortId || item.id}</span>
          <span class="priority-place">${item.title}</span>
        </div>
        <span class="priority-status-pill ${item.status === 'in_progress' ? 'inprogress' : item.status === 'resolved' ? 'resolved' : 'new'}">
          ${item.status.replace('_', ' ').toUpperCase()}
        </span>
      </div>
    `).join('');
  }

  const shiftList = document.getElementById('of-shift-actions-list');
  if (shiftList) {
    shiftList.innerHTML = appState.shiftActions.map(action => {
      if (appState.editingShiftActionId === action.id) {
        return `
          <div class="shift-check-item editing" onclick="event.stopPropagation()">
            <input type="text" id="shift-edit-input-${action.id}" class="shift-edit-input" value="${String(action.text).replace(/"/g, '&quot;')}" onkeydown="handleShiftEditKey(event, ${action.id})">
            <div class="shift-edit-actions">
              <button type="button" class="btn-shift-save" onclick="saveShiftAction(${action.id})" title="Save changes">✓ Save</button>
              <button type="button" class="btn-shift-cancel" onclick="cancelShiftActionEdit()" title="Cancel editing">✕</button>
            </div>
          </div>
        `;
      }
      return `
        <div class="shift-check-item ${action.done ? 'done' : ''}">
          <div class="shift-item-main" onclick="toggleShiftAction(${action.id})">
            <input type="checkbox" ${action.done ? 'checked' : ''} style="cursor:pointer;" onclick="event.stopPropagation(); toggleShiftAction(${action.id})">
            <span class="shift-item-text">· ${action.text}</span>
          </div>
          <button type="button" class="btn-edit-shift" onclick="event.stopPropagation(); startEditShiftAction(${action.id})" title="Edit this checklist action">
            ✏️ Edit
          </button>
        </div>
      `;
    }).join('');
  }

  renderOfficerInbox(appState.inboxFilter);
  renderOfficerTakeAction(appState.selectedOfficerTicketId);
  renderOfficerNotify(appState.selectedOfficerTicketId);
}

window.startEditShiftAction = function(actionId) {
  appState.editingShiftActionId = actionId;
  renderOfficerDashboard();
  setTimeout(() => {
    const input = document.getElementById(`shift-edit-input-${actionId}`);
    if (input) {
      input.focus();
      input.select();
    }
  }, 40);
};

window.saveShiftAction = function(actionId) {
  const input = document.getElementById(`shift-edit-input-${actionId}`);
  if (!input) return;
  const newText = input.value.trim();
  if (!newText) {
    showCivicaToast('⚠️ Please enter an action description.');
    return;
  }
  const item = appState.shiftActions.find(a => a.id === actionId);
  if (item) {
    item.text = newText;
    appState.editingShiftActionId = null;
    saveMasterState();
    renderOfficerDashboard();
    showCivicaToast('✅ Shift action checklist updated.');
  }
};

window.cancelShiftActionEdit = function() {
  appState.editingShiftActionId = null;
  renderOfficerDashboard();
};

window.handleShiftEditKey = function(event, actionId) {
  if (event.key === 'Enter') {
    event.preventDefault();
    saveShiftAction(actionId);
  } else if (event.key === 'Escape') {
    event.preventDefault();
    cancelShiftActionEdit();
  }
};

window.promptAddNewShiftAction = function() {
  const text = prompt('Enter new Shift Action item:');
  if (text && text.trim()) {
    const newId = Date.now();
    appState.shiftActions.push({
      id: newId,
      text: text.trim(),
      done: false
    });
    saveMasterState();
    renderOfficerDashboard();
    showCivicaToast('✅ New shift action added to checklist.');
  }
};

window.toggleShiftAction = function(actionId) {
  const item = appState.shiftActions.find(a => a.id === actionId);
  if (item) {
    item.done = !item.done;
    saveMasterState();
    renderOfficerDashboard();
  }
};

function renderOfficerInbox(filterCategory = 'assigned_to_me') {
  appState.inboxFilter = filterCategory;

  document.querySelectorAll('.inbox-filter-btn').forEach(b => {
    b.classList.toggle('active', b.getAttribute('data-filter') === filterCategory);
  });

  const tbody = document.getElementById('of-inbox-tbody');
  if (!tbody) return;

  const filtered = appState.inboxTickets.filter(t => {
    if (filterCategory === 'all') return true;
    if (filterCategory === 'new') return t.status === 'new';
    if (filterCategory === 'assigned_to_me') return t.filterCategory === 'assigned_to_me' || t.status === 'in_progress';
    if (filterCategory === 'monsoon') return t.isMonsoon;
    if (filterCategory === 'sla_risk') return t.slaRisk;
    return true;
  });

  tbody.innerHTML = filtered.map(row => {
    const fullTicket = appState.complaints.find(c => c.id === row.fullId || c.id.includes(row.id));
    const depStatus = fullTicket ? fullTicket.depositStatus : 'held';
    const depBadge = depStatus === 'refunded'
      ? '<span class="deposit-status-badge status-refunded">✅ Refunded</span>'
      : depStatus === 'forfeited'
      ? '<span class="deposit-status-badge status-forfeited">❌ Forfeited</span>'
      : '<span class="deposit-status-badge status-held">🛡️ ₹50 Escrow</span>';

    const currentStatus = row.status || (fullTicket ? fullTicket.status : 'new');

    return `
      <tr onclick="openOfficerTicket('${row.fullId}')">
        <td><strong>${row.id}</strong></td>
        <td>${row.citizen}</td>
        <td>${row.issue}</td>
        <td>${row.place}</td>
        <td>${depBadge}</td>
        <td>
          <select class="inbox-status-select status-${currentStatus}" onclick="event.stopPropagation()" onchange="changeOfficerInboxStatus('${row.fullId}', this.value, event)" title="Directly change ticket status">
            <option value="new" ${currentStatus === 'new' ? 'selected' : ''}>🆕 New</option>
            <option value="assigned" ${currentStatus === 'assigned' ? 'selected' : ''}>👷 Assigned</option>
            <option value="in_progress" ${currentStatus === 'in_progress' ? 'selected' : ''}>⚡ In progress</option>
            <option value="need_info" ${currentStatus === 'need_info' ? 'selected' : ''}>❓ Need info</option>
            <option value="resolved" ${currentStatus === 'resolved' ? 'selected' : ''}>✅ Resolved</option>
          </select>
        </td>
        <td>
          <div style="display:flex; align-items:center; gap:6px;">
            <button type="button" class="btn-inline-action" onclick="event.stopPropagation(); openOfficerTicket('${row.fullId}')">Inspect &rarr;</button>
            <button type="button" class="btn-inline-edit-status" onclick="event.stopPropagation(); openOfficerStatusModal('${row.fullId}')" title="Edit status and add remarks">✏️ Edit Status</button>
          </div>
        </td>
      </tr>
    `;
  }).join('');
}

window.changeOfficerInboxStatus = function(fullTicketId, newStatus, event) {
  if (event && event.stopPropagation) event.stopPropagation();
  const statusLabels = {
    'new': 'New',
    'assigned': 'Assigned',
    'in_progress': 'In progress',
    'need_info': 'Need info',
    'resolved': 'Resolved'
  };
  const label = statusLabels[newStatus] || newStatus;

  // 1. Update inbox item
  const inboxItem = appState.inboxTickets.find(t => t.fullId === fullTicketId || t.id === fullTicketId || (t.fullId && t.fullId.includes(fullTicketId)));
  if (inboxItem) {
    inboxItem.status = newStatus;
    inboxItem.statusLabel = label;
  }

  // 2. Update master complaints item
  const ticket = appState.complaints.find(c => c.id === fullTicketId || c.shortId === fullTicketId || (inboxItem && c.id === inboxItem.fullId));
  if (ticket) {
    ticket.status = newStatus;
    ticket.statusLabel = label;
    if (newStatus === 'resolved') {
      ticket.stage = 'resolved';
      if (ticket.depositStatus === 'held') {
        officerVerifyAndRefundTicket();
      }
    } else if (newStatus === 'in_progress') {
      ticket.stage = 'dispatched';
    } else if (newStatus === 'assigned') {
      ticket.stage = 'investigation';
    }
  }

  // 3. Update KPIs
  if (appState.officerKPIs) {
    appState.officerKPIs.resolvedThisWeek = appState.complaints.filter(c => c.status === 'resolved').length;
    appState.officerKPIs.openTickets = appState.complaints.filter(c => c.status !== 'resolved').length;
  }

  saveMasterState();
  renderOfficerDashboard();
  renderOfficerInbox(appState.inboxFilter);
  if (typeof renderDesktopPortal === 'function') renderDesktopPortal();
  showCivicaToast(`✅ Complaint #${inboxItem ? inboxItem.id : fullTicketId} status updated to ${label}.`);
};

window.openOfficerStatusModal = function(fullTicketId) {
  const inboxItem = appState.inboxTickets.find(t => t.fullId === fullTicketId || t.id === fullTicketId || (t.fullId && t.fullId.includes(fullTicketId)));
  const ticket = appState.complaints.find(c => c.id === fullTicketId || c.shortId === fullTicketId || (inboxItem && c.id === inboxItem.fullId)) || appState.complaints[0];

  const modal = document.getElementById('officer-status-modal-overlay');
  if (!modal) return;

  const keyInput = document.getElementById('status-modal-ticket-key');
  if (keyInput) keyInput.value = ticket ? ticket.id : fullTicketId;

  const idEl = document.getElementById('status-modal-ticket-id');
  if (idEl) idEl.textContent = ticket ? `${ticket.id} (${ticket.shortId || ''})` : fullTicketId;

  const metaEl = document.getElementById('status-modal-ticket-meta');
  if (metaEl && ticket) {
    metaEl.textContent = `${ticket.title || ticket.categoryName || 'Issue'} · ${ticket.place || ticket.address || 'Ward 7'} · Citizen ${ticket.citizen || 'Resident'}`;
  }

  const selectEl = document.getElementById('status-modal-select');
  const curStatus = (inboxItem && inboxItem.status) || (ticket && ticket.status) || 'new';
  if (selectEl) {
    selectEl.value = curStatus;
    onStatusModalSelectChange(curStatus);
  }

  const remarksEl = document.getElementById('status-modal-remarks');
  if (remarksEl) {
    remarksEl.value = ticket && ticket.note ? ticket.note : '';
  }

  modal.classList.add('active');
};

window.closeOfficerStatusModal = function() {
  const modal = document.getElementById('officer-status-modal-overlay');
  if (modal) modal.classList.remove('active');
};

window.onStatusModalSelectChange = function(statusVal) {
  const notice = document.getElementById('status-modal-escrow-notice');
  if (notice) {
    notice.style.display = (statusVal === 'resolved') ? 'block' : 'none';
  }
};

window.saveOfficerStatusFromModal = function() {
  const keyInput = document.getElementById('status-modal-ticket-key');
  const ticketKey = keyInput ? keyInput.value : null;
  const selectEl = document.getElementById('status-modal-select');
  const newStatus = selectEl ? selectEl.value : 'in_progress';
  const remarksEl = document.getElementById('status-modal-remarks');
  const remarks = remarksEl ? remarksEl.value.trim() : '';

  if (!ticketKey) {
    closeOfficerStatusModal();
    return;
  }

  if (remarks) {
    const ticket = appState.complaints.find(c => c.id === ticketKey || c.shortId === ticketKey);
    if (ticket) ticket.note = remarks;
  }

  changeOfficerInboxStatus(ticketKey, newStatus);
  closeOfficerStatusModal();
};

window.filterOfficerInbox = function(category) {
  renderOfficerInbox(category);
};

window.openOfficerTicket = function(fullTicketId) {
  appState.selectedOfficerTicketId = fullTicketId;
  appState.selectedOfficerTicket = appState.complaints.find(c => c.id === fullTicketId) || appState.complaints[0];
  renderOfficerTakeAction(fullTicketId);
  renderOfficerNotify(fullTicketId);
  switchOfficerTab('action');
};

window.handleOfficerProblemDropdownChange = function(ticketId) {
  appState.selectedOfficerTicketId = ticketId;
  appState.selectedOfficerTicket = appState.complaints.find(c => c.id === ticketId) || appState.complaints[0];
  renderOfficerTakeAction(ticketId);
  renderOfficerNotify(ticketId);
  showCivicaToast(`Switched problem to ${ticketId}`);
};

function renderOfficerTakeAction(ticketId) {
  const ticket = appState.complaints.find(c => c.id === ticketId) || appState.complaints[0];
  if (!ticket) return;

  // Sync / Populate Problem Dropdown Menu
  const ticketDropdown = document.getElementById('act-ticket-dropdown');
  if (ticketDropdown) {
    if (ticketDropdown.options.length !== appState.complaints.length) {
      ticketDropdown.innerHTML = appState.complaints.map(c => `
        <option value="${c.id}">${c.id} — ${c.title || c.categoryName} (${c.citizen || 'Citizen'})</option>
      `).join('');
    }
    ticketDropdown.value = ticket.id;
  }

  const actTicketId = document.getElementById('act-ticket-id');
  if (actTicketId) actTicketId.textContent = ticket.id;

  const actTicketTitle = document.getElementById('act-ticket-title');
  if (actTicketTitle) actTicketTitle.textContent = ticket.title;

  const actTicketMeta = document.getElementById('act-ticket-meta');
  if (actTicketMeta) actTicketMeta.textContent = `Citizen ${ticket.citizen || 'K. Shah'} · ${ticket.ward || 'Ward 7'} · SLA ${ticket.slaDate || '20 Sep'}`;

  const crewSelect = document.getElementById('act-crew-select');
  if (crewSelect) {
    if (ticket.assignedCrew) {
      let matched = false;
      for (let i = 0; i < crewSelect.options.length; i++) {
        if (crewSelect.options[i].value === ticket.assignedCrew ||
            crewSelect.options[i].value.toLowerCase().includes(ticket.assignedCrew.toLowerCase()) ||
            ticket.assignedCrew.toLowerCase().includes(crewSelect.options[i].value.toLowerCase())) {
          crewSelect.selectedIndex = i;
          matched = true;
          break;
        }
      }
      if (!matched) {
        autoSelectCrewByType(crewSelect, ticket.type);
      }
    } else {
      autoSelectCrewByType(crewSelect, ticket.type);
    }
  }

  const escrowBadge = document.getElementById('officer-escrow-badge');
  const escrowActions = document.getElementById('officer-escrow-actions');

  if (escrowBadge) {
    if (ticket.depositStatus === 'refunded') {
      escrowBadge.className = 'deposit-status-badge status-refunded';
      escrowBadge.innerHTML = '✅ ₹50 Refunded to Citizen';
      if (escrowActions) escrowActions.style.display = 'none';
    } else if (ticket.depositStatus === 'forfeited') {
      escrowBadge.className = 'deposit-status-badge status-forfeited';
      escrowBadge.innerHTML = '❌ ₹50 Forfeited (Spam)';
      if (escrowActions) escrowActions.style.display = 'none';
    } else {
      escrowBadge.className = 'deposit-status-badge status-held';
      escrowBadge.innerHTML = '🛡️ ₹50 Held in Escrow';
      if (escrowActions) escrowActions.style.display = 'grid';
    }
  }
}

function autoSelectCrewByType(selectEl, ticketType) {
  const typeMap = {
    'streetlight': 'Team 05',
    'pothole': 'Team 08',
    'garbage': 'Team 09',
    'waterlogging': 'Team 03',
    'water': 'Team 02',
    'brts': 'Team 15',
    'others': 'Team 01'
  };
  const prefix = typeMap[ticketType] || 'Team 01';
  for (let i = 0; i < selectEl.options.length; i++) {
    if (selectEl.options[i].value.startsWith(prefix)) {
      selectEl.selectedIndex = i;
      break;
    }
  }
}

window.officerVerifyAndRefundTicket = function() {
  const ticket = appState.complaints.find(c => c.id === appState.selectedOfficerTicketId);
  if (!ticket) return;

  if (ticket.depositStatus === 'refunded') {
    alert(`Deposit for ${ticket.id} already refunded.`);
    return;
  }

  ticket.depositStatus = 'refunded';
  ticket.note += ` [Inspected by R. Patel: Verified genuine civic issue. ₹50 security deposit refunded to resident wallet.]`;

  appState.citizenWallet.balance = (Number(appState.citizenWallet.balance) || 0) + 50.00;
  appState.citizenWallet.transactions.unshift({
    id: `TX-${Math.floor(1000 + Math.random() * 9000)}`,
    type: 'credit',
    title: `Refund · ${ticket.id} Verified Genuine`,
    amount: 50.00,
    date: 'Just now',
    method: 'Municipal Escrow Refund',
    status: 'completed',
    ticketId: ticket.id
  });

  saveMasterState();
  renderCivicWallet();
  renderOfficerTakeAction(ticket.id);
  renderDesktopPortal();
  showCivicaToast(`✅ Verified genuine! ₹50 refund credited to resident's Civic Wallet.`);
};

window.officerForfeitDeposit = function() {
  const ticket = appState.complaints.find(c => c.id === appState.selectedOfficerTicketId);
  if (!ticket) return;

  const confirmForfeit = confirm(`Flag ${ticket.id} as fake / prank?\n\n₹50 will be forfeited to the Municipal Spam Penalty Fund.`);
  if (!confirmForfeit) return;

  ticket.depositStatus = 'forfeited';
  ticket.status = 'closed';
  ticket.stage = 'resolved';
  ticket.note += ` [Inspected by R. Patel: Flagged as fake/prank. ₹50 deposit forfeited.]`;

  saveMasterState();
  renderCivicWallet();
  renderOfficerTakeAction(ticket.id);
  showCivicaToast(`❌ Ticket flagged as prank. Deposit forfeited.`);
};

window.handleCrewAssignment = function(newCrew) {
  const ticket = appState.complaints.find(c => c.id === appState.selectedOfficerTicketId);
  if (ticket) {
    ticket.assignedCrew = newCrew;
    saveMasterState();
    showCivicaToast(`Crew assigned: ${newCrew}`);
  }
};

window.officerQuickDecide = function(decision) {
  const ticket = appState.complaints.find(c => c.id === appState.selectedOfficerTicketId);
  if (!ticket) return;

  if (decision === 'assign') {
    ticket.status = 'assigned';
    ticket.stage = 'investigation';
    showCivicaToast(`Assigned to Crew 14.`);
  } else if (decision === 'in_progress') {
    ticket.status = 'in_progress';
    ticket.stage = 'dispatched';
    showCivicaToast(`Marked IN PROGRESS.`);
  } else if (decision === 'need_info') {
    ticket.status = 'need_info';
    showCivicaToast(`Requested info from citizen.`);
  } else if (decision === 'resolved') {
    ticket.status = 'resolved';
    ticket.stage = 'resolved';
    if (ticket.depositStatus === 'held') officerVerifyAndRefundTicket();
    showCivicaToast(`Ticket marked RESOLVED.`);
  }

  saveMasterState();
  renderOfficerDashboard();
  renderOfficerTakeAction(ticket.id);
  renderDesktopPortal();
};

window.handleNotifyRecipientChange = function(targetVal) {
  if (targetVal === 'broadcast_all') {
    const titleEl = document.getElementById('notify-recipient-title');
    if (titleEl) titleEl.textContent = 'Broadcast Alert to All Ward 7 Citizens';
    const channelBadge = document.getElementById('notify-channel-badge');
    if (channelBadge) channelBadge.textContent = '📢 Ward-wide Broadcast Push';
    const msgBox = document.getElementById('notify-msg-textarea');
    if (msgBox) msgBox.value = 'AMC Ward 7 Advisory: Scheduled preventive maintenance across electrical feeders today from 14:00 to 16:00. Please rate AMC communication upon restoration.';
    return;
  }
  appState.selectedOfficerTicketId = targetVal;
  renderOfficerNotify(targetVal);
};

function renderOfficerNotify(ticketId) {
  const ticket = appState.complaints.find(c => c.id === ticketId) || appState.complaints[0];
  if (!ticket) return;

  const titleEl = document.getElementById('notify-recipient-title');
  if (titleEl) titleEl.textContent = `Message to ${ticket.citizen || 'K. Shah'}`;

  const targetSelect = document.getElementById('notify-citizen-target-select');
  if (targetSelect && ticket.id) {
    if (targetSelect.querySelector(`option[value="${ticket.id}"]`)) {
      targetSelect.value = ticket.id;
    }
  }

  applyReadyTemplate(appState.activeTemplateKey);
  renderOfficerRatingsSection();
}

window.switchNotifyLanguage = function(lang) {
  appState.notifyLang = lang;
  document.querySelectorAll('.language-pill-group .lang-pill').forEach(p => {
    p.classList.toggle('active', p.id === `pill-lang-${lang}`);
  });
  applyReadyTemplate(appState.activeTemplateKey);
};

window.applyReadyTemplate = function(templateKey) {
  appState.activeTemplateKey = templateKey;
  const templateData = window.GUJARAT_CIVIC_DATA.reportTemplates[templateKey] || window.GUJARAT_CIVIC_DATA.reportTemplates.parts_ordered;
  const textarea = document.getElementById('notify-msg-textarea');
  if (!textarea) return;

  const ticket = appState.complaints.find(c => c.id === appState.selectedOfficerTicketId) || appState.complaints[0];
  let raw = appState.notifyLang === 'gu' ? templateData.gu : appState.notifyLang === 'en' ? templateData.en : `${templateData.gu}\n\n---\n\n${templateData.en}`;

  textarea.value = raw
    .replace(/{citizen}/g, ticket.citizen || "નાગરિક")
    .replace(/{id}/g, ticket.id)
    .replace(/{issue}/g, ticket.categoryGu || "સ્ટ્રીટલાઇટ")
    .replace(/{officer}/g, "R. Patel");
};

window.sendOfficialOfficerUpdate = function() {
  const msg = document.getElementById('notify-msg-textarea')?.value.trim();
  if (!msg) {
    alert('Please enter an official notification message for the citizen.');
    return;
  }

  const ticket = appState.complaints.find(c => c.id === appState.selectedOfficerTicketId) || appState.complaints[0];
  if (ticket) {
    ticket.note = msg;
    saveMasterState();

    const livePreview = document.getElementById('live-received-note-text');
    if (livePreview) livePreview.textContent = msg;

    const dtTicketNote = document.getElementById('dt-ticket-note');
    if (dtTicketNote) dtTicketNote.textContent = msg;

    renderDesktopPortal();
    showCivicaToast(`🚀 Notification dispatched to ${ticket.citizen || 'resident'}! Rating request sent.`);
  }
};

/* ==========================================================================
   OFFICER CITIZEN 5-STAR RATINGS HUB CONTROLLERS
   ========================================================================== */

window.setOfficerSimStar = function(val) {
  appState.simRatingVal = val;
  const starLabels = {
    1: '1 / 5 (Needs Improvement)',
    2: '2 / 5 (Below Average)',
    3: '3 / 5 (Satisfactory)',
    4: '4 / 5 (Very Good)',
    5: '5 / 5 (Exceptional)'
  };
  const scoreTxt = document.getElementById('officer-sim-score-text');
  if (scoreTxt) scoreTxt.textContent = starLabels[val] || `${val} / 5`;

  const starBtns = document.querySelectorAll('#officer-sim-stars .star-btn');
  starBtns.forEach((btn) => {
    const btnVal = Number(btn.getAttribute('data-val') || 0);
    btn.classList.toggle('active', btnVal <= val);
  });
};

window.submitOfficerSimRating = function() {
  const citizenMeta = document.getElementById('sim-citizen-select')?.value || 'Priya Patel · Navrangpura Ward 7';
  const parts = citizenMeta.split(' · ');
  const citizenName = parts[0] || 'Resident';
  const wardName = parts[1] || 'Ward 7';
  const stars = appState.simRatingVal || 5;
  const comment = document.getElementById('officer-sim-comment')?.value.trim() || 'Prompt municipal communication and fast field resolution!';

  const newRating = {
    id: `RAT-${Math.floor(100 + Math.random() * 900)}`,
    citizen: citizenName,
    ward: wardName,
    stars: stars,
    ticketId: appState.selectedOfficerTicketId || 'GJ-AMC-2026-18492',
    notificationId: `NOTIF-${Math.floor(100 + Math.random() * 900)}`,
    serviceType: 'Officer Response & Resolution',
    comment: comment,
    timestamp: 'Just now',
    verifiedResident: true
  };

  if (!appState.citizenRatings) appState.citizenRatings = [];
  appState.citizenRatings.unshift(newRating);
  saveMasterState();

  renderOfficerRatingsSection();
  showCivicaToast(`⭐ Rating of ${stars}/5 recorded from ${citizenName}!`);
};

window.setCitizenRatingScore = function(score) {
  appState.citizenTrackRatingScore = score;
  const labels = {
    1: '1 / 5 (Poor)',
    2: '2 / 5 (Fair)',
    3: '3 / 5 (Good)',
    4: '4 / 5 (Very Good)',
    5: '5 / 5 (Excellent Service)'
  };
  const disp = document.getElementById('citizen-star-score-display');
  if (disp) disp.textContent = labels[score] || `${score} / 5`;

  const starBtns = document.querySelectorAll('#citizen-star-selector .star-btn');
  starBtns.forEach((btn, idx) => {
    btn.classList.toggle('active', idx < score);
  });
};

window.submitCitizenRatingFromTrack = function() {
  const score = appState.citizenTrackRatingScore || 5;
  const comment = document.getElementById('citizen-rating-comment-input')?.value.trim() || 'Very prompt update from Officer R. Patel. Fixture replacement was well-communicated.';
  const citizenName = appState.currentUser ? appState.currentUser.name : 'Priya Patel';

  const newRating = {
    id: `RAT-${Math.floor(100 + Math.random() * 900)}`,
    citizen: citizenName,
    ward: 'Ward 7 · Navrangpura',
    stars: score,
    ticketId: appState.selectedOfficerTicketId || 'GJ-AMC-2026-18492',
    notificationId: 'NOTIF-OFFICIAL',
    serviceType: 'Field Engineering & Resolution',
    comment: comment,
    timestamp: 'Just now',
    verifiedResident: true
  };

  if (!appState.citizenRatings) appState.citizenRatings = [];
  appState.citizenRatings.unshift(newRating);
  saveMasterState();

  const statusTag = document.getElementById('citizen-rate-status-tag');
  if (statusTag) {
    statusTag.textContent = `✓ Rating of ${score}/5 Submitted to Officer!`;
    statusTag.style.color = '#059669';
  }
  showCivicaToast(`⭐ Thank you! Your rating of ${score}/5 was submitted to Officer R. Patel.`);
  renderOfficerRatingsSection();
};

window.filterOfficerRatings = function(starFilter) {
  appState.ratingsFilter = starFilter;
  document.querySelectorAll('#officer-ratings-hub-section .inbox-filter-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  if (starFilter === 'all') {
    document.getElementById('btn-filter-rate-all')?.classList.add('active');
  } else if (Number(starFilter) === 5) {
    document.getElementById('btn-filter-rate-5')?.classList.add('active');
  } else if (Number(starFilter) === 4) {
    document.getElementById('btn-filter-rate-4')?.classList.add('active');
  }
  renderRatingsFeed(starFilter);
};

window.renderOfficerRatingsSection = function() {
  if (!appState.citizenRatings || appState.citizenRatings.length === 0) {
    appState.citizenRatings = [...DEFAULT_CITIZEN_RATINGS];
  }

  const ratings = appState.citizenRatings;
  const total = ratings.length;
  if (total === 0) return;

  const sum = ratings.reduce((acc, r) => acc + Number(r.stars), 0);
  const avg = (sum / total).toFixed(1);

  const count5 = ratings.filter(r => Number(r.stars) === 5).length;
  const count4 = ratings.filter(r => Number(r.stars) === 4).length;
  const count3 = ratings.filter(r => Number(r.stars) === 3).length;
  const count2 = ratings.filter(r => Number(r.stars) === 2).length;
  const count1 = ratings.filter(r => Number(r.stars) === 1).length;

  const pct5 = Math.round((count5 / total) * 100);
  const pct4 = Math.round((count4 / total) * 100);
  const pct3 = Math.round((count3 / total) * 100);
  const pct2 = Math.round((count2 / total) * 100);
  const pct1 = Math.round((count1 / total) * 100);

  // Update Scorecards
  const hubScore = document.getElementById('officer-hub-score-display');
  if (hubScore) hubScore.textContent = `${avg} / 5.0`;
  const hubCount = document.getElementById('officer-hub-count-display');
  if (hubCount) hubCount.textContent = total;

  const kpiAvg = document.getElementById('kpi-avg-rating');
  if (kpiAvg) kpiAvg.innerHTML = `${avg} <span style="font-size:1rem;">/ 5</span>`;
  const kpiTotal = document.getElementById('kpi-total-ratings');
  if (kpiTotal) kpiTotal.textContent = total;
  const kpi5 = document.getElementById('kpi-fivestar-pct');
  if (kpi5) kpi5.textContent = `${pct5}%`;

  // Update Bars
  const b5 = document.getElementById('bar-star-5'); if (b5) b5.style.width = `${pct5}%`;
  const b4 = document.getElementById('bar-star-4'); if (b4) b4.style.width = `${pct4}%`;
  const b3 = document.getElementById('bar-star-3'); if (b3) b3.style.width = `${pct3}%`;
  const b2 = document.getElementById('bar-star-2'); if (b2) b2.style.width = `${pct2}%`;
  const b1 = document.getElementById('bar-star-1'); if (b1) b1.style.width = `${pct1}%`;

  const c5 = document.getElementById('count-star-5'); if (c5) c5.textContent = count5;
  const c4 = document.getElementById('count-star-4'); if (c4) c4.textContent = count4;
  const c3 = document.getElementById('count-star-3'); if (c3) c3.textContent = count3;
  const c2 = document.getElementById('count-star-2'); if (c2) c2.textContent = count2;
  const c1 = document.getElementById('count-star-1'); if (c1) c1.textContent = count1;

  // Render Reviews List
  renderRatingsFeed(appState.ratingsFilter || 'all');
};

function renderRatingsFeed(filter) {
  const container = document.getElementById('officer-reviews-container');
  if (!container) return;

  let list = appState.citizenRatings || [];
  if (filter && filter !== 'all') {
    list = list.filter(r => Number(r.stars) === Number(filter));
  }

  if (list.length === 0) {
    container.innerHTML = '<div style="padding:20px; text-align:center; color:#64748b;">No reviews found for this filter.</div>';
    return;
  }

  container.innerHTML = list.map(item => {
    const starStr = '★'.repeat(item.stars) + '☆'.repeat(5 - item.stars);
    const initials = item.citizen.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();
    return `
      <div class="citizen-review-item">
        <div class="review-top-row">
          <div class="review-citizen-meta">
            <div class="citizen-avatar-pill">${initials}</div>
            <div>
              <strong style="color:var(--civica-navy); font-size:0.9rem;">${item.citizen}</strong>
              <div style="font-size:0.72rem; color:#64748b;">${item.ward || 'Ward 7'} · <span style="color:#059669; font-weight:600;">✓ Verified Resident</span></div>
            </div>
          </div>
          <span class="star-badge-gold">${starStr} ${item.stars} / 5</span>
        </div>
        <p class="review-quote-text">"${item.comment}"</p>
        <div class="review-footer-tag">
          <span>Ticket: <strong>${item.ticketId}</strong> · ${item.serviceType || 'Municipal Service'}</span>
          <span>${item.timestamp}</span>
        </div>
      </div>
    `;
  }).join('');
}

/* ==========================================================================
   COMMAND CENTER & GEOSPATIAL DISPATCH TERMINAL CONTROLLERS
   ========================================================================== */

function initTacticalMap() {
  const mapElement = document.getElementById('map');
  if (!mapElement) return;

  if (!leafletMap) {
    // Center on Ahmedabad West Zone (Navrangpura / CG Road)
    leafletMap = L.map('map', {
      center: [23.0375, 72.5625],
      zoom: 13,
      zoomControl: true
    });

    // Dark Carto Tile Layer
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; CartoDB & Ahmedabad Municipal Corporation',
      maxZoom: 19
    }).addTo(leafletMap);
  }

  setTimeout(() => {
    leafletMap.invalidateSize();
    refreshMapMarkers();
  }, 200);
}

function refreshMapMarkers() {
  if (!leafletMap) return;

  // Clear existing markers
  mapMarkers.forEach(m => leafletMap.removeLayer(m));
  mapMarkers = [];

  const heatPoints = [];

  appState.complaints.forEach(item => {
    const coords = item.coords || [23.0375, 72.5625];
    const isCritical = item.severity === 'critical';

    heatPoints.push([coords[0], coords[1], isCritical ? 1.0 : 0.6]);

    const markerColor = item.status === 'resolved' ? '#10b981' : isCritical ? '#f43f5e' : item.severity === 'high' ? '#f59e0b' : '#38bdf8';

    const customIcon = L.divIcon({
      className: 'custom-leaflet-pin',
      html: `
        <div style="width:28px; height:28px; border-radius:50%; background:${markerColor}; border:2px solid #ffffff; box-shadow:0 0 14px ${markerColor}; display:flex; align-items:center; justify-content:center; color:#060913; font-weight:800; font-size:12px;">
          ${item.categoryName ? item.categoryName.charAt(0) : '●'}
        </div>
      `,
      iconSize: [28, 28],
      iconAnchor: [14, 14]
    });

    const marker = L.marker(coords, { icon: customIcon }).addTo(leafletMap);

    marker.bindPopup(`
      <div style="background:#0f172a; color:#fff; padding:12px; border-radius:8px; font-family:sans-serif; min-width:220px;">
        <span style="font-size:11px; font-mono; color:#38bdf8; font-weight:bold;">${item.id}</span>
        <h4 style="margin:4px 0 6px 0; font-size:14px; color:#ffffff;">${item.title}</h4>
        <p style="margin:0 0 8px 0; font-size:12px; color:#cbd5e1;">${item.location} · ${item.agency}</p>
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <span style="font-size:11px; font-weight:bold; color:${markerColor}; text-transform:uppercase;">${item.status}</span>
          <button onclick="openOfficerTicket('${item.id}')" style="background:#38bdf8; color:#060913; border:none; padding:4px 8px; border-radius:4px; font-size:11px; font-weight:bold; cursor:pointer;">Inspect</button>
        </div>
      </div>
    `);

    mapMarkers.push(marker);
  });

  // Prepare Heatmap layer
  if (window.L && window.L.heatLayer) {
    if (heatmapLayer) leafletMap.removeLayer(heatmapLayer);
    heatmapLayer = L.heatLayer(heatPoints, { radius: 25, blur: 15, maxZoom: 17 });
    if (appState.heatmapVisible) heatmapLayer.addTo(leafletMap);
  }
}

window.toggleMapHeatmap = function() {
  if (!leafletMap || !heatmapLayer) return;
  appState.heatmapVisible = !appState.heatmapVisible;
  const btn = document.getElementById('btn-toggle-heatmap');
  if (appState.heatmapVisible) {
    heatmapLayer.addTo(leafletMap);
    if (btn) btn.classList.add('active');
    showCivicaToast('🔥 Incident density heatmap active.');
  } else {
    leafletMap.removeLayer(heatmapLayer);
    if (btn) btn.classList.remove('active');
  }
};

window.recenterMap = function() {
  if (leafletMap) {
    leafletMap.setView([23.0375, 72.5625], 13);
    showCivicaToast('Centered on AMC West Zone.');
  }
};

function renderKanbanBoard() {
  const lanes = {
    backlog: document.getElementById('cards-lane-backlog'),
    investigation: document.getElementById('cards-lane-investigation'),
    dispatched: document.getElementById('cards-lane-dispatched'),
    resolved: document.getElementById('cards-lane-resolved')
  };

  if (!lanes.backlog) return;

  Object.values(lanes).forEach(l => l.innerHTML = '');

  const counts = { backlog: 0, investigation: 0, dispatched: 0, resolved: 0 };
  const filter = appState.kanbanDeptFilter;

  appState.complaints.forEach(item => {
    if (filter !== 'all' && item.department !== filter) return;

    const laneKey = item.stage || (item.status === 'resolved' ? 'resolved' : item.status === 'in_progress' ? 'dispatched' : item.status === 'assigned' ? 'investigation' : 'backlog');
    if (lanes[laneKey]) {
      counts[laneKey]++;
      const card = document.createElement('div');
      card.className = 'kanban-card-item';
      card.innerHTML = `
        <div class="kcard-top">
          <span class="kcard-id">${item.shortId || item.id}</span>
          <span class="kcard-urgency urgency-${item.severity || 'routine'}">${item.severity || 'routine'}</span>
        </div>
        <div class="kcard-title">${item.title}</div>
        <div class="kcard-meta">${item.location} · ${item.assignedCrew || 'Unassigned'}</div>
        <div class="kcard-actions">
          <button onclick="openOfficerTicket('${item.id}')" class="btn-advance-ticket">Inspect</button>
          <button onclick="finishKanbanCard('${item.id}')" class="btn-advance-ticket btn-finish-ticket">✓ Finish &rarr;</button>
        </div>
      `;
      lanes[laneKey].appendChild(card);
    }
  });

  document.getElementById('badge-lane-backlog').textContent = counts.backlog;
  document.getElementById('badge-lane-investigation').textContent = counts.investigation;
  document.getElementById('badge-lane-dispatched').textContent = counts.dispatched;
  document.getElementById('badge-lane-resolved').textContent = counts.resolved;
}

window.filterKanbanByDept = function(dept) {
  appState.kanbanDeptFilter = dept;
  renderKanbanBoard();
};

window.finishKanbanCard = function(ticketId) {
  const item = appState.complaints.find(c => c.id === ticketId);
  if (!item) return;

  item.stage = 'resolved';
  item.status = 'resolved';
  if (item.depositStatus === 'held') {
    officerVerifyAndRefundTicket();
  }
  saveMasterState();
  renderKanbanBoard();
  renderOfficerDashboard();
  renderDesktopPortal();
  showCivicaToast(`✅ Ticket ${item.id} moved to FINISH section.`);
};

window.advanceKanbanCard = window.finishKanbanCard;

window.openDispatchCrewModal = function() {
  const m = document.getElementById('dispatch-modal-overlay');
  if (m) m.classList.add('active');
};

window.closeDispatchCrewModal = function() {
  const m = document.getElementById('dispatch-modal-overlay');
  if (m) m.classList.remove('active');
};

window.confirmCrewDispatch = function() {
  const crew = document.getElementById('dispatch-unit-select')?.value;
  closeDispatchCrewModal();
  showCivicaToast(`🚒 Field Dispatch Alert: ${crew} mobilized with GPS tracking.`);
};

window.openBroadcastModal = function() {
  const m = document.getElementById('broadcast-modal-overlay');
  if (m) m.classList.add('active');
};

window.closeBroadcastModal = function() {
  const m = document.getElementById('broadcast-modal-overlay');
  if (m) m.classList.remove('active');
};

window.executeBroadcastAlert = function() {
  const text = document.getElementById('broadcast-text-input')?.value.trim();
  if (!text) return;
  closeBroadcastModal();
  showCivicaToast(`📢 Citywide Broadcast Dispatched: "${text}"`);
};

/* ==========================================================================
   CIVICA AI COPILOT (GEMINI & CHATGPT ENGINE)
   ========================================================================== */

function generateCivicAiResponse(rawPrompt, preferredLang = appState.language) {
  const prompt = (rawPrompt || '').toLowerCase().trim();
  const currentTicket = appState.complaints.find(c => c.id === appState.selectedOfficerTicketId) || appState.complaints[0] || { id: 'GJ-AMC-2026-18492' };

  const isGujarati = preferredLang === 'gu' || /[\u0A80-\u0AFF]/.test(rawPrompt) || prompt.includes('gujarati') || prompt.includes('લાઇટ') || prompt.includes('રિફંડ');
  const isHindi = preferredLang === 'hi' || /[\u0900-\u097F]/.test(rawPrompt) || prompt.includes('hindi') || prompt.includes('लाइट') || prompt.includes('रिफंड');

  if (isGujarati) {
    if (prompt.includes('લાઇટ') || prompt.includes('streetlight') || prompt.includes('સ્થિતિ')) {
      return `
        <strong>ફરિયાદ લાઇવ સ્થિતિ (${currentTicket.id})</strong>
        <p style="margin:4px 0;">આપની શેરી લાઈટ ફરિયાદ (CG Road, Navrangpura) AMC વિદ્યુત વિભાગ હેઠળ પ્રગતિમાં છે. 19 સપ્ટેમ્બરે નવું 90W LED ફિક્સ્ચર ઇન્સ્ટોલ થશે.</p>
        <p style="margin:4px 0 0 0; color:#166534;">🛡️ ₹50 ડિપોઝિટ સુરક્ષિત છે અને કામ પૂર્ણ થતાં જ ૧૦૦% આપના વૉલેટમાં પરત મળશે.</p>
      `;
    }
    if (prompt.includes('રિફંડ') || prompt.includes('૫૦') || prompt.includes('50') || prompt.includes('એસ્ક્રો')) {
      return `
        <strong>🛡️ ₹50 રિફંડેબલ એસ્ક્રો ડિપોઝિટ નીતિ</strong>
        <p style="margin:4px 0;">નકલી ફરિયાદો રોકવા ₹50 ડિપોઝિટ લેવાય છે. AMC અધિકારી સ્થળ તપાસ કરીને ફરિયાદ વાસ્તવિક હોવાની પુષ્ટિ કરે કે તુરંત ૧૦૦% રકમ આપના વૉલેટમાં જમા થાય છે.</p>
      `;
    }
    return `
      <strong>સિવિકા AI સ્માર્ટ સિટી માર્ગદર્શન</strong>
      <p style="margin:4px 0;">AMC હેલ્પલાઇન 155303 / 1913 ચોવીસ કલાક કાર્યરત છે. ફરિયાદ ટ્રેક કરવા આઈડી 18492 અથવા 18501 દાખલ કરો.</p>
    `;
  }

  if (isHindi) {
    return `
      <strong>सिविका AI सहायता (${currentTicket.id})</strong>
      <p style="margin:4px 0;">आपकी शिकायत AMC द्वारा ट्रैक की जा रही है। वास्तविक शिकायत का सत्यापन होते ही ₹50 की सुरक्षा राशि 100% आपके वॉलेट में रिफंड कर दी जाएगी।</p>
    `;
  }

  return `
    <strong>Civica AI Operations (${currentTicket.id})</strong>
    <p style="margin:4px 0;">Ticket is tracked with 24-48h SLA guarantee under Gujarat GPMC Act. The ₹50 refundable security escrow is refunded 100% upon field engineer verification.</p>
  `;
}

window.toggleFloatingAi = function() {
  const popup = document.getElementById('floating-ai-popup');
  if (!popup) return;
  const isHidden = (popup.style.display === 'none' || !popup.style.display);
  popup.style.display = isHidden ? 'flex' : 'none';
  if (isHidden) {
    setTimeout(() => document.getElementById('floating-ai-input')?.focus(), 150);
  }
};

window.handleFloatingAiSubmit = function(e) {
  if (e) e.preventDefault();
  const input = document.getElementById('floating-ai-input');
  const question = input?.value.trim();
  if (!question) return;

  const thread = document.getElementById('floating-ai-messages');
  if (!thread) return;

  const userRow = document.createElement('div');
  userRow.className = 'ai-popup-msg-row ai-popup-msg-user';
  userRow.innerHTML = `
    <div class="ai-msg-avatar user">You</div>
    <div class="ai-popup-bubble">${question.replace(/</g, '&lt;')}</div>
  `;
  thread.appendChild(userRow);
  input.value = '';
  thread.scrollTop = thread.scrollHeight;

  const botRow = document.createElement('div');
  botRow.className = 'ai-popup-msg-row ai-popup-msg-bot';
  botRow.innerHTML = `
    <div class="ai-msg-avatar bot">✨</div>
    <div class="ai-popup-bubble"><p style="color:#6366f1; margin:0;">✨ Analyzing municipal records...</p></div>
  `;
  thread.appendChild(botRow);
  thread.scrollTop = thread.scrollHeight;

  setTimeout(() => {
    botRow.innerHTML = `
      <div class="ai-msg-avatar bot">✨</div>
      <div class="ai-popup-bubble">${generateCivicAiResponse(question, appState.language)}</div>
    `;
    thread.scrollTop = thread.scrollHeight;
  }, 350);
};

window.askFloatingAiPrompt = function(promptText) {
  const input = document.getElementById('floating-ai-input');
  if (input) {
    input.value = promptText;
    handleFloatingAiSubmit();
  }
};

function initFloatingAiGreeting() {
  const thread = document.getElementById('floating-ai-messages');
  if (!thread) return;
  const lang = appState.language || 'en';
  const greetings = {
    en: {
      title: "Hello! I am Civica AI Assistant.",
      sub: "Connected live to Ahmedabad Municipal Corporation. Ask any question about tickets, ₹50 refundable escrow deposit, or AMC municipal rules."
    },
    gu: {
      title: "નમસ્તે! હું સિવિકા AI સહાયક છું.",
      sub: "અમદાવાદ મહાનગરપાલિકા સાથે લાઈવ જોડાયેલ છું. આપની ફરિયાદ, ₹૫૦ રિફંડેબલ એસ્ક્રો ડિપોઝિટ, અથવા મ્યુનિસિપલ નિયમો વિશે કોઈપણ પ્રશ્ન પૂછી શકો છો."
    },
    hi: {
      title: "नमस्ते! मैं सिविका AI सहायक हूँ।",
      sub: "अहमदाबाद नगर निगम से लाइव जुड़ा हुआ हूँ। अपनी शिकायत, ₹50 प्रतिदेय एस्क्रो सुरक्षा जमा, या नगर निगम नियमों पर कोई भी सवाल पूछें।"
    }
  };
  const g = greetings[lang] || greetings.en;
  thread.innerHTML = `
    <div class="ai-popup-msg-row ai-popup-msg-bot">
      <div class="ai-msg-avatar bot">✨</div>
      <div class="ai-popup-bubble">
        <strong>${g.title}</strong>
        <p style="margin:4px 0 0 0;">${g.sub}</p>
      </div>
    </div>
  `;
}

function renderFloatingAiChips() {
  const chipsBar = document.getElementById('floating-ai-chips');
  if (!chipsBar) return;
  const lang = appState.language || 'en';
  const chipSets = {
    en: [
      { text: "💡 When will streetlight fix?", prompt: "What is the live status of my streetlight complaint?" },
      { text: "🛡️ When will ₹50 refund arrive?", prompt: "When and how will my ₹50 escrow deposit be refunded?" },
      { text: "👷 Which officer is assigned?", prompt: "Which AMC ward officer is supervising this task?" }
    ],
    gu: [
      { text: "💡 શેરી લાઈટ ક્યારે શરૂ થશે?", prompt: "મને શેરી લાઈટ ફરિયાદ વિશે સ્થિતિ જણાવો." },
      { text: "🛡️ ₹૫૦ રિફંડ ક્યારે મળશે?", prompt: "મારા ₹૫૦ ક્યારે અને કેવી રીતે પરત મળશે?" },
      { text: "👷 કયા અધિકારી સોંપાયેલ છે?", prompt: "વોર્ડ ૭ ના કયા અધિકારી આ કામ જોઈ રહ્યા છે?" }
    ],
    hi: [
      { text: "💡 स्ट्रीटलाइट कब ठीक होगी?", prompt: "मेरी स्ट्रीटलाइट शिकायत की स्थिति क्या है?" },
      { text: "🛡️ ₹50 रिफंड कब मिलेगा?", prompt: "मेरा ₹50 एस्क्रो सुरक्षा जमा कब और कैसे वापस मिलेगा?" },
      { text: "👷 कौन से अधिकारी नियुक्त हैं?", prompt: "वार्ड 7 के कौन से अधिकारी इस कार्य को देख रहे हैं?" }
    ]
  };
  const chips = chipSets[lang] || chipSets.en;
  chipsBar.innerHTML = chips.map(c => `
    <button type="button" class="ai-popup-chip" onclick="askFloatingAiPrompt('${c.prompt}')">${c.text}</button>
  `).join('');
}

/* ==========================================================================
   SOLUTIONS 3D ANIMATED COVERFLOW CAROUSEL & LIGHTBOX CONTROLLER
   ========================================================================== */

const SOLUTIONS_PROJECTS_DATA = [
  {
    index: 0,
    category: "transit",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8b/Ahmedabad_BRTS.jpg",
    title: {
      en: "Electric BRTS Transit Corridors (Janmarg Gujarat)",
      gu: "ઇલેક્ટ્રિક BRTS ટ્રાન્ઝિટ કોરિડોર (જનમાર્ગ ગુજરાત)",
      hi: "इलेक्ट्रिक BRTS ट्रांजिट कॉरिडोर (जनमार्ग गुजरात)"
    },
    desc: {
      en: "Surat & Ahmedabad dedicated electric BRTS corridors with GPS real-time bus telemetry, automated frequency controllers, and contactless ticketing.",
      gu: "સુરત અને અમદાવાદ સમર્પિત ઇલેક્ટ્રિક BRTS કોરિડોર, રીયલ-ટાઇમ જીપીએસ ટ્રેકિંગ, ઓટોમેટેડ ફ્રીક્વન્સી અને કોન્ટેક્ટલેસ ટિકિટિંગ.",
      hi: "सूरत और अहमदाबाद समर्पित इलेक्ट्रिक BRTS कॉरिडोर, रियल-टाइम जीपीएस बस टेलीमेट्री और संपर्क रहित टिकटिंग प्रणाली।"
    },
    catLabel: {
      en: "Transit & Mobility",
      gu: "ટ્રાન્ઝિટ અને મોબિલિટી",
      hi: "ट्रांजिट व गतिशीलता"
    },
    sla: {
      en: "⚡ 99.8% On-Time SLA",
      gu: "⚡ ૯૯.૮% સમયસર SLA",
      hi: "⚡ 99.8% समयबद्ध SLA"
    },
    stats: {
      en: "320+ Electric Buses • 120km Dedicated Corridors • 450k Daily Commuters",
      gu: "૩૨૦+ ઇલેક્ટ્રિક બસો • ૧૨૦ કિમી ડેડિકેટેડ કોરિડોર • ૪.૫ લાખ દૈનિક મુસાફરો",
      hi: "320+ इलेक्ट्रिक बसें • 120 किमी समर्पित कॉरिडोर • 4.5 लाख दैनिक यात्री"
    },
    zone: {
      en: "AMC Ahmedabad & SMC Surat",
      gu: "AMC અમદાવાદ અને SMC સુરત",
      hi: "AMC अहमदाबाद एवं SMC सूरत"
    },
    impact: {
      en: "Reduced commuter travel and waiting times by 34% and carbon emissions by 420 MT/month.",
      gu: "મુસાફરોનો રાહ જોવાનો સમય ૩૪% ઘટ્યો અને માસિક ૪૨૦ મેટ્રિક ટન કાર્બન ઉત્સર્જન ઘટ્યું.",
      hi: "यात्रियों के प्रतीक्षा समय में 34% की कमी और प्रति माह 420 मीट्रिक टन कार्बन उत्सर्जन कम हुआ।"
    }
  },
  {
    index: 1,
    category: "transit",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Ahmedabad_Inner_Ring_Road_Skyline.jpg",
    title: {
      en: "Gujarat Urban Expressway & Ring Road Telemetry",
      gu: "ગુજરાત અર્બન એક્સપ્રેસવે અને રીંગ રોડ ટેલિમેટ્રી",
      hi: "गुजरात शहरी एक्सप्रेसवे एवं रिंग रोड टेलीमेट्री"
    },
    desc: {
      en: "AI-managed adaptive traffic signals across Surat Ring Road and SG Highway with optical vehicle flow radar sensors minimizing bottlenecks.",
      gu: "સુરત રીંગ રોડ અને એસજી હાઇવે પર ટ્રાફિક સિગ્નલ ઓપ્ટિમાઇઝેશન, રડાર સેન્સર્સ અને સરળ વાહન વ્યવહાર.",
      hi: "सूरत रिंग रोड और एसजी हाईवे पर एआई-प्रबंधित एडेप्टिव ट्रैफिक सिग्नल और निर्बाध वाहन प्रवाह।"
    },
    catLabel: {
      en: "Smart Mobility",
      gu: "સ્માર્ટ મોબિલિટી",
      hi: "स्मार्ट गतिशीलता"
    },
    sla: {
      en: "🟢 Live Synchronized Flow",
      gu: "🟢 લાઈવ સિંક્રનાઇઝ્ડ ટ્રાફિક ફ્લો",
      hi: "🟢 लाइव सिंक्रोनाइज़्ड ट्रैफिक प्रवाह"
    },
    stats: {
      en: "76 Instrumented Intersections • Dynamic Green Wave • Optical LiDAR Telemetry",
      gu: "૭૬ સિગ્નલ જંકશન • ડાયનેમિક ગ્રીન વેવ • ઓપ્ટિકલ LiDAR ટેલિમેટ્રી",
      hi: "76 सिग्नल जंक्शन • डायनेमिक ग्रीन वेव • ऑप्टिकल LiDAR टेलीमेट्री"
    },
    zone: {
      en: "SMC Central Zone & AMC West",
      gu: "SMC સેન્ટ્રલ ઝોન અને AMC પશ્ચિમ",
      hi: "SMC सेंट्रल ज़ोन एवं AMC पश्चिम"
    },
    impact: {
      en: "Peak-hour travel delays reduced by 9.4 minutes per cross-city trip.",
      gu: "પીક અવર્સ દરમિયાન મુસાફરીમાં પ્રતિ ટ્રીપ ૯.૪ મિનિટનો સમય બચ્યો.",
      hi: "पीक ऑवर्स में यात्रा के समय में प्रति ट्रिप 9.4 मिनट की बचत हुई।"
    }
  },
  {
    index: 2,
    category: "roads",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/79/Beauty_of_Surat.jpg",
    title: {
      en: "Surat Municipal Pothole Rapid Action Squad",
      gu: "સુરત મ્યુનિસિપલ ખાડા ઝડપી સમારકામ સ્ક્વોડ",
      hi: "सूरत नगर निगम गड्ढा त्वरित मरम्मत दल"
    },
    desc: {
      en: "Infrared hot-asphalt repair vans dispatched automatically on geotagged citizen reports across SMC and AMC wards.",
      gu: "નાગરિકોની જીઓટેગ કરેલી ફરિયાદો પરથી ઇન્ફ્રારેડ હોટ-ડામર રીપેર વાન દ્વારા ત્વરિત ખાડા સમારકામ.",
      hi: "नागरिकों की जियोटैग रिपोर्ट पर इन्फ्रारेड हॉट-डामर वैन द्वारा तुरंत गड्ढा मरम्मत।"
    },
    catLabel: {
      en: "Roads & Potholes",
      gu: "રસ્તા અને ખાડા",
      hi: "सड़कें एवं गड्ढे"
    },
    sla: {
      en: "⏱️ 24h SLA Guarantee",
      gu: "⏱️ ૨૪ કલાક SLA ગેરંટી",
      hi: "⏱️ 24 घंटे SLA गारंटी"
    },
    stats: {
      en: "18 Rapid Asphalt Vans • Infrared Surface Bonding • Verified Site Photos",
      gu: "૧૮ ઝડપી ડામર વાન • ઇન્ફ્રારેડ સરફેસ બોન્ડિંગ • ફોટો ચકાસણી",
      hi: "18 रैपिड डामर वैन • इन्फ्रारेड सतह बॉन्डिंग • फोटो सत्यापन"
    },
    zone: {
      en: "SMC All 9 Zones & AMC Ward 7",
      gu: "SMC તમામ ૯ ઝોન અને AMC વોર્ડ ૭",
      hi: "SMC सभी 9 ज़ोन एवं AMC वार्ड 7"
    },
    impact: {
      en: "Over 98.6% of reported road potholes repaired within the strict 24-hour municipal SLA.",
      gu: "૯૮.૬% થી વધુ ખાડા નિયત ૨૪ કલાકની મ્યુનિસિપલ સમયમર્યાદામાં પૂરા કરવામાં આવ્યા.",
      hi: "98.6% से अधिक गड्ढे निर्धारित 24 घंटे की समयसीमा में ठीक किए गए।"
    }
  },
  {
    index: 3,
    category: "sanitation",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Surat_Skyline_01.jpg",
    title: {
      en: "Surat Smart SWM Fleet (#1 Cleanest City in India)",
      gu: "સુરત સ્માર્ટ સફાઈ ફ્લીટ (ભારતનું નં. ૧ સ્વચ્છ શહેર)",
      hi: "सूरत स्मार्ट स्वच्छता बेड़ा (भारत का #1 स्वच्छ शहर)"
    },
    desc: {
      en: "100% route verification and smart bin fill-level ultrasound sensors across Surat and Ahmedabad municipal wards powering cleanest city standards.",
      gu: "સુરત અને અમદાવાદમાં ૧૦૦% રૂટ વેરિફિકેશન અને સ્માર્ટ ડસ્ટબિન અલ્ટ્રાસાઉન્ડ સેન્સર્સ દ્વારા સ્વચ્છતા મોનિટરિંગ.",
      hi: "सूरत और अहमदाबाद में 100% रूट सत्यापन और स्मार्ट डस्टबिन अल्ट्रासाउंड सेंसर द्वारा स्वच्छता निगरानी।"
    },
    catLabel: {
      en: "Cleanliness & Waste",
      gu: "સ્વચ્છતા અને કચરા નિકાલ",
      hi: "स्वच्छता एवं कचरा निस्तारण"
    },
    sla: {
      en: "♻️ 100% Ward Coverage",
      gu: "♻️ ૧૦૦% વોર્ડ કવરેજ",
      hi: "♻️ 100% वार्ड कवरेज"
    },
    stats: {
      en: "1,140 GPS Waste Compactors • Ultrasonic Fill Sensors • 0 Open Dumpsites",
      gu: "૧,૧૪૦ જીપીએસ કચરા વાહનો • અલ્ટ્રાસોનિક સેન્સર્સ • શૂન્ય ખુલ્લા ડમ્પિંગ સાઇટ્સ",
      hi: "1,140 जीपीएस कचरा वाहन • अल्ट्रासोनिक सेंसर • शून्य खुले डंपिंग स्थल"
    },
    zone: {
      en: "Surat Municipal Corporation",
      gu: "સુરત મહાનગરપાલિકા",
      hi: "सूरत नगर निगम"
    },
    impact: {
      en: "Surat awarded #1 Cleanest City in India under Swachh Survekshan National Rankings.",
      gu: "સ્વચ્છ સર્વેક્ષણ રાષ્ટ્રીય રેન્કિંગમાં સુરતને ભારતનું નં. ૧ સ્વચ્છ શહેર ઘોષિત કરાયું.",
      hi: "स्वच्छ सर्वेक्षण राष्ट्रीय रैंकिंग में सूरत को भारत का #1 स्वच्छ शहर घोषित किया गया।"
    }
  },
  {
    index: 4,
    category: "utilities",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Surat_at_night.JPG",
    title: {
      en: "Smart LED Luminaire & Tapi Riverfront Grid",
      gu: "સ્માર્ટ એલઈડી લાઇટિંગ અને તાપી રિવરફ્રન્ટ ગ્રીડ",
      hi: "स्मार्ट एलईडी लाइटिंग एवं तापी रिवरफ्रंट ग्रिड"
    },
    desc: {
      en: "Centralized luminaire monitoring detecting streetlight blackouts along Tapi Riverfront and Dumas Road instantly with automated alerts.",
      gu: "તાપી રિવરફ્રન્ટ અને ડુમસ રોડ પર બંધ સ્ટ્રીટલાઇટોને તાત્કાલિક શોધવા માટે સેન્ટ્રલાઇઝ્ડ મોનિટરિંગ સિસ્ટમ.",
      hi: "तापी रिवरफ्रंट और डुमस रोड पर बंद स्ट्रीटलाइटों का स्वचालित पता लगाने के लिए केंद्रीकृत प्रणाली।"
    },
    catLabel: {
      en: "Smart Lighting",
      gu: "સ્માર્ટ લાઇટિંગ",
      hi: "स्मार्ट लाइटिंग"
    },
    sla: {
      en: "💡 24h Replacement SLA",
      gu: "💡 ૨૪ કલાકમાં સમારકામ SLA",
      hi: "💡 24 घंटे में प्रतिस्थापन SLA"
    },
    stats: {
      en: "64,000 SCADA Light Poles • Optical Dark Spot Detection • ₹50 Escrow Refunded",
      gu: "૬૪,૦૦૦ SCADA લાઇટ પોલ્સ • ડાર્ક સ્પોટ ડિટેક્શન • ₹૫૦ એસ્ક્રો રિફંડ",
      hi: "64,000 SCADA लाइट पोल्स • डार्क स्पॉट पहचान • ₹50 एस्क्रो रिफंड"
    },
    zone: {
      en: "Surat Tapi Riverfront & AMC Navrangpura",
      gu: "સુરત તાપી રિવરફ્રન્ટ અને AMC નવરંગપુરા",
      hi: "सूरत तापी रिवरफ्रंट एवं AMC नवरंगपुरा"
    },
    impact: {
      en: "Average streetlight blackout response dropped to under 4.2 hours.",
      gu: "સ્ટ્રીટલાઇટ બંધ થવા પર રિપેરિંગનો સરેરાશ સમય ૪.૨ કલાકથી પણ ઓછો થયો.",
      hi: "स्ट्रीटलाइट बंद होने पर प्रतिक्रिया का औसत समय घटकर 4.2 घंटे से भी कम हुआ।"
    }
  },
  {
    index: 5,
    category: "tech",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Sabarmati_riverfront_and_Atal_Pedestrian_Bridge_01.jpg",
    title: {
      en: "Gujarat Integrated Command & Control Centre (ICCC)",
      gu: "ગુજરાત ઇન્ટિગ્રેટેડ કમાન્ડ એન્ડ કંટ્રોલ સેન્ટર (ICCC)",
      hi: "गुजरात एकीकृत कमांड एवं नियंत्रण केंद्र (ICCC)"
    },
    desc: {
      en: "24x7 municipal nerve centre orchestrating Surat & Ahmedabad emergency response, CCTV video feeds, and multi-agency field teams.",
      gu: "૨૪x૭ મ્યુનિસિપલ કંટ્રોલ રૂમ જે સુરત અને અમદાવાદમાં કટોકટી પ્રતિસાદ, સીસીટીવી ફીડ અને ફિલ્ડ ટીમોનું સંચાલન કરે છે.",
      hi: "24x7 नगर निगम नियंत्रण केंद्र जो आपातकालीन प्रतिक्रिया, सीसीटीवी फ़ीड और फील्ड टीमों का समन्वय करता है।"
    },
    catLabel: {
      en: "Command Centre",
      gu: "કમાન્ડ સેન્ટર",
      hi: "कमांड सेंटर"
    },
    sla: {
      en: "🖥️ 24x7 Active Nerve Centre",
      gu: "🖥️ ૨૪x૭ સક્રિય કંટ્રોલ રૂમ",
      hi: "🖥️ 24x7 सक्रिय नियंत्रण केंद्र"
    },
    stats: {
      en: "4,500 CCTV Streams • Multi-Agency VHF Repeater • Automated Drone Radar",
      gu: "૪,૫૦૦ સીસીટીવી કેમેરા • મલ્ટી-એજન્સી વાયરલેસ • ઓટોમેટેડ ડ્રોન રડાર",
      hi: "4,500 सीसीटीवी कैमरे • मल्टी-एजेंसी वायरलेस • स्वचालित ड्रोन रडार"
    },
    zone: {
      en: "Gujarat State ICCC Network",
      gu: "ગુજરાત રાજ્ય ICCC નેટવર્ક",
      hi: "गुजरात राज्य ICCC नेटवर्क"
    },
    impact: {
      en: "Emergency resource mobilization reduced from 22 minutes to 4.5 minutes.",
      gu: "કટોકટી સમયે સાધનસામગ્રી પહોંચાડવાનો સમય ૨૨ મિનિટથી ઘટીને ૪.૫ મિનિટ થયો.",
      hi: "आपातकालीन संसाधन जुटाने का समय 22 मिनट से घटकर 4.5 मिनट हुआ।"
    }
  }
];

let currentSolutionIndex = 1;

window.initSolutionsCarousel = function() {
  const dotsContainer = document.getElementById('solutions-carousel-dots');
  if (dotsContainer) {
    dotsContainer.innerHTML = SOLUTIONS_PROJECTS_DATA.map((proj, idx) => `
      <div class="carousel-dot ${idx === currentSolutionIndex ? 'active' : ''}" onclick="goToSolutionCard(${idx})" title="${typeof proj.title === 'object' ? proj.title.en : proj.title}"></div>
    `).join('');
  }
  updateSolutionsCarousel();
};

window.updateSolutionsCarousel = function() {
  const cards = document.querySelectorAll('.solution-3d-card');
  const total = cards.length;
  if (total === 0) return;

  const lang = appState.language || 'en';

  cards.forEach((card, idx) => {
    card.classList.remove('card-active', 'card-left', 'card-right', 'card-hidden-left', 'card-hidden-right');

    let diff = (idx - currentSolutionIndex + total) % total;
    if (diff > total / 2) diff -= total;

    if (diff === 0) {
      card.classList.add('card-active');
    } else if (diff === -1) {
      card.classList.add('card-left');
    } else if (diff === 1) {
      card.classList.add('card-right');
    } else if (diff < -1) {
      card.classList.add('card-hidden-left');
    } else {
      card.classList.add('card-hidden-right');
    }

    // Dynamic Language updates for card content
    const proj = SOLUTIONS_PROJECTS_DATA[idx];
    if (proj) {
      const titleEl = card.querySelector('.solution-card-title');
      const descEl = card.querySelector('.solution-card-desc');
      const catBadge = card.querySelector('.solution-cat-badge');
      const slaBadge = card.querySelector('.solution-sla-badge');
      const inspectLink = card.querySelector('.solution-inspect-link');
      const hoverHint = card.querySelector('.solution-hover-hint span');

      const pTitle = typeof proj.title === 'object' ? (proj.title[lang] || proj.title.en) : proj.title;
      const pDesc = typeof proj.desc === 'object' ? (proj.desc[lang] || proj.desc.en) : proj.desc;
      const pCat = typeof proj.catLabel === 'object' ? (proj.catLabel[lang] || proj.catLabel.en) : proj.catLabel;
      const pSla = typeof proj.sla === 'object' ? (proj.sla[lang] || proj.sla.en) : proj.sla;

      if (titleEl) titleEl.textContent = pTitle;
      if (descEl) descEl.textContent = pDesc;
      if (catBadge) catBadge.textContent = pCat;
      if (slaBadge) slaBadge.textContent = pSla;
      if (inspectLink) inspectLink.innerHTML = (lang === 'gu' ? 'વિગતો જુઓ' : lang === 'hi' ? 'विवरण देखें' : 'View Details') + ' &rarr;';
      if (hoverHint) hoverHint.textContent = lang === 'gu' ? '🔍 વિગત જોવા ક્લિક કરો' : lang === 'hi' ? '🔍 विवरण हेतु क्लिक करें' : '🔍 Click for Details';
    }
  });

  // Update dots
  const dots = document.querySelectorAll('.carousel-dot');
  dots.forEach((dot, idx) => {
    dot.classList.toggle('active', idx === currentSolutionIndex);
  });
};

window.nextSolutionCard = function() {
  const total = SOLUTIONS_PROJECTS_DATA.length;
  currentSolutionIndex = (currentSolutionIndex + 1) % total;
  updateSolutionsCarousel();
};

window.prevSolutionCard = function() {
  const total = SOLUTIONS_PROJECTS_DATA.length;
  currentSolutionIndex = (currentSolutionIndex - 1 + total) % total;
  updateSolutionsCarousel();
};

window.goToSolutionCard = function(index) {
  currentSolutionIndex = index;
  updateSolutionsCarousel();
};

window.handleSolutionCardClick = function(index) {
  if (index === currentSolutionIndex) {
    // Click on active middle card -> reveal full details
    showSolutionDetails(index);
  } else {
    // Click on side card -> animate to middle
    currentSolutionIndex = index;
    updateSolutionsCarousel();
  }
};

window.openActiveSolutionLightbox = function() {
  showSolutionDetails(currentSolutionIndex);
};

window.showSolutionDetails = function(index) {
  const proj = SOLUTIONS_PROJECTS_DATA[index] || SOLUTIONS_PROJECTS_DATA[0];
  const m = document.getElementById('gallery-lightbox-modal');
  if (!m || !proj) return;

  const lang = appState.language || 'en';
  const mImg = document.getElementById('lightbox-img');
  const mTitle = document.getElementById('lightbox-title');
  const mDesc = document.getElementById('lightbox-desc');
  const mSla = document.getElementById('lightbox-sla');
  const mZone = document.getElementById('lightbox-zone-badge');
  const mStats = document.getElementById('lightbox-stats');
  const mImpact = document.getElementById('lightbox-impact');
  const mCat = document.getElementById('lightbox-cat-badge');

  const pTitle = typeof proj.title === 'object' ? (proj.title[lang] || proj.title.en) : proj.title;
  const pDesc = typeof proj.desc === 'object' ? (proj.desc[lang] || proj.desc.en) : proj.desc;
  const pCat = typeof proj.catLabel === 'object' ? (proj.catLabel[lang] || proj.catLabel.en) : proj.catLabel;
  const pSla = typeof proj.sla === 'object' ? (proj.sla[lang] || proj.sla.en) : proj.sla;
  const pZone = typeof proj.zone === 'object' ? (proj.zone[lang] || proj.zone.en) : proj.zone;
  const pStats = typeof proj.stats === 'object' ? (proj.stats[lang] || proj.stats.en) : proj.stats;
  const pImpact = typeof proj.impact === 'object' ? (proj.impact[lang] || proj.impact.en) : proj.impact;

  if (mImg) {
    mImg.src = proj.image;
    mImg.alt = pTitle;
  }
  if (mTitle) mTitle.textContent = pTitle;
  if (mDesc) mDesc.textContent = pDesc;
  if (mSla) mSla.textContent = pSla;
  if (mZone) mZone.textContent = `📍 ${pZone}`;
  if (mStats) mStats.textContent = `📊 ${lang === 'gu' ? 'ટેલિમેટ્રી' : lang === 'hi' ? 'टेलीमेट्री' : 'Telemetry'}: ${pStats}`;
  if (mImpact) mImpact.textContent = `🌱 ${lang === 'gu' ? 'અસર' : lang === 'hi' ? 'प्रभाव' : 'Impact'}: ${pImpact}`;
  if (mCat) mCat.textContent = pCat;

  m.style.display = 'flex';
  m.classList.add('active');
};

window.openGalleryLightbox = window.showSolutionDetails;

window.closeGalleryLightbox = function() {
  const m = document.getElementById('gallery-lightbox-modal');
  if (m) {
    m.style.display = 'none';
    m.classList.remove('active');
  }
};

window.filterGallery = function(category) {
  document.querySelectorAll('.gallery-filter-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.filter === category);
  });
  if (category === 'all') {
    updateSolutionsCarousel();
    return;
  }
  const matchIdx = SOLUTIONS_PROJECTS_DATA.findIndex(p => p.category === category);
  if (matchIdx !== -1) {
    currentSolutionIndex = matchIdx;
    updateSolutionsCarousel();
  }
};

window.filterSolutionsCarousel = window.filterGallery;

// Global Toast
function showCivicaToast(message) {
  const existing = document.querySelector('.civica-toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = 'civica-toast';
  toast.innerHTML = `<span>🔔</span><div>${message}</div>`;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.4s ease';
    setTimeout(() => toast.remove(), 400);
  }, 4000);
}

/* ==========================================================================
   EXECUTIVE RESOLUTION & AUDIT REPORTS CONTROLLER
   ========================================================================== */

window.currentFilteredAuditReports = [];

window.initResolutionAuditReports = function() {
  const startInput = document.getElementById('rep-filter-start-date');
  const endInput = document.getElementById('rep-filter-end-date');
  
  if (startInput && !startInput.value) {
    startInput.value = '2026-08-20';
  }
  if (endInput && !endInput.value) {
    endInput.value = '2026-09-19';
  }
  
  applyReportFilters();
};

window.setReportDatePreset = function(presetKey) {
  const startInput = document.getElementById('rep-filter-start-date');
  const endInput = document.getElementById('rep-filter-end-date');
  if (!startInput || !endInput) return;

  const todayStr = '2026-09-19';
  let startStr = '2026-08-20';

  if (presetKey === 'today') {
    startStr = '2026-09-18';
  } else if (presetKey === '7days') {
    startStr = '2026-09-12';
  } else if (presetKey === '30days') {
    startStr = '2026-08-20';
  } else if (presetKey === 'quarter') {
    startStr = '2026-07-01';
  } else if (presetKey === 'all') {
    startStr = '2026-06-01';
  }

  startInput.value = startStr;
  endInput.value = todayStr;

  document.querySelectorAll('#rep-date-preset-chips .date-chip').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-preset') === presetKey);
  });

  applyReportFilters();
};

window.onReportDateInputChange = function() {
  document.querySelectorAll('#rep-date-preset-chips .date-chip').forEach(btn => {
    btn.classList.remove('active');
  });
  applyReportFilters();
};

window.resetReportFilters = function() {
  const startInput = document.getElementById('rep-filter-start-date');
  const endInput = document.getElementById('rep-filter-end-date');
  const corpSelect = document.getElementById('rep-filter-corp');
  const deptSelect = document.getElementById('rep-filter-dept');
  const statusSelect = document.getElementById('rep-filter-status');
  const officerSelect = document.getElementById('rep-filter-officer');
  const searchInput = document.getElementById('rep-filter-search');

  if (startInput) startInput.value = '2026-08-20';
  if (endInput) endInput.value = '2026-09-19';
  if (corpSelect) corpSelect.value = 'all';
  if (deptSelect) deptSelect.value = 'all';
  if (statusSelect) statusSelect.value = 'resolved';
  if (officerSelect) officerSelect.value = 'all';
  if (searchInput) searchInput.value = '';

  document.querySelectorAll('#rep-date-preset-chips .date-chip').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-preset') === '30days');
  });

  applyReportFilters();
  showCivicaToast('🔄 Report filters reset to default 30-day window.');
};

window.applyReportFilters = function() {
  const reports = (window.GUJARAT_CIVIC_DATA && window.GUJARAT_CIVIC_DATA.resolutionAuditReports) || [];
  const startInput = document.getElementById('rep-filter-start-date');
  const endInput = document.getElementById('rep-filter-end-date');
  const corpSelect = document.getElementById('rep-filter-corp');
  const deptSelect = document.getElementById('rep-filter-dept');
  const statusSelect = document.getElementById('rep-filter-status');
  const officerSelect = document.getElementById('rep-filter-officer');
  const searchInput = document.getElementById('rep-filter-search');

  const startDate = startInput ? startInput.value : '2026-06-01';
  const endDate = endInput ? endInput.value : '2026-09-19';
  const corp = corpSelect ? corpSelect.value : 'all';
  const dept = deptSelect ? deptSelect.value : 'all';
  const status = statusSelect ? statusSelect.value : 'all';
  const officer = officerSelect ? officerSelect.value : 'all';
  const query = searchInput ? searchInput.value.trim().toLowerCase() : '';

  const filtered = reports.filter(item => {
    // Date range checking against filedDateOnly or resolvedDateOnly
    const itemDate = item.resolvedDateOnly || item.filedDateOnly;
    if (startDate && itemDate < startDate) return false;
    if (endDate && itemDate > endDate) return false;

    // Corporation
    if (corp !== 'all' && item.corpCode !== corp) return false;

    // Department
    if (dept !== 'all' && item.department !== dept) return false;

    // Status
    if (status === 'resolved' && item.status !== 'resolved') return false;
    if (status === 'in_progress' && item.status !== 'in_progress') return false;
    if (status === 'sla_breach' && item.status !== 'sla_breach' && item.slaStatus !== 'breached') return false;

    // Officer
    if (officer !== 'all' && (!item.solvedBy || !item.solvedBy.toLowerCase().includes(officer.toLowerCase()))) return false;

    // Free text search
    if (query) {
      const matchSearch = (
        (item.id && item.id.toLowerCase().includes(query)) ||
        (item.shortId && item.shortId.toLowerCase().includes(query)) ||
        (item.title && item.title.toLowerCase().includes(query)) ||
        (item.citizenName && item.citizenName.toLowerCase().includes(query)) ||
        (item.location && item.location.toLowerCase().includes(query)) ||
        (item.solvedBy && item.solvedBy.toLowerCase().includes(query)) ||
        (item.resolutionSummary && item.resolutionSummary.toLowerCase().includes(query))
      );
      if (!matchSearch) return false;
    }

    return true;
  });

  window.currentFilteredAuditReports = filtered;

  // Calculate Metrics
  const totalRaised = filtered.length;
  const resolvedItems = filtered.filter(i => i.status === 'resolved');
  const totalSolved = resolvedItems.length;
  const solveRate = totalRaised > 0 ? Math.round((totalSolved / totalRaised) * 100) : 0;

  const times = resolvedItems.filter(i => typeof i.timeTakenMinutes === 'number').map(i => i.timeTakenMinutes);
  const avgMinutes = times.length > 0 ? Math.round(times.reduce((a, b) => a + b, 0) / times.length) : 0;
  const avgH = Math.floor(avgMinutes / 60);
  const avgM = avgMinutes % 60;

  const fastestMinutes = times.length > 0 ? Math.min(...times) : 0;
  const fastH = Math.floor(fastestMinutes / 60);
  const fastM = fastestMinutes % 60;

  const onTimeItems = resolvedItems.filter(i => i.slaStatus === 'within_sla');
  const slaCompliance = resolvedItems.length > 0 ? Math.round((onTimeItems.length / resolvedItems.length) * 100) : 100;

  const ratings = resolvedItems.filter(i => typeof i.citizenRating === 'number').map(i => i.citizenRating);
  const avgRating = ratings.length > 0 ? (ratings.reduce((a, b) => a + b, 0) / ratings.length).toFixed(1) : '5.0';

  // Update KPI Cards
  const kpiRaised = document.getElementById('rep-kpi-total-filed');
  const kpiRange = document.getElementById('rep-kpi-range-label');
  const kpiSolved = document.getElementById('rep-kpi-total-solved');
  const kpiSolveRate = document.getElementById('rep-kpi-solve-rate');
  const kpiAvgTime = document.getElementById('rep-kpi-avg-time');
  const kpiFastest = document.getElementById('rep-kpi-fastest-time');
  const kpiSla = document.getElementById('rep-kpi-sla-compliance');
  const kpiRating = document.getElementById('rep-kpi-citizen-rating');

  if (kpiRaised) kpiRaised.textContent = totalRaised;
  if (kpiRange) kpiRange.textContent = `${startDate} → ${endDate}`;
  if (kpiSolved) kpiSolved.textContent = totalSolved;
  if (kpiSolveRate) kpiSolveRate.textContent = `${solveRate}% resolution rate`;
  if (kpiAvgTime) kpiAvgTime.textContent = times.length > 0 ? `${avgH}h ${avgM.toString().padStart(2, '0')}m` : '—';
  if (kpiFastest) kpiFastest.textContent = times.length > 0 ? `${fastH}h ${fastM.toString().padStart(2, '0')}m` : '—';
  if (kpiSla) kpiSla.textContent = `${slaCompliance}%`;
  if (kpiRating) kpiRating.textContent = `${avgRating} / 5 ⭐`;

  // Render Department Breakdown
  renderDepartmentBreakdown(resolvedItems);

  // Render Officer Leaderboard
  renderOfficerLeaderboard(resolvedItems);

  // Render Table
  renderAuditTable(filtered, totalSolved);
};

function renderDepartmentBreakdown(resolvedItems) {
  const container = document.getElementById('rep-dept-breakdown-list');
  if (!container) return;

  if (resolvedItems.length === 0) {
    container.innerHTML = '<div style="padding:16px; color:#64748b; font-size:0.88rem; text-align:center;">No resolved complaints in this date range.</div>';
    return;
  }

  const deptMap = {};
  resolvedItems.forEach(item => {
    const d = item.department || 'General Civic';
    if (!deptMap[d]) {
      deptMap[d] = {
        name: d,
        icon: item.categoryIcon || '🏛️',
        solvedCount: 0,
        totalMinutes: 0,
        onTimeCount: 0
      };
    }
    deptMap[d].solvedCount++;
    if (typeof item.timeTakenMinutes === 'number') {
      deptMap[d].totalMinutes += item.timeTakenMinutes;
    }
    if (item.slaStatus === 'within_sla') {
      deptMap[d].onTimeCount++;
    }
  });

  const deptList = Object.values(deptMap).sort((a, b) => b.solvedCount - a.solvedCount);
  const maxSolved = Math.max(...deptList.map(d => d.solvedCount), 1);

  container.innerHTML = deptList.map(dept => {
    const avgM = dept.solvedCount > 0 ? Math.round(dept.totalMinutes / dept.solvedCount) : 0;
    const avgHStr = `${Math.floor(avgM / 60)}h ${(avgM % 60).toString().padStart(2, '0')}m`;
    const pct = Math.round((dept.solvedCount / maxSolved) * 100);
    const slaRate = Math.round((dept.onTimeCount / dept.solvedCount) * 100);

    return `
      <div class="dept-perf-row">
        <div class="dept-perf-header">
          <div class="dept-name-box">
            <span class="dept-icon">${dept.icon}</span>
            <span class="dept-title">${dept.name}</span>
          </div>
          <div class="dept-stats-box">
            <span class="dept-stat-solved"><strong>${dept.solvedCount}</strong> solved</span>
            <span class="dept-stat-time">⚡ Avg: ${avgHStr}</span>
            <span class="dept-stat-sla">${slaRate}% on-time</span>
          </div>
        </div>
        <div class="dept-progress-track">
          <div class="dept-progress-fill" style="width: ${pct}%;"></div>
        </div>
      </div>
    `;
  }).join('');
}

function renderOfficerLeaderboard(resolvedItems) {
  const container = document.getElementById('rep-officer-leaderboard-list');
  if (!container) return;

  if (resolvedItems.length === 0) {
    container.innerHTML = '<div style="padding:16px; color:#64748b; font-size:0.88rem; text-align:center;">No officer resolutions found in this period.</div>';
    return;
  }

  const officerMap = {};
  resolvedItems.forEach(item => {
    const name = item.solvedBy || 'Unassigned Crew';
    if (!officerMap[name]) {
      officerMap[name] = {
        name: name,
        designation: item.solvedByDesignation || 'Municipal Officer',
        solvedCount: 0,
        totalMinutes: 0
      };
    }
    officerMap[name].solvedCount++;
    if (typeof item.timeTakenMinutes === 'number') {
      officerMap[name].totalMinutes += item.timeTakenMinutes;
    }
  });

  const sortedOfficers = Object.values(officerMap).sort((a, b) => b.solvedCount - a.solvedCount);

  container.innerHTML = sortedOfficers.map((ofc, idx) => {
    const initials = ofc.name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
    const avgM = ofc.solvedCount > 0 ? Math.round(ofc.totalMinutes / ofc.solvedCount) : 0;
    const avgSpeedStr = `${Math.floor(avgM / 60)}h ${(avgM % 60).toString().padStart(2, '0')}m`;

    return `
      <div class="officer-leader-card">
        <div class="officer-leader-left">
          <div class="officer-rank-pill ${idx === 0 ? 'rank-1' : idx === 1 ? 'rank-2' : ''}">#${idx + 1}</div>
          <div class="officer-avatar-chip">${initials}</div>
          <div>
            <div class="officer-card-name">${ofc.name}</div>
            <div class="officer-card-role">${ofc.designation}</div>
          </div>
        </div>
        <div class="officer-leader-right">
          <div class="officer-solved-badge">✅ ${ofc.solvedCount} Solved</div>
          <div class="officer-speed-tag">⏱️ Avg ${avgSpeedStr}</div>
        </div>
      </div>
    `;
  }).join('');
}

function renderAuditTable(filtered, totalSolved) {
  const subtitle = document.getElementById('rep-table-count-subtitle');
  if (subtitle) {
    subtitle.textContent = `Showing ${filtered.length} complaints (${totalSolved} resolved by admins & corporation)`;
  }

  const tbody = document.getElementById('rep-audit-tbody');
  if (!tbody) return;

  if (filtered.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="10" style="text-align:center; padding: 48px 24px; color:#64748b;">
          <div style="font-size:2rem; margin-bottom:8px;">🔍</div>
          <h3 style="font-size:1.1rem; color:#1e293b; margin:0 0 6px 0;">No Complaints Found</h3>
          <p style="font-size:0.85rem; color:#64748b; margin:0 0 16px 0;">No complaints match the specified date range and filters. Try widening the dates or clearing filters.</p>
          <button type="button" class="btn-clear-filter" style="margin:0 auto;" onclick="resetReportFilters()">Reset Filters to 30 Days</button>
        </td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = filtered.map(item => {
    const isResolved = item.status === 'resolved';
    const isSlaBreach = item.status === 'sla_breach' || item.slaStatus === 'breached';

    const statusBadge = isResolved
      ? '<span class="ticket-status-pill status-resolved">RESOLVED</span>'
      : isSlaBreach
      ? '<span class="ticket-status-pill status-needinfo">SLA RISK</span>'
      : '<span class="ticket-status-pill status-inprogress">IN PROGRESS</span>';

    const timeChip = isResolved
      ? `<span class="rep-duration-chip ${item.slaStatus === 'within_sla' ? 'chip-green' : 'chip-red'}">⚡ ${item.timeTakenFormatted}</span>
         <div style="font-size:0.7rem; font-weight:700; color:${item.slaStatus === 'within_sla' ? '#059669' : '#dc2626'}; margin-top:2px;">
           ${item.slaStatus === 'within_sla' ? '● Within SLA' : '▲ Breached'} (${item.slaTargetHours}h target)
         </div>`
      : `<span class="rep-duration-chip chip-amber">⏳ ${item.timeTakenFormatted}</span>`;

    const depositBadge = item.depositStatus === 'refunded'
      ? '<span class="deposit-status-badge status-refunded">✅ ₹50 Refunded</span>'
      : '<span class="deposit-status-badge status-held">🔒 ₹50 Held</span>';

    return `
      <tr>
        <td>
          <span class="rep-ticket-id" title="Click to inspect ticket" onclick="openOfficerTicket('${item.id}')">${item.id}</span>
        </td>
        <td>
          <div style="display:flex; align-items:flex-start; gap:8px;">
            <span style="font-size:1.2rem;">${item.categoryIcon}</span>
            <div>
              <strong style="color:#0f172a; font-size:0.85rem;">${item.categoryName}</strong>
              <div style="font-size:0.75rem; color:#64748b; line-height:1.3; margin-top:2px;">${item.title}</div>
              <div style="font-size:0.72rem; color:#3b82f6; margin-top:1px;">📍 ${item.location} · ${item.corporation}</div>
            </div>
          </div>
        </td>
        <td>
          <div style="font-size:0.85rem; font-weight:700; color:#0f172a;">${item.citizenName}</div>
          <div style="font-size:0.74rem; color:#64748b;">${item.citizenPhone}</div>
          <div style="font-size:0.72rem; color:#475569;">${item.ward}</div>
        </td>
        <td>
          <span style="font-size:0.8rem; font-weight:600; color:#334155; white-space:nowrap;">${item.filedDateFormatted}</span>
        </td>
        <td>
          <div style="font-size:0.85rem; font-weight:700; color:#0f172a;">${item.solvedBy}</div>
          <div style="font-size:0.74rem; color:#64748b;">${item.solvedByDesignation}</div>
          <div style="font-size:0.72rem; color:#3b82f6;">${item.department}</div>
        </td>
        <td>
          <span style="font-size:0.8rem; font-weight:600; color:#334155; white-space:nowrap;">${item.resolvedDateFormatted}</span>
        </td>
        <td>
          ${timeChip}
        </td>
        <td>
          <p class="rep-summary-text">${item.resolutionSummary}</p>
        </td>
        <td>
          ${depositBadge}
        </td>
        <td>
          ${statusBadge}
        </td>
      </tr>
    `;
  }).join('');
}

window.exportAuditReportCSV = function() {
  const items = window.currentFilteredAuditReports || [];
  if (items.length === 0) {
    showCivicaToast('⚠️ No records to export. Please adjust filters.');
    return;
  }

  const headers = [
    "Complaint ID",
    "Category",
    "Department",
    "Corporation",
    "Ward",
    "Location",
    "Citizen Name",
    "Citizen Phone",
    "Date Raised",
    "Solved By (Admin/Officer)",
    "Officer Designation",
    "Date Solved",
    "Time Taken to Solve",
    "SLA Status",
    "SLA Target (Hours)",
    "Resolution Summary",
    "Security Deposit Status",
    "Status"
  ];

  const rows = items.map(item => [
    `"${item.id}"`,
    `"${item.categoryName}"`,
    `"${item.department}"`,
    `"${item.corporation}"`,
    `"${item.ward}"`,
    `"${(item.location || '').replace(/"/g, '""')}"`,
    `"${item.citizenName}"`,
    `"${item.citizenPhone}"`,
    `"${item.filedDateFormatted}"`,
    `"${item.solvedBy}"`,
    `"${item.solvedByDesignation}"`,
    `"${item.resolvedDateFormatted}"`,
    `"${item.timeTakenFormatted}"`,
    `"${item.slaStatus}"`,
    `"${item.slaTargetHours}"`,
    `"${(item.resolutionSummary || '').replace(/"/g, '""')}"`,
    `"${item.depositStatus}"`,
    `"${item.status}"`
  ]);

  const csvContent = [headers.join(","), ...rows.map(r => r.join(","))].join("\r\n");
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  const dateStr = new Date().toISOString().split("T")[0];
  link.setAttribute("href", url);
  link.setAttribute("download", `Gujarat_Civic_Resolution_Audit_Report_${dateStr}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);

  showCivicaToast(`📥 CSV Audit Report exported successfully (${items.length} complaints).`);
};

/* ==========================================================================
   COMMAND CENTER: GEOSPATIAL RADAR, TELEMETRY & TACTICAL DISPATCH CONTROLLERS
   ========================================================================== */

let commandMapInstance = null;
let commandIncidentMarkers = [];
let commandFleetMarkers = [];
let commandVisibleLayers = {
  waterlogging: true,
  pothole: true,
  streetlight: true,
  garbage: true,
  fleets: true
};

const GUJARAT_CITY_COORDS = {
  'AMC': { name: 'AMC Ahmedabad', coords: [23.0375, 72.5625], zoom: 13 },
  'SMC': { name: 'SMC Surat', coords: [21.1702, 72.8311], zoom: 13 },
  'VMC': { name: 'VMC Vadodara', coords: [22.3072, 73.1812], zoom: 13 },
  'RMC': { name: 'RMC Rajkot', coords: [22.3039, 70.8022], zoom: 13 },
  'GMC': { name: 'GMC Gandhinagar', coords: [23.2156, 72.6369], zoom: 13 }
};

window.initTacticalMap = function() {
  const mapEl = document.getElementById('map');
  if (!mapEl) return;

  // Initialize tactical engine if available
  if (window.tacticalEngine && !window.tacticalEngine.operatorProfile) {
    window.tacticalEngine.initialize().then(() => {
      renderKanbanBoard();
      populateCommandMapMarkers();
    });
  }

  if (!commandMapInstance) {
    commandMapInstance = L.map('map', {
      center: [23.0375, 72.5625],
      zoom: 13,
      zoomControl: true
    });

    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; OpenStreetMap contributors &copy; CARTO',
      subdomains: 'abcd',
      maxZoom: 19
    }).addTo(commandMapInstance);
  }

  // Force Leaflet recalculation for dynamic tabs
  setTimeout(() => {
    if (commandMapInstance) {
      commandMapInstance.invalidateSize();
      populateCommandMapMarkers();
    }
  }, 250);

  startCommandCenterTicker();
};

function populateCommandMapMarkers() {
  if (!commandMapInstance) return;

  // Clear existing
  commandIncidentMarkers.forEach(m => commandMapInstance.removeLayer(m));
  commandIncidentMarkers = [];
  commandFleetMarkers.forEach(m => commandMapInstance.removeLayer(m));
  commandFleetMarkers = [];

  const incidents = (window.tacticalEngine && window.tacticalEngine.incidents.length > 0)
    ? window.tacticalEngine.incidents
    : (GUJARAT_CIVIC_DATA.complaints || []);

  const catIcons = {
    waterlogging: '🌊',
    pothole: '🚧',
    streetlight: '💡',
    garbage: '🗑️',
    water: '💧',
    brts: '🚌'
  };

  incidents.forEach(inc => {
    const coords = inc.coords || (inc.location && inc.location.coords) || [23.0375, 72.5625];
    const category = inc.category || 'pothole';
    if (!commandVisibleLayers[category]) return;

    const iconSymbol = catIcons[category] || '⚠️';
    const sev = inc.severity || 'routine';
    const sevColor = sev === 'critical' ? '#ef4444' : sev === 'high' ? '#f59e0b' : '#38bdf8';

    const pinIcon = L.divIcon({
      className: 'custom-tactical-pin',
      html: `
        <div style="background:${sevColor}; width:32px; height:32px; border-radius:50%; border:2px solid white; display:flex; align-items:center; justify-content:center; font-size:16px; box-shadow:0 0 12px ${sevColor}; cursor:pointer; position:relative;">
          ${iconSymbol}
          <span style="position:absolute; top:-2px; right:-2px; width:8px; height:8px; background:white; border-radius:50%;"></span>
        </div>
      `,
      iconSize: [32, 32],
      iconAnchor: [16, 16]
    });

    const marker = L.marker(coords, { icon: pinIcon }).addTo(commandMapInstance);
    marker.bindPopup(`
      <div style="color:#0f172a; font-family:'Plus Jakarta Sans',sans-serif; min-width:240px; padding:4px;">
        <div style="display:flex; justify-content:space-between; font-size:0.75rem; font-weight:800; color:#0284c7; margin-bottom:4px;">
          <span>${inc.id || inc.fullId}</span>
          <span style="text-transform:uppercase; color:${sevColor}; font-weight:800;">${sev}</span>
        </div>
        <h4 style="margin:0 0 6px 0; font-size:0.95rem; line-height:1.3;">${inc.title || (inc.category + ' Issue')}</h4>
        <p style="margin:0 0 8px 0; font-size:0.8rem; color:#475569;">📍 ${inc.locationName || (inc.location ? inc.location.address : 'Gujarat')}</p>
        <div style="font-size:0.75rem; background:#f1f5f9; padding:6px; border-radius:4px; margin-bottom:8px;">
          <strong>Assigned Unit:</strong> ${inc.assignedUnit || (inc.assignedCrew ? inc.assignedCrew.name : 'Awaiting Dispatch')}<br>
          <strong>Escrow Deposit:</strong> ₹50 (${inc.escrowStatus || 'Held'})
        </div>
        <button onclick="finishKanbanTicket('${inc.id || inc.shortId}')" style="width:100%; background:#059669; color:white; border:none; padding:7px; border-radius:4px; font-weight:700; cursor:pointer;">
          ✓ Finish Ticket &rarr;
        </button>
      </div>
    `);
    commandIncidentMarkers.push(marker);
  });

  // Fleets layer
  if (commandVisibleLayers.fleets && window.tacticalEngine && window.tacticalEngine.fleets) {
    window.tacticalEngine.fleets.forEach(flt => {
      const fleetIcon = L.divIcon({
        className: 'fleet-tactical-pin',
        html: `<div style="background:#10b981; width:28px; height:28px; border-radius:6px; border:2px solid white; display:flex; align-items:center; justify-content:center; font-size:14px; box-shadow:0 0 10px #10b981;">🚒</div>`,
        iconSize: [28, 28],
        iconAnchor: [14, 14]
      });
      const marker = L.marker(flt.currentCoords, { icon: fleetIcon }).addTo(commandMapInstance);
      marker.bindPopup(`
        <div style="color:#0f172a; font-family:'Plus Jakarta Sans',sans-serif; min-width:210px;">
          <strong style="color:#10b981;">${flt.callsign}</strong><br>
          <small>${flt.vehicleType}</small><br>
          <small>Lead: ${flt.crewLead} (${flt.phone})</small><br>
          <small>Status: ${flt.status.toUpperCase()} | Fuel: ${flt.fuelLevelPct}%</small>
        </div>
      `);
      commandFleetMarkers.push(marker);
    });
  }
}

window.focusCommandMapCity = function(cityId) {
  const city = GUJARAT_CITY_COORDS[cityId];
  if (city && commandMapInstance) {
    commandMapInstance.flyTo(city.coords, city.zoom, { duration: 1.5 });
    showCivicaToast(`🛰️ Command radar focused on ${city.name}.`);
  }
};

window.filterCommandMapLayer = function(layerName, isVisible) {
  commandVisibleLayers[layerName] = isVisible;
  populateCommandMapMarkers();
};

window.playTacticalSiren = function() {
  if (window.tacticalEngine) {
    window.tacticalEngine.playTacticalAlertTone('critical');
    showCivicaToast('🚨 Tactical Emergency Siren triggered.');
  } else {
    showCivicaToast('🚨 Emergency alert sounded across command channels.');
  }
};

window.exportCommandCenterTelemetry = function() {
  if (window.tacticalEngine) {
    window.tacticalEngine.exportTelemetryCSV();
    showCivicaToast('📥 Tactical Telemetry CSV exported successfully.');
  } else {
    exportAuditReportCSV();
  }
};

window.finishKanbanTicket = function(ticketId) {
  if (window.tacticalEngine) {
    const inc = window.tacticalEngine.incidents.find(i => i.id === ticketId || i.shortId === ticketId);
    if (inc) {
      inc.status = 'resolved';
      inc.escrowStatus = 'refunded';
      inc.slaHoursRemaining = 0;
      window.tacticalEngine.emit('incidentUpdated', inc);
      showCivicaToast(`✅ Incident ${ticketId} status changed to FINISH.`);
      renderKanbanBoard();
      populateCommandMapMarkers();
      return;
    }
  }

  // Fallback / Master complaints update
  const comp = (appState.complaints || []).find(c => c.id === ticketId || c.shortId === ticketId);
  if (comp) {
    comp.status = 'resolved';
    comp.stage = 'resolved';
    comp.escrowRefundStatus = 'refunded';
    if (comp.depositStatus === 'held') {
      officerVerifyAndRefundTicket();
    }
    showCivicaToast(`✅ Incident ${ticketId} moved to FINISH section.`);
    saveMasterState();
    renderKanbanBoard();
    renderOfficerDashboard();
    renderDesktopPortal();
    populateCommandMapMarkers();
  }
};

window.advanceKanbanTicket = window.finishKanbanTicket;

window.renderKanbanBoard = function() {
  const stacks = {
    triage: document.getElementById('cmd-stack-triage'),
    dispatched: document.getElementById('cmd-stack-dispatched'),
    on_site: document.getElementById('cmd-stack-on_site'),
    resolved: document.getElementById('cmd-stack-resolved')
  };
  if (!stacks.triage) return;

  Object.values(stacks).forEach(s => s.innerHTML = '');
  const counts = { triage: 0, dispatched: 0, on_site: 0, resolved: 0 };

  const incidents = (window.tacticalEngine && window.tacticalEngine.incidents.length > 0)
    ? window.tacticalEngine.incidents
    : (GUJARAT_CIVIC_DATA.complaints || []);

  incidents.forEach(inc => {
    let laneKey = inc.status || 'triage';
    if (laneKey === 'new' || laneKey === 'received' || laneKey === 'assigned') laneKey = 'triage';
    if (laneKey === 'in_progress') laneKey = 'dispatched';

    if (!stacks[laneKey]) laneKey = 'triage';
    counts[laneKey] = (counts[laneKey] || 0) + 1;

    const card = document.createElement('div');
    card.className = 'kanban-card-item';
    const sev = inc.severity || 'routine';
    const title = inc.title || `${inc.category} Issue`;
    const loc = inc.locationName || (inc.location ? inc.location.address : 'Gujarat');
    const assigned = inc.assignedUnit || (inc.assignedCrew ? inc.assignedCrew.name : 'Pending Dispatch');

    card.innerHTML = `
      <div class="kcard-top">
        <span class="kcard-id">${inc.shortId || inc.id}</span>
        <span class="kcard-urgency urgency-${sev}">${sev}</span>
      </div>
      <div class="kcard-title">${title}</div>
      <div class="kcard-meta">📍 ${loc}</div>
      <div class="kcard-actions">
        <span style="font-size:0.72rem; color:#94a3b8; max-width:60%; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">
          ${assigned.split('(')[0]}
        </span>
        ${laneKey !== 'resolved' ? `
          <button onclick="finishKanbanTicket('${inc.id || inc.shortId}')" class="btn-advance-ticket btn-finish-ticket">
            ✓ Finish &rarr;
          </button>
        ` : `
          <span style="color:#10b981; font-weight:700; font-size:0.75rem;">✓ Finished & Refunded</span>
        `}
      </div>
    `;
    stacks[laneKey].appendChild(card);
  });

  ['triage', 'dispatched', 'on_site', 'resolved'].forEach(k => {
    const badge = document.getElementById(`cmd-badge-${k}`);
    if (badge) badge.textContent = counts[k] || 0;
  });

  const actKpi = document.getElementById('cmd-kpi-active-incidents');
  if (actKpi) actKpi.textContent = (counts.triage + counts.dispatched + counts.on_site);

  const fltKpi = document.getElementById('cmd-kpi-fleets-deployed');
  if (fltKpi) fltKpi.textContent = counts.dispatched + counts.on_site;
};

function startCommandCenterTicker() {
  const clockEl = document.getElementById('dash-command-clock');
  if (clockEl) {
    setInterval(() => {
      const now = new Date();
      clockEl.textContent = `${now.toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata', hour12: false })} IST`;
    }, 1000);
  }

  const tickerEl = document.getElementById('cmd-ticker-text');
  if (tickerEl && !window._tickerRunning) {
    window._tickerRunning = true;
    const telemetrySamples = [
      "Mithakhali subway rain siphon: 3,200 LPM discharge rate • Flow nominal.",
      "CG Road feeder pillar #42: Lineman team on-site with replacement 90W LED units.",
      "Surat Cable Bridge strain telemetry: 1.45G vibration load • Deck within deflection limit.",
      "Vadodara RC Dutt Road underpass: Tractor suction unit Alpha clearing branch obstruction.",
      "Automated Escrow Refund Engine: ₹50 security deposit credited to 8 verified complaints."
    ];
    let sampleIdx = 0;
    setInterval(() => {
      sampleIdx = (sampleIdx + 1) % telemetrySamples.length;
      if (tickerEl) {
        tickerEl.textContent = `[${new Date().toLocaleTimeString('en-IN', { hour12: false })}] ${telemetrySamples[sampleIdx]}`;
      }
    }, 4500);
  }
}



// Global DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  initMasterState();
  renderOfficerDashboard();
  initResolutionAuditReports();
  renderOfficerRatingsSection();
  renderDesktopPortal();
  renderCivicWallet();
  setAppLanguage(appState.language, false);
  if (typeof initSolutionsCarousel === 'function') {
    initSolutionsCarousel();
  }

  const urlParams = new URLSearchParams(window.location.search);
  const demoParam = urlParams.get('demo');
  const tabParam = urlParams.get('tab');
  if (demoParam) {
    loginAsDemo(demoParam);
    if (tabParam) {
      setTimeout(() => {
        if (demoParam === 'officer' || demoParam === 'admin') {
          switchOfficerTab(tabParam);
        } else if (demoParam === 'citizen') {
          switchDesktopTab(tabParam);
        }
      }, 150);
    }
  } else {
    returnToLandingPage();
  }

  // Global Smooth Scrolling for all in-page anchor links
  document.addEventListener('click', (e) => {
    const anchor = e.target.closest('a[href^="#"]');
    if (!anchor) return;
    const targetHref = anchor.getAttribute('href');
    if (targetHref && targetHref.length > 1 && targetHref.startsWith('#')) {
      const targetElement = document.querySelector(targetHref);
      if (targetElement) {
        e.preventDefault();
        const headerOffset = 115;
        const targetTop = targetElement.getBoundingClientRect().top + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: targetTop,
          behavior: 'smooth'
        });
        if (history.pushState) {
          history.pushState(null, null, targetHref);
        }
      }
    }
  });

  // Escape key closes modals
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeLoginModal();
      closeGalleryLightbox();
      closeWalletTopupModal();
      closeDispatchCrewModal();
      closeBroadcastModal();
    }
  });
});
