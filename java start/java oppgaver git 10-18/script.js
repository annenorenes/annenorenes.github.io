//oppgave 13 førerkort 

let alder = 23; 

if (alder < 16){
    console.log("Du er for ung");
}

else if (alder < 18) {
    console.log("Du har muligheten til å kjøre moped");
}

else if (alder < 21) {
    console.log("Du har mulighet til å kjøre moped og bil");
}

else if (alder < 24) {
    console.log("Du har muligheten til å kjøre moped, bil og lastebil");
}

else {
    console.log("Du kan kjøre moped, bil, lastebil og buss");
}

//oppgave 14 gjettespill 
//versjon 1 

let randomTall = getRandomIntInclusive(1,10);

let brukerTall = prompt("Prøv å gjett tallet maskinen har valgt fra 1-10")
brukerTall = parseInt(brukerTall)

if (randomTall === brukerTall){
    console.log("Du har gjettet riktig tall!");
}

else {
    console.log("Du har gjettet feil")
    if (randomTall < brukerTall){
        console.log("Du gjettet for høyt, prøv igjen");
        brukerTall2 = prompt("Prøv igjen");
        console.log(brukerTall2);
    }

    else (randomTall > brukerTall);{
        console.log("For lavt prøv igjen");
        brukerTall2 = prompt("Prøv igjen");
        console.log(brukerTall2);

    }
}



function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}

//oppgave 16 

// let Tallarray = [];

// for (let i = 0; i < 200; i++) {
//     console.log(i)
//     Tallarray.push(Math.floor(Math.random()*10)+1); //This example returns a random number between the specified values. The returned value is no lower than (and may possibly equal) min, and is less than (and not equal)
// }

// let over5 = 0;

// for (let i = 0; i < Tallarray; i++) {
//     if (Tallarray[i] > 5){
//         over5++;
//     }
// }



