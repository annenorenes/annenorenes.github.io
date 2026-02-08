//1. Vi må starte med å hente dataen fra json filen 


const skjema = document.getElementById("skjema");

    skjema.addEventListener("submit", async function(info) {
        info.preventDefault();
    
        const response = await fetch('1data.json');
        const data = await response.json();
        console.log(data); 

    
    const alder = Number(document.querySelector("#alder").value); //alder er inputen som bruker skriver inn
    const printUt = data.filter(person => person.alder === alder)
    console.log(printUt); //nå for vi deler/informasjonen om bare de to personene som er 17 år

    const utskrift = document.querySelector("#utskrift");
    utskrift.innerHTML = "";

    //person.navn
    printUt.forEach(person => {
    let p = document.createElement("p");
    p.innerText = person.navn;
    utskrift.appendChild(p);
    });


})




