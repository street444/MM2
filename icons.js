// ============================================================
// icons.js — Генератор векторних силуетів зброї
// Файл 2/10
// ============================================================
// Замість фотографій використовуємо чисті SVG-силуети,
// пофарбовані відповідно до рідкості предмета. Це дає єдиний,
// охайний візуальний стиль для всіх 100 предметів без потреби
// у зовнішніх зображеннях.
// ============================================================

const SILHOUETTES = {
  "Ніж": `
    <path d="M20 90 L75 35 L82 42 L27 97 Z" />
    <path d="M75 35 L92 18 L98 24 L82 42 Z" />
    <rect x="12" y="88" width="18" height="7" rx="2" transform="rotate(-45 12 88)" />
  `,
  "Пістолет": `
    <path d="M15 70 L70 70 L70 55 L95 55 L95 68 L78 68 L78 82 L15 82 Z" />
    <rect x="15" y="82" width="14" height="24" rx="3" />
    <rect x="70" y="50" width="10" height="10" rx="1" />
  `,
  "Гвинтівка": `
    <rect x="10" y="62" width="95" height="10" rx="2" />
    <rect x="95" y="50" width="14" height="10" rx="2" />
    <path d="M20 72 L20 95 L34 95 L34 72 Z" />
    <rect x="45" y="72" width="8" height="18" rx="1" />
    <rect x="10" y="58" width="20" height="6" rx="1" />
  `,
  "Спец. зброя": `
    <rect x="8" y="60" width="100" height="8" rx="3" />
    <rect x="100" y="48" width="16" height="8" rx="2" />
    <path d="M18 68 L18 100 L30 100 L30 68 Z" />
    <circle cx="70" cy="64" r="7" />
    <rect x="8" y="55" width="18" height="7" rx="1" />
  `,
};

const RARITY_PATTERN = {
  Common: (id) => `<rect width="120" height="120" fill="url(#bg-${id})" />`,
  Uncommon: (id) => `<rect width="120" height="120" fill="url(#bg-${id})" />`,
  Rare: (id) => `<rect width="120" height="120" fill="url(#bg-${id})" />`,
  Legendary: (id) => `
    <rect width="120" height="120" fill="url(#bg-${id})" />
    <circle cx="60" cy="60" r="50" fill="none" stroke="url(#ring-${id})" stroke-width="1" opacity="0.5" />
  `,
  Ancient: (id) => `
    <rect width="120" height="120" fill="url(#bg-${id})" />
    <circle cx="60" cy="60" r="52" fill="none" stroke="url(#ring-${id})" stroke-width="1.5" opacity="0.6" />
    <circle cx="60" cy="60" r="44" fill="none" stroke="url(#ring-${id})" stroke-width="0.75" opacity="0.4" />
  `,
  Godly: (id) => `
    <rect width="120" height="120" fill="url(#bg-${id})" />
    <circle cx="60" cy="60" r="54" fill="none" stroke="url(#ring-${id})" stroke-width="2" opacity="0.7" />
    <circle cx="60" cy="60" r="40" fill="none" stroke="url(#ring-${id})" stroke-width="1" opacity="0.45" />
  `,
  Chroma: (id) => `
    <rect width="120" height="120" fill="url(#bg-${id})" />
    <circle cx="60" cy="60" r="54" fill="none" stroke="url(#chroma-${id})" stroke-width="2" opacity="0.8" />
  `,
};

/**
 * Генерує повний SVG-маркап для одного предмета зброї.
 * @param {object} weapon - запис із WEAPONS
 * @returns {string} inline SVG
 */
function renderWeaponIcon(weapon) {
  const meta = window.MM2_DATA.RARITY_META[weapon.rarity];
  const silhouette = SILHOUETTES[weapon.category] || SILHOUETTES["Ніж"];
  const bgFn = RARITY_PATTERN[weapon.rarity] || RARITY_PATTERN.Common;
  const uid = `w${weapon.id}`;

  return `
  <svg viewBox="0 0 120 120" class="weapon-icon" data-rarity="${weapon.rarity}" aria-hidden="true">
    <defs>
      <linearGradient id="bg-${uid}" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#14161c" />
        <stop offset="100%" stop-color="#1c1f28" />
      </linearGradient>
      <linearGradient id="ring-${uid}" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="${meta.color}" />
        <stop offset="100%" stop-color="${meta.color}" stop-opacity="0.2" />
      </linearGradient>
      <linearGradient id="chroma-${uid}" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#FF6FD8" />
        <stop offset="33%" stop-color="#4E9EE8" />
        <stop offset="66%" stop-color="#5FBF7E" />
        <stop offset="100%" stop-color="#E0A83C" />
      </linearGradient>
      <linearGradient id="blade-${uid}" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="${meta.color}" />
        <stop offset="100%" stop-color="${shade(meta.color, -25)}" />
      </linearGradient>
    </defs>
    ${bgFn(uid)}
    <g fill="url(#blade-${uid})" stroke="${shade(meta.color, -35)}" stroke-width="0.75">
      ${silhouette}
    </g>
  </svg>`;
}

/** Затемнює/освітлює hex-колір на заданий відсоток. */
function shade(hex, percent) {
  const num = parseInt(hex.replace("#", ""), 16);
  const amt = Math.round(2.55 * percent);
  const R = Math.min(255, Math.max(0, (num >> 16) + amt));
  const G = Math.min(255, Math.max(0, ((num >> 8) & 0x00ff) + amt));
  const B = Math.min(255, Math.max(0, (num & 0x0000ff) + amt));
  return `#${(0x1000000 + R * 0x10000 + G * 0x100 + B).toString(16).slice(1)}`;
}

window.MM2_ICONS = { renderWeaponIcon };
