
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

publicar.addEventListener("click",publicarImagen )
publicar.addEventListener("click",limpiarModal)

function publicarImagen() {
  	var reader =  new FileReader ();
  	reader.readAsDataURL(imagenUsuario.files[0])
  	reader.onload = function (){
      var nuevaImagen = new Image ();
      var imagenArchivo = this.result;
  		var comentarios = document.getElementById("comentarios");
  		var nuevaPublicacionImagen = document.createElement("div");
  		var nuevoTituloImagen = document.createElement("h4")

  		nuevaImagen.src = imagenArchivo;
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

  // funcion modalEvento
  function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {
        lat: -34.397,
        lng: 150.644
      },
      zoom: 6
    });
    var infoWindow = new google.maps.InfoWindow({
      map: map
    });


  }

  function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
      'Error: The Geolocation service failed.' :
      'Error: Your browser doesn\'t support geolocation.');
  }

var areaTituloEvento = document.getElementById("tituloEvento");
var mapa = document.getElementById("comentarios");
var publicarMapa = document.getElementById("publicarDos")
publicarMapa.addEventListener("click", function () {
  // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        infoWindow.setPosition(pos);
        infoWindow.setContent('Location found.');
        map.setCenter(pos);
      }, function () {
        handleLocationError(true, infoWindow, map.getCenter());
      });
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }


  var tituloEvento = areaTituloEvento.value;
  var divContenedor = document.createElement("div");
  var tituloMapa = document.createElement("h4");
  h5.textContent = tituloEvento;
  divContenedor.className = "container " + "center " + "card-panel " + "hoverable";
  mapa.className = "center";
  divContenedor.appendChild(tituloMapa);
  divContenedor.appendChild(mapa);
  mapa.style.display = "block";
  areaPublicacion.appendChild(divContenedor);



});
