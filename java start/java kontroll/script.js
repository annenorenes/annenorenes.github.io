//let frukter = ["eple", "banan", "appelsin", "jordbær"];
//for (let i = 0; i < frukter.length; i++) {
    //console.log("Frukt: " + frukter[i]);
//}
// i = 0
//for i in range (frukter)
    //i < lengden på arrayen 
    //Øk i med 1
    //print frukter 

//for (let i = 1; i < 6; i++) {
    //console.log("Teller: " + i);
//}

let frukter1 = ["eple", "banan", "appelsin"]; //i dette eksmeplet når vi skriver print, printer den alle de ulike verdiene til frukter1
for (let frukt of frukter1) {
    console.log("Frukt: " + frukt);
    // NB: Du kan også hente indeksen ved å bruke frukter.indexOf(frukt) hvis nødvendig
}

let frukter = ["eple", "banan", "appelsin"]; //her printer vi den ut frukter sine sine idexer. Hvis vi bytter ut frukter[index] med frukter[0] blir outputen 'eple"
for (let indeks in frukter) {
    console.log("Frukt: " + indeks); //hvis vi endrer frukter[indeks] til bare indeks vil vi printe ut 0, 1, 2}
    console.log("Frukter: "+ frukter[indeks])
}


const arr = ["a", "b", "c"];

for (let v of arr) {
  console.log("value:", v); // "a", "b", "c"
}

for (let i in arr) {  
console.log("index:", i); // "0", "1", "2" (strings)
console.log("value via index:", arr[i]);
}

//for each løkke
let studenter = [ //her definerer vi arrayen for studenter
    { navn: "Ola", poeng: 85 }, 
    { navn: "Kari", poeng: 92 },
    { navn: "Per", poeng: 78 }
];
studenter.forEach(function(student) {
    console.log(student.navn + " har " + student.poeng + " poeng."); //her skriver vi først navnet på arrayen, før vi så skiver variabelen til den nøkkelen vi ønsker å hente ut
});