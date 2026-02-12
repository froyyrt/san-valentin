const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const card = document.getElementById("card");
const final = document.getElementById("final");
const reveal = document.querySelector(".reveal");

let yesScale = 1;

noBtn.addEventListener("mouseenter", () => {
  const maxX = 120;
  const maxY = 80;

  const x = Math.random() * maxX - maxX / 2;
  const y = Math.random() * maxY - maxY / 2;

  noBtn.style.transform = `translate(${x}px, ${y}px)`;

  yesScale += 0.15;
  yesBtn.style.transform = `scale(${yesScale})`;
});

yesBtn.addEventListener("click", () => {
  card.classList.add("hidden");
  final.classList.remove("hidden");

  confetti({
    particleCount: 200,
    spread: 120,
    origin: { y: 0.6 }
  });
});

/* Corazones */
const hearts = document.querySelector(".hearts");

setInterval(() => {
  const heart = document.createElement("span");
  heart.innerText = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 3 + 4 + "s";
  hearts.appendChild(heart);

  setTimeout(() => heart.remove(), 7000);
}, 300);

/* Link sorpresa */
reveal.addEventListener("click", () => {
  window.open("LINK_AQUI_DESPUES", "_blank");
});
