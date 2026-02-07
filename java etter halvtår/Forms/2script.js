const skjema = document.getElementById("skjema")

skjema.addEventListener("submit", function(event){ //forteller at når vi trykker enter/bruker submit knappen skal funksjonen 
   event.preventDefault(); //viktig for å unngå resetting

   const name = document.getElementById("name").value;
   const age = document.getElementById("age").value;
   const klass = document.getElementById("class").value;

   const fagSelect = document.getElementById("class");

   const kjonn = document.querySelector('input[name="kjonn"]:checked').value;
});


