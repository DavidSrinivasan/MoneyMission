/* ================================================
   MONEY MISSION - Landing Page Styles
   ================================================ */

/* ---- NAV ---- */
.landing-nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 6%;
  transition: background 0.4s, backdrop-filter 0.4s;
}
.landing-nav.scrolled {
  background: rgba(8,12,18,0.9);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--border);
}
.nav-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: var(--font-display);
  font-size: 20px;
  font-weight: 800;
}
.nav-logo .logo-icon {
  width: 38px; height: 38px;
  background: linear-gradient(135deg, var(--gold), var(--gold-light));
  border-radius: 10px;
  display: flex; align-items: center; justify-content: center;
  font-size: 20px;
}
.nav-logo span { color: var(--gold); }
.nav-links {
  display: flex;
  align-items: center;
  gap: 32px;
}
.nav-links a {
  font-size: 14px;
  color: var(--text-secondary);
  font-weight: 500;
  transition: color var(--transition);
}
.nav-links a:hover { color: var(--text-primary); }
.nav-actions { display: flex; align-items: center; gap: 12px; }
.nav-menu-toggle {
  display: none;
  color: var(--text-primary);
  font-size: 24px;
  cursor: pointer;
  background: none;
  border: none;
}

/* ---- HERO ---- */
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 120px 6% 80px;
  position: relative;
  z-index: 1;
}
.hero-content { max-width: 780px; }
.hero-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 7px 18px;
  background: var(--gold-dim);
  border: 1px solid rgba(212,175,55,0.25);
  border-radius: 50px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 28px;
  animation: fadeInUp 0.6s ease forwards;
}
.hero-title {
  font-family: var(--font-display);
  font-size: clamp(42px, 7vw, 80px);
  font-weight: 800;
  line-height: 1.08;
  margin-bottom: 22px;
  animation: fadeInUp 0.6s 0.1s ease both;
}
.hero-title .accent {
  background: linear-gradient(135deg, var(--gold), var(--gold-light), #ffe08a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.hero-sub {
  font-size: clamp(16px, 2vw, 19px);
  color: var(--text-secondary);
  line-height: 1.7;
  max-width: 560px;
  margin: 0 auto 38px;
  animation: fadeInUp 0.6s 0.2s ease both;
}
.hero-actions {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  flex-wrap: wrap;
  animation: fadeInUp 0.6s 0.3s ease both;
}
.hero-stats {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 48px;
  margin-top: 60px;
  animation: fadeInUp 0.6s 0.4s ease both;
}
.hero-stat-val {
  font-family: var(--font-display);
  font-size: 28px;
  font-weight: 800;
  color: var(--gold);
}
.hero-stat-label { font-size: 12px; color: var(--text-muted); margin-top: 2px; }

/* Floating cards */
.hero-float-cards {
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
}
.float-card {
  position: absolute;
  padding: 14px 18px;
  border-radius: var(--radius-md);
  backdrop-filter: blur(20px);
  background: rgba(255,255,255,0.04);
  border: 1px solid var(--border);
  font-size: 13px;
  animation: floatCard 6s ease-in-out infinite;
}
.float-card:nth-child(1) { top: 20%; left: 5%; animation-delay: 0s; }
.float-card:nth-child(2) { top: 30%; right: 6%; animation-delay: -2s; }
.float-card:nth-child(3) { bottom: 25%; left: 8%; animation-delay: -4s; }
@keyframes floatCard {
  0%, 100% { transform: translateY(0px); }
  50%       { transform: translateY(-12px); }
}
.float-card-icon { font-size: 22px; margin-bottom: 4px; }
.float-card-label { color: var(--text-muted); font-size: 11px; }
.float-card-value { font-family: var(--font-display); font-weight: 700; color: var(--gold); }

/* ---- SECTION WRAPPER ---- */
.landing-section {
  padding: 90px 6%;
  position: relative;
  z-index: 1;
}
.landing-section.alt { background: rgba(255,255,255,0.015); }
.section-center { text-align: center; }
.section-center .section-sub { margin: 0 auto; }

/* ---- FEATURES ---- */
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
  margin-top: 48px;
}
.feature-card {
  padding: 28px 24px;
  border-radius: var(--radius-lg);
  background: var(--bg-card);
  border: 1px solid var(--border);
  transition: var(--transition);
  cursor: default;
  position: relative;
  overflow: hidden;
}
.feature-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--gold), transparent);
  opacity: 0;
  transition: opacity var(--transition);
}
.feature-card:hover { transform: translateY(-6px); border-color: var(--border-glow); box-shadow: var(--shadow-glow); }
.feature-card:hover::before { opacity: 1; }
.feature-icon {
  width: 52px; height: 52px;
  border-radius: var(--radius-md);
  background: var(--gold-dim);
  border: 1px solid rgba(212,175,55,0.2);
  display: flex; align-items: center; justify-content: center;
  font-size: 24px;
  margin-bottom: 18px;
}
.feature-title {
  font-family: var(--font-display);
  font-size: 17px;
  font-weight: 700;
  margin-bottom: 8px;
}
.feature-desc { font-size: 14px; color: var(--text-secondary); line-height: 1.65; }

/* ---- BENEFITS ---- */
.benefits-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 28px;
  align-items: center;
  margin-top: 20px;
}
.benefit-visual {
  position: relative;
  padding: 32px;
}
.benefit-main-card {
  padding: 28px;
  border-radius: var(--radius-xl);
}
.benefit-chart-bar-wrap {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 20px;
}
.benefit-bar-row { display: flex; align-items: center; gap: 12px; }
.benefit-bar-label { font-size: 13px; color: var(--text-secondary); width: 60px; }
.benefit-bar-track {
  flex: 1;
  height: 8px;
  background: rgba(255,255,255,0.06);
  border-radius: 50px;
  overflow: hidden;
}
.benefit-bar-fill {
  height: 100%;
  border-radius: 50px;
  background: linear-gradient(90deg, var(--gold), var(--gold-light));
  animation: growBar 1.5s cubic-bezier(0.4,0,0.2,1) both;
  animation-delay: var(--delay, 0s);
}
@keyframes growBar { from { width: 0 !important; } }

.benefit-list { display: flex; flex-direction: column; gap: 18px; }
.benefit-item {
  display: flex;
  align-items: flex-start;
  gap: 14px;
}
.benefit-item-icon {
  width: 44px; height: 44px;
  border-radius: var(--radius-sm);
  background: var(--gold-dim);
  border: 1px solid rgba(212,175,55,0.2);
  display: flex; align-items: center; justify-content: center;
  font-size: 20px;
  flex-shrink: 0;
}
.benefit-item-title { font-weight: 600; margin-bottom: 4px; }
.benefit-item-desc  { font-size: 13px; color: var(--text-secondary); line-height: 1.55; }

/* ---- TESTIMONIALS ---- */
.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin-top: 48px;
}
.testimonial-card { padding: 28px; transition: var(--transition); }
.testimonial-card:hover { transform: translateY(-4px); box-shadow: var(--shadow-glow); border-color: var(--border-glow); }
.stars { color: var(--gold); font-size: 14px; letter-spacing: 2px; margin-bottom: 14px; }
.testimonial-text { font-size: 14px; color: var(--text-secondary); line-height: 1.7; font-style: italic; margin-bottom: 20px; }
.testimonial-author { display: flex; align-items: center; gap: 12px; }
.testimonial-avatar {
  width: 40px; height: 40px;
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-weight: 700; font-size: 15px; color: #0a0e18;
  flex-shrink: 0;
}
.testimonial-name { font-weight: 600; font-size: 14px; }
.testimonial-role { font-size: 12px; color: var(--text-muted); }

/* ---- CTA ---- */
.cta-section {
  padding: 80px 6%;
  text-align: center;
  position: relative;
  z-index: 1;
}
.cta-inner {
  max-width: 660px;
  margin: 0 auto;
  padding: 60px 40px;
  border-radius: var(--radius-xl);
  position: relative;
  overflow: hidden;
}
.cta-inner::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at 50% 0%, rgba(212,175,55,0.15) 0%, transparent 70%);
  pointer-events: none;
}
.cta-title {
  font-family: var(--font-display);
  font-size: clamp(28px, 4vw, 44px);
  font-weight: 800;
  margin-bottom: 16px;
}
.cta-sub { font-size: 16px; color: var(--text-secondary); margin-bottom: 32px; }

/* ---- FOOTER ---- */
.landing-footer {
  padding: 40px 6%;
  border-top: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
  position: relative;
  z-index: 1;
}
.footer-copy { font-size: 13px; color: var(--text-muted); }
.footer-links { display: flex; gap: 24px; }
.footer-links a { font-size: 13px; color: var(--text-muted); transition: color var(--transition); }
.footer-links a:hover { color: var(--gold); }

/* ---- SCROLL ANIMATIONS ---- */
.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* ---- RESPONSIVE ---- */
@media (max-width: 900px) {
  .nav-links { display: none; }
  .nav-menu-toggle { display: block; }
  .benefits-grid { grid-template-columns: 1fr; }
  .hero-stats { gap: 28px; }
}
@media (max-width: 600px) {
  .landing-section { padding: 60px 5%; }
  .hero { padding: 100px 5% 60px; }
  .hero-stats { flex-wrap: wrap; gap: 20px; }
  .float-card { display: none; }
  .cta-inner { padding: 40px 24px; }
}
