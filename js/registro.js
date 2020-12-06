// Hemos omitido los acentos en los comentarios por compatibilidad

function validar(formulario) {

  if (formulario.nombres.value.trim().length == 0) {
    document.getElementById("errorNombres").innerHTML = "Este campo es obligatorio";
    return false;
  }

  //Expresion regular del correo
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!re.test(formulario.email.value)) {
    document.getElementById("errorEmail").innerHTML = "Este campo es obligatorio";
    return false;
  }

  if (formulario.contrasena.value.trim().length < 7) {
    document.getElementById("errorContrasena").innerHTML = "Debe tener al menos 7 caracteres";
    return false;
  }

  if (formulario.contrasena.value != formulario.confirmacion.value) {
    document.getElementById("errorConfirmacion").innerText = "No coincide con contraseña";
    return false;
  }
  
  if (formulario.tipo.value == "") {
    document.getElementById("errorTipo").innerHTML = "Este campo es obligatorio";
    return false;
  }

  if (!formulario.terminos.checked) {
    document.getElementById("errorAcepto").innerHTML = "Debe aceptar los términos y condiciones";
    return false;
  }

  return true;

}
