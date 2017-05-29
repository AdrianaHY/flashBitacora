
// funcionalidad modalTexto
$(document).ready(function () {
	$(".modal").modal();
});

var mensaje = document.getElementById("mensajeModal");
var titulo = document.getElementById("tituloModal");
var enviar= document.getElementById("enviarTexto");

enviar.addEventListener("click", mostrarTexto);


function mostrarTexto(){
  var comentarios = document.getElementById("comentarios");
	var nuevaPublicacion = document.createElement("div");
	var nuevoTexto = document.createElement("p")
	var nuevoTitulo = document.createElement("h4");

	nuevaPublicacion.className="card-panel " +"hoverable";
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

// funcionalidad modalImagen
var imagenUsuario = document.getElementById("archivoImagen")
var tituloImagen = document.getElementById("tituloImagen")
var publicar = document.getElementById("publicar")

publicar.addEventListener("click", limpiarModal)
imagenUsuario.addEventListener("change",publicarImagen)

function publicarImagen() {
  	var reader =  new FileReader ();
  	reader.readAsDataURL(this.files[0])
  	reader.onload = function (){
  		var imagenArchivo = this.result;
  		var nuevaImagen = document.createElement("img");
  		var comentarios = document.getElementById("comentarios");
  		var nuevaPublicacionImagen = document.createElement("div");
  		var nuevoTituloImagen = document.createElement("h4")

  		nuevaImagen.src = imagenUsuario;
  		nuevaPublicacionImagen.className = "card-panel  " + "hoverable";
  		nuevaImagen.className = "image-responsive " + "col " +"s12";
  		nuevoTituloImagen.innerHTML = tituloImagen.value;

  		nuevaPublicacionImagen.appendChild(nuevoTituloImagen);
  		nuevaPublicacionImagen.appendChild(nuevaImagen);
  		comentarios.appendChild(nuevaPublicacionImagen);
  	}
  }
  function limpiarModal(){
  	mensaje.value = "";
  	titulo.value = "";
  	tituloImagen.value = "";
  	// textoI.value = "";
  }
