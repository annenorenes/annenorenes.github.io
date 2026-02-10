//vi skal lage en oversikt over de ulike kaffetypene

async function kaffe(info) {
    const respons = await fetch("3data_kaffe.json")
    const data = await respons.json();
    console.log(data);

    const utskrift = document.querySelector("#utskrift");
    utskrift.innerHTML = "";

    data.forEach(kaffeType => {
        let li = document.createElement("li");
        li.innerText = kaffeType.description; //det ordet du skriver inn etter kaffeType blir det vi kaller på
        utskrift.appendChild(li);

    });

}

kaffe();