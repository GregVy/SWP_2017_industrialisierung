jQuery.noConflict();

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
// Karte

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
  };

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), map_option);
  InitializeM();
  UpdateM();
};


////////////////////////////////////////////
// Browserabfrage_Firefox

jQuery( document ).ready(function() {
  var userAgent = navigator.userAgent;
  var browser_name = navigator.appName;
  var appVersion = navigator.appVersion;
    if((userAgent.indexOf('Firefox') > -1)){
            document.getElementById("effect").style.width = "362px";
            document.getElementById("effect").style.top = "-3px";
            document.getElementById("button").style.top = "-3px";
            document.getElementById("pop_up1").style.width = "22px";
            document.getElementById("spoiler_left_active").style.width = "20px";
            document.getElementById("pop_up2").style.width = "22px";
            document.getElementById("spoiler_right_active").style.width = "20px";
            document.getElementById("pop_up3").style.width = "22px";

    }
});


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
  InitializeI();
  for (var i = 0; i < MarkerArray.length; i++) {
    (function(index) {
      MarkerArray[index].addListener('click', function() {
        showDetails(index);
      });
    })(i);
  };

  // in Liste angeklickt
  jQuery(document).on('click','.listItem', function() {
    showDetails(jQuery(this).attr('rel'));
  });

};

// Info-Array
function InitializeI() {

  for (var i = 0; i < EreignisArray.length; i++) {
    InfoArray[i] = new google.maps.InfoWindow({
      content: "Alternative: Hier könnten ebenfalls die Details für das Ereignis " + EreignisArray[i].getName() + " angezeigt werden."
    })
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
      if (EreignisArray[i].getTime1() > sY2 || EreignisArray[i].getTime2() < sY1) {
        // F5 und F6 - disjunkt
        MarkerArray[i].setMap(null);
      } else {
        if (EreignisArray[i].getTime1() < sY1) {
          if (EreignisArray[i].getTime2() > sY2) {
            // F2
            MarkerArray[i].setOpacity(1);
            AddToList(i);
          } else {
            // F4
            MarkerArray[i].setOpacity(0.5);
          }
        } else {
          if (EreignisArray[i].getTime2() > sY2) {
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

  jQuery( "#EListe" ).append(EreignisArray[x].getTList());

};

// Ereignisdetails anzeigen
var lastX = 0;
function showDetails(x) {

  // TODO Was angezeigt werden muss, wenn Ereignis x in der Liste oder auf der Karte angeklickt wird
  jQuery( "#spoiler_right_large" ).show();
  jQuery( "#detailContent" ).empty();
  jQuery( "#detailContent" ).append(EreignisArray[x].getTDetail());

  InfoArray[lastX].close();
  lastX = x;
  InfoArray[x].open(map, MarkerArray[x]);
};


////////////////////////////////////////////
// Templates

// Anzeige in Liste
function TemplateList(TID, TName, TStandort, TType) {
  return '<li rel="' + TID.toString() + '" class="' + 'listItem"><p class="' + 'listContent listCName">' + TName + '</p><p class="' + 'listContent listCInfo">' + TStandort + ', ' + TType + '</p></li>'
};

// Anzeige der Details
function TemplateDetails(TID, TName) {
  return "Hallo Welt, ich bin ein Placeholder für das Ereignis " + TName + " mit der ID " + TID.toString();
};


////////////////////////////////////////////
// Interaktive Funktionen

// Login-Box
jQuery( document ).ready(function() {
    var Login_counter = 1 ;
    // run the currently selected effect
        function runEffect() {
          // get effect type from
          var selectedEffect = $( "drop" ).val();

          // Most effect types need no options passed by default
          var options = {};

         // Run the effect
          $( "#effect" ).toggle( selectedEffect, options, 500 );
          };

        // Set effect from select menu value
        $( "#button" ).on( "click", function() {
          runEffect();
          if (Login_counter == 1) {
              Login_counter = 0;
          $( "#button" ).hide();
          } else {
              Login_counter = 1;
              $( "#button" ).show();
          }
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
        sY1 = ui.values[0];
        sY2 = ui.values[1];
    }
  });

  jQuery( "#slider" ).on( "slidechange", function() {
    UpdateM();
    jQuery('.selectedYear').empty();
    jQuery('#selectedYear1').append(sY1);
    jQuery('#selectedYear2').append(sY2);
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
        } else {
          document.getElementById("map").style.left = "0.9%";
          document.getElementById("map").style.width = "84.3%";
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

    } else if (jQuery(this).attr('rel') == 2) {

      jQuery( "#spoiler_right" ).toggle();
      jQuery( "#spoiler_right_active" ).toggle();

      if (rightActive == true) {
        if (leftActive == false) {
          document.getElementById("map").style.left = "0.9%";
          document.getElementById("map").style.width = "98.1%";
        } else {
          document.getElementById("map").style.right = "0.9%";
          document.getElementById("map").style.width = "84.3%";
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

  jQuery('.pop-in_button_large').on('click', function() {
    jQuery( "#spoiler_right_large" ).hide();
  });

});

// Hover-overs
jQuery( document ).ready(function() {

  // Listenitem
  jQuery(document).on('mouseenter','.listItem', function() {
    jQuery(this).addClass( "boxShadow" );
  });
  jQuery(document).on('mouseleave','.listItem', function() {
    jQuery(this).removeClass( "boxShadow" );
  });

  // Legendenitem
  jQuery( '.legendItem' ).on('mouseenter', function() {
    jQuery(this).addClass( "boxShadow" );
  });
  jQuery( '.legendItem' ).on('mouseleave', function() {
    jQuery(this).removeClass( "boxShadow" );
  });

  // Pop-in Buttons
  jQuery( '.pop-in_button' ).on('mouseenter', function() {
    jQuery(this).addClass( "boxShadow" );
  });
  jQuery( '.pop-in_button' ).on('mouseleave', function() {
    jQuery(this).removeClass( "boxShadow" );
  });

});
