const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const mainBox = document.getElementById("mainBox");
const loveLetter = document.getElementById("loveLetter");

// No button magic 😆
noBtn.addEventListener("click", () => {
  const maxX = window.innerWidth - noBtn.offsetWidth - 20;
  const maxY = window.innerHeight - noBtn.offsetHeight - 20;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.position = "fixed";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});

// Yes button ❤️
yesBtn.addEventListener("click", () => {
  mainBox.style.display = "none";
  loveLetter.style.display = "block";

  createHearts();
});

// Floating hearts 💖
function createHearts() {
  for (let i = 0; i < 25; i++) {
    const heart = document.createElement("div");

    heart.className = "heart";
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (4 + Math.random() * 4) + "s";
    heart.style.animationDelay = Math.random() * 2 + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 8000);
  }
}

// Background hearts ❤️
setInterval(() => {
  const heart = document.createElement("div");

  heart.className = "heart";
  heart.innerHTML = "💕";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (5 + Math.random() * 3) + "s";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 8000);
}, 700);
