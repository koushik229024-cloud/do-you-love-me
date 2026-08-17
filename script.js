const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const mainBox = document.getElementById("mainBox");
const loveLetter = document.getElementById("loveLetter");

// No button magic 😆
noBtn.addEventListener("click", () => {
  const buttonWidth = noBtn.offsetWidth;
  const buttonHeight = noBtn.offsetHeight;

  const minX = 20;
  const maxX = window.innerWidth - buttonWidth - 20;

  const minY = 20;
  const maxY = window.innerHeight - buttonHeight - 20;

  let newX;
  let newY;

  // বর্তমান অবস্থান
  const currentX = noBtn.getBoundingClientRect().left;
  const currentY = noBtn.getBoundingClientRect().top;

  // একটু একটু করে সরবে
  const moveDistance = 100;

  newX = currentX + (Math.random() > 0.5 ? moveDistance : -moveDistance);
  newY = currentY + (Math.random() > 0.5 ? moveDistance : -moveDistance);

  // Screen-এর ভিতরে আটকে রাখবে
  newX = Math.max(minX, Math.min(newX, maxX));
  newY = Math.max(minY, Math.min(newY, maxY));

  noBtn.style.position = "fixed";
  noBtn.style.left = newX + "px";
  noBtn.style.top = newY + "px";
  noBtn.style.zIndex = "100";
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
