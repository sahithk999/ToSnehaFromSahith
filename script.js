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
const btn = document.getElementById("musicBtn");
let playing = false;

btn.onclick = () => {
  if (!playing) {
    music.play();
    btn.textContent = "⏸ Pause Music";
  } else {
    music.pause();
    btn.textContent = "🎵 Play Music";
  }
  playing = !playing;
};

/* NOTES */
function showNote(type) {
  const note = document.getElementById("noteText");
  if (type === "happy") {
    note.innerText = "Your smile is my favorite thing 😊";
  } else if (type === "miss") {
    note.innerText = "I’m always with you, even when I’m not 💖";
  } else {
    note.innerText = "Bad days pass, my love for you doesn’t 🤍";
  }
}

/* SCROLL ANIMATION */
const events = document.querySelectorAll(".event");
window.addEventListener("scroll", () => {
  events.forEach(e => {
    const top = e.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
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
