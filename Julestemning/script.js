// script.js
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
let timer = 30;
let attempts = []; // store results = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let score = 0;
let paused = false;
let basket;
let gifts;
let keys = { left: false, right: false };
let spawnInterval;

function function resetGame() {
  score = 0;
  timer = 30;
  document.getElementById("score").innerText = "Poeng: " + score;
  document.getElementById("timer").innerText = "Tid: " + timer;
  basket = { x: 200, y: 520, width: 100, height: 40, speed: 6 };
  gifts = [];
  keys = { left: false, right: false };
}() {
  score = 0;
  document.getElementById("score").innerText = "Poeng: " + score;
  basket = { x: 200, y: 520, width: 100, height: 40, speed: 6 };
  gifts = [];
  keys = { left: false, right: false };
}

function spawnGift() {
  gifts.push({
    x: Math.random() * (canvas.width - 30),
    y: -40,
    size: 30,
    speed: 3 + Math.random() * 2
  });
}

function startSpawning() {
  spawnInterval = setInterval(spawnGift, 800);
}
function stopSpawning() {
  clearInterval(spawnInterval);
}

function drawBasket() {
  ctx.fillStyle = "#8B0000";
  ctx.fillRect(basket.x, basket.y, basket.width, basket.height);
  ctx.strokeStyle = "#fff";
  ctx.strokeRect(basket.x, basket.y, basket.width, basket.height);
}

function drawGifts() {
  gifts.forEach(gift => {
    ctx.fillStyle = "#FFD700";
    ctx.fillRect(gift.x, gift.y, gift.size, gift.size);
    ctx.fillStyle = "#C00000";
    ctx.fillRect(gift.x + gift.size/2 - 3, gift.y + 4, 6, gift.size - 8);
    ctx.fillRect(gift.x + 4, gift.y + gift.size/2 - 3, gift.size - 8, 6);
  });
}

document.addEventListener("keydown", (e) => {
  if (e.key.includes("Left")) keys.left = true;
  if (e.key.includes("Right")) keys.right = true;
});
document.addEventListener("keyup", (e) => {
  if (e.key.includes("Left")) keys.left = false;
  if (e.key.includes("Right")) keys.right = false;
});

canvas.addEventListener("mousemove", (e) => {
  const rect = canvas.getBoundingClientRect();
  const mouseX = e.clientX - rect.left;
  basket.x = Math.max(0, Math.min(canvas.width - basket.width, mouseX - basket.width / 2));
});

function function endGame() {
  paused = true;
  stopSpawning();
  attempts.push(score);
  alert("Tiden er ute! Du fikk " + score + " poeng. Tidligere forsøk: " + attempts.join(", "));
}

function update()() {
  if (!paused) {
    if (keys.left) basket.x -= basket.speed;
    if (keys.right) basket.x += basket.speed;
    basket.x = Math.max(0, Math.min(canvas.width - basket.width, basket.x));

    for (let i = gifts.length - 1; i >= 0; i--) {
      let g = gifts[i];
      g.y += g.speed;

      if (g.y + g.size >= basket.y && g.x < basket.x + basket.width && g.x + g.size > basket.x) {
        score++;
        document.getElementById("score").innerText = "Poeng: " + score;
        gifts.splice(i, 1);
        continue;
      }
      if (g.y > canvas.height + 50) gifts.splice(i, 1);
    }
  }

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawGifts();
  drawBasket();

  document.getElementById("timer").innerText = "Tid: " + timer;
  requestAnimationFrame(update);(update);
}

// Pause-knapp
const pauseBtn = document.getElementById("pauseBtn");
pauseBtn.addEventListener("click", () => {
  paused = !paused;
  pauseBtn.textContent = paused ? "Fortsett" : "Pause";
  if (paused) stopSpawning(); else startSpawning();
});

// Restart-knapp
const restartBtn = document.getElementById("restartBtn");
restartBtn.addEventListener("click", () => {
  resetGame();
  if (paused) {
    paused = false;
    pauseBtn.textContent = "Pause";
  }
  stopSpawning();
  startSpawning();
});

resetGame();
startSpawning();
update();
