jQuery.noConflict();

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
// Browserabfrage

jQuery( document ).ready(function() {
  var userAgent = navigator.userAgent;
  var browser_name = navigator.appName;
  var appVersion = navigator.appVersion;

  // Firefox // Internet Explorer // Safari
    if ( userAgent.indexOf('Firefox') > -1 ){
            document.getElementById("effect").style.width = "362px";
            document.getElementById("effect").style.top = "-3px";
            document.getElementById("button").style.top = "-3px";
            document.getElementById("pop_up2").style.width = "22px";
            document.getElementById("spoiler_right_active").style.width = "20px";
            document.getElementById("pop_up3").style.width = "22px";
            document.getElementById("detailContent").style.marginLeft = "3px";

    } else if ( userAgent.indexOf("Internet Explorer") > -1 || userAgent.indexOf("Trident") > 7) {
            document.getElementById("effect").style.width = "362px";
            document.getElementById("effect").style.top = "-3px";
            document.getElementById("button").style.top = "-3px";
            document.getElementById("pop_up2").style.width = "22px";
            document.getElementById("spoiler_right_active").style.width = "20px";
            document.getElementById("pop_up3").style.width = "22px";
            document.getElementById("detailContent").style.marginLeft = "3px";
            document.getElementById("sliderHeader").style.textAlign = "center";
    } else if ( userAgent.indexOf("Safari") > -1 ) {
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
function typeEnum(currentType, selectedEnum) {

  if (selectedEnum == 0) {
    switch (currentType) {
      case "Soziale Bewegung":
          return 0
        break;

      case "Produktionsgüterindustrie":
          return 1
        break;

      case "Investitionsgüterindustrie":
          return 2
        break;

      case "Verbrauchsgüterindustrie":
          return 3
        break;

      case "Genußmittelindustrie":
          return 4
        break;

      case "Kommunikationsindustrie":
          return 5
        break;
      }
  } else {

    switch (currentType) {
      case "Soziale Bewegung":
          return "../typeIcons/0_marker.png"
        break;

      case "Produktionsgüterindustrie":
          return "../typeIcons/1_marker.png"
        break;

      case "Investitionsgüterindustrie":
          return "../typeIcons/2_marker.png"
        break;

      case "Verbrauchsgüterindustrie":
          return "../typeIcons/3_marker.png"
        break;

      case "Genußmittelindustrie":
          return "../typeIcons/4_marker.png"
        break;

      case "Kommunikationsindustrie":
          return "../typeIcons/5_marker.png"
        break;
      }
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
      icon: typeEnum(currentEreignis.getType(), 1),
    });
  };

  // auf Karte angeklickt
  InitializeI();
  for (var i = 0; i < MarkerArray.length; i++) {
    (function(index) {
      MarkerArray[index].addListener('click', function() {
        showInfo(index);
      });
    })(i);
  };

  // in Liste angeklickt
  jQuery(document).on('click','.listItem', function() {
    showInfo(jQuery(this).attr('rel'));
  });

};

// Info-Array
function InitializeI() {

  for (var i = 0; i < EreignisArray.length; i++) {
    InfoArray[i] = new google.maps.InfoWindow({
      content: EreignisArray[i].getTInfo(),
    })
  };

  jQuery(document).on('click','.detailLink', function() {
    showDetails(jQuery(this).attr('rel'));
  });

};

// Update Marker
function UpdateM() {

  jQuery("#EListe").empty();

  for (var i = 0; i < EreignisArray.length; i++) {

    if (showType[typeEnum(EreignisArray[i].getType(), 0)]) {
    // Ereignis-Typ wird angezeigt (Legende)
      if (EreignisArray[i].getTime() >= sY1 && EreignisArray[i].getTime() <= sY2) {
        // Ereignis in Zeitspanne
        MarkerArray[i].setMap(map);
        jQuery( "#EListe" ).append(EreignisArray[i].getTList());
      } else {
        // Ereignis nicht in Zeitspanne
        MarkerArray[i].setMap(null);
      }
    } else {
      // Ereignis-Typ wird nicht angezeigt (Legende)
      MarkerArray[i].setMap(null);
    }
  }

};

// Ereignisinfo anzeigen
var lastX = 0;
function showInfo(x) {

  InfoArray[lastX].close();
  jQuery( "#spoiler_right_large" ).hide();
  lastX = x;
  InfoArray[x].open(map, MarkerArray[x]);

};

// Ereignisdetails anzeigen
function showDetails(x) {

  jQuery( "#spoiler_right_large" ).show();

  jQuery( "#detailHeader" ).empty();
  jQuery( "#detailPicture" ).attr("src", "");
  jQuery( "#detailPicture" ).attr("srcset", "");
  jQuery( "#detailParagraph" ).empty();

  jQuery( "#detailHeader" ).append(EreignisArray[x].getTime() + " - " + EreignisArray[x].getName());
  jQuery( "#detailParagraph" ).append(EreignisArray[x].getBeschreibung());
  // TODO jQuery( "#detailPicture" ).attr("src", ""); funktioniert nicht

};


////////////////////////////////////////////
// Templates

// Anzeige in Liste
function TemplateList(TID, TName, TStandort, TType) {
  return '<li rel="' + TID.toString() + '" class="' + 'listItem"><p class="' + 'listContent listCName">' + TName + '</p><p class="' + 'listContent listCInfo">' + TStandort + ', ' + TType + '</p></li>'
};

// Anzeige in Infofeld
function TemplateInfo(TID, TName, TStandort, TType, TJahr) {
  return "<span class='infoText'>" + TName + " in " + TStandort + "</span><br>" + TType + " im Jahre " + TJahr + "<br><br>" + "<span rel='" + TID + "' class='detailLink'>Details anzeigen</span>"
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
          $( "#button" ).toggle();
          $( "#Login-Button1" ).toggle();
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
    jQuery('.selectedYear1').append(sY1);
    jQuery('.selectedYear2').append(sY2);
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

  var rightActive = true;

  jQuery('.pop-in_button').on('click', function() {

    if (jQuery(this).attr('rel') == 2) {

      jQuery( "#spoiler_right" ).toggle();
      jQuery( "#spoiler_right_active" ).toggle();

      rightActive = !rightActive;
    }
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

  // Detaillink
  jQuery(document).on('mouseenter','.detailLink', function() {
    jQuery(this).addClass( "highlightedLink" );
  });
  jQuery(document).on('mouseleave','.detailLink', function() {
    jQuery(this).removeClass( "highlightedLink" );
  });

});
