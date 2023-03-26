/* RETORNA O NUMERO DE TELEFONE */
const phoneInputField = document.getElementById("testeForm");
const testeFormField = document.getElementById("tel");
const phoneInput = window.intlTelInput(phoneInputField, {
  preferredCountries: ["br", "us", "pt"],
  initialCountry: "br",
  utilsScript:
    "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});

/*  MASCARA TELEFONE BRASIL */

function mascaraBR(o, f) {
  v_obj = o
  v_fun = f
  setTimeout(execmascaraBR, 1)
}
function execmascaraBR() {
  v_obj.value = v_fun(v_obj.value)
}
function mtelBR(v) {
  v = v.replace(/\D/g, ""); //Remove tudo o que não é dígito
  v = v.replace(/^(\d{2})(\d)/g, "($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
  v = v.replace(/(\d)(\d{4})$/, "$1-$2"); //Coloca hífen entre o quarto e o quinto dígitos
  return v;
}
function id(el) {
  return document.getElementById(el);
}
function ativaMascaraBR() {
  id("testeForm").onkeyup = function () {
    mascaraBR(this, mtelBR);
  }
}

/* MASCARA TELEFONE US */

function mascaraUS(o, f) {
  v_obj = o;
  v_fun = f;
  setTimeout(execmascaraUS, 1);
}

function execmascaraUS() {
  v_obj.value = v_fun(v_obj.value);
}

function mtelUS(v) {
  v = v.replace(/\D/g, "");
  v = v.replace(/^(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
  return v;
}

function id(el) {
  return document.getElementById(el);
}

function ativaMascaraUS() {
  id("testeForm").onkeyup = function () {
    mascaraUS(this, mtelUS);
  }
}

/* MASCARA TELEFONE PORTUGAL */

function mascaraPortugal(o, f) {
  v_obj = o;
  v_fun = f;
  setTimeout(execmascaraPortugal, 1);
}

function execmascaraPortugal() {
  v_obj.value = v_fun(v_obj.value);
}

function mtelPortugal(v) {
  v = v.replace(/\D/g, "");
  v = v.replace(/^(\d{2})(\d{3})(\d{3})/, "$1 $2 $3");
  return v;
}

function ativaMascaraPortugal() {
  id("testeForm").onkeyup = function () {
    mascaraPortugal(this, mtelPortugal);
  }
}

/* MASK DEFAULT */

function mascaraDefault(o, f) {
  v_obj = o
  v_fun = f
  setTimeout(execmascaraDefault, 1)
}
function execmascaraDefault() {
  v_obj.value = v_fun(v_obj.value)
}
function mtelDefault(v) {
  v = v.replace(/\D/g, ""); //Remove tudo o que não é dígito
  return v;
}
function id(el) {
  return document.getElementById(el);
}
function ativaMascaraDefault() {
  id("testeForm").onkeyup = function () {
    mascaraDefault(this, mtelDefault);
  }
}

//VERIFICA QUAL ESTA ATIVO

var paisAtual = phoneInput.getSelectedCountryData().iso2;

if (paisAtual === "br") {
  ativaMascaraBR()
  phoneInputField.setAttribute("maxlength", 15);
}

phoneInputField.addEventListener("countrychange", function () {
  phoneInputField.value = "";
  paisAtual = phoneInput.getSelectedCountryData().iso2;
  switch (paisAtual) {
    case "br":
      ativaMascaraBR();
      phoneInputField.setAttribute("maxlength", 15);
      break;
    case "us":
      ativaMascaraUS();
      phoneInputField.setAttribute("maxlength", 14);
      break;
    case "pt":
      ativaMascaraPortugal();
      phoneInputField.setAttribute("maxlength", 11);
      break;
    default:
      ativaMascaraDefault();
      phoneInputField.removeAttribute("maxlength");
      break;
  }
});

phoneInputField.addEventListener("input", () => {
  let phoneNumber = phoneInput.getNumber();
  testeFormField.value = phoneNumber
  console.log(phoneNumber)
})

//mascara de telefone chatgpt
