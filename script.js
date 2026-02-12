const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const card = document.getElementById("card");
const final = document.getElementById("final");
const reveal = document.getElementById("reveal");
const surprise = document.getElementById("surprise");
const heartsContainer = document.querySelector(".hearts");

let yesScale = 1;

/* Botón NO */
noBtn.addEventListener("mouseenter", () => {
  const maxX = 150;
  const maxY = 100;

  const x = Math.random() * maxX - maxX / 2;
  const y = Math.random() * maxY - maxY / 2;

  noBtn.style.transform = `translate(${x}px, ${y}px)`;

  yesScale += 0.15;
  yesBtn.style.transform = `scale(${yesScale})`;
});

/* Botón SÍ */
yesBtn.addEventListener("click", () => {
  card.classList.add("hidden");
  final.classList.remove("hidden");

  confetti({
    particleCount: 200,
    spread: 120,
    origin: { y: 0.6 }
  });
});

/* Corazones flotando */
function createFloatingHeart() {
  const heart = document.createElement("span");
  heart.innerText = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 10 + 20 + "px";
  heart.style.position = "fixed";
  heart.style.animation = `floatUp ${4 + Math.random() * 3}s linear forwards`;

  heartsContainer.appendChild(heart);

  setTimeout(() => heart.remove(), 7000);
}

setInterval(createFloatingHeart, 400);

const style = document.createElement("style");
style.innerHTML = `
@keyframes floatUp {
  from { transform: translateY(100vh); }
  to { transform: translateY(-10vh); opacity: 0; }
}
`;
document.head.appendChild(style);

/* Revelar carta */
reveal.addEventListener("click", () => {
  reveal.classList.add("hidden");
  surprise.classList.add("show");

  confetti({
    particleCount: 150,
    spread: 120,
    origin: { y: 0.6 }
  });
});
