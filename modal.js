// ============================================================
// modal.js — Детальний перегляд предмета
// Файл 5/10
// ============================================================

let lastFocusedElement = null;

function openModal(weapon) {
  const meta = window.MM2_DATA.RARITY_META[weapon.rarity];
  const overlay = document.getElementById("modal-overlay");
  const panel = document.getElementById("modal-panel");

  lastFocusedElement = document.activeElement;

  panel.style.setProperty("--accent", meta.color);
  panel.style.setProperty("--glow", meta.glow);

  panel.innerHTML = `
    <button class="modal-close" aria-label="Закрити">
      <svg viewBox="0 0 24 24" width="20" height="20"><path d="M6 6L18 18M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
    </button>
    <div class="modal-icon-wrap">${window.MM2_ICONS.renderWeaponIcon(weapon)}</div>
    <div class="modal-info">
      <div class="modal-top-row">
        <span class="modal-category">${weapon.category}</span>
        <span class="modal-rarity" style="color:${meta.color}">${meta.label}</span>
      </div>
      <h2 class="modal-name">${weapon.name}</h2>
      <p class="modal-blurb">${weapon.blurb}</p>
      <dl class="modal-meta-grid">
        <div><dt>Походження</dt><dd>${weapon.origin}</dd></div>
        <div><dt>Рік появи</dt><dd>${weapon.year}</dd></div>
        <div><dt>Категорія</dt><dd>${weapon.category}</dd></div>
        <div><dt>Рідкість</dt><dd style="color:${meta.color}">${meta.label}</dd></div>
      </dl>
    </div>
  `;

  overlay.hidden = false;
  requestAnimationFrame(() => overlay.classList.add("modal-visible"));
  document.body.style.overflow = "hidden";

  panel.querySelector(".modal-close").addEventListener("click", closeModal);
  panel.querySelector(".modal-close").focus();
}

function closeModal() {
  const overlay = document.getElementById("modal-overlay");
  overlay.classList.remove("modal-visible");
  document.body.style.overflow = "";
  setTimeout(() => {
    overlay.hidden = true;
    if (lastFocusedElement) lastFocusedElement.focus();
  }, 200);
}

function initModal() {
  const overlay = document.getElementById("modal-overlay");
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !overlay.hidden) closeModal();
  });
}

window.MM2_MODAL = { open: openModal, close: closeModal, init: initModal };
