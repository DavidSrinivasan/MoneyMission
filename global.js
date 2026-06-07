/* ================================================
   MONEY MISSION - Global JavaScript
   Utilities, Background Animation, Toast, etc.
   ================================================ */

// ---- Money Background Animation ----
function initMoneyBackground() {
  const bg = document.getElementById('money-bg');
  if (!bg) return;

  // Pure CSS shapes — no emojis, no text
  // Types: circle coin, rect note, diamond
  const types = ['coin', 'note', 'diamond', 'coin', 'note', 'coin'];
  const count = window.innerWidth < 600 ? 12 : 22;

  for (let i = 0; i < count; i++) {
    const el = document.createElement('div');
    const type = types[i % types.length];
    el.className = 'money-float money-float--' + type;

    const size    = 10 + Math.random() * 22;
    const left    = Math.random() * 100;
    const dur     = 14 + Math.random() * 22;
    const delay   = -(Math.random() * dur);
    const opacity = 0.06 + Math.random() * 0.1;

    el.style.cssText = [
      'width:'  + size + 'px',
      'height:' + (type === 'note' ? size * 0.65 : size) + 'px',
      'left:'   + left + '%',
      'animation-duration:' + dur + 's',
      'animation-delay:'    + delay + 's',
      '--op:' + opacity,
      '--rot:' + (Math.random() * 720 - 360) + 'deg',
    ].join(';');

    bg.appendChild(el);
  }
}

// ---- Toast Notifications ----
function showToast(message, type = 'info', duration = 3500) {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    document.body.appendChild(container);
  }

  const icons = { success: '[Done]', error: '[X]', info: '', warning: '!' };
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `<span class="toast-icon">${icons[type] || icons.info}</span><span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('hide');
    toast.addEventListener('animationend', () => toast.remove(), { once: true });
  }, duration);
}

// ---- Modal helpers ----
function openModal(id) {
  const m = document.getElementById(id);
  if (m) { m.classList.add('active'); document.body.style.overflow = 'hidden'; }
}
function closeModal(id) {
  const m = document.getElementById(id);
  if (m) { m.classList.remove('active'); document.body.style.overflow = ''; }
}
// Close modal on overlay click
document.addEventListener('click', e => {
  if (e.target.classList.contains('modal-overlay')) {
    e.target.classList.remove('active');
    document.body.style.overflow = '';
  }
});

// ---- LocalStorage helpers ----
const store = {
  get(key, fallback = null) {
    try { const v = localStorage.getItem('mm_' + key); return v ? JSON.parse(v) : fallback; }
    catch { return fallback; }
  },
  set(key, val) {
    try {
      localStorage.setItem('mm_' + key, JSON.stringify(val));
      // Mirror 'user' to mm_user for direct reads
      if (key === 'user') localStorage.setItem('mm_user', JSON.stringify(val));
    } catch {}
  },
  remove(key) { try { localStorage.removeItem('mm_' + key); } catch {} }
};

// ---- Auth helpers ----
function isLoggedIn() {
  try { return !!localStorage.getItem('mm_user'); } catch(e) { return false; }
}
function getUser() {
  try {
    var v = localStorage.getItem('mm_user');
    return v ? JSON.parse(v) : { name: 'User', email: '' };
  } catch(e) { return { name: 'User', email: '' }; }
};
  } catch(e) { return {}; }
}

function guardRoute() {
  var publicPages = ['index.html', 'login.html', 'signup.html', ''];
  var path = window.location.pathname.split('/').pop();
  if (publicPages.indexOf(path) === -1 && !isLoggedIn()) {
    var url = window.location.protocol + '//' +
              window.location.host +
              window.location.pathname.replace(/\/[^\/]*$/, '/') +
              'login.html';
    window.location.replace(url);
  }
}
}

// ---- Sidebar mobile toggle ----
function initSidebar() {
  const sidebar  = document.querySelector('.sidebar');
  const overlay  = document.querySelector('.sidebar-overlay');
  const hamburger = document.querySelector('.hamburger');
  if (!sidebar) return;

  hamburger?.addEventListener('click', () => {
    sidebar.classList.toggle('open');
    overlay?.classList.toggle('active');
  });
  overlay?.addEventListener('click', () => {
    sidebar.classList.remove('open');
    overlay?.classList.remove('active');
  });
}

// ---- Format currency ----
function formatCurrency(amount, currency = '₹') {
  return currency + Number(amount).toLocaleString('en-IN', { minimumFractionDigits: 0 });
}

// ---- Format date ----
function formatDate(dateStr) {
  if (!dateStr) return '—';
  return new Date(dateStr).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
}

// ---- Animate number count-up ----
function countUp(el, target, duration = 1400, prefix = '', suffix = '') {
  const start = 0;
  const startTime = performance.now();
  function step(now) {
    const progress = Math.min((now - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const val = Math.round(start + eased * (target - start));
    el.textContent = prefix + val.toLocaleString('en-IN') + suffix;
    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

// ---- Animate progress bars ----
function animateProgress(el, pct) {
  setTimeout(() => { el.style.width = Math.min(pct, 100) + '%'; }, 100);
}

// ---- Intersection Observer for reveal ----
function initReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.12 });
  els.forEach(el => obs.observe(el));
}

// ---- Active nav item ----
function setActiveNav() {
  const path = window.location.pathname.split('/').pop();
  document.querySelectorAll('.nav-item[data-page]').forEach(item => {
    item.classList.toggle('active', item.dataset.page === path);
  });
}

// ---- Init on DOM ready ----
document.addEventListener('DOMContentLoaded', () => {
  initMoneyBackground();
  initReveal();
  initSidebar();
  setActiveNav();
  guardRoute();
});
