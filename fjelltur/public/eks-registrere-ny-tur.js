// Kode for å fylle ut en dropdown med alle brukernavn
async function hentPersoner() {
    const response = await fetch('/api/personer_alle');
    const personer = await response.json();
    console.log(personer); // Sjekker at vi har fått data tilbake

    const dropdown = document.getElementById('brukernavn-dropdown');

    dropdown.innerHTML = '';

    for (const person of personer) {
        const option = document.createElement('option');
        option.value = person.brukernavn;
        option.textContent = person.brukernavn;
        dropdown.appendChild(option);
    }
}

hentPersoner();

console.log("hei");