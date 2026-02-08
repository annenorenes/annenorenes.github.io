const skjerm = document.getElementById("skjerm");

skjerm.addEventListener = ("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value; //vi bruker value til å oppdattere verdien
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const kjonn = document.querySelector('input[name="kjonn"]:checked').value;
    
    const interesserSelect = document.getElementById('interesser');
    const interesser = Array.from(interesserSelect.selectedOptions).map(option => option.value);


})


