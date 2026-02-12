const skjema = document.getElementById("skjema");

skjema.addEventListener("submit", async function (info) {
    info.preventDefault();

    const response = await fetch("4data2.json");
    const data = await response.json();
        console.log(data);

    const sok = document.getElementById("innboks").value.toLowerCase();
        console.log(sok);

    const utskrift = document.getElementById("utskrift");
    utskrift.innerHTML = "";

    // const nyArray = data.filter(def => def.full_name === sok)

for (let i = 0; i < data.hogwarts_houses.length; i++){
    for (let j = 0; j < data.hogwarts_houses[i].members.length; j++){
        let member =  data.hogwarts_houses[i].members[j];

        if (member.bio.full_name.toLowerCase() === sok){ //"hvis navnet du søker på er lik en avskuespillerene.."
            let p = document.createElement("p");
            p.innerText = member.bio.actor; //så skriv ut skuespilleren med den rollen
            utskrift.appendChild(p);
        }

    }
}

});
            
            
            

