// ============================================================
// render.js — Побудова карток та сітки каталогу
// Файл 3/10
// ============================================================

/**
 * Створює DOM-елемент картки для одного предмета.
 * @param {object} weapon
 * @param {number} index - порядковий індекс для затримки анімації
 */
function createWeaponCard(weapon, index) {
  const meta = window.MM2_DATA.RARITY_META[weapon.rarity];
  const card = document.createElement("article");
  card.className = "card";
  card.style.setProperty("--accent", meta.color);
  card.style.setProperty("--glow", meta.glow);
  card.style.setProperty("--delay", `${Math.min(index * 22, 500)}ms`);
  card.dataset.rarity = weapon.rarity;
  card.dataset.category = weapon.category;
  card.dataset.name = weapon.name.toLowerCase();
  card.tabIndex = 0;
  card.setAttribute("role", "button");
  card.setAttribute(
    "aria-label",
    `${weapon.name}, ${meta.label} рідкість, категорія ${weapon.category}`
  );

  card.innerHTML = `
    <div class="card-icon-wrap">
      ${window.MM2_ICONS.renderWeaponIcon(weapon)}
    </div>
    <div class="card-body">
      <div class="card-top-row">
        <span class="card-category">${weapon.category}</span>
        <span class="card-rarity" style="color:${meta.color}">${meta.label}</span>
      </div>
      <h3 class="card-name">${weapon.name}</h3>
      <p class="card-blurb">${weapon.blurb}</p>
      <div class="card-footer">
        <span class="card-origin">${weapon.origin}</span>
        <span class="card-year">${weapon.year}</span>
      </div>
    </div>
  `;

  card.addEventListener("click", () => window.MM2_MODAL.open(weapon));
  card.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      window.MM2_MODAL.open(weapon);
    }
  });

  return card;
}

/**
 * Перемальовує всю сітку каталогу на основі відфільтрованого списку.
 * @param {Array} list - масив предметів для показу
 */
function renderGrid(list) {
  const grid = document.getElementById("catalog-grid");
  const emptyState = document.getElementById("empty-state");
  grid.innerHTML = "";

  if (list.length === 0) {
    emptyState.hidden = false;
    return;
  }
  emptyState.hidden = true;

  const fragment = document.createDocumentFragment();
  list.forEach((weapon, i) => fragment.appendChild(createWeaponCard(weapon, i)));
  grid.appendChild(fragment);

  observeCardsForReveal();
}

/** IntersectionObserver, що плавно проявляє картки під час скролу. */
function observeCardsForReveal() {
  const cards = document.querySelectorAll(".card:not(.revealed)");
  if (!("IntersectionObserver" in window)) {
    cards.forEach((c) => c.classList.add("revealed"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  cards.forEach((c) => io.observe(c));
}

/** Оновлює лічильник знайдених предметів. */
function updateResultCount(count, total) {
  const el = document.getElementById("result-count");
  el.textContent =
    count === total
      ? `Усі ${total} предметів`
      : `Знайдено ${count} із ${total}`;
}

window.MM2_RENDER = { renderGrid, updateResultCount };
