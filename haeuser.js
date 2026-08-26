/* ===================================================================
   MYALPS · HAUSDATEN  —  HIER TRAEGST DU ALLES EIN
   -------------------------------------------------------------------
   SO GEHT'S:
     - Nur den Text ZWISCHEN den Anfuehrungszeichen "..." aendern.
     - Anfuehrungszeichen, Kommas und Klammern bitte stehen lassen.
     - Speichern -> gilt sofort fuer die Seite dieses Hauses.
     - Ein Feld leer lassen = die Zeile erscheint auf der Seite gar nicht.

   ZUM FELD "wlanpasswort":
     Die Seite ist ueber das Internet oeffentlich erreichbar. Wer das
     WLAN-Passwort hier eintraegt, macht es fuer jeden lesbar, der die
     Adresse der Seite kennt - nicht nur fuer den Gast im Haus.
     Empfehlung: nur eintragen, wenn es ein reines GAESTE-WLAN ist,
     das vom eigenen Netz (Router, Drucker, Kameras, PCs) getrennt ist.
     Sonst das Feld leer lassen - dann steht das Passwort nur in der
     persoenlichen E-Mail an den Gast.

   NIEMALS HIER EINTRAGEN:
     - Tuercode        - Schluesselversteck        - Alarmcode

   OPTIONAL: "parken" und "checkin" nur eintragen, wenn es bei diesem
   Haus ANDERS ist als der Standard. Sonst einfach weglassen.
   Standard: "Kostenfreier Stellplatz direkt am Haus" / "15:00 Uhr"
   Beispiel dafuer steht unten bei "pirchhof".
   =================================================================== */

const HAEUSER = {

  /* ---------- MYALPS Oetztal ---------- */
  "oetztal": {
    adresse:      "",
    wlan:         "",
    wlanpasswort: ""
  },

  /* ---------- MYALPS Tirol ---------- */
  "tirol": {
    adresse:      "",
    wlan:         "",
    wlanpasswort: ""
  },

  /* ---------- MYALPS Historical ---------- */
  "historical": {
    adresse:      "",
    wlan:         "",
    wlanpasswort: ""
  },

  /* ---------- MYALPS Muehlhof ---------- */
  "muehlhof": {
    adresse:      "",
    wlan:         "",
    wlanpasswort: ""
  },

  /* ---------- MYALPS Pure ---------- */
  "pure": {
    adresse:      "",
    wlan:         "",
    wlanpasswort: ""
  },

  /* ---------- MYALPS Chalet Cecilia ---------- */
  "cecilia": {
    adresse:      "",
    wlan:         "",
    wlanpasswort: ""
  },

  /* ---------- MYALPS White Pearl ---------- */
  "white-pearl": {
    adresse:      "",
    wlan:         "",
    wlanpasswort: ""
  },

  /* ---------- MYALPS Chalet Pirchhof ---------- */
  "pirchhof": {
    adresse:      "",
    wlan:         "",
    wlanpasswort: ""

    // BEISPIEL fuer eine Abweichung vom Standard:
    // Die  //  am Zeilenanfang entfernen - fertig.
    // ,parken:  { de:"Tiefgarage, Platz Nr. 4",
    //             en:"Underground garage, space no. 4",
    //             pl:"Garaz podziemny, miejsce nr 4" }
    // ,checkin: { de:"16:00 Uhr", en:"4:00 PM", pl:"16:00" }
  },

  /* ---------- MYALPS Jordans Lodge ---------- */
  "jordans-lodge": {
    adresse:      "",
    wlan:         "",
    wlanpasswort: ""
  },

  /* ---------- MYALPS Himmelreich ---------- */
  "himmelreich": {
    adresse:      "",
    wlan:         "",
    wlanpasswort: ""
  }

};

/* ===================================================================
   AB HIER NICHTS MEHR AENDERN
   =================================================================== */
const MYALPS_TEL = "+43720502525";
