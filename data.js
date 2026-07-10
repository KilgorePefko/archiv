/*
  DATENLISTE DER AUSSTELLUNGEN / PROJEKTE
  =========================================
  Hier trägst du jedes neue Projekt als eigenes Objekt in das Array ein.
  Die Website liest diese Datei automatisch aus – du musst sonst nichts
  am HTML ändern.

  FELDER:
  id           – eindeutiger Kurzname, nur Kleinbuchstaben/Bindestriche,
                 wird Teil der URL (z.B. "ueberwucherung-2026")
  title        – Titel der Ausstellung/des Projekts
  year         – Jahr (als Text, z.B. "2026")
  place        – Ort (optional, kann leer bleiben: "")
  medium       – Kurzangabe Technik/Material (optional)
  description  – Fliesstext, ein paar Sätze
  cover        – Pfad zum Titelbild (liegt in images/<id>/...)
  images       – Liste aller Bilder dieses Projekts, gleicher Ordner
  videos       – Liste von YouTube-Video-IDs (NICHT die ganze URL!)
                 Beispiel: aus https://youtu.be/dQw4w9WgXcQ nimmst du
                 nur "dQw4w9WgXcQ"
                 Vimeo geht auch, siehe Beispiel unten (vimeo: true)

  Reihenfolge im Array = Reihenfolge auf der Startseite.
*/

const exhibitions = [
  {
    id: "beispiel-projekt",
    title: "Beispielprojekt – ersetze mich",
    year: "2026",
    place: "Basel",
    medium: "Collage, Papier, botanisches Material",
    description:
      "Kurzer Beschreibungstext zu diesem Projekt. Ein bis drei Sätze reichen: worum ging es, welches Material, welcher Anlass.",
    cover: "images/beispiel-projekt/cover.jpg",
    images: [
      "images/beispiel-projekt/01.jpg",
      "images/beispiel-projekt/02.jpg",
      "images/beispiel-projekt/03.jpg"
    ],
    videos: [
      { id: "dQw4w9WgXcQ", platform: "youtube" }
      // Vimeo-Beispiel: { id: "76979871", platform: "vimeo" }
    ]
  }

  // Neues Projekt: Komma nach der schliessenden } oben nicht vergessen,
  // dann hier ein neues { ... } Objekt einfügen.
];
