/* =============================================================================
 * Artfight Gallery Scripts
 * =============================================================================
 * 
 * Author: Vihreääketty (Niji System)
 * 
 */

// Artfight 2025

function Artfight2025Defenses() {
    details = document.getElementById("accordion_Artfight2025_Defenses");
    summary = document.getElementById("Artfight2025_Defenses");
    details.addEventListener("toggle", function() {
        if(details.open) {
            summary.textContent = "Hide Defenses"
        } else {
            summary.textContent = "Show Defenses"
        }
    })
    return 0;
}

function Artfight2025Attacks() {
    details = document.getElementById("accordion_Artfight2025_Attacks");
    summary = document.getElementById("Artfight2025_Attacks");
    details.addEventListener("toggle", function() {
        if(details.open) {
            summary.textContent = "Hide Attacks"
        } else {
            summary.textContent = "Show Attacks"
        }
    })
}