const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// --- MUSIKK ---
const happyMusic = new Audio("tcmac.fr - Justin Timberlake - SexyBack (Lyrics) ft. Timbaland.mp3"); // legg musikkfil her
const sadMusic = new Audio("sad.mp3");     // legg musikkfil her
happyMusic.loop = true;
sadMusic.loop = true;
happyMusic.volume = 0.5; // Juster volum
sadMusic.volume = 0.5;   // Juster volum

// --- BAKGRUNNSBILDER ---
// Oppretter bildeobjekter for alle bakgrunnene
let defaultImage = new Image();
defaultImage.src = "bilder/default.jpg";
let happyImage = new Image();
happyImage.src = "bilder/happy_background.webp";
let sadImage = new Image();
sadImage.src = "bilder/sad_background.jpg";

let currentBgImage = defaultImage; // Bildet som tegnes for øyeblikket

let timer = 30;
let attempts = [];
let score = 0;
let paused = false;
let gameStarted = false;
let isHappyMode = false; // Ny variabel for å spore musikk/bakgrunnstilstand
let basket;
let gifts;
let keys = { left: false, right: false };
let spawnInterval;
let timerInterval;

const pauseBtn = document.getElementById("pauseBtn");
const restartBtn = document.getElementById("restartBtn");

// Hjelpefunksjon for å sjekke om alle bildene er lastet
function areAllImagesLoaded() {
    return defaultImage.complete && happyImage.complete && sadImage.complete;
}

// ---- START SPILL NÅR ALLE BILDER ER LASTET ----
// Lytter på det siste bildet (eller sjekker når koden kjøres)
defaultImage.onload = happyImage.onload = sadImage.onload = () => {
    if (areAllImagesLoaded() && !gameStarted) {
        startGame();
    }
};

// Hvis bildene allerede er lastet (f.eks. i cache)
if (areAllImagesLoaded() && !gameStarted) {
    startGame();
}


function startGame(){
    gameStarted = true;
    resetGame();
    startSpawning();
    startTimer();
    update();
}

// ---- RESET GAME ----
function resetGame() {
  score = 0;
  timer = 30;
  isHappyMode = false; // Resetter status
  happyMusic.pause();
  happyMusic.currentTime = 0;
  sadMusic.pause();
  sadMusic.currentTime = 0;
  currentBgImage = defaultImage; // Setter standard bakgrunn

  document.getElementById("score").innerText = "Poeng: " + score;
  document.getElementById("timer").innerText = "Tid: " + timer;

  basket = { x: 200, y: 520, width: 100, height: 40, speed: 6 };
  gifts = [];
  keys = { left: false, right: false };
}

// ---- BYTTE MUSIKK/BAKGRUNN ----
function setHappyMode() {
    if (!isHappyMode) {
        isHappyMode = true;
        currentBgImage = happyImage;
        sadMusic.pause();
        happyMusic.play();
    }
}

function setSadMode() {
    if (isHappyMode) { // Bytt kun hvis vi var i Happy Mode
        isHappyMode = false;
        currentBgImage = sadImage;
        happyMusic.pause();
        sadMusic.play();
    }
}

// ---- SPAWN GIFTS ----
function spawnGift() {
  gifts.push({
    x: Math.random() * (canvas.width - 30),
    y: -40,
    size: 30,
    speed: 3 + Math.random() * 2 // Gir varierende hastighet
  });
}

// ---- START/STOP SPAWNING ----
function startSpawning() {
  if (spawnInterval) clearInterval(spawnInterval); // Sørg for at vi kun har ett intervall
  spawnInterval = setInterval(spawnGift, 800);
}
function stopSpawning() {
  clearInterval(spawnInterval);
}

// ---- DRAW ----
function drawBackground() {
    // Sørg for at currentBgImage er lastet før det tegnes
    if(currentBgImage.complete) {
        ctx.drawImage(currentBgImage, 0, 0, canvas.width, canvas.height);
    } else {
        // Fallback farge hvis bildet ikke er lastet
        ctx.fillStyle = "#eaf7ff";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
}

function drawBasket() {
  // Bruk canvasens kontekst
  ctx.fillStyle = "#8B0000";
  ctx.fillRect(basket.x, basket.y, basket.width, basket.height);
  ctx.strokeStyle = "#fff";
  ctx.lineWidth = 2;
  ctx.strokeRect(basket.x, basket.y, basket.width, basket.height);
}

function drawGifts() {
  gifts.forEach(gift => {
    // Tegn en enkel julegave
    ctx.fillStyle = "#FFD700"; // Gullfarge på gave
    ctx.fillRect(gift.x, gift.y, gift.size, gift.size);
    ctx.fillStyle = "#C00000"; // Rødt bånd
    // Vertikalt bånd
    ctx.fillRect(gift.x + gift.size/2 - 3, gift.y, 6, gift.size);
    // Horisontalt bånd
    ctx.fillRect(gift.x, gift.y + gift.size/2 - 3, gift.size, 6);
  });
}

// ---- INPUT (Uendret) ----
document.addEventListener("keydown", e => {
  if(e.key === "ArrowLeft") keys.left = true;
  if(e.key === "ArrowRight") keys.right = true;
});
document.addEventListener("keyup", e => {
  if(e.key === "ArrowLeft") keys.left = false;
  if(e.key === "ArrowRight") keys.right = false;
});

canvas.addEventListener("mousemove", e => {
  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  basket.x = Math.max(0, Math.min(canvas.width - basket.width, x - basket.width/2));
});
canvas.addEventListener("touchmove", e => {
  e.preventDefault();
  const rect = canvas.getBoundingClientRect();
  const x = e.touches[0].clientX - rect.left;
  basket.x = Math.max(0, Math.min(canvas.width - basket.width, x - basket.width/2));
}, { passive: false });

// ---- END GAME (Uendret) ----
function endGame() {
  paused = true;
  stopSpawning();
  clearInterval(timerInterval);
  attempts.push(score);
  // Stopper musikk ved slutten
  happyMusic.pause();
  sadMusic.pause();
  alert("Tiden er ute! Du fikk " + score + " poeng.\nTidligere forsøk: " + attempts.join(", "));
}

// ---- MAIN LOOP ----
function update() {
  // requestAnimationFrame kalles alltid for å tegne, uansett pause.
  requestAnimationFrame(update);

  if(!paused){
    // Flytt kurven
    if(keys.left) basket.x -= basket.speed;
    if(keys.right) basket.x += basket.speed;
    basket.x = Math.max(0, Math.min(canvas.width - basket.width, basket.x));

    // Oppdater og sjekk gaver
    for(let i=gifts.length-1;i>=0;i--){
      const g = gifts[i];
      g.y += g.speed;

      // Kollisjonsdeteksjon: Sjekk om gaven er inne i kurven
      if(g.y + g.size >= basket.y && // Gaven når kurvens topp
         g.y < basket.y + basket.height && // Gaven er ikke forbi kurvens bunn (mindre viktig her, men bra for nøyaktighet)
         g.x + g.size > basket.x && // Gaven overlapper fra venstre
         g.x < basket.x + basket.width) { // Gaven overlapper fra høyre

        score++;
        document.getElementById("score").innerText = "Poeng: " + score;
        setHappyMode(); // Starter happy music/bakgrunn
        gifts.splice(i,1); // Fjern fanget gave
        continue;
      }

      // Mistet gave: Gaven faller ut av bunnen av skjermen
      if(g.y > canvas.height){
        if (score > 0 || isHappyMode) { // Sørger for at vi bytter til trist musikk/bakgrunn bare hvis det er noe å miste
            setSadMode();
        }
        gifts.splice(i,1); // Fjern mistet gave
      }
    }
  }

  // Tegn alt
  drawBackground();
  drawGifts();
  drawBasket();
}

// ---- TIMER (Uendret) ----
function startTimer(){
  timerInterval = setInterval(()=>{
    if(!paused){
      timer--;
      document.getElementById("timer").innerText = "Tid: "+timer;
      if(timer<=0) endGame();
    }
  },1000);
}

// ---- KNAPPER ----
pauseBtn.addEventListener("click", ()=>{
  paused = !paused;
  pauseBtn.textContent = paused ? "Fortsett" : "Pause";
  if(paused) {
    stopSpawning();
    // Pause musikk når spillet er satt på pause
    happyMusic.pause();
    sadMusic.pause();
  } else {
    startSpawning();
    // Fortsett musikk
    if (isHappyMode) {
        happyMusic.play();
    } else {
        sadMusic.play();
    }
  }
});

restartBtn.addEventListener("click", ()=>{
  resetGame();
  paused = false;
  pauseBtn.textContent = "Pause";
  // Stopper/starter spawning/timer på nytt (bedre å kalle startGame/resetGame-funksjoner)
  stopSpawning();
  clearInterval(timerInterval);
  startSpawning();
  startTimer();
});