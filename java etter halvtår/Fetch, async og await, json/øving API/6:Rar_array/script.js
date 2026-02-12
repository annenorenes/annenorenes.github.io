async function henteData() {
    const response = await fetch("data.json");
    const data = await response.json();
        console.log(data);
    
    const utskift1 = document.getElementById("utskift1");
    utskift1.innerHTML = "";

    // const utskift2 = document.getElementById("utskift2");
    // utskift2.innerHTML = "";

    for (let i = 0; i < data.length; i++){
        let rank = data[i].metadata.author.rank;
        
        let p = document.createElement("p");
        p.innerText = rank;
        utskift1.appendChild(p);

    }


}

henteData();