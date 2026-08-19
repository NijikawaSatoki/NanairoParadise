/* =============================================================================
 * Page Template Scripts
 * =============================================================================
 * 
 * Author: Niji System
 *             Satoki Nijikawa
 *             Wamo
 *             Kiyoi
 *             Vihreääketty
 *             Hsiao Lyuhsien
 *             Antiainehunt Õudus
 *             Rinith
 *             Q'aemil
 * 
 */

// Navigation panels
const NAV_PANEL = document.getElementById("NavigationPanel");
NAV_PANEL.innerHTML = `<a id="GotoHome" class="nav-panel" href="/index.html">Home</a>
<a id="GotoAbout" class="nav-panel" href="/about.html">About</a>
<a id="GotoChangelog" class="nav-panel" href="/changelog.html">Changelog</a>
<a id="GotoArtGallery" class="nav-panel" href="/gallery.html">Gallery</a>
<a id="GotoLibrary" class="nav-panel" href="/writings.html">Library</a>
<a id="GotoGuestbook" class="nav-panel" href="/guestbook.html">Guestbook!</a>
<a id="GotoTenenpedia" class="nav-panel under-construction" href="/UnderConstruction.html">Ten'en-pedia</a>`;

// Page footer
const FOOTER = document.getElementById("PageFoot");
FOOTER.innerHTML = `<p id="CopyrightInformation">
© 2025, 2026 Niji System<br />
Version 0.6.0.
Source code can be found <a id="LinkToSourceCode" href="https://github.com/NijikawaSatoki/NanairoParadise">here</a>!
</p>`;

/* >>>>>> END OF FILE <<<<<< */