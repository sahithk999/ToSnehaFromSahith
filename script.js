/* 🔐 HEART PASSWORD */
const correct = ["S","N","E","H","A"];
let input = [];

const progress = document.getElementById("progress");

document.querySelectorAll("#heartPassword button").forEach(btn => {
  btn.onclick = () => {
    input.push(btn.dataset.letter);
    progress.innerText = input.join(" ");

    if (input.length === correct.length) {
      if (input.join("") === correct.join("")) unlock();
      else wrong();
    }
  };
});

function unlock() {
  progress.innerText = "Unlocked with love 💖";
  setTimeout(() => {
    document.getElementById("lockScreen").style.display = "none";
    document.getElementById("siteContent").style.display = "block";
  }, 800);
}

function wrong() {
  input = [];
  progress.innerText = "Oops… try again 💕";
  document.getElementById("heartPassword").classList.add("shake");
  setTimeout(() => {
    document.getElementById("heartPassword").classList.remove("shake");
  }, 400);
}

/* 🎵 MUSIC */
const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");
let playing = false;

musicBtn.onclick = () => {
  if (!playing) {
    music.play();
    musicBtn.textContent = "⏸ Pause Music";
  } else {
    music.pause();
    musicBtn.textContent = "🎵 Play Music";
  }
  playing = !playing;
};

/* 💖 SNEHA MODE */
document.getElementById("snehaModeBtn").onclick = () => {
  document.body.classList.toggle("sneha");
};

/* 💌 NOTES */
function showNote(type) {
  const note = document.getElementById("noteText");
  if (type === "happy") note.innerText = "Your smile is my peace 😊";
  if (type === "miss") note.innerText = "Distance never separated our hearts 💖";
  if (type === "sad") note.innerText = "Even bad days end with us 🤍";
}

/* ✨ SCROLL ANIMATION */
window.addEventListener("scroll", () => {
  document.querySelectorAll(".event").forEach(e => {
    if (e.getBoundingClientRect().top < window.innerHeight - 100) {
      e.classList.add("show");
    }
  });
});

/* 🖼️ MODAL */
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");

document.querySelectorAll(".gallery img").forEach(img => {
  img.onclick = () => {
    modal.style.display = "flex";
    modalImg.src = img.src;
  };
});
modal.onclick = () => modal.style.display = "none";

/* ⏳ ANNIVERSARY COUNTDOWN */
const anniversary = new Date("November 01, 2026 00:00:00").getTime();
setInterval(() => {
  const diff = anniversary - new Date().getTime();
  if (diff <= 0) {
    document.getElementById("timer").innerText =
      "Happy First Anniversary, My Love 🤍";
    return;
  }
  const d = Math.floor(diff / (1000*60*60*24));
  const h = Math.floor((diff / (1000*60*60)) % 24);
  const m = Math.floor((diff / (1000*60)) % 60);
  document.getElementById("timer").innerText =
    `${d} days • ${h} hours • ${m} minutes`;
}, 1000);
