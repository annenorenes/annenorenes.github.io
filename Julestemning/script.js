const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// --- DOM ELEMENTER ---
const scoreDisplay = document.getElementById("score");
const timerDisplay = document.getElementById("timer");
const pauseBtn = document.getElementById("pauseBtn");
const restartBtn = document.getElementById("restartBtn");

// --- MUSIKK ---
const happyMusic = new Audio("tcmac.fr - Justin Timberlake - SexyBack (Lyrics) ft. Timbaland.mp3"); 
const sadMusic = new Audio("sad.mp3");     
happyMusic.loop = true;
sadMusic.loop = true;
happyMusic.volume = 0.5; 
sadMusic.volume = 0.5;   

// --- BAKGRUNNSBILDER ---
let defaultImage = new Image();
defaultImage.src = "bilder/default.jpg";
let happyImage = new Image();
happyImage.src = "bilder/happy_background.webp";
let sadImage = new Image();
sadImage.src = "bilder/sad_background.jpg";

let currentBgImage = defaultImage; 

// --- STATE VARIABLER ---
let timer = 30;
let attempts = [];
let score = 0;
let paused = false;
let gameStarted = false;
let isHappyMode = false; 
let basket;
let gifts;
let keys = { left: false, right: false };
let spawnInterval;
let timerInterval;

// Standardverdier for kurven
const BASKET_WIDTH_DEFAULT = 100;
const BASKET_SPEED_DEFAULT = 6;


// Hjelpefunksjon for å sjekke om alle bildene er lastet
function areAllImagesLoaded() {
    return defaultImage.complete && happyImage.complete && sadImage.complete;
}

// ---- START SPILL NÅR ALLE BILDER ER LASTET ----
defaultImage.onload = happyImage.onload = sadImage.onload = () => {
    if (areAllImagesLoaded() && !gameStarted) {
        startGame();
    }
};

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
  isHappyMode = false; 
  happyMusic.pause();
  happyMusic.currentTime = 0;
  sadMusic.pause();
  sadMusic.currentTime = 0;
  currentBgImage = defaultImage; 

  scoreDisplay.innerText = "Antall gaver samlet: " + score;
  timerDisplay.innerText = "Tid: " + timer;

  // Bruker standardverdier ved reset
  basket = { x: 200, y: 520, width: BASKET_WIDTH_DEFAULT, height: 40, speed: BASKET_SPEED_DEFAULT };
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
    if (isHappyMode) { 
        isHappyMode = false;
        currentBgImage = sadImage;
        happyMusic.pause();
        sadMusic.play();
    }
}

// ---- SPAWN GIFTS (OPPDATERT MED NY VEKTING) ----
function spawnGift() {
    // Definerer gavetyper og sannsynlighet for utfordring
    const giftTypes = [
        { type: "red", challenge: false }, // Standard
        { type: "blue", challenge: "speed_boost" }, 
        { type: "green", challenge: "shrink" } 
    ];
    
    // NY VEKTING: [Rød (0.8), Blå (0.1), Grønn (0.1)]
    // Dette gir 80% sjanse for rød, og 10% sjanse for hver utfordring.
    const weights = [0.8, 0.1, 0.1];
    let totalWeight = weights.reduce((a, b) => a + b, 0);
    let random = Math.random() * totalWeight;

    let typeIndex = 0;
    for (let i = 0; i < weights.length; i++) {
        random -= weights[i];
        if (random < 0) {
            typeIndex = i;
            break;
        }
    }
    const giftData = giftTypes[typeIndex];

    gifts.push({
        x: Math.random() * (canvas.width - 30),
        y: -40,
        size: 30,
        speed: 3 + Math.random() * 2,
        type: giftData.type,
        challenge: giftData.challenge
    });
}

// ---- START/STOP SPAWNING (Uendret) ----
function startSpawning() {
  if (spawnInterval) clearInterval(spawnInterval); 
  spawnInterval = setInterval(spawnGift, 800);
}
function stopSpawning() {
  clearInterval(spawnInterval);
}

// ---- DRAW (OPPDATERT drawGifts) ----

function drawBackground() {
    if(currentBgImage.complete) {
        ctx.drawImage(currentBgImage, 0, 0, canvas.width, canvas.height);
    } else {
        ctx.fillStyle = "#eaf7ff";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
}

function drawBasket() {
  ctx.fillStyle = "#8B0000";
  ctx.fillRect(basket.x, basket.y, basket.width, basket.height);
  ctx.strokeStyle = "#fff";
  ctx.lineWidth = 2;
  ctx.strokeRect(basket.x, basket.y, basket.width, basket.height);
}

function drawGifts() {
    gifts.forEach(gift => {
        let giftColor = "#FFD700"; // Standard/Fallback
        let ribbonColor = "#C00000"; // Standard/Fallback

        // Tilpass farge basert på gavetype
        switch (gift.type) {
            case "blue":
                giftColor = "#4682B4"; // Stålblå
                ribbonColor = "#FFFFFF"; 
                break;
            case "green":
                giftColor = "#3CB371"; // Medium Sjøgrønn
                ribbonColor = "#FFD700"; // Gull
                break;
            case "red":
            default:
                giftColor = "#FF0000"; // Rød
                ribbonColor = "#FFFFFF";
                break;
        }

        // --- 1. TEGN PAKKE MED 3D-EFFEKT ---
        
        // Simulerer highlight/skygge manuelt:
        let highlightColor;
        if (gift.type === "red") highlightColor = "#FF4D4D";
        else if (gift.type === "blue") highlightColor = "#6A9DC8";
        else if (gift.type === "green") highlightColor = "#63D89D";
        else highlightColor = "#FFFFFF";

        // Tegn selve pakken
        ctx.fillStyle = giftColor; 
        ctx.fillRect(gift.x, gift.y, gift.size, gift.size);
        
        // Legg til en lysere highlight på toppen for 3D-effekt
        ctx.fillStyle = highlightColor;
        ctx.fillRect(gift.x, gift.y, gift.size / 4, gift.size / 4);


        // --- 2. TEGN BÅND OG KNUTE ---
        
        ctx.fillStyle = ribbonColor; 
        
        // Vertikalt bånd
        ctx.fillRect(gift.x + gift.size/2 - 3, gift.y, 6, gift.size);
        // Horisontalt bånd
        ctx.fillRect(gift.x, gift.y + gift.size/2 - 3, gift.size, 6);
        
        // Legg til en liten knute/bue i midten
        ctx.beginPath();
        ctx.arc(gift.x + gift.size/2, gift.y + gift.size/2, 5, 0, Math.PI * 2);
        ctx.fill();
        
        // Legg til et lite skimmer (hvit linje) på båndet for dybde
        ctx.fillStyle = "#FFFFFF";
        ctx.fillRect(gift.x + gift.size/2 + 1, gift.y, 1, gift.size);
        ctx.fillRect(gift.x, gift.y + gift.size/2 + 1, gift.size, 1);
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
  happyMusic.pause();
  sadMusic.pause();
  alert("Tiden er ute! Du fikk " + score + " Antall gaver samlet.\nTidligere forsøk: " + attempts.join(", "));
}

// ---- MAIN LOOP (OPPDATERT MED EFFEKTLOGIKK) ----
function update() {
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

      // Kollisjonsdeteksjon
      if(g.y + g.size >= basket.y && 
         g.y < basket.y + basket.height && 
         g.x + g.size > basket.x && 
         g.x < basket.x + basket.width) { 

        // --- HÅNDTERER GAVE-EFFEKT ---
        switch (g.challenge) {
            case "speed_boost":
                score += 20; // Beholder +2 poeng (som før)
                basket.speed = BASKET_SPEED_DEFAULT + 6; // <-- ØKT HASTIGHET HER! (+6)
                setTimeout(() => { basket.speed = BASKET_SPEED_DEFAULT; }, 3000); // Tilbakestill etter 3 sek.
                break;
            case "shrink":
                score += 5; // Beholder +5 poeng
                basket.width = BASKET_WIDTH_DEFAULT / 2; // Halver kurven
                setTimeout(() => { basket.width = BASKET_WIDTH_DEFAULT; }, 5000); // Tilbakestill
                break;
            case false: // Rød (Normal)
            default:
                score += 1;
                break;
        }

        scoreDisplay.innerText = "Antall gaver samlet: " + score;
        setHappyMode(); 
        gifts.splice(i,1); 
        continue;
      }

      // Mistet gave
      if(g.y > canvas.height){
        if (score > 0 || isHappyMode) { 
            setSadMode();
        }
        gifts.splice(i,1); 
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
      timerDisplay.innerText = "Tid: "+timer;
      if(timer<=0) endGame();
    }
  },1000);
}

// ---- KNAPPER (Uendret) ----
pauseBtn.addEventListener("click", ()=>{
  paused = !paused;
  pauseBtn.textContent = paused ? "Fortsett" : "Pause";
  if(paused) {
    stopSpawning();
    happyMusic.pause();
    sadMusic.pause();
  } else {
    startSpawning();
    if (isHappyMode) {
        happyMusic.play();
    } else if (sadMusic.currentTime > 0) { // Spiller trist musikk hvis den var aktiv før pause
        sadMusic.play();
    }
  }
});

restartBtn.addEventListener("click", ()=>{
  // Resetter og starter på nytt
  resetGame();
  paused = false;
  pauseBtn.textContent = "Pause";
  stopSpawning();
  clearInterval(timerInterval);
  startSpawning();
  startTimer();
});