# Archiv — Anleitung

Statische Website ohne Baukasten, ohne Datenbank. Alles läuft über eine
einzige Datei (`data.js`), die die Website automatisch ausliest.

---

## 1. Repository auf GitHub anlegen

1. Auf github.com einloggen (Konto erstellen, falls noch keins vorhanden).
2. Oben rechts auf **+ → New repository**.
3. Name z. B. `archiv` (Kleinbuchstaben, ohne Umlaute/Leerzeichen).
4. **Public** wählen (bei privatem Repo funktioniert GitHub Pages nur mit
   kostenpflichtigem Plan).
5. **Create repository**.

## 2. Dateien hochladen

Auf der leeren Repo-Seite: **uploading an existing file** anklicken (Link
mitten im Text) — oder oben **Add file → Upload files**.

Zieh **alle Dateien aus diesem Ordner** hinein (inkl. des `images`-Ordners
mit dem Beispielprojekt):

- `index.html`
- `project.html`
- `style.css`
- `data.js`
- `images/beispiel-projekt/...` (4 Platzhalterbilder)

Unten bei "Commit changes" auf **Commit changes** klicken.

> Hinweis: Leere Ordner lassen sich über die Web-Oberfläche nicht anlegen —
> ein Ordner entsteht automatisch, sobald du eine Datei mit Pfad
> `images/dein-projekt/foto.jpg` hochlädst.

## 3. GitHub Pages aktivieren

1. Im Repository oben auf **Settings**.
2. Links im Menü auf **Pages**.
3. Unter "Build and deployment" → **Branch**: `main` auswählen, Ordner `/ (root)`, **Save**.
4. Nach ca. 1 Minute erscheint oben eine grüne Box mit deiner Adresse,
   z. B. `https://dein-username.github.io/archiv/`.

Fertig — die Seite ist live. Mit dem Platzhalter-Beispielprojekt kannst du
gleich testen, ob alles funktioniert.

---

## 4. Ein neues Projekt/eine neue Ausstellung hinzufügen

Immer zwei Schritte: **Bilder hochladen** + **Eintrag in `data.js`**.

### a) Bilder hochladen

Im Repo: **Add file → Upload files**. Bilder eines Projekts am besten
vorher in einen eigenen Ordner packen, z. B. `ueberwucherung-2026/`, und
den ganzen Ordner reinziehen — GitHub übernimmt die Ordnerstruktur
automatisch als `images/ueberwucherung-2026/...`.

Tipp: Dateigrösse pro Bild möglichst unter 1–2 MB halten (Ladezeit).
Web-Werkzeuge wie squoosh.app komprimieren Fotos kostenlos, ohne
sichtbaren Qualitätsverlust.

### b) Eintrag in `data.js`

Datei `data.js` im Repo anklicken → Stift-Symbol (Bearbeiten) oben rechts.
Ein neues Objekt nach dem Muster des Beispielprojekts einfügen:

```js
{
  id: "ueberwucherung-2026",
  title: "Überwucherung",
  year: "2026",
  place: "Basel",
  medium: "Collage, gepresste Pflanzen, Papier",
  description: "Kurzer Text zum Projekt.",
  cover: "images/ueberwucherung-2026/cover.jpg",
  images: [
    "images/ueberwucherung-2026/01.jpg",
    "images/ueberwucherung-2026/02.jpg"
  ],
  videos: []
},
```

Wichtig: Zwischen den einzelnen `{ ... }`-Objekten im Array muss ein Komma
stehen. Unten auf **Commit changes**. Nach ~30 Sekunden ist die Seite
aktualisiert.

### Video einbetten

YouTube-Link kopieren, z. B. `https://youtu.be/dQw4w9WgXcQ` → nur der Teil
nach dem letzten `/` ist die ID: `dQw4w9WgXcQ`.

```js
videos: [
  { id: "dQw4w9WgXcQ", platform: "youtube" }
]
```

Bei Vimeo (`https://vimeo.com/76979871`) entsprechend:

```js
videos: [
  { id: "76979871", platform: "vimeo" }
]
```

Videos können auf "nicht gelistet"/"privat mit Link" gestellt werden,
wenn sie nicht öffentlich in der YouTube/Vimeo-Suche auftauchen sollen —
eingebettet auf deiner Seite funktionieren sie trotzdem.

---

## 5. Alternative: GitHub Desktop statt Browser

Sobald dir das Hochladen im Browser zu umständlich wird (viele Bilder auf
einmal), lohnt sich **GitHub Desktop** (kostenlose App, kein Terminal):

1. desktop.github.com → installieren, mit GitHub-Konto anmelden.
2. Repository klonen (Datei → Repository klonen → `archiv` auswählen).
3. Es entsteht ein normaler Ordner auf deinem Rechner. Bilder per
   Drag & Drop reinlegen, `data.js` mit einem normalen Texteditor
   bearbeiten (z. B. dem in Windows/Mac vorinstallierten, oder VS Code).
4. Zurück in GitHub Desktop: Änderungen erscheinen automatisch links,
   unten einen kurzen Commit-Titel eintippen (z. B. "Überwucherung
   hinzugefügt"), auf **Commit to main**, dann oben auf **Push origin**.

Die Struktur bleibt exakt gleich — du kannst jederzeit zwischen
Browser-Workflow und Desktop-App wechseln.

---

## 6. Eigene Domain einrichten — www.manuelschneider.ch (cyon)

Ziel: Die Seite soll unter `https://www.manuelschneider.ch` erreichbar
sein. Domain liegt bei **cyon**.

### a) DNS-Einträge bei cyon anlegen

Bei my.cyon einloggen → Produktwechsler → Domain auswählen → Menü
**Webhosting** oder **Domain** → **DNS-Editor**.

**CNAME für www** (DNS-Record hinzufügen):
- Typ: `CNAME`
- Name: `www`
- Wert: `dein-github-username.github.io.` (Punkt am Ende nicht vergessen)

**Vier A-Records für die nackte Domain** (`manuelschneider.ch` ohne www),
damit GitHub automatisch auf `www` weiterleiten kann. Falls bereits ein
**Haupt-A-Record** existiert, diesen bearbeiten statt neu anlegen (sonst
Konflikt):
- Typ: `A`, Name: `@` bzw. die Domain selbst
- Werte, vier separate Einträge:
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

**Falls E-Mail-Konten bei cyon über diese Domain laufen:** Nach der
Anpassung des Haupt-A-Records unbedingt die MX-Records prüfen (siehe
cyon-Artikel "MX-Record korrigieren nach Haupt-A-Record-Anpassung"),
sonst kann der E-Mail-Empfang gestört werden.

Ein bearbeiteter Eintrag bleibt bis Ablauf der TTL zwischengespeichert
(meist einige Stunden).

### b) Custom Domain bei GitHub eintragen

Im Repo: **Settings → Pages → Custom domain** → `www.manuelschneider.ch`
eintragen, speichern. Warten, bis GitHub die DNS-Prüfung mit einem grünen
Haken bestätigt (kann wegen TTL etwas dauern). Danach **Enforce HTTPS**
aktivieren, damit die Seite über `https://` läuft.

GitHub legt dabei automatisch eine `CNAME`-Datei im Repo an, die
`www.manuelschneider.ch` enthält — diese nicht löschen, sonst geht die
Domain-Bindung verloren.

### c) Testen

- `https://www.manuelschneider.ch` aufrufen → sollte die Seite zeigen
- `manuelschneider.ch` (ohne www) aufrufen → sollte automatisch auf
  `www.manuelschneider.ch` weiterleiten
