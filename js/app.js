// const inOutNavbar = () => {
//     const burger = document.querySelector('.burger');
//     const nav = document.querySelector('.nav-menu');

//     burger.addEventListener('click', () => {
//         nav.classList.toggle('.nav-active')
//     })
// }

// inOutNavbar()

/********************* Burger Nav bar for mobile ***************/

const $burger = document.querySelector('.burger')
const $nav = document.querySelector('.nav-menu');

$burger.addEventListener('click', () => {
    $nav.classList.toggle('nav-active')
})


/********************* MODAL FORM ********************/

// Get the modal
var modal = document.getElementById("modalForm");

// Get the button that opens the modal
var btn = document.querySelector('.cta');

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
  }

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];



// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

$('input[type="checkbox"]').on('change', function() {
    $('input[type="checkbox"]').not(this).prop('checked', false);
 });


 /************* VALIDATION DU FORMULAIRE **********************/

function validateForm() {
  let first_name = document.forms["myForm"]["FirstName"].value;
  if (first_name == "" || first_name.length <= 2) {
    document.getElementById("errorMessageFirstName").innerHTML = "First name must contain atleast 2 characters";
    return false;
  }
  
  let last_name = document.forms["myForm"]["LastName"].value;
  if (last_name == "" || last_name.length <= 2) {
    document.getElementById("errorMessageLastName").innerHTML = "Last name must contain atleast 2 characters";
    return false;
  }

  let email = document.forms["myForm"]["Email"].value;
  // L'adresse mail ne doit pas etre vide et ontenir un @
  if (email == "" || !email.includes("@")) {
    document.getElementById("errorMessageEmail").innerHTML = "Please enter a valid email adress";
    return false;
  }

  let birthdate = document.forms["myForm"]["Birthdate"].value;
  if (birthdate == "") {
    document.getElementById("errorMessageBirthdate").innerHTML = "Please enter a birthdate ";
    return false;
  }

  let tournaments = document.forms["myForm"]["Tournaments"].value;
  if (tournaments == "") {
    document.getElementById("errorMessageTournaments").innerHTML = "Please enter a number ";
    return false;
  }

  let terms = document.getElementById("Terms").checked;
  if (terms==false)
  {
    document.getElementById("errorMessageTerms").innerHTML = "You must agree to the terms first.";
      /*alert('You must agree to the terms first.');*/
    return false;
  }

  else {
    return true;
  }
}

