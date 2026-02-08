//Tre ting jeg må ha med for at jeg skal kunne lage en tjenste rundt APIen utgitt
//Jeg må opprette et form, slik at brukeren kan skrive inn det ordet de ønsker. Jeg må opprette en eventlister, hvor funksjoen kjører hver gang vi sender inn skjemaet. 

const skjema = document.getElementById("skjema");

skjema.addEventListener("submit", async function(event){ //jeg gjør slik at hele lyttefunksjonen er async funksjonen. Når vi sender in skjemaet vil helefunksjoenn kjøre
    event.preventDefault(); //slik at når vi sender inn ordet, så forsvinner ikke ordet ettersom siden ikke refreches

    const ord = document.getElementById("ord").value;

    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/` + ord); //fetch sender en foresspørsel til APIen, og den svarer med et "promis". Await kommandoen gjør at koden venter slik at js kan hente ut data
    const data = await response.json();
        
    const definisjonDiv = document.querySelector("#definisjon");
    definisjonDiv.innerHTML = ""; //tømmer tidligere definisjoner

    //går gjennom alle arrayene
    data.forEach(entry => {                      
        entry.meanings.forEach(meaning => {     //henter hver "meaning"
            meaning.definitions.forEach(def => { //og hver definisjon
                
                let p = document.createElement("p"); //oprettet et nytt element i html
                p.innerText = def.definition;    // henter vi teksten, altså de ulike definisjonene til hvert ord
                definisjonDiv.appendChild(p);   //vi bruker eppendChild til å legge til p.innerText, som er definisjonene til ordet vi skriver inn, inn på siden
                });
        });
    });

    console.log(data);
});




