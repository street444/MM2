// ============================================================
// stats.js — Панель статистики колекції
// Файл 6/10
// ============================================================
// Показує розподіл предметів по рідкості у вигляді простої
// горизонтальної шкали. Це довідкова інформація про склад
// каталогу, а не індикатор "прогресу" чи заклик щось відкривати.
// ============================================================

function renderStatsBar() {
  const { RARITY_ORDER, RARITY_META, WEAPONS } = window.MM2_DATA;
  const breakdown = window.MM2_DATA.getRarityBreakdown();
  const total = WEAPONS.length;
  const container = document.getElementById("stats-bar");

  const segments = RARITY_ORDER.map((r) => {
    const count = breakdown[r] || 0;
    const pct = ((count / total) * 100).toFixed(1);
    return `<div class="stats-segment" style="--w:${pct}%; --c:${RARITY_META[r].color}" title="${RARITY_META[r].label}: ${count}"></div>`;
  }).join("");

  const legend = RARITY_ORDER.map((r) => {
    const count = breakdown[r] || 0;
    return `
      <div class="stats-legend-item">
        <span class="legend-dot" style="background:${RARITY_META[r].color}"></span>
        <span class="legend-label">${RARITY_META[r].label}</span>
        <span class="legend-count">${count}</span>
      </div>`;
  }).join("");

  container.innerHTML = `
    <div class="stats-track">${segments}</div>
    <div class="stats-legend">${legend}</div>
  `;
}

window.MM2_STATS = { renderStatsBar };
