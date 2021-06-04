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
