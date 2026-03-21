let tracks = [
  {
    id: 0,
    title: "this is what falling in love feels like",
    artist: "JVKE",
    audioFile: "https://dpkgpgmmtayjxadaohmw.supabase.co/storage/v1/object/public/music/JVKE%20-%20this%20is%20what%20falling%20in%20love%20feels%20like%20(Official%20Video).mp3",
    backgroundVideo: "",
    scene: "bloom",
    typeClass: "soft",
    lrc: (globalThis.lyricsLibrary && globalThis.lyricsLibrary[1]) || ""
  },
  {
    id: 1,
    title: "Her",
    artist: "JVKE",
    audioFile: "https://dpkgpgmmtayjxadaohmw.supabase.co/storage/v1/object/public/music/JVKE%20-%20her%20(Official%20Illustrated%20Music%20Video).mp3",
    backgroundVideo: "",
    scene: "neon",
    typeClass: "neon",
    lrc: (globalThis.lyricsLibrary && globalThis.lyricsLibrary[2]) || ""
  },
  {
    id: 2,
    title: "Let The World Burn",
    artist: "Chris Grey",
    audioFile: "https://dpkgpgmmtayjxadaohmw.supabase.co/storage/v1/object/public/music/Chris%20Grey%20-%20LET%20THE%20WORLD%20BURN%20(Official%20Lyric%20Video).mp3",
    backgroundVideo: "",
    scene: "embers",
    typeClass: "cinema",
    lrc: (globalThis.lyricsLibrary && globalThis.lyricsLibrary[3]) || ""
  },
  {
    id: 3,
    title: "Blue",
    artist: "yung kai",
    audioFile: "https://dpkgpgmmtayjxadaohmw.supabase.co/storage/v1/object/public/music/yung%20kai%20-%20blue%20(Lyrics).mp3",
    backgroundVideo: "",
    scene: "tide",
    typeClass: "ocean",
    lrc: (globalThis.lyricsLibrary && globalThis.lyricsLibrary[4]) || ""
  },
  {
    id: 4,
    title: "Daylight",
    artist: "David Kushner",
    audioFile: "https://dpkgpgmmtayjxadaohmw.supabase.co/storage/v1/object/public/music/David%20Kushner%20-%20Daylight%20(Official%20Music%20Video).mp3",
    backgroundVideo: "",
    scene: "eclipse",
    typeClass: "noir",
    lrc: (globalThis.lyricsLibrary && globalThis.lyricsLibrary[5]) || ""
  },
  {
    id: 5,
    title: "World's Smallest Violin",
    artist: "AJR",
    audioFile: "https://dpkgpgmmtayjxadaohmw.supabase.co/storage/v1/object/public/music/AJR%20-%20Worlds%20Smallest%20Violin%20(Official%20Video).mp3",
    backgroundVideo: "",
    scene: "brass",
    typeClass: "brisk",
    lrc: (globalThis.lyricsLibrary && globalThis.lyricsLibrary[6]) || ""
  },
  {
    id: 6,
    title: "Disney Movie",
    artist: "John Michael Howell & ZVC",
    audioFile: "https://dpkgpgmmtayjxadaohmw.supabase.co/storage/v1/object/public/music/John%20Michael%20Howell%20&%20ZVC%20-%20Disney%20Movie.mp3",
    backgroundVideo: "",
    scene: "bloom",
    typeClass: "soft",
    lrc: (globalThis.lyricsLibrary && globalThis.lyricsLibrary[7]) || ""
  },
  {
    id: 7,
    title: "Untitled",
    artist: "Rex Orange County",
    audioFile: "https://dpkgpgmmtayjxadaohmw.supabase.co/storage/v1/object/public/music/Untitled%20-%20Rex%20Orange%20County%20_%20Lirik%20Terjemahan.mp3",
    backgroundVideo: "",
    scene: "neon",
    typeClass: "neon",
    lrc: (globalThis.lyricsLibrary && globalThis.lyricsLibrary[8]) || ""
  },
  {
    id: 8,
    title: "A Thousand Years",
    artist: "John Michael Howell, JVKE, & ZVC",
    audioFile: "https://dpkgpgmmtayjxadaohmw.supabase.co/storage/v1/object/public/music/John%20Michael%20Howell,%20JVKE,%20and%20ZVC%20-%20A%20Thousand%20Years.mp3",
    backgroundVideo: "",
    scene: "embers",
    typeClass: "cinema",
    lrc: (globalThis.lyricsLibrary && globalThis.lyricsLibrary[9]) || ""
  },
  {
    id: 9,
    title: "golden hour",
    artist: "JVKE",
    audioFile: "https://dpkgpgmmtayjxadaohmw.supabase.co/storage/v1/object/public/music/JVKE%20-%20golden%20hour%20(Lyrics).mp3",
    backgroundVideo: "",
    scene: "tide",
    typeClass: "ocean",
    lrc: (globalThis.lyricsLibrary && globalThis.lyricsLibrary[10]) || ""
  }
];

const trackThemes = [
  { accent: "#63f5c6", accent2: "#ffb86b", accent3: "#78b4ff" },
  { accent: "#ff8ba7", accent2: "#ffd166", accent3: "#a78bfa" },
  { accent: "#ff7b72", accent2: "#ffb86b", accent3: "#ffd166" },
  { accent: "#7dd3fc", accent2: "#67e8f9", accent3: "#a5b4fc" },
  { accent: "#f59e0b", accent2: "#ef4444", accent3: "#fb7185" },
  { accent: "#9bdb4d", accent2: "#4ade80", accent3: "#facc15" }
];
const sceneCycle = ["bloom", "neon", "embers", "tide", "eclipse", "brass"];
const typeCycle = ["soft", "neon", "cinema", "ocean", "noir", "brisk"];

const importFileEl = document.getElementById("import-file");
const playlistEl = document.getElementById("playlist");
const lyricsListEl = document.getElementById("lyrics-list");
const lyricsSectionEl = document.querySelector(".lyrics");
const sceneLayerEl = document.getElementById("scene-layer");
const stageStateEl = document.getElementById("stage-state");
const stageStateBadgeEl = document.getElementById("stage-state-badge");
const stageStateTitleEl = document.getElementById("stage-state-title");
const stageStateSubtitleEl = document.getElementById("stage-state-subtitle");
const audioEl = document.getElementById("audio");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const rewindBtn = document.getElementById("rewind");
const nextBtn = document.getElementById("next");
const forwardBtn = document.getElementById("forward");
const seekEl = document.getElementById("seek");
const waveformEl = document.getElementById("waveform");
const sleepMinutesEl = document.getElementById("sleep-minutes");
const sleepApplyBtn = document.getElementById("sleep-apply");
const sleepCancelBtn = document.getElementById("sleep-cancel");
const sleepStatusEl = document.getElementById("sleep-status");
const timeCurrentEl = document.getElementById("time-current");
const timeTotalEl = document.getElementById("time-total");
const trackTitleEl = document.getElementById("track-title");
const trackArtistEl = document.getElementById("track-artist");
const playbackStatusEl = document.getElementById("playback-status");
const prefersInstantLyricScroll = window.matchMedia("(pointer: coarse), (prefers-reduced-motion: reduce)").matches;
const bgVideoEl = document.getElementById("bg-video");
const particlesEl = document.getElementById("particles");
const loopEl = document.getElementById("loop");
const autoNextEl = document.getElementById("autonext");
const toggleOrbsEl = document.getElementById("toggle-orbs");
const toggleMotionEl = document.getElementById("toggle-motion");

let currentTrackIndex = -1;
let lyricLines = [];
let lyricEls = [];
let activeIndex = -1;
let rafId = null;
let audioContext = null;
let analyser = null;
let frequencyData = null;
let mediaSource = null;
let pulseStrength = 0;
let currentTheme = trackThemes[0];
let currentThemeRgb = {
  accent: hexToRgb(trackThemes[0].accent),
  accent2: hexToRgb(trackThemes[0].accent2),
  accent3: hexToRgb(trackThemes[0].accent3)
};
let switchTimer = null;
let stageStateTimer = null;
let autoNextTimer = null;
let sleepTimerId = null;
let sleepTickerId = null;
let sleepDeadline = 0;
let particlesContext = null;
let particles = [];
let particlesRafId = null;
let waveformContext = null;

audioEl.crossOrigin = "anonymous";

function parseLrc(lrcText = "") {
  const lines = lrcText.split(/\r?\n/);
  const result = [];

  for (const line of lines) {
    const match = line.match(/\[(\d{2}):(\d{2})(?:\.(\d{1,2}))?\]\s*(.*)/);
    if (!match) continue;
    const min = Number(match[1]);
    const sec = Number(match[2]);
    const ms = match[3] ? Number(match[3].padEnd(2, "0")) : 0;
    const time = min * 60 + sec + ms / 100;
    const text = match[4].trim();
    result.push({ time, text: text.length ? text : " " });
  }

  return result.sort((a, b) => a.time - b.time);
}

function formatTime(seconds) {
  if (!Number.isFinite(seconds)) return "0:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${String(secs).padStart(2, "0")}`;
}

function hexToRgb(hex) {
  const normalized = hex.replace("#", "");
  const value = Number.parseInt(normalized, 16);
  const r = (value >> 16) & 255;
  const g = (value >> 8) & 255;
  const b = value & 255;
  return `${r}, ${g}, ${b}`;
}

function applyTrackTheme(index) {
  currentTheme = trackThemes[index % trackThemes.length];
  currentThemeRgb = {
    accent: hexToRgb(currentTheme.accent),
    accent2: hexToRgb(currentTheme.accent2),
    accent3: hexToRgb(currentTheme.accent3)
  };
  document.documentElement.style.setProperty("--accent", currentTheme.accent);
  document.documentElement.style.setProperty("--accent-2", currentTheme.accent2);
  document.documentElement.style.setProperty("--accent-3", currentTheme.accent3);
  document.documentElement.style.setProperty("--accent-rgb", currentThemeRgb.accent);
  document.documentElement.style.setProperty("--accent-2-rgb", currentThemeRgb.accent2);
  document.documentElement.style.setProperty("--accent-3-rgb", currentThemeRgb.accent3);
  document.documentElement.style.setProperty("--orb-1", `rgba(${currentThemeRgb.accent}, 0.28)`);
  document.documentElement.style.setProperty("--orb-2", `rgba(${currentThemeRgb.accent2}, 0.2)`);
  document.documentElement.style.setProperty("--orb-3", `rgba(${currentThemeRgb.accent3}, 0.22)`);
}

function applyTrackTypography(track) {
  document.body.classList.remove("type-soft", "type-neon", "type-cinema", "type-ocean", "type-noir", "type-brisk");
  if (track?.typeClass) {
    document.body.classList.add(`type-${track.typeClass}`);
  }
}

function setPlaybackStatus(state, text = "") {
  playbackStatusEl.dataset.state = state;
  playbackStatusEl.textContent = text;
  playbackStatusEl.classList.toggle("has-text", Boolean(text));
}

function setSleepStatus(text) {
  sleepStatusEl.textContent = text;
}

function updateSleepCountdown() {
  if (!sleepDeadline) {
    setSleepStatus("Timer off");
    return;
  }

  const remainingMs = Math.max(0, sleepDeadline - Date.now());
  const totalSeconds = Math.ceil(remainingMs / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  setSleepStatus(`Stop in ${minutes}:${String(seconds).padStart(2, "0")}`);
}

function clearSleepTimer(preserveSelection = false) {
  if (sleepTimerId) window.clearTimeout(sleepTimerId);
  if (sleepTickerId) window.clearInterval(sleepTickerId);
  sleepTimerId = null;
  sleepTickerId = null;
  sleepDeadline = 0;
  if (!preserveSelection) {
    sleepMinutesEl.value = "0";
  }
  setSleepStatus("Timer off");
}

function startSleepTimer(minutes) {
  clearSleepTimer(true);
  if (!minutes) return;

  sleepMinutesEl.value = String(minutes);
  sleepDeadline = Date.now() + minutes * 60 * 1000;
  updateSleepCountdown();
  sleepTickerId = window.setInterval(updateSleepCountdown, 1000);
  sleepTimerId = window.setTimeout(() => {
    audioEl.pause();
    showStageState("Sleep Timer", "Playback stopped", "Timer selesai", 1800);
    clearSleepTimer();
  }, minutes * 60 * 1000);
}

function nextTrackId() {
  return tracks.reduce((maxId, track) => Math.max(maxId, track.id), -1) + 1;
}

function extractLrcMetadata(text, key) {
  const match = text.match(new RegExp(`\\[${key}:(.*?)\\]`, "i"));
  return match ? match[1].trim() : "";
}

function normalizeImportedTrack(rawTrack, orderIndex, fallbackTitle = "") {
  const title = rawTrack.title || rawTrack.name || extractLrcMetadata(rawTrack.lrc || "", "ti") || fallbackTitle || `Imported Track ${orderIndex + 1}`;
  const artist = rawTrack.artist || extractLrcMetadata(rawTrack.lrc || "", "ar") || "Imported";
  const visualIndex = (tracks.length + orderIndex) % trackThemes.length;

  return {
    id: nextTrackId() + orderIndex,
    title,
    artist,
    audioFile: rawTrack.audioFile || rawTrack.audioUrl || "",
    backgroundVideo: rawTrack.backgroundVideo || rawTrack.backgroundUrl || "",
    scene: rawTrack.scene || sceneCycle[visualIndex],
    typeClass: rawTrack.typeClass || typeCycle[visualIndex],
    lrc: rawTrack.lrc || rawTrack.lrcText || rawTrack.lyrics || ""
  };
}

async function importTrackFiles(fileList) {
  const files = Array.from(fileList || []);
  if (!files.length) return;

  const importedTracks = [];

  for (const file of files) {
    const lowerName = file.name.toLowerCase();
    const text = await file.text();

    if (lowerName.endsWith(".json")) {
      const parsed = JSON.parse(text);
      const items = Array.isArray(parsed) ? parsed : Array.isArray(parsed.tracks) ? parsed.tracks : [parsed];
      items.forEach((item) => {
        importedTracks.push(normalizeImportedTrack(item, importedTracks.length));
      });
      continue;
    }

    if (lowerName.endsWith(".lrc") || lowerName.endsWith(".txt")) {
      const fallbackTitle = file.name.replace(/\.[^.]+$/, "");
      importedTracks.push(
        normalizeImportedTrack(
          { lrc: text },
          importedTracks.length,
          fallbackTitle
        )
      );
    }
  }

  if (!importedTracks.length) {
    showStageState("Import", "No valid tracks", "Use .json or .lrc files", 1800);
    return;
  }

  const firstImportedIndex = tracks.length;
  tracks = [...tracks, ...importedTracks];
  renderPlaylist();

  if (currentTrackIndex < 0) {
    setTrack(firstImportedIndex);
  } else {
    playlistEl.querySelectorAll(".track").forEach((item) => {
      item.classList.toggle("active", Number(item.dataset.index) === currentTrackIndex);
    });
  }

  showStageState("Import", `${importedTracks.length} track added`, importedTracks[0].title, 1800);
}

function triggerTrackTransition() {
  lyricsSectionEl.classList.add("is-switching");
  if (switchTimer) window.clearTimeout(switchTimer);
  switchTimer = window.setTimeout(() => {
    lyricsSectionEl.classList.remove("is-switching");
  }, 260);
}

function showStageState(badge, title, subtitle, duration = 1400) {
  stageStateBadgeEl.textContent = badge;
  stageStateTitleEl.textContent = title;
  stageStateSubtitleEl.textContent = subtitle;
  stageStateEl.classList.add("is-visible");
  stageStateEl.setAttribute("aria-hidden", "false");

  if (stageStateTimer) window.clearTimeout(stageStateTimer);
  if (duration > 0) {
    stageStateTimer = window.setTimeout(() => {
      hideStageState();
    }, duration);
  }
}

function hideStageState() {
  stageStateEl.classList.remove("is-visible");
  stageStateEl.setAttribute("aria-hidden", "true");
}

function applyTrackBackdrop(track) {
  document.body.classList.remove(...sceneCycle.map((scene) => `scene-${scene}`));

  if (track?.scene) {
    document.body.classList.add(`scene-${track.scene}`);
    sceneLayerEl.dataset.scene = track.scene;
  } else {
    sceneLayerEl.dataset.scene = "";
  }

  if (track?.backgroundVideo) {
    if (bgVideoEl.src !== track.backgroundVideo) {
      bgVideoEl.src = track.backgroundVideo;
      bgVideoEl.load();
    }
    bgVideoEl.classList.add("active");
    bgVideoEl.play().catch((error) => console.error(error));
  } else {
    bgVideoEl.pause();
    bgVideoEl.removeAttribute("src");
    bgVideoEl.load();
    bgVideoEl.classList.remove("active");
  }
}

function seekBy(deltaSeconds) {
  if (!audioEl.duration) return;
  const nextTime = Math.min(audioEl.duration, Math.max(0, audioEl.currentTime + deltaSeconds));
  audioEl.currentTime = nextTime;
  updateSeek();
  updateLyrics();
}

async function initAudioAnalysis() {
  const Context = window.AudioContext || window.webkitAudioContext;
  if (analyser || !Context) return;

  try {
    audioContext = new Context();
    mediaSource = audioContext.createMediaElementSource(audioEl);
    analyser = audioContext.createAnalyser();
    analyser.fftSize = 128;
    analyser.smoothingTimeConstant = 0.82;
    frequencyData = new Uint8Array(analyser.frequencyBinCount);
    mediaSource.connect(analyser);
    analyser.connect(audioContext.destination);
  } catch (error) {
    console.error(error);
    analyser = null;
  }
}

async function resumeAudioAnalysis() {
  if (!audioContext) return;
  if (audioContext.state === "suspended") {
    try {
      await audioContext.resume();
    } catch (error) {
      console.error(error);
    }
  }
}

function updateAudioReactiveMotion() {
  if (analyser && frequencyData) {
    analyser.getByteFrequencyData(frequencyData);
    const total = frequencyData.reduce((sum, value) => sum + value, 0);
    const average = total / frequencyData.length / 255;
    pulseStrength = pulseStrength * 0.82 + average * 0.18;
  } else {
    pulseStrength *= 0.9;
  }

  document.documentElement.style.setProperty("--pulse-strength", pulseStrength.toFixed(3));
}

function resizeParticlesCanvas() {
  if (!particlesEl) return;

  const ratio = window.devicePixelRatio || 1;
  particlesEl.width = Math.floor(window.innerWidth * ratio);
  particlesEl.height = Math.floor(window.innerHeight * ratio);
  particlesEl.style.width = `${window.innerWidth}px`;
  particlesEl.style.height = `${window.innerHeight}px`;
  particlesContext = particlesEl.getContext("2d");
  if (particlesContext) {
    particlesContext.setTransform(1, 0, 0, 1, 0, 0);
    particlesContext.scale(ratio, ratio);
  }
}

function resizeWaveformCanvas() {
  if (!waveformEl) return;

  const ratio = window.devicePixelRatio || 1;
  const width = Math.max(240, waveformEl.clientWidth || 280);
  const height = Math.max(42, waveformEl.clientHeight || 42);
  waveformEl.width = Math.floor(width * ratio);
  waveformEl.height = Math.floor(height * ratio);
  waveformContext = waveformEl.getContext("2d");
  if (waveformContext) {
    waveformContext.setTransform(1, 0, 0, 1, 0, 0);
    waveformContext.scale(ratio, ratio);
  }
}

function drawWaveform() {
  if (!waveformContext || !waveformEl) return;

  const width = waveformEl.clientWidth || 280;
  const height = waveformEl.clientHeight || 42;
  waveformContext.clearRect(0, 0, width, height);

  waveformContext.fillStyle = "rgba(255, 255, 255, 0.03)";
  waveformContext.fillRect(0, 0, width, height);

  const bars = Math.max(28, Math.floor(width / 8));
  const barWidth = Math.max(2, width / bars - 2);
  const gap = width / bars;
  const progressX = audioEl.duration ? (audioEl.currentTime / audioEl.duration) * width : 0;
  const motionOff = document.body.classList.contains("motion-off");

  for (let i = 0; i < bars; i += 1) {
    const ratio = i / bars;
    let value = 0.12;

    if (analyser && frequencyData) {
      const index = Math.floor((i / bars) * frequencyData.length);
      value = frequencyData[index] / 255;
    } else if (!motionOff) {
      value = 0.2 + 0.18 * Math.abs(Math.sin(performance.now() / 400 + i * 0.42));
    }

    const barHeight = 6 + value * (height - 10) * (0.55 + pulseStrength * 0.7);
    const x = i * gap;
    const y = (height - barHeight) / 2;
    const active = x <= progressX;

    waveformContext.fillStyle = active
      ? `rgba(${currentThemeRgb.accent}, ${0.45 + value * 0.5})`
      : "rgba(255, 255, 255, 0.12)";
    waveformContext.fillRect(x, y, barWidth, barHeight);
  }
}

function createParticles() {
  const count = Math.max(20, Math.min(56, Math.floor(window.innerWidth / 28)));
  particles = Array.from({ length: count }, () => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    radius: 0.8 + Math.random() * 2.4,
    speedX: (Math.random() - 0.5) * 0.18,
    speedY: 0.18 + Math.random() * 0.45,
    alpha: 0.12 + Math.random() * 0.3,
    colorIndex: Math.floor(Math.random() * 3)
  }));
}

function getParticleColor(index, alpha) {
  const colorMap = [
    `rgba(${currentThemeRgb.accent}, ${alpha})`,
    `rgba(${currentThemeRgb.accent2}, ${alpha})`,
    `rgba(${currentThemeRgb.accent3}, ${alpha})`
  ];
  return colorMap[index] || colorMap[0];
}

function animateParticles() {
  if (!particlesContext) return;

  particlesContext.clearRect(0, 0, window.innerWidth, window.innerHeight);
  const motionOff = document.body.classList.contains("motion-off");
  const effectsOff = document.body.classList.contains("effects-off");

  if (!effectsOff) {
    particles.forEach((particle) => {
      if (!motionOff) {
        particle.x += particle.speedX * (1 + pulseStrength * 2.2);
        particle.y -= particle.speedY * (1 + pulseStrength * 2.4);

        if (particle.y < -30) {
          particle.y = window.innerHeight + 20;
          particle.x = Math.random() * window.innerWidth;
        }

        if (particle.x < -40) particle.x = window.innerWidth + 20;
        if (particle.x > window.innerWidth + 40) particle.x = -20;
      }

      particlesContext.beginPath();
      particlesContext.fillStyle = getParticleColor(particle.colorIndex, particle.alpha);
      particlesContext.arc(particle.x, particle.y, particle.radius + pulseStrength * 1.2, 0, Math.PI * 2);
      particlesContext.fill();
    });
  }

  particlesRafId = window.requestAnimationFrame(animateParticles);
}

function startParticles() {
  resizeParticlesCanvas();
  createParticles();
  if (particlesRafId) cancelAnimationFrame(particlesRafId);
  animateParticles();
}

async function playCurrentAudio() {
  if (!tracks.length || !audioEl.getAttribute("src")) return;
  await initAudioAnalysis();
  await resumeAudioAnalysis();

  try {
    await audioEl.play();
  } catch (error) {
    console.error(error);
    setPlaybackStatus("error", "Playback blocked");
  }
}

function updatePlayButton(isPlaying) {
  playBtn.textContent = isPlaying ? "Pause" : "Play";
}

function setControlsDisabled(disabled) {
  playBtn.disabled = disabled;
  prevBtn.disabled = disabled;
  rewindBtn.disabled = disabled;
  nextBtn.disabled = disabled;
  forwardBtn.disabled = disabled;
  seekEl.disabled = disabled;
  loopEl.disabled = disabled;
  autoNextEl.disabled = disabled;
}

function updateControlsForTrack(track) {
  const hasTracks = tracks.length > 0;
  const hasAudio = Boolean(track?.audioFile);

  prevBtn.disabled = !hasTracks;
  nextBtn.disabled = !hasTracks;
  playBtn.disabled = !hasAudio;
  rewindBtn.disabled = !hasAudio;
  forwardBtn.disabled = !hasAudio;
  seekEl.disabled = !hasAudio;
  loopEl.disabled = !hasAudio;
  autoNextEl.disabled = !hasAudio;
}

function renderPlaylist() {
  playlistEl.innerHTML = "";
  if (!tracks.length) return;

  tracks.forEach((track, index) => {
    const item = document.createElement("li");
    item.className = "track";
    item.dataset.index = String(index);
    if (index === currentTrackIndex) item.classList.add("active");

    const title = document.createElement("div");
    title.className = "track-meta";
    const audioStatus =
      track.audioFile && !track.audioFile.startsWith("http")
        ? `<div class="status">File: ${track.audioFile}</div>`
        : "";
    title.innerHTML = `
      <div>
        <div class="track-title">${track.title}</div>
        <div class="track-artist">${track.artist}</div>
        ${audioStatus}
      </div>
    `;

    item.appendChild(title);
    playlistEl.appendChild(item);
  });
}

function renderLyrics(track) {
  lyricLines = track ? parseLrc(track.lrc) : [];
  lyricEls = [];
  activeIndex = -1;
  lyricsListEl.innerHTML = "";
  if (!lyricLines.length) return;

  lyricLines.forEach((line, index) => {
    const el = document.createElement("div");
    el.className = "lyric-line upcoming";
    el.dataset.index = String(index);
    el.textContent = line.text;
    el.style.setProperty("--progress", "0%");
    el.style.setProperty("--line-blur", "2px");
    el.style.setProperty("--line-scale", "0.94");
    el.style.setProperty("--line-shift-x", "8px");
    el.style.setProperty("--line-shift-y", "4px");
    el.style.setProperty("--line-opacity", "0.28");
    lyricEls.push(el);
    lyricsListEl.appendChild(el);
  });
}

function updateSeek() {
  if (!audioEl.duration) {
    seekEl.value = 0;
    timeCurrentEl.textContent = formatTime(0);
    timeTotalEl.textContent = formatTime(0);
    return;
  }

  const progress = (audioEl.currentTime / audioEl.duration) * 100;
  seekEl.value = progress;
  timeCurrentEl.textContent = formatTime(audioEl.currentTime);
  timeTotalEl.textContent = formatTime(audioEl.duration);
}

function findActiveIndex(time) {
  if (!lyricLines.length) return -1;
  if (time < lyricLines[0].time) return -1;

  let low = 0;
  let high = lyricLines.length - 1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (lyricLines[mid].time <= time) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return high;
}

function updateLyrics() {
  const time = audioEl.currentTime;
  const nextActive = findActiveIndex(time);

  if (nextActive !== activeIndex) {
    activeIndex = nextActive;
    lyricEls.forEach((el, idx) => {
      const distance = activeIndex < 0 ? Math.min(idx + 1, 6) : Math.min(Math.abs(idx - activeIndex), 6);
      el.classList.remove("past", "current", "upcoming");
      el.style.setProperty("--progress", "0%");
      el.style.setProperty("--line-blur", `${distance * 0.75}px`);
      el.style.setProperty("--line-scale", idx === activeIndex ? "1" : `${Math.max(0.88, 1 - distance * 0.025)}`);
      el.style.setProperty("--line-shift-x", idx === activeIndex ? "0px" : `${Math.min(distance * 3, 16)}px`);
      el.style.setProperty("--line-shift-y", idx === activeIndex ? "0px" : `${Math.min(distance * 1.5, 10)}px`);
      el.style.setProperty("--line-opacity", `${Math.max(0.18, 0.82 - distance * 0.12)}`);
      if (idx < activeIndex) el.classList.add("past");
      else if (idx === activeIndex) el.classList.add("current");
      else el.classList.add("upcoming");
    });

    if (activeIndex >= 0 && lyricEls[activeIndex]) {
      lyricEls[activeIndex].scrollIntoView({
        behavior: prefersInstantLyricScroll ? "auto" : "smooth",
        block: "center"
      });
    }
  }

  if (activeIndex >= 0 && lyricLines[activeIndex]) {
    const current = lyricLines[activeIndex];
    const next = lyricLines[activeIndex + 1];
    const span = next ? Math.max(0.2, next.time - current.time) : 3;
    const progress = Math.min(1, Math.max(0, (time - current.time) / span));
    lyricEls[activeIndex].style.setProperty("--progress", `${(progress * 100).toFixed(1)}%`);
  }
}

function startRaf() {
  if (rafId) cancelAnimationFrame(rafId);

  const loop = () => {
    updateSeek();
    updateLyrics();
    updateAudioReactiveMotion();
    drawWaveform();
    rafId = requestAnimationFrame(loop);
  };

  loop();
}

function stopRaf() {
  if (rafId) cancelAnimationFrame(rafId);
  rafId = null;
  pulseStrength = 0;
  document.documentElement.style.setProperty("--pulse-strength", "0");
  drawWaveform();
}

function setEmptyState() {
  currentTrackIndex = -1;
  if (autoNextTimer) window.clearTimeout(autoNextTimer);
  audioEl.pause();
  stopRaf();
  audioEl.removeAttribute("src");
  audioEl.load();
  trackTitleEl.textContent = "";
  trackArtistEl.textContent = "";
  renderLyrics(null);
  lyricsListEl.scrollTop = 0;
  updateSeek();
  updatePlayButton(false);
  setControlsDisabled(true);
  applyTrackTheme(0);
  applyTrackTypography(null);
  applyTrackBackdrop(null);
  hideStageState();
  setPlaybackStatus("idle", "");
  document.body.classList.remove("is-playing");
}

function setTrack(index, keepTime = false) {
  if (!tracks.length) {
    setEmptyState();
    return;
  }

  if (index < 0) index = tracks.length - 1;
  if (index >= tracks.length) index = 0;
  currentTrackIndex = index;

  if (autoNextTimer) window.clearTimeout(autoNextTimer);
  audioEl.pause();
  stopRaf();
  applyTrackTheme(index);
  applyTrackTypography(tracks[index]);
  triggerTrackTransition();

  playlistEl.querySelectorAll(".track").forEach((item) => {
    item.classList.toggle("active", Number(item.dataset.index) === index);
  });

  const track = tracks[index];
  applyTrackBackdrop(track);
  trackTitleEl.textContent = track.title;
  trackArtistEl.textContent = track.artist;
  renderLyrics(track);
  lyricsListEl.scrollTop = 0;
  updateControlsForTrack(track);
  showStageState("Now Playing", track.title, track.artist, 1250);
  setPlaybackStatus("loading", "Loading audio...");

  if (track.audioFile) {
    audioEl.src = track.audioFile;
    audioEl.load();
    if (!keepTime) audioEl.currentTime = 0;
  } else {
    audioEl.removeAttribute("src");
    audioEl.load();
    updateSeek();
  }

  updatePlayButton(false);
}

playlistEl.addEventListener("click", (event) => {
  const item = event.target.closest(".track");
  if (!item || !tracks.length) return;
  const index = Number(item.dataset.index);
  setTrack(index);
});

if (importFileEl) {
  importFileEl.addEventListener("change", async () => {
    if (!importFileEl.files?.length) return;

    try {
      await importTrackFiles(importFileEl.files);
    } catch (error) {
      console.error(error);
      showStageState("Import", "Import failed", "Check file format", 1800);
    } finally {
      importFileEl.value = "";
    }
  });
}

sleepApplyBtn.addEventListener("click", () => {
  startSleepTimer(Number(sleepMinutesEl.value));
});

sleepCancelBtn.addEventListener("click", () => {
  clearSleepTimer();
});

playBtn.addEventListener("click", async () => {
  if (!tracks.length || !audioEl.getAttribute("src")) return;

  if (!audioEl.paused) {
    audioEl.pause();
    return;
  }

  await playCurrentAudio();
});

prevBtn.addEventListener("click", () => {
  if (!tracks.length) return;

  const wasPlaying = !audioEl.paused;
  setTrack(currentTrackIndex - 1);
  if (wasPlaying && tracks[currentTrackIndex]?.audioFile) {
    playCurrentAudio();
  }
});

rewindBtn.addEventListener("click", () => {
  seekBy(-5);
});

nextBtn.addEventListener("click", () => {
  if (!tracks.length) return;

  const wasPlaying = !audioEl.paused;
  setTrack(currentTrackIndex + 1);
  if (wasPlaying && tracks[currentTrackIndex]?.audioFile) {
    playCurrentAudio();
  }
});

forwardBtn.addEventListener("click", () => {
  seekBy(5);
});

seekEl.addEventListener("input", () => {
  if (!audioEl.duration) return;
  const time = (Number(seekEl.value) / 100) * audioEl.duration;
  audioEl.currentTime = time;
  updateLyrics();
});

loopEl.addEventListener("change", () => {
  audioEl.loop = loopEl.checked;
});

audioEl.addEventListener("play", () => {
  updatePlayButton(true);
  document.body.classList.add("is-playing");
  startRaf();
  setPlaybackStatus("ready", "");
});

audioEl.addEventListener("pause", () => {
  updatePlayButton(false);
  document.body.classList.remove("is-playing");
  stopRaf();
});

audioEl.addEventListener("ended", () => {
  updatePlayButton(false);
  stopRaf();
  const track = tracks[currentTrackIndex];
  if (track) {
    showStageState("Selesai", track.title, "Playback selesai", autoNextEl.checked ? 720 : 1800);
  }
  if (loopEl.checked || !tracks.length) return;
  if (autoNextEl.checked) {
    autoNextTimer = window.setTimeout(() => {
      setTrack(currentTrackIndex + 1);
      if (tracks[currentTrackIndex]?.audioFile) {
        playCurrentAudio();
      }
    }, 720);
  }
});

audioEl.addEventListener("loadedmetadata", () => {
  timeTotalEl.textContent = formatTime(audioEl.duration);
  setPlaybackStatus("ready", "Ready");
});

audioEl.addEventListener("loadstart", () => {
  setPlaybackStatus("loading", "Loading audio...");
});

audioEl.addEventListener("waiting", () => {
  setPlaybackStatus("buffering", "Buffering...");
});

audioEl.addEventListener("stalled", () => {
  setPlaybackStatus("buffering", "Network slow...");
});

audioEl.addEventListener("seeking", () => {
  if (!audioEl.paused) {
    setPlaybackStatus("buffering", "Seeking...");
  }
});

audioEl.addEventListener("canplay", () => {
  setPlaybackStatus("ready", "Ready");
});

audioEl.addEventListener("playing", () => {
  setPlaybackStatus("ready", "");
});

audioEl.addEventListener("error", () => {
  setPlaybackStatus("error", "Audio unavailable");
  const track = tracks[currentTrackIndex];
  if (track) {
    showStageState("Error", track.title, "Audio gagal dimuat", 2200);
  }
});

toggleOrbsEl.addEventListener("change", () => {
  document.body.classList.toggle("effects-off", !toggleOrbsEl.checked);
});

toggleMotionEl.addEventListener("change", () => {
  document.body.classList.toggle("motion-off", !toggleMotionEl.checked);
});

window.addEventListener("resize", () => {
  resizeParticlesCanvas();
  createParticles();
  resizeWaveformCanvas();
  drawWaveform();
});

window.addEventListener("pointermove", (event) => {
  if (!document.body.classList.contains("motion-off")) {
    const xRatio = event.clientX / window.innerWidth - 0.5;
    const yRatio = event.clientY / window.innerHeight - 0.5;
    document.documentElement.style.setProperty("--parallax-x", `${(xRatio * 20).toFixed(2)}px`);
    document.documentElement.style.setProperty("--parallax-y", `${(yRatio * 16).toFixed(2)}px`);
  }
});

window.addEventListener("pointerleave", () => {
  document.documentElement.style.setProperty("--parallax-x", "0px");
  document.documentElement.style.setProperty("--parallax-y", "0px");
});

window.addEventListener("keydown", (event) => {
  const target = event.target;
  const tagName = target?.tagName?.toLowerCase();
  if (target?.isContentEditable || tagName === "input" || tagName === "textarea" || tagName === "select") {
    return;
  }

  if (!tracks.length) return;

  if (event.code === "Space") {
    event.preventDefault();
    playBtn.click();
    return;
  }

  if (event.code === "ArrowLeft") {
    event.preventDefault();
    seekBy(-5);
    return;
  }

  if (event.code === "ArrowRight") {
    event.preventDefault();
    seekBy(5);
    return;
  }

  if (event.code === "ArrowUp") {
    event.preventDefault();
    prevBtn.click();
    return;
  }

  if (event.code === "ArrowDown") {
    event.preventDefault();
    nextBtn.click();
  }
});

renderPlaylist();
if (tracks.length) {
  setTrack(0);
} else {
  setEmptyState();
}
startParticles();
resizeWaveformCanvas();
drawWaveform();
clearSleepTimer();
audioEl.loop = loopEl.checked;
