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
    nav_command: "🛰️ COMMAND CENTER",
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
    tab_track: "🔍 Track complaint",
    tab_report: "📝 File complaint",
    tab_wallet: "👛 Civic Wallet",
    tab_wardmap: "🗺️ Ward map",
    tab_community: "📢 Community Feed",
    tab_transit: "🚍 Transit & Friction",
    tab_rules_dir: "📜 Rules & Directory",
    track_page_title: "Track complaint",
    track_placeholder: "Enter Complaint ID (e.g. 18492, 18501)",
    track_btn: "TRACK",
    latest_note_title: "Latest Official Note",
    btn_upload_photo: "📷 Upload Inspection Photo",
    btn_reopen: "Reopen Complaint",
    wardmap_page_title: "Ward 7 Civic Health Map · Ward Overview",
    btn_share_society: "📤 Share with Society Secretary",
    side_escrow_title: "100% Refundable Escrow",
    side_escrow_desc: "To eliminate fake complaints, ₹50 is held in municipal escrow. When AMC inspects genuine issues, ₹50 is instantly refunded to your Civic Wallet.",
    side_sms_title: "SMS & WhatsApp Updates",
    side_sms_desc: "Real-time status updates active",
    side_support_title: "🏛️ AMC Ward 7 Control Desk",
    side_support_desc: "Navrangpura Zonal Office • Shift: 08:00 - 16:00<br>Central Helpline: 155303 / 1913",
    floating_ai_btn: "AI Assistant",
    ai_popup_title: "Civica AI Assistant",
    ai_popup_sub: "Gemini & ChatGPT Core • AMC 24x7",
    ai_input_placeholder: "Ask your doubt about tickets, refunds, or AMC...",
    gallery_title: "OUR PROJECT GALLERY & CIVIC INITIATIVES",
    gallery_subtitle: "Explore live municipal projects, intelligent transit corridors, rapid pothole resurfacing fleets, and automated command operations across Gujarat.",
    btn_demo_login: "⚡ DEMO LOGIN",
    btn_hero_demo: "⚡ Instant Demo Login &rarr;",
    demo_box_title: "1-Click Direct Demo Login",
    demo_box_sub: "Access full portal features immediately without entering credentials:",
    btn_autofill_demo: "⚡ Auto-Fill Demo Credentials"
  },
  gu: {
    nav_home: "મુખ્ય પેજ",
    nav_about: "અમારા વિશે",
    nav_contact: "નિયમો અને સંપર્ક",
    nav_solutions: "ઉકેલો",
    nav_services: "સેવાઓ",
    nav_command: "🛰️ કમાન્ડ સેન્ટર",
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
    tab_track: "🔍 ફરિયાદ ટ્રેક કરો",
    tab_report: "📝 નવી ફરિયાદ નોંધાવો",
    tab_wallet: "👛 નાગરિક વૉલેટ",
    tab_wardmap: "🗺️ વોર્ડ નકશો",
    tab_community: "📢 નાગરિક ફીડ",
    tab_transit: "🚍 ટ્રાન્ઝિટ વ્યવસ્થા",
    tab_rules_dir: "📜 નિયમો અને ડિરેક્ટરી",
    track_page_title: "ફરિયાદ ટ્રેક કરો (લાઈવ સ્થિતિ)",
    track_placeholder: "ફરિયાદ આઈડી દાખલ કરો (દા.ત. 18492, 18501)",
    track_btn: "ટ્રેક કરો",
    latest_note_title: "અધિકારીની તાજેતરની નોંધ",
    btn_upload_photo: "📷 તપાસ માટે ફોટો અપલોડ કરો",
    btn_reopen: "ફરિયાદ ફરીથી ખોલો",
    wardmap_page_title: "વોર્ડ ૭ નાગરિક આરોગ્ય નકશો · લાઈવ વિગત",
    btn_share_society: "📤 સોસાયટી સેક્રેટરી સાથે શેર કરો",
    side_escrow_title: "૧૦૦% રિફંડેબલ એસ્ક્રો ડિપોઝિટ",
    side_escrow_desc: "ખોટી ફરિયાદો અટકાવવા ₹50 ની સુરક્ષા ડિપોઝિટ રાખવામાં આવે છે. AMC ટીમ દ્વારા સ્થળ તપાસ થતાં જ ₹50 આપના વૉલેટમાં તુરંત રિફંડ થઈ જાય છે.",
    side_sms_title: "SMS અને WhatsApp એલર્ટ",
    side_sms_desc: "ગુજરાતીમાં તાત્કાલિક અપડેટ્સ સક્રિય છે",
    side_support_title: "🏛️ AMC વોર્ડ ૭ કંટ્રોલ રૂમ",
    side_support_desc: "નવરંગપુરા ઝોનલ કચેરી • સમય: ૦૮:૦૦ થી ૧૬:૦૦<br>મધ્યસ્થ હેલ્પલાઇન: 155303 / 1913",
    floating_ai_btn: "AI સહાયક",
    ai_popup_title: "સિવિકા AI સહાયક",
    ai_popup_sub: "Gemini & ChatGPT આર્કિટેક્ચર • AMC સેવા",
    ai_input_placeholder: "ફરિયાદ, રિફંડ કે AMC નિયમો વિશે પૂછો...",
    gallery_title: "અમારી પ્રોજેક્ટ ગેલેરી અને નાગરિક પહેલ",
    gallery_subtitle: "સમગ્ર ગુજરાતમાં લાઈવ મ્યુનિસિપલ પ્રોજેક્ટ્સ, સ્માર્ટ ટ્રાન્ઝિટ કોરિડોર, ઝડપી રોડ રિપેરિંગ ફ્લીટ અને કમાન્ડ કંટ્રોલ સેન્ટરની કામગીરી જુઓ.",
    btn_demo_login: "⚡ ડેમો લોગિન",
    btn_hero_demo: "⚡ સીધો ડેમો પ્રવેશ &rarr;",
    demo_box_title: "૧-ક્લિક સીધો ડેમો પ્રવેશ (પાસવર્ડ વગર)",
    demo_box_sub: "પાસવર્ડ વગર સીધા પોર્ટલમાં પ્રવેશવા માટે નીચે આપેલ એકાઉન્ટ પસંદ કરો:",
    btn_autofill_demo: "⚡ ડેમો આઈડી/પાસવર્ડ ઓટો-ભરો"
  },
  hi: {
    nav_home: "मुख्य पृष्ठ",
    nav_about: "हमारे बारे में",
    nav_contact: "नियम व संपर्क",
    nav_solutions: "समाधान",
    nav_services: "सेवाएं",
    nav_command: "🛰️ कमांड सेंटर",
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
    tab_track: "🔍 शिकायत ट्रैक करें",
    tab_report: "📝 नई शिकायत दर्ज करें",
    tab_wallet: "👛 नागरिक वॉलेट",
    tab_wardmap: "🗺️ वार्ड नक्शा",
    tab_community: "📢 नागरिक फ़ीड",
    tab_transit: "🚍 ट्रांजिट व घर्षण",
    tab_rules_dir: "📜 नियम व निर्देशिका",
    track_page_title: "शिकायत ट्रैक करें (लाइव स्थिति)",
    track_placeholder: "शिकायत आईडी दर्ज करें (उदा. 18492, 18501)",
    track_btn: "ट्रैक करें",
    latest_note_title: "अधिकारी की नवीनतम टिप्पणी",
    btn_upload_photo: "📷 निरीक्षण फोटो अपलोड करें",
    btn_reopen: "शिकायत पुनः खोलें",
    wardmap_page_title: "वार्ड 7 नागरिक स्वास्थ्य नक्शा · लाइव विवरण",
    btn_share_society: "📤 सोसायटी सचिव के साथ साझा करें",
    side_escrow_title: "100% रिफंडेबल एस्क्रो मॉडल",
    side_escrow_desc: "फर्जी शिकायतों की रोकथाम हेतु ₹50 की सुरक्षा राशि रखी जाती है। स्थल निरीक्षण उपरांत यह राशि तुरंत आपके वॉलेट में 100% वापस कर दी जाती है।",
    side_sms_title: "SMS व WhatsApp अपडेट",
    side_sms_desc: "रियल-टाइम स्थिति संदेश सक्रिय हैं",
    side_support_title: "🏛️ AMC वार्ड 7 नियंत्रण कक्ष",
    side_support_desc: "नवरंगपुरा जोनल कार्यालय • समय: 08:00 से 16:00<br>केंद्रीय हेल्पलाइन: 155303 / 1913",
    floating_ai_btn: "AI सहायक",
    ai_popup_title: "सिविका AI सहायक",
    ai_popup_sub: "Gemini व ChatGPT कोर • AMC 24x7",
    ai_input_placeholder: "शिकायत, रिफंड या नगर निगम नियमों पर सवाल पूछें...",
    gallery_title: "हमारी परियोजना गैलरी एवं नागरिक पहल",
    gallery_subtitle: "गुजरात भर में लाइव नगर निगम परियोजनाएं, स्मार्ट ट्रांजिट कॉरिडोर, रैपिड रोड रिपेयरिंग फ्लीट और कमांड कंट्रोल सेंटर संचालन देखें।",
    btn_demo_login: "⚡ डेमो लॉगिन",
    btn_hero_demo: "⚡ सीधा डेमो प्रवेश &rarr;",
    demo_box_title: "1-क्लिक सीधा डेमो प्रवेश (बिना पासवर्ड)",
    demo_box_sub: "बिना पासवर्ड पोर्टल में सीधे प्रवेश के लिए नीचे दिए गए डेमो खाते पर क्लिक करें:",
    btn_autofill_demo: "⚡ डेमो क्रेडेंशियल्स स्वतः भरें"
  }
};

let appState = {
  currentView: 'landing', // 'landing' | 'citizen-desktop' | 'officer' | 'command-center'
  currentUser: null,
  language: 'gu',
  citizenWallet: { ...window.GUJARAT_CIVIC_DATA.citizenWallet },
  selectedEscrowGateway: 'Paytm',
  selectedTopupGateway: 'Paytm',
  activeDesktopTab: 'track',
  activeOfficerTab: 'dashboard',
  activeCityId: 'AMC',
  selectedOfficerTicketId: 'GJ-AMC-2026-18492',
  selectedOfficerTicket: null,
  inboxFilter: 'assigned_to_me',
  kanbanDeptFilter: 'all',
  notifyLang: 'gu',
  activeTemplateKey: 'parts_ordered',
  officerKPIs: { ...window.GUJARAT_CIVIC_DATA.officerKPIs },
  shiftActions: [...window.GUJARAT_CIVIC_DATA.shiftActions],
  complaints: [...window.GUJARAT_CIVIC_DATA.complaints],
  inboxTickets: [...window.GUJARAT_CIVIC_DATA.inboxTickets],
  selectedIssueType: 'streetlight',
  heatmapVisible: false
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
  }

  const savedComplaints = localStorage.getItem('civica_complaints');
  const savedWallet = localStorage.getItem('civica_wallet');

  if (savedComplaints) {
    try { appState.complaints = JSON.parse(savedComplaints); } catch (e) {}
  }
  if (savedWallet) {
    try { appState.citizenWallet = JSON.parse(savedWallet); } catch (e) {}
  }

  appState.selectedOfficerTicket = appState.complaints.find(c => c.id === appState.selectedOfficerTicketId) || appState.complaints[0];
}

function saveMasterState() {
  localStorage.setItem('civica_complaints', JSON.stringify(appState.complaints));
  localStorage.setItem('civica_wallet', JSON.stringify(appState.citizenWallet));
}

// Language Switcher
window.setAppLanguage = function(lang = 'gu', closeModal = false) {
  if (!I18N_DATA[lang]) lang = 'gu';
  appState.language = lang;
  localStorage.setItem('civica_lang', lang);

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  const dict = I18N_DATA[lang] || I18N_DATA.gu;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) el.innerHTML = dict[key];
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key]) el.placeholder = dict[key];
  });

  const aiBtnLabel = document.getElementById('floating-ai-btn-label');
  if (aiBtnLabel) aiBtnLabel.textContent = dict.floating_ai_btn || 'AI સહાયક';

  const aiTitle = document.getElementById('ai-popup-title-text');
  if (aiTitle) aiTitle.textContent = dict.ai_popup_title;

  const aiSub = document.getElementById('ai-popup-sub-text');
  if (aiSub) aiSub.textContent = dict.ai_popup_sub;

  const aiInput = document.getElementById('floating-ai-input');
  if (aiInput) aiInput.placeholder = dict.ai_input_placeholder;

  renderFloatingAiChips();
  initFloatingAiGreeting();
  renderDesktopPortal();
  renderCivicWallet();

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
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

window.openLoginModal = function(initialRole = 'citizen') {
  const overlay = document.getElementById('auth-modal-overlay');
  if (overlay) {
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
  switchAuthRole(initialRole);
};

window.closeLoginModal = function() {
  const overlay = document.getElementById('auth-modal-overlay');
  if (overlay) {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }
};

window.switchAuthRole = function(role) {
  const citizenTab = document.getElementById('tab-role-citizen');
  const adminTab = document.getElementById('tab-role-admin');
  const citizenForm = document.getElementById('auth-form-citizen');
  const adminForm = document.getElementById('auth-form-admin');

  if (role === 'admin' || role === 'officer') {
    citizenTab?.classList.remove('active');
    adminTab?.classList.add('active');
    if (citizenForm) citizenForm.style.display = 'none';
    if (adminForm) {
      adminForm.style.display = 'block';
      adminForm.classList.add('active');
    }
  } else {
    adminTab?.classList.remove('active');
    citizenTab?.classList.add('active');
    if (adminForm) adminForm.style.display = 'none';
    if (citizenForm) {
      citizenForm.style.display = 'block';
      citizenForm.classList.add('active');
    }
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
      role: 'officer',
      name: 'R. Patel (Command Dispatcher)',
      email: 'dispatcher.amc@gujarat.gov.in',
      avatar: 'CD',
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
    saveMasterState();
    closeLoginModal();
    switchDashboardMode('citizen-desktop');
  }
};

window.loginWithGoogle = function() {
  loginAsDemo('citizen');
};

window.fillDemoCredentials = function(role = 'citizen') {
  if (role === 'officer' || role === 'admin') {
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
  loginAsDemo('citizen');
};

window.handleAdminFormLogin = function(e) {
  if (e) e.preventDefault();
  loginAsDemo('officer');
};

window.handleLogout = function() {
  appState.currentUser = null;
  returnToLandingPage();
  showCivicaToast('👋 Signed out successfully.');
};

function updateSessionUI() {
  const btnHeaderLogin = document.getElementById('btn-header-login');
  const dashSessionUserText = document.getElementById('dash-session-user-text');

  if (appState.currentUser) {
    if (btnHeaderLogin) {
      btnHeaderLogin.textContent = 'ENTER DASHBOARD ⚡';
      btnHeaderLogin.onclick = () => {
        if (appState.currentUser.role === 'officer') {
          switchDashboardMode('officer');
        } else {
          switchDashboardMode('citizen-desktop');
        }
      };
    }
    if (dashSessionUserText) {
      dashSessionUserText.textContent = `${appState.currentUser.name}`;
    }
  } else {
    if (btnHeaderLogin) {
      btnHeaderLogin.textContent = 'MEMBER LOGIN';
      btnHeaderLogin.onclick = () => openLoginModal('citizen');
    }
    if (dashSessionUserText) {
      dashSessionUserText.textContent = 'Guest Session · Live System';
    }
  }
}

/**
 * Switch between Citizen Desktop, Municipal Officer, or Command Center
 */
window.switchDashboardMode = function(mode) {
  if (!appState.currentUser) {
    loginAsDemo(mode === 'officer' ? 'officer' : mode === 'command-center' ? 'command' : 'citizen');
  }

  appState.currentView = mode;

  document.getElementById('view-landing').style.display = 'none';
  document.getElementById('view-dashboards-container').style.display = 'block';

  // Mode buttons in top bar
  document.querySelectorAll('.dash-mode-pill').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.mode === mode);
  });

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
  }

  updateSessionUI();
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

window.openCommandCenter = function() {
  switchDashboardMode('command-center');
};

/* ==========================================================================
   CITIZEN PORTAL ("NORMAL DASHBOARD") CONTROLLERS
   ========================================================================== */

window.switchDesktopTab = function(tabName) {
  appState.activeDesktopTab = tabName;

  const tabs = ['track', 'report', 'wallet', 'wardmap', 'community', 'transit', 'rules-dir'];
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

  if (tabName === 'wallet') renderCivicWallet();
  else if (tabName === 'track') renderDesktopPortal();
  else if (tabName === 'community') renderCommunityIncidentFeed();
  else if (tabName === 'transit') renderTransitFriction();
};

function renderDesktopPortal() {
  const currentTicket = appState.complaints.find(c => c.id === appState.selectedOfficerTicketId) || appState.complaints[0];
  if (!currentTicket) return;

  const lang = appState.language || 'gu';
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
  const typeConfig = window.GUJARAT_CIVIC_DATA.issueTypes.find(t => t.id === appState.selectedIssueType) || window.GUJARAT_CIVIC_DATA.issueTypes[0];

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

  const newComplaint = {
    id: newTicketId,
    shortId: `${randomId}`,
    citizen: appState.currentUser ? appState.currentUser.name : "Priya Patel",
    citizenPhone: "98250 84920",
    title: `${typeConfig.name} issue · ${location}`,
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
    note: `${note} — ₹50 security deposit held via ${paymentMethodName}. Inspection pending.`,
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

window.openWalletTopupModal = function() {
  const m = document.getElementById('wallet-topup-modal');
  if (m) m.classList.add('active');
};

window.closeWalletTopupModal = function() {
  const m = document.getElementById('wallet-topup-modal');
  if (m) m.classList.remove('active');
};

window.setTopupAmount = function(amt) {
  document.getElementById('topup-amount-input').value = amt;
  document.querySelectorAll('.amount-chip').forEach(c => {
    c.classList.toggle('active', c.textContent.includes(amt));
  });
};

window.selectTopupGateway = function(el, gatewayName) {
  document.querySelectorAll('#wallet-topup-modal .gateway-option-card').forEach(c => c.classList.remove('selected'));
  el.classList.add('selected');
  appState.selectedTopupGateway = gatewayName;
};

window.executeWalletTopup = function() {
  const input = document.getElementById('topup-amount-input');
  const amount = parseFloat(input?.value) || 100;
  if (amount <= 0) return;

  appState.citizenWallet.balance = (Number(appState.citizenWallet.balance) || 0) + amount;
  appState.citizenWallet.transactions.unshift({
    id: `TX-${Math.floor(1000 + Math.random() * 9000)}`,
    type: 'credit',
    title: `Wallet Top-Up via ${appState.selectedTopupGateway}`,
    amount: amount,
    date: 'Just now',
    method: appState.selectedTopupGateway,
    status: 'completed'
  });

  saveMasterState();
  closeWalletTopupModal();
  renderCivicWallet();
  showCivicaToast(`💳 Added ₹${amount.toFixed(2)} to Civic Wallet via ${appState.selectedTopupGateway}!`);
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
    switchDashboardMode('command-center');
    return;
  }

  appState.activeOfficerTab = tabKey;

  document.querySelectorAll('.desktop-sidebar.officer-sidebar .sidebar-nav-item').forEach(n => {
    n.classList.remove('active');
  });
  document.getElementById(`of-nav-${tabKey}`)?.classList.add('active');

  const subViews = ['dashboard', 'inbox', 'action', 'notify', 'preview', 'reports', 'rules'];
  subViews.forEach(s => {
    const el = document.getElementById(`officer-view-${s}`);
    if (el) el.style.display = (s === tabKey) ? 'block' : 'none';
  });

  const urlBar = document.getElementById('officer-url-bar');
  if (urlBar) {
    urlBar.textContent = `https://civica.gujarat.in / officer / ${tabKey}`;
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
    shiftList.innerHTML = appState.shiftActions.map(action => `
      <div class="shift-check-item ${action.done ? 'done' : ''}" onclick="toggleShiftAction(${action.id})">
        <input type="checkbox" ${action.done ? 'checked' : ''} style="cursor:pointer;">
        <span>· ${action.text}</span>
      </div>
    `).join('');
  }

  renderOfficerInbox(appState.inboxFilter);
  renderOfficerTakeAction(appState.selectedOfficerTicketId);
  renderOfficerNotify(appState.selectedOfficerTicketId);
}

window.toggleShiftAction = function(actionId) {
  const item = appState.shiftActions.find(a => a.id === actionId);
  if (item) {
    item.done = !item.done;
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

    return `
      <tr onclick="openOfficerTicket('${row.fullId}')">
        <td><strong>${row.id}</strong></td>
        <td>${row.citizen}</td>
        <td>${row.issue}</td>
        <td>${row.place}</td>
        <td>${depBadge}</td>
        <td><span class="priority-status-pill inprogress">${row.statusLabel}</span></td>
        <td><button class="btn-inline-action">Inspect &rarr;</button></td>
      </tr>
    `;
  }).join('');
}

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

function renderOfficerTakeAction(ticketId) {
  const ticket = appState.complaints.find(c => c.id === ticketId) || appState.complaints[0];
  if (!ticket) return;

  document.getElementById('act-ticket-id').textContent = ticket.id;
  document.getElementById('act-ticket-title').textContent = ticket.title;
  document.getElementById('act-ticket-meta').textContent = `Citizen ${ticket.citizen || 'K. Shah'} · Ward 7 · SLA ${ticket.slaDate || '20 Sep'}`;

  const crewSelect = document.getElementById('act-crew-select');
  if (crewSelect && ticket.assignedCrew) crewSelect.value = ticket.assignedCrew;

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

function renderOfficerNotify(ticketId) {
  const ticket = appState.complaints.find(c => c.id === ticketId) || appState.complaints[0];
  if (!ticket) return;
  document.getElementById('notify-recipient-title').textContent = `Message to ${ticket.citizen || 'K. Shah'}`;
  applyReadyTemplate(appState.activeTemplateKey);
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
  if (!msg) return;

  const ticket = appState.complaints.find(c => c.id === appState.selectedOfficerTicketId);
  if (ticket) {
    ticket.note = msg;
    saveMasterState();
    document.getElementById('live-received-note-text').textContent = msg;
    renderDesktopPortal();
    showCivicaToast(`સત્તાવાર અપડેટ મોકલાયું! Notification dispatched.`);
    switchOfficerTab('preview');
  }
};

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
          <button onclick="advanceKanbanCard('${item.id}', '${laneKey}')" class="btn-advance-ticket">Advance &rarr;</button>
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

window.advanceKanbanCard = function(ticketId, currentLane) {
  const item = appState.complaints.find(c => c.id === ticketId);
  if (!item) return;

  const sequence = ['backlog', 'investigation', 'dispatched', 'resolved'];
  const nextIdx = sequence.indexOf(currentLane) + 1;

  if (nextIdx < sequence.length) {
    item.stage = sequence[nextIdx];
    if (item.stage === 'dispatched') item.status = 'in_progress';
    if (item.stage === 'resolved') {
      item.status = 'resolved';
      if (item.depositStatus === 'held') {
        officerVerifyAndRefundTicket();
      }
    }
    saveMasterState();
    renderKanbanBoard();
    renderOfficerDashboard();
    renderDesktopPortal();
    showCivicaToast(`Advanced ${item.id} to ${item.stage.toUpperCase()}`);
  }
};

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
  thread.innerHTML = `
    <div class="ai-popup-msg-row ai-popup-msg-bot">
      <div class="ai-msg-avatar bot">✨</div>
      <div class="ai-popup-bubble">
        <strong>નમસ્તે! હું સિવિકા AI સહાયક છું.</strong>
        <p style="margin:4px 0 0 0;">અમદાવાદ મહાનગરપાલિકા સાથે લાઈવ જોડાયેલ છું. આપની ફરિયાદ, ₹50 રિફંડેબલ એસ્ક્રો ડિપોઝિટ, અથવા મ્યુનિસિપલ નિયમો વિશે કોઈપણ પ્રશ્ન પૂછી શકો છો.</p>
      </div>
    </div>
  `;
}

function renderFloatingAiChips() {
  const chipsBar = document.getElementById('floating-ai-chips');
  if (!chipsBar) return;
  const chips = [
    { text: "💡 શેરી લાઈટ ક્યારે શરૂ થશે?", prompt: "મને શેરી લાઈટ ફરિયાદ વિશે સ્થિતિ જણાવો." },
    { text: "🛡️ ₹50 રિફંડ ક્યારે મળશે?", prompt: "મારા ₹50 ક્યારે અને કેવી રીતે પરત મળશે?" },
    { text: "👷 કયા અધિકારી સોંપાયેલ છે?", prompt: "વોર્ડ ૭ ના કયા અધિકારી આ કામ જોઈ રહ્યા છે?" }
  ];
  chipsBar.innerHTML = chips.map(c => `
    <button type="button" class="ai-popup-chip" onclick="askFloatingAiPrompt('${c.prompt}')">${c.text}</button>
  `).join('');
}

// Gallery Lightbox
window.filterGallery = function(category) {
  document.querySelectorAll('.gallery-filter-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.filter === category);
  });
  document.querySelectorAll('.project-gallery-card').forEach(c => {
    c.style.display = (category === 'all' || c.dataset.category === category) ? 'flex' : 'none';
  });
};

window.openGalleryLightbox = function(index) {
  const m = document.getElementById('gallery-lightbox-modal');
  if (!m) return;
  m.style.display = 'flex';
  m.classList.add('active');
};

window.closeGalleryLightbox = function() {
  const m = document.getElementById('gallery-lightbox-modal');
  if (m) {
    m.style.display = 'none';
    m.classList.remove('active');
  }
};

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

// Global DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  initMasterState();
  renderOfficerDashboard();
  renderDesktopPortal();
  renderCivicWallet();
  setAppLanguage(appState.language, false);

  const urlParams = new URLSearchParams(window.location.search);
  const demoParam = urlParams.get('demo');
  if (demoParam) {
    loginAsDemo(demoParam);
  } else {
    returnToLandingPage();
  }

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
