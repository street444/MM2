// ============================================================
// filters.js — Фільтрація, пошук і сортування каталогу
// Файл 4/10
// ============================================================

const state = {
  search: "",
  rarity: "all",
  category: "all",
  sort: "default",
};

function applyFilters() {
  const { WEAPONS, RARITY_ORDER } = window.MM2_DATA;
  let result = WEAPONS.filter((w) => {
    const matchesSearch =
      state.search === "" ||
      w.name.toLowerCase().includes(state.search) ||
      w.origin.toLowerCase().includes(state.search);
    const matchesRarity = state.rarity === "all" || w.rarity === state.rarity;
    const matchesCategory =
      state.category === "all" || w.category === state.category;
    return matchesSearch && matchesRarity && matchesCategory;
  });

  result = sortList(result, state.sort, RARITY_ORDER);

  window.MM2_RENDER.renderGrid(result);
  window.MM2_RENDER.updateResultCount(result.length, WEAPONS.length);
}

function sortList(list, mode, rarityOrder) {
  const copy = [...list];
  switch (mode) {
    case "rarity-desc":
      return copy.sort(
        (a, b) => rarityOrder.indexOf(b.rarity) - rarityOrder.indexOf(a.rarity)
      );
    case "rarity-asc":
      return copy.sort(
        (a, b) => rarityOrder.indexOf(a.rarity) - rarityOrder.indexOf(b.rarity)
      );
    case "name-asc":
      return copy.sort((a, b) => a.name.localeCompare(b.name));
    case "year-desc":
      return copy.sort((a, b) => b.year - a.year);
    case "year-asc":
      return copy.sort((a, b) => a.year - b.year);
    default:
      return copy;
  }
}

function initFilterBar() {
  const { RARITY_ORDER, RARITY_META, CATEGORIES } = window.MM2_DATA;

  // Кнопки рідкості
  const rarityBar = document.getElementById("rarity-filters");
  const allBtn = makeChip("all", "Усі", "#EDEFF3");
  allBtn.classList.add("chip-active");
  rarityBar.appendChild(allBtn);
  RARITY_ORDER.forEach((r) => {
    rarityBar.appendChild(makeChip(r, RARITY_META[r].label, RARITY_META[r].color));
  });
  rarityBar.addEventListener("click", (e) => {
    const chip = e.target.closest(".chip");
    if (!chip) return;
    rarityBar.querySelectorAll(".chip").forEach((c) => c.classList.remove("chip-active"));
    chip.classList.add("chip-active");
    state.rarity = chip.dataset.value;
    applyFilters();
  });

  // Випадаючий список категорій
  const categorySelect = document.getElementById("category-select");
  CATEGORIES.forEach((c) => {
    const opt = document.createElement("option");
    opt.value = c;
    opt.textContent = c;
    categorySelect.appendChild(opt);
  });
  categorySelect.addEventListener("change", (e) => {
    state.category = e.target.value;
    applyFilters();
  });

  // Сортування
  document.getElementById("sort-select").addEventListener("change", (e) => {
    state.sort = e.target.value;
    applyFilters();
  });

  // Пошук
  const searchInput = document.getElementById("search-input");
  let debounceTimer;
  searchInput.addEventListener("input", (e) => {
    clearTimeout(debounceTimer);
    const value = e.target.value.toLowerCase();
    debounceTimer = setTimeout(() => {
      state.search = value;
      applyFilters();
    }, 120);
  });
}

function makeChip(value, label, color) {
  const chip = document.createElement("button");
  chip.type = "button";
  chip.className = "chip";
  chip.dataset.value = value;
  chip.style.setProperty("--chip-color", color);
  chip.textContent = label;
  return chip;
}

window.MM2_FILTERS = { initFilterBar, applyFilters };
