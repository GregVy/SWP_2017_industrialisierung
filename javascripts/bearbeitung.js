jQuery.noConflict();

////////////////////////////////////////////
// Globale Funktionen

function UpdateEListe() {

  jQuery("#EreignisListe").empty();

  for (var i = 0; i < EreignisArray.length; i++) {
    var currentEreignis = EreignisArray[i];
    console.log(i);
    if (
      (currentEreignis.getStandort() == sStandort || sStandort == "") &&
      (currentEreignis.getTime1() >= sY1) &&
      (currentEreignis.getTime2() <= sY2)
    ) {console.log(i)}
  }
};

// TODO jQuery funktioniert nicht?
for (var i = 0; i < EreignisArray.length; i++) {
  console.log(i);
  jQuery( "#EreignisListe" ).append("<li>" + EreignisArray[i].getName() + "</li>");
};
