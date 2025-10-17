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