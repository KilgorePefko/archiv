/*
  NAVIGATION UND SEITENEINSTELLUNGEN
  ===================================
  Diese Datei wird von jeder Seite eingebunden und baut die linke
  Sidebar automatisch auf. Du musst NUR diese eine Datei bearbeiten,
  wenn eine neue Ausstellung dazukommt — nicht jede einzelne HTML-Seite.

  navLinks
  --------
  Jede Zeile ist ein Link in der Sidebar. "title" ist der Text,
  "href" die Zieldatei (siehe vorlage-ausstellung.html zum Duplizieren).
  Mit { spacer: true } fügst du eine Leerzeile ein (z.B. vor "Kontakt",
  falls du dort mal einen eigenen Menüpunkt willst).

  headerImage
  -----------
  Kleines Bild ganz oben in der Sidebar, verlinkt zur Startseite.

  Das grosse Bild auf der Startseite änderst du direkt in index.html
  (dort steht der Bildpfad im <img src="...">).

  contactHtml
  -----------
  Erscheint unten links in der Sidebar, auf jeder Seite. Kann HTML
  enthalten, z.B. einen mailto:-Link.
*/

const navLinks = [
  { title: "Recent Painting", href: "recentpainting.html" }
  // Neue Ausstellung: neue Zeile einfügen, z.B.
  // { title: "Ängstli", href: "aengstli.html" },
  // Komma nach der vorherigen Zeile nicht vergessen.
];

const headerImage = "images/header.jpg";
const contactHtml = '<a href="mailto:mail@manuelschneider.ch">mail@manuelschneider.ch</a>';

/* ---- Rendering, muss normalerweise nicht angepasst werden ---- */
function renderSidebar() {
  const root = document.getElementById("sidebar-root");
  if (!root) return;

  let linksHtml = "";
  navLinks.forEach(link => {
    if (link.spacer) {
      linksHtml += `<span class="empty-line">&nbsp;</span>`;
    } else {
      const current = window.location.pathname.endsWith(link.href) ? ' class="current"' : "";
      linksHtml += `<a href="${link.href}"${current}>${link.title}</a>`;
    }
  });

  root.innerHTML = `
    <div id="sidebar">
      <div class="sidebar-top">
        <a class="header-image" href="index.html">
          <img src="${headerImage}" alt="Manuel Schneider">
        </a>
        <nav>${linksHtml}</nav>
      </div>
      <footer class="contact">${contactHtml}</footer>
    </div>
  `;
}

renderSidebar();
