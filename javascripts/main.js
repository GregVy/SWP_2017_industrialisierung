jQuery.noConflict();

/*
TODO Markerfälle siehe unten
TODO Line265 - Klassen-Deklaration vervollständigen
TODO Line295 - Im template des Objekts muss als String HTML Code stehen,
                welcher das Ereignis in der Liste repräsentiert
TODO Line447 - HTML Code welcher Ereignis-Details datstellt.
                Mglw. als Methode der Klasse?
*/

/*
FALLUNTERSCHEIDUNG BEI MARKERN

C  --------------------------     F1
E     ----------------------------- 100%

C         ---------------------       F2
E     -----------------------------   100%

C  --------------------------   F3
E     -----------------       50%

C         --------------------------    F4
E     ------------------------          50%

C                        ---------------------- F5
E     ----------------                          0%

C    ----------                     F6
E                   ------------     0%

C = eingestellte Zeitspanne
V = Zeitspanne des Ereignisses

6 Fälle, Fi = i-ter Fall

TODO Wie werden welche Fälle angezeigt?
     Welche Fälle kommen in die Liste?
     --> In Gruppe klären
*/

////////////////////////////////////////////
// Globale Variablen

// Konstanten
var FULL_TIMESPAN = [1850, 1950];

// Karte
var map;
var map_option = {
    center: {lat: 50.930, lng: 11.240},

    zoom: 8,
    minZoom: 8,
    maxZoom: 20,

    zoomControl: true,
    mapTypeControl: false,
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
  },{
    "elementType": "geometry",
    "stylers": [
      {"color": "##494949"}
    ]
  },{
    "elementType": "labels",
    "stylers": [
      {"visibility": "off"}
    ]
  },{
    "elementType": "labels.text.fill",
    "stylers": [
      {"color": "#523735"}
    ]
  },{
    "elementType": "labels.text.stroke",
    "stylers": [
      {"color": "#f5f1e6"}
    ]
  },{
    "featureType": "administrative",
    "elementType": "geometry.stroke",
    "stylers": [
      {"color": "#494949"}
    ]
  },{
    "featureType": "administrative.land_parcel",
    "stylers": [
      {"visibility": "off"}
    ]
  },{
    "featureType": "administrative.land_parcel",
    "elementType": "geometry.stroke",
    "stylers": [
      {"color": "#dcd2be"}
    ]
  },{
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {"color": "#ae9e90"}
    ]
  },{
    "featureType": "administrative.neighborhood",
    "stylers": [
      {"visibility": "off"}
    ]
  },{
    "featureType": "landscape.natural",
    "elementType": "geometry",
    "stylers": [
      {"color": "#dfd2ae"}
    ]
  },{
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {"color": "#dfd2ae"}
    ]
  },{
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {"color": "#93817c"}
    ]
  },{
    "featureType": "poi.park",
    "elementType": "geometry.fill",
    "stylers": [
      {"color": "#a5b076"}
    ]
  },{
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {"color": "#447530"}
    ]
  },{
    "featureType": "road",
    "stylers": [
      {"visibility": "off"}
    ]
  },{
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {"color": "#f5f1e6"}
    ]
  },{
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      {"color": "#fdfcf8"}
    ]
  },{
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {"color": "#f8c967"}
    ]
  },{
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {"color": "#e9bc62"}
    ]
  },{
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry",
    "stylers": [
      {"color": "#e98d58"}
    ]
  },{
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry.stroke",
    "stylers": [
      {"color": "#db8555"}
    ]
  },{
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {"color": "#806b63"}
    ]
  },{
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {"color": "#dfd2ae"}
    ]
  },{
    "featureType": "transit.line",
    "elementType": "labels.text.fill",
    "stylers": [
      {"color": "#8f7d77"}
    ]
  },{
    "featureType": "transit.line",
    "elementType": "labels.text.stroke",
    "stylers": [
      {"color": "#ebe3cd"}
    ]
  },{
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {"color": "#dfd2ae"}
    ]
  },{
    "featureType": "water",
    "elementType": "geometry.fill",
    "stylers": [
      {"color": "#b9d3c2"}
    ]
  },{
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {"color": "#92998d"}
    ]
  }
]
  }

// Arrays
var MarkerArray = new Array;
var EreignisArray = new Array;
var showType = [true, true, true, true];

// Funktionale Variablen
var sV1 = FULL_TIMESPAN[0];
var sV2 = FULL_TIMESPAN[1];


////////////////////////////////////////////
// Datenbank-Anbindung

InitializeE();


////////////////////////////////////////////
// Karten- und Klassen-Deklaration

// Karte
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), map_option);
  InitializeM();
  UpdateM();
};

// Ereignis-Klasse
function Ereignis (ID, name, type, /* standort,*/  lat, lng, JahrV, JahrB) {
    // TODO Deklaration vervollständigen, erst möglich nach Absprache mit Geistis
    this.id = ID;
    this.name = name;
    this.type = type;
  //  this.standort = standort;
    this.latC = lat;
    this.lngC = lng;
    this.time1 = JahrV;
    this.time2 = JahrB;

    this.getID = function() {
      return this.id;
    };

    this.getName = function() {
      return this.name;
    };

    this.getType = function() {
      return this.type;
    };

    this.getLatC = function() {
      return this.latC;
    };

    this.getLngC = function() {
      return this.lngC;
    };

    this.getTime1 = function() {
      return this.time1;
    };

    this.getTime2 = function() {
      return this.time2;
    };

    this.getTemplate = function() {
      return '<li><div rel="' + this.id.toString() + '" class="listItem">' + this.name + '</div></li>'
      // TODO Einfügen was genau über ein Ereignis in der Liste angezeigt werden soll
    };
};


////////////////////////////////////////////
// Globale Funktionen

// Ereignistyp-Array
function toggleShowenType(ID) {

  toggleType = showType [ID];
  toggleType = !toggleType;
  showType [ID] = toggleType;

};

// Type-Enummeration
function typeID(currentType) {

  switch (currentType) {
    case "Soziale Bewegung":
        return 0
      break;

    case "Industrie 1":
        return 1
      break;

    case "Industrie 2":
        return 2
      break;

    case "Industrie 3":
        return 3
      break;
    }

};

// Ereignis-Array
function InitializeE() {

  EreignisArray.push(new Ereignis(0, "Bsp0", "Soziale Bewegung", 50.930, 11.240, 1880, 1950));
  EreignisArray.push(new Ereignis(1, "Bsp1", "Industrie 1", 50.830, 11.840, 1850, 1920));
  EreignisArray.push(new Ereignis(2, "Bsp2", "Industrie 3", 51.330, 10.840, 1890, 1910));
  EreignisArray.push(new Ereignis(3, "Bsp3", "Industrie 2", 50.730, 10.840, 1870, 1990));

  EreignisArray.push(new Ereignis(4, "Bsp4", "Soziale Bewegung", 50.784, 11.240, 1843, 1930));
  EreignisArray.push(new Ereignis(5, "Bsp5", "Industrie 1", 50.999, 11.840, 1820, 1980));
  EreignisArray.push(new Ereignis(6, "Bsp6", "Industrie 3", 51.206, 10.840, 1890, 1980));
  EreignisArray.push(new Ereignis(7, "Bsp7", "Industrie 2", 50.666, 10.867, 1910, 1990));

  EreignisArray.push(new Ereignis(8, "Bsp8", "Soziale Bewegung", 50.930, 11.140, 1940, 1960));
  EreignisArray.push(new Ereignis(9, "Bsp9", "Industrie 1", 50.830, 11.120, 1810, 1980));
  EreignisArray.push(new Ereignis(10, "Bsp10", "Industrie 3", 51.330, 10.560, 1810, 1910));
  EreignisArray.push(new Ereignis(11, "Bsp11", "Industrie 2", 50.730, 10.840, 1870, 1990));

  EreignisArray.push(new Ereignis(12, ":^)", "Industrie 2", 50.730, 11.069, 1840, 1990));
}

// Marker-Array
function InitializeM() {

  // MarkerArray aus EreignisArray erstellen
  for (i = 0; i < EreignisArray.length ; i++) {
    var currentEreignis = EreignisArray[i];

    MarkerArray[i] = new google.maps.Marker ({
      map: map,
      position: {
        lat: currentEreignis.getLatC(),
        lng: currentEreignis.getLngC(),
      },
      title: currentEreignis.getName(),
    });
  };

  // auf Karte angeklickt
  for (var i = 0; i < MarkerArray.length; i++) {
    (function(index) {
      MarkerArray[index].addListener('click', function() {
      showDetails(index);
      });
    })(i);
  };

};

// Update Marker
function UpdateM() {

  jQuery("#EListe").empty();

  for (var i = 0; i < EreignisArray.length; i++) {

    if (showType[typeID(EreignisArray[i].getType())]) {
    // Ereignis-Typ wird angezeigt
      MarkerArray[i].setMap(map);
      // Fallunterscheidung der 6 Fälle
      if (EreignisArray[i].getTime1() > sV2 || EreignisArray[i].getTime2() < sV1) {
        // F5 und F6 - disjunkt
        MarkerArray[i].setMap(null);
      } else {
        if (EreignisArray[i].getTime1() < sV1) {
          if (EreignisArray[i].getTime2() > sV2) {
            // F2
            MarkerArray[i].setOpacity(1);
            AddToList(i);
          } else {
            // F4
            MarkerArray[i].setOpacity(0.5);
          }
        } else {
          if (EreignisArray[i].getTime2() > sV2) {
            // F1
            MarkerArray[i].setOpacity(1);
            AddToList(i);
          } else {
            // F3
            MarkerArray[i].setOpacity(0.5);
          }
        }
      }
    } else {
      // Ereignis-Typ wird nicht angezeigt
      MarkerArray[i].setMap(null);
    }
  }

};

// Ereignis zur Liste hinzufügen
function AddToList(x) {

  jQuery( "#EListe" ).append(EreignisArray[x].getTemplate());

};

// Ereignisdetails anzeigen
function showDetails(x) {

  // TODO Was angezeigt werden muss, wenn Ereignis x in der Liste oder auf der Karte angeklickt wird
  console.log(x);

};


////////////////////////////////////////////
// Interaktive Funktionen

// Login-Box
jQuery( document ).ready(function() {
    // run the currently selected effect
        function runEffect() {
          // get effect type from
          var selectedEffect = $( "drop" ).val();

          // Most effect types need no options passed by default
          var options = {};
          // some effects have required parameters
          if ( selectedEffect === "scale" ) {
            options = { percent: 50 };
          } else if ( selectedEffect === "size" ) {
            options = { to: { width: 280, height: 185 } };
          }

         // Run the effect
          $( "#effect" ).toggle( selectedEffect, options, 500 );
          };

        // Set effect from select menu value
        $( "#button" ).on( "click", function() {
          runEffect();
        });
        $( "#effect" ).hide();

      });

// Zeitstrahl
jQuery( document ).ready(function() {

  jQuery( "#slider" ).slider({
    range: true,
    min: FULL_TIMESPAN [0],
    max: FULL_TIMESPAN [1],
    values: [FULL_TIMESPAN [0], FULL_TIMESPAN [1]],
    slide: function (event, ui) {
        sV1 = ui.values[0];
        sV2 = ui.values[1];
    }
  });

  jQuery( "#slider" ).on( "slidechange", function() {
    UpdateM();
  });

});

// Legende
jQuery( document ).ready(function() {

  // initialisiere Legende
  jQuery( ".legendItem" ).addClass( "activeLegendItem" );

  // Legenden-Funktionalität
  jQuery( ".legendItem" ).on('click', function() {
    var clickedItem = jQuery(this);
    var clickedItemID = clickedItem.attr('rel');

    toggleShowenType(clickedItemID);
    jQuery(clickedItem).toggleClass( "activeLegendItem" );
    UpdateM();

  });

});

// Listener für Listenklicks
jQuery( document ).ready(function() {

  jQuery(document).on('click','.listItem', function() {
    showDetails(jQuery(this).attr('rel'));
  });

});

// Pop-In
jQuery( document ).ready(function() {

  var leftActive  = true;
  var rightActive = true;

  jQuery('.pop-in_button').on('click', function() {

    if (jQuery(this).attr('rel') == 1) {
      jQuery( "#spoiler_left" ).toggle();
      jQuery( "#spoiler_left_active" ).toggle();

      if (leftActive == true) {
        if (rightActive == false) {
          document.getElementById("map").style.left = "0.9%";
          document.getElementById("map").style.width = "98.1%";
          document.getElementById("spoiler_left_active").style.height = "84.4%";
        } else {
          document.getElementById("map").style.left = "0.9%";
          document.getElementById("map").style.width = "84.3%";
          document.getElementById("spoiler_left_active").style.height = "84.4%";
        }
      } else {
        if (rightActive == false) {
          document.getElementById("map").style.left = "14.8%";
          document.getElementById("map").style.width = "84.3%";
        } else {
          document.getElementById("map").style.left = "14.8%";
          document.getElementById("map").style.width = "70.4%";
        }
      }
      leftActive = !leftActive;

    } else {

      jQuery( "#spoiler_right" ).toggle();
      jQuery( "#spoiler_right_active" ).toggle();

      if (rightActive == true) {
        if (leftActive == false) {
          document.getElementById("map").style.left = "0.9%";
          document.getElementById("map").style.width = "98.1%";
          document.getElementById("spoiler_right_active").style.height = "84.4%";
        } else {
          document.getElementById("map").style.right = "0.9%";
          document.getElementById("map").style.width = "84.3%";
          document.getElementById("spoiler_right_active").style.height = "84.4%";
        }
      } else {
        if (leftActive == false) {
          document.getElementById("map").style.left = "0.9%";
          document.getElementById("map").style.width = "84.3%";
        } else {
          document.getElementById("map").style.right = "14.8%";
          document.getElementById("map").style.width = "70.4%";
        }
      }
      rightActive = !rightActive;

    }

    initMap();
  });
});
