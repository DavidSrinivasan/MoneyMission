/* ================================================
   MONEY MISSION – Shared Layout JS
   Injects sidebar + topbar into app pages
   ================================================ */

function renderLayout(activePage, pageTitle) {
  const user = store.get('user', { name: 'User', email: 'user@example.com' });
  const initials = (user.name || 'U').split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);

  const navItems = [
    { icon: '🏠', label: 'Dashboard',      page: 'dashboard.html',          section: null },
    { icon: '📅', label: 'Daily Goals',    page: 'planner.html#daily',      section: 'daily' },
    { icon: '📆', label: 'Weekly Goals',   page: 'planner.html#weekly',     section: 'weekly' },
    { icon: '🗓️', label: 'Monthly Goals',  page: 'planner.html#monthly',    section: 'monthly' },
    { icon: '📊', label: 'Yearly Goals',   page: 'planner.html#yearly',     section: 'yearly' },
    { icon: '🎯', label: 'Goals',          page: 'goals.html',              section: null },
    { icon: '💰', label: 'Savings',        page: 'savings.html',            section: null },
    { icon: '🔔', label: 'Reminders',      page: 'reminders.html',          section: null },
    { icon: '📈', label: 'Statistics',     page: 'statistics.html',         section: null },
    { icon: '👤', label: 'Profile',        page: 'profile.html',            section: null },
  ];

  const navHTML = navItems.map(item => {
    const isActive = activePage === item.page || activePage === item.page.split('#')[0];
    return `
    <div class="nav-item${isActive ? ' active' : ''}"
         data-page="${item.page.split('#')[0]}"
         onclick="navigate('${item.page}')">
      <span class="nav-icon">${item.icon}</span>
      <span>${item.label}</span>
    </div>`;
  }).join('');

  const layoutHTML = `
    <div class="sidebar-overlay" id="sidebarOverlay"></div>
    <aside class="sidebar" id="sidebar">
      <div class="sidebar-logo">
        <div class="logo-icon">💰</div>
        <div class="logo-text">Money<span>Mission</span></div>
      </div>
      <nav class="sidebar-nav">
        <div class="nav-section-label">Main Menu</div>
        ${navHTML}
      </nav>
      <div class="sidebar-footer">
        <div class="nav-item" onclick="logout()" style="color:var(--red);">
          <span class="nav-icon">🚪</span>
          <span>Logout</span>
        </div>
      </div>
    </aside>
    <header class="topbar">
      <div class="topbar-left">
        <button class="hamburger" id="hamburger" aria-label="Menu">☰</button>
        <div class="topbar-title">${pageTitle}</div>
      </div>
      <div class="topbar-right">
        <div class="topbar-btn" title="Notifications" onclick="navigate('reminders.html')">
          🔔<span class="notif-dot"></span>
        </div>
        <div class="topbar-btn" title="Statistics" onclick="navigate('statistics.html')">📊</div>
        <div class="avatar" title="${user.name}" onclick="navigate('profile.html')">${initials}</div>
      </div>
    </header>
  `;

  // Insert after body open
  const target = document.querySelector('.app-layout') || document.body;
  target.insertAdjacentHTML('afterbegin', layoutHTML);
}

function navigate(page) {
  window.location.href = page;
}

function logout() {
  store.remove('user');
  showToast('Logged out. See you soon! 👋', 'info', 2000);
  setTimeout(() => { window.location.href = 'index.html'; }, 800);
}
