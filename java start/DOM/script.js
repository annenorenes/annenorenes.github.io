document.getElementById("hei").innerText = "Hei ";
let navn = "anne";
document.getElementById("hei").innerText = "Hei " + navn;

document.getElementById("test").innerHTML = "<li>Hallo</li> <li>Hei på deg</li>"

let nyParagraf = document.createElement("h2"); //her lager vi en variabel. Vi går inn i documentet(HTML) og lager et nytt element
nyParagraf.innerText = "anne drikker te"; //her skriver vi at i den nye variabelen våres, som er nå en paragraf i dokomuntet, og ønsker å skrive noe i paragafen
document.body.appendChild(nyParagraf); //her forteller vi at vi ønsker teksten vi skrev til å være plassert i boydien til HTMlen 