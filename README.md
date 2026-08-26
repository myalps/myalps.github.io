# MYALPS Check-in-Seiten

Statische Willkommens-/Check-in-Seiten für unsere Apartmenthäuser. Gäste
scannen einen QR-Code am Haus und landen auf der Seite ihres Hauses. Die Seite
verweist auf die persönliche E-Mail (dort stehen die echten Zugangsdaten) und
zeigt ein paar unkritische Infos.

---

## Aufgabe für Claude Code

Alles ist bereits vorbereitet. Zu tun ist nur noch:

1. **Dieses Verzeichnis als neues GitHub-Repo anlegen** (eigenes Repo, z.B.
   `myalps-checkin` — NICHT in das Repo der Cleaning App legen) und pushen.

2. **GitHub Pages aktivieren** (Deploy from branch, `main`, root).
   → Ergebnis: `https://<konto>.github.io/myalps-checkin/`
   Die Haus-Seiten sind dann erreichbar unter
   `.../myalps-checkin/pirchhof/`, `.../oetztal/` usw.

3. **Echte Hausdaten einsetzen.** In jeder `\<slug\>/index.html` sind noch
   Platzhalter, erkennbar an spitzen Klammern `⟨…⟩` und am href `tel:+43XXXXXXXXXX`:
   - `⟨Adresse eintragen⟩`
   - `⟨WLAN-Name eintragen⟩` (nur der NAME, niemals das Passwort)
   - Telefonnummer im `tel:`-Link (ohne Leerzeichen)
   Außerdem in den Texten prüfen: Parken, Check-in-Zeit (stehen im
   `content`-Objekt unten in jeder Datei, Standardwerte gesetzt).
   → **Diese Werte bei Gregor abfragen, nichts erfinden.**

4. **QR-Codes erzeugen.** Für jede der 9 fertigen Seiten-URLs einen QR-Code als
   PNG (Web) und SVG (Druck). Die Codes zeigen DIREKT auf die jeweilige
   github.io-URL — keine externen Weiterleitungsdienste.

## Wichtige Leitplanken
- **Keine sensiblen Daten auf den Seiten**: keine Türcodes, keine
  Schlüsselverstecke, keine WLAN-Passwörter. Der QR-Code ist öffentlich.
- **Keine Verbindung zu myalps.at** — kein Custom-Domain, kein DNS. Die
  github.io-Adresse genügt.
- **Railway / Cleaning App nicht anfassen.**
- Änderungen am Seiteninhalt gehen später per Git-Push (oder direkt über den
  Datei-Editor in GitHub) automatisch live. Die QR-Codes bleiben gültig,
  solange die URLs gleich bleiben.

## Struktur
```
index.html            → neutrale Startseite ("Bitte QR am Haus scannen")
oetztal/index.html
tirol/index.html
historical/index.html
muehlhof/index.html
pure/index.html
cecilia/index.html
white-pearl/index.html
pirchhof/index.html
jordans-lodge/index.html
```

## Häuser & Slugs
| Haus              | Slug          |
|-------------------|---------------|
| MYALPS Ötztal     | oetztal       |
| MYALPS Tirol      | tirol         |
| MYALPS Historical | historical    |
| Mühlhof           | muehlhof      |
| Pure              | pure          |
| Chalet Cecilia    | cecilia       |
| White Pearl       | white-pearl   |
| Chalet Pirchhof   | pirchhof      |
| Jordans Lodge     | jordans-lodge |

## Seitenaufbau (zur Info)
Jede Haus-Seite ist dreisprachig (DE/EN/PL, Umschalter oben rechts, erkennt die
Browsersprache), mobil-optimiert. Texte liegen im `content`-Objekt im `<script>`
am Ende jeder Datei. Layout und Struktur sind fertig und müssen nicht geändert
werden.
