/* ================================================
   MONEY MISSION - Global Styles
   Premium Dark Fintech Theme
   ================================================ */

@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300&display=swap');

/* ---- CSS Variables ---- */
:root {
  --bg-deep:       #080c12;
  --bg-dark:       #0d1320;
  --bg-card:       rgba(255,255,255,0.04);
  --bg-card-hover: rgba(255,255,255,0.07);
  --border:        rgba(255,255,255,0.08);
  --border-glow:   rgba(212,175,55,0.35);

  --gold:          #d4af37;
  --gold-light:    #f0cc5a;
  --gold-dim:      rgba(212,175,55,0.15);
  --green:         #22d97a;
  --green-dim:     rgba(34,217,122,0.15);
  --red:           #ff5a5a;
  --blue:          #4ea8de;

  --text-primary:  #f0f2f7;
  --text-secondary:#9aa0b4;
  --text-muted:    #545e78;

  --font-display:  'Syne', sans-serif;
  --font-body:     'DM Sans', sans-serif;

  --radius-sm:  8px;
  --radius-md:  14px;
  --radius-lg:  22px;
  --radius-xl:  32px;

  --shadow-card: 0 8px 32px rgba(0,0,0,0.5);
  --shadow-glow: 0 0 40px rgba(212,175,55,0.12);

  --sidebar-w: 240px;
  --topbar-h:  64px;

  --transition: 0.25s cubic-bezier(0.4,0,0.2,1);
}

/* ---- Reset ---- */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body {
  background: var(--bg-deep);
  color: var(--text-primary);
  font-family: var(--font-body);
  font-size: 15px;
  line-height: 1.6;
  overflow-x: hidden;
  min-height: 100vh;
}
a { color: inherit; text-decoration: none; }
button { cursor: pointer; border: none; background: none; font-family: inherit; }
input, textarea, select {
  font-family: inherit;
  font-size: inherit;
  color: var(--text-primary);
  background: transparent;
  border: none;
  outline: none;
}
img { max-width: 100%; display: block; }
ul { list-style: none; }

/* ---- Scrollbar ---- */
::-webkit-scrollbar { width: 6px; height: 6px; }
::-webkit-scrollbar-track { background: var(--bg-dark); }
::-webkit-scrollbar-thumb { background: rgba(212,175,55,0.3); border-radius: 3px; }
::-webkit-scrollbar-thumb:hover { background: var(--gold); }

/* ================================================
   FLOATING MONEY BACKGROUND ANIMATION
   ================================================ */
#money-bg {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
}

.money-particle {
  position: absolute;
  font-size: 24px;
  opacity: 0;
  animation: floatMoney linear infinite;
  user-select: none;
  will-change: transform, opacity;
}

@keyframes floatMoney {
  0%   { transform: translateY(110vh) rotate(0deg)   scale(0.7); opacity: 0; }
  5%   { opacity: var(--op); }
  90%  { opacity: var(--op); }
  100% { transform: translateY(-15vh) rotate(var(--rot)) scale(1.1); opacity: 0; }
}

/* ================================================
   GLASSMORPHISM CARD
   ================================================ */
.glass {
  background: var(--bg-card);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
}
.glass:hover { border-color: var(--border-glow); }

/* ================================================
   BUTTONS
   ================================================ */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 28px;
  border-radius: 50px;
  font-family: var(--font-display);
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.5px;
  transition: var(--transition);
  white-space: nowrap;
}
.btn-gold {
  background: linear-gradient(135deg, var(--gold), var(--gold-light));
  color: #0a0e18;
  box-shadow: 0 4px 20px rgba(212,175,55,0.3);
}
.btn-gold:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(212,175,55,0.45);
}
.btn-outline {
  border: 1.5px solid var(--border-glow);
  color: var(--gold);
  background: var(--gold-dim);
}
.btn-outline:hover {
  background: rgba(212,175,55,0.22);
  transform: translateY(-2px);
}
.btn-ghost {
  color: var(--text-secondary);
  background: var(--bg-card);
  border: 1px solid var(--border);
}
.btn-ghost:hover {
  background: var(--bg-card-hover);
  color: var(--text-primary);
}
.btn-danger {
  background: rgba(255,90,90,0.15);
  border: 1px solid rgba(255,90,90,0.3);
  color: var(--red);
}
.btn-danger:hover { background: rgba(255,90,90,0.25); }
.btn-green {
  background: var(--green-dim);
  border: 1px solid rgba(34,217,122,0.3);
  color: var(--green);
}
.btn-green:hover { background: rgba(34,217,122,0.22); }
.btn-sm { padding: 8px 18px; font-size: 13px; }
.btn-icon {
  width: 38px; height: 38px;
  padding: 0;
  border-radius: 50%;
}

/* ================================================
   FORM ELEMENTS
   ================================================ */
.form-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.form-label {
  font-size: 13px;
  font-weight: 500;
  color: var(--text-secondary);
  letter-spacing: 0.3px;
}
.form-control {
  width: 100%;
  padding: 12px 16px;
  background: rgba(255,255,255,0.05);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  color: var(--text-primary);
  font-size: 14px;
  transition: var(--transition);
}
.form-control:focus {
  border-color: var(--gold);
  background: rgba(212,175,55,0.05);
  box-shadow: 0 0 0 3px rgba(212,175,55,0.1);
}
.form-control::placeholder { color: var(--text-muted); }
.input-wrap { position: relative; }
.input-wrap .form-control { padding-right: 44px; }
.input-icon {
  position: absolute;
  right: 14px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-muted);
  cursor: pointer;
  transition: color var(--transition);
  font-size: 16px;
  background: none;
  border: none;
}
.input-icon:hover { color: var(--gold); }

/* ================================================
   BADGES
   ================================================ */
.badge {
  display: inline-flex;
  align-items: center;
  padding: 3px 10px;
  border-radius: 50px;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}
.badge-gold   { background: var(--gold-dim);  color: var(--gold); }
.badge-green  { background: var(--green-dim); color: var(--green); }
.badge-red    { background: rgba(255,90,90,0.15); color: var(--red); }
.badge-blue   { background: rgba(78,168,222,0.15); color: var(--blue); }

/* ================================================
   PROGRESS BAR
   ================================================ */
.progress-wrap {
  width: 100%;
  height: 6px;
  background: rgba(255,255,255,0.08);
  border-radius: 50px;
  overflow: hidden;
}
.progress-fill {
  height: 100%;
  border-radius: 50px;
  background: linear-gradient(90deg, var(--gold), var(--gold-light));
  transition: width 1s cubic-bezier(0.4,0,0.2,1);
}
.progress-fill.green { background: linear-gradient(90deg, #22d97a, #5effa8); }
.progress-fill.blue  { background: linear-gradient(90deg, #4ea8de, #80cfff); }
.progress-fill.red   { background: linear-gradient(90deg, #ff5a5a, #ff8c8c); }

/* ================================================
   SECTION HEADINGS
   ================================================ */
.section-tag {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 5px 14px;
  background: var(--gold-dim);
  border: 1px solid rgba(212,175,55,0.2);
  border-radius: 50px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 16px;
}
.section-title {
  font-family: var(--font-display);
  font-size: clamp(28px, 4vw, 48px);
  font-weight: 700;
  line-height: 1.15;
  color: var(--text-primary);
}
.section-title span { color: var(--gold); }
.section-sub {
  font-size: 16px;
  color: var(--text-secondary);
  max-width: 520px;
  line-height: 1.7;
  margin-top: 12px;
}

/* ================================================
   TOAST / NOTIFICATION
   ================================================ */
#toast-container {
  position: fixed;
  bottom: 28px;
  right: 28px;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.toast {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 20px;
  background: rgba(20,26,40,0.95);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  backdrop-filter: blur(20px);
  font-size: 14px;
  box-shadow: 0 8px 30px rgba(0,0,0,0.4);
  animation: toastIn 0.35s cubic-bezier(0.34,1.56,0.64,1) forwards;
  min-width: 260px;
}
.toast.hide { animation: toastOut 0.25s ease forwards; }
.toast-icon { font-size: 18px; }
.toast.success { border-color: rgba(34,217,122,0.3); }
.toast.success .toast-icon { color: var(--green); }
.toast.error   { border-color: rgba(255,90,90,0.3); }
.toast.error   .toast-icon { color: var(--red); }
.toast.info    { border-color: var(--border-glow); }
.toast.info    .toast-icon { color: var(--gold); }
@keyframes toastIn  { from { opacity:0; transform: translateX(50px); } to { opacity:1; transform: translateX(0); } }
@keyframes toastOut { from { opacity:1; transform: translateX(0);    } to { opacity:0; transform: translateX(50px); } }

/* ================================================
   MODAL
   ================================================ */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.7);
  backdrop-filter: blur(4px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  opacity: 0;
  pointer-events: none;
  transition: opacity var(--transition);
}
.modal-overlay.active { opacity: 1; pointer-events: all; }
.modal {
  width: 100%;
  max-width: 480px;
  padding: 32px;
  animation: modalIn 0.3s cubic-bezier(0.34,1.56,0.64,1);
}
@keyframes modalIn {
  from { transform: scale(0.9) translateY(20px); opacity: 0; }
  to   { transform: scale(1)   translateY(0);    opacity: 1; }
}
.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
}
.modal-title {
  font-family: var(--font-display);
  font-size: 20px;
  font-weight: 700;
}
.modal-close {
  width: 32px; height: 32px;
  border-radius: 50%;
  background: var(--bg-card);
  border: 1px solid var(--border);
  color: var(--text-secondary);
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: var(--transition);
}
.modal-close:hover { color: var(--text-primary); background: var(--bg-card-hover); }

/* ================================================
   DASHBOARD LAYOUT
   ================================================ */
.app-layout {
  display: flex;
  min-height: 100vh;
  position: relative;
  z-index: 1;
}

/* Sidebar */
.sidebar {
  width: var(--sidebar-w);
  min-height: 100vh;
  background: rgba(8,12,18,0.9);
  border-right: 1px solid var(--border);
  backdrop-filter: blur(20px);
  position: fixed;
  top: 0; left: 0;
  z-index: 100;
  display: flex;
  flex-direction: column;
  transition: transform var(--transition);
}
.sidebar-logo {
  padding: 24px 20px 20px;
  border-bottom: 1px solid var(--border);
  display: flex;
  align-items: center;
  gap: 10px;
}
.sidebar-logo .logo-icon {
  width: 36px; height: 36px;
  background: linear-gradient(135deg, var(--gold), var(--gold-light));
  border-radius: 10px;
  display: flex; align-items: center; justify-content: center;
  font-size: 18px;
  flex-shrink: 0;
}
.sidebar-logo .logo-text {
  font-family: var(--font-display);
  font-size: 18px;
  font-weight: 800;
  color: var(--text-primary);
}
.sidebar-logo .logo-text span { color: var(--gold); }

.sidebar-nav { flex: 1; padding: 16px 12px; overflow-y: auto; }
.nav-section-label {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: var(--text-muted);
  padding: 12px 8px 6px;
}
.nav-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  border-radius: var(--radius-sm);
  color: var(--text-secondary);
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: var(--transition);
  margin-bottom: 2px;
  white-space: nowrap;
}
.nav-item .nav-icon { font-size: 17px; width: 20px; text-align: center; flex-shrink: 0; }
.nav-item:hover { background: var(--bg-card-hover); color: var(--text-primary); }
.nav-item.active {
  background: var(--gold-dim);
  color: var(--gold);
  border: 1px solid rgba(212,175,55,0.2);
}
.nav-item.active .nav-icon { color: var(--gold); }

.sidebar-footer {
  padding: 16px 12px;
  border-top: 1px solid var(--border);
}

/* Topbar */
.topbar {
  position: fixed;
  top: 0;
  left: var(--sidebar-w);
  right: 0;
  height: var(--topbar-h);
  background: rgba(8,12,18,0.85);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--border);
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 28px;
  gap: 16px;
}
.topbar-left { display: flex; align-items: center; gap: 12px; }
.topbar-title {
  font-family: var(--font-display);
  font-size: 18px;
  font-weight: 700;
}
.topbar-right { display: flex; align-items: center; gap: 12px; }
.topbar-btn {
  width: 38px; height: 38px;
  border-radius: 50%;
  background: var(--bg-card);
  border: 1px solid var(--border);
  color: var(--text-secondary);
  font-size: 17px;
  display: flex; align-items: center; justify-content: center;
  cursor: pointer;
  transition: var(--transition);
  position: relative;
}
.topbar-btn:hover { color: var(--text-primary); background: var(--bg-card-hover); }
.notif-dot {
  position: absolute;
  top: 6px; right: 6px;
  width: 8px; height: 8px;
  background: var(--gold);
  border-radius: 50%;
  border: 2px solid var(--bg-deep);
}
.avatar {
  width: 38px; height: 38px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--gold), #b8972a);
  display: flex; align-items: center; justify-content: center;
  font-weight: 700;
  font-size: 15px;
  color: #0a0e18;
  cursor: pointer;
  border: 2px solid var(--border-glow);
  flex-shrink: 0;
}
.hamburger {
  display: none;
  width: 38px; height: 38px;
  align-items: center; justify-content: center;
  border-radius: var(--radius-sm);
  background: var(--bg-card);
  border: 1px solid var(--border);
  color: var(--text-secondary);
  font-size: 20px;
  cursor: pointer;
}

/* Main content */
.main-content {
  margin-left: var(--sidebar-w);
  margin-top: var(--topbar-h);
  padding: 28px;
  min-height: calc(100vh - var(--topbar-h));
  position: relative;
  z-index: 1;
}

/* ================================================
   STAT CARDS
   ================================================ */
.stat-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 18px;
  margin-bottom: 28px;
}
.stat-card {
  padding: 22px;
  position: relative;
  overflow: hidden;
  transition: var(--transition);
}
.stat-card:hover { transform: translateY(-3px); box-shadow: var(--shadow-glow); }
.stat-card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 14px;
}
.stat-card-icon {
  width: 42px; height: 42px;
  border-radius: var(--radius-sm);
  display: flex; align-items: center; justify-content: center;
  font-size: 20px;
}
.stat-card-icon.gold  { background: var(--gold-dim); }
.stat-card-icon.green { background: var(--green-dim); }
.stat-card-icon.blue  { background: rgba(78,168,222,0.15); }
.stat-card-icon.red   { background: rgba(255,90,90,0.15); }
.stat-card-label {
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  color: var(--text-muted);
  margin-bottom: 4px;
}
.stat-card-value {
  font-family: var(--font-display);
  font-size: 26px;
  font-weight: 700;
  color: var(--text-primary);
  line-height: 1;
}
.stat-card-change {
  font-size: 12px;
  margin-top: 6px;
  display: flex;
  align-items: center;
  gap: 4px;
}
.stat-card-change.up   { color: var(--green); }
.stat-card-change.down { color: var(--red); }

/* ================================================
   PAGE CONTENT WRAPPER
   ================================================ */
.page-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 14px;
  margin-bottom: 28px;
}
.page-title {
  font-family: var(--font-display);
  font-size: 26px;
  font-weight: 700;
}
.page-sub {
  font-size: 14px;
  color: var(--text-secondary);
  margin-top: 4px;
}

/* ================================================
   UTILITY
   ================================================ */
.flex       { display: flex; }
.flex-col   { flex-direction: column; }
.items-center { align-items: center; }
.justify-between { justify-content: space-between; }
.gap-8  { gap: 8px; }
.gap-12 { gap: 12px; }
.gap-16 { gap: 16px; }
.gap-24 { gap: 24px; }
.w-full { width: 100%; }
.mt-4   { margin-top: 4px; }
.mt-8   { margin-top: 8px; }
.mt-16  { margin-top: 16px; }
.mt-24  { margin-top: 24px; }
.mb-16  { margin-bottom: 16px; }
.mb-24  { margin-bottom: 24px; }
.text-gold    { color: var(--gold); }
.text-green   { color: var(--green); }
.text-red     { color: var(--red); }
.text-muted   { color: var(--text-muted); }
.text-secondary { color: var(--text-secondary); }
.text-sm   { font-size: 13px; }
.text-xs   { font-size: 11px; }
.text-lg   { font-size: 18px; }
.font-bold { font-weight: 700; }
.font-display { font-family: var(--font-display); }
.rounded-full { border-radius: 50px; }

/* Divider */
.divider {
  width: 100%;
  height: 1px;
  background: var(--border);
  margin: 20px 0;
}

/* Grid helpers */
.grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
.grid-3 { display: grid; grid-template-columns: repeat(3,1fr); gap: 18px; }

/* ================================================
   RESPONSIVE
   ================================================ */
@media (max-width: 1024px) {
  :root { --sidebar-w: 200px; }
}

@media (max-width: 768px) {
  .sidebar {
    transform: translateX(-100%);
  }
  .sidebar.open {
    transform: translateX(0);
  }
  .topbar {
    left: 0;
  }
  .main-content {
    margin-left: 0;
    padding: 20px 16px;
  }
  .hamburger { display: flex; }
  .grid-2, .grid-3 { grid-template-columns: 1fr; }
  .stat-grid { grid-template-columns: 1fr 1fr; }
  .sidebar-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.6);
    z-index: 99;
    display: none;
  }
  .sidebar-overlay.active { display: block; }
}

@media (max-width: 480px) {
  .stat-grid { grid-template-columns: 1fr; }
  .topbar { padding: 0 16px; }
  #toast-container { right: 12px; bottom: 16px; }
}
