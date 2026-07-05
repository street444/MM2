// ============================================================
// app.js — Точка входу
// Файл 7/10
// ============================================================

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("total-count").textContent = window.MM2_DATA.WEAPONS.length;

  window.MM2_STATS.renderStatsBar();
  window.MM2_FILTERS.initFilterBar();
  window.MM2_MODAL.init();
  window.MM2_FILTERS.applyFilters();

  initScrollHeader();
  initHeroEntrance();
});

/** Легке затемнення/тінь на хедері під час скролу. */
function initScrollHeader() {
  const header = document.querySelector(".site-header");
  let lastScroll = 0;
  window.addEventListener(
    "scroll",
    () => {
      const y = window.scrollY;
      header.classList.toggle("scrolled", y > 12);
      lastScroll = y;
    },
    { passive: true }
  );
}

/** Одноразова вступна анімація хіро-блоку при завантаженні. */
function initHeroEntrance() {
  requestAnimationFrame(() => {
    document.querySelector(".hero")?.classList.add("hero-visible");
  });
}
