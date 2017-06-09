var EreignisArray = new Array;

// Ereignis-Klasse
function Ereignis (ID, name, type, standort, lat, lng, Jahr) {
    // TODO Deklaration vervollständigen, erst möglich nach Absprache mit Geistis
    this.id = ID;
    this.name = name;
    this.type = type;
    this.standort = standort;
    this.latC = lat;
    this.lngC = lng;
    this.time = Jahr;

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

    this.getTList = function() {
      return TemplateList(this.id, this.name, this.standort, this.type);
    };

    this.getTDetail = function() {
      return TemplateDetails(this.id, this.name);
    };
};

// Ereignis-Array
function InitializeE() {
  EreignisArray.push(new Ereignis(0, "Bsp0", "Soziale Bewegung", "Erfurt", 50.930, 11.240, 1880));
  EreignisArray.push(new Ereignis(1, "Bsp1", "Produktionsgüterindustrie", "Erfurt", 50.830, 11.840, 1850));
  EreignisArray.push(new Ereignis(2, "Bsp2", "Investitionsgüterindustrie", "Eisenach", 51.330, 10.840, 1890));
  EreignisArray.push(new Ereignis(3, "Bsp3", "Verbrauchsgüterindustrie", "Gotha", 50.730, 10.840, 1870));
  EreignisArray.push(new Ereignis(4, "Bsp4", "Genußmittelindustrie", "Jena", 50.784, 11.240, 1843));
  EreignisArray.push(new Ereignis(5, "Bsp5", "Kommunikationsindustrie", "Erfurt", 50.999, 11.840, 1820));
};
