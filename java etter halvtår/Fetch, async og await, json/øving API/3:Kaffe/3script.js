//vi skal lage en oversikt over de ulike kaffetypene

async function kaffe(info) {
    const respons = await fetch("3data_kaffe.json")
    const data = await respons.json();
    console.log(data);

    const utskrift = document.querySelector("#utskrift");
    utskrift.innerHTML = "";

    for (let i = 0; i < data.length; i++){

        let kaffeType = data[i].title;

        
        let li = document.createElement("li");
        li.innerText = kaffeType;
        utskrift.appendChild(li);
    }

}

kaffe();