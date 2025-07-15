const buttonOpen = document.getElementById("buttonOpen");
const buttonClose = document.getElementById("buttonClose");
const mobileMenu = document.getElementById("mobileMenu");
const backgroundBackdrop = document.getElementById("backgroundBackdrop");
//FORM


console.log(buttonOpen);

buttonOpen.addEventListener("click", () => {
  console.log("entre");

  mobileMenu.classList.toggle("hidden");
  backgroundBackdrop.classList.toggle("hidden");
});

buttonClose.addEventListener("click", () => {
  backgroundBackdrop.classList.toggle("hidden");
  mobileMenu.classList.toggle("hidden");
});

let carrusel = document.getElementById("carrusel");
let indexImagenActual = 0;
const cantidadDeImagenes = carrusel.children.length;

setInterval(function () {
  indexImagenActual = indexImagenActual + 1;
  if (indexImagenActual >= cantidadDeImagenes) {
    indexImagenActual = 0;
  }
  carrusel.style.transform = `translateX(-${indexImagenActual * 100}%)`;
}, 4000);


//VALIDACIONES FORM
const f_input_name = document.getElementById("first-name");
const f_input_number = document.getElementById("phone-number");
const f_input_email = document.getElementById("email");
const f_input_msg = document.getElementById("message");
const f_submit = document.getElementById("enviar");


f_submit.addEventListener("submit" , () =>{
  if(vNombre===false){
    console.log("ERROR")
  }
})

function vNombre (){
  if(f_input_name.value < 3){
    return false
  }

}