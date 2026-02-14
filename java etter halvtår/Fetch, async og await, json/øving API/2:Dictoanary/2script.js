//https://api.dictionaryapi.dev/api/v2/entries/en/<word>

const skjema = document.getElementById("skjema");

    skjema.addEventListener("submit", async function (info) {
    info.preventDefault();
    
    const ord = document.getElementById("ord").value;

    const respons = await fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + ord);
    const data = await respons.json();
    console.log(data);

    const utskrift = document.querySelector("#utskrift");
    utskrift.innerHTML = "";

    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[i].meanings.length; j++){
            for (let k = 0; k < data[i].meanings[j].definitions.length; k++){

                let def = data[i].meanings[j].definitions[k].definition;

                let p = document.createElement("p");
                p.innerText = def;
                utskrift.appendChild(p);
            }
        }
    }    

})

    