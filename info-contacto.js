var botonContacto = document.getElementById("btn-contacto");
var dialogoContacto = document.getElementById("dialogo-contacto");
var botonCerrar = document.getElementById("cerrar-dialogo");

botonContacto.addEventListener("click", function() {
  dialogoContacto.showModal();
});

botonCerrar.addEventListener("click", function() {
  dialogoContacto.close();
});
