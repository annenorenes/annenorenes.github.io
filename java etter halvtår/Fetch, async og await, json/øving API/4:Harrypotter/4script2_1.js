async function hentData() { //jeg gidder ikke å oppgi noe parameter grunnet til at jeg ikke trenger å bruke den innebyggde funksjonen, 'preventDeafult'. Jeg oppgir i stedet et navn, siden jeg må kalle på funksjonen. Jeg må kalle på funksjonen grunnet til at det ikke er en lyttefunksjon som kaller på den 
    const response = await fetch("4data2.json");
    const data = await response.json();

    console.log(data);

    console.log(data.house_name); //dette fungerer ikke, grunnet til at vi hopper over et steg!!
    
    console.log(data.hogwarts_houses); //henter to array

    console.log(data.hogwarts_houses[0]); //går inn i det første arrayen

    console.log(data.hogwarts_houses[0].members[0].bio.full_name); //printer ut Harry Potter

    console.log(data.hogwarts_houses[1].members[0].assets);



    //henter ut hver for seg navnene på huset 
    console.log(data.hogwarts_houses[0].house_name);
    console.log(data.hogwarts_houses[1].house_name);
    
    console.log("\nHer er resultatet av løkka som hentar ut alle husa:")
    //vi kan gjøre dette til en løkke,s om printer så ut begge navnene
    for (let i = 0; i < data.hogwarts_houses.length; i++){
        console.log(data.hogwarts_houses[i].house_name);
    }

   
    
}

hentData();