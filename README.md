# MYALPS Check-in-Seiten

Statische Willkommens-/Check-in-Seiten für die Apartmenthäuser.
Gäste scannen den QR-Code am Haus und landen auf der Seite ihres Hauses.
Dort steht: "Deine Zugangsdaten stehen in deiner E-Mail" plus ein paar
Infos (Adresse, Parken, Check-in-Zeit, WLAN) und ein Anruf-Button mit der
allgemeinen MYALPS-Nummer. Gäste werden geduzt (DE und PL).

---

## WO TRAGE ICH DIE HAUSDATEN EIN?

**In der Datei `haeuser.js` – und nur dort.**

Dort steht für jedes der 9 Häuser ein kleiner Block:

```
  /* ---------- MYALPS Tirol ---------- */
  "tirol": {
    adresse:      "",
    wlan:         "",
    wlanpasswort: ""
  },
```

Text zwischen die Anführungszeichen schreiben, speichern – fertig:

```
  "tirol": {
    adresse:      "Beispielstraße 12, 6414 Beispielort",
    wlan:         "MYALPS-Gast",
    wlanpasswort: "Bergblick2026"
  },
```

Regeln:
* Nur den Text **zwischen** den `"` ändern. Kommas und Klammern stehen lassen.
* Ein Feld leer lassen = die Zeile wird auf der Seite gar nicht angezeigt.
* **Niemals** Türcode, Schlüsselversteck oder Alarmcode eintragen.
  Der QR-Code ist öffentlich – diese Daten gehören nur in die E-Mail an den Gast.
* `wlanpasswort` ist **freiwillig**. WLAN funktioniert nur in Reichweite, das
  Risiko beschränkt sich also auf Leute in der Nähe. Trotzdem: nur eintragen,
  wenn das Gäste-WLAN vom eigenen Netz (Router, Drucker, Kameras, Büro-PCs)
  getrennt ist. Leer lassen = die Zeile erscheint nicht auf der Seite.

Parken und Check-in-Zeit stehen standardmäßig auf
"Kostenfreier Stellplatz direkt am Haus" und "Check-in ab 15:00 Uhr".
Nur wenn ein Haus davon abweicht, wird das in `haeuser.js` beim jeweiligen
Haus eingetragen – ein fertiges Beispiel dafür steht dort bei "pirchhof".

### Zwei Wege zum Bearbeiten
1. **Am PC**: Datei `C:\Claude\myalps-checkin\haeuser.js` öffnen, ändern,
   speichern. Danach müssen die Änderungen noch hochgeladen werden.
2. **Im Browser auf GitHub** (empfohlen für spätere Korrekturen):
   Repo öffnen → `haeuser.js` anklicken → Stift-Symbol → ändern →
   "Commit changes". Nach ca. 1 Minute ist es live. QR-Codes bleiben gültig.

---

## Häuser & Adressen der Seiten

| Haus              | Ordner / Slug | Seite endet auf  |
|-------------------|---------------|------------------|
| MYALPS Ötztal     | oetztal       | `/oetztal/`      |
| MYALPS Tirol      | tirol         | `/tirol/`        |
| MYALPS Historical | historical    | `/historical/`   |
| MYALPS Mühlhof    | muehlhof      | `/muehlhof/`     |
| MYALPS Pure       | pure          | `/pure/`         |
| Chalet Cecilia    | cecilia       | `/cecilia/`      |
| White Pearl       | white-pearl   | `/white-pearl/`  |
| Chalet Pirchhof   | pirchhof      | `/pirchhof/`     |
| Jordans Lodge     | jordans-lodge | `/jordans-lodge/`|
| MYALPS Himmelreich| himmelreich   | `/himmelreich/`  |

`index.html` im Hauptordner ist eine neutrale Startseite
("Bitte QR-Code am Haus scannen").

---

## Leitplanken
* **Keine sensiblen Daten auf den Seiten** – keine Türcodes, keine
  Schlüsselverstecke, keine Alarmcodes. WLAN-Passwort ist freiwillig
  (siehe oben) und steht je Haus in `haeuser.js`.
* **Keine Verbindung zu myalps.at** – kein Custom-Domain, kein DNS.
* **Railway / Cleaning App nicht anfassen** – das ist ein anderes Projekt.
* Telefonnummer: allgemeine MYALPS-Nummer +43 720 502525 (steht ganz unten
  in `haeuser.js`, gilt für alle Seiten).

## Technisches (nur zur Info)
Jede Haus-Seite ist dreisprachig (DE/EN/PL, Umschalter oben rechts, erkennt
die Browsersprache) und mobil-optimiert. Die Texte liegen im `content`-Objekt
im `<script>` am Ende jeder Datei. Adresse, WLAN-Name und optionale
Abweichungen kommen aus `haeuser.js`. Alle 10 Seiten sind bis auf Hausname
und Slug identisch – eine neue Seite entsteht durch Kopieren eines Ordners.
