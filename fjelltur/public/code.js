// Vi skal lage en oversikt over fjellene

async function hentFjell() {
    const respons = await fetch("http://localhost:3000/api/fjell_info");
    const data = await respons.json();
    console.log(data);

    const utskrift = document.querySelector("#fjellContainer");
    utskrift.innerHTML = "";

    for (let i = 0; i < data.length; i++) {
        let fjell = data[i];

        let div = document.createElement("div");
        div.className = "fjell-card";

        div.innerHTML = `
            <h2>${fjell.fjellnavn}</h2>
            <p>Høyde: ${fjell.hoyde} meter</p>
            <p>Beskrivelse: ${fjell.beskrivelse}</p>
            <img src="/bilder/${fjell.foto}" alt="${fjell.fjellnavn}">
        `;

        utskrift.appendChild(div);
    }
}

hentFjell();


//http://localhost:3000/api/fjell_info