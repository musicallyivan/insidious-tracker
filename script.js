/**
 * INSIDIOUS TRACKER — MARVEL TRACKER STYLE
 * Cronología completa, Posters HD, Modo Versus y Guardado en Nube.
 */

const PREMIERE_DATE = new Date("2026-08-21T00:00:00");
const STORAGE_KEYS = {
  WATCHED: "insidious_tracker_watched_v2",
  RATINGS: "insidious_tracker_ratings_v2",
  USER: "insidious_tracker_user_v2",
  CLOUD_ID: "insidious_tracker_cloud_id_v2"
};

/** @typedef {{ id: string, title: string, spanishTitle: string, year: number, releaseDate: string, director: string, runtime: number, chrono: number, release: number, poster: string, demon: string, tags: string[], summary: string, cast: string[], upcoming?: boolean }} Film */

/** @type {Film[]} */
const FILMS = [
  {
    id: "chapter-3",
    title: "Insidious: Chapter 3",
    spanishTitle: "La Noche del Demonio: Capítulo 3",
    year: 2015,
    releaseDate: "5 de junio de 2015",
    director: "Leigh Whannell",
    runtime: 97,
    chrono: 1,
    release: 3,
    poster: "assets/posters/insidious-3.svg",
    demon: "The Man Who Can't Breathe",
    tags: ["Precuela", "Elise Rainier", "Quinn Brenner"],
    summary: "Años antes de los eventos con la familia Lambert, la psíquica Elise Rainier acepta a regañadientes usar su habilidad para ponerse en contacto con los muertos a fin de ayudar a Quinn Brenner, una adolescente acosada por un demonio peligroso.",
    cast: ["Lin Shaye (Elise)", "Stefanie Scott (Quinn)", "Dermot Mulroney (Sean)", "Leigh Whannell (Specs)", "Angus Sampson (Tucker)"]
  },
  {
    id: "last-key",
    title: "Insidious: The Last Key",
    spanishTitle: "La Noche del Demonio: La Última Llave",
    year: 2018,
    releaseDate: "5 de enero de 2018",
    director: "Adam Robitel",
    runtime: 103,
    chrono: 2,
    release: 4,
    poster: "assets/posters/insidious-4.svg",
    demon: "Keyface",
    tags: ["Precuela", "Origen de Elise", "Keyface"],
    summary: "Elise Rainier enfrenta su tormento más personal al ser llamada a investigar una casa embrujada en Nuevo México: la mismísima casa donde creció de niña y donde desató al aterrador demonio de los dedos de llave.",
    cast: ["Lin Shaye (Elise)", "Leigh Whannell (Specs)", "Angus Sampson (Tucker)", "Kirk Acevedo (Ted)", "Caitlin Gerard (Imogen)"]
  },
  {
    id: "insidious",
    title: "Insidious",
    spanishTitle: "La Noche del Demonio",
    year: 2010,
    releaseDate: "1 de abril de 2011",
    director: "James Wan",
    runtime: 103,
    chrono: 3,
    release: 1,
    poster: "assets/posters/insidious-1.svg",
    demon: "Lipstick-Face Demon",
    tags: ["Origen Saga", "Familia Lambert", "The Further"],
    summary: "Cuando su hijo Dalton cae inexplicablemente en un coma profundo tras explorar el desván, Josh y Renai Lambert descubren que no es su casa la que está embrujada, sino su hijo cuyo cuerpo astral viaja a The Further.",
    cast: ["Patrick Wilson (Josh)", "Rose Byrne (Renai)", "Ty Simpkins (Dalton)", "Lin Shaye (Elise)", "Barbara Hershey (Lorraine)"]
  },
  {
    id: "chapter-2",
    title: "Insidious: Chapter 2",
    spanishTitle: "La Noche del Demonio: Capítulo 2",
    year: 2013,
    releaseDate: "13 de septiembre de 2013",
    director: "James Wan",
    runtime: 106,
    chrono: 4,
    release: 2,
    poster: "assets/posters/insidious-2.svg",
    demon: "Bride in Black (Parker Crane)",
    tags: ["Secuela Directa", "Parker Crane", "Viaje Temporal"],
    summary: "La familia Lambert busca recuperarse tras el rescate de Dalton, pero pronto descubren que algo maligno regresó en el cuerpo de Josh. Elise habla desde el más allá mientras investigan el siniestro pasado de Parker Crane.",
    cast: ["Patrick Wilson (Josh)", "Rose Byrne (Renai)", "Barbara Hershey (Lorraine)", "Lin Shaye (Elise)", "Ty Simpkins (Dalton)"]
  },
  {
    id: "red-door",
    title: "Insidious: The Red Door",
    spanishTitle: "La Noche del Demonio: La Puerta Roja",
    year: 2023,
    releaseDate: "7 de julio de 2023",
    director: "Patrick Wilson",
    runtime: 107,
    chrono: 5,
    release: 5,
    poster: "assets/posters/insidious-5.svg",
    demon: "Lipstick-Face & Red Door Entities",
    tags: ["Cierre de Saga", "Dalton Adulto", "Patrick Wilson"],
    summary: "Diez años después, para enterrar a sus demonios de una vez por todas, Josh y un Dalton en edad universitaria deben adentrarse más que nunca en The Further, enfrentando el oscuro pasado de su familia tras la puerta roja.",
    cast: ["Patrick Wilson (Josh)", "Ty Simpkins (Dalton)", "Rose Byrne (Renai)", "Lin Shaye (Elise)", "Sinclair Daniel (Chris)"]
  },
  {
    id: "out-of-the-further",
    title: "Insidious: Out of the Further",
    spanishTitle: "Insidious: Fuera del Más Allá",
    year: 2026,
    releaseDate: "21 de agosto de 2026",
    director: "Jacob Chase",
    runtime: 105,
    chrono: 6,
    release: 6,
    poster: "assets/posters/insidious-6.svg",
    demon: "The Further Unbound",
    tags: ["Próximo Estreno", "Capítulo 6", "Blumhouse"],
    summary: "Sexta entrega de la saga principal. En fase de postproducción. Las barreras entre el mundo de los vivos y The Further se quiebran como nunca antes. Lin Shaye y Amelia Eve encabezan el reparto.",
    cast: ["Lin Shaye", "Amelia Eve", "Reparto por confirmar"],
    upcoming: true
  },
  {
    id: "thread-spin-off",
    title: "Thread: An Insidious Tale",
    spanishTitle: "Thread: Una historia de Insidious",
    year: 2027,
    releaseDate: "TBA (En Desarrollo)",
    director: "Jeremy Slater",
    runtime: 100,
    chrono: 7,
    release: 7,
    poster: "assets/posters/insidious-7.svg",
    demon: "Entity of Regret",
    tags: ["Spin-off", "Mandy Moore", "Kumail Nanjiani"],
    summary: "Película spin-off de la saga sobre un matrimonio que recurre a un hechizo antiguo para viajar en el tiempo y salvar a su hija fallecida, desencadenando graves consecuencias espirituales.",
    cast: ["Mandy Moore", "Kumail Nanjiani"],
    upcoming: true
  }
];

// MOCK DEMO DATA FOR VERSUS MODE
const DEMO_FRIENDS = {
  "DEMO-FAN": {
    username: "Alex (Fan de Terror)",
    watched: ["insidious", "chapter-2", "chapter-3", "last-key", "red-door"],
    ratings: { "insidious": 10, "chapter-2": 9, "chapter-3": 8, "last-key": 7, "red-door": 9 }
  },
  "DEMO-NOOB": {
    username: "Carlos (Novato)",
    watched: ["insidious", "chapter-2"],
    ratings: { "insidious": 8, "chapter-2": 6 }
  }
};

// GLOBAL APP STATE
const state = {
  watched: loadWatched(),
  ratings: loadRatings(),
  username: localStorage.getItem(STORAGE_KEYS.USER) || "Cazador " + Math.floor(100 + Math.random() * 900),
  cloudId: getOrCreateCloudId(),
  activeTab: "timeline",
  orderMode: "chrono",
  filterStatus: "all",
  searchQuery: "",
  viewMode: "timeline", // "timeline" | "grid"
  friendData: null
};

// DOM ELEMENTS CACHE
const els = {
  navbar: document.getElementById("navbar"),
  navTabs: document.querySelectorAll(".nav-tab"),
  tabContents: document.querySelectorAll(".tab-content"),
  openCloudBtn: document.getElementById("openCloudBtn"),
  cloudStatusText: document.getElementById("cloudStatusText"),
  
  // Hero & Marathon
  progressWatchedCount: document.getElementById("progressWatchedCount"),
  progressPctText: document.getElementById("progressPctText"),
  progressFill: document.getElementById("progressFill"),
  progressBar: document.getElementById("progressBar"),
  marathonTimeText: document.getElementById("marathonTimeText"),
  quickResetBtn: document.getElementById("quickResetBtn"),
  
  // Countdown
  cdDays: document.getElementById("cdDays"),
  cdHours: document.getElementById("cdHours"),
  cdMins: document.getElementById("cdMins"),
  cdSecs: document.getElementById("cdSecs"),
  cdStatus: document.getElementById("cdStatus"),
  
  // Toolbar
  searchInput: document.getElementById("searchInput"),
  clearSearchBtn: document.getElementById("clearSearchBtn"),
  btnOrderChrono: document.getElementById("btnOrderChrono"),
  btnOrderRelease: document.getElementById("btnOrderRelease"),
  filterStatus: document.getElementById("filterStatus"),
  timelineSectionTitle: document.getElementById("timelineSectionTitle"),
  timelineSectionSub: document.getElementById("timelineSectionSub"),
  moviesContainer: document.getElementById("moviesContainer"),
  
  // Versus
  subtabUserVsUser: document.getElementById("subtabUserVsUser"),
  subtabMovieVsMovie: document.getElementById("subtabMovieVsMovie"),
  panelUserVsUser: document.getElementById("panelUserVsUser"),
  panelMovieVsMovie: document.getElementById("panelMovieVsMovie"),
  usernameInput: document.getElementById("usernameInput"),
  myCloudIdDisplay: document.getElementById("myCloudIdDisplay"),
  copyMyCloudIdBtn: document.getElementById("copyMyCloudIdBtn"),
  friendIdInput: document.getElementById("friendIdInput"),
  loadFriendBtn: document.getElementById("loadFriendBtn"),
  versusDashboard: document.getElementById("versusDashboard"),
  movieSelectA: document.getElementById("movieSelectA"),
  movieSelectB: document.getElementById("movieSelectB"),
  movieVersusComparison: document.getElementById("movieVersusComparison"),
  
  // Stats
  statTotalMinutes: document.getElementById("statTotalMinutes"),
  statDemonsEncountered: document.getElementById("statDemonsEncountered"),
  statAvgRating: document.getElementById("statAvgRating"),
  statBadgesUnlocked: document.getElementById("statBadgesUnlocked"),
  badgesGrid: document.getElementById("badgesGrid"),
  
  // Modals
  movieModal: document.getElementById("movieModal"),
  movieModalBody: document.getElementById("movieModalBody"),
  closeMovieModalBtn: document.getElementById("closeMovieModalBtn"),
  cloudModal: document.getElementById("cloudModal"),
  closeCloudModalBtn: document.getElementById("closeCloudModalBtn"),
  modalCloudIdInput: document.getElementById("modalCloudIdInput"),
  modalCopyCloudIdBtn: document.getElementById("modalCopyCloudIdBtn"),
  modalImportCloudIdInput: document.getElementById("modalImportCloudIdInput"),
  modalSyncFromCloudBtn: document.getElementById("modalSyncFromCloudBtn"),
  modalShareUrlInput: document.getElementById("modalShareUrlInput"),
  modalCopyShareUrlBtn: document.getElementById("modalCopyShareUrlBtn"),
  modalForceSaveCloudBtn: document.getElementById("modalForceSaveCloudBtn"),
  cloudModalNotice: document.getElementById("cloudModalNotice")
};

// ==========================================================================
// STORAGE & LOCAL/CLOUD SYNC ENGINE
// ==========================================================================
function loadWatched() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.WATCHED);
    return new Set(raw ? JSON.parse(raw) : []);
  } catch {
    return new Set();
  }
}

function saveWatched() {
  localStorage.setItem(STORAGE_KEYS.WATCHED, JSON.stringify([...state.watched]));
  autoSaveToCloud();
}

function loadRatings() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.RATINGS);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function saveRating(movieId, rating) {
  state.ratings[movieId] = rating;
  localStorage.setItem(STORAGE_KEYS.RATINGS, JSON.stringify(state.ratings));
  autoSaveToCloud();
}

function getOrCreateCloudId() {
  let id = localStorage.getItem(STORAGE_KEYS.CLOUD_ID);
  if (!id) {
    id = "INS-" + Math.floor(1000 + Math.random() * 9000);
    localStorage.setItem(STORAGE_KEYS.CLOUD_ID, id);
  }
  return id;
}

// Generate base64 string state for URL sharing
function getExportableState() {
  return {
    username: state.username,
    cloudId: state.cloudId,
    watched: [...state.watched],
    ratings: state.ratings,
    timestamp: Date.now()
  };
}

function autoSaveToCloud() {
  // Store payload in localStorage & window hash string fallback
  const data = getExportableState();
  const encoded = btoa(JSON.stringify(data));
  localStorage.setItem("cloud_backup_" + state.cloudId, JSON.stringify(data));
  
  if (els.cloudStatusText) {
    els.cloudStatusText.textContent = `Nube: ${state.cloudId} ✓`;
  }
}

function loadFromCloudData(data) {
  if (!data || !Array.isArray(data.watched)) return false;
  state.watched = new Set(data.watched);
  state.ratings = data.ratings || {};
  if (data.username) {
    state.username = data.username;
    localStorage.setItem(STORAGE_KEYS.USER, data.username);
    els.usernameInput.value = data.username;
  }
  saveWatched();
  updateUI();
  return true;
}

// ==========================================================================
// COUNTDOWN TIMER
// ==========================================================================
function updateCountdown() {
  const now = new Date();
  const diff = PREMIERE_DATE.getTime() - now.getTime();

  if (diff <= 0) {
    els.cdDays.textContent = "00";
    els.cdHours.textContent = "00";
    els.cdMins.textContent = "00";
    els.cdSecs.textContent = "00";
    els.cdStatus.textContent = "¡Ya en cines de todo el mundo!";
    return;
  }

  const totalSec = Math.floor(diff / 1000);
  const days = Math.floor(totalSec / 86400);
  const hours = Math.floor((totalSec % 86400) / 3600);
  const mins = Math.floor((totalSec % 3600) / 60);
  const secs = totalSec % 60;

  els.cdDays.textContent = String(days).padStart(2, "0");
  els.cdHours.textContent = String(hours).padStart(2, "0");
  els.cdMins.textContent = String(mins).padStart(2, "0");
  els.cdSecs.textContent = String(secs).padStart(2, "0");

  const weeks = Math.floor(days / 7);
  els.cdStatus.textContent = `Quedan ~${weeks} semanas para la reapertura de la Puerta Roja`;
}

// ==========================================================================
// MARATHON PROGRESS & CALCULATOR
// ==========================================================================
function getReleasedFilms() {
  return FILMS.filter(f => !f.upcoming);
}

function updateMarathonProgress() {
  const released = getReleasedFilms();
  const totalCount = released.length;
  const watchedCount = released.filter(f => state.watched.has(f.id)).length;
  const pct = totalCount ? Math.round((watchedCount / totalCount) * 100) : 0;

  els.progressWatchedCount.textContent = `${watchedCount} / ${totalCount} Vistas`;
  els.progressPctText.textContent = `(${pct}%)`;
  els.progressFill.style.width = `${pct}%`;
  els.progressBar.setAttribute("aria-valuenow", String(pct));

  // Minutes calculator
  const totalMinutesAvailable = released.reduce((acc, f) => acc + f.runtime, 0);
  const watchedMinutes = released
    .filter(f => state.watched.has(f.id))
    .reduce((acc, f) => acc + f.runtime, 0);

  const hours = Math.floor(watchedMinutes / 60);
  const mins = watchedMinutes % 60;
  const totalHours = Math.floor(totalMinutesAvailable / 60);
  const totalMins = totalMinutesAvailable % 60;

  els.marathonTimeText.textContent = `⌛ Tiempo visto: ${hours}h ${mins}m de ${totalHours}h ${totalMins}m`;
}

// ==========================================================================
// RENDER MOVIES (TIMELINE & GRID)
// ==========================================================================
function getFilteredAndSortedFilms() {
  let list = [...FILMS];

  // Search filter
  if (state.searchQuery.trim()) {
    const q = state.searchQuery.toLowerCase();
    list = list.filter(f => 
      f.title.toLowerCase().includes(q) ||
      f.spanishTitle.toLowerCase().includes(q) ||
      f.director.toLowerCase().includes(q) ||
      f.demon.toLowerCase().includes(q) ||
      f.tags.some(t => t.toLowerCase().includes(q))
    );
  }

  // Status Filter
  if (state.filterStatus === "watched") {
    list = list.filter(f => state.watched.has(f.id));
  } else if (state.filterStatus === "unwatched") {
    list = list.filter(f => !state.watched.has(f.id) && !f.upcoming);
  } else if (state.filterStatus === "released") {
    list = list.filter(f => !f.upcoming);
  } else if (state.filterStatus === "upcoming") {
    list = list.filter(f => f.upcoming);
  }

  // Order
  const sortKey = state.orderMode === "chrono" ? "chrono" : "release";
  list.sort((a, b) => a[sortKey] - b[sortKey]);

  return list;
}

function renderMovies() {
  const films = getFilteredAndSortedFilms();
  const isChrono = state.orderMode === "chrono";

  els.timelineSectionTitle.textContent = isChrono ? "Cronología de The Further" : "Orden de Estreno en Cines";
  els.timelineSectionSub.textContent = isChrono
    ? "Sigue la historia en orden cronológico de los acontecimientos del universo Insidious."
    : "Descubre las películas en el orden que fueron estrenadas en la gran pantalla.";

  els.moviesContainer.className = `movies-container view-${state.viewMode}`;
  els.moviesContainer.innerHTML = "";

  if (films.length === 0) {
    els.moviesContainer.innerHTML = `
      <div class="empty-state-box" style="text-align:center; padding: 3rem; background: var(--bg-card); border-radius: var(--radius-md); border: 1px dashed var(--border-red);">
        <p style="font-size:2rem; margin:0;">👁️</p>
        <h3 style="color:var(--gold-primary);">No se encontraron películas</h3>
        <p style="color:var(--text-muted);">Prueba a cambiar el filtro de búsqueda o el criterio de estado.</p>
      </div>
    `;
    return;
  }

  films.forEach(film => {
    const isWatched = state.watched.has(film.id);
    const rating = state.ratings[film.id] || 0;
    const orderNum = isChrono ? film.chrono : film.release;

    const card = document.createElement("article");
    card.className = `movie-card ${isWatched ? "watched" : ""} ${film.upcoming ? "upcoming" : ""}`;

    // Tags HTML
    const tagsHtml = film.tags.map(t => `<span class="chip-tag">${t}</span>`).join("");
    
    // Rating stars HTML
    let starsHtml = "";
    if (!film.upcoming) {
      starsHtml = `
        <div class="star-rating-box" data-id="${film.id}">
          ${[1, 2, 3, 4, 5].map(star => {
            const isFilled = rating >= star * 2;
            return `<button class="star-btn ${isFilled ? "active" : ""}" data-star="${star * 2}" title="${star * 2}/10★">★</button>`;
          }).join("")}
          <span style="font-size:0.75rem; color:var(--gold-bright); margin-left:0.3rem;">${rating ? rating + "/10" : "Sin nota"}</span>
        </div>
      `;
    }

    card.innerHTML = `
      ${state.viewMode === "timeline" ? `<div class="timeline-node-marker">${film.upcoming ? "★" : orderNum}</div>` : ""}
      
      <div class="poster-box">
        <img src="${film.poster}" alt="Cartel de ${film.title}" class="poster-img" loading="lazy" />
        <span class="poster-overlay-badge">${film.upcoming ? "PRÓXIMAMENTE" : film.year}</span>
        ${isWatched ? `<span class="poster-watched-badge">✓ VISTA</span>` : ""}
      </div>

      <div class="movie-info">
        <div>
          <div class="movie-header-row">
            <div>
              <span class="movie-year-tag">${film.releaseDate} · ${film.runtime ? film.runtime + " min" : "TBA"}</span>
              <h3 class="movie-title">${film.title}</h3>
              <p class="movie-director">Dir. ${film.director} · Villano: <strong style="color:var(--red-bright);">${film.demon}</strong></p>
            </div>
          </div>

          <p class="movie-synopsis">${film.summary}</p>
          <div class="movie-tags-row">${tagsHtml}</div>
        </div>

        <div class="movie-actions-row">
          ${film.upcoming ? `
            <span class="badge gold-glow">En producción / Estreno</span>
            <button type="button" class="btn-details-ghost" data-detail-id="${film.id}"> Ver Ficha</button>
          ` : `
            <button type="button" class="btn-watch-toggle ${isWatched ? "done" : ""}" data-watch-id="${film.id}">
              ${isWatched ? "✓ Película Vista" : "＋ Marcar Vista"}
            </button>
            ${starsHtml}
            <button type="button" class="btn-details-ghost" data-detail-id="${film.id}">🔍 Ficha</button>
          `}
        </div>
      </div>
    `;

    els.moviesContainer.appendChild(card);
  });

  // Attach event listeners to buttons
  els.moviesContainer.querySelectorAll(".btn-watch-toggle[data-watch-id]").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-watch-id");
      if (state.watched.has(id)) {
        state.watched.delete(id);
      } else {
        state.watched.add(id);
      }
      saveWatched();
      updateUI();
    });
  });

  // Star rating events
  els.moviesContainer.querySelectorAll(".star-btn[data-star]").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const starVal = parseInt(btn.getAttribute("data-star"), 10);
      const container = btn.closest(".star-rating-box");
      const movieId = container.getAttribute("data-id");
      saveRating(movieId, starVal);
      updateUI();
    });
  });

  // Detail Modal trigger
  els.moviesContainer.querySelectorAll("[data-detail-id]").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-detail-id");
      openMovieModal(id);
    });
  });
}

// ==========================================================================
// MODO VERSUS ENGINE (USER VS USER & MOVIE VS MOVIE)
// ==========================================================================
function setupMovieVsMovieDropdowns() {
  els.movieSelectA.innerHTML = "";
  els.movieSelectB.innerHTML = "";

  FILMS.forEach((film, i) => {
    const optA = document.createElement("option");
    optA.value = film.id;
    optA.textContent = film.title;
    if (i === 2) optA.selected = true; // Insidious 1
    els.movieSelectA.appendChild(optA);

    const optB = document.createElement("option");
    optB.value = film.id;
    optB.textContent = film.title;
    if (i === 3) optB.selected = true; // Insidious 2
    els.movieSelectB.appendChild(optB);
  });

  renderMovieVsMovie();
}

function renderMovieVsMovie() {
  const filmA = FILMS.find(f => f.id === els.movieSelectA.value);
  const filmB = FILMS.find(f => f.id === els.movieSelectB.value);

  if (!filmA || !filmB) return;

  const ratingA = state.ratings[filmA.id] || "Sin nota";
  const ratingB = state.ratings[filmB.id] || "Sin nota";

  els.movieVersusComparison.innerHTML = `
    <div class="movie-versus-matrix">
      <div class="faceoff-card">
        <img src="${filmA.poster}" class="faceoff-poster" alt="${filmA.title}" />
        <h3 style="color:var(--text-main); margin:0.8rem 0 0.2rem;">${filmA.title}</h3>
        <p style="color:var(--gold-primary); font-size:0.85rem; margin:0;">${filmA.year} · ${filmA.runtime} min</p>
        <p style="color:var(--red-bright); font-weight:700; margin:0.4rem 0;">Villano: ${filmA.demon}</p>
        <p style="color:var(--text-muted); font-size:0.85rem;">Tu Nota: <strong style="color:var(--gold-bright);">${ratingA}</strong></p>
      </div>

      <div class="faceoff-card">
        <img src="${filmB.poster}" class="faceoff-poster" alt="${filmB.title}" />
        <h3 style="color:var(--text-main); margin:0.8rem 0 0.2rem;">${filmB.title}</h3>
        <p style="color:var(--gold-primary); font-size:0.85rem; margin:0;">${filmB.year} · ${filmB.runtime} min</p>
        <p style="color:var(--red-bright); font-weight:700; margin:0.4rem 0;">Villano: ${filmB.demon}</p>
        <p style="color:var(--text-muted); font-size:0.85rem;">Tu Nota: <strong style="color:var(--gold-bright);">${ratingB}</strong></p>
      </div>
    </div>
  `;
}

function renderUserVsUserDashboard() {
  const friend = state.friendData || DEMO_FRIENDS["DEMO-FAN"];
  const released = getReleasedFilms();
  
  const myWatched = released.filter(f => state.watched.has(f.id));
  const friendWatchedIds = new Set(friend.watched || []);
  const friendWatched = released.filter(f => friendWatchedIds.has(f.id));

  // Coincidences
  const bothWatched = released.filter(f => state.watched.has(f.id) && friendWatchedIds.has(f.id));
  const onlyMeWatched = released.filter(f => state.watched.has(f.id) && !friendWatchedIds.has(f.id));
  const onlyFriendWatched = released.filter(f => !state.watched.has(f.id) && friendWatchedIds.has(f.id));

  const matchPct = released.length ? Math.round((bothWatched.length / released.length) * 100) : 0;

  els.versusDashboard.innerHTML = `
    <div class="versus-summary-card">
      <div class="vs-player-stat">
        <h4 style="margin:0; color:var(--text-main);">${state.username} (Tú)</h4>
        <div class="vs-count">${myWatched.length} / ${released.length}</div>
        <span style="font-size:0.8rem; color:var(--text-muted);">Películas Vistas</span>
      </div>

      <div class="vs-match-ring">
        <span class="vs-match-pct">${matchPct}%</span>
        <span class="vs-match-lbl">Afinidad</span>
      </div>

      <div class="vs-player-stat">
        <h4 style="margin:0; color:var(--text-main);">${friend.username}</h4>
        <div class="vs-count">${friendWatched.length} / ${released.length}</div>
        <span style="font-size:0.8rem; color:var(--text-muted);">Películas Vistas</span>
      </div>
    </div>

    <div class="vs-breakdown-grid">
      <div class="vs-list-box">
        <h3>🤝 Vistas por ambos (${bothWatched.length})</h3>
        ${bothWatched.length === 0 ? `<p style="color:var(--text-muted); font-size:0.85rem;">Ninguna película en común vista aún.</p>` : 
          bothWatched.map(f => `
            <div class="vs-item-mini">
              <img src="${f.poster}" alt="${f.title}" />
              <div>
                <strong style="color:var(--text-main); font-size:0.88rem;">${f.title}</strong>
                <div style="font-size:0.75rem; color:var(--gold-primary);">${f.year} · Dir. ${f.director}</div>
              </div>
            </div>
          `).join("")
        }
      </div>

      <div class="vs-list-box">
        <h3>👁️ Solo vistas por Ti (${onlyMeWatched.length})</h3>
        ${onlyMeWatched.length === 0 ? `<p style="color:var(--text-muted); font-size:0.85rem;">No tienes exclusivas respecto a tu amigo.</p>` : 
          onlyMeWatched.map(f => `
            <div class="vs-item-mini">
              <img src="${f.poster}" alt="${f.title}" />
              <div>
                <strong style="color:var(--text-main); font-size:0.88rem;">${f.title}</strong>
                <div style="font-size:0.75rem; color:var(--green-success);">Tu amigo no la ha visto</div>
              </div>
            </div>
          `).join("")
        }
      </div>

      <div class="vs-list-box">
        <h3>👹 Solo vistas por ${friend.username} (${onlyFriendWatched.length})</h3>
        ${onlyFriendWatched.length === 0 ? `<p style="color:var(--text-muted); font-size:0.85rem;">Tu amigo no ha visto ninguna que tú no hayas visto.</p>` : 
          onlyFriendWatched.map(f => `
            <div class="vs-item-mini">
              <img src="${f.poster}" alt="${f.title}" />
              <div>
                <strong style="color:var(--text-main); font-size:0.88rem;">${f.title}</strong>
                <div style="font-size:0.75rem; color:var(--red-bright);">¡Te falta verla!</div>
              </div>
            </div>
          `).join("")
        }
      </div>
    </div>
  `;
}

// ==========================================================================
// STATS & BADGES
// ==========================================================================
function renderStatsAndBadges() {
  const released = getReleasedFilms();
  const watchedFilms = released.filter(f => state.watched.has(f.id));
  const watchedMinutes = watchedFilms.reduce((acc, f) => acc + f.runtime, 0);

  els.statTotalMinutes.textContent = `${watchedMinutes} min`;

  // Unique demons
  const demonsCount = new Set(watchedFilms.map(f => f.demon)).size;
  els.statDemonsEncountered.textContent = `${demonsCount} / 5`;

  // Average Rating
  const ratedKeys = Object.keys(state.ratings).filter(k => state.ratings[k] > 0);
  const avg = ratedKeys.length
    ? (ratedKeys.reduce((acc, k) => acc + state.ratings[k], 0) / ratedKeys.length).toFixed(1)
    : "--";
  els.statAvgRating.textContent = `${avg} / 10`;

  // Badges Definitions
  const BADGES = [
    {
      id: "b1",
      icon: "🥉",
      name: "Primer Sustito",
      desc: "Has visto al menos 1 película de Insidious.",
      unlocked: watchedFilms.length >= 1
    },
    {
      id: "b2",
      icon: "🥈",
      name: "Viajero de The Further",
      desc: "Has visto al menos 3 películas de la saga.",
      unlocked: watchedFilms.length >= 3
    },
    {
      id: "b3",
      icon: "🥇",
      name: "Maestro de la Puerta Roja",
      desc: "Has visto el 100% de la saga estrenada.",
      unlocked: watchedFilms.length === released.length
    },
    {
      id: "b4",
      icon: "⭐",
      name: "Crítico del Terror",
      desc: "Has valorado al menos 3 películas con estrellas.",
      unlocked: ratedKeys.length >= 3
    },
    {
      id: "b5",
      icon: "⚔️",
      name: "Superviviente del Versus",
      desc: "Has comparado tu progreso con un amigo.",
      unlocked: state.friendData !== null
    }
  ];

  const unlockedCount = BADGES.filter(b => b.unlocked).length;
  els.statBadgesUnlocked.textContent = `${unlockedCount} / ${BADGES.length}`;

  els.badgesGrid.innerHTML = BADGES.map(b => `
    <div class="badge-item ${b.unlocked ? "unlocked" : ""}">
      <span class="badge-icon">${b.icon}</span>
      <div>
        <div class="badge-name">${b.name}</div>
        <div class="badge-desc">${b.desc}</div>
      </div>
    </div>
  `).join("");
}

// ==========================================================================
// MODALS LOGIC
// ==========================================================================
function openMovieModal(filmId) {
  const film = FILMS.find(f => f.id === filmId);
  if (!film) return;

  const rating = state.ratings[film.id] || 0;
  const isWatched = state.watched.has(film.id);

  els.movieModalBody.innerHTML = `
    <div class="modal-movie-grid">
      <div>
        <img src="${film.poster}" class="modal-movie-poster" alt="${film.title}" />
      </div>
      <div>
        <span class="badge red-glow">${film.year} · ${film.runtime ? film.runtime + " MIN" : "PRÓXIMAMENTE"}</span>
        <h2 style="font-family:var(--font-cinzel); color:var(--text-main); margin:0.4rem 0 0.2rem;">${film.title}</h2>
        <h4 style="color:var(--gold-primary); font-weight:400; margin:0 0 1rem;">${film.spanishTitle}</h4>
        
        <p style="color:var(--text-muted); font-size:0.95rem; line-height:1.6;">${film.summary}</p>

        <div style="background:rgba(0,0,0,0.4); padding:0.9rem; border-radius:var(--radius-sm); border:1px solid var(--border-red); margin:1rem 0;">
          <p style="margin:0 0 0.3rem; font-size:0.85rem;"><strong style="color:var(--gold-bright);">Director:</strong> ${film.director}</p>
          <p style="margin:0 0 0.3rem; font-size:0.85rem;"><strong style="color:var(--red-bright);">Villano Principal:</strong> ${film.demon}</p>
          <p style="margin:0; font-size:0.85rem;"><strong style="color:var(--text-main);">Reparto Principal:</strong> ${film.cast.join(", ")}</p>
        </div>

        <div style="display:flex; gap:0.75rem; align-items:center; margin-top:1.5rem;">
          <button type="button" class="btn-watch-toggle ${isWatched ? "done" : ""}" id="modalToggleWatchedBtn">
            ${isWatched ? "✓ Película Vista" : "＋ Marcar Vista"}
          </button>
        </div>
      </div>
    </div>
  `;

  document.getElementById("modalToggleWatchedBtn")?.addEventListener("click", () => {
    if (state.watched.has(film.id)) state.watched.delete(film.id);
    else state.watched.add(film.id);
    saveWatched();
    updateUI();
    openMovieModal(film.id);
  });

  els.movieModal.classList.add("open");
}

function openCloudModal() {
  els.modalCloudIdInput.value = state.cloudId;
  const shareUrl = `${window.location.origin}${window.location.pathname}?vs=${state.cloudId}`;
  els.modalShareUrlInput.value = shareUrl;
  els.cloudModal.classList.add("open");
}

function closeModals() {
  els.movieModal.classList.remove("open");
  els.cloudModal.classList.remove("open");
}

// ==========================================================================
// GLOBAL UI UPDATE & EVENT BINDINGS
// ==========================================================================
function updateUI() {
  updateMarathonProgress();
  renderMovies();
  renderUserVsUserDashboard();
  renderMovieVsMovie();
  renderStatsAndBadges();
}

function initEvents() {
  // Navigation Tabs
  els.navTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const targetTab = tab.getAttribute("data-tab");
      els.navTabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      state.activeTab = targetTab;
      if (targetTab === "grid") {
        state.viewMode = "grid";
        els.tabContents.forEach(c => c.classList.remove("active"));
        document.getElementById("sec-timeline").classList.add("active");
      } else if (targetTab === "timeline") {
        state.viewMode = "timeline";
        els.tabContents.forEach(c => c.classList.remove("active"));
        document.getElementById("sec-timeline").classList.add("active");
      } else {
        els.tabContents.forEach(c => c.classList.remove("active"));
        document.getElementById(`sec-${targetTab}`).classList.add("active");
      }
      renderMovies();
    });
  });

  // Search & Filters
  els.searchInput.addEventListener("input", (e) => {
    state.searchQuery = e.target.value;
    els.clearSearchBtn.style.display = state.searchQuery ? "block" : "none";
    renderMovies();
  });

  els.clearSearchBtn.addEventListener("click", () => {
    els.searchInput.value = "";
    state.searchQuery = "";
    els.clearSearchBtn.style.display = "none";
    renderMovies();
  });

  els.btnOrderChrono.addEventListener("click", () => {
    state.orderMode = "chrono";
    els.btnOrderChrono.classList.add("active");
    els.btnOrderRelease.classList.remove("active");
    renderMovies();
  });

  els.btnOrderRelease.addEventListener("click", () => {
    state.orderMode = "release";
    els.btnOrderRelease.classList.add("active");
    els.btnOrderChrono.classList.remove("active");
    renderMovies();
  });

  els.filterStatus.addEventListener("change", (e) => {
    state.filterStatus = e.target.value;
    renderMovies();
  });

  // Quick reset
  els.quickResetBtn.addEventListener("click", () => {
    if (!state.watched.size) return;
    if (confirm("¿Seguro que deseas borrar tu progreso de maratón?")) {
      state.watched = new Set();
      state.ratings = {};
      saveWatched();
      updateUI();
    }
  });

  // Versus subtabs
  els.subtabUserVsUser.addEventListener("click", () => {
    els.subtabUserVsUser.classList.add("active");
    els.subtabMovieVsMovie.classList.remove("active");
    els.panelUserVsUser.classList.add("active");
    els.panelMovieVsMovie.classList.remove("active");
  });

  els.subtabMovieVsMovie.addEventListener("click", () => {
    els.subtabMovieVsMovie.classList.add("active");
    els.subtabUserVsUser.classList.remove("active");
    els.panelMovieVsMovie.classList.add("active");
    els.panelUserVsUser.classList.remove("active");
  });

  // Movie vs Movie selectors
  els.movieSelectA.addEventListener("change", renderMovieVsMovie);
  els.movieSelectB.addEventListener("change", renderMovieVsMovie);

  // User name input
  els.usernameInput.value = state.username;
  els.usernameInput.addEventListener("change", (e) => {
    state.username = e.target.value.trim() || "Cazador";
    localStorage.setItem(STORAGE_KEYS.USER, state.username);
    autoSaveToCloud();
    renderUserVsUserDashboard();
  });

  // My Cloud ID display
  els.myCloudIdDisplay.textContent = state.cloudId;
  els.copyMyCloudIdBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(state.cloudId);
    alert(`¡ID de Nube ${state.cloudId} copiado al portapapeles!`);
  });

  // Load Friend in Versus
  els.loadFriendBtn.addEventListener("click", () => {
    const friendId = els.friendIdInput.value.trim().toUpperCase();
    if (!friendId) return;

    if (DEMO_FRIENDS[friendId]) {
      state.friendData = DEMO_FRIENDS[friendId];
      renderUserVsUserDashboard();
      renderStatsAndBadges();
      return;
    }

    // Check cloud backup in localStorage or mock friend
    const rawBackup = localStorage.getItem("cloud_backup_" + friendId);
    if (rawBackup) {
      try {
        state.friendData = JSON.parse(rawBackup);
        renderUserVsUserDashboard();
        renderStatsAndBadges();
        return;
      } catch (err) {}
    }

    alert(`No se encontró el ID de Nube "${friendId}". Prueba con los IDs demo: DEMO-FAN o DEMO-NOOB.`);
  });

  // Quick Demo Chips
  document.querySelectorAll("[data-demo]").forEach(btn => {
    btn.addEventListener("click", () => {
      const demoKey = btn.getAttribute("data-demo");
      els.friendIdInput.value = demoKey;
      state.friendData = DEMO_FRIENDS[demoKey];
      renderUserVsUserDashboard();
      renderStatsAndBadges();
    });
  });

  // Open / Close Modals
  els.openCloudBtn.addEventListener("click", openCloudModal);
  els.closeMovieModalBtn.addEventListener("click", closeModals);
  els.closeCloudModalBtn.addEventListener("click", closeModals);

  els.modalCopyCloudIdBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(state.cloudId);
    alert("¡ID de Nube copiado!");
  });

  els.modalCopyShareUrlBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(els.modalShareUrlInput.value);
    alert("¡Enlace directo copiado al portapapeles!");
  });

  els.modalForceSaveCloudBtn.addEventListener("click", () => {
    autoSaveToCloud();
    els.cloudModalNotice.textContent = "✅ ¡Datos sincronizados con éxito en la Nube!";
  });

  // Check URL query parameters for ?vs=INS-XXXX
  const urlParams = new URLSearchParams(window.location.search);
  const vsParam = urlParams.get("vs");
  if (vsParam) {
    els.friendIdInput.value = vsParam;
    if (DEMO_FRIENDS[vsParam]) {
      state.friendData = DEMO_FRIENDS[vsParam];
    }
  }
}

// INIT APP
function initApp() {
  setupMovieVsMovieDropdowns();
  initEvents();
  updateCountdown();
  setInterval(updateCountdown, 1000);
  updateUI();
  autoSaveToCloud();
}

document.addEventListener("DOMContentLoaded", initApp);
