/* =============================================================================
 * NSFW Gallery Template
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

// Warning and controls
const GALLERY_WARNING_AND_CONTROLS = document.getElementById("WarningAndControls");
GALLERY_WARNING_AND_CONTROLS.innerHTML = `<section id="NsfwWarning">
<h2 id="NSFW_Warning">
WARNING!!
</h2>
<p>
This gallery contains art that is <strong><em>NOT suitable for those under 18</em></strong>!!
If you're under that age, then get the fuck out!
No one wants you, and I'm not your babysitter!
By proceeding beyond this point, you are thereby confirming that you're of age and are not lying.
</p>
</section>
<section id="SpoilerSwitches">
<h2 id="Spoiler_Switches">
Spoiler Switches
</h2>
<p>
Toggle the spoilers that you want to have immediately opened up.
<strong><em>Only toggle what you are comfortable with!!</em></strong>
By opening a spoiler, you are implicitly stating that you are comfortable with, and consent to seeing the contents!
</p>
<p>
Master controls <em>(these toggle <strong>ALL</strong> spoilers, so use with care!)</em><br />
<button type="button" id="MasterSwitch" onclick="ToggleAll()">Toggle All</button>
<button type="button" id="MasterReset" onclick="ResetAll()">Reset All</button>
</p>
<p>
Individual spoiler controls<br />
<button type="button" id="NuditySwitch" onclick="ToggleNudity()">Nudity</button>
<button type="button" id="NudityReset" onclick="ResetNudity()">Reset Nudity</button>
</p>
</section>`;

/* >>>>>> END OF FILE <<<<<< */