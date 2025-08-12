const buttonOpen = document.getElementById("buttonOpen");
const buttonClose = document.getElementById("buttonClose");
const mobileMenu = document.getElementById("mobileMenu");
const menuLinks = document.querySelectorAll(".menu-link");
const backgroundBackdrop = document.getElementById("backgroundBackdrop");
//FORM
const botcheck = document.getElementById("control");
buttonOpen.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
  backgroundBackdrop.classList.toggle("hidden");
});

buttonClose.addEventListener("click", () => {
  backgroundBackdrop.classList.toggle("hidden");
  mobileMenu.classList.toggle("hidden");
});

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    backgroundBackdrop.classList.toggle("hidden");
    mobileMenu.classList.toggle("hidden");
  });
});

//CARRUSEL
let carrusel = document.getElementById("carrusel");
let indexImagenActual = 0;
const cantidadDeImagenes = carrusel.children.length;

setInterval(function () {
  indexImagenActual = indexImagenActual + 1;
  if (indexImagenActual >= cantidadDeImagenes) {
    indexImagenActual = 0;
  }
  carrusel.style.transform = `translateX(-${indexImagenActual * 100}%)`;
}, 8000);

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
f_submit.addEventListener("submit", () => {
  if (vNombre === false) {
  }
});

function vNombre() {
  if (f_input_name.value < 3) {
    return false;
  }
}

const validarCampoCompleto = (mensaje, campo) => {
  if (campo.value.trim().length === 0) {
    campo.classList.add("warning-box");
    campo.nextElementSibling.classList.add("warning-text");
    campo.nextElementSibling.innerText = mensaje;
    if (campo === f_name) {
      name_valido = false;
    } else if (campo === f_number) {
      num_valido = false;
    } else if (campo === f_msg) {
      msg_valido = false;
    }
  } else {
    campo.classList.remove("warning-box");
    campo.nextElementSibling.classList.remove("warning-text");
    campo.nextElementSibling.innerText = "";
    if (campo === f_name) {
      name_valido = true;
    } else if (campo === f_number) {
      num_valido = true;
    } else if (campo === f_msg) {
      msg_valido = true;
    }
  }
};

const validarMail = (mensaje, campo) => {
  const regex = new RegExp(/^[\w\.-]+@[\w\.-]+\.\w{2,}$/);
  if (campo.value.trim().length === 0 || !regex.test(campo.value)) {
    campo.classList.add("warning-box");
    campo.nextElementSibling.classList.add("warning-text");
    campo.nextElementSibling.innerText = mensaje;
    mail_valido = false;
  } else {
    campo.classList.remove("warning-box");
    campo.nextElementSibling.classList.remove("warning-text");
    campo.nextElementSibling.innerText = "";
    mail_valido = true;
  }
};

form.addEventListener("change", () => {
  if (botcheck.checked) {
    f_submit.disabled = true;
  } else {
    f_submit.disabled = false;
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validarCampoCompleto("Debe introducir su nombre", f_name);
  validarCampoCompleto("Debe introducir su numero de teléfono", f_number);
  validarCampoCompleto("Envienos el motivo de su consulta", f_msg);
  validarMail("Debe introducir un E-Mail válido", f_email);
  const respuesta = document.getElementById("respuesta");
  if (mail_valido && name_valido && num_valido && msg_valido) {
    const captcha_value = document.querySelector(
      "textarea[name=h-captcha-response]"
    ).value;
    if (!captcha_value) {
      Toastify({
        text: "Valide el CAPTCHA antes de enviar 🫣",
        duration: 3000,
        close: true,
        gravity: "bottom",
        position: "right",
        backgroundColor: "#BA9B00",
        stopOnFocus: true,
      }).showToast();

      return;
    }
    f_submit.disabled = true;
    f_submit.textContent = "Enviando...";
    f_submit.classList.add("disabled-btn");
    f_submit.classList.remove("bg-azul");
    f_submit.classList.remove("cursor-pointer");
    f_submit.classList.add("bg-gris");
    const data = new FormData(e.target);
    let formData = {};
    data.forEach((value, key) => {
      formData[key] = value;
    });

    let json = JSON.stringify(formData);

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        form.reset();
        if (response.status === 200) {
          Toastify({
            text: "Enviado con exito ✅",
            duration: 3000,
            close: true,
            gravity: "bottom",
            position: "right",
            backgroundColor: "#27AB00",
            stopOnFocus: true,
          }).showToast();
          f_submit.disabled = false;
          f_submit.textContent = "Enviar";
          f_submit.classList.remove("disabled-btn");
          f_submit.classList.add("cursor-pointer");
          f_submit.classList.remove("bg-gris");
          f_submit.classList.add("bg-azul");
        } else {
          form.reset();
          Toastify({
            text: "Algo salió mal 🫣, intente de nuevo",
            duration: 3000,
            close: true,
            gravity: "bottom", // "top" o "bottom"
            position: "right", // "left", "center" o "right"
            backgroundColor: "#BA9B00",
            stopOnFocus: true,
          }).showToast();
          f_submit.disabled = false;
          f_submit.textContent = "Enviar";
          f_submit.classList.remove("disabled-btn");
          f_submit.classList.add("cursor-pointer");
          f_submit.classList.remove("bg-gris");
          f_submit.classList.add("bg-azul");
        }
      })
      .catch((err) => {
        form.reset();
        f_submit.disabled = false;
        f_submit.textContent = "Enviar";
        f_submit.classList.remove("disabled-btn");
        f_submit.classList.add("cursor-pointer");
        f_submit.classList.remove("bg-gris");
        f_submit.classList.add("bg-azul");
        Toastify({
          text: "Algo salió mal 🫣, intente de nuevo",
          duration: 3000,
          close: true,
          gravity: "bottom", // "top" o "bottom"
          position: "right", // "left", "center" o "right"
          backgroundColor: "#F5CC27",
          stopOnFocus: true,
        }).showToast();
      });
  } else {
    f_submit.disabled = false;
    f_submit.textContent = "Enviar";
    f_submit.classList.remove("disabled-btn");
    f_submit.classList.add("cursor-pointer");
    f_submit.classList.remove("bg-gris");
    f_submit.classList.add("bg-azul");
    Toastify({
      text: "Complete todos los campos antes de enviar ⛔",
      duration: 3000,
      close: true,
      gravity: "bottom", // "top" o "bottom"
      position: "right", // "left", "center" o "right"
      backgroundColor: "#D30000",
      stopOnFocus: true,
    }).showToast();
  }
});
