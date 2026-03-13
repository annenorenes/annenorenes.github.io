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