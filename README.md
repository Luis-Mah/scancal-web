# ScanCal — Website

Öffentliche Website zu ScanCal: Produktseiten, Datenschutzerklärung und Impressum.
Getrennt vom App-Repository, damit der Quellcode privat bleiben kann.

Live: https://luis-mah.github.io/scancal-web/

## Was noch eingesetzt werden muss

Alle offenen Stellen sind auf den Seiten **orange umrandet** und im Quelltext als
`<span class="ph">…</span>` markiert. Solange sie leer sind, erfüllt die Seite die
Impressumspflicht nicht.

| Platzhalter | Wo | Anmerkung |
|---|---|---|
| `VOR- UND NACHNAME` | Impressum, Datenschutz, Startseite (Notiz) | |
| `STRASSE HAUSNUMMER`, `PLZ ORT` | Impressum, Datenschutz | Ladungsfähige Anschrift; Postfach genügt nicht |
| `KONTAKT-E-MAIL` | Impressum, Datenschutz, Kontakt | An allen drei Stellen dieselbe |
| `TT.MM.JJJJ` | Datenschutz | Datum der Veröffentlichung |
| `USt-IdNr.` | Impressum | Nur falls erteilt, sonst Abschnitt löschen |
| Verarbeitungsort Mistral | Datenschutz | Vertraglich bestätigen lassen |
| Hosting-Anbieter des Servers | Datenschutz | Nach dem Deployment eintragen |

Alle Platzhalter auf einmal finden:

```bash
grep -rn 'class="ph"' *.html
```

## Änderungen veröffentlichen

Die Seite liegt als reines HTML/CSS im Repo — kein Build, kein Framework, keine
Abhängigkeiten. Änderung committen und pushen genügt; GitHub Pages veröffentlicht
den Stand von `main` automatisch in etwa ein bis zwei Minuten.

```bash
git add -A && git commit -m "Beschreibung der Änderung" && git push
```

Vorher lokal ansehen:

```bash
python3 -m http.server 4321
```

Dann http://127.0.0.1:4321 öffnen.

## Aufbau

```
index.html                   Startseite
funktionen.html              Was die App kann
datenschutz-in-der-app.html  Datenschutz in verständlicher Sprache
faq.html                     Häufige Fragen
kontakt.html                 Kontakt
datenschutz.html             Datenschutzerklärung (rechtlich)
impressum.html               Impressum (§ 5 DDG)
assets/css/style.css         Vollständiges Designsystem
assets/js/site.js            Mobiles Menü, dezentes Einblenden
assets/fonts/                IBM Plex Sans, selbst gehostet (SIL OFL 1.1)
assets/img/                  Logo in drei Größen
```

## Entwurfsentscheidungen

**Farben aus dem App-Icon.** Papierweiß, Tinten-Navy, Scan-Blau, Bestätigt-Türkis.
Daraus ein Bedeutungssystem: **Blau = Vorschlag der App, Türkis = von dir bestätigt.**
Es zieht sich durch Gerätevorschau, Ablaufschritte und Legende.

Alle Farbpaare sind gegen WCAG 2.1 AA gerechnet. Logo-Blau (3,71:1) und Logo-Türkis
(2,07:1) bestehen als Textfarbe **nicht** — dafür gibt es die eigenen `-ink`-Token.
Die Logo-Farben bleiben Flächen und Grafik.

**Schrift selbst gehostet.** Google Fonts über deren CDN würde die IP-Adresse jedes
Besuchers an einen US-Server übermitteln. Für eine Website, die mit Datenschutz wirbt,
wäre das widersprüchlich — und deutsche Seitenbetreiber wurden dafür bereits abgemahnt.
Die Schriftdateien liegen deshalb im Repo.

**Kein Cookie-Banner.** Es gibt keine Cookies, kein Tracking und keine Inhalte von
Dritten. Damit ist keine Einwilligung nach § 25 TDDDG erforderlich — und ein Banner
wäre schlicht überflüssig.

**Keine erfundenen Bewertungen.** Die App ist noch nicht veröffentlicht, deshalb gibt
es keine Sterne, keine Nutzerzahlen und keine Kundenstimmen. Vertrauen entsteht
stattdessen aus überprüfbaren Aussagen darüber, was die App tatsächlich sendet.

**Gerätevorschau als HTML.** Kein Screenshot, sondern echtes Markup: bleibt in jeder
Auflösung scharf, geht im Dunkelmodus mit und ist für Screenreader beschriftet.

## Geprüft

- Kein waagerechtes Scrollen bei 320, 375, 768, 1024 und 1440 px auf allen sieben Seiten
- Alle internen Links und Sprungmarken aufgelöst
- Jede Seite mit `lang`, Viewport, Beschreibung, Canonical und Sprunglink
- Genau eine `h1` je Seite, alle Bilder mit `alt`
- Tastaturbedienung mit sichtbarem Fokus, mobiles Menü mit `aria-expanded`
- `prefers-reduced-motion` und `prefers-color-scheme` berücksichtigt
- Startseite 144 KB inklusive Schriften, keine externen Anfragen, keine Konsolenfehler

## Lizenzen

IBM Plex Sans steht unter der SIL Open Font License 1.1. Logo und Inhalte gehören zum
Projekt ScanCal.
