const email = document.getElementById("validationDefaultEmail");
const lName = document.getElementById("validationLName");
const fName = document.getElementById("validationFName");
const pas = document.getElementById("validationPas");
const chec = document.getElementById("invalidCheck");

const btn = document.getElementById("In_btn");

btn.addEventListener('click', function(Event) {
    if (pas.validity.valid && email.validity.valid  && chec.validity.valid){
        alert("You are in the system!")
    }else{
    }
})