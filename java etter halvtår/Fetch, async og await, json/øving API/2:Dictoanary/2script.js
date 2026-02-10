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

    data.forEach(data => {
        data.meanings.forEach(meaning => {
            meaning.definitions.forEach(def => {

            let p = document.createElement("p");
            p.innerText = def.definition;
            utskrift.appendChild(p);

            console.log(def);

            })


        })    
        
    });
  
})



    