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

    const nyArray = data.filter(def => def.full_name === sok)


    nyArray.hogwarts_houses.forEach(house => { //på grunn av at data ikke er en array, men et objekt, må vi hoppe dierkte til neste, som vi ser er en array
        house.members.forEach(medlem => {

                let p = document.createElement("p");
                p.innerText = medlem.bio.actor;
                utskrift.appendChild(p);
            })
            
            
            
        })
        
    });
