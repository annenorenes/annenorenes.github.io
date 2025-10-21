//let alder = 100; //her defienerer vi at variabelen "alder" har en verdi på 100 

//document.getElementById(utskrift).innerText = `du er ${alder} år gammenl´;

let tall1 = 4;
let tall2 = 13;
 
let sum = tall1 + tall2;
 
console.log("Summen blir: " + sum); //consol.log gjør slik at det vi skriver inne i ("") blir sendt ut i concollen. Det som er tekst/string må være i "" og slutte med: og det som er en variabel kan vi skrive vanlig, men vi må ha + mellom string

let tempFahrenheit = 45; 
let tempCelsius = (tempFahrenheit - 32)*(5/9); //her bruker vi variabler for å ta i bruk formler. Det samme kan vi gjøre med volum? 

console.log(tempFahrenheit + " grader Fahrenheit er "  + tempCelsius + " grader i celsius ") //her er det lurt å huske på mellomrom etter bode før og etter inne i "", på denne måten får vi et mellomrom i consollen 


Math.PI

let radius = 5; 
let volumKule = 4/3*Math.PI*radius**2

console.log("Volumet til kulen er " + volumKule)

let tall = 2.71; //Når vi skriver desimaler er det viktig at vi bruker punktum(.) og ikke komma(,)

let sitat = "Hei jeg heter anne og gleder meg til helg";
sitat.length;

let a = 14 + (3 * 12 / 3);
console.log("summen er " + a)

let b = 42 - 2 / 3 * 4; 
console.log("summen er " + b)

let c = (14+3)*12/3
console.log("summen er " + c)

let d = 9 % 3
console.log("summen er " + d) //her blir svaret 0, fordi 9 dlet på 3 er 3, og det er 0 i rest 


// 14 % 3
// 20 % 4


//oppgave 9


//let stedsnavn1 = prompt("Skriv inn stedsnavn nr 1: "); //du for opp en 'warning' og blir spurt om å skrive inn et navn
//let stedsnavn1lengde = stedsnavn1.length;

//console.log(stedsnavn1);
//console.log(stedsnavn1.length); //tar med mellomrom

//let stedsnavn2 = prompt("Skriv inn stedsnavn nr 2: "); //husk å endre navn
//let stedsnavn2lengde = stedsnavn2.length; //nå har vi to stedsnavn og to lengder

//let differanse = (stedsnavn1lengde - stedsnavn2lengde)
//differanse = Math.abs(differanse)

//console.log(differanse);

//document.getElementById("utskrift").innerText = differanse;
//document.getElementById("utskrift").innerText = "differanse er " + differanse;


let frukt = prompt("Hva frukt liker du best av banan og eple: ")

switch (frukt) {
    case "banan":
        console.log("Dette er en banan.");
        break;
    case "eple":
        console.log("Dette er et eple.");
        break;
    default:
        console.log("Ukjent frukt.");
}

for (let i = 0; i < 5; i++) {
    console.log("Teller: " + i);
}


//oppgave 10 3B 

let poeng = 50; 
poeng += 10; 

let tekst1 = "Java";
let tekst2 = "Script";
let sum1 = tekst1 + tekst2; 
console.log(sum1);

