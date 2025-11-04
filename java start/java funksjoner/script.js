
//tar inn parametere og returner en veri

function siHei(navn){
    console.log("Hei " + navn + "!");
}
siHei("Ola");


//legge samme paramnetere og returner

function leggSammen(a, b){
    return(a + b);
}

let resultat = leggSammen(3, 4)
console.log(resultat);


    //her kan du ta i bruk piler for å gjøre det mer kompakt og returnere

    const leggSammen2 = (a, b) => a + b;

    let resultat2 = leggSammen2(3, 4);
    console.log(resultat2); // 7



//omfangen (scoop)

function testOmfang() {
    let x = 10;
    console.log(x);
}

let x = 10; //  <-- Jeg lå til denne her. Det er på grunn av at hvis vi skal definere noe, er det viktig at vi gjør det utenfor funksjonen 

testOmfang();
console.log(x); 

//callback funksjoner 

setTimeout(function() {
    console.log("Dette er en callback-funksjon");
}, 1000);