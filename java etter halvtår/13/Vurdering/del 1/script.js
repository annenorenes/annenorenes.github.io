const skjema = document.getElementById("skjema")

skjema.addEventListener("submit", function (info){ //her oppretter jeg en lyttefunksjon, hvor det er når jeg trykker enter eller på knappen jeg har opprettet i htmlen at funksjonen kjører
    info.preventDefault(); //Vi skriver dette for at ikke siden skal refreache, viktig at vi kaller på den
        console.log("skjekk?")

    const utskrift = document.getElementById("utskrift");
    utskrift.innerHTML = ""; //tømmer

    let fornavn = document.getElementById("fornavn").value; //henter ut verdien av det vi skrive inn i koden
        console.log(fornavn);
    
    let p = document.createElement("p");
    p.innerText = "Takk for din registrering, " + fornavn + "!"
    utskrift.appendChild(p);

    let rabattKode = document.getElementById("rabattKode").value;

    if (rabattKode === true){
        let p1 = document.createElement("p");
        p1.innerText = "Du har oppgitt en rabattkode og får en rabattert pris"
        utskrift.appendChild(p1);
    }
    else {

    }


})