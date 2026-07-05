// ============================================================
// weapons.js — База даних предметів для каталогу MM2
// Файл 1/10
// ============================================================
// Рідкість відображає внутрішньоігрову класифікацію MM2:
// Common → Uncommon → Rare → Legendary → Ancient → Godly → Chroma
// Це суто інформаційна колекція для перегляду — без оплати,
// без "відкриття скриньок" і без рандомізованих механік.
// ============================================================

const RARITY_ORDER = [
  "Common",
  "Uncommon",
  "Rare",
  "Legendary",
  "Ancient",
  "Godly",
  "Chroma",
];

const RARITY_META = {
  Common: {
    color: "#9BA3AE",
    glow: "rgba(155, 163, 174, 0.25)",
    label: "Звичайна",
  },
  Uncommon: {
    color: "#5FBF7E",
    glow: "rgba(95, 191, 126, 0.3)",
    label: "Незвичайна",
  },
  Rare: {
    color: "#4E9EE8",
    glow: "rgba(78, 158, 232, 0.35)",
    label: "Рідкісна",
  },
  Legendary: {
    color: "#B268E0",
    glow: "rgba(178, 104, 224, 0.4)",
    label: "Легендарна",
  },
  Ancient: {
    color: "#E0A83C",
    glow: "rgba(224, 168, 60, 0.45)",
    label: "Стародавня",
  },
  Godly: {
    color: "#E04C4C",
    glow: "rgba(224, 76, 76, 0.5)",
    label: "Божественна",
  },
  Chroma: {
    color: "#FF6FD8",
    glow: "rgba(255, 111, 216, 0.55)",
    label: "Хромова",
  },
};

const CATEGORIES = ["Ніж", "Пістолет", "Гвинтівка", "Спец. зброя"];

// Кожен запис: id, name, category, rarity, year, origin, blurb
const WEAPONS = [
  { id: 1, name: "Classic", category: "Ніж", rarity: "Common", year: 2019, origin: "Базовий набір", blurb: "Той самий ніж, з якого починають усі — простий, впізнаваний, без зайвих деталей." },
  { id: 2, name: "Bloom", category: "Ніж", rarity: "Common", year: 2020, origin: "Весняне оновлення", blurb: "Лезо з ніжним квітковим візерунком, що з'явилося разом із сезонним апдейтом." },
  { id: 3, name: "Slate", category: "Ніж", rarity: "Common", year: 2020, origin: "Базовий набір", blurb: "Матове сіро-графітове покриття без зайвого блиску — практичний вибір." },
  { id: 4, name: "Woodland", category: "Ніж", rarity: "Common", year: 2019, origin: "Стартовий набір", blurb: "Камуфляжне забарвлення для тих, хто любить лісову естетику." },
  { id: 5, name: "Rust", category: "Ніж", rarity: "Common", year: 2021, origin: "Індустріальна серія", blurb: "Текстура іржі надає леза відчуття довгої історії використання." },
  { id: 6, name: "Azure Blade", category: "Ніж", rarity: "Uncommon", year: 2020, origin: "Літня колекція", blurb: "Прохолодний блакитний відтінок з легким градієнтом до країв леза." },
  { id: 7, name: "Copperhead", category: "Ніж", rarity: "Uncommon", year: 2021, origin: "Тропічна серія", blurb: "Мідно-бронзове покриття, натхненне забарвленням змії." },
  { id: 8, name: "Frostbite", category: "Ніж", rarity: "Uncommon", year: 2020, origin: "Зимове оновлення", blurb: "Крижаний візерунок вкриває лезо тонкими прожилками інею." },
  { id: 9, name: "Sunset Edge", category: "Ніж", rarity: "Uncommon", year: 2022, origin: "Осіння колекція", blurb: "Плавний перехід від жовтогарячого до глибокого багряного." },
  { id: 10, name: "Marble", category: "Ніж", rarity: "Uncommon", year: 2021, origin: "Архітектурна серія", blurb: "Візерунок під мармур із тонкими прожилками темного кольору." },
  { id: 11, name: "Nightshade", category: "Ніж", rarity: "Rare", year: 2021, origin: "Хелловінська подія", blurb: "Глибокий фіолетово-чорний відтінок із ледь помітним фіолетовим сяйвом." },
  { id: 12, name: "Tidal", category: "Ніж", rarity: "Rare", year: 2022, origin: "Океанічна серія", blurb: "Хвилястий візерунок кольору морської хвилі, що ніби рухається під світлом." },
  { id: 13, name: "Ember Fang", category: "Ніж", rarity: "Rare", year: 2021, origin: "Вогняна колекція", blurb: "Лезо ніби тліє зсередини — градієнт від чорного до жаристо-червоного." },
  { id: 14, name: "Glacier", category: "Ніж", rarity: "Rare", year: 2022, origin: "Полярна експедиція", blurb: "Прозорувато-блакитна текстура, що нагадує шар льодовикового льоду." },
  { id: 15, name: "Obsidian Shard", category: "Ніж", rarity: "Rare", year: 2020, origin: "Вулканічна серія", blurb: "Чорне вулканічне скло з гострими гранями та тонким блиском." },
  { id: 16, name: "Chrono", category: "Ніж", rarity: "Legendary", year: 2021, origin: "Ювілейне видання", blurb: "Циферблатний візерунок, присвячений річниці запуску гри." },
  { id: 17, name: "Void Reaper", category: "Ніж", rarity: "Legendary", year: 2022, origin: "Космічна серія", blurb: "Темна поверхня з розсипом крихітних зірок уздовж леза." },
  { id: 18, name: "Phoenix Wing", category: "Ніж", rarity: "Legendary", year: 2021, origin: "Міфологічна колекція", blurb: "Пір'їнний візерунок у відтінках вогню, що плавно перетікають один в інший." },
  { id: 19, name: "Aurora", category: "Ніж", rarity: "Legendary", year: 2022, origin: "Північне сяйво", blurb: "Хвилі зеленого й фіолетового кольору, що імітують полярне сяйво." },
  { id: 20, name: "Titan's Edge", category: "Ніж", rarity: "Legendary", year: 2023, origin: "Колекція силачів", blurb: "Масивне на вигляд лезо із металевими гравіюваннями рун." },
  { id: 21, name: "Celestial Reign", category: "Ніж", rarity: "Ancient", year: 2022, origin: "Небесна колекція", blurb: "Золотисто-зоряний візерунок, що повільно мерехтить під різними кутами." },
  { id: 22, name: "Abyssal King", category: "Ніж", rarity: "Ancient", year: 2023, origin: "Глибоководна серія", blurb: "Темно-бордовий відтінок із золотими прожилками, схожими на корали." },
  { id: 23, name: "Eclipse", category: "Ніж", rarity: "Ancient", year: 2022, origin: "Астрономічна подія", blurb: "Кільце світла навколо темного центру — данина сонячному затемненню." },
  { id: 24, name: "Seraph's Wrath", category: "Ніж", rarity: "Ancient", year: 2023, origin: "Небесна колекція", blurb: "Біло-золоте лезо з ефектом м'якого світіння по контуру." },
  { id: 25, name: "Ragnarok", category: "Ніж", rarity: "Godly", year: 2023, origin: "Скандинавська легенда", blurb: "Найзнаковіший ніж колекції — темно-червоний з рунічними прожилками, що ледь помітно рухаються." },
  { id: 26, name: "Chromatic Fang", category: "Ніж", rarity: "Chroma", year: 2023, origin: "Хроматична серія", blurb: "Постійно змінює відтінок, проходячи через весь спектр кольорів." },
  { id: 27, name: "Prism", category: "Ніж", rarity: "Chroma", year: 2024, origin: "Хроматична серія", blurb: "Розсіює світло на дрібні райдужні відблиски вздовж усього леза." },

  { id: 28, name: "Snub Nose", category: "Пістолет", rarity: "Common", year: 2019, origin: "Базовий набір", blurb: "Компактний і надійний — перший пістолет у більшості колекцій." },
  { id: 29, name: "Steel Grip", category: "Пістолет", rarity: "Common", year: 2020, origin: "Стартовий набір", blurb: "Сталеве покриття без прикрас, зроблене для функціональності." },
  { id: 30, name: "Desert Tan", category: "Пістолет", rarity: "Common", year: 2020, origin: "Пустельна серія", blurb: "Пісочний відтінок, що зливається з посушливими локаціями." },
  { id: 31, name: "Twilight Grip", category: "Пістолет", rarity: "Uncommon", year: 2021, origin: "Вечірня колекція", blurb: "Перехід від темно-синього до фіолетового у стилі присмерку." },
  { id: 32, name: "Copper Six", category: "Пістолет", rarity: "Uncommon", year: 2021, origin: "Індустріальна серія", blurb: "Мідне покриття з легкою патиною на рукояті." },
  { id: 33, name: "Frost Line", category: "Пістолет", rarity: "Uncommon", year: 2020, origin: "Зимове оновлення", blurb: "Тонкі білі лінії інею вкривають корпус пістолета." },
  { id: 34, name: "Venom", category: "Пістолет", rarity: "Rare", year: 2022, origin: "Тропічна серія", blurb: "Насичений зелений відтінок з чорними плямами, як у отруйної змії." },
  { id: 35, name: "Blaze Runner", category: "Пістолет", rarity: "Rare", year: 2021, origin: "Вогняна колекція", blurb: "Градієнт полум'я вздовж стовбура, що ніби рухається при обертанні." },
  { id: 36, name: "Nebula Grip", category: "Пістолет", rarity: "Rare", year: 2022, origin: "Космічна серія", blurb: "Темно-фіолетовий фон із розсипом дрібних зіркових цяток." },
  { id: 37, name: "Golden Hour", category: "Пістолет", rarity: "Legendary", year: 2022, origin: "Літня колекція", blurb: "Теплий золотисто-жовтогарячий відтінок, як призахідне сонце." },
  { id: 38, name: "Storm Caller", category: "Пістолет", rarity: "Legendary", year: 2023, origin: "Грозова серія", blurb: "Темно-сірий корпус із блискавично-жовтими прожилками." },
  { id: 39, name: "Divine Spark", category: "Пістолет", rarity: "Ancient", year: 2023, origin: "Небесна колекція", blurb: "Білосніжна поверхня з тонким золотим сяйвом по краях." },
  { id: 40, name: "Infernal Six", category: "Пістолет", rarity: "Godly", year: 2023, origin: "Пекельна серія", blurb: "Найяскравіший пістолет у лінійці — вугільно-чорний з розпеченими прожилками." },
  { id: 41, name: "Kaleidoscope", category: "Пістолет", rarity: "Chroma", year: 2024, origin: "Хроматична серія", blurb: "М'яко перетікає між кольорами спектра по всій довжині корпусу." },

  { id: 42, name: "Patrol Rifle", category: "Гвинтівка", rarity: "Common", year: 2019, origin: "Базовий набір", blurb: "Стандартна модель без особливих прикрас — робочий інструмент." },
  { id: 43, name: "Ranger Wood", category: "Гвинтівка", rarity: "Common", year: 2020, origin: "Лісова серія", blurb: "Дерев'яне приклад-покриття для класичного мисливського вигляду." },
  { id: 44, name: "Ashfall", category: "Гвинтівка", rarity: "Uncommon", year: 2021, origin: "Індустріальна серія", blurb: "Попелясто-сірий відтінок із дрібними чорними цяточками." },
  { id: 45, name: "Coral Reef", category: "Гвинтівка", rarity: "Uncommon", year: 2022, origin: "Океанічна серія", blurb: "Рожево-бірюзовий візерунок, натхненний кораловими рифами." },
  { id: 46, name: "Thunderstruck", category: "Гвинтівка", rarity: "Rare", year: 2022, origin: "Грозова серія", blurb: "Темно-синій фон розсічений яскравими жовтими розрядами." },
  { id: 47, name: "Solar Flare", category: "Гвинтівка", rarity: "Rare", year: 2023, origin: "Астрономічна подія", blurb: "Помаранчево-жовтий градієнт, що імітує спалах на поверхні сонця." },
  { id: 48, name: "Wraith", category: "Гвинтівка", rarity: "Legendary", year: 2022, origin: "Хелловінська подія", blurb: "Напівпрозорий сіро-білий візерунок, ніби зроблений з туману." },
  { id: 49, name: "Dragon's Breath", category: "Гвинтівка", rarity: "Legendary", year: 2023, origin: "Міфологічна колекція", blurb: "Лускоподібна текстура в багряно-золотих тонах." },
  { id: 50, name: "Astral Vision", category: "Гвинтівка", rarity: "Ancient", year: 2023, origin: "Небесна колекція", blurb: "Темно-синій корпус, вкритий сузір'ями дрібних білих цяток." },
  { id: 51, name: "Apex Predator", category: "Гвинтівка", rarity: "Godly", year: 2024, origin: "Хижацька серія", blurb: "Найпрестижніша гвинтівка колекції з деталізованим візерунком хижого звіра." },
  { id: 52, name: "Spectrum", category: "Гвинтівка", rarity: "Chroma", year: 2024, origin: "Хроматична серія", blurb: "Плавно перетікає кольорами веселки вздовж усього корпусу." },

  { id: 53, name: "Marksman", category: "Спец. зброя", rarity: "Common", year: 2020, origin: "Базовий набір", blurb: "Проста снайперська модель без зайвих деталей." },
  { id: 54, name: "Longshot Grey", category: "Спец. зброя", rarity: "Uncommon", year: 2021, origin: "Тактична серія", blurb: "Матово-сіре покриття для тих, хто цінує стриманість." },
  { id: 55, name: "Piercing Wind", category: "Спец. зброя", rarity: "Rare", year: 2022, origin: "Небесна серія", blurb: "Світло-блакитний градієнт із тонкими білими лініями вітру." },
  { id: 56, name: "Molten Core", category: "Спец. зброя", rarity: "Legendary", year: 2023, origin: "Вулканічна серія", blurb: "Чорна поверхня з тріщинами, крізь які просвічує розпечена лава." },
  { id: 57, name: "Sovereign", category: "Спец. зброя", rarity: "Ancient", year: 2023, origin: "Королівська колекція", blurb: "Темно-пурпурове покриття з тонким золотим орнаментом." },
  { id: 58, name: "World Ender", category: "Спец. зброя", rarity: "Godly", year: 2024, origin: "Апокаліптична серія", blurb: "Один із найрідкісніших предметів — чорно-червоний із тріщинами енергії по всій довжині." },
  { id: 59, name: "Iridescent", category: "Спец. зброя", rarity: "Chroma", year: 2024, origin: "Хроматична серія", blurb: "Переливається перламутровими відтінками залежно від кута огляду." },

  { id: 60, name: "Bamboo Edge", category: "Ніж", rarity: "Common", year: 2021, origin: "Східна серія", blurb: "Природна текстура бамбука вздовж руків'я та частини леза." },
  { id: 61, name: "Sandstorm", category: "Ніж", rarity: "Common", year: 2021, origin: "Пустельна серія", blurb: "Піщано-жовтий відтінок із текстурою, схожою на дюни." },
  { id: 62, name: "Mint Fresh", category: "Ніж", rarity: "Uncommon", year: 2022, origin: "Весняне оновлення", blurb: "Світло-м'ятний колір із легким блиском." },
  { id: 63, name: "Blood Moon", category: "Ніж", rarity: "Rare", year: 2022, origin: "Хелловінська подія", blurb: "Насичений темно-червоний відтінок, натхненний місячним затемненням." },
  { id: 64, name: "Starlit Path", category: "Ніж", rarity: "Legendary", year: 2023, origin: "Небесна колекція", blurb: "Темно-синя доріжка зі світлими цятками, що імітують зоряне небо." },
  { id: 65, name: "Emperor's Blade", category: "Ніж", rarity: "Ancient", year: 2023, origin: "Королівська колекція", blurb: "Багряно-золоте лезо з витонченим гравіюванням по всій довжині." },
  { id: 66, name: "Doomsday", category: "Ніж", rarity: "Godly", year: 2024, origin: "Апокаліптична серія", blurb: "Один із найвідоміших ножів колекції — чорне лезо з тріщинами розпеченої енергії." },
  { id: 67, name: "Rainbow Fang", category: "Ніж", rarity: "Chroma", year: 2024, origin: "Хроматична серія", blurb: "Класичний хромовий ефект із плавним переходом по всьому спектру." },

  { id: 68, name: "Tarnished", category: "Пістолет", rarity: "Common", year: 2020, origin: "Індустріальна серія", blurb: "Злегка потьмяніле металеве покриття з характером старої зброї." },
  { id: 69, name: "Lagoon", category: "Пістолет", rarity: "Uncommon", year: 2022, origin: "Океанічна серія", blurb: "Бірюзовий відтінок, що нагадує мілководну лагуну." },
  { id: 70, name: "Crimson Tide", category: "Пістолет", rarity: "Rare", year: 2022, origin: "Морська серія", blurb: "Темно-червоний градієнт із хвилястим візерунком." },
  { id: 71, name: "Midnight Star", category: "Пістолет", rarity: "Legendary", year: 2023, origin: "Небесна колекція", blurb: "Глибокий темно-синій фон із розсипом яскравих зірок." },
  { id: 72, name: "Regal Gold", category: "Пістолет", rarity: "Ancient", year: 2023, origin: "Королівська колекція", blurb: "Суцільне золоте покриття з тонким гравіюванням орнаменту." },
  { id: 73, name: "Cataclysm", category: "Пістолет", rarity: "Godly", year: 2024, origin: "Апокаліптична серія", blurb: "Темно-багряний корпус із енергетичними розломами по поверхні." },
  { id: 74, name: "Aurora Shift", category: "Пістолет", rarity: "Chroma", year: 2024, origin: "Хроматична серія", blurb: "Кольори плавно перетікають один в інший, немов північне сяйво." },

  { id: 75, name: "Timber", category: "Гвинтівка", rarity: "Common", year: 2020, origin: "Лісова серія", blurb: "Приклад із текстурою натурального дерева." },
  { id: 76, name: "Dune Walker", category: "Гвинтівка", rarity: "Uncommon", year: 2021, origin: "Пустельна серія", blurb: "Пісочно-бежевий камуфляж для посушливих локацій." },
  { id: 77, name: "Deep Freeze", category: "Гвинтівка", rarity: "Rare", year: 2022, origin: "Полярна експедиція", blurb: "Крижано-блакитний відтінок із текстурою потрісканого льоду." },
  { id: 78, name: "Phantom Step", category: "Гвинтівка", rarity: "Legendary", year: 2023, origin: "Хелловінська подія", blurb: "Напівпрозорий сірий візерунок, схожий на привида, що зникає." },
  { id: 79, name: "Monarch", category: "Гвинтівка", rarity: "Ancient", year: 2023, origin: "Королівська колекція", blurb: "Темно-фіолетовий корпус із золотими вставками по всій довжині." },
  { id: 80, name: "Oblivion", category: "Гвинтівка", rarity: "Godly", year: 2024, origin: "Апокаліптична серія", blurb: "Один із найрідкісніших предметів — чорний корпус із фіолетовими розломами енергії." },
  { id: 81, name: "Fractal", category: "Гвинтівка", rarity: "Chroma", year: 2024, origin: "Хроматична серія", blurb: "Геометричний візерунок, що змінює колір при кожному повороті камери." },

  { id: 82, name: "Basic Blade", category: "Ніж", rarity: "Common", year: 2019, origin: "Базовий набір", blurb: "Найпростіший ніж без жодного покриття — з нього починають майже всі." },
  { id: 83, name: "Overgrown", category: "Ніж", rarity: "Common", year: 2021, origin: "Лісова серія", blurb: "Зелений камуфляж із текстурою моху та листя." },
  { id: 84, name: "Peach Fizz", category: "Ніж", rarity: "Uncommon", year: 2022, origin: "Літня колекція", blurb: "Ніжний персиково-рожевий градієнт." },
  { id: 85, name: "Static", category: "Ніж", rarity: "Rare", year: 2022, origin: "Грозова серія", blurb: "Чорно-білий візерунок, схожий на телевізійні перешкоди." },
  { id: 86, name: "Sunspire", category: "Ніж", rarity: "Legendary", year: 2023, origin: "Астрономічна подія", blurb: "Яскраво-жовтогарячий градієнт, що імітує сонячну корону." },
  { id: 87, name: "Warlord", category: "Ніж", rarity: "Ancient", year: 2023, origin: "Колекція силачів", blurb: "Масивне лезо з металевим гравіюванням у стилі давнього обладунку." },
  { id: 88, name: "Genesis", category: "Ніж", rarity: "Godly", year: 2024, origin: "Ювілейне видання", blurb: "Створений до великої річниці гри — біло-золотий з м'яким внутрішнім сяйвом." },
  { id: 89, name: "Nebula Fang", category: "Ніж", rarity: "Chroma", year: 2024, origin: "Хроматична серія", blurb: "Темний фон із кольоровими плямами, що повільно рухаються, як туманність." },

  { id: 90, name: "Range Finder", category: "Спец. зброя", rarity: "Uncommon", year: 2021, origin: "Тактична серія", blurb: "Практичний дизайн із мінімумом прикрас для точних пострілів." },
  { id: 91, name: "Wildfire", category: "Спец. зброя", rarity: "Rare", year: 2022, origin: "Вогняна колекція", blurb: "Помаранчево-чорний градієнт, що імітує лісову пожежу." },
  { id: 92, name: "Frozen Throne", category: "Спец. зброя", rarity: "Legendary", year: 2023, origin: "Королівська колекція", blurb: "Крижано-біле покриття з тонким срібним орнаментом." },
  { id: 93, name: "Celestial Hunter", category: "Спец. зброя", rarity: "Ancient", year: 2023, origin: "Небесна колекція", blurb: "Темно-синій корпус зі сріблястими сузір'ями по всій поверхні." },
  { id: 94, name: "Eternity", category: "Спец. зброя", rarity: "Godly", year: 2024, origin: "Ювілейне видання", blurb: "Один із найрідкісніших предметів у грі — золотисто-білий із вічним м'яким сяйвом." },
  { id: 95, name: "Mosaic", category: "Спец. зброя", rarity: "Chroma", year: 2024, origin: "Хроматична серія", blurb: "Візерунок із дрібних кольорових фрагментів, що переливаються під час обертання." },

  { id: 96, name: "Riverbed", category: "Пістолет", rarity: "Common", year: 2021, origin: "Природна серія", blurb: "Сіро-блакитний відтінок із текстурою річкового каміння." },
  { id: 97, name: "Honeycomb", category: "Гвинтівка", rarity: "Uncommon", year: 2022, origin: "Природна серія", blurb: "Жовто-коричневий шестикутний візерунок, як бджолині соти." },
  { id: 98, name: "Vortex", category: "Ніж", rarity: "Rare", year: 2022, origin: "Грозова серія", blurb: "Спіральний фіолетово-синій візерунок, що ніби затягує погляд." },
  { id: 99, name: "Silent Ash", category: "Спец. зброя", rarity: "Legendary", year: 2023, origin: "Попільна серія", blurb: "Попелясто-сірий градієнт із тонкими вугільно-чорними прожилками." },
  { id: 100, name: "Absolute Zero", category: "Ніж", rarity: "Ancient", year: 2023, origin: "Полярна експедиція", blurb: "Кристально-біле лезо з ефектом інею, що ледь помітно 'диха' холодом." },
];

// Порахувати кількість предметів кожної рідкості (для статистики на сторінці)
function getRarityBreakdown() {
  const counts = {};
  RARITY_ORDER.forEach((r) => (counts[r] = 0));
  WEAPONS.forEach((w) => (counts[w.rarity] = (counts[w.rarity] || 0) + 1));
  return counts;
}

window.MM2_DATA = {
  RARITY_ORDER,
  RARITY_META,
  CATEGORIES,
  WEAPONS,
  getRarityBreakdown,
};
