// oppgave 13 førerkort 

// let alder = prompt("Skriv inn alderen din");
// alder = parseInt(alder);
// let svar = "";

// if (alder < 16){
//     svar = "Du er for ung";
// }

// else if (alder < 18) {
//     svar = "Du er har muligheten til å kjøre moped";
// }

// else if (alder < 21) {
//     svar = "Du har mulighet til å kjøre moped og bil"
// }

// else if (alder < 24) {
// svar = "Du har muligheten til å kjøre moped, bil og lastebil";
// }

// else {
//     svar = "Du kan kjøre moped, bil, lastebil og buss"
// }

// document.getElementById("alder").innerText = svar;

// let nyParagraf = document.createElement("h1");


//oppgave 14 gjettespill 
//versjon 1 

// let randomTall = getRandomIntInclusive(1,10);

// let brukerTall = prompt("Prøv å gjett tallet maskinen har valgt fra 1-10")
// brukerTall = parseInt(brukerTall)

// if (randomTall === brukerTall){
//     console.log("Du har gjettet riktig tall!");
// }

// else {
//     console.log("Du har gjettet feil")
//     if (randomTall < brukerTall){
//         console.log("Du gjettet for høyt, prøv igjen");
//         brukerTall2 = prompt("Prøv igjen");
//         console.log(brukerTall2);
//     }

//     else (randomTall > brukerTall);{
//         console.log("For lavt prøv igjen");
//         brukerTall2 = prompt("Prøv igjen");
//         console.log(brukerTall2);

//     }
// }



// function getRandomIntInclusive(min, max) {
//   const minCeiled = Math.ceil(min);
//   const maxFloored = Math.floor(max);
//   return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
// }

// oppgave 16 

let array =[];
let over5 = 0;
let verdi4 = 0;
let sum = 0; 
let high = -10;
let low = Infinity;

for (let i = 1; i < 201; i++){
    let tilfeldigTall = Math.floor(Math.random()* 10)+1; //her generer vi et tilfeldig helltall mellom 10 og i. Jeg mp se nermere på hav er Math.floor, og hvordan det so kommer etter fungerer
    array.push(tilfeldigTall); //legger til tilfeldig tall
    // console.log(tilfeldigTall);
}

console.log(array);

for (let i = 0; i < array.length; i++){ //
    if (array[i]>=5) //siden i er definert som noe mindre enn array.lenght
    over5++;

    if (array[i] == 4)
    verdi4++;

    sum += array[i] //sum = sum + array[i]

    if (array[i]>high){
        high = array[i];
    }

    if (array [i] < low){
        low = array[i];    
    }

}

let gjennomsnitt = sum/array.length;


console.log(verdi4);
console.log(over5);
console.log(sum);
console.log(gjennomsnitt);

//med dette teller den fra 0 til 199. Jeg endrer litt på den 






//oppgave 17 

// const bilde = document.querySelector("#bilder");

// let arrayBilder = [
//     "bilder/geirludvik.jpg",
//     "IMG_8239.jpeg",
//     "mann.png",
//     "roblox.png",
// ];

// let bildeIndex = 0; 
// bilde.src ="bilder/" + arrayBilder[bildeIndex];// "bilder/" <-- Forteller at den må lete i en mappe med navn "bilder". arrayBilder[bildeIndex] forteller at vi skal gå inn i arrayen med navnet vi ga "arrayBilder", før vi skriver inn i [], skriver vi "bildeIndex", som vi har gitt verdien 0
// //det vil si at vi forteller at vi starter på bilde som er plasser på plass 0 

// const knappHoyre = document.querySelector("#right");

// knappHoyre.addEventListener("click", hoyre); //gjør knappen høyre