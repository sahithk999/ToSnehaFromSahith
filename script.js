const audio = document.getElementById("mainAudio");
const vinyl = document.getElementById("vinyl");
const playBtn = document.getElementById("playBtn");
const back10 = document.getElementById("back10");
const forward10 = document.getElementById("forward10");
const progressBar = document.getElementById("progressBar");
const currentTimeEl = document.getElementById("currentTime");
const durationEl = document.getElementById("duration");
const trackButtons = document.querySelectorAll(".tracks button");
const currentTitle = document.getElementById("currentTitle");
const heartsContainer = document.getElementById("hearts");

const intro = document.getElementById("intro");
const introMusic = document.getElementById("introMusic");
const enterBtn = document.getElementById("enterBtn");

/* Play intro music when button is clicked */
enterBtn.addEventListener("click", () => {
  introMusic.play();

  intro.style.opacity = "0";
  setTimeout(() => {
    intro.style.display = "none";
  }, 1000);
});


const songs = [
  { file: "song1.mp3", title: "🌹 Rose Day" },
  { file: "song2.mp3", title: "💍 Propose Day" },
  { file: "song3.mp3", title: "🍫 Chocolate Day" },
  { file: "song4.mp3", title: "🧸 Teddy Day" },
  { file: "song5.mp3", title: "💌 Promise Day" },
  { file: "song6.mp3", title: "🤗 Hug Day" },
  { file: "song7.mp3", title: "😘 Kiss Day" },
  { file: "song8.mp3", title: "❤️ Valentine’s Day" }
];

let currentIndex = -1;

/* Load Song */
function loadSong(index) {
  currentIndex = index;
  audio.src = songs[index].file;
  currentTitle.textContent = "Now Playing • " + songs[index].title;

  trackButtons.forEach(btn => btn.classList.remove("active"));
  trackButtons[index].classList.add("active");
}

/* Play */
function playSong() {
  if (currentIndex === -1) return;
  audio.play();
  vinyl.classList.add("spinning", "pulse");
  playBtn.textContent = "⏸";
}

/* Pause */
function pauseSong() {
  audio.pause();
  vinyl.classList.remove("spinning", "pulse");
  playBtn.textContent = "▶";
}

/* Buttons */
playBtn.addEventListener("click", () => {
  if (audio.paused) playSong();
  else pauseSong();
});

back10.addEventListener("click", () => {
  audio.currentTime = Math.max(0, audio.currentTime - 10);
});

forward10.addEventListener("click", () => {
  audio.currentTime = Math.min(audio.duration, audio.currentTime + 10);
});

/* Track selection */
trackButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    loadSong(parseInt(btn.dataset.index));
    playSong();
  });
});

/* Progress Bar */
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

/* Floating Hearts (ONLY WHEN PLAYING) */
setInterval(() => {
  if (!audio.paused && currentIndex !== -1) {
    const heart = document.createElement("span");
    heart.innerHTML = "💖";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "-20px";
    heart.style.fontSize = (15 + Math.random() * 20) + "px";
    heart.style.animation = "floatUp 6s linear forwards";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 6000);
  }
}, 600);


