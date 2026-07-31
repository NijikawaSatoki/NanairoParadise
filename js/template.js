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
NAV_PANEL.innerHTML = `<a id="GotoHome" href="/index.html">Home</a>
<a id="GotoAbout" href="/about.html">About</a>
<a id="GotoChangelog" href="/changelog.html">Changelog</a>
<a id="GotoArtGallery" href="/gallery.html">Gallery</a>
<a id="GotoLibrary" href="/writings.html">Library</a>
<a id="GotoTenenpedia" class="under-construction" href="/UnderConstruction.html">Ten'en-pedia</a>`;

// Page footer
const FOOTER = document.getElementById("PageFoot");
FOOTER.innerHTML = `<p id="CopyrightInformation">
© 2025, 2026 Niji System<br />
Version 0.5.0.
Source code can be found <a id="LinkToSourceCode" href="https://github.com/NijikawaSatoki/NanairoParadise">here</a>!
</p>`;

/* >>>>>> END OF FILE <<<<<< */