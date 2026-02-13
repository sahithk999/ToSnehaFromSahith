const buttons = document.querySelectorAll(".play-btn");
let currentlyPlaying = null;

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const audio = document.getElementById(button.dataset.audio);

    if (currentlyPlaying && currentlyPlaying !== audio) {
      currentlyPlaying.pause();
      currentlyPlaying.currentTime = 0;
      document.querySelectorAll(".play-btn").forEach(b => b.textContent = "▶ Play");
    }

    if (audio.paused) {
      audio.play();
      button.textContent = "⏸ Pause";
      currentlyPlaying = audio;
    } else {
      audio.pause();
      button.textContent = "▶ Play";
    }
  });
});
