function initMap() {

      var ubicacion = {lat: 19.4181529, lng: -99.1652013};
      var map = new google.maps.Map($("#map")[0], {
        zoom: 4,
        center: ubicacion
      });
      var exito=function(posicion){
        var ubicacion={
        lat:posicion.coords.latitude,
        lng:posicion.coords.longitude}

        var map = new google.maps.Map($("#map")[0], {
          zoom: 20,
          center: ubicacion
        });
        var marker = new google.maps.Marker({
          position: ubicacion,
          map: map
        });
      };
      if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(exito);
      }
    };
