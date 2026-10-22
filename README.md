# ScanCal — Website

Öffentliche Website zu ScanCal: Produktseiten, Datenschutzerklärung und Impressum.
Getrennt vom App-Repository, damit der Quellcode privat bleiben kann.

Live: https://luis-mah.github.io/scancal-web/

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
datenschutz.html             Datenschutzerklärung (rechtlich), Deutsch und darunter Englisch (#en)
nutzungsbedingungen.html     Nutzungsbedingungen, Deutsch und darunter Englisch (#en)
impressum.html               Impressum (§ 5 DDG)
assets/css/style.css         Vollständiges Designsystem
assets/js/site.js            Mobiles Menü, dezentes Einblenden
assets/fonts/                IBM Plex Sans, selbst gehostet (SIL OFL 1.1)
assets/img/                  Logo in drei Größen
```

## Gestaltungsentscheidungen

**Farben aus dem App-Icon.** Papierweiß, Tinten-Navy, Scan-Blau, Bestätigt-Türkis.
Daraus ein Bedeutungssystem: **Blau = Vorschlag der App, Türkis = von dir bestätigt.**
Es zieht sich durch Gerätevorschau, Ablaufschritte und Legende.

Alle Farbpaare sind gegen WCAG 2.1 AA gerechnet. Logo-Blau (3,71:1) und Logo-Türkis
(2,07:1) bestehen als Textfarbe **nicht** — dafür gibt es die eigenen `-ink`-Token.
Die Logo-Farben bleiben Flächen und Grafik.

**Schrift selbst gehostet.** Google Fonts über deren CDN würde die IP-Adresse jedes
Besuchers an einen US-Server übermitteln. Die Schriftdateien liegen
deshalb im Repo.

**Kein Cookie-Banner.** Es gibt keine Cookies, kein Tracking und keine Inhalte von
Dritten. Damit ist keine Einwilligung nach § 25 TDDDG erforderlich — und ein Banner
wäre schlicht überflüssig.

**Keine erfundenen Bewertungen.** Keine Sterne, Nutzerzahlen oder Kundenstimmen, die
sich nicht belegen lassen. Vertrauen entsteht aus überprüfbaren Aussagen darüber, was
die App tatsächlich sendet.

**Gerätevorschau als HTML.** Kein Screenshot, sondern echtes Markup: bleibt in jeder
Auflösung scharf, geht im Dunkelmodus mit und ist für Screenreader beschriftet.

## Geprüft

- Kein waagerechtes Scrollen bei 320, 375, 768, 1024 und 1440 px auf allen acht Seiten
- Alle internen Links und Sprungmarken aufgelöst
- Jede Seite mit `lang`, Viewport, Beschreibung, Canonical und Sprunglink
- Genau eine `h1` je Seite, alle Bilder mit `alt`
- Tastaturbedienung mit sichtbarem Fokus, mobiles Menü mit `aria-expanded`
- `prefers-reduced-motion` und `prefers-color-scheme` berücksichtigt
- Startseite 144 KB inklusive Schriften, keine externen Anfragen, keine Konsolenfehler

## Lizenzen

IBM Plex Sans steht unter der SIL Open Font License 1.1. Logo und Inhalte gehören zum
Projekt ScanCal.
