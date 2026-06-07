# 💰 Money Mission

> A premium dark-themed personal finance web app with glassmorphism design, animated money backgrounds, and full financial management features.

---

## 🗂️ Folder Structure

```
money-mission/
├── index.html              ← Landing page
├── css/
│   ├── global.css          ← Shared styles, layout, animations
│   ├── landing.css         ← Landing page styles
│   ├── auth.css            ← Login / Signup styles
│   └── dashboard.css       ← Dashboard & inner page styles
├── js/
│   ├── global.js           ← Utilities, money bg, toast, auth helpers
│   └── layout.js           ← Sidebar + topbar injection
└── pages/
    ├── login.html          ← Login page
    ├── signup.html         ← Signup page
    ├── dashboard.html      ← Main dashboard with charts
    ├── goals.html          ← Goal management (CRUD)
    ├── planner.html        ← Daily/Weekly/Monthly/Yearly planner
    ├── savings.html        ← Savings tracker
    ├── reminders.html      ← Reminder management (CRUD)
    ├── statistics.html     ← Analytics & charts
    └── profile.html        ← Profile & settings
```

---

## 🚀 Getting Started

### Option A – Open locally
Just double-click `index.html` or open it in your browser. No server needed.

### Option B – GitHub Pages deployment
1. Push this entire folder to a GitHub repository
2. Go to **Settings → Pages**
3. Select source: **Deploy from branch → main → / (root)**
4. Your site will be live at `https://yourusername.github.io/money-mission/`

### Option C – Local dev server
```bash
# Using Python
python -m http.server 8080

# Using Node.js npx
npx serve .
```
Then open `http://localhost:8080`

---

## 🔑 Demo Login
Use **any email address** and a **password of 6+ characters** to log in. The app uses `localStorage` for data persistence — no backend required.

---

## ✨ Features

| Page | Features |
|------|----------|
| **Landing** | Hero, Features, Benefits, Testimonials, CTA, Footer |
| **Login** | Show/hide password, Remember Me, validation |
| **Signup** | Password strength meter, validation |
| **Dashboard** | 5 stat cards, 4 charts (line, donut, bar, ring), activity feed |
| **Goals** | Add/Edit/Delete goals, filter by period, progress bars |
| **Planner** | Daily/Weekly/Monthly/Yearly tasks, budget entries, linked goals |
| **Savings** | Add/Delete entries, monthly trend chart, running totals |
| **Reminders** | CRUD reminders, mark done, filter by type |
| **Statistics** | Income vs Expense chart, Net Worth, Category Donut, Savings Rate, table |
| **Profile** | Edit profile, change password, notifications, theme, danger zone |

---

## 🎨 Design System

| Token | Value |
|-------|-------|
| Background deep | `#080c12` |
| Background dark | `#0d1320` |
| Gold accent | `#d4af37` |
| Green success | `#22d97a` |
| Red alert | `#ff5a5a` |
| Blue info | `#4ea8de` |
| Font Display | Syne (Google Fonts) |
| Font Body | DM Sans (Google Fonts) |

---

## 📦 Dependencies (all free/CDN)
- [Chart.js 4.4.1](https://www.chartjs.org/) – Charts
- [Google Fonts](https://fonts.google.com/) – Syne + DM Sans
- No jQuery, no paid libraries, no build step required

---

## 🔧 Customization

**Change accent color:** Edit `--gold` in `css/global.css`

**Add a new page:** Copy any page in `/pages/`, call `renderLayout('yourpage.html', 'Page Title')`, and add it to the `navItems` array in `js/layout.js`

**Modify charts:** All Chart.js configs are inline in each page's `<script>` tag

---

*Built with ❤️ for the Money Mission project*
