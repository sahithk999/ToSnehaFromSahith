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

function showNote(type) {
  const text = document.getElementById("noteText");

  if (type === "happy") {
    text.innerText = "Your smile is my favorite thing in the world 😊";
  } else if (type === "miss") {
    text.innerText = "I’m always with you, even when I’m not 💖";
  } else {
    text.innerText = "Bad days pass, my love for you doesn’t 🤍";
  }
}
