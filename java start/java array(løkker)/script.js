
const navn =["Anne, Emma, mamma, pappa"]
const liste = document.getElementById("navneliste");

navn.forEach(person => {
  liste.innerHTML += `<li>${person}</li>`;
});