<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Savings – Money Mission</title>
  <link rel="stylesheet" href="../css/global.css"/>
  <link rel="stylesheet" href="../css/dashboard.css"/>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.min.js"></script>
</head>
<body>
<div id="money-bg"></div>
<div id="toast-container"></div>

<div class="app-layout">
  <main class="main-content">
    <div class="page-header">
      <div>
        <div class="page-title">💰 Savings</div>
        <div class="page-sub">Track every rupee you save and watch your wealth grow.</div>
      </div>
    </div>

    <!-- Summary cards -->
    <div class="stat-grid" style="margin-bottom:28px;">
      <div class="glass stat-card">
        <div class="stat-card-header">
          <div class="stat-card-icon gold">💰</div>
          <span class="badge badge-green">+12%</span>
        </div>
        <div class="stat-card-label">Total Saved</div>
        <div class="stat-card-value" id="totalSaved">₹0</div>
        <div class="stat-card-change up">All-time savings</div>
      </div>
      <div class="glass stat-card">
        <div class="stat-card-header">
          <div class="stat-card-icon green">📅</div>
        </div>
        <div class="stat-card-label">This Month</div>
        <div class="stat-card-value text-green" id="monthSaved">₹0</div>
        <div class="stat-card-change up">June 2025</div>
      </div>
      <div class="glass stat-card">
        <div class="stat-card-header">
          <div class="stat-card-icon blue">📊</div>
        </div>
        <div class="stat-card-label">Avg Monthly</div>
        <div class="stat-card-value text-gold" id="avgSaved">₹0</div>
        <div class="stat-card-change up">Past 6 months</div>
      </div>
      <div class="glass stat-card">
        <div class="stat-card-header">
          <div class="stat-card-icon gold">🔢</div>
        </div>
        <div class="stat-card-label">Total Entries</div>
        <div class="stat-card-value" id="entriesCount">0</div>
        <div class="stat-card-change up">Saved transactions</div>
      </div>
    </div>

    <div class="savings-main">
      <!-- Add savings -->
      <div class="glass savings-add-card">
        <div style="font-family:var(--font-display);font-weight:700;font-size:18px;margin-bottom:20px;">➕ Add Savings Entry</div>
        <form id="savingsForm" style="display:flex;flex-direction:column;gap:14px;">
          <div class="form-group">
            <label class="form-label">Label / Description</label>
            <input class="form-control" id="savLabel" placeholder="e.g. Monthly savings, Bonus…"/>
          </div>
          <div class="form-group">
            <label class="form-label">Amount (₹)</label>
            <input class="form-control" id="savAmount" type="number" placeholder="5000" min="1" required/>
          </div>
          <div class="form-group">
            <label class="form-label">Date</label>
            <input class="form-control" id="savDate" type="date"/>
          </div>
          <div class="form-group">
            <label class="form-label">Category</label>
            <select class="form-control" id="savCategory">
              <option value="salary">💼 Salary Savings</option>
              <option value="bonus">🎁 Bonus</option>
              <option value="investment">📈 Investment Returns</option>
              <option value="freelance">💻 Freelance Income</option>
              <option value="other">📦 Other</option>
            </select>
          </div>
          <button type="submit" class="btn btn-gold" style="width:100%;padding:14px;">Add to Savings</button>
        </form>

        <!-- Savings chart -->
        <div style="margin-top:28px;">
          <div style="font-family:var(--font-display);font-weight:700;margin-bottom:16px;">Monthly Trend</div>
          <div style="height:180px;">
            <canvas id="savTrendChart"></canvas>
          </div>
        </div>
      </div>

      <!-- History -->
      <div class="glass savings-add-card">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px;">
          <div style="font-family:var(--font-display);font-weight:700;font-size:18px;">📋 Savings History</div>
          <button class="btn btn-danger btn-sm" onclick="clearAll()">Clear All</button>
        </div>
        <div class="savings-history" id="savingsHistory"></div>
        <div id="savingsEmpty" style="display:none;text-align:center;padding:40px 0;">
          <div style="font-size:40px;margin-bottom:12px;">💸</div>
          <div style="color:var(--text-secondary)">No savings logged yet. Add your first entry!</div>
        </div>
      </div>
    </div>
  </main>
</div>

<script src="../js/global.js"></script>
<script src="../js/layout.js"></script>
<script>
const catIcons = { salary:'💼', bonus:'🎁', investment:'📈', freelance:'💻', other:'📦' };
const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

document.addEventListener('DOMContentLoaded', () => {
  renderLayout('savings.html', 'Savings');
  initMoneyBackground();
  initSidebar();

  // Set today's date
  document.getElementById('savDate').value = new Date().toISOString().split('T')[0];

  loadSavings();
  renderChart();
});

function getEntries() {
  const saved = store.get('savings_entries', null);
  if (saved) return saved;
  const defaults = [
    { id:'1', label:'June Salary Savings',    amount:14200, date:'2025-06-01', category:'salary' },
    { id:'2', label:'Performance Bonus',       amount:8500,  date:'2025-05-15', category:'bonus' },
    { id:'3', label:'Mutual Fund Returns',     amount:3200,  date:'2025-05-01', category:'investment' },
    { id:'4', label:'May Salary Savings',      amount:11400, date:'2025-05-01', category:'salary' },
    { id:'5', label:'Freelance Project',       amount:7800,  date:'2025-04-20', category:'freelance' },
    { id:'6', label:'April Salary Savings',    amount:12800, date:'2025-04-01', category:'salary' },
  ];
  store.set('savings_entries', defaults);
  return defaults;
}

function loadSavings() {
  const entries = getEntries();
  const hist  = document.getElementById('savingsHistory');
  const empty = document.getElementById('savingsEmpty');

  if (!entries.length) { hist.innerHTML = ''; empty.style.display = 'block'; return; }
  empty.style.display = 'none';

  const total = entries.reduce((s, e) => s + (+e.amount), 0);
  const now   = new Date();
  const month = entries.filter(e => {
    const d = new Date(e.date);
    return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
  }).reduce((s, e) => s + (+e.amount), 0);

  store.set('savings_total', total);
  countUp(document.getElementById('totalSaved'),  total,   1200, '₹');
  countUp(document.getElementById('monthSaved'),  month,   1200, '₹');
  countUp(document.getElementById('avgSaved'),    Math.round(total / Math.max(entries.length, 1)), 1200, '₹');
  countUp(document.getElementById('entriesCount'), entries.length, 800);

  hist.innerHTML = [...entries].reverse().map(e => `
    <div class="savings-entry">
      <div class="savings-entry-icon">${catIcons[e.category] || '📦'}</div>
      <div style="flex:1;">
        <div style="font-size:13px;font-weight:500;">${e.label || e.category}</div>
        <div style="font-size:11px;color:var(--text-muted);">${formatDate(e.date)}</div>
      </div>
      <div class="savings-entry-amount">+${formatCurrency(e.amount)}</div>
      <button class="btn btn-danger btn-sm btn-icon" onclick="deleteEntry('${e.id}')" style="margin-left:4px;">🗑️</button>
    </div>
  `).join('');
}

function deleteEntry(id) {
  store.set('savings_entries', getEntries().filter(e => e.id !== id));
  loadSavings();
  renderChart();
  showToast('Entry removed.', 'info');
}

function clearAll() {
  if (!confirm('Clear all savings history?')) return;
  store.set('savings_entries', []);
  loadSavings();
  renderChart();
  showToast('History cleared.', 'info');
}

document.getElementById('savingsForm').addEventListener('submit', e => {
  e.preventDefault();
  const amount = +document.getElementById('savAmount').value;
  if (!amount || amount <= 0) return showToast('Please enter a valid amount.', 'error');
  const entries = getEntries();
  entries.push({
    id: Date.now().toString(),
    label: document.getElementById('savLabel').value.trim() || 'Savings',
    amount,
    date: document.getElementById('savDate').value || new Date().toISOString().split('T')[0],
    category: document.getElementById('savCategory').value,
  });
  store.set('savings_entries', entries);
  loadSavings();
  renderChart();
  document.getElementById('savingsForm').reset();
  document.getElementById('savDate').value = new Date().toISOString().split('T')[0];
  showToast('Savings entry added! 💰', 'success');
});

let savChart;
function renderChart() {
  const entries = getEntries();
  const now = new Date();
  const data = [];
  for (let i = 5; i >= 0; i--) {
    const m = new Date(now.getFullYear(), now.getMonth() - i, 1);
    const total = entries.filter(e => {
      const d = new Date(e.date);
      return d.getMonth() === m.getMonth() && d.getFullYear() === m.getFullYear();
    }).reduce((s, e) => s + (+e.amount), 0);
    data.push({ label: months[m.getMonth()], value: total });
  }

  const ctx = document.getElementById('savTrendChart').getContext('2d');
  if (savChart) savChart.destroy();
  savChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: data.map(d => d.label),
      datasets: [{
        data: data.map(d => d.value),
        backgroundColor: 'rgba(212,175,55,0.4)',
        borderColor: '#d4af37',
        borderWidth: 2,
        borderRadius: 6,
        hoverBackgroundColor: 'rgba(212,175,55,0.65)',
      }]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { display: false }, tooltip: {
        backgroundColor: 'rgba(13,19,32,0.95)', borderColor: 'rgba(212,175,55,0.3)', borderWidth: 1,
        callbacks: { label: ctx => ' ₹' + ctx.parsed.y.toLocaleString('en-IN') }
      }},
      scales: {
        x: { grid: { display: false }, ticks: { color: '#9aa0b4', font: { size: 11 } } },
        y: { grid: { color: 'rgba(255,255,255,0.04)' }, ticks: { color: '#9aa0b4', font: { size: 11 }, callback: v => '₹' + (v/1000).toFixed(0) + 'k' } }
      }
    }
  });
}
</script>
</body>
</html>
