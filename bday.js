// Confetti animation
function createConfetti() {
  const confetti = document.createElement("div");
  confetti.classList.add("confetti");
  confetti.style.left = Math.random() * window.innerWidth + "px";
  confetti.style.backgroundColor =
    "hsl(" + Math.random() * 360 + ", 100%, 50%)";
  confetti.style.animationDuration = (Math.random() * 3 + 2) + "s";
  document.body.appendChild(confetti);

  setTimeout(() => {
    confetti.remove();
  }, 5000);
}
setInterval(createConfetti, 200);

// Music play
function playMusic() {
  const song = document.getElementById("birthdaySong");
  song.play();
}