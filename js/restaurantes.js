function initMap() {

  var ubicacion = {
    lat: 19.4181529,
    lng: -99.1652013
  };
  var map = new google.maps.Map($("#map")[0], {
    zoom: 4,
    center: ubicacion
  });
  var exito = function(posicion) {
    var ubicacion = {
      lat: posicion.coords.latitude,
      lng: posicion.coords.longitude
    }

    var map = new google.maps.Map($("#map")[0], {
      zoom: 20,
      center: ubicacion
    });
    var marker = new google.maps.Marker({
      position: ubicacion,
      map: map
    });
  };
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(exito);
  }
};

var restaurantes = [{
    "nombre": "La Casa de Toño",
    "direccion": "dasdfdsfsdf"
  },
  {
    "nombre": "Pizza del Perro Negro",
    "direccion": "dasdfdsfsdf"
  },
  {
    "nombre": "MáximoBistrot",
    "direccion": "dasdfdsfsdf"
  },
  {
    "nombre": "Carnívoro",
    "direccion": "dasdfdsfsdf"
  },
  {
    "nombre": "La Bipolar",
    "direccion": "dasdfdsfsdf"
  },
  {
    "nombre": "Restaurante Miguel",
    "direccion": "dasdfdsfsdf"
  }
];
var plantilla = '<div class="col s12 m7">' +
  '<div class="card horizontal">' +
  '<div class="card-image">' +
  '<img src="__logo__">' +
  '</div>' +
  '<div class="card-stacked">' +
  '<div class="card-content">' +
  '<h4>__nombre__</h4>' +
  '<p>__direccion__</p>' +
  '<p class="texto-tarjeta-telefono"><i class="material-icons">phone</i> __numero__</p>' +
  '</div>' +
  '</div>' +
  '</div>' +
  '</div>';

  var cargarPagina = function () {

     mostrar(restaurantes);
     $("#search-form").submit(filtrar);
  };

var mostrar = function(restaurantes) {
  var vacio = "";
  restaurantes.forEach(function(comida) {
    vacio += plantilla.replace("__nombre__", comida.nombre)
      .replace("__direccion__", comida.direccion);
  });
  $(".impresion").html(vacio);
};
var filtrar = function (e) {
	e.preventDefault();
	var busqueda = $("#search").val().toLowerCase();
	var filtrados = restaurantes.filter(function (comida) {
		return comida.nombre.toLowerCase().indexOf(busqueda) >= 0;
	});
  mostrar(filtrados);
};

$(document).ready(cargarPagina);
