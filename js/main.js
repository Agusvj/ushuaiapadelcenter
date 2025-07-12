const buttonOpen = document.getElementById("buttonOpen");
const buttonClose = document.getElementById("buttonClose");
const mobileMenu = document.getElementById("mobileMenu");
const backgroundBackdrop = document.getElementById("backgroundBackdrop");

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
