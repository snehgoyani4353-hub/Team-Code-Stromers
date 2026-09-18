/**
 * CIVICA ગુજરાત - Master Application Controller
 * Synchronized Municipal Officer Interface (Pages 1-8) & Citizen User Interface
 * Municipalities: AMC (Ahmedabad), SMC (Surat), VMC (Vadodara), RMC (Rajkot), GMC (Gandhinagar)
 */

// Application State
let appState = {
  currentView: 'landing', // 'landing' | 'citizen-desktop' | 'citizen-mobile' | 'officer'
  currentUser: null, // { role: 'citizen'|'officer', name: string, email: string, avatar: string }
  citizenWallet: { ...window.GUJARAT_CIVIC_DATA.citizenWallet },
  pendingComplaintData: null,
  selectedEscrowGateway: 'Paytm',
  selectedTopupGateway: 'Paytm',
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

  // Escape key to close modals
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeLoginModal();
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
 * Switch Citizen Desktop Web Portal Tabs
 * @param {'track'|'report'|'wallet'|'mytickets'|'brts'|'wardmap'} tabName
 */
window.switchDesktopTab = function(tabName) {
  appState.activeDesktopTab = tabName;

  const tabs = ['track', 'ai', 'report', 'wallet', 'mytickets', 'brts', 'wardmap'];
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
    urlBar.textContent = `https://civica.gujarat.in / portal / ${tabName}`;
  }

  if (tabName === 'wallet') {
    renderCivicWallet();
  } else if (tabName === 'mytickets') {
    renderDesktopMyTickets();
  } else if (tabName === 'brts') {
    renderDesktopTransit();
  } else if (tabName === 'track') {
    renderDesktopPortal();
  } else if (tabName === 'report') {
    renderCivicWallet();
  }
};

/**
 * Handle Logout
 */
window.handleLogout = function() {
  appState.currentUser = null;
  localStorage.removeItem('civica_user');
  returnToLandingPage();
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
  const currentTicket = appState.complaints.find(c => c.id === appState.selectedOfficerTicketId) || appState.complaints[0];
  if (!currentTicket) return;

  const titleEl = document.getElementById('dt-ticket-title');
  const metaEl = document.getElementById('dt-ticket-meta');
  const statusPill = document.getElementById('dt-ticket-status-pill');
  const noteEl = document.getElementById('dt-ticket-note');
  const inputEl = document.getElementById('desktop-track-input');
  const reopenBtn = document.getElementById('btn-reopen-ticket');

  const depStatusText = currentTicket.depositStatus === 'refunded'
    ? ' • 🛡️ ₹50 Deposit Refunded'
    : currentTicket.depositStatus === 'forfeited'
    ? ' • ❌ ₹50 Deposit Forfeited'
    : ' • 🛡️ ₹50 Security Escrow Active';

  if (titleEl) titleEl.textContent = currentTicket.title;
  if (metaEl) metaEl.textContent = `${currentTicket.agency} • ${currentTicket.ward} ${currentTicket.zone} • Filed ${currentTicket.filedDate}${depStatusText}`;
  if (noteEl) noteEl.textContent = currentTicket.note;
  if (inputEl) inputEl.value = currentTicket.id;

  renderCivicWallet();

  if (statusPill) {
    statusPill.className = `ticket-status-pill status-${currentTicket.status.replace('_', '')}`;
    statusPill.textContent = currentTicket.status === 'in_progress' ? 'IN PROGRESS' : currentTicket.status.toUpperCase();
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
        <span class="step-title-gu">${s.labelGu}</span>
        <span class="step-title-en">${s.label}</span>
        <span class="step-date">${s.date}</span>
      </div>
    `).join('');

    let completedCount = currentTicket.steps.filter(s => s.completed).length;
    let pct = Math.min(100, Math.round((completedCount / currentTicket.steps.length) * 100));
    if (fillBar) fillBar.style.width = `${pct}%`;
  }

  const myTicketsList = document.getElementById('desktop-my-tickets-list');
  if (myTicketsList) {
    myTicketsList.innerHTML = appState.complaints.map(c => `
      <div class="my-ticket-item-row ${c.id === appState.selectedOfficerTicketId ? 'active' : ''}" onclick="selectDesktopTicket('${c.id}')">
        <div>
          <div class="item-id-type">${c.shortId || c.id.split('-').pop()} ${c.categoryName}</div>
          <div style="font-size:0.75rem; color:#64748b;">${c.location}</div>
        </div>
        <span class="item-status-tag ${c.status === 'in_progress' ? 'live' : c.status === 'need_info' ? 'needinfo' : 'done'}">
          ${c.status === 'in_progress' ? 'Live' : c.status === 'need_info' ? 'Need Info' : 'Done'}
        </span>
      </div>
    `).join('');
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
  if (!val) return;
  const found = appState.complaints.find(c => c.id.includes(val) || c.id.endsWith(val));
  if (found) {
    selectDesktopTicket(found.id);
  } else {
    alert(`Complaint ID "${val}" not found.`);
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
  e.preventDefault();
  const location = document.getElementById('dt-location-input')?.value.trim() || "CG Road, Navrangpura";
  const note = document.getElementById('dt-description-input')?.value.trim() || "Observed civic hazard";
  const cityCode = appState.activeCityId || 'AMC';
  const typeConfig = window.GUJARAT_CIVIC_DATA.issueTypes.find(t => t.id === appState.selectedIssueType) || window.GUJARAT_CIVIC_DATA.issueTypes[0];

  const depositSource = document.querySelector('input[name="dt_deposit_source"]:checked')?.value || 'wallet';
  const randomId = Math.floor(10000 + Math.random() * 90000);
  const newTicketId = `GJ-${cityCode}-2026-${randomId}`;
  const paymentMethodName = depositSource === 'wallet' ? 'Civic Wallet' : (appState.selectedEscrowGateway || 'Online UPI');

  if (depositSource === 'wallet') {
    if (Number(appState.citizenWallet.balance) < 50) {
      alert(`Insufficient Civic Wallet balance (Current: ₹${Number(appState.citizenWallet.balance).toFixed(2)}).\nPlease pay using an online payment option (Paytm, FamPay, PhonePe, UPI, Card) or recharge your wallet.`);
      toggleDtDepositMethod('online');
      const radioOnline = document.querySelector('input[name="dt_deposit_source"][value="online"]');
      if (radioOnline) radioOnline.checked = true;
      return;
    }

    // Deduct ₹50 from wallet
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

    showCivicaToast(`🛡️ ₹50 Security Deposit held from Civic Wallet. 100% Refundable upon inspection.`);
  } else {
    // Paid via Online Gateway
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

    showCivicaToast(`🛡️ Paid ₹50 via ${paymentMethodName}. Held in Municipal Escrow.`);
  }

  // Create new complaint
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
    distance: "50 m",
    ward: "Ward 7",
    zone: "West Zone",
    agency: `${cityCode} Maintenance Operations`,
    status: "new",
    depositAmount: 50.00,
    depositStatus: "held",
    depositMethod: paymentMethodName,
    depositTxId: `ESC-${randomId}`,
    filedDate: "Today",
    dueDate: "Tomorrow",
    slaDate: "Tomorrow",
    assignedCrew: "Pending Assignment",
    note: `${note} — ₹50 anti-spam security deposit held via ${paymentMethodName}. Awaiting municipal inspection.`,
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
  renderDesktopMyTickets();
  renderOfficerDashboard();
  renderOfficerInbox('all');
  renderOfficerTakeAction(newTicketId);

  // Jump to tracking tab to display the newly filed ticket!
  viewComplaintInTrack(newTicketId);
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

window.openContactModal = function() {
  const modal = document.getElementById('contact-modal');
  if (modal) modal.classList.add('active');
};

window.closeContactModal = function() {
  const modal = document.getElementById('contact-modal');
  if (modal) modal.classList.remove('active');
};

window.openWalletModal = function() {
  switchDashboardMode('citizen-desktop');
  switchDesktopTab('wallet');
};

/* ==========================================================================
   CIVICA AI INTELLIGENCE ENGINE (GEMINI & CHATGPT MULTI-CAPABLE CIVIC MODEL)
   ========================================================================== */

function generateCivicAiResponse(rawPrompt) {
  const prompt = (rawPrompt || '').toLowerCase().trim();
  const currentTicket = appState.complaints.find(c => c.id === 'GJ-AMC-2026-18492') || appState.complaints[0] || { id: 'GJ-AMC-2026-18492' };
  
  // 1. Gujarati Language Check
  const isGujarati = /[\u0A80-\u0AFF]/.test(rawPrompt) || prompt.includes('gujarati') || prompt.includes('ગુજરાતી') || prompt.includes('kem') || prompt.includes('kyare');

  if (isGujarati) {
    if (prompt.includes('લાઇટ') || prompt.includes('લાઈટ') || prompt.includes('fixture') || prompt.includes('streetlight') || prompt.includes('સ્થિતિ') || prompt.includes('ફરિયાદ')) {
      return `
        <p><strong>ફરિયાદ વિગત (ટિકિટ: ${currentTicket.id}):</strong></p>
        <p>આપની શેરી લાઈટ ફરિયાદ (CG Road, Navrangpura) AMC વિદ્યુત વિભાગ હેઠળ પ્રગતિમાં છે.</p>
        <ul>
          <li><strong>નિરીક્ષક અધિકારી:</strong> R. Patel (AMC West Zone)</li>
          <li><strong>રિપ્લેસમેન્ટ ફિક્સ્ચર:</strong> 19 સપ્ટેમ્બરના રોજ નવું 90W LED ફિક્સ્ચર ઇન્સ્ટોલ કરવામાં આવશે.</li>
          <li><strong>સુરક્ષા ડિપોઝિટ:</strong> આપની ₹50 એસ્ક્રો ડિપોઝિટ સુરક્ષિત છે અને કામ પૂર્ણ થતાં જ આપના નાગરિક વૉલેટમાં ૧૦૦% રિફંડ થઈ જશે.</li>
          <li><strong>SMS અપડેટ:</strong> લાઈટ ચાલુ થતાં આપને ગુજરાતીમાં કન્ફર્મેશન SMS મોકલવામાં આવશે.</li>
        </ul>
      `;
    }
    if (prompt.includes('રિફંડ') || prompt.includes('પૈસા') || prompt.includes('વૉલેટ') || prompt.includes('ડિપોઝિટ') || prompt.includes('escrow') || prompt.includes('50')) {
      return `
        <p><strong>₹50 એસ્ક્રો સુરક્ષા ડિપોઝિટ અને રિફંડ નીતિ:</strong></p>
        <ul>
          <li><strong>ડિપોઝિટ શા માટે?</strong> નકલી અથવા મજાકની ફરિયાદો રોકવા માટે AMC દ્વારા ₹50 ની રિફંડેબલ ડિપોઝિટ લેવામાં આવે છે.</li>
          <li><strong>રિફંડ ક્યારે મળશે?</strong> જ્યારે AMC અધિકારી સ્થળ તપાસ કરીને ફરિયાદ સાચી હોવાની પુષ્ટિ કરે છે, ત્યારે પૂરા ₹50 આપના સિવિક વૉલેટમાં તાત્કાલિક જમા થઈ જાય છે.</li>
          <li><strong>વર્તમાન બેલેન્સ:</strong> આપના વૉલેટમાં અત્યારે <strong>₹${Number(appState.citizenWallet.balance).toFixed(2)}</strong> ઉપલબ્ધ છે.</li>
        </ul>
      `;
    }
    return `
      <p><strong>નમસ્તે! હું સિવિકા AI (Civica AI) સહાયક છું.</strong></p>
      <p>હું અમદાવાદ મહાનગરપાલિકા (AMC) અને ગુજરાત સ્માર્ટ સિટી સેવાઓ સાથે સીધો જોડાયેલો છું. આપ નીચે મુજબની કોઈપણ માહિતી પૂછી શકો છો:</p>
      <ul>
        <li>કોઈપણ ફરિયાદની વર્તમાન સ્થિતિ અને સમારકામનો સમય</li>
        <li>₹50 સિક્યોરિટી એસ્ક્રો ડિપોઝિટ અને રિફંડ પ્રક્રિયા</li>
        <li>બીઆરટીએસ (BRTS) જનમાર્ગ અને અમદાવાદ મેટ્રો સમયપત્રક</li>
        <li>વોર્ડ 7 (નવરંગપુરા) ના કંટ્રોલ રૂમ અને આપાતકાલીન હેલ્પલાઇન (155303)</li>
      </ul>
    `;
  }

  // 2. Ticket / Streetlight specific doubts
  if (prompt.includes('fixture') || prompt.includes('install') || prompt.includes('when') || prompt.includes('streetlight') || prompt.includes('arrive') || prompt.includes('18492') || prompt.includes('timing') || prompt.includes('status')) {
    return `
      <p><strong>Live Engineering Status for Ticket <code>${currentTicket.id}</code>:</strong></p>
      <p>Here are the verified operational details from the AMC Street Lighting Control Room:</p>
      <ul>
        <li><strong>Location:</strong> CG Road, near Law Garden Crossing (Navrangpura, Ward 7).</li>
        <li><strong>Status:</strong> <span class="ticket-status-pill status-inprogress">IN PROGRESS</span></li>
        <li><strong>Latest Inspection:</strong> Officer R. Patel and Street Lighting Crew 14 inspected the pole and diagnosed a blown internal ballast and damaged LED fixture.</li>
        <li><strong>Expected Completion:</strong> The heavy-duty 90W LED replacement fixture is scheduled for installation on <strong>19 Sep 2026</strong>.</li>
        <li><strong>Notifications:</strong> You will receive an automated Gujarati/English SMS confirmation as soon as illumination sensors confirm active power on the circuit.</li>
      </ul>
    `;
  }

  // 3. Escrow & Refund doubts
  if (prompt.includes('refund') || prompt.includes('50') || prompt.includes('escrow') || prompt.includes('deposit') || prompt.includes('fake') || prompt.includes('prank') || prompt.includes('money') || prompt.includes('wallet')) {
    return `
      <p><strong>Civica 100% Refundable Anti-Spam Escrow Policy:</strong></p>
      <p>Under Section 44(A) of the Urban Civic Safety Act, municipal response systems require a refundable ₹50 security deposit held in municipal escrow:</p>
      <ul>
        <li><strong>Purpose:</strong> Eliminates spam, prank calls, and duplicate bots so AMC response crews can reach critical infrastructure emergencies faster.</li>
        <li><strong>Refund Trigger:</strong> Once the assigned municipal officer inspects the location and confirms the civic defect is authentic, <strong>100% of the ₹50 deposit is instantly credited back to your Civic Wallet</strong>.</li>
        <li><strong>Current Wallet Balance:</strong> <strong>₹${Number(appState.citizenWallet.balance).toFixed(2)}</strong>.</li>
        <li><strong>Zero Cost to Citizens:</strong> Genuine citizens who report real issues never lose money; the escrow ensures priority municipal dispatch without financial deduction.</li>
      </ul>
    `;
  }

  // 4. Assigned Officer & Crew doubts
  if (prompt.includes('who') || prompt.includes('officer') || prompt.includes('crew') || prompt.includes('engineer') || prompt.includes('assigned') || prompt.includes('contact')) {
    return `
      <p><strong>Assigned Municipal Operations Team (Ward 7):</strong></p>
      <ul>
        <li><strong>Supervising Officer:</strong> Municipal Officer <strong>R. Patel</strong> (AMC Electrical & Works, West Zone).</li>
        <li><strong>Field Repair Unit:</strong> <strong>Street Lighting Crew 14 — West Zone</strong>.</li>
        <li><strong>Zonal Control Room:</strong> AMC West Zone Municipal Office, Usmanpura / Navrangpura.</li>
        <li><strong>Helpline:</strong> AMC Central Grievance Line: <code>155303</code> / WhatsApp Support active.</li>
      </ul>
    `;
  }

  // 5. BRTS / Metro & Transit doubts
  if (prompt.includes('brts') || prompt.includes('metro') || prompt.includes('bus') || prompt.includes('transit') || prompt.includes('route') || prompt.includes('train')) {
    return `
      <p><strong>Live Transit Intelligence near Navrangpura & CG Road:</strong></p>
      <ul>
        <li><strong>Janmarg BRTS Green Line:</strong> RTO Circle ↔ Maninagar via CG Road. Next bus arrives in <strong>3 minutes</strong> (On Time).</li>
        <li><strong>Ahmedabad Metro (North-South Line):</strong> APMC ↔ Old High Court ↔ Motera Stadium. Frequency: <strong>every 6 minutes</strong>.</li>
        <li><strong>Ahmedabad Metro (East-West Line):</strong> Thaltej ↔ Kalupur Railway Station ↔ Vastral Gam. Operating smoothly with <strong>8-minute headway</strong>.</li>
        <li><strong>AMTS Route 42:</strong> Navrangpura Bus Stand ↔ Paldi. Next feeder departure in <strong>5 minutes</strong>.</li>
      </ul>
    `;
  }

  // 6. Water, Potholes, Garbage & Emergency doubts
  if (prompt.includes('water') || prompt.includes('pothole') || prompt.includes('garbage') || prompt.includes('drain') || prompt.includes('monsoon') || prompt.includes('leak')) {
    return `
      <p><strong>AMC Fast Action Protocols:</strong></p>
      <ul>
        <li><strong>Road Potholes:</strong> AMC Quick Cold-Mix Asphalt units dispatch within 24 hours of complaint confirmation.</li>
        <li><strong>Waterlogging / Dewatering:</strong> High-capacity dewatering pumps stationed at Law Garden underpass and Mithakhali underpass.</li>
        <li><strong>Contaminated Water / Leakage:</strong> Urgent priority line: Ward 7 Hydraulic Engineering dispatch attends within 4 hours.</li>
        <li><strong>Door-to-Door Waste Collection:</strong> AMC Swachhata vans operate daily from 07:00 AM to 11:30 AM across Navrangpura sectors.</li>
      </ul>
    `;
  }

  // 7. General Gemini / ChatGPT style conversational fallback
  return `
    <p><strong>Civica AI Smart City Response:</strong></p>
    <p>Thank you for your question regarding <em>"${rawPrompt.replace(/</g, '&lt;')}"</em>.</p>
    <p>As the AI assistant for Ahmedabad Smart City Operations and Gujarat Civic Tech, here is the relevant guidance:</p>
    <ul>
      <li><strong>Civic Service Standard:</strong> All municipal services in Ward 7 follow strict citizen service delivery benchmarks under the Gujarat Citizen Service Charter.</li>
      <li><strong>Escrow Protection:</strong> Any issues filed are backed by automated ₹50 escrow verification, ensuring zero prank spam and rapid resolution.</li>
      <li><strong>Need Direct Help?</strong> You can track live tickets in the <strong>Track complaint</strong> tab or speak to the 24x7 AMC Municipal Helpline at <code>155303</code>.</li>
    </ul>
    <p>Feel free to ask any further doubts or ask in Gujarati (ગુજરાતી)!</p>
  `;
}

// Embedded AI Copilot on Ticket Card
window.handleAiChatSubmit = function(e) {
  if (e) e.preventDefault();
  const input = document.getElementById('ai-question-input');
  const question = input?.value.trim();
  if (!question) return;

  const thread = document.getElementById('ai-chat-messages');
  if (!thread) return;

  // Append user bubble
  const userMsg = document.createElement('div');
  userMsg.className = 'ai-msg ai-msg-user';
  userMsg.innerHTML = `
    <div class="ai-avatar-user">You</div>
    <div class="ai-bubble"><p>${question.replace(/</g, '&lt;')}</p></div>
  `;
  thread.appendChild(userMsg);
  input.value = '';
  thread.scrollTop = thread.scrollHeight;

  // Add typing placeholder
  const botMsg = document.createElement('div');
  botMsg.className = 'ai-msg ai-msg-bot';
  botMsg.innerHTML = `
    <div class="ai-avatar-gemini">✨</div>
    <div class="ai-bubble"><p style="color:#6366f1; font-style:italic;">✨ Civica AI is analyzing AMC records...</p></div>
  `;
  thread.appendChild(botMsg);
  thread.scrollTop = thread.scrollHeight;

  // Simulate instant intelligent inference
  setTimeout(() => {
    const responseHtml = generateCivicAiResponse(question);
    botMsg.innerHTML = `
      <div class="ai-avatar-gemini">✨</div>
      <div class="ai-bubble">${responseHtml}</div>
    `;
    thread.scrollTop = thread.scrollHeight;
  }, 450);
};

window.askAiPrompt = function(promptText) {
  const input = document.getElementById('ai-question-input');
  if (input) {
    input.value = promptText;
    handleAiChatSubmit();
  }
};

// Fullscreen AI Assistant Tab
window.handleFullscreenAiSubmit = function(e) {
  if (e) e.preventDefault();
  const input = document.getElementById('ai-fullscreen-input');
  const question = input?.value.trim();
  if (!question) return;

  const thread = document.getElementById('ai-fullscreen-messages');
  if (!thread) return;

  // Append user bubble
  const userMsg = document.createElement('div');
  userMsg.className = 'ai-msg ai-msg-user';
  userMsg.innerHTML = `
    <div class="ai-avatar-user">You</div>
    <div class="ai-bubble"><p>${question.replace(/</g, '&lt;')}</p></div>
  `;
  thread.appendChild(userMsg);
  input.value = '';
  thread.scrollTop = thread.scrollHeight;

  // Add typing placeholder
  const botMsg = document.createElement('div');
  botMsg.className = 'ai-msg ai-msg-bot';
  botMsg.innerHTML = `
    <div class="ai-avatar-gemini">✨</div>
    <div class="ai-bubble"><p style="color:#6366f1; font-style:italic;">✨ Civica AI is reasoning...</p></div>
  `;
  thread.appendChild(botMsg);
  thread.scrollTop = thread.scrollHeight;

  setTimeout(() => {
    const responseHtml = generateCivicAiResponse(question);
    botMsg.innerHTML = `
      <div class="ai-avatar-gemini">✨</div>
      <div class="ai-bubble">${responseHtml}</div>
    `;
    thread.scrollTop = thread.scrollHeight;
  }, 450);
};

window.askFullscreenAiPrompt = function(promptText) {
  const input = document.getElementById('ai-fullscreen-input');
  if (input) {
    input.value = promptText;
    handleFullscreenAiSubmit();
  }
};

window.clearAiChat = function() {
  const thread1 = document.getElementById('ai-chat-messages');
  const thread2 = document.getElementById('ai-fullscreen-messages');
  const defaultHtml = `
    <div class="ai-msg ai-msg-bot">
      <div class="ai-avatar-gemini">✨</div>
      <div class="ai-bubble">
        <p><strong>નમસ્તે! I am Civica AI</strong>, your real-time intelligent civic copilot for Ahmedabad Municipal Corporation (AMC).</p>
        <p>I have live visibility into Ticket <code>GJ-AMC-2026-18492</code>, your ₹50 security escrow, and AMC repair dispatch. Ask me any doubt or question below!</p>
      </div>
    </div>
  `;
  if (thread1) thread1.innerHTML = defaultHtml;
  if (thread2) thread2.innerHTML = defaultHtml;
  showCivicaToast('✨ Chat history reset to fresh state.');
};
