async function henteData() { //oppretter en async funksjon
    const respons = await fetch("books.json"); 
    const data = await respons.json();
        console.log(data);

    const utskrift1 = document.querySelector("#utskrift1");
    utskrift1.innerHTML = ""; //tømmer tidligere defennisjoner

    const utskrift2 = document.querySelector("#utskrift2");
    

    for (let i = 0; i < data.length; i++) { //her prøver jeg å få hvert av utgivelses årende og anntall sider under boktittelen.
        for (let j = 0; j < data.length; j++){ //her er tanker at den skal gå gjennom arrayen en gang og hente ut alle titlene, også skal den samt gå gjennom igjen men hente ut alle realisene 
            let name = data[i].name;
            let released = data[j].released;

                let p = document.createElement("p"); //her oppretter jeg et nytt element med varibalen p
                p.innerText = name; //sier at det nye elementet i html en skal printe ut titlene til boken
                utskrift1.appendChild(p); //vi legger det inn i htmlen

                let li = document.createElement("li"); 
                li.innerText = released;
                utskrift2.appendChild(li);


            }       
        }

    }

henteData(); //kaller på fumskjonen


    // const utskrift2 = document.querySelector("#utskrift2");
    // utskrift2.innerHTML = "";

    // for (let i = 0; i < data.length; i++) {
    //     let released = data[i].released;

    //     let li = document.createElement("li");
    //     li.innerText = released;
    //     utskrift2.appendChild(li);
    
    

