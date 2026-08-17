const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const mainBox = document.getElementById("mainBox");
const loveLetter = document.getElementById("loveLetter");

// No button magic 😆
noBtn.addEventListener("click", () => {
  const padding = 20;

  const maxX = window.innerWidth - noBtn.offsetWidth - padding;
  const maxY = window.innerHeight - noBtn.offsetHeight - padding;

  const x = padding + Math.random() * (maxX - padding);
  const y = padding + Math.random() * (maxY - padding);

  noBtn.style.position = "fixed";
  noBtn.style.left = Math.max(padding, x) + "px";
  noBtn.style.top = Math.max(padding, y) + "px";
});
// Yes ❤️
yesBtn.addEventListener("click", () => {
  mainBox.style.display = "none";

  romanticCelebration();

  setTimeout(() => {
    loveLetter.style.display = "block";
  }, 1800);
});

// Romantic celebration 💖
function romanticCelebration() {
  document.body.classList.add("romantic");

  // Big hearts
  for (let i = 0; i < 35; i++) {
    const heart = document.createElement("div");

    heart.className = "celebration-heart";
    heart.innerHTML = ["❤️", "💕", "💗", "💖", "💘"][
      Math.floor(Math.random() * 5)
    ];

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDelay = Math.random() * 1.5 + "s";
    heart.style.fontSize = 18 + Math.random() * 25 + "px";

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 5000);
  }

  // Romantic sparkles ✨
  for (let i = 0; i < 30; i++) {
    const sparkle = document.createElement("div");

    sparkle.className = "sparkle";
    sparkle.innerHTML = "✨";

    sparkle.style.left = Math.random() * 100 + "vw";
    sparkle.style.top = Math.random() * 100 + "vh";
    sparkle.style.animationDelay = Math.random() * 1.5 + "s";

    document.body.appendChild(sparkle);

    setTimeout(() => sparkle.remove(), 4000);
  }

  // Celebration message
  const message = document.createElement("div");
  message.className = "celebration-message";
  message.innerHTML = "I Knew It! ❤️";

  document.body.appendChild(message);

  setTimeout(() => {
    message.remove();
  }, 1700);
}

// Background floating hearts
setInterval(() => {
  const heart = document.createElement("div");

  heart.className = "heart";
  heart.innerHTML = ["❤️", "💕", "💗"][Math.floor(Math.random() * 3)];

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 5 + Math.random() * 3 + "s";

  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 8000);
}, 700);
