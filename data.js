/*
  SEITENEINSTELLUNGEN UND AUSSTELLUNGSLISTE
  =========================================

  siteConfig
  ----------
  heroImage   – Bild, das rechts auf der Startseite erscheint (fester Pfad)
  contactHtml – dein Kontakt, erscheint unten links. Kann HTML enthalten,
                z.B. einen mailto:-Link oder Instagram-Link.

  exhibitions
  -----------
  Jedes Objekt ist ein Eintrag in der linken Liste, im Format
  "Titel" at Ort. Beim Anklicken öffnet sich darunter die Dokumentation.

  id           – eindeutiger Kurzname, nur Kleinbuchstaben/Bindestriche
  title        – Titel der Ausstellung
  venue        – Ausstellungsort (erscheint nach "at")
  year         – Jahr, optional, erscheint neben dem Ort
  description  – Begleittext (optional, leer lassen mit "")
  images       – Liste der Bildpfade in images/<id>/...
  videos       – Liste von { id, platform } — platform: "youtube" oder "vimeo"

  Reihenfolge im Array = Reihenfolge in der Liste (neuste zuerst empfohlen).
*/

const siteConfig = {
  heroImage: "images/hero.jpg",
  contactHtml: '<a href="mailto:mail@manuelschneider.ch">mail@manuelschneider.ch</a>'
};

const exhibitions = [
  {
    id: "beispiel-projekt",
    title: "Beispielprojekt — ersetze mich",
    venue: "Kunsthalle Irgendwo",
    year: "2026",
    description:
      "Begleittext zu diesem Projekt. Kann auch leer bleiben, dann erscheint hier nichts.",
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

  // Neuer Eintrag: Komma nach der schliessenden } oben nicht vergessen,
  // dann hier ein neues { ... } Objekt einfügen.
];
