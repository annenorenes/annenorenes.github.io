const skjema = document.getElementById("skjema");

    skjema.addEventListener("submit", async function(info) {
        info.preventDefault(); //slik at skjemaet ikke sendes på nytt hver gang vi submitter
      
        const response = await fetch('4data1.json');
        const data = await response.json();
            console.log(data);

        const sokeresulat = document.getElementById("innboks").value;
            console.log(sokeresulat); 

        //oppretter en ny funksjon, 
        const nyArray = data.filter(info => info.name === sokeresulat);
            console.log(sokeresulat);

        //tømmer skjemaet hver gang
        const utskift = document.getElementById("utskrift");
        utskift.innerHTML = "";   
        

        nyArray.forEach(navn => {
        let p = document.createElement("p");
        p.innerText = navn.name;
        utskift.appendChild(p);
        });


    })


   