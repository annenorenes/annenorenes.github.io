const skjema = document.getElementById("skjema");

    skjema.addEventListener("submit", async function (info) {
        info.preventDefault();

    
        const response = await fetch("5data.json");
        const data = await response.json();
            console.log(data);

        const sokresultat = document.getElementById("innboks").value.toLowerCase();

        const utskrift = document.getElementById("utskift");
        utskrift.innerHTML = "";

        // console.log(data[0].info);
        
        for (let i = 0; i < data.length; i++){
            for (let j = 0; j < data[i].info.ingredienser.length; j++){

                let ingredienser = data[i].info.ingredienser[j];

                if (data[i].rett.toLowerCase() === sokresultat){
                    let p = document.createElement("p");
                    p.innerText = ingredienser;
                    utskrift.appendChild(p);
                }
                
            }
            
            
        }
        
    })