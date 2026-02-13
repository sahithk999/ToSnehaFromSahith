const audio = document.getElementById("mainAudio");
const vinyl = document.getElementById("vinyl");
const heartsContainer = document.getElementById("hearts");
const canvas = document.getElementById("sparkles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function createHeart() {
  const heart = document.createElement("span");
  heart.innerHTML = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (10 + Math.random() * 20) + "px";
  heartsContainer.appendChild(heart);
  setTimeout(() => heart.remove(), 8000);
}

setInterval(() => {
  if (!audio.paused) createHeart();
}, 500);

/* Sparkles */
const particles = [];
function createParticle() {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 2,
    alpha: Math.random()
  });
}

for (let i = 0; i < 100; i++) createParticle();

function animateSparkles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    ctx.fillStyle = "rgba(255,255,255," + p.alpha + ")";
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fill();
  });
  requestAnimationFrame(animateSparkles);
}
animateSparkles();

/* Pulse and Spin */
audio.addEventListener("play", () => {
  vinyl.classList.add("spinning", "pulse");
});

audio.addEventListener("pause", () => {
  vinyl.classList.remove("spinning", "pulse");
});
