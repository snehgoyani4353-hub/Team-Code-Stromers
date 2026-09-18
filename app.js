/**
 * CIVICA ગુજરાત - Master Application Controller
 * Synchronized Municipal Officer Interface (Pages 1-8) & Citizen User Interface
 * Municipalities: AMC (Ahmedabad), SMC (Surat), VMC (Vadodara), RMC (Rajkot), GMC (Gandhinagar)
 */

// Application State
// Multi-Language Localization Dictionary (English, Gujarati, Hindi)
const I18N_DATA = {
  en: {
    nav_home: "HOME",
    nav_about: "ABOUT US",
    nav_contact: "CONTACT US",
    nav_solutions: "SOLUTIONS",
    nav_services: "SERVICES",
    btn_member_login: "MEMBER LOGIN",
    hero_title: "Civic Engagement &<br>Urban Mobility",
    hero_bullet_1: "Citizen-centered software that turns neighborhood reports into action.",
    hero_bullet_2: "Live community dashboards for infrastructure, safety, and transit flow.",
    hero_bullet_3: "Mobile tools that make public commuting clearer, faster, and fairer.",
    btn_hero_citizen: "Access Citizen Portal &rarr;",
    btn_hero_officer: "Municipal Officer Sign-In",
    dash_back_home: "&larr; Back to Civica Home",
    dash_signed_citizen: "Signed in as Citizen",
    dash_service_badge: "Gujarat Citizen Service",
    tab_track: "🔍 Track complaint",
    tab_report: "📝 File complaint",
    tab_wallet: "👛 Civic Wallet",
    tab_wardmap: "🗺️ Ward map",
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
    status_in_progress: "IN PROGRESS",
    status_assigned: "ASSIGNED",
    status_resolved: "RESOLVED",
    status_new: "NEW",
    status_need_info: "NEED INFO",
    gallery_title: "OUR PROJECT GALLERY & CIVIC INITIATIVES",
    gallery_subtitle: "Explore live municipal projects, intelligent transit corridors, rapid pothole resurfacing fleets, and automated command operations across Gujarat.",
    gallery_banner_title: "📜 Citizen Civic Charter & Emergency Helplines Directory",
    gallery_banner_desc: "Read about our mandatory SLA timelines, 100% refundable ₹50 escrow policy, and get direct contact numbers for AMC 24x7 control rooms and zonal offices.",
    gallery_banner_btn: "View Rules, Regulations & Contact Numbers &rarr;",
    btn_demo_login: "⚡ DEMO LOGIN",
    btn_hero_demo: "⚡ Instant Demo Login &rarr;",
    demo_box_title: "1-Click Direct Demo Login",
    demo_box_sub: "Access full portal features immediately without entering credentials:",
    btn_autofill_demo: "⚡ Auto-Fill Demo Credentials"
  },
  gu: {
    nav_home: "મુખ્ય પેજ",
    nav_about: "અમારા વિશે",
    nav_contact: "સંપર્ક",
    nav_solutions: "ઉકેલો",
    nav_services: "સેવાઓ",
    btn_member_login: "સભ્ય પ્રવેશ",
    hero_title: "નાગરિક સહભાગિતા અને<br>શહેરી ગતિશીલતા",
    hero_bullet_1: "નાગરિક-કેન્દ્રિત સિસ્ટમ જે સ્થાનિક ફરિયાદોને તાત્કાલિક ઉકેલમાં ફેરવે છે.",
    hero_bullet_2: "મૂળભૂત માળખાકીય સુવિધા, સલામતી અને ટ્રાફિક વ્યવસ્થા માટે લાઈવ ડેશબોર્ડ.",
    hero_bullet_3: "જાહેર પરિવહન અને નાગરિક સુવિધાઓને સરળ, ઝડપી અને પારદર્શક બનાવતા સાધનો.",
    btn_hero_citizen: "નાગરિક પોર્ટલ શરૂ કરો &rarr;",
    btn_hero_officer: "મ્યુનિસિપલ અધિકારી પ્રવેશ",
    dash_back_home: "&larr; મુખ્ય પેજ પર પાછા જાઓ",
    dash_signed_citizen: "નાગરિક તરીકે પ્રવેશ કરેલ છે",
    dash_service_badge: "ગુજરાત નાગરિક સેવા",
    tab_track: "🔍 ફરિયાદ ટ્રેક કરો",
    tab_report: "📝 નવી ફરિયાદ નોંધાવો",
    tab_wallet: "👛 નાગરિક વૉલેટ",
    tab_wardmap: "🗺️ વોર્ડ નકશો",
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
    status_in_progress: "કામ પ્રગતિમાં",
    status_assigned: "ટીમને સોંપાયેલ",
    status_resolved: "ઉકેલાયેલ",
    status_new: "નવી ફરિયાદ",
    status_need_info: "માહિતી જોઈએ છે",
    gallery_title: "અમારી પ્રોજેક્ટ ગેલેરી અને નાગરિક પહેલ",
    gallery_subtitle: "સમગ્ર ગુજરાતમાં લાઈવ મ્યુનિસિપલ પ્રોજેક્ટ્સ, સ્માર્ટ ટ્રાન્ઝિટ કોરિડોર, ઝડપી રોડ રિપેરિંગ ફ્લીટ અને કમાન્ડ કંટ્રોલ સેન્ટરની કામગીરી જુઓ.",
    gallery_banner_title: "📜 નાગરિક ચાર્ટર, નિયમો અને કટોકટી હેલ્પલાઇન ડિરેક્ટરી",
    gallery_banner_desc: "અમારી ફરજિયાત SLA સમયમર્યાદા, ૧૦૦% પરતપાત્ર ₹૫૦ એસ્ક્રો નીતિ વાંચો અને AMC ૨૪x૭ કંટ્રોલ રૂમ અને ઝોનલ કચેરીઓના સીધા ફોન નંબરો મેળવો.",
    gallery_banner_btn: "નિયમો, વિનિયમો અને સંપર્ક નંબરો જુઓ &rarr;",
    btn_demo_login: "⚡ ડેમો લોગિન",
    btn_hero_demo: "⚡ સીધો ડેમો પ્રવેશ &rarr;",
    demo_box_title: "૧-ક્લિક સીધો ડેમો પ્રવેશ (પાસવર્ડ વગર)",
    demo_box_sub: "પાસવર્ડ વગર સીધા પોર્ટલમાં પ્રવેશવા માટે નીચે આપેલ એકાઉન્ટ પસંદ કરો:",
    btn_autofill_demo: "⚡ ડેમો આઈડી/પાસવર્ડ ઓટો-ભરો"
  },
  hi: {
    nav_home: "मुख्य पृष्ठ",
    nav_about: "हमारे बारे में",
    nav_contact: "संपर्क",
    nav_solutions: "समाधान",
    nav_services: "सेवाएं",
    btn_member_login: "सदस्य लॉगिन",
    hero_title: "नागरिक सहभागिता एवं<br>शहरी गतिशीलता",
    hero_bullet_1: "नागरिक-केंद्रित सॉफ्टवेयर जो स्थानीय शिकायतों को त्वरित कार्रवाई में बदलता है।",
    hero_bullet_2: "बुनियादी ढांचे, सुरक्षा और यातायात प्रवाह के लिए लाइव समुदाय डैशबोर्ड।",
    hero_bullet_3: "सार्वजनिक आवागमन को सरल, तेज और पारदर्शी बनाने वाले डिजिटल साधन।",
    btn_hero_citizen: "नागरिक पोर्टल शुरू करें &rarr;",
    btn_hero_officer: "नगर निगम अधिकारी लॉगिन",
    dash_back_home: "&larr; सिविका होम पर वापस जाएं",
    dash_signed_citizen: "नागरिक के रूप में लॉगिन",
    dash_service_badge: "गुजरात नागरिक सेवा",
    tab_track: "🔍 शिकायत ट्रैक करें",
    tab_report: "📝 नई शिकायत दर्ज करें",
    tab_wallet: "👛 नागरिक वॉलेट",
    tab_wardmap: "🗺️ वार्ड नक्शा",
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
    status_in_progress: "कार्य प्रगति पर",
    status_assigned: "टीम को सौंपा गया",
    status_resolved: "समाधान पूर्ण",
    status_new: "नई शिकायत",
    status_need_info: "जानकारी आवश्यक",
    gallery_title: "हमारी परियोजना गैलरी एवं नागरिक पहल",
    gallery_subtitle: "गुजरात भर में लाइव नगर निगम परियोजनाएं, स्मार्ट ट्रांजिट कॉरिडोर, रैपिड रोड रिपेयरिंग फ्लीट और कमांड कंट्रोल सेंटर संचालन देखें।",
    gallery_banner_title: "📜 नागरिक अधिकार पत्र, नियम एवं आपातकालीन हेल्पलाइन निर्देशिका",
    gallery_banner_desc: "हमारी अनिवार्य SLA समयसीमा, 100% प्रतिदेय ₹50 एस्क्रो नीति पढ़ें और AMC 24x7 नियंत्रण कक्ष और जोनल कार्यालयों के सीधे फोन नंबर प्राप्त करें।",
    gallery_banner_btn: "नियम, विनियम एवं संपर्क नंबर देखें &rarr;",
    btn_demo_login: "⚡ डेमो लॉगिन",
    btn_hero_demo: "⚡ सीधा डेमो प्रवेश &rarr;",
    demo_box_title: "1-क्लिक सीधा डेमो प्रवेश (बिना पासवर्ड)",
    demo_box_sub: "बिना पासवर्ड पोर्टल में सीधे प्रवेश के लिए नीचे दिए गए डेमो खाते पर क्लिक करें:",
    btn_autofill_demo: "⚡ डेमो क्रेडेंशियल्स स्वतः भरें"
  }
};

// Application State
let appState = {
  currentView: 'landing', // 'landing' | 'citizen-desktop' | 'citizen-mobile' | 'officer'
  currentUser: null, // { role: 'citizen'|'officer', name: string, email: string, avatar: string }
  language: 'gu', // 'en' | 'gu' | 'hi'
  citizenWallet: { ...window.GUJARAT_CIVIC_DATA.citizenWallet },
  pendingComplaintData: null,
  selectedEscrowGateway: 'Paytm',
  selectedTopupGateway: 'Paytm',
  activeDesktopTab: 'track',
  activeOfficerTab: 'dashboard',
  activeCityId: 'AMC',
  activeMobileScreen: 'home',
  selectedOfficerTicketId: 'GJ-AMC-2026-18492',
  selectedOfficerTicket: null,
  inboxFilter: 'assigned_to_me',
  notifyLang: 'gu',
  activeTemplateKey: 'parts_ordered',
  officerKPIs: { ...window.GUJARAT_CIVIC_DATA.officerKPIs },
  shiftActions: [...window.GUJARAT_CIVIC_DATA.shiftActions],
  complaints: [...window.GUJARAT_CIVIC_DATA.complaints],
  inboxTickets: [...window.GUJARAT_CIVIC_DATA.inboxTickets],
  selectedIssueType: 'streetlight'
};

// Initialize
function initMasterState() {
  const savedLang = localStorage.getItem('civica_lang');
  if (savedLang && (savedLang === 'en' || savedLang === 'gu' || savedLang === 'hi')) {
    appState.language = savedLang;
  } else {
    appState.language = 'gu'; // Default to Gujarati
  }

  const savedCity = localStorage.getItem('civica_active_city');
  const savedComplaints = localStorage.getItem('civica_complaints');
  const savedWallet = localStorage.getItem('civica_wallet');

  if (savedCity) appState.activeCityId = savedCity;
  if (savedComplaints) {
    try { appState.complaints = JSON.parse(savedComplaints); } catch (e) {}
  }
  if (savedWallet) {
    try { appState.citizenWallet = JSON.parse(savedWallet); } catch (e) {}
  }

  // Ensure fresh session: Always require explicit login first
  appState.currentUser = null;
  localStorage.removeItem('civica_user');

  // Preselect 18492
  appState.selectedOfficerTicket = appState.complaints.find(c => c.id === appState.selectedOfficerTicketId) || appState.complaints[0];
}

function saveMasterState() {
  localStorage.setItem('civica_active_city', appState.activeCityId);
  localStorage.setItem('civica_complaints', JSON.stringify(appState.complaints));
  localStorage.setItem('civica_wallet', JSON.stringify(appState.citizenWallet));
}

// Slide UI Multi-Lingual Synchronization
function updateSlideLanguageUI(lang) {
  // Update slide pills
  ['en', 'hi', 'gu'].forEach(l => {
    const pill = document.getElementById(`slide-pill-${l}`);
    if (pill) {
      if (l === lang) pill.classList.add('active');
      else pill.classList.remove('active');
    }
  });

  const translations = {
    en: {
      report_heading: "Report issue",
      report_subheading: "All fields stay on this page.",
      lbl_cat: "1 Complaint type",
      lbl_address: "2 Address",
      address_hint: "Address is text only.",
      lbl_photo: "3 Photo of the problem",
      lbl_deposit: "4 Deposit",
      deposit_rules: "Returned if the damaged road is real.<br>Kept only if the complaint is false.",
      lbl_sending: "You are sending",
      btn_submit: "SUBMIT COMPLAINT",
      submit_hint: "After submit you get GJ-AMC-2026-18470<br>and Track issue opens.",
      track_heading: "Track issue",
      lbl_complaint_id: "Complaint ID",
      btn_track: "TRACK",
      btn_view_complaint: "View complaint",
      lbl_your_complaint: "Your complaint",
      lbl_watch_id: "Watch this ID",
      watch_note: "Save this number. Use it any time to open the same complaint.",
      help_heading: "Help",
      help_subheading: "Ask how to file, how to track, or about the ₹50 refund.",
      lang_hint: "English is default."
    },
    gu: {
      report_heading: "નવી ફરિયાદ નોંધાવો",
      report_subheading: "બધી વિગતો આ એક જ પેજ પર રહે છે.",
      lbl_cat: "૧ ફરિયાદનો પ્રકાર",
      lbl_address: "૨ સરનામું",
      address_hint: "સરનામું માત્ર લખાણ સ્વરૂપે.",
      lbl_photo: "૩ સમસ્યાનો ફોટો",
      lbl_deposit: "૪ ડિપોઝિટ",
      deposit_rules: "જો સમસ્યા વાસ્તવિક હશે તો ડિપોઝિટ પરત મળશે.<br>માત્ર ખોટી ફરિયાદમાં જ જપ્ત થશે.",
      lbl_sending: "તમે મોકલી રહ્યા છો",
      btn_submit: "ફરિયાદ સબમિટ કરો",
      submit_hint: "સબમિટ કર્યા પછી તમને GJ-AMC-2026-18470 મળશે<br>અને ટ્રેક ખુલશે.",
      track_heading: "ફરિયાદ ટ્રેક કરો",
      lbl_complaint_id: "ફરિયાદ આઈડી",
      btn_track: "ટ્રેક કરો",
      btn_view_complaint: "ફરિયાદ જુઓ",
      lbl_your_complaint: "તમારી ફરિયાદ",
      lbl_watch_id: "આ આઈડી સાચવો",
      watch_note: "આ નંબર સાચવો. ગમે ત્યારે આ જ ફરિયાદ ખોલવા માટે વાપરો.",
      help_heading: "મદદ",
      help_subheading: "ફરિયાદ કેવી રીતે કરવી, કેવી રીતે ટ્રેક કરવી અથવા ₹50 રિફંડ વિશે પૂછો.",
      lang_hint: "ગુજરાતી ભાષા સક્રિય છે."
    },
    hi: {
      report_heading: "शिकायत दर्ज करें",
      report_subheading: "सभी विवरण इसी एक पेज पर रहेंगे।",
      lbl_cat: "1 शिकायत का प्रकार",
      lbl_address: "2 पता",
      address_hint: "पता केवल टेक्स्ट में दर्ज करें।",
      lbl_photo: "3 समस्या का फोटो",
      lbl_deposit: "4 सुरक्षा जमा",
      deposit_rules: "समस्या वास्तविक होने पर जमा राशि वापस होगी।<br>केवल झूठी शिकायत पर जब्त होगी।",
      lbl_sending: "आप भेज रहे हैं",
      btn_submit: "शिकायत सबमिट करें",
      submit_hint: "सबमिट करने के बाद आपको GJ-AMC-2026-18470 मिलेगा<br>और ट्रैक खुलेगा।",
      track_heading: "शिकायत ट्रैक करें",
      lbl_complaint_id: "शिकायत आईडी",
      btn_track: "ट्रैक करें",
      btn_view_complaint: "शिकायत देखें",
      lbl_your_complaint: "आपकी शिकायत",
      lbl_watch_id: "यह आईडी याद रखें",
      watch_note: "यह नंबर सुरक्षित रखें। किसी भी समय यही शिकायत खोलने के लिए उपयोग करें।",
      help_heading: "सहायता",
      help_subheading: "शिकायत कैसे दर्ज करें, कैसे ट्रैक करें या ₹50 रिफंड के बारे में पूछें।",
      lang_hint: "हिन्दी भाषा सक्रिय है।"
    }
  };

  const t = translations[lang] || translations.en;

  const setHtml = (id, html) => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = html;
  };
  const setText = (id, txt) => {
    const el = document.getElementById(id);
    if (el) el.textContent = txt;
  };

  setText('slide-report-heading', t.report_heading);
  setText('slide-report-subheading', t.report_subheading);
  setText('slide-lbl-cat', t.lbl_cat);
  setText('slide-lbl-address', t.lbl_address);
  setText('slide-address-hint', t.address_hint);
  setText('slide-lbl-photo', t.lbl_photo);
  setText('slide-lbl-deposit', t.lbl_deposit);
  setHtml('slide-deposit-rules', t.deposit_rules);
  setText('slide-lbl-sending', t.lbl_sending);
  setText('btn-slide-submit', t.btn_submit);
  setHtml('slide-submit-subnote-text', t.submit_hint);
  setText('slide-track-heading', t.track_heading);
  setText('slide-lbl-complaint-id', t.lbl_complaint_id);
  setText('btn-track-action', t.btn_track);
  setText('btn-view-complaint', t.btn_view_complaint);
  setText('slide-lbl-your-complaint', t.lbl_your_complaint);
  setText('slide-lbl-watch-id', t.lbl_watch_id);
  setText('slide-watch-note-text', t.watch_note);
  setText('slide-help-heading', t.help_heading);
  setText('slide-help-subheading', t.help_subheading);
  setText('slide-lang-hint', t.lang_hint);

  // Update sidebar nav buttons
  const navReport = document.getElementById('btn-tab-report');
  const navTrack = document.getElementById('btn-tab-track');
  const navHelp = document.getElementById('btn-tab-help');
  if (navReport) navReport.textContent = (lang === 'gu') ? 'નવી ફરિયાદ' : (lang === 'hi') ? 'शिकायत दर्ज' : 'Report issue';
  if (navTrack) navTrack.textContent = (lang === 'gu') ? 'ફરિયાદ ટ્રેક' : (lang === 'hi') ? 'शिकायत ट्रैक' : 'Track issue';
  if (navHelp) navHelp.textContent = (lang === 'gu') ? 'મદદ' : (lang === 'hi') ? 'सहायता' : 'Help';
}

// Language Controller
window.setAppLanguage = function(lang = 'en', closeModal = false) {
  if (!I18N_DATA[lang]) lang = 'en';
  appState.language = lang;
  localStorage.setItem('civica_lang', lang);

  // Update button active state across all language switch groups
  document.querySelectorAll('.lang-btn').forEach(btn => {
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Apply translations to all data-i18n elements
  const dict = I18N_DATA[lang] || I18N_DATA.en;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });

  // Apply translations to placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key]) {
      el.placeholder = dict[key];
    }
  });

  // Update floating AI button label & popup texts
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

  // Update slide UI with language
  updateSlideLanguageUI(lang);

  // Re-render active ticket and wallet with selected language
  renderDesktopPortal();
  renderCivicWallet();

  if (closeModal) {
    const langModal = document.getElementById('language-select-modal');
    if (langModal) langModal.style.display = 'none';
  }
};

// DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  initMasterState();
  initClock();

  // Set city dropdown
  const citySelect = document.getElementById('global-city-select');
  if (citySelect) citySelect.value = appState.activeCityId;

  // Render Officer Interface
  renderOfficerDashboard();
  renderOfficerInbox(appState.inboxFilter);
  renderOfficerTakeAction(appState.selectedOfficerTicketId);
  renderOfficerNotify(appState.selectedOfficerTicketId);

  // Render Citizen Interfaces
  renderDesktopPortal();
  renderMobileApp();
  renderCivicWallet();

  // Initialize and apply chosen language
  setAppLanguage(appState.language, false);

  // If first visit without explicit language chosen, prompt language modal
  if (!localStorage.getItem('civica_lang')) {
    const langModal = document.getElementById('language-select-modal');
    if (langModal) langModal.style.display = 'flex';
  }

  // Check for 1-Click Demo Login URL parameters (?demo=citizen or ?demo=officer)
  const urlParams = new URLSearchParams(window.location.search);
  const demoParam = urlParams.get('demo');
  if (demoParam) {
    window.loginAsDemo(demoParam);
    if (window.history && window.history.replaceState) {
      window.history.replaceState({}, document.title, window.location.pathname);
    }
    return;
  }

  // Default view is Landing Page on load (as requested)
  returnToLandingPage();
  updateSessionUI();

  // Modal overlay click outside to close
  const authOverlay = document.getElementById('auth-modal-overlay');
  if (authOverlay) {
    authOverlay.addEventListener('click', (e) => {
      if (e.target === authOverlay) closeLoginModal();
    });
  }

  const galleryModal = document.getElementById('gallery-lightbox-modal');
  if (galleryModal) {
    galleryModal.addEventListener('click', (e) => {
      if (e.target === galleryModal) closeGalleryLightbox();
    });
  }

  // Escape key to close modals
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeLoginModal();
      if (window.closeGalleryLightbox) window.closeGalleryLightbox();
      const langModal = document.getElementById('language-select-modal');
      if (langModal) langModal.style.display = 'none';
      if (window.closeEscrowModal) window.closeEscrowModal();
      if (window.closeWalletTopupModal) window.closeWalletTopupModal();
      if (window.closeContactModal) window.closeContactModal();
      if (window.closeAddPhotoModal) window.closeAddPhotoModal();
      if (window.closeAskAMCModal) window.closeAskAMCModal();
    }
  });
});

/* ==========================================================================
   NAVIGATION & AUTHENTICATION CONTROLLER (LANDING -> LOGIN -> DASHBOARD)
   ========================================================================== */

/**
 * 1. Return / Show Landing Page (Default View on localhost:5000)
 */
window.returnToLandingPage = function() {
  appState.currentView = 'landing';
  
  const landingView = document.getElementById('view-landing');
  const dashContainer = document.getElementById('view-dashboards-container');
  
  if (landingView) {
    landingView.style.display = 'block';
    landingView.classList.add('active-view');
  }
  if (dashContainer) {
    dashContainer.style.display = 'none';
  }
  
  closeLoginModal();
  updateSessionUI();
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

/**
 * 2. Open Authentication Modal / Dialog
 * @param {'citizen'|'admin'} initialRole
 */
window.openLoginModal = function(initialRole = 'citizen') {
  const overlay = document.getElementById('auth-modal-overlay');
  if (overlay) {
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  }
  switchAuthRole(initialRole);
};

/**
 * Close Authentication Modal
 */
window.closeLoginModal = function() {
  const overlay = document.getElementById('auth-modal-overlay');
  if (overlay) {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }
};

/**
 * Switch Tab inside Login Modal between Citizen and Municipal Officer
 * @param {'citizen'|'admin'} role
 */
window.switchAuthRole = function(role) {
  const citizenTab = document.getElementById('tab-role-citizen');
  const adminTab = document.getElementById('tab-role-admin');
  const citizenForm = document.getElementById('auth-form-citizen');
  const adminForm = document.getElementById('auth-form-admin');

  if (role === 'admin') {
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

/**
 * 3. Citizen Google / Gmail SSO Login
 */
window.loginWithGoogle = function() {
  // Simulate Google Account Auth
  appState.currentUser = {
    role: 'citizen',
    name: 'પ્રિયા પટેલ (Priya Patel)',
    email: 'priya.patel@gmail.com',
    avatar: 'G',
    phone: '98250 84920',
    zone: 'West Zone · Ward 7'
  };
  saveMasterState();

  closeLoginModal();
  switchDashboardMode('citizen-desktop');
};

/**
 * 1-Click Instant Demo Login for Evaluators & Users
 * Directly authenticates and routes to active dashboard
 * @param {'citizen'|'officer'} role
 */
window.loginAsDemo = function(role = 'citizen') {
  if (role === 'officer' || role === 'admin') {
    appState.currentUser = {
      role: 'officer',
      name: 'R. Patel · Municipal Officer',
      email: 'officer.amc@gujarat.gov.in',
      avatar: 'RP',
      cityId: 'AMC'
    };
    saveMasterState();
    closeLoginModal();

    if (window.location.pathname.includes('rules-and-contact.html')) {
      window.location.href = 'index.html?demo=officer';
      return;
    }
    switchDashboardMode('officer');
  } else {
    appState.currentUser = {
      role: 'citizen',
      name: 'પ્રિયા પટેલ (Priya Patel)',
      email: 'demo.citizen@civica.gujarat.in',
      avatar: 'P',
      phone: '98250 84920',
      zone: 'West Zone · Ward 7'
    };
    saveMasterState();
    closeLoginModal();

    if (window.location.pathname.includes('rules-and-contact.html')) {
      window.location.href = 'index.html?demo=citizen';
      return;
    }
    switchDashboardMode('citizen-desktop');
  }
};

/**
 * Auto-fill demo credentials in the login forms
 * @param {'citizen'|'officer'} role
 */
window.fillDemoCredentials = function(role = 'citizen') {
  if (role === 'officer' || role === 'admin') {
    const citySelect = document.getElementById('admin-city-select');
    const emailInput = document.getElementById('admin-email');
    const tokenInput = document.getElementById('admin-token');
    if (citySelect) citySelect.value = 'AMC';
    if (emailInput) emailInput.value = 'officer@amc.gujarat.gov.in';
    if (tokenInput) tokenInput.value = '2026';
  } else {
    const emailInput = document.getElementById('citizen-email');
    const passInput = document.getElementById('citizen-pass');
    if (emailInput) emailInput.value = 'demo.citizen@civica.gujarat.in';
    if (passInput) passInput.value = 'civica2026';
  }
};

/**
 * Citizen Email / Phone Login Submit
 */
window.handleCitizenFormLogin = function(e) {
  if (e) e.preventDefault();
  const emailInput = document.getElementById('citizen-email');
  const passInput = document.getElementById('citizen-pass');
  const emailVal = emailInput?.value.trim();
  const passVal = passInput?.value.trim();

  if (!emailVal || !passVal) {
    alert('Please enter your Resident Email/Phone and Password to log in.');
    return;
  }
  const displayName = emailVal.split('@')[0].replace('.', ' ');

  appState.currentUser = {
    role: 'citizen',
    name: `${displayName} (Resident)`,
    email: emailVal,
    avatar: displayName.charAt(0).toUpperCase() || 'C',
    phone: '98250 84920',
    zone: 'West Zone · Ward 7'
  };
  saveMasterState();

  closeLoginModal();
  switchDashboardMode('citizen-desktop');
};

/**
 * Municipal Officer Login Submit
 */
window.handleAdminFormLogin = function(e) {
  if (e) e.preventDefault();
  const citySelect = document.getElementById('admin-city-select');
  const emailInput = document.getElementById('admin-email');
  const tokenInput = document.getElementById('admin-token');
  const emailVal = emailInput?.value.trim();
  const tokenVal = tokenInput?.value.trim();

  if (!emailVal || !tokenVal) {
    alert('Please enter your Officer Gov Email and Security PIN to authenticate.');
    return;
  }

  const selectedCityId = citySelect?.value || 'AMC';

  // Switch to selected municipal corporation
  if (selectedCityId !== appState.activeCityId) {
    handleCitySwitch(selectedCityId);
  }

  appState.currentUser = {
    role: 'officer',
    name: 'R. Patel · Municipal Officer',
    email: emailVal,
    avatar: 'RP',
    cityId: selectedCityId
  };
  saveMasterState();

  closeLoginModal();
  switchDashboardMode('officer');
};

/**
 * 4. Switch Between Dashboard Modes (Citizen Desktop, Municipal Officer)
 * Enforces authentication: must log in first!
 * @param {'citizen-desktop'|'officer'} mode
 */
window.switchDashboardMode = function(mode) {
  // If user is not logged in, ask for login first!
  if (!appState.currentUser) {
    openLoginModal(mode === 'officer' ? 'admin' : 'citizen');
    return;
  }

  appState.currentView = mode;

  const landingView = document.getElementById('view-landing');
  const dashContainer = document.getElementById('view-dashboards-container');

  // Hide Landing, Show Dashboards
  if (landingView) {
    landingView.style.display = 'none';
    landingView.classList.remove('active-view');
  }
  if (dashContainer) {
    dashContainer.style.display = 'block';
  }

  const subviews = {
    'citizen-desktop': document.getElementById('subview-citizen-desktop'),
    'officer': document.getElementById('subview-officer')
  };

  // Route to the appropriate subview
  if (mode === 'officer') {
    if (subviews['officer']) {
      subviews['officer'].style.display = 'block';
      subviews['officer'].classList.add('active');
    }
    if (subviews['citizen-desktop']) {
      subviews['citizen-desktop'].style.display = 'none';
      subviews['citizen-desktop'].classList.remove('active');
    }
    renderOfficerDashboard();
  } else {
    // Default to Citizen Desktop Web Portal
    if (subviews['citizen-desktop']) {
      subviews['citizen-desktop'].style.display = 'block';
      subviews['citizen-desktop'].classList.add('active');
    }
    if (subviews['officer']) {
      subviews['officer'].style.display = 'none';
      subviews['officer'].classList.remove('active');
    }
    renderDesktopPortal();
  }

  updateSessionUI();
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

/**
 * Switch Citizen Desktop Web Portal Tabs (Slide Design)
 * Allowed citizen workflows: 'report' | 'track' | 'help'
 */
window.switchDesktopTab = function(tabName) {
  if (!['report', 'track', 'help', 'wallet', 'wardmap'].includes(tabName)) {
    tabName = 'report';
  }
  appState.activeDesktopTab = tabName;

  const tabs = ['report', 'track', 'help'];
  tabs.forEach(t => {
    const panel = document.getElementById(`dt-tab-${t}`);
    const btn = document.getElementById(`btn-tab-${t}`);
    if (panel) panel.style.display = (t === tabName) ? 'block' : 'none';
    if (btn) {
      if (t === tabName) btn.classList.add('active');
      else btn.classList.remove('active');
    }
  });

  const urlBar = document.getElementById('desktop-url-bar');
  if (urlBar) {
    urlBar.textContent = `civica.gujarat.in / portal / ${tabName}`;
  }

  if (tabName === 'report') {
    updateSlideSendingSummary();
    const wBal = document.getElementById('dt-report-wallet-val');
    if (wBal) wBal.textContent = Number(appState.citizenWallet?.balance || 150).toFixed(0);
  } else if (tabName === 'track') {
    renderDesktopPortal();
  }
};

window.handleSlideCategoryChange = function(catVal) {
  appState.selectedIssueType = catVal;
  const customRow = document.getElementById('slide-custom-cat-row');
  if (customRow) {
    customRow.style.display = (catVal === 'other') ? 'block' : 'none';
  }
  updateSlideSendingSummary();
};

window.updateSlideSendingSummary = function() {
  const catSelect = document.getElementById('slide-report-category-select');
  const customInput = document.getElementById('slide-custom-cat-input');
  const locInput = document.getElementById('dt-location-input');
  const summaryEl = document.getElementById('slide-sending-summary-text');
  if (!summaryEl) return;

  let issueName = "Damaged road";
  if (catSelect) {
    if (catSelect.value === 'pothole') issueName = "Damaged road";
    else if (catSelect.value === 'streetlight') issueName = "Streetlight out";
    else if (catSelect.value === 'garbage') issueName = "Garbage overflow";
    else if (catSelect.value === 'waterlogging') issueName = "Waterlogging";
    else if (catSelect.value === 'water') issueName = "Water pipeline leak";
    else if (catSelect.value === 'brts') issueName = "BRTS transit issue";
    else if (catSelect.value === 'other') {
      issueName = customInput?.value.trim() || "Civic issue";
    }
  }

  let address = locInput?.value.trim() || "Ashram Road";
  if (address.length > 28) {
    address = address.substring(0, 28) + '...';
  }

  summaryEl.textContent = `${issueName} · ${address} · 2 photos · ₹50`;
};

window.setSlidePayMethod = function(method) {
  appState.slidePayMethod = method;
  const btnWallet = document.getElementById('slide-pay-wallet');
  const btnUpi = document.getElementById('slide-pay-upi');
  if (btnWallet && btnUpi) {
    if (method === 'wallet') {
      btnWallet.classList.add('active');
      btnUpi.classList.remove('active');
    } else {
      btnUpi.classList.add('active');
      btnWallet.classList.remove('active');
    }
  }
};

window.handleSlideFileInput = function(input) {
  if (input.files && input.files[0]) {
    const file = input.files[0];
    const reader = new FileReader();
    reader.onload = function(e) {
      const img2 = document.getElementById('slide-img-preview-2');
      if (img2) img2.src = e.target.result;
      if (typeof showCivicaToast === 'function') {
        showCivicaToast(`📷 Attached photo: ${file.name}`);
      }
    };
    reader.readAsDataURL(file);
  }
};

window.openSlideAiOrFloating = function() {
  switchDesktopTab('help');
  // Also can trigger floating AI if desired
};

window.askSlideAiDirect = function(question) {
  const input = document.getElementById('slide-help-input');
  if (input) input.value = question;
  handleSlideHelpSubmit();
};

window.handleSlideHelpSubmit = function(e) {
  if (e) e.preventDefault();
  const input = document.getElementById('slide-help-input');
  const q = input?.value.trim();
  if (!q) return;

  const stream = document.getElementById('slide-help-chat-stream');
  if (!stream) return;

  // Append user message
  const userBubble = document.createElement('div');
  userBubble.className = 'slide-chat-bubble';
  userBubble.style.margin = '10px 0';
  userBubble.style.textAlign = 'right';
  userBubble.innerHTML = `<span style="background:#ba7648; color:#fff; padding:8px 14px; border-radius:14px; display:inline-block; font-size:0.9rem;">${q}</span>`;
  stream.appendChild(userBubble);

  input.value = '';
  stream.scrollTop = stream.scrollHeight;

  setTimeout(() => {
    let reply = '';
    const qLower = q.toLowerCase();
    if (qLower.includes('damaged') || qLower.includes('road') || qLower.includes('pothole') || qLower.includes('ખાડા') || qLower.includes('गड्ढे')) {
      reply = `To report a damaged road, select <strong>"Pothole / damaged road"</strong> under step 1, provide the street landmark in step 2, and press <strong>SUBMIT COMPLAINT</strong> with ₹50 refundable security deposit.`;
    } else if (qLower.includes('18470') || qLower.includes('complaint id') || qLower.includes('આઈડી') || qLower.includes('आईडी')) {
      reply = `Complaint <strong>GJ-AMC-2026-18470</strong> is currently <strong>Assigned to Crew 08</strong> for night resurfacing on Ashram Road. Estimated finish: <strong>19 September, 8:00 pm</strong>.`;
    } else if (qLower.includes('50') || qLower.includes('refund') || qLower.includes('back') || qLower.includes('ડિપોઝિટ') || qLower.includes('રિફંડ')) {
      reply = `Your ₹50 deposit is held in municipal anti-spam escrow. As soon as the AMC supervisor verifies the genuine road issue in person, <strong>100% (₹50) is refunded instantly</strong> to your Civic Wallet.`;
    } else {
      reply = `Thank you for your question. I am Civica AI. Your complaint <strong>GJ-AMC-2026-18470</strong> is being tracked live with AMC Road Project Dept. You can also view the stages in Track issue tab.`;
    }

    const botDiv = document.createElement('div');
    botDiv.className = 'slide-chat-bubble bot-bubble';
    botDiv.style.marginTop = '12px';
    botDiv.innerHTML = `
      <div class="slide-chat-bot-greeting">Civica AI</div>
      <div class="slide-chat-bot-body">${reply}</div>
    `;
    stream.appendChild(botDiv);
    stream.scrollTop = stream.scrollHeight;
  }, 400);
};

/**
 * Handle Logout
 */
window.handleLogout = function() {
  appState.currentUser = null;
  localStorage.removeItem('civica_user');
  returnToLandingPage();
  updateSessionUI();
  if (typeof showCivicaToast === 'function') {
    showCivicaToast('👋 Signed out successfully.');
  }
};

/**
 * Synchronize User Avatar & Session Pills across Landing & Dashboard Top Bar
 */
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
      dashSessionUserText.textContent = `${appState.currentUser.name} (${appState.currentUser.role === 'officer' ? 'Officer' : 'Citizen'})`;
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

// Backward compatibility alias
window.switchMainView = function(viewName) {
  if (viewName === 'landing') returnToLandingPage();
  else if (viewName === 'officer-portal') switchDashboardMode('officer');
  else switchDashboardMode('citizen-desktop');
};

window.handleCitySwitch = function(cityId) {
  appState.activeCityId = cityId;
  saveMasterState();

  const cityObj = window.GUJARAT_CIVIC_DATA.cities.find(c => c.id === cityId) || window.GUJARAT_CIVIC_DATA.cities[0];

  const ofWard = document.getElementById('officer-sidebar-ward');
  const ofHeadline = document.getElementById('of-dash-headline');
  const sbWard = document.getElementById('sidebar-ward-label');
  const sbCity = document.getElementById('sidebar-city-label');
  const mbWard = document.getElementById('mb-home-ward');
  const mbUlb = document.getElementById('mb-home-ulb');

  if (ofWard) ofWard.textContent = `${cityObj.name} · ${cityObj.ward}`;
  if (ofHeadline) ofHeadline.textContent = `Today in ${cityObj.ward}, ${cityObj.name}`;
  if (sbWard) sbWard.textContent = cityObj.ward;
  if (sbCity) sbCity.textContent = cityObj.name;
  if (mbWard) mbWard.textContent = `${cityObj.zone} · ${cityObj.ward}`;
  if (mbUlb) mbUlb.textContent = cityObj.name;

  renderOfficerDashboard();
  renderDesktopPortal();
  renderMobileApp();
};

function initClock() {
  const clockEl = document.getElementById('mobile-clock');
  function update() {
    const d = new Date();
    if (clockEl) clockEl.textContent = d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }
  update();
  setInterval(update, 1000);
}

/* ==========================================================================
   VIEW 0: MUNICIPAL OFFICER INTERFACE LOGIC (Pages 1-8)
   ========================================================================== */
window.switchOfficerTab = function(tabKey) {
  appState.activeOfficerTab = tabKey;

  // Sidebar active nav item
  const navItems = document.querySelectorAll('.desktop-sidebar.officer-sidebar .sidebar-nav-item');
  navItems.forEach(n => n.classList.remove('active'));
  const activeBtn = document.getElementById(`of-nav-${tabKey}`);
  if (activeBtn) activeBtn.classList.add('active');

  // Sub-views display
  const subViews = ['dashboard', 'inbox', 'action', 'notify', 'preview', 'reports', 'rules'];
  subViews.forEach(s => {
    const el = document.getElementById(`officer-view-${s}`);
    if (el) el.style.display = (s === tabKey) ? 'block' : 'none';
  });

  // Update browser mockup URL
  const urlBar = document.getElementById('officer-url-bar');
  if (urlBar) {
    urlBar.textContent = `https://civica.gujarat.in / officer / ${tabKey === 'action' ? 'ticket/' + appState.selectedOfficerTicketId.split('-').pop() : tabKey}`;
  }
};

// Page 2: Officer Dashboard
function renderOfficerDashboard() {
  // KPIs
  const kpiOpen = document.getElementById('of-kpi-open');
  const kpiDue = document.getElementById('of-kpi-due');
  const kpiReply = document.getElementById('of-kpi-reply');
  const kpiResolved = document.getElementById('of-kpi-resolved');

  if (kpiOpen) kpiOpen.textContent = appState.officerKPIs.openTickets;
  if (kpiDue) kpiDue.textContent = appState.officerKPIs.dueToday;
  if (kpiReply) kpiReply.textContent = appState.officerKPIs.needCitizenReply;
  if (kpiResolved) kpiResolved.textContent = appState.officerKPIs.resolvedThisWeek;

  // Priority Queue Stack (Page 2)
  const pList = document.getElementById('of-priority-queue-list');
  if (pList) {
    const priorityItems = [
      { id: "GJ-AMC-18492", shortId: "18492", text: "Streetlight · CG Road", status: "in_progress", statusText: "IN PROGRESS", class: "inprogress" },
      { id: "GJ-AMC-18501", shortId: "18501", text: "Waterlogging · Law Garden", status: "new", statusText: "NEW", class: "new" },
      { id: "GJ-AMC-18470", shortId: "18470", text: "Pothole · Ashram Road", status: "assigned", statusText: "ASSIGNED", class: "assigned" },
      { id: "GJ-AMC-18388", shortId: "18388", text: "Garbage · Pol lane 12", status: "need_info", statusText: "NEED INFO", class: "needinfo" }
    ];

    pList.innerHTML = priorityItems.map(item => `
      <div class="priority-item-row" onclick="openOfficerTicket('${item.id}')">
        <div class="priority-id-issue">
          <span class="priority-id">${item.id}</span>
          <span class="priority-place">${item.text}</span>
        </div>
        <span class="priority-status-pill ${item.class}">${item.statusText}</span>
      </div>
    `).join('');
  }

  // Shift Actions Checklist (Page 2)
  const shiftList = document.getElementById('of-shift-actions-list');
  if (shiftList) {
    shiftList.innerHTML = appState.shiftActions.map(action => `
      <div class="shift-check-item ${action.done ? 'done' : ''}" onclick="toggleShiftAction(${action.id})">
        <input type="checkbox" ${action.done ? 'checked' : ''} style="cursor:pointer;">
        <span>· ${action.text}</span>
      </div>
    `).join('');
  }
}

window.toggleShiftAction = function(actionId) {
  const item = appState.shiftActions.find(a => a.id === actionId);
  if (item) {
    item.done = !item.done;
    renderOfficerDashboard();
  }
};

window.refreshOfficerMetrics = function() {
  alert("Live municipal sensor and citizen report feed synchronized with AMC central database.");
  renderOfficerDashboard();
};

// Page 3: Complaint Inbox
function renderOfficerInbox(filterCategory = 'assigned_to_me') {
  appState.inboxFilter = filterCategory;

  // Update filter buttons
  const buttons = document.querySelectorAll('.inbox-filter-btn');
  buttons.forEach(b => {
    if (b.getAttribute('data-filter') === filterCategory) b.classList.add('active');
    else b.classList.remove('active');
  });

  const tbody = document.getElementById('of-inbox-tbody');
  if (!tbody) return;

  const filtered = appState.inboxTickets.filter(t => {
    if (filterCategory === 'all') return true;
    if (filterCategory === 'new') return t.status === 'new';
    if (filterCategory === 'assigned_to_me') return t.filterCategory === 'assigned_to_me' || t.status === 'in_progress' || t.status === 'assigned';
    if (filterCategory === 'monsoon') return t.isMonsoon || t.issue === 'Waterlogging';
    if (filterCategory === 'sla_risk') return t.slaRisk;
    return true;
  });

  tbody.innerHTML = filtered.map(row => {
    const fullTicket = appState.complaints.find(c => c.id === row.fullId || c.id.includes(row.id));
    const depStatus = fullTicket ? fullTicket.depositStatus : 'held';
    const depBadge = depStatus === 'refunded'
      ? '<span class="deposit-status-badge status-refunded" style="font-size:0.68rem;">✅ Refunded</span>'
      : depStatus === 'forfeited'
      ? '<span class="deposit-status-badge status-forfeited" style="font-size:0.68rem;">❌ Forfeited</span>'
      : '<span class="deposit-status-badge status-held" style="font-size:0.68rem;">🛡️ ₹50 Escrow</span>';

    return `
    <tr onclick="openOfficerTicket('${row.fullId}')">
      <td><strong>${row.id}</strong></td>
      <td>${row.citizen}</td>
      <td>${row.issue}</td>
      <td>${row.place}</td>
      <td>${depBadge}</td>
      <td>
        <span class="priority-status-pill ${row.status === 'in_progress' ? 'inprogress' : row.status === 'need_info' ? 'needinfo' : row.status === 'assigned' ? 'assigned' : 'new'}">
          ${row.statusLabel}
        </span>
      </td>
      <td><button class="btn-inline-action">Inspect &rarr;</button></td>
    </tr>
    `;
  }).join('');
}

window.filterOfficerInbox = function(category) {
  switchOfficerTab('inbox');
  renderOfficerInbox(category);
};

window.openOfficerTicket = function(fullTicketId) {
  appState.selectedOfficerTicketId = fullTicketId;
  appState.selectedOfficerTicket = appState.complaints.find(c => c.id === fullTicketId) || appState.complaints[0];

  renderOfficerTakeAction(fullTicketId);
  renderOfficerNotify(fullTicketId);
  switchOfficerTab('action');
};

// Page 4: Take Action
function renderOfficerTakeAction(ticketId) {
  const ticket = appState.complaints.find(c => c.id === ticketId) || appState.complaints[0];
  if (!ticket) return;

  const idEl = document.getElementById('act-ticket-id');
  const titleEl = document.getElementById('act-ticket-title');
  const metaEl = document.getElementById('act-ticket-meta');
  const crewSelect = document.getElementById('act-crew-select');
  const escrowBadge = document.getElementById('officer-escrow-badge');
  const escrowActions = document.getElementById('officer-escrow-actions');

  if (idEl) idEl.textContent = ticket.id;
  if (titleEl) titleEl.textContent = ticket.title;
  if (metaEl) metaEl.textContent = `Citizen ${ticket.citizen || 'K. Shah'} · Ward 7 · Photo attached · SLA ${ticket.slaDate || '20 Sep'}`;
  if (crewSelect && ticket.assignedCrew) crewSelect.value = ticket.assignedCrew;

  // Escrow Status in Officer Inspection
  if (escrowBadge) {
    if (ticket.depositStatus === 'refunded') {
      escrowBadge.className = 'deposit-status-badge status-refunded';
      escrowBadge.innerHTML = '✅ ₹50 Refunded to Citizen';
      if (escrowActions) escrowActions.style.display = 'none';
    } else if (ticket.depositStatus === 'forfeited') {
      escrowBadge.className = 'deposit-status-badge status-forfeited';
      escrowBadge.innerHTML = '❌ ₹50 Forfeited (Spam Flag)';
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
    alert(`The security deposit for ${ticket.id} was already refunded!`);
    return;
  }

  ticket.depositStatus = 'refunded';
  ticket.depositRefundDate = 'Today';
  ticket.note += ` [Officer Inspection: Verified Genuine Issue. ₹50 security deposit refunded to resident's Civic Wallet.]`;

  // Credit ₹50 back to resident wallet
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
  renderOfficerDashboard();
  renderOfficerInbox(appState.inboxFilter);
  renderDesktopPortal();
  renderMobileApp();

  showCivicaToast(`✅ Verified genuine! ₹50 refund credited to resident's Civic Wallet.`);
};

window.officerForfeitDeposit = function() {
  const ticket = appState.complaints.find(c => c.id === appState.selectedOfficerTicketId);
  if (!ticket) return;

  if (ticket.depositStatus === 'forfeited') {
    alert(`Deposit for ${ticket.id} has already been forfeited.`);
    return;
  }

  const confirmForfeit = confirm(`Flag complaint ${ticket.id} as Fake / Prank?\n\nThe ₹50 security deposit will be forfeited to the Municipal Spam Penalty Fund.`);
  if (!confirmForfeit) return;

  ticket.depositStatus = 'forfeited';
  ticket.status = 'closed';
  ticket.note += ` [Officer Inspection: Flagged as Fake/Prank. ₹50 security deposit forfeited to AMC Fund.]`;

  appState.citizenWallet.transactions.unshift({
    id: `TX-${Math.floor(1000 + Math.random() * 9000)}`,
    type: 'forfeited',
    title: `Deposit Forfeited · ${ticket.id} Fake Flag`,
    amount: 50.00,
    date: 'Just now',
    method: 'AMC Penalty Fund',
    status: 'forfeited',
    ticketId: ticket.id
  });

  saveMasterState();
  renderCivicWallet();
  renderOfficerTakeAction(ticket.id);
  renderOfficerDashboard();
  renderOfficerInbox(appState.inboxFilter);
  renderDesktopPortal();
  renderMobileApp();

  showCivicaToast(`❌ Ticket flagged as Fake/Prank. Deposit forfeited to municipal penalty fund.`);
};

window.handleCrewAssignment = function(newCrew) {
  const ticket = appState.complaints.find(c => c.id === appState.selectedOfficerTicketId);
  if (ticket) {
    ticket.assignedCrew = newCrew;
    saveMasterState();
    alert(`Crew updated: ${newCrew} assigned to ${ticket.id}`);
  }
};

window.officerQuickDecide = function(decision) {
  const ticket = appState.complaints.find(c => c.id === appState.selectedOfficerTicketId);
  if (!ticket) return;

  if (decision === 'assign') {
    ticket.status = 'assigned';
    alert(`Assigned to Crew 14. Citizen notified.`);
  } else if (decision === 'in_progress') {
    ticket.status = 'in_progress';
    ticket.steps[2].completed = true;
    ticket.steps[2].active = true;
    alert(`Ticket marked IN PROGRESS. Updated on citizen tracking screen.`);
  } else if (decision === 'need_info') {
    ticket.status = 'need_info';
    ticket.note = 'AMC Ward 7 requested: Please upload clear night photo showing pole plate.';
    alert(`Requested info from citizen. WhatsApp message sent.`);
  } else if (decision === 'resolved') {
    ticket.status = 'resolved';
    ticket.steps[3].completed = true;
    ticket.steps[3].active = true;
    ticket.note = 'Streetlight repair completed and tested. Verified by AMC supervisor. — R. Patel';
    appState.officerKPIs.resolvedThisWeek++;
    appState.officerKPIs.openTickets--;

    // Automatic deposit refund on resolution of genuine ticket
    if (ticket.depositStatus === 'held') {
      officerVerifyAndRefundTicket();
    }

    alert(`Ticket RESOLVED. Official report published to resident.`);
  }

  saveMasterState();
  renderOfficerDashboard();
  renderOfficerTakeAction(ticket.id);
  renderDesktopPortal();
  renderMobileApp();
};

window.quickRequestInfo = function() {
  switchOfficerTab('notify');
  applyReadyTemplate('need_photo');
};

window.quickMarkDuplicate = function() {
  alert(`Ticket ${appState.selectedOfficerTicketId} merged with master pole ticket #LT-44 (CG Road). Duplicate records consolidated.`);
};

window.quickEscalate = function() {
  alert(`Alert flagged: Sent priority escalation to Zonal Officer (West Zone) for SLA preservation.`);
};

// Page 5: Report to Citizen (Notify)
function renderOfficerNotify(ticketId) {
  const ticket = appState.complaints.find(c => c.id === ticketId) || appState.complaints[0];
  if (!ticket) return;

  const recipientTitle = document.getElementById('notify-recipient-title');
  const smsTarget = document.getElementById('label-sms-target');

  if (recipientTitle) recipientTitle.textContent = `Message to ${ticket.citizen || 'K. Shah'}`;
  if (smsTarget) smsTarget.textContent = `SMS ${ticket.citizenPhone || '98765 XXXXX'}`;

  applyReadyTemplate(appState.activeTemplateKey);
}

window.switchNotifyLanguage = function(lang) {
  appState.notifyLang = lang;

  const pills = ['gu', 'en', 'both'];
  pills.forEach(p => {
    const el = document.getElementById(`pill-lang-${p}`);
    if (el) {
      if (p === lang) el.classList.add('active');
      else el.classList.remove('active');
    }
  });

  applyReadyTemplate(appState.activeTemplateKey);
};

window.applyReadyTemplate = function(templateKey) {
  appState.activeTemplateKey = templateKey;

  // Active class on ready report items
  const items = document.querySelectorAll('.ready-template-item');
  items.forEach(i => i.classList.remove('active-template'));

  const templateData = window.GUJARAT_CIVIC_DATA.reportTemplates[templateKey] || window.GUJARAT_CIVIC_DATA.reportTemplates.parts_ordered;
  const textarea = document.getElementById('notify-msg-textarea');
  if (!textarea) return;

  const ticket = appState.complaints.find(c => c.id === appState.selectedOfficerTicketId) || appState.complaints[0];

  let raw = "";
  if (appState.notifyLang === 'gu') {
    raw = templateData.gu;
  } else if (appState.notifyLang === 'en') {
    raw = templateData.en;
  } else {
    raw = `${templateData.gu}\n\n---\n\n${templateData.en}`;
  }

  // Interpolate placeholders
  const processed = raw
    .replace(/{citizen}/g, ticket.citizen || "કિયા શાહ")
    .replace(/{id}/g, ticket.id)
    .replace(/{issue}/g, ticket.categoryGu || "સ્ટ્રીટલાઇટ")
    .replace(/{officer}/g, "R. Patel");

  textarea.value = processed;
};

window.sendOfficialOfficerUpdate = function() {
  const textarea = document.getElementById('notify-msg-textarea');
  const msg = textarea ? textarea.value.trim() : "";
  if (!msg) return;

  const ticket = appState.complaints.find(c => c.id === appState.selectedOfficerTicketId);
  if (ticket) {
    ticket.note = msg;
    saveMasterState();

    // Update Page 6 Preview Elements
    const auditSent = document.getElementById('audit-officer-sent');
    const auditCit = document.getElementById('audit-citizen-notified');
    const notePreview = document.getElementById('live-received-note-text');

    if (auditSent) auditSent.textContent = `R. Patel sent template: "${appState.activeTemplateKey}", Channels: WhatsApp + SMS + App.`;
    if (auditCit) auditCit.textContent = `${ticket.citizen || 'K. Shah'} received update on ${ticket.id}.`;
    if (notePreview) notePreview.textContent = msg;

    // Refresh citizen portals
    renderDesktopPortal();
    renderMobileApp();

    alert(`સત્તાવાર મેસેજ મોકલાયો!\nOfficial update dispatched to resident via App Inbox, WhatsApp, and SMS!`);
    switchOfficerTab('preview');
  }
};

window.simulateResidentReply = function() {
  alert(`Resident replied: "Gate is open after 6 pm. Ground floor electrical junction box is marked." Note logged on ticket.`);
};

/* ==========================================================================
   CITIZEN DESKTOP & MOBILE INTEGRATION
   ========================================================================== */
function renderDesktopPortal() {
  const currentTicket = appState.complaints.find(c => c.id === appState.selectedOfficerTicketId) || 
                        appState.complaints.find(c => c.id === 'GJ-AMC-2026-18470') || 
                        appState.complaints[0];
  if (!currentTicket) return;

  const lang = appState.language || 'en';

  const titleEl = document.getElementById('dt-ticket-title');
  const locEl = document.getElementById('dt-ticket-loc');
  const agencyEl = document.getElementById('dt-ticket-agency');
  const metaEl = document.getElementById('dt-ticket-meta');
  const inputEl = document.getElementById('desktop-track-input');
  const watchIdEl = document.getElementById('dt-watch-id-display');

  // Title: "Pothole / damaged road" (Slide 3)
  if (titleEl) {
    if (currentTicket.id.includes('18470')) {
      titleEl.textContent = (lang === 'gu') ? 'ખાડા / તૂટેલો રસ્તો' : (lang === 'hi') ? 'गड्ढे / क्षतिग्रस्त सड़क' : 'Pothole / damaged road';
    } else {
      titleEl.textContent = currentTicket.title;
    }
  }

  // Location: "Ashram Road, near Vadaj Circle"
  if (locEl) locEl.textContent = currentTicket.location || 'Ashram Road, near Vadaj Circle';

  // Agency: "AMC Road Project · Ward 7"
  if (agencyEl) agencyEl.textContent = currentTicket.agency || 'AMC Road Project · Ward 7';

  // Meta line: "Filed yesterday 09:30 · Status: Assigned"
  if (metaEl) {
    const filed = currentTicket.filedDate || 'yesterday 09:30';
    let statusText = 'Assigned';
    if (currentTicket.status === 'assigned') {
      statusText = (lang === 'gu') ? 'સોંપાયેલ' : (lang === 'hi') ? 'सौंपा गया' : 'Assigned';
    } else if (currentTicket.status === 'in_progress') {
      statusText = (lang === 'gu') ? 'કાર્ય પ્રગતિમાં' : (lang === 'hi') ? 'प्रगति पर' : 'In progress';
    } else if (currentTicket.status === 'resolved') {
      statusText = (lang === 'gu') ? 'ઉકેલાયેલ' : (lang === 'hi') ? 'समाधान' : 'Resolved';
    }

    if (lang === 'gu') {
      metaEl.textContent = `નોંધાયેલ: ${filed} · સ્થિતિ: ${statusText}`;
    } else if (lang === 'hi') {
      metaEl.textContent = `दर्ज: ${filed} · स्थिति: ${statusText}`;
    } else {
      metaEl.textContent = `Filed ${filed} · Status: ${statusText}`;
    }
  }

  // Search input
  if (inputEl) inputEl.value = currentTicket.id;

  // Watch this ID block (e.g. GJ-AMC-<br>2026-18470)
  if (watchIdEl) {
    const parts = currentTicket.id.split('-');
    if (parts.length >= 4) {
      watchIdEl.innerHTML = `${parts[0]}-${parts[1]}-<br>${parts[2]}-${parts[3]}`;
    } else {
      watchIdEl.textContent = currentTicket.id;
    }
  }

  // Update 4-Stage Horizontal Timeline (Slide 3)
  updateSlideTimelineNodes(currentTicket, lang);
}

function updateSlideTimelineNodes(ticket, lang) {
  const steps = (ticket && ticket.steps) ? ticket.steps : [
    { label: "Received", labelGu: "પ્રાપ્ત", date: "Yesterday 09:30", completed: true },
    { label: "Assigned", labelGu: "સોંપાયેલ", date: "Yesterday 14:00 · Crew 08", completed: true, active: true },
    { label: "In progress", labelGu: "કાર્ય પ્રગતિમાં", date: "Scheduled tonight", completed: false },
    { label: "Resolved", labelGu: "ઉકેલાયેલ", date: "ETA 19 Sep, 8 pm", completed: false }
  ];

  for (let i = 1; i <= 4; i++) {
    const nodeEl = document.getElementById(`slide-node-${i}`);
    const titleEl = document.getElementById(`slide-node-title-${i}`);
    const subEl = document.getElementById(`slide-node-sub-${i}`);
    const step = steps[i - 1];

    if (nodeEl && step) {
      nodeEl.className = 'slide-timeline-node';
      const ind = nodeEl.querySelector('.slide-node-indicator');
      
      if (step.completed && !step.active) {
        nodeEl.classList.add('completed');
        if (ind) {
          ind.className = 'slide-node-indicator check-icon';
          ind.textContent = '✓';
        }
      } else if (step.active) {
        nodeEl.classList.add('active');
        if (ind) {
          ind.className = 'slide-node-indicator dot-icon';
          ind.textContent = '●';
        }
      } else {
        if (ind) {
          ind.className = 'slide-node-indicator hollow-icon';
          ind.textContent = '';
        }
      }

      if (titleEl) {
        if (lang === 'gu') {
          titleEl.textContent = step.labelGu || step.label;
        } else if (lang === 'hi') {
          const hiMap = { "Received": "प्राप्त", "Assigned": "सौंपा गया", "In progress": "प्रगति पर", "Resolved": "समाधान" };
          titleEl.textContent = hiMap[step.label] || step.label;
        } else {
          titleEl.textContent = step.label;
        }
      }

      if (subEl) {
        subEl.textContent = step.date;
      }
    }
  }
}

window.selectDesktopTicket = function(ticketId) {
  appState.selectedOfficerTicketId = ticketId;
  appState.selectedOfficerTicket = appState.complaints.find(c => c.id === ticketId);
  renderDesktopPortal();
  renderMobileApp();
  renderOfficerTakeAction(ticketId);
  renderOfficerNotify(ticketId);
};

window.handleDesktopTrackLookup = function() {
  const val = document.getElementById('desktop-track-input')?.value.trim();
  const lang = appState.language || 'gu';
  if (!val) {
    const emptyMsg = lang === 'gu'
      ? 'કૃપા કરીને ફરિયાદ આઈડી દાખલ કરો (દા.ત. 18492, 18501, 18470).'
      : lang === 'hi'
      ? 'कृपया शिकायत आईडी दर्ज करें (उदा. 18492, 18501, 18470)।'
      : 'Please enter a Complaint ID (e.g. 18492, 18501, 18470).';
    alert(emptyMsg);
    return;
  }

  const found = appState.complaints.find(c => 
    c.id.toLowerCase() === val.toLowerCase() || 
    c.id.endsWith(val) || 
    c.id.includes(val) ||
    (c.shortId && c.shortId === val)
  );

  if (found) {
    selectDesktopTicket(found.id);
  } else {
    const notFoundMsg = lang === 'gu'
      ? `ફરિયાદ આઈડી "${val}" મળી નથી. કૃપા કરીને ચકાસો અથવા 18492 દાખલ કરો.`
      : lang === 'hi'
      ? `शिकायत आईडी "${val}" नहीं मिली। कृपया जांचें या 18492 दर्ज करें।`
      : `Complaint ID "${val}" not found. Please verify or try 18492.`;
    alert(notFoundMsg);
  }
};

window.reopenTicket = function() {
  const current = appState.complaints.find(c => c.id === appState.selectedOfficerTicketId);
  if (!current) return;
  current.status = 'in_progress';
  current.note = 'Reopened by citizen: Problem recurred. Forwarded to Officer R. Patel.';
  saveMasterState();
  renderDesktopPortal();
  renderMobileApp();
  alert('Complaint reopened and routed back to AMC supervisor.');
};

// Mobile App Functions
function renderMobileApp() {
  renderMobileHomeScreen();
  renderMobileTrackScreen();
  renderMobileMyTicketsScreen();
  renderMobileTransitScreen();
}

function renderMobileHomeScreen() {
  const nearList = document.getElementById('mb-near-you-list');
  if (!nearList) return;

  nearList.innerHTML = appState.complaints.slice(0, 3).map(c => `
    <div class="near-issue-card" onclick="openTicketInMobile('${c.id}')" style="cursor:pointer;">
      <div>
        <div class="near-issue-title">${c.categoryName}</div>
        <div class="near-issue-meta">${c.location} · ${c.distance || '120 m'}</div>
      </div>
      <span class="near-status-badge ${c.type === 'streetlight' ? 'open' : c.type === 'pothole' ? 'assigned' : 'monsoon'}">
        ${c.type === 'streetlight' ? 'Open' : c.type === 'pothole' ? 'Assigned' : 'Monsoon'}
      </span>
    </div>
  `).join('');
}

function renderMobileTrackScreen() {
  const current = appState.complaints.find(c => c.id === appState.selectedOfficerTicketId) || appState.complaints[0];
  if (!current) return;

  const idTag = document.getElementById('mb-ticket-id-tag');
  const statusBadge = document.getElementById('mb-status-badge');
  const title = document.getElementById('mb-ticket-title');
  const subloc = document.getElementById('mb-ticket-subloc');
  const timeline = document.getElementById('mb-gujarati-timeline');
  const noteText = document.getElementById('mb-ticket-note-text');
  const idInput = document.getElementById('mb-track-id-input');

  if (idTag) idTag.textContent = current.id;
  if (idInput) idInput.value = current.id;
  if (title) title.textContent = current.title.split('·')[0];
  if (subloc) subloc.textContent = `${current.location} • ${current.agency} • ${current.ward}`;
  if (noteText) noteText.textContent = current.note;

  if (statusBadge) {
    statusBadge.className = `mb-status-badge status-${current.status.replace('_', '')}`;
    statusBadge.textContent = current.status === 'in_progress' ? 'IN PROGRESS' : current.status.toUpperCase();
  }

  if (timeline && current.steps) {
    timeline.innerHTML = current.steps.map(s => `
      <div class="timeline-step-row">
        <div class="timeline-gu-word">${s.labelGu} (${s.label})</div>
        <div class="timeline-meta-text">${s.date}</div>
      </div>
    `).join('');
  }
}

function renderMobileMyTicketsScreen() {
  const fullList = document.getElementById('mb-full-tickets-list');
  if (!fullList) return;

  fullList.innerHTML = appState.complaints.map(c => `
    <div class="near-issue-card" onclick="openTicketInMobile('${c.id}')" style="cursor:pointer; background:#ffffff; padding:12px;">
      <div>
        <div style="font-size:0.85rem; font-family:monospace; font-weight:800; color:var(--civica-navy);">${c.id}</div>
        <div style="font-size:0.75rem; color:#475569;">${c.categoryName}, ${c.location}</div>
      </div>
      <span class="near-status-badge assigned">${c.status.replace('_', ' ')}</span>
    </div>
  `).join('');
}

function renderMobileTransitScreen() {
  const transitList = document.getElementById('mb-transit-list');
  if (!transitList) return;

  const data = window.GUJARAT_CIVIC_DATA.transit;
  transitList.innerHTML = data.map(t => `
    <div class="near-issue-card" style="background:#ffffff; padding:12px;">
      <div>
        <div style="font-size:0.9rem; font-weight:700; color:var(--civica-navy);">${t.name}</div>
        <div style="font-size:0.75rem; color:#64748b;">${t.corridor}</div>
      </div>
      <div style="text-align:right;">
        <div style="font-size:0.9rem; font-weight:800; color:var(--civica-gold-dark);">${t.eta}</div>
        <div style="font-size:0.7rem; color:#10b981; font-weight:700;">● ${t.status}</div>
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   DESKTOP WEB PORTAL: COMPLAINT & WALLET CONTROLLERS
   ========================================================================== */

window.selectDesktopCategory = function(el, catId) {
  const cards = document.querySelectorAll('.dt-cat-card');
  cards.forEach(c => c.classList.remove('active'));
  el.classList.add('active');
  appState.selectedIssueType = catId;
};

window.toggleDtDepositMethod = function(method) {
  const lblWallet = document.getElementById('label-method-wallet');
  const lblOnline = document.getElementById('label-method-online');
  const onlineContainer = document.getElementById('dt-online-gateways-container');
  const btnSubmit = document.getElementById('btn-dt-submit-report');

  if (method === 'wallet') {
    if (lblWallet) lblWallet.classList.add('active');
    if (lblOnline) lblOnline.classList.remove('active');
    if (onlineContainer) onlineContainer.style.display = 'none';
    if (btnSubmit) btnSubmit.textContent = 'Pay ₹50 Escrow from Wallet & Submit →';
  } else {
    if (lblOnline) lblOnline.classList.add('active');
    if (lblWallet) lblWallet.classList.remove('active');
    if (onlineContainer) onlineContainer.style.display = 'block';
    if (btnSubmit) btnSubmit.textContent = `Pay ₹50 Escrow via ${appState.selectedEscrowGateway || 'Online'} & Submit →`;
  }
};

window.selectDtGateway = function(el, gatewayName) {
  const cards = document.querySelectorAll('#dt-online-gateways-container .gateway-option-card');
  cards.forEach(c => c.classList.remove('selected'));
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
  if (e) e.preventDefault();
  const location = document.getElementById('dt-location-input')?.value.trim() || "Ashram Road, near Vadaj Circle";
  const catSelect = document.getElementById('slide-report-category-select');
  const customCatInput = document.getElementById('slide-custom-cat-input');
  const isOther = catSelect && catSelect.value === 'other';
  const issueType = catSelect ? catSelect.value : (appState.selectedIssueType || 'pothole');
  const issueTitle = isOther 
    ? (customCatInput?.value.trim() || "Reported Civic Problem") 
    : (catSelect ? catSelect.options[catSelect.selectedIndex].text.split('/')[0].trim() : "Pothole / damaged road");

  const depositSource = appState.slidePayMethod || 'wallet';
  const newTicketId = "GJ-AMC-2026-18470";
  const paymentMethodName = depositSource === 'wallet' ? 'Civic Wallet' : 'UPI';

  if (depositSource === 'wallet') {
    if (Number(appState.citizenWallet.balance) < 50) {
      alert(`Civic Wallet balance is insufficient (Current: ₹${Number(appState.citizenWallet.balance).toFixed(2)}).\nPlease select UPI to proceed.`);
      setSlidePayMethod('upi');
      return;
    }

    // Deduct ₹50 from wallet
    appState.citizenWallet.balance -= 50.00;
    appState.citizenWallet.transactions.unshift({
      id: `TX-${Math.floor(1000 + Math.random() * 9000)}`,
      type: 'held',
      title: `Security Deposit (Escrow) · #18470 ${issueTitle}`,
      amount: 50.00,
      date: 'Just now',
      method: 'Civic Wallet',
      status: 'held',
      ticketId: newTicketId
    });

    if (typeof showCivicaToast === 'function') {
      showCivicaToast(`🛡️ ₹50 Security Deposit held in municipal escrow. 100% Refundable upon inspection.`);
    }
  } else {
    // Paid via UPI
    appState.citizenWallet.transactions.unshift({
      id: `TX-${Math.floor(1000 + Math.random() * 9000)}`,
      type: 'held',
      title: `Security Deposit (Escrow) · #18470 ${issueTitle}`,
      amount: 50.00,
      date: 'Just now',
      method: 'UPI',
      status: 'held',
      ticketId: newTicketId
    });

    if (typeof showCivicaToast === 'function') {
      showCivicaToast(`🛡️ Paid ₹50 via UPI. Held in Municipal Escrow.`);
    }
  }

  // Update wallet display
  const wBal = document.getElementById('dt-report-wallet-val');
  if (wBal) wBal.textContent = Number(appState.citizenWallet.balance).toFixed(0);

  // Check if GJ-AMC-2026-18470 exists; update or create it
  let existing18470 = appState.complaints.find(c => c.id === newTicketId || c.shortId === '18470');
  if (existing18470) {
    existing18470.location = location;
    existing18470.title = `${issueTitle} · ${location}`;
    existing18470.depositStatus = 'held';
    existing18470.depositMethod = paymentMethodName;
  } else {
    const newComplaint = {
      id: newTicketId,
      shortId: "18470",
      citizen: appState.currentUser ? appState.currentUser.name : "A. Mehta",
      citizenPhone: "98980 98765",
      title: `${issueTitle} · ${location}`,
      type: issueType,
      categoryName: issueTitle,
      categoryGu: "ખાડા",
      location: location,
      distance: "240 m",
      ward: "Ward 7",
      zone: "West Zone",
      agency: "AMC Road Project · Ward 7",
      status: "assigned",
      depositAmount: 50.00,
      depositStatus: "held",
      depositMethod: paymentMethodName,
      depositTxId: "ESC-18470",
      filedDate: "Just now",
      dueDate: "Tomorrow",
      slaDate: "19 Sep, 8 pm",
      assignedCrew: "Road Maintenance Crew 08",
      note: "Assigned to Crew 08. Cold-mix patch truck scheduled for night deployment.",
      steps: [
        { label: "Received", labelGu: "પ્રાપ્ત", date: "Just now", completed: true },
        { label: "Assigned", labelGu: "સોંપાયેલ", date: "Crew 08 Assigned", completed: true, active: true },
        { label: "In progress", labelGu: "કાર્ય પ્રગતિમાં", date: "Scheduled tonight", completed: false },
        { label: "Resolved", labelGu: "ઉકેલાયેલ", date: "ETA 19 Sep, 8 pm", completed: false }
      ],
      photoUrl: "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&w=600&q=80"
    };
    appState.complaints.unshift(newComplaint);
  }

  appState.selectedOfficerTicketId = newTicketId;
  saveMasterState();

  if (typeof showCivicaToast === 'function') {
    showCivicaToast(`🎉 Complaint submitted! Ticket ID: ${newTicketId}. Opening Track issue...`);
  }

  // Auto-switch to Track Issue (Slide 3) as stated on Slide 2!
  switchDesktopTab('track');
  const trackInput = document.getElementById('desktop-track-input');
  if (trackInput) trackInput.value = newTicketId;
  renderDesktopPortal();
};

window.viewComplaintInTrack = function(ticketId) {
  const input = document.getElementById('desktop-track-input');
  if (input) input.value = ticketId;
  switchDesktopTab('track');
  handleDesktopTrackLookup();
};

window.renderDesktopMyTickets = function() {
  const tbody = document.getElementById('dt-mytickets-tbody');
  if (!tbody) return;

  const tickets = appState.complaints || [];
  if (tickets.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" style="text-align:center; padding:24px; color:#94a3b8;">No complaints filed yet.</td></tr>`;
    return;
  }

  tbody.innerHTML = tickets.map(t => {
    let depositBadge = `<span class="ticket-status-pill status-inprogress">⏳ ₹50 Held</span>`;
    if (t.depositStatus === 'refunded') {
      depositBadge = `<span class="ticket-status-pill status-resolved">✓ ₹50 Refunded</span>`;
    } else if (t.depositStatus === 'prank_forfeited') {
      depositBadge = `<span class="ticket-status-pill" style="background:#fee2e2; color:#991b1b;">✕ Forfeited (Prank)</span>`;
    }

    let statusClass = 'status-inprogress';
    if (t.status === 'Resolved' || t.status === 'નિરાકરણ થયેલ') statusClass = 'status-resolved';
    else if (t.status === 'New' || t.status === 'new' || t.status === 'નવી') statusClass = 'status-assigned';

    return `
      <tr>
        <td><strong>${t.id}</strong></td>
        <td><span style="font-size:1.1rem; margin-right:4px;">${t.icon || '📍'}</span> ${t.categoryName || t.type || 'Civic'}</td>
        <td>
          <div style="font-weight:700; color:var(--civica-navy);">${t.location || 'Ward 7'}</div>
          <div style="font-size:0.78rem; color:#64748b;">${(t.note || '').substring(0, 55)}...</div>
        </td>
        <td>${t.filedDate || '12 Sep 2026'}</td>
        <td>${depositBadge}</td>
        <td><span class="ticket-status-pill ${statusClass}">${t.status.toUpperCase()}</span></td>
        <td>
          <button class="btn-table-action" onclick="viewComplaintInTrack('${t.id}')">Track &rarr;</button>
        </td>
      </tr>
    `;
  }).join('');
};

window.renderDesktopTransit = function() {
  const grid = document.getElementById('dt-transit-grid');
  if (!grid) return;

  const transitData = window.GUJARAT_CIVIC_DATA.transitRoutes || [
    { line: 'Janmarg Green Line (BRTS)', route: 'RTO Circle ↔ Maninagar via CG Road', eta: '3 min', status: 'On Time', icon: '🚌' },
    { line: 'Ahmedabad Metro (North-South)', route: 'APMC ↔ Old High Court ↔ Motera', eta: '6 min', status: 'On Time', icon: '🚇' },
    { line: 'Ahmedabad Metro (East-West)', route: 'Thaltej ↔ Kalupur Railway Station ↔ Vastral Gam', eta: '8 min', status: 'On Time', icon: '🚇' },
    { line: 'Janmarg Purple Line (BRTS)', route: 'Science City ↔ Iskcon ↔ Shivranjani', eta: '11 min', status: 'Moderate Traffic', icon: '🚌' },
    { line: 'GSRTC Intercity Express', route: 'Geeta Mandir Central Bus Port ↔ Vadodara', eta: '18:40 Dep', status: 'Boarding Bay 4', icon: '🚍' },
    { line: 'AMTS Feeder Route 42', route: 'Navrangpura Bus Stand ↔ Paldi', eta: '5 min', status: 'On Time', icon: '🚌' }
  ];

  grid.innerHTML = transitData.map(t => `
    <div class="dt-transit-card">
      <div style="display:flex; align-items:center; gap:14px;">
        <span style="font-size:2rem;">${t.icon || '🚌'}</span>
        <div>
          <strong style="display:block; font-size:1.05rem; color:var(--civica-navy);">${t.line}</strong>
          <span style="font-size:0.8rem; color:#64748b;">${t.route}</span>
          <div style="font-size:0.75rem; color:#0284c7; font-weight:700; margin-top:2px;">Route Corridor: West Zone</div>
        </div>
      </div>
      <div style="text-align:right;">
        <div style="font-size:1.25rem; font-weight:800; color:var(--civica-gold-dark);">${t.eta}</div>
        <div style="font-size:0.75rem; color:#10b981; font-weight:700;">● ${t.status}</div>
      </div>
    </div>
  `).join('');
};

/* ==========================================================================
   CIVIC WALLET & ANTI-SPAM SECURITY ESCROW CONTROLLER
   ========================================================================== */

function renderCivicWallet() {
  const dtBal = document.getElementById('desktop-wallet-bal');
  const dtVal = document.getElementById('dt-wallet-balance-val');
  const dtReportVal = document.getElementById('dt-report-wallet-val');
  const dtPayStatus = document.getElementById('dt-wallet-pay-status');
  const dtTableBody = document.getElementById('dt-wallet-tx-tbody');
  const modalBal = document.getElementById('escrow-wallet-balance-val');
  const btnPayWallet = document.getElementById('btn-pay-escrow-wallet');

  const currentBal = Number(appState.citizenWallet.balance || 0);
  const balFormatted = currentBal.toFixed(2);

  if (dtBal) dtBal.textContent = `₹${balFormatted}`;
  if (dtVal) dtVal.textContent = balFormatted;
  if (dtReportVal) dtReportVal.textContent = `₹${balFormatted}`;
  if (modalBal) modalBal.textContent = balFormatted;

  if (dtPayStatus) {
    if (currentBal >= 50) {
      dtPayStatus.style.color = '#10b981';
      dtPayStatus.textContent = `Balance Sufficient (₹${balFormatted})`;
    } else {
      dtPayStatus.style.color = '#ef4444';
      dtPayStatus.textContent = `Insufficient Balance (₹${balFormatted} / ₹50 required)`;
    }
  }

  if (btnPayWallet) {
    if (currentBal >= 50) {
      btnPayWallet.disabled = false;
      btnPayWallet.style.opacity = '1';
      btnPayWallet.textContent = `Pay ₹50 from Civic Wallet & Submit Ticket →`;
    } else {
      btnPayWallet.disabled = true;
      btnPayWallet.style.opacity = '0.6';
      btnPayWallet.textContent = `Insufficient Balance (₹${balFormatted} / ₹50 required)`;
    }
  }

  if (dtTableBody) {
    const txs = appState.citizenWallet.transactions || [];
    if (txs.length === 0) {
      dtTableBody.innerHTML = `<tr><td colspan="7" style="text-align:center; padding:20px; color:#94a3b8;">No escrow transactions found.</td></tr>`;
    } else {
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
}

// 2. Civic Wallet Top-Up
window.openWalletTopupModal = function() {
  const m = document.getElementById('wallet-topup-modal');
  if (m) {
    m.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
};

window.closeWalletTopupModal = function() {
  const m = document.getElementById('wallet-topup-modal');
  if (m) {
    m.classList.remove('active');
    document.body.style.overflow = '';
  }
};

window.setTopupAmount = function(amt) {
  const input = document.getElementById('topup-amount-input');
  if (input) input.value = amt;
  const chips = document.querySelectorAll('.quick-amounts-row .amount-chip');
  chips.forEach(c => {
    if (c.textContent.includes(amt)) c.classList.add('active');
    else c.classList.remove('active');
  });
};

window.selectTopupGateway = function(el, gatewayName) {
  const cards = document.querySelectorAll('#wallet-topup-modal .gateway-option-card');
  cards.forEach(c => c.classList.remove('selected'));
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

// Global Toast Notification Helper
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
  }, 4500);
}

// Modals
window.openAddPhotoModal = function() {
  const m = document.getElementById('add-photo-modal');
  if (m) m.classList.add('active');
};

window.closeAddPhotoModal = function() {
  const m = document.getElementById('add-photo-modal');
  if (m) m.classList.remove('active');
};

window.savePhotoUpload = function() {
  closeAddPhotoModal();
  alert(`Photo uploaded to municipal docket for ${appState.selectedOfficerTicketId}.`);
};

window.openAskAMCModal = function() {
  const m = document.getElementById('ask-amc-modal');
  if (m) m.classList.add('active');
};

window.closeAskAMCModal = function() {
  const m = document.getElementById('ask-amc-modal');
  if (m) m.classList.remove('active');
};

window.sendAskAMCMessage = function() {
  const text = document.getElementById('ask-amc-textarea')?.value.trim();
  if (!text) return;
  closeAskAMCModal();
  alert(`Message sent to Officer R. Patel. Notification flagged in officer inbox.`);
  document.getElementById('ask-amc-textarea').value = '';
};

window.shareWithSociety = function() {
  const shareText = `CIVICA ગુજરાત: Ward 7 Issue Track link for society: https://civica.gujarat.in/track?id=${appState.selectedOfficerTicketId}`;
  if (navigator.clipboard) {
    navigator.clipboard.writeText(shareText);
    alert(`Copied to clipboard:\n${shareText}`);
  } else {
    alert(`Share text:\n${shareText}`);
  }
};

/* ==========================================================================
   PROJECT GALLERY DATA & LIGHTBOX CONTROLLER
   ========================================================================== */
const CIVICA_GALLERY_PROJECTS = [
  {
    category: 'transit',
    badge: 'Transit & Mobility',
    title: 'Electric BRTS Transit Corridors',
    image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=1200&q=80',
    desc: 'Dedicated zero-emission BRTS corridor fleet with synchronized GPS telemetry, sub-second RFID tap ticketing, and dedicated lane clearance sensors across Ahmedabad and Surat.',
    sla: '⚡ 99.8% On-Time SLA • 120 Fleet Units'
  },
  {
    category: 'transit',
    badge: 'Smart Mobility',
    title: 'Expressway Traffic Synchronization',
    image: 'https://images.unsplash.com/photo-1465447142348-e9952c393450?auto=format&fit=crop&w=1200&q=80',
    desc: 'AI-managed adaptive traffic signals reducing commuter gridlocks by 34% in peak rush hours across SG Highway and Ashram Road corridors.',
    sla: '🟢 Live Synchronized Corridor • 42 Junctions'
  },
  {
    category: 'transit',
    badge: 'Urban Infrastructure',
    title: 'Pedestrian Safety & Smart Boulevard',
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1200&q=80',
    desc: 'Sensory crosswalks and illuminated pedestrian safety islands across high-density markets and heritage city zones ensuring pedestrian priority.',
    sla: '🚶 Zero Pedestrian Incidents • Ward 7'
  },
  {
    category: 'roads',
    badge: 'Roads & Potholes',
    title: '24-Hour Rapid Pothole Patching Fleet',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80',
    desc: 'Infrared hot-asphalt repair vans dispatched automatically on geotagged citizen reports, achieving guaranteed 24-hour permanent road leveling.',
    sla: '⏱️ 24h Mandatory SLA • Infrared Compaction'
  },
  {
    category: 'sanitation',
    badge: 'Cleanliness & Waste',
    title: 'GPS Door-to-Door Waste Collection',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=1200&q=80',
    desc: '100% route verification and smart bin fill-level ultrasound sensors across 48 municipal wards, powering zero-landfill segregated processing.',
    sla: '♻️ 100% Ward Route Verification • SWM Unit'
  },
  {
    category: 'utilities',
    badge: 'Smart Lighting',
    title: 'Automated IoT Streetlight Network',
    image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1200&q=80',
    desc: 'Centralized luminaire monitoring detecting bulb blackouts instantly with automated ticket assignment and energy-saving daylight dimming curves.',
    sla: '💡 24h Replacement SLA • 85,000 Connected Poles'
  },
  {
    category: 'tech',
    badge: 'Command Centre',
    title: 'Integrated Command & Control Centre (ICCC)',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
    desc: '24x7 municipal nerve centre orchestrating emergency response, CCTV video feeds, water pressure telemetry, and field engineering dispatches.',
    sla: '🖥️ 24x7 Active Nerve Centre • Danapith HQ'
  },
  {
    category: 'utilities',
    badge: 'Water & Drainage',
    title: 'Monsoon Sump & Underpass Dewatering',
    image: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=1200&q=80',
    desc: 'High-capacity automated dewatering pumps and water-level telemetry across all city underpasses ensuring uninterrupted traffic flow during heavy rains.',
    sla: '🌧️ 2h Emergency Response • SCADA Monitored'
  },
  {
    category: 'tech',
    badge: 'Citizen Technology',
    title: 'GPS Geo-Tagging & Escrow Verification',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80',
    desc: 'Live camera GPS verification protecting citizen reports from false flags and ensuring 100% automatic ₹50 escrow security refund upon field inspection.',
    sla: '👛 100% Escrow Protected • Instant Refund'
  }
];

window.filterGallery = function(category) {
  document.querySelectorAll('.gallery-filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.filter === category);
  });
  document.querySelectorAll('.project-gallery-card').forEach(card => {
    if (category === 'all' || card.dataset.category === category) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });
};

window.openGalleryLightbox = function(index) {
  const project = CIVICA_GALLERY_PROJECTS[index];
  if (!project) return;
  const modal = document.getElementById('gallery-lightbox-modal');
  if (!modal) return;
  document.getElementById('lightbox-img').src = project.image;
  document.getElementById('lightbox-badge').innerText = project.badge;
  document.getElementById('lightbox-title').innerText = project.title;
  document.getElementById('lightbox-desc').innerText = project.desc;
  document.getElementById('lightbox-sla').innerText = project.sla;
  modal.style.display = 'flex';
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
};

window.closeGalleryLightbox = function() {
  const modal = document.getElementById('gallery-lightbox-modal');
  if (modal) {
    modal.style.display = 'none';
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
};

window.openContactModal = function() {
  window.location.href = 'rules-and-contact.html';
};

window.closeContactModal = function() {
  const modal = document.getElementById('gallery-lightbox-modal');
  if (modal) {
    modal.style.display = 'none';
    modal.classList.remove('active');
  }
};

window.openWalletModal = function() {
  switchDashboardMode('citizen-desktop');
  switchDesktopTab('wallet');
};

/* ==========================================================================
   CIVICA AI INTELLIGENCE ENGINE (FLOATING BOTTOM-RIGHT COPILOT)
   Self-Capable Multi-Lingual Civic AI Model (Gemini & ChatGPT Core)
   Languages: English, Gujarati (ગુજરાતી), Hindi (हिन्दी)
   ========================================================================== */

function generateCivicAiResponse(rawPrompt, preferredLang = appState.language) {
  const prompt = (rawPrompt || '').toLowerCase().trim();
  const currentTicket = appState.complaints.find(c => c.id === appState.selectedOfficerTicketId) || appState.complaints[0] || { id: 'GJ-AMC-2026-18492' };
  
  const isGujarati = preferredLang === 'gu' || /[\u0A80-\u0AFF]/.test(rawPrompt) || prompt.includes('gujarati') || prompt.includes('ગુજરાતી') || prompt.includes('kem') || prompt.includes('kyare');
  const isHindi = preferredLang === 'hi' || /[\u0900-\u097F]/.test(rawPrompt) || prompt.includes('hindi') || prompt.includes('हिन्दी') || prompt.includes('kya') || prompt.includes('kaise');

  // 1. GUJARATI RESPONSES
  if (isGujarati) {
    if (prompt.includes('લાઇટ') || prompt.includes('લાઈટ') || prompt.includes('fixture') || prompt.includes('streetlight') || prompt.includes('સ્થિતિ') || prompt.includes('ફરિયાદ')) {
      return `
        <div style="color:#0f172a; font-size:0.9rem;">
          <strong style="color:#1e3a8a; font-size:1rem; display:block; margin-bottom:6px;">ફરિયાદ લાઇવ સ્થિતિ (આઈડી: ${currentTicket.id})</strong>
          <p style="margin:0 0 8px 0;">આપની શેરી લાઈટ ફરિયાદ (CG Road, Navrangpura) AMC વિદ્યુત વિભાગ હેઠળ પ્રગતિમાં છે.</p>
          <ul style="padding-left:18px; margin:0 0 6px 0; line-height:1.6;">
            <li><strong>નિરીક્ષક અધિકારી:</strong> R. Patel (AMC West Zone Supervisor)</li>
            <li><strong>સમારકામ સ્થિતિ:</strong> નવું 90W LED ફિક્સ્ચર મંજૂર થયેલ છે અને 19 સપ્ટેમ્બર સુધીમાં ઇન્સ્ટોલ થશે.</li>
            <li><strong>એસ્ક્રો ડિપોઝિટ:</strong> આપની ₹50 ડિપોઝિટ સુરક્ષિત છે અને કામ પૂર્ણ થતાં જ ૧૦૦% પરત મળશે.</li>
            <li><strong>SMS કન્ફર્મેશન:</strong> લાઈટ કાર્યરત થતાં આપના મોબાઇલ પર ગુજરાતી SMS મોકલાશે.</li>
          </ul>
        </div>
      `;
    }
    if (prompt.includes('રિફંડ') || prompt.includes('પૈસા') || prompt.includes('વૉલેટ') || prompt.includes('ડિપોઝિટ') || prompt.includes('escrow') || prompt.includes('50')) {
      return `
        <div style="color:#0f172a; font-size:0.9rem;">
          <strong style="color:#166534; font-size:1rem; display:block; margin-bottom:6px;">🛡️ ₹50 એસ્ક્રો સુરક્ષા ડિપોઝિટ અને રિફંડ નીતિ</strong>
          <ul style="padding-left:18px; margin:0 0 8px 0; line-height:1.6;">
            <li><strong>ડિપોઝિટ શા માટે?</strong> ખોટી અથવા નકલી ફરિયાદો રોકવા માટે AMC દ્વારા ₹50 ની રિફંડેબલ ડિપોઝિટ લેવામાં આવે છે.</li>
            <li><strong>રિફંડ ક્યારે થશે?</strong> AMC અધિકારી સ્થળ તપાસ કરીને ફરિયાદ વાસ્તવિક હોવાની પુષ્ટિ કરે કે તુરંત પૂરા ₹50 આપના નાગરિક વૉલેટમાં જમા થાય છે.</li>
            <li><strong>આપનું વૉલેટ બેલેન્સ:</strong> હાલમાં આપના વૉલેટમાં <strong>₹${Number(appState.citizenWallet.balance).toFixed(2)}</strong> સિલક છે.</li>
          </ul>
        </div>
      `;
    }
    if (prompt.includes('અધિકારી') || prompt.includes('ટીમ') || prompt.includes('crew') || prompt.includes('officer') || prompt.includes('કોણ')) {
      return `
        <div style="color:#0f172a; font-size:0.9rem;">
          <strong style="color:#1e3a8a; font-size:1rem; display:block; margin-bottom:6px;">👷 સોંપાયેલ મ્યુનિસિપલ સ્ટાફ (વોર્ડ ૭)</strong>
          <ul style="padding-left:18px; margin:0; line-height:1.6;">
            <li><strong>સુપરવાઈઝર અધિકારી:</strong> R. Patel (AMC ઇલેક્ટ્રિકલ એન્ડ વર્કસ)</li>
            <li><strong>ફિલ્ડ ટીમ:</strong> સ્ટ્રીટ લાઇટિંગ ક્રૂ ૧૪ (વેસ્ટ ઝોન)</li>
            <li><strong>ઝોનલ કચેરી:</strong> AMC ઉસ્માનપુરા / નવરંગપુરા કંટ્રોલ રૂમ</li>
            <li><strong>હેલ્પલાઇન નંબર:</strong> 155303 / 1913</li>
          </ul>
        </div>
      `;
    }
    if (prompt.includes('ચોમાસુ') || prompt.includes('પાણી') || prompt.includes('ખાડા') || prompt.includes('કચરો')) {
      return `
        <div style="color:#0f172a; font-size:0.9rem;">
          <strong style="color:#1e3a8a; font-size:1rem; display:block; margin-bottom:6px;">AMC આપાતકાલીન નાગરિક સેવાઓ</strong>
          <ul style="padding-left:18px; margin:0; line-height:1.6;">
            <li><strong>પાણી ભરાવું (Waterlogging):</strong> લૉ ગાર્ડન અને મીઠાખળી અંડરપાસ ખાતે ડી-વોટરિંગ પમ્પ સતત કાર્યરત છે.</li>
            <li><strong>રસ્તાના ખાડા (Potholes):</strong> કોલ્ડ-મિક્સ પેચ વાન દ્વારા ૨૪ કલાકમાં સમારકામ કરવામાં આવે છે.</li>
            <li><strong>કચરો નિકાલ:</strong> ડોર-ટુ-ડોર સ્વચ્છતા વાન સવારે ૭:૦૦ થી ૧૧:૩૦ દરમિયાન સંચાલિત થાય છે.</li>
          </ul>
        </div>
      `;
    }
    return `
      <div style="color:#0f172a; font-size:0.9rem;">
        <strong style="color:#1e3a8a; font-size:1rem; display:block; margin-bottom:6px;">સિવિકા AI સ્માર્ટ સિટી માર્ગદર્શન</strong>
        <p style="margin:0 0 6px 0;">આપના પ્રશ્ન બદલ આભાર. અમદાવાદ મહાનગરપાલિકા (AMC) હેઠળ નીચે મુજબ સુવિધાઓ ઉપલબ્ધ છે:</p>
        <ul style="padding-left:18px; margin:0; line-height:1.6;">
          <li>કોઈપણ નવી ફરિયાદ નોંધવા <strong>"નવી ફરિયાદ નોંધાવો"</strong> ટેબ પર ક્લિક કરો.</li>
          <li>ફરિયાદની લાઈવ પ્રગતિ જોવા <strong>"ફરિયાદ ટ્રેક કરો"</strong> માં આઈડી (દા.ત. 18492) દાખલ કરો.</li>
          <li>૨૪ કલાક સહાય માટે AMC ટોલ-ફ્રી નંબર: <strong>155303</strong>.</li>
        </ul>
      </div>
    `;
  }

  // 2. HINDI RESPONSES
  if (isHindi) {
    if (prompt.includes('लाइट') || prompt.includes('fixture') || prompt.includes('streetlight') || prompt.includes('स्थिति') || prompt.includes('शिकायत')) {
      return `
        <div style="color:#0f172a; font-size:0.9rem;">
          <strong style="color:#1e3a8a; font-size:1rem; display:block; margin-bottom:6px;">शिकायत लाइव स्थिति (आईडी: ${currentTicket.id})</strong>
          <p style="margin:0 0 8px 0;">आपकी स्ट्रीटलाइट शिकायत (CG Road, नवरंगपुरा) AMC विद्युत शाखा के अधीन प्रगति पर है।</p>
          <ul style="padding-left:18px; margin:0 0 6px 0; line-height:1.6;">
            <li><strong>निरीक्षण अधिकारी:</strong> R. Patel (AMC वेस्ट ज़ोन सुपरवाइजर)</li>
            <li><strong>मरम्मत कार्य:</strong> नया 90W LED फिक्सचर 19 सितंबर तक स्थापित कर दिया जाएगा।</li>
            <li><strong>सुरक्षा एस्क्रो:</strong> आपकी ₹50 जमा राशि सुरक्षित है और कार्य पूर्ण होते ही १००% वापस मिल जाएगी।</li>
            <li><strong>SMS सूचना:</strong> लाइट चालू होते ही आपके फोन पर पुष्टिकरण संदेश भेजा जाएगा।</li>
          </ul>
        </div>
      `;
    }
    if (prompt.includes('रिफंड') || prompt.includes('पैसे') || prompt.includes('वॉलेट') || prompt.includes('जमा') || prompt.includes('escrow') || prompt.includes('50')) {
      return `
        <div style="color:#0f172a; font-size:0.9rem;">
          <strong style="color:#166534; font-size:1rem; display:block; margin-bottom:6px;">🛡️ ₹50 सुरक्षा एस्क्रो और १००% रिफंड नीति</strong>
          <ul style="padding-left:18px; margin:0 0 8px 0; line-height:1.6;">
            <li><strong>जमा राशि क्यों?</strong> फर्जी और शरारती शिकायतों को रोकने हेतु ₹50 की वापसी योग्य राशि रखी जाती है।</li>
            <li><strong>रिफंड कब होगा?</strong> निगम अधिकारी द्वारा स्थल सत्यापन होते ही पूरी ₹50 राशि तुरंत आपके नागरिक वॉलेट में जमा हो जाती है।</li>
            <li><strong>वर्तमान शेष:</strong> आपके वॉलेट में अभी <strong>₹${Number(appState.citizenWallet.balance).toFixed(2)}</strong> उपलब्ध हैं।</li>
          </ul>
        </div>
      `;
    }
    return `
      <div style="color:#0f172a; font-size:0.9rem;">
        <strong style="color:#1e3a8a; font-size:1rem; display:block; margin-bottom:6px;">सिविका AI स्मार्ट सिटी सहायता</strong>
        <p style="margin:0 0 6px 0;">अहमदाबाद नगर निगम (AMC) नागरिक सेवाओं की मुख्य जानकारी:</p>
        <ul style="padding-left:18px; margin:0; line-height:1.6;">
          <li>नई शिकायत दर्ज करने के लिए <strong>"नई शिकायत दर्ज करें"</strong> विकल्प चुनें।</li>
          <li>स्थिति देखने के लिए <strong>"शिकायत ट्रैक करें"</strong> में शिकायत आईडी दर्ज करें (उदा. 18492)।</li>
          <li>24 घंटे नागरिक सहायता हेल्पलाइन: <strong>155303 / 1913</strong>।</li>
        </ul>
      </div>
    `;
  }

  // 3. ENGLISH RESPONSES
  if (prompt.includes('fixture') || prompt.includes('install') || prompt.includes('when') || prompt.includes('streetlight') || prompt.includes('arrive') || prompt.includes('18492') || prompt.includes('status')) {
    return `
      <div style="color:#0f172a; font-size:0.9rem;">
        <strong style="color:#1e3a8a; font-size:1rem; display:block; margin-bottom:6px;">Live Engineering Status · Complaint ${currentTicket.id}</strong>
        <p style="margin:0 0 8px 0;">AMC Electrical Division has verified the light at CG Road, Navrangpura:</p>
        <ul style="padding-left:18px; margin:0 0 6px 0; line-height:1.6;">
          <li><strong>Inspecting Supervisor:</strong> Officer R. Patel (AMC West Zone)</li>
          <li><strong>Hardware Dispatch:</strong> Heavy-duty 90W LED fixture replacement scheduled for 19 Sep 2026.</li>
          <li><strong>Escrow Guarantee:</strong> Your ₹50 deposit is held safely and automatically refunded 100% to your wallet.</li>
          <li><strong>SMS Alert:</strong> Automated notification will be dispatched once circuit illumination is active.</li>
        </ul>
      </div>
    `;
  }

  if (prompt.includes('refund') || prompt.includes('50') || prompt.includes('escrow') || prompt.includes('deposit') || prompt.includes('money') || prompt.includes('wallet')) {
    return `
      <div style="color:#0f172a; font-size:0.9rem;">
        <strong style="color:#166534; font-size:1rem; display:block; margin-bottom:6px;">🛡️ 100% Refundable Anti-Spam Escrow Policy</strong>
        <ul style="padding-left:18px; margin:0 0 8px 0; line-height:1.6;">
          <li><strong>Purpose:</strong> Prevents spam and prank reports so AMC emergency crews attend real hazards swiftly.</li>
          <li><strong>Refund Trigger:</strong> As soon as municipal staff inspects and confirms the issue, ₹50 is instantly credited back to your Civic Wallet.</li>
          <li><strong>Current Wallet Balance:</strong> <strong>₹${Number(appState.citizenWallet.balance).toFixed(2)}</strong>.</li>
        </ul>
      </div>
    `;
  }

  return `
    <div style="color:#0f172a; font-size:0.9rem;">
      <strong style="color:#1e3a8a; font-size:1rem; display:block; margin-bottom:6px;">Civica Smart City AI Operations</strong>
      <p style="margin:0 0 6px 0;">Thank you for querying Ahmedabad Municipal Corporation civic intelligence:</p>
      <ul style="padding-left:18px; margin:0; line-height:1.6;">
        <li>Use <strong>"Track complaint"</strong> to look up real-time progress by Complaint ID (e.g. 18492, 18501).</li>
        <li>Use <strong>"File complaint"</strong> to submit geotagged issues with refundable ₹50 escrow.</li>
        <li>24x7 AMC Municipal Central Control Room: <strong>155303 / 1913</strong>.</li>
      </ul>
    </div>
  `;
}

// Floating AI Copilot Handlers
window.toggleFloatingAi = function() {
  const popup = document.getElementById('floating-ai-popup');
  if (!popup) return;
  const isHidden = (popup.style.display === 'none' || !popup.style.display);
  popup.style.display = isHidden ? 'flex' : 'none';
  if (isHidden) {
    const input = document.getElementById('floating-ai-input');
    if (input) setTimeout(() => input.focus(), 150);
  }
};

window.handleFloatingAiSubmit = function(e) {
  if (e) e.preventDefault();
  const input = document.getElementById('floating-ai-input');
  const question = input?.value.trim();
  if (!question) return;

  const thread = document.getElementById('floating-ai-messages');
  if (!thread) return;

  // Append user message bubble
  const userRow = document.createElement('div');
  userRow.className = 'ai-popup-msg-row ai-popup-msg-user';
  userRow.innerHTML = `
    <div class="ai-msg-avatar user">You</div>
    <div class="ai-popup-bubble">${question.replace(/</g, '&lt;')}</div>
  `;
  thread.appendChild(userRow);
  input.value = '';
  thread.scrollTop = thread.scrollHeight;

  // Append typing indicator
  const botRow = document.createElement('div');
  botRow.className = 'ai-popup-msg-row ai-popup-msg-bot';
  const thinkingText = appState.language === 'gu' 
    ? '✨ સિવિકા AI વિશ્લેષણ કરી રહ્યું છે...' 
    : appState.language === 'hi' 
    ? '✨ सिविका AI विश्लेषण कर रहा है...' 
    : '✨ Civica AI is analyzing AMC records...';
  botRow.innerHTML = `
    <div class="ai-msg-avatar bot">✨</div>
    <div class="ai-popup-bubble"><p style="color:#6366f1; font-style:italic; margin:0;">${thinkingText}</p></div>
  `;
  thread.appendChild(botRow);
  thread.scrollTop = thread.scrollHeight;

  // Generate intelligent response with Gemini/ChatGPT quality
  setTimeout(() => {
    const responseHtml = generateCivicAiResponse(question, appState.language);
    botRow.innerHTML = `
      <div class="ai-msg-avatar bot">✨</div>
      <div class="ai-popup-bubble">${responseHtml}</div>
    `;
    thread.scrollTop = thread.scrollHeight;
  }, 400);
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
  
  let greetingHtml = '';
  if (appState.language === 'gu') {
    greetingHtml = `
      <div class="ai-popup-msg-row ai-popup-msg-bot">
        <div class="ai-msg-avatar bot">✨</div>
        <div class="ai-popup-bubble">
          <strong style="color:#0f172a; font-size:0.95rem;">નમસ્તે! હું સિવિકા AI સહાયક છું.</strong>
          <p style="margin:6px 0; color:#334155;">અમદાવાદ મહાનગરપાલિકા (AMC) સાથે હું લાઈવ જોડાયેલો છું. આપની ફરિયાદ, ₹50 રિફંડેબલ એસ્ક્રો ડિપોઝિટ, અથવા મ્યુનિસિપલ નિયમો વિશે કોઈપણ પ્રશ્ન પૂછી શકો છો.</p>
        </div>
      </div>
    `;
  } else if (appState.language === 'hi') {
    greetingHtml = `
      <div class="ai-popup-msg-row ai-popup-msg-bot">
        <div class="ai-msg-avatar bot">✨</div>
        <div class="ai-popup-bubble">
          <strong style="color:#0f172a; font-size:0.95rem;">नमस्ते! मैं सिविका AI सहायक हूँ।</strong>
          <p style="margin:6px 0; color:#334155;">अहमदाबाद नगर निगम (AMC) से लाइव जुड़ा हुआ हूँ। आप अपनी शिकायत, ₹50 सुरक्षा एस्क्रो रिफंड या निगम सेवाओं से संबंधित कोई भी सवाल पूछ सकते हैं।</p>
        </div>
      </div>
    `;
  } else {
    greetingHtml = `
      <div class="ai-popup-msg-row ai-popup-msg-bot">
        <div class="ai-msg-avatar bot">✨</div>
        <div class="ai-popup-bubble">
          <strong style="color:#0f172a; font-size:0.95rem;">Namaste! I am Civica AI Assistant.</strong>
          <p style="margin:6px 0; color:#334155;">Directly connected to Ahmedabad Municipal Corporation (AMC) Ops. Ask me any doubt regarding complaint resolution, ₹50 escrow refund, or city procedures.</p>
        </div>
      </div>
    `;
  }
  thread.innerHTML = greetingHtml;
}

function renderFloatingAiChips() {
  const chipsBar = document.getElementById('floating-ai-chips');
  if (!chipsBar) return;
  let chips = [];
  if (appState.language === 'gu') {
    chips = [
      { text: "💡 શેરી લાઈટ ક્યારે શરૂ થશે?", prompt: "મને શેરી લાઈટ ફરિયાદ વિશે સ્થિતિ જણાવો." },
      { text: "🛡️ ₹50 રિફંડ ક્યારે મળશે?", prompt: "મારા ₹50 ક્યારે અને કેવી રીતે પરત મળશે?" },
      { text: "👷 કયા અધિકારી સોંપાયેલ છે?", prompt: "વોર્ડ ૭ ના કયા અધિકારી અને ટીમ આ કામ જોઈ રહી છે?" },
      { text: "🌊 ચોમાસામાં પાણી ભરાવ?", prompt: "ચોમાસામાં પાણી ભરાય ત્યારે AMC ની તાત્કાલિક પ્રક્રિયા શું છે?" }
    ];
  } else if (appState.language === 'hi') {
    chips = [
      { text: "💡 स्ट्रीटलाइट कब ठीक होगी?", prompt: "मुझे स्ट्रीटलाइट शिकायत की स्थिति बताएं।" },
      { text: "🛡️ ₹50 रिफंड कब मिलेगा?", prompt: "मेरी ₹50 सुरक्षा राशि कब और कैसे वापस मिलेगी?" },
      { text: "👷 कौन सा अधिकारी नियुक्त है?", prompt: "वार्ड 7 के कौन से अधिकारी इस कार्य को देख रहे हैं?" },
      { text: "🌊 जलभराव की शिकायत?", prompt: "बारिश में जलभराव होने पर AMC की त्वरित प्रक्रिया क्या है?" }
    ];
  } else {
    chips = [
      { text: "💡 When will streetlight be repaired?", prompt: "When will the streetlight fixture at CG Road be installed?" },
      { text: "🛡️ How does ₹50 refund work?", prompt: "How and when do I get my ₹50 escrow deposit refunded?" },
      { text: "👷 Who is the assigned officer?", prompt: "Who is the assigned AMC officer and crew for this issue?" },
      { text: "🌊 Waterlogging rapid protocol?", prompt: "What is AMC emergency protocol for monsoon waterlogging?" }
    ];
  }

  chipsBar.innerHTML = chips.map(c => `
    <button type="button" class="ai-popup-chip" onclick="askFloatingAiPrompt('${c.prompt.replace(/'/g, "\\'")}')">${c.text}</button>
  `).join('');
}

// Aliases for backwards compatibility
window.handleAiChatSubmit = window.handleFloatingAiSubmit;
window.askAiPrompt = window.askFloatingAiPrompt;
window.clearAiChat = initFloatingAiGreeting;

