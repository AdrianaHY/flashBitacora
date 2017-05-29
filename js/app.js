// funcionalidad modalTexto
$(document).ready(function () {
	$(".modal").modal();
});

var mensaje = document.getElementById("modal-message");
var titulo = document.getElementById("modal-title");
var enviar= document.getElementById("send-text");

enviar.addEventListener("click", mostrarTexto);

function mostrarTexto(){
	var comentarios = document.getElementById("comentarios");
	var nuevaPublicacion = document.createElement("div");
	var nuevoTexto = document.createElement("p")
	var nuevoTitulo = document.createElement("h4");

	nuevaPublicacion.className="card-panel";
  nuevoTexto.style.fontSize="2vw";
  nuevoTexto.style.color="#0888AC"
  nuevoTitulo.style.color="#AC0844"
	nuevoTitulo.innerHTML = titulo.value;
	nuevoTexto.innerHTML = mensaje.value;
	nuevaPublicacion.appendChild(nuevoTitulo);
	nuevaPublicacion.appendChild(nuevoTexto);
	comentarios.appendChild(nuevaPublicacion);
}
$('#id del modal').modal('close');
