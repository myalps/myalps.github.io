/* ===================================================================
   MYALPS · HAUSDATEN  —  HIER TRAEGST DU ALLES EIN
   -------------------------------------------------------------------
   SO GEHT'S:
     - Nur den Text ZWISCHEN den Anfuehrungszeichen "..." aendern.
     - Anfuehrungszeichen, Kommas und Klammern bitte stehen lassen.
     - Speichern -> gilt sofort fuer die Seite dieses Hauses.
     - Ein Feld leer lassen = die Zeile erscheint auf der Seite gar nicht.

   DIE FELDER:
     adresse       Anschrift des Hauses
     wlan          Name des WLAN-Netzes (nicht das Passwort)
     wlanpasswort  freiwillig - steht dann oeffentlich auf der Seite
     parken        nur wenn abweichend vom Standard, in DE/EN/PL
     checkin       nur wenn abweichend vom Standard, in DE/EN/PL
     hinweis       "Gut zu wissen" - freier Text in DE/EN/PL

   STANDARD (wenn "parken" bzw. "checkin" fehlt):
     Parken   -> "Kostenfreier Stellplatz direkt am Haus"
     Check-in -> "16:00 Uhr"

   NIEMALS HIER EINTRAGEN:
     - Tuercode        - Schluesselversteck        - Alarmcode
   =================================================================== */

const HAEUSER = {

  /* ---------- MYALPS Oetztal ---------- */
  "oetztal": {
    adresse:      "Neudorf 30, 6441 Umhausen",
    wlan:         "MYALPS",
    wlanpasswort: "myalpsguest",
    parken: {
      de: "In der Tiefgarage oder im Carport.",
      en: "In the underground garage or in the carport.",
      pl: "W garażu podziemnym lub pod wiatą."
    }
  },

  /* ---------- MYALPS Tirol ---------- */
  "tirol": {
    adresse:      "Hauptstraße 48, 6433 Oetz",
    wlan:         "MYALPS",
    wlanpasswort: "myalpsguest",
    parken: {
      de: "In der Tiefgarage oder überall dort, wo gepflastert ist.",
      en: "In the underground garage or anywhere on the paved areas.",
      pl: "W garażu podziemnym lub wszędzie tam, gdzie jest kostka brukowa."
    }
  },

  /* ---------- MYALPS Historical ---------- */
  "historical": {
    adresse:      "Kirchweg 3, 6433 Oetz",
    wlan:         "MYALPS Historical",
    wlanpasswort: "historical#1",
    parken: {
      de: "In der Tiefgarage oder an der Seite des Hauses in den markierten Bereichen.",
      en: "In the underground garage or beside the house in the marked areas.",
      pl: "W garażu podziemnym lub z boku domu w oznaczonych miejscach."
    }
  },

  /* ---------- MYALPS Muehlhof ---------- */
  "muehlhof": {
    adresse:      "Habichen 77, 6433 Habichen",
    wlan:         "Mühlhof",
    wlanpasswort: "tirol2016",
    parken: {
      de: "Die Parkplätze sind nach Apartmentnamen zugeteilt. Sollte jemand auf deinem Platz stehen, stell dich bitte vorerst gegenüber der Haustüre auf den Schotterparkplatz und melde dich bei uns – wir kümmern uns darum.",
      en: "Parking spaces are assigned by apartment name. If someone is in your space, please park on the gravel lot opposite the front door for now and let us know — we'll sort it out.",
      pl: "Miejsca parkingowe są przypisane do nazw apartamentów. Jeśli ktoś zajmuje Twoje miejsce, zaparkuj na razie na żwirowym parkingu naprzeciwko drzwi wejściowych i daj nam znać — zajmiemy się tym."
    }
  },

  /* ---------- MYALPS Pure ---------- */
  "pure": {
    adresse:      "Achrainweg 4, 6433 Oetz",
    wlan:         "MYALPS Pure",
    wlanpasswort: "myalpsguest",
    parken: {
      de: "Du kannst auch vor den zwei Garagentoren parken – am besten so, dass der hinterste Wagen wieder herauskommt.",
      en: "You may also park in front of the two garage doors — ideally so that the car at the back can still get out.",
      pl: "Możesz też zaparkować przed dwiema bramami garażowymi — najlepiej tak, aby samochód stojący z tyłu mógł wyjechać."
    }
  },

  /* ---------- MYALPS Chalet Cecilia ---------- */
  "cecilia": {
    adresse:      "Piccardweg 10, 6456 Obergurgl",
    wlan:         "TheChaletGuestNetwork",
    wlanpasswort: "chaletguest",
    parken: {
      de: "Gäste TheMainChalet: Auf der linken Seite können drei Autos hintereinander parken. Wenn nötig, auch gegenüber der Haustüre schräg einparken. Achtung: Der Schneepflug muss noch vorbeikommen. — Gäste ThePenthouseChalet: Gegenüber der Haupteingangstüre schräg einparken, sodass der Schneepflug vorbeifahren kann.",
      en: "Guests of TheMainChalet: three cars can park one behind the other on the left-hand side. If needed, park at an angle opposite the front door as well. Please note: the snow plough still needs to get past. — Guests of ThePenthouseChalet: park at an angle opposite the main entrance so the snow plough can pass.",
      pl: "Goście TheMainChalet: po lewej stronie mogą zaparkować trzy samochody jeden za drugim. W razie potrzeby zaparkuj też ukośnie naprzeciwko drzwi wejściowych. Uwaga: pług śnieżny musi mieć przejazd. — Goście ThePenthouseChalet: zaparkuj ukośnie naprzeciwko wejścia głównego, tak aby pług śnieżny mógł przejechać."
    }
  },

  /* ---------- MYALPS White Pearl ---------- */
  "white-pearl": {
    adresse:      "Waldelestraße 18, 6450 Sölden",
    wlan:         "Chalet White Pearl",
    wlanpasswort: "wpguest",
    parken: {
      de: "Die E-Ladestation kannst du über den Schalter im Ski- und Bike-Raum einschalten – die Nutzung ist kostenlos.",
      en: "You can switch on the EV charging station using the switch in the ski and bike room — it is free of charge.",
      pl: "Stację ładowania samochodów elektrycznych włączysz przełącznikiem w pomieszczeniu na narty i rowery — korzystanie jest bezpłatne."
    }
  },

  /* ---------- MYALPS Chalet Pirchhof ---------- */
  "pirchhof": {
    adresse:      "Pirchhof 50, 6432 Sautens",
    wlan:         "Pirchhof",
    wlanpasswort: "Pirchhof#2024",
    parken: {
      de: "E-Ladestation in der Garage – nutzbar mit deiner eigenen Ladekarte.",
      en: "EV charging station in the garage — usable with your own charging card.",
      pl: "Stacja ładowania w garażu — do użycia z własną kartą ładowania."
    }
  },

  /* ---------- MYALPS Jordans Lodge ---------- */
  "jordans-lodge": {
    adresse:      "Lehn 126, 6444 Längenfeld",
    wlan:         "jordansLodge126",
    wlanpasswort: "gast2022",
    parken: {
      de: "Bitte in den markierten Feldern parken.",
      en: "Please park in the marked bays.",
      pl: "Parkuj w oznaczonych miejscach."
    },
    hinweis: {
      de: "Den Code für den Ski- und Bike-Raum findest du im Eingangsbereich des Hauses.",
      en: "You'll find the code for the ski and bike room in the entrance area of the house.",
      pl: "Kod do pomieszczenia na narty i rowery znajdziesz w przedsionku domu."
    }
  },

  /* ---------- MYALPS Himmelreich ---------- */
  "himmelreich": {
    adresse:      "Burgstein 402, 6444 Längenfeld",
    wlan:         "",
    wlanpasswort: ""
  }

};

/* ===================================================================
   AB HIER NICHTS MEHR AENDERN
   =================================================================== */
const MYALPS_TEL = "+43720502525";
