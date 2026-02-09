/* PASSWORD */
function unlock() {
  const pwd = document.getElementById("password").value.toLowerCase();
  if (pwd === "sneha") {
    document.getElementById("lockScreen").style.display = "none";
    document.getElementById("siteContent").style.display = "block";
  } else {
    alert("Try again 💕");
  }
}

/* MUSIC */
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

/* SNEHA MODE */
document.getElementById("snehaModeBtn").onclick = () => {
  document.body.classList.toggle("sneha");
};

/* NOTES */
function showNote(type) {
  const note = document.getElementById("noteText");
  if (type === "happy") note.innerText = "Your smile is my peace 😊";
  if (type === "miss") note.innerText = "Distance never separated our hearts 💖";
  if (type === "sad") note.innerText = "Even bad days end with us 🤍";
}

/* SCROLL ANIMATION */
const events = document.querySelectorAll(".event");
window.addEventListener("scroll", () => {
  events.forEach(e => {
    if (e.getBoundingClientRect().top < window.innerHeight - 100) {
      e.classList.add("show");
    }
  });
});

/* IMAGE MODAL */
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");

document.querySelectorAll(".gallery img").forEach(img => {
  img.onclick = () => {
    modal.style.display = "flex";
    modalImg.src = img.src;
  };
});

modal.onclick = () => modal.style.display = "none";

/* ANNIVERSARY COUNTDOWN */
const anniversary = new Date("November 01, 2026 00:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const diff = anniversary - now;

  if (diff <= 0) {
    document.getElementById("timer").innerText =
      "Happy First Anniversary, My Love 🤍";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((diff / (1000 * 60)) % 60);

  document.getElementById("timer").innerText =
    `${days} days • ${hours} hours • ${mins} minutes`;
}, 1000);
