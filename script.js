const audio = document.getElementById("mainAudio");
const playBtn = document.getElementById("playBtn");
const back10 = document.getElementById("back10");
const forward10 = document.getElementById("forward10");
const vinyl = document.getElementById("vinyl");
const title = document.getElementById("currentTitle");
const listItems = document.querySelectorAll("#songList li");

const progressBar = document.getElementById("progressBar");
const currentTimeEl = document.getElementById("currentTime");
const durationEl = document.getElementById("duration");

const songs = [
  { file: "song1.mp3", title: "🌹 Rose Day" },
  { file: "song2.mp3", title: "💍 Propose Day" },
  { file: "song3.mp3", title: "🍫 Chocolate Day" },
  { file: "song4.mp3", title: "🧸 Teddy Day" },
  { file: "song5.mp3", title: "💌 Promise Day" },
  { file: "song6.mp3", title: "🤗 Hug Day" },
  { file: "song7.mp3", title: "❤️ Valentine’s Day" }
];

let currentIndex = 0;

function loadSong(index) {
  currentIndex = index;
  audio.src = songs[index].file;
  title.textContent = songs[index].title;
}

function playSong() {
  audio.play();
  vinyl.classList.add("spinning");
  playBtn.textContent = "⏸";
}

function pauseSong() {
  audio.pause();
  vinyl.classList.remove("spinning");
  playBtn.textContent = "▶";
}

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

audio.addEventListener("timeupdate", () => {
  const percent = (audio.currentTime / audio.duration) * 100;
  progressBar.value = percent;

  currentTimeEl.textContent = formatTime(audio.currentTime);
});

audio.addEventListener("loadedmetadata", () => {
  durationEl.textContent = formatTime(audio.duration);
});

progressBar.addEventListener("input", () => {
  const time = (progressBar.value / 100) * audio.duration;
  audio.currentTime = time;
});

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${seconds}`;
}

listItems.forEach(item => {
  item.addEventListener("click", () => {
    const index = parseInt(item.dataset.index);
    loadSong(index);
    playSong();
  });
});
