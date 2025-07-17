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
const f_name = document.getElementById("first-name");
const f_number = document.getElementById("phone-number");
const f_email = document.getElementById("email");
const f_msg = document.getElementById("message");
const f_submit = document.getElementById("enviar");
const form = document.getElementById("formulario");
let mail_valido = false;
let name_valido = false;
let num_valido = false;
let msg_valido = false;



const validarCampoCompleto = (mensaje, campo) => {
  if(campo.value.trim().length === 0){
    campo.classList.add("warning-box");
    campo.nextElementSibling.classList.add("warning-text");
    campo.nextElementSibling.innerText= mensaje;
    if(campo === f_name){
        name_valido=false;
    }else if(campo === f_number){
        num_valido = false;
    }else if(campo === f_msg){
        msg_valido = false;
    }
  }else{
    campo.classList.remove("warning-box");
    campo.nextElementSibling.classList.remove("warning-text");
    campo.nextElementSibling.innerText= "";
    if(campo === f_name){
        name_valido=true;
    }else if(campo === f_number){
        num_valido = true;
    }else if(campo === f_msg){
        msg_valido = true;
    }
  }
}

const validarMail = (mensaje, campo) => {
  const regex = new RegExp(/^[\w\.-]+@[\w\.-]+\.\w{2,}$/);
  if(campo.value.trim().length === 0 || !regex.test(campo.value) ){
    campo.classList.add("warning-box");
    campo.nextElementSibling.classList.add("warning-text");
    campo.nextElementSibling.innerText= mensaje;
    mail_valido = false;
    
  }else{
    campo.classList.remove("warning-box");
    campo.nextElementSibling.classList.remove("warning-text");
    campo.nextElementSibling.innerText= "";
    mail_valido=true;
    
    
  }
}

form.addEventListener("submit" , (e) => {
  e.preventDefault()
  validarCampoCompleto("Debe introducir su nombre",f_name );
  validarCampoCompleto("Debe introducir su numero de teléfono",f_number );
  validarCampoCompleto("Envienos el motivo de su consulta",f_msg );
  validarMail("Debe introducir un E-Mail válido", f_email);
  const respuesta = document.getElementById("respuesta");
  if(mail_valido && name_valido && num_valido && msg_valido) { 
      respuesta.innerText="";
      respuesta.classList.add("success-text");
      respuesta.classList.remove("error-text");
      form.submit();
      respuesta.innerText="Enviado con exito";
    }else{
      respuesta.innerText="";
      respuesta.classList.add("error-text");
      respuesta.classList.remove("success-text");
      respuesta.innerText="Complete todos los campos antes de enviar";
    }
})
  
 
      
  




/*
    field.classList.remove("focus:outline-green-600");
    field.classList.remove("placeholder:text-gray-400");
    field.classList.remove("focus:outline-offset-1");
    field.classList.remove("focus:outline-2");
    */

    /*
f_name.addEventListener("input", (e) => validarCampoCompleto("Debe introducir su nombre", e));
f_number.addEventListener("input", (e) => validarCampoCompleto("Debe introducir su numero de teléfono", e));
f_msg.addEventListener("input", (e) => validarCampoCompleto("Envienos el motivo de su consulta", e));
//f_email.addEventListener("blur", (e) => validarMail("Debe introducir un E-Mail válido", e));
f_email.addEventListener("input", (e) => validarMail("Debe introducir un E-Mail válido", e));

form.addEventListener("input" , () => {
      if(mail_valido && name_valido && num_valido && msg_valido) {
      
      f_submit.disabled = false;
    }else{
      f_submit.disabled = true;
    }
})
*/