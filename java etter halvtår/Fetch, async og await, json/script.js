//vi bruker "async" og "await" når vi lager en funksjon som skal hente date, fra for et eksempel når programmet henter data, og vi forteller at koden må vente før den går videre 
//"fetch" brukes til å hente data fra offentlige APIer 
//når vi bruker "async" og "await" for å hente date forventer vi et svar. Vi skriver ".json" for å få svaret 

//et eksempel på hvordan vi lager en slik funksjon 

async function hentData(){ //async står forrand den function kommandoen
    let respone = await fetch("https://api.chucknorris.io/jokes/random");
    let data = await respone.json //her konvertere vi APIen over til json, som er det formate vi ønsker å bruke i en async funksjon
    console.log("Alle data:");
    console.log(data);
    console.log("\nBare vitsen:");
    console.log(data.value)
}

hentData();



