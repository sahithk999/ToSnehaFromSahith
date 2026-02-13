const audio = document.getElementById("mainAudio");
const playBtn = document.getElementById("playBtn");
const back10 = document.getElementById("back10");
const forward10 = document.getElementById("forward10");
const vinyl = document.getElementById("vinyl");
const title = document.getElementById("currentTitle");
const progressBar = document.getElementById("progressBar");
const currentTimeEl = document.getElementById("currentTime");
const durationEl = document.getElementById("duration");
const trackButtons = document.querySelectorAll(".tracks button");

const songs = [
  { file: "song1.mp3", title: "🌹 Rose Day" },
  { file: "song2.mp3", title: "💍 Propose Day" },
  { file: "song3.mp3", title: "🍫 Chocolate Day" },
  { file: "song4.mp3", title: "🧸 Teddy Day" },
  { file: "song5.mp3", title: "💌 Promise Day" },
  { file: "song6.mp3", title: "🤗 Hug Day" },
  { file: "song7.mp3", title: "❤️ Valentine’s Day" }
];

let currentIndex = -1;

function loadSong(index) {
  currentIndex = index;
  audio.src = songs[index].file;
  title.textContent = "Now Playing • " + songs[index].title;

  trackButtons.forEach(btn => btn.classList.remove("active"));
  trackButtons[index].classList.add("active");
}

function playSong() {
  audio.play();
  vinyl.classList.add("spinning", "glow");
  vinyl.style.boxShadow = "0 0 80px rgba(255,255,255,0.8)";
  playBtn.textContent = "⏸";
}

function pauseSong() {
  audio.pause();
  vinyl.classList.remove("spinning", "glow");
  vinyl.style.boxShadow = "0 0 40px rgba(255,255,255,0.3)";
  playBtn.textContent = "▶";
}

playBtn.addEventListener("click", () => {
  if (currentIndex === -1) return; // nothing selected
  if (audio.paused) playSong();
  else pauseSong();
});

back10.addEventListener("click", () => {
  audio.currentTime = Math.max(0, audio.currentTime - 10);
});

forward10.addEventListener("click", () => {
  audio.currentTime = Math.min(audio.duration, audio.currentTime + 10);
});

audio.addEventListener("timeupdate", () => {
  if (!audio.duration) return;
  progressBar.value = (audio.currentTime / audio.duration) * 100;
  currentTimeEl.textContent = formatTime(audio.currentTime);
});

audio.addEventListener("loadedmetadata", () => {
  durationEl.textContent = formatTime(audio.duration);
});

progressBar.addEventListener("input", () => {
  if (!audio.duration) return;
  audio.currentTime = (progressBar.value / 100) * audio.duration;
});

function formatTime(time) {
  const m = Math.floor(time / 60);
  const s = Math.floor(time % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}

trackButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const index = parseInt(btn.dataset.index);
    loadSong(index);
    playSong();
  });
});
