var EreignisArray = new Array;

// Ereignis-Klasse
function Ereignis (ID, name, type, standort, lat, lng, JahrV, JahrB) {
    // TODO Deklaration vervollständigen, erst möglich nach Absprache mit Geistis
    this.id = ID;
    this.name = name;
    this.type = type;
    this.standort = standort;
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

    this.getStandort = function() {
      return this.standort;
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

    this.getTList = function() {
      return TemplateList(this.id, this.name, this.standort, this.type);
    };

    this.getTDetail = function() {
      return TemplateDetails(this.id, this.name);
    };
};

// Ereignis-Array
function InitializeE() {

  EreignisArray.push(new Ereignis(0, "Bsp0", "Soziale Bewegung", "Erfurt", 50.930, 11.240, 1880, 1950));
  EreignisArray.push(new Ereignis(1, "Bsp1", "Industrie 1", "Erfurt", 50.830, 11.840, 1850, 1920));
  EreignisArray.push(new Ereignis(2, "Bsp2", "Industrie 3", "Eisenach", 51.330, 10.840, 1890, 1910));
  EreignisArray.push(new Ereignis(3, "Bsp3", "Industrie 2", "Gotha", 50.730, 10.840, 1870, 1990));

  EreignisArray.push(new Ereignis(4, "Bsp4", "Soziale Bewegung", "Jena", 50.784, 11.240, 1843, 1930));
  EreignisArray.push(new Ereignis(5, "Bsp5", "Industrie 1", "Erfurt", 50.999, 11.840, 1820, 1980));
  EreignisArray.push(new Ereignis(6, "Bsp6", "Industrie 3", "Suhl", 51.206, 10.840, 1770, 1980));
  EreignisArray.push(new Ereignis(7, "Bsp7", "Industrie 2", "Nordhausen", 50.666, 10.867, 1790, 1990));

  EreignisArray.push(new Ereignis(8, "Bsp8", "Soziale Bewegung", "Erfurt", 50.930, 11.140, 1840, 1960));
  EreignisArray.push(new Ereignis(9, "Bsp9", "Industrie 1", "Eisenach", 50.830, 11.120, 1710, 1980));
  EreignisArray.push(new Ereignis(10, "Bsp10", "Industrie 3", "Weimar", 51.330, 10.560, 1710, 1910));
  EreignisArray.push(new Ereignis(11, "Bsp11", "Industrie 2", "Erfurt", 50.730, 10.840, 1770, 1990));

};
