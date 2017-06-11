var EreignisArray = new Array;
var imageDirectory = "../images/"

// Ereignis-Klasse
function Ereignis (ID, name, type, standort, lat, lng, jahr, beschreibung, image) {
    this.id = ID;
    this.name = name;
    this.type = type;
    this.standort = standort;
    this.latC = lat;
    this.lngC = lng;
    this.time = jahr;
    this.beschreibung = beschreibung;
    this.image = image;

    this.getID = function() {
      return this.id;
    };

    this.getName = function() {
      return this.name;
    };

    this.getType = function() {
      return this.type;
    };

    this.getStandort = function() {
      return this.standort;
    };

    this.getLatC = function() {
      return this.latC;
    };

    this.getLngC = function() {
      return this.lngC;
    };

    this.getTime = function() {
      return this.time;
    };

    this.getBeschreibung = function() {
      return this.beschreibung;
    };

    this.getImage = function() {
      return imageDirectory + this.image;
    };

    this.getTList = function() {
      return TemplateList(this.id, this.name, this.standort, this.type);
    };

    this.getTInfo = function() {
      return TemplateInfo(this.id, this.name, this.standort, this.type, this.time);
    };

};

// Ereignis-Array
function InitializeE() {
  EreignisArray.push(new Ereignis(0, "Bsp0", "Soziale Bewegung", "Erfurt", 50.930, 11.240, 1880, "Ich bin ein Beschreibungstext", "Platzhalter.png"));
  EreignisArray.push(new Ereignis(1, "Bsp1", "Produktionsgüterindustrie", "Erfurt", 50.830, 11.840, 1850, "Ich bin ein Beschreibungstext", "Platzhalter.png"));
  EreignisArray.push(new Ereignis(2, "Bsp2", "Investitionsgüterindustrie", "Eisenach", 51.330, 10.840, 1890, "Ich bin ein Beschreibungstext", "Platzhalter.png"));
  EreignisArray.push(new Ereignis(3, "Bsp3", "Verbrauchsgüterindustrie", "Gotha", 50.730, 10.840, 1870, "Ich bin ein Beschreibungstext", "Platzhalter.png"));
  EreignisArray.push(new Ereignis(4, "Bsp4", "Genußmittelindustrie", "Jena", 50.784, 11.240, 1843, "Ich bin ein Beschreibungstext", "Platzhalter.png"));
  EreignisArray.push(new Ereignis(5, "Bsp5", "Kommunikationswesen", "Erfurt", 50.999, 11.840, 1820, "Ich bin ein Beschreibungstext", "Platzhalter.png"));
 };
