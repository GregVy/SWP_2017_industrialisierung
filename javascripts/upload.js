jQuery.noConflict();

////////////////////////////////////////////
// Karte

var map;
var map_option = {
    center: {lat: 50.930, lng: 11.240},

    zoom: 8,
    minZoom: 8,
    maxZoom: 20,

    mapTypeId: 'roadmap',
    scaleControl: false,
    streetViewControl: false,
    rotateControl: false,
    fullscreenControl: false,
    styles: [
      {
        "featureType": "administrative",
        "elementType": "geometry",
        "stylers": [
          {"color": "#000000"}
        ]
      }
    ]
  }

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), map_option);

    var infowindow = new google.maps.InfoWindow({
    size: new google.maps.Size(150,50)
    });

    google.maps.event.addListener(map, "click", function(event) {
        var lat = event.latLng.lat();
        var lng = event.latLng.lng();
        document.getElementById('laenge').value = lat;
        document.getElementById('breite').value = lng;
    });
};


////////////////////////////////////////////
// Interaktive Funktionen

// Suchfunktion
function initSearch() {

    // Create the search box and link it to the UI element.
    var input = document.getElementById('pac-input');
    var searchBox = new google.maps.places.SearchBox(input);
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

    // Bias the SearchBox results towards current map's viewport.
    map.addListener('bounds_changed', function() {
        searchBox.setBounds(map.getBounds());
    });

    var markers = [];

    // Listen for the event fired when the user selects a prediction and retrieve
    // more details for that place.
    searchBox.addListener('places_changed', function() {
        var places = searchBox.getPlaces();
        if (places.length == 0) {
            return;
        }

        // Clear out the old markers.
        markers.forEach(function(marker) {
            marker.setMap(null);
        });

        markers = [];

        // For each place, get the icon, name and location.
        var bounds = new google.maps.LatLngBounds();
        places.forEach(function(place) {
        if (!place.geometry) {
            console.log("Returned place contains no geometry");
            return;
        }
        var icon = {
            url: place.icon,
            size: new google.maps.Size(71, 71),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(17, 34),
            scaledSize: new google.maps.Size(25, 25)
        };

        // Create a marker for each place.
        markers.push(new google.maps.Marker({
            map: map,
            icon: icon,
            title: place.name,
            position: place.geometry.location
        }));

        //Eintragen von Längengrad und Breitengrad in inputs
    	  document.getElementById('lng').value = place.geometry.location.lng();
        document.getElementById('lat').value = place.geometry.location.lat();

        if (place.geometry.viewport) {

            // Only geocodes have viewport.
            bounds.union(place.geometry.viewport);
        } else {
            bounds.extend(place.geometry.location);
        }
        });
        map.fitBounds(bounds);
    });

};

// Karte Pop-up
jQuery( document ).ready(function() {

  var count = true;

  jQuery('.map_pop-up').on('click', function() {
        document.getElementById("spoiler_map").style.zIndex = "4";
        if (count == true) {
            document.getElementById("spoiler_map").style.display = "block";
            initMap();
            initSearch();
            count = false;
            }
        });

  jQuery('.map_pop-in').on('click', function() {
        google.maps.event.trigger(map, "resize");
        document.getElementById("spoiler_map").style.zIndex = "1";
  });
});
