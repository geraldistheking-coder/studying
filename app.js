const gameCdnBase = "https://gl.githack.com/3kh0/3kh0-assets/raw/main/";
const friendBase = "https://geodmeeee.github.io/forksnspoons/";
const categoryColors = {
  Action: "#e85d75",
  Adventure: "#2a9d8f",
  Arcade: "#f4a261",
  Board: "#8e7dff",
  Clicker: "#ec6ead",
  Platform: "#3da5d9",
  Puzzle: "#f6c945",
  Racing: "#ff6b35",
  Sim: "#4cc9a4",
  Sports: "#457bff",
  Story: "#b979df",
  Strategy: "#22a6b3",
  Word: "#c49a4a"
};

const games = [
  ["10 Minutes Till Dawn", "https://cdn.jsdelivr.net/gh/bubbls/UGS-Assets@main/10minutestilldawn/index.html", "Action", "UGS"],
  ["2048", "2048", "Puzzle"],
  ["2048 Multitask", "2048-multitask", "Puzzle"],
  ["Achievement Unlocked", "achievementunlocked", "Platform"],
  ["A Dark Room", "adarkroom", "Strategy"],
  ["Alien Hominid", "alienhominid", "Action"],
  ["Align 4", "align-4", "Board"],
  ["Avalanche", "avalanche", "Arcade"],
  ["Black Knight", "blackknight", "Action"],
  ["Bloons TD", "bloonstd", "Strategy"],
  ["Bloons TD 2", "bloonstd2", "Strategy"],
  ["Bloxors", "bloxors", "Puzzle"],
  ["Boxhead 2Play", "boxhead2play", "Action"],
  ["Breaking the Bank", "breakingthebank", "Story"],
  ["Champion Island", "champion-island", "Adventure"],
  ["Cookie Clicker", "cookie-clicker", "Clicker"],
  ["Core Ball", "core-ball", "Arcade"],
  ["Creative Kill Chamber", "creativekillchamber", "Action"],
  ["CSGO Clicker", "csgo-clicker", "Clicker"],
  ["Cupcake 2048", "cupcake2048", "Puzzle"],
  ["Duck Life 3", "ducklife3", "Sim"],
  ["Fancy Pants Adventures", "fancypantsadventures", "Platform"],
  ["Fleeing the Complex", "fleeingthecomplex", "Story"],
  ["Impossible Quiz", "impossiblequiz", "Puzzle"],
  ["Learn to Fly", "learntofly", "Arcade"],
  ["Minesweeper", "minesweeper", "Puzzle"],
  ["Papa's Pizzeria", "papaspizzaria", "Sim"],
  ["Paper.io 2", "paperio2", "Arcade"],
  ["Portal Flash", "portalflash", "Puzzle"],
  ["Riddle School", "riddleschool", "Story"],
  ["Wordle", "wordle", "Word"],
].map(([title, slug, imageOrCategory, category, source]) => {
  const isExternal = source === "external";

  return {
    title,
    slug,
    category: isExternal ? imageOrCategory : (category || imageOrCategory),
    source: isExternal ? "UGS" : (source || "3kh0"),
    url: isExternal
      ? slug
      : `${gameCdnBase}${encodePath(slug)}/index.html`,
    accent: categoryColors[isExternal ? imageOrCategory : (category || imageOrCategory)] || "#77d5ff"
  };
});
const grid = document.querySelector("#gameGrid");
const searchInput = document.querySelector("#searchInput");
const categoryBar = document.querySelector("#categoryBar");
const resultTitle = document.querySelector("#resultTitle");
const resultCount = document.querySelector("#resultCount");
const dialog = document.querySelector("#playerDialog");
const frame = document.querySelector("#gameFrame");
const playerTitle = document.querySelector("#playerTitle");
const playerMeta = document.querySelector("#playerMeta");
const closeButton = document.querySelector("#closeButton");
const fullscreenButton = document.querySelector("#fullscreenButton");

let activeCategory = "All";

function categories() {
  return ["All", ...new Set(games.map((game) => game.category).sort())];
}

function renderCategories() {
  categoryBar.innerHTML = "";
  categories().forEach((category) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = category;
    button.classList.toggle("active", category === activeCategory);
    button.addEventListener("click", () => {
      activeCategory = category;
      render();
    });
    categoryBar.append(button);
  });
}

function filteredGames() {
  const query = searchInput.value.trim().toLowerCase();
  return games.filter((game) => {
    const matchesCategory = activeCategory === "All" || game.category === activeCategory;
    const matchesQuery = `${game.title} ${game.category} ${game.slug}`.toLowerCase().includes(query);
    return matchesCategory && matchesQuery;
  });
}

function render() {
  renderCategories();
  const visible = filteredGames();
  grid.innerHTML = "";
  resultTitle.textContent = activeCategory === "All" ? "All assignments" : activeCategory;
  resultCount.textContent = `${visible.length} ${visible.length === 1 ? "assignment" : "assignments"}`;

  visible.forEach((game) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "game-card";
    card.style.setProperty("--accent", game.accent);
    card.innerHTML = `
      <span class="thumb-wrap">
        <span class="thumb-fallback">${escapeHtml(game.title)}</span>
      </span>
      <span class="game-category">${escapeHtml(game.category)}</span>
    `;
    card.addEventListener("click", () => openGame(game));
    grid.append(card);
  });
}

function openGame(game) {
  playerTitle.textContent = game.title;
  playerMeta.textContent = `${game.category} | Credit: ${game.source === "friend" ? "Forks N Frogz" : "3kh0 Assets"}`;
  frame.src = game.url;
  dialog.showModal();
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function encodePath(path) {
  return path.split("/").map((part) => encodeURIComponent(part)).join("/");
}


function startClouds() {
  if (!window.VANTA?.CLOUDS) return;
  window.VANTA.CLOUDS({
    el: "#cloudBackground",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200,
    minWidth: 200,
    skyColor: 0x0f1764,
    cloudColor: 0xadd9de,
    cloudShadowColor: 0x183050,
    sunColor: 0xff8f19,
    sunGlareColor: 0xff6c33,
    sunlightColor: 0xffad53,
    speed: 1,
    scale: 3,
    scaleMobile: 12,
    backgroundAlpha: 1
  });
}

searchInput.addEventListener("input", render);
closeButton.addEventListener("click", () => dialog.close());
dialog.addEventListener("close", () => {
  frame.src = "about:blank";
});
fullscreenButton.addEventListener("click", () => {
  if (frame.requestFullscreen) frame.requestFullscreen();
});

startClouds();
render();
