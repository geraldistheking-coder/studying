const gameCdnBase = "https://gl.githack.com/3kh0/3kh0-assets/raw/main/";
const friendBase = "https://geodmeeee.github.io/forksnspoons/";
const categoryColors = {
  Action: "#000000",
  Adventure: "#000000",
  Arcade: "#000000",
  Clicker: "#000000",
  Horror: "#000000",
  Platform: "#000000",
  Puzzle: "#000000",
  Racing: "#000000",
  Sim: "#000000",
  Sports: "#000000",
  Story: "#000000",
  Strategy: "#000000",
  Luck: "#000000"
};

const games = [
  ["Russian Car Driver", "games/russiancar/index.html", "Racing", null, "local"],
  ["Super Hot", "games/superhot/index.html", "Action", null, "local"],
  ["Slope", "games/slope/index.html", "Platform", null, "local"],
  ["Scary Shwarma", "games/scaryshwarma/index.html", "Horror", null, "local"],
  ["Time Shooter 3", "games/timeshooter3/index.html", "Action", null, "local"],
  ["Time Shooter 2", "games/timeshooter2/index.html", "Action", null, "local"],
  ["Tag", "games/tag/index.html", "Platform", null, "local"],
  ["Vex 3", "games/vex3/index.html", "Platform", null, "local"],
  ["Vex 4", "games/vex4/index.html", "Platform", null, "local"],
  ["Vex 5", "games/vex5/index.html", "Platform", null, "local"],
  ["Vex 6", "games/vex6/index.html", "Platform", null, "local"],
  ["Vex 7", "games/vex7/index.html", "Platform", null, "local"],
  ["Vex 8", "games/vex8/index.html", "Platform", null, "local"],
  ["Wheelie Bike", "games/wheeliebike/index.html", "Racing", null, "local"],
  ["Basketball Stars", "games/basketballstars/index.html", "Sports", null, "local"],
  ["Basket Random", "games/basketrandom/index.html", "Sports", null, "local"],
  ["Boxing Random", "games/boxingrandom/index.html", "Sports", null, "local"],
  ["Drift Boss", "games/driftboss/index.html", "Racing", null, "local"],
  ["Fireboy and Watergirl 2", "games/fireboyandwatergirl2/index.html", "Puzzle", null, "local"],
  ["Fireboy and Watergirl 3", "games/fireboyandwatergirl3/index.html", "Puzzle", null, "local"],
  ["Happy Wheels", "games/happywheels/index.html", "Racing", null, "local"],
  ["Jetpack Joyride", "games/jetpackjoyride/index.html", "Action", null, "local"],
  ["Moto X3M", "games/motox3m/index.html", "Racing", null, "local"],
  ["Moto X3M 2", "games/motox3m2/index.html", "Racing", null, "local"],   
  ["Moto X3M Pool Party", "games/motox3mpoolparty/index.html", "Racing", null, "local"],
  ["Moto X3M Spooky Land", "games/motox3mspookyland/index.html", "Racing", null, "local"],
  ["Moto X3M Winter", "games/motox3mwinter/index.html", "Racing", null, "local"],
  ["Soccer Random", "games/soccerrandom/index.html", "Sports", null, "local"],
  ["Stickman Hook", "games/stickmanhook/index.html", "Platform", null, "local"],
  ["Subway Surfers", "games/subwaysurfers/index.html", "Racing", null, "local"],
  ["Volley Random", "games/volleyrandom/index.html", "Sports", null, "local"],
  ["World's Hardest Game", "games/worldshardestgame/index.html", "Puzzle", null, "local"],
  ["1v1.LOL", "games/1v1.lol/index.html", "Action", null, "local"],
  ["10 Minutes Till Dawn", "games/10minutes-till-dawn/index.html", "Action", null, "local"],
  ["2048", "2048", "Puzzle"],
  ["2048 Multitask", "2048-multitask", "Puzzle"],
  ["Achievement Unlocked", "achievementunlocked", "Platform"],
  ["A Dark Room", "adarkroom", "Strategy"],
  ["Alien Hominid", "alienhominid", "Action"],
  ["Align 4", "align-4", "Strategy"],
  ["Among Us", "games/amongus/index.html", "Strategy", null, "local"],
  ["Avalanche", "avalanche", "Arcade"],
  ["Blackjack", "games/blackjack/index.html", "Luck", null, "local"],
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
  ["Crossy Road", "games/crossyroad/index.html", "Platform", null, "local"],
  ["CSGO Clicker", "csgo-clicker", "Clicker"],
  ["Cupcake 2048", "cupcake2048", "Puzzle"],
  ["Duck Life 3", "ducklife3", "Sim"],
  ["Geometry Dash", "games/geodash/index.html", "Action", null, "local"],
  ["Epstein Baldie", "games/epsteinkidnap/index.html", "Sim", null, "local"],
  ["Fancy Pants Adventures", "fancypantsadventures", "Platform"],
  ["Fleeing the Complex", "fleeingthecomplex", "Story"],
  ["Five Nights At Freddys", "games/fnaf1/index.html", "Horror", null, "local"],
  ["Five Nights At Freddys 2", "games/fnaf2/index.html", "Horror", null, "local"],
  ["Five Nights At Freddys 3", "games/fnaf3/index.html", "Horror", null, "local"],
  ["Five Nights At Freddys 4", "games/fnaf4/index.html", "Horror", null, "local"],
  ["Five Nights At Freddys Ultimate Custom Night", "games/fnaf5/index.html", "Horror", null, "local"],
  ["Five Nights At Freddys Sister Location", "games/fnaf6/index.html", "Horror", null, "local"],
  ["Impossible Quiz", "impossiblequiz", "Puzzle"],
  ["Learn to Fly", "learntofly", "Arcade"],
  ["Minesweeper", "minesweeper", "Puzzle"],
  ["MX Offroad Master", "games/mxoffroad/index.html", "Racing", null, "local"],
  ["Papa's Pizzeria", "papaspizzaria", "Sim"],
  ["Paper.io 2", "paperio2", "Arcade"],
  ["Plinko", "games/plinko/index.html", "Luck", null, "local"],
  ["Portal Flash", "portalflash", "Puzzle"],
  ["Riddle School", "riddleschool", "Story"],
  ["Saul Goodman Run", "games/saul-goodman-run/index.html", "Racing", null, "local"],
  ["Shift At Midnight", "games/shift-at-midnight/index.html", "Horror", null, "local"],
  ["Vex X3M", "games/vexx3m/index.html", "Racing", null, "local"],
  ["Vex X3M 2", "games/vexx3m2/index.html", "Racing", null, "local"],
  ["Wordle", "wordle", "Strategy"],
].map(([title, slug, imageOrCategory, category, source]) => {
  const isLocal = source === "local";

  return {
    title,
    slug,
    category: isLocal ? imageOrCategory : (source === "friend" ? category : imageOrCategory),
    source: isLocal ? "UGS" : (source || "3kh0"),
    url: isLocal
      ? slug
      : source === "friend"
        ? `${friendBase}${encodePath(slug)}`
        : `${gameCdnBase}${encodePath(slug)}/index.html`,
    accent: categoryColors[
      isLocal ? imageOrCategory : (source === "friend" ? category : imageOrCategory)
    ] || "#77d5ff"
  };
});
const grid = document.querySelector("#gameGrid");
const searchInput = document.querySelector("#searchInput");
const resultTitle = document.querySelector("#resultTitle");
const resultCount = document.querySelector("#resultCount");
const dialog = document.querySelector("#playerDialog");
const frame = document.querySelector("#gameFrame");
const playerTitle = document.querySelector("#playerTitle");
const playerMeta = document.querySelector("#playerMeta");
const closeButton = document.querySelector("#closeButton");
const fullscreenButton = document.querySelector("#fullscreenButton");

function filteredGames() {
  const query = searchInput.value.trim().toLowerCase();

  return games.filter((game) => {
    return `${game.title} ${game.category} ${game.slug}`
      .toLowerCase()
      .includes(query);
  });
}

function render() {
  const visible = filteredGames();
  grid.innerHTML = "";
  resultTitle.textContent = "All assignments";
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


function startFog() {
  if (!window.VANTA?.FOG) return;

  window.VANTA.FOG({
    el: "#vanta-bg",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    highlightColor: 0xffce,
    midtoneColor: 0xffce,
    lowlightColor: 0xffce,
    baseColor: 0x000000,
    blurFactor: 0.26,
    speed: 0.80,
    zoom: 0.40
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

startFog();
render();
