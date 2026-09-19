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
    tab_track: "🔍 Track Complaint",
    tab_report: "📝 Register Complaint",
    tab_wallet: "👛 Civic Wallet",
    tab_address: "📍 My Addresses",
    tab_wardmap: "📍 My Addresses",
    tab_community: "📢 Community Feed",
    tab_transit: "🚍 Transit Flow",
    tab_rules_dir: "📜 Rules & SLAs",
    track_page_title: "Track Complaint",
    track_placeholder: "Enter Complaint ID (e.g. 18492, 18501, 18470)",
    track_btn: "TRACK COMPLAINT",
    latest_note_title: "Latest Official Field Note",
    btn_upload_photo: "📷 Upload Inspection Photo",
    btn_reopen: "Reopen Complaint",
    address_page_title: "My Saved Addresses & Ward Registry",
    wardmap_page_title: "My Saved Addresses & Ward Registry",
    btn_share_society: "📤 Share with Society Secretary",
    side_escrow_title: "100% Refundable Escrow Guarantee",
    side_escrow_desc: "₹50 deposit held in municipal escrow to eliminate prank reports. Auto-refunded 100% to wallet upon engineer site verification.",
    side_sms_title: "Real-Time SMS & WhatsApp Alerts",
    side_sms_desc: "Automated status notifications dispatched directly to your mobile in English & Gujarati as field crews progress.",
    side_support_title: "AMC Ward 7 Navrangpura Desk",
    side_support_desc: "Navrangpura Zonal Office • Shift: 08:00 - 16:00<br>Central Helplines: <strong>155303 / 1913</strong>",
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
  } else {
    appState.language = 'en';
    localStorage.setItem('civica_lang', 'en');
  }

  const savedComplaints = localStorage.getItem('civica_complaints');
  const savedWallet = localStorage.getItem('civica_wallet');
  const savedAddresses = localStorage.getItem('civica_addresses');

  if (savedComplaints) {
    try { appState.complaints = JSON.parse(savedComplaints); } catch (e) {}
  }
  if (savedWallet) {
    try { appState.citizenWallet = JSON.parse(savedWallet); } catch (e) {}
  }
  if (savedAddresses) {
    try { appState.savedAddresses = JSON.parse(savedAddresses); } catch (e) {}
  }
  if (!appState.savedAddresses || appState.savedAddresses.length === 0) {
    appState.savedAddresses = [...(window.GUJARAT_CIVIC_DATA?.defaultAddresses || [])];
  }

  appState.selectedOfficerTicket = appState.complaints.find(c => c.id === appState.selectedOfficerTicketId) || appState.complaints[0];
}

function saveMasterState() {
  localStorage.setItem('civica_complaints', JSON.stringify(appState.complaints));
  localStorage.setItem('civica_wallet', JSON.stringify(appState.citizenWallet));
  localStorage.setItem('civica_addresses', JSON.stringify(appState.savedAddresses));
}

// Language Switcher (Clean English Default)
window.setAppLanguage = function(lang = 'en', closeModal = false) {
  if (!I18N_DATA[lang]) lang = 'en';
  appState.language = lang;
  localStorage.setItem('civica_lang', lang);

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
  if (tabName === 'wardmap' || tabName === 'address') tabName = 'track';
  appState.activeDesktopTab = tabName;

  const tabs = ['report', 'track', 'wallet', 'community', 'transit', 'rules-dir'];
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
      'transit': 'Transit Flow & Friction',
      'rules-dir': 'Rules, SLAs & Helplines'
    };
    breadcrumb.textContent = tabLabels[tabName] || tabName;
  }

  if (tabName === 'wallet') renderCivicWallet();
  else if (tabName === 'track') renderDesktopPortal();
  else if (tabName === 'community') renderCommunityIncidentFeed();
  else if (tabName === 'transit') renderTransitFriction();
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

  const subViews = ['dashboard', 'inbox', 'action', 'notify', 'preview', 'reports', 'rules'];
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
      'notify': '04 Notify Citizen',
      'preview': '05 Citizen Preview',
      'reports': '06 Municipal Resolution & Audit Reports',
      'rules': '07 Officer Rules'
    };
    officerBreadcrumb.textContent = officerLabels[tabKey] || tabKey;
  }

  if (tabKey === 'reports') {
    initResolutionAuditReports();
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
  const cards = document.querySelectorAll('.project-gallery-card');
  if (cards && typeof index === 'number' && cards[index]) {
    const card = cards[index];
    const img = card.querySelector('.gallery-thumb-img');
    const title = card.querySelector('.gallery-card-title');
    const desc = card.querySelector('.gallery-card-desc');
    const sla = card.querySelector('.gallery-sla-tag');

    const mImg = m.querySelector('img');
    const mTitle = m.querySelector('h3');
    const mDesc = m.querySelector('p');
    const mBadge = m.querySelector('span[style*="font-size:0.8rem"]');

    if (mImg && img) {
      mImg.src = img.src;
      mImg.alt = img.alt || 'Gujarat Civic Project';
    }
    if (mTitle && title) mTitle.textContent = title.textContent;
    if (mDesc && desc) mDesc.textContent = desc.textContent;
    if (mBadge && sla) mBadge.textContent = sla.textContent;
  }
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
        <button onclick="advanceKanbanTicket('${inc.id || inc.shortId}')" style="width:100%; background:#0284c7; color:white; border:none; padding:7px; border-radius:4px; font-weight:700; cursor:pointer;">
          ⚡ Advance Status / Dispatch &rarr;
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

window.advanceKanbanTicket = function(ticketId) {
  if (window.tacticalEngine) {
    const updated = window.tacticalEngine.advanceIncidentStatus(ticketId);
    if (updated) {
      showCivicaToast(`⚡ Incident ${ticketId} advanced to ${updated.status.toUpperCase()}.`);
      renderKanbanBoard();
      populateCommandMapMarkers();
      return;
    }
  }

  // Fallback state update
  const comp = (GUJARAT_CIVIC_DATA.complaints || []).find(c => c.id === ticketId || c.shortId === ticketId);
  if (comp) {
    if (comp.status === 'received' || comp.status === 'assigned') {
      comp.status = 'in_progress';
      comp.escrowRefundStatus = 'verified_refund_pending';
    } else if (comp.status === 'in_progress') {
      comp.status = 'resolved';
      comp.escrowRefundStatus = 'refunded';
    }
    showCivicaToast(`⚡ Ticket ${ticketId} updated to ${comp.status}.`);
    renderKanbanBoard();
    populateCommandMapMarkers();
  }
};

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
          <button onclick="advanceKanbanTicket('${inc.id || inc.shortId}')" class="btn-advance-ticket">
            Advance &rarr;
          </button>
        ` : `
          <span style="color:#10b981; font-weight:700; font-size:0.75rem;">✓ Refunded</span>
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
  renderDesktopPortal();
  renderCivicWallet();
  setAppLanguage(appState.language, false);

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
