const skjema = document.getElementById("skjema");

    skjema.addEventListener("submit", async function (info) {
        info.preventDefault();

        const respons = await fetch("5data.json");
        const data = await respons.json();
            console.log(data);


        const sok = document.getElementById("innboks").value;
            console.log(sok);

        
        const nyArrayData = data.filter(info => info.rett === sok);
        
        const utskrift = document.getElementById("utskift");
        utskrift.innerHTML = "";
        
        nyArrayData.forEach(type => {
            type.rett.info.ingredienser.forEach(bio =>{
                let p = document.createElement("p");
                p.innerText = bio[0];
                utskrift.appendChild(p);
            
            })
            
            
            
        });
        
        
    })