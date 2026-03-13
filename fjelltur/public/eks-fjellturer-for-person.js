// Fyller ut en dropdown (select) med  brukernavnene på alle personene i databasen
async function hentPersoner() {
    const response = await fetch('/api/personer_alle'); //den apien somv i skal fetche her, er det som vi skrev inn i 
    const personer = await response.json();
    const dropdown = document.getElementById('personDropdown');

    console.log(dropdown);
    console.log(personer);
    
    for (const person of personer) { //denne går gjennom hvert element i arrayen og gir den et midlertidig navn, person, slik at vi kan referere til hvert enkelt element
        const option = document.createElement('option'); //oppretter et element som heter option
        option.value = person.brukernavn; //sier at verdien til det nye elemnetet skal være personens brukernavn
        option.textContent = person.brukernavn; //hvert element son fremvises skal også hete i nettsiden, brukernavn
        dropdown.appendChild(option);
    }
}
document.addEventListener('DOMContentLoaded', hentPersoner);

//-----

// Når en person er valgt, henter og viser alle fjellturene til den personen
document.getElementById('personDropdown').addEventListener('change', async function() {
    const brukernavn = this.value;
    console.log(`Valgt person: ${brukernavn}`); //den du trykker på vil bli kalt brukernavn
    if (brukernavn) {
        const response = await fetch(`/api/fjellturer/${encodeURIComponent(brukernavn)}`);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const fjellturer = await response.json();
        
        // Sjekker at vi har fått data tilbake, og viser det i konsollen
        console.log(fjellturer); // Her kan du erstatte dette med kode for å vise fjellturene i UI

        // Skriver turene til HTML
        // Først viser vi en overskrift med hvilken person vi viser turene for
        const turerDiv = document.getElementById('fjellturerContainer'); 
        turerDiv.innerHTML = `<h2>Fjellturer for ${brukernavn}</h2>`; //skriver i htmlen, ved fjellturerContainer diven, navnet på brukernavnet som trykket
        // Så viser vi en liste med alle fjellturene
        const ul = document.createElement('ul');
        for (const tur of fjellturer) { //kaller hver element i arrayen fjellturer, tur
            const li = document.createElement('li');
            li.textContent = tur.fjellnavn; //sier fjellnavnet til hver av turene
            ul.appendChild(li); //sender ut punktene
        }
        turerDiv.appendChild(ul); //sender ut listen
    }
});