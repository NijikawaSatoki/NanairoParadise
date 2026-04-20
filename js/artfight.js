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
            summary.textContent = "Hide Defenses";
        } else {
            summary.textContent = "Show Defenses";
        }
    })
    return 0;
}

function Artfight2025Attacks() {
    details = document.getElementById("accordion_Artfight2025_Attacks");
    summary = document.getElementById("Artfight2025_Attacks");
    details.addEventListener("toggle", function() {
        if(details.open) {
            summary.textContent = "Hide Attacks";
        } else {
            summary.textContent = "Show Attacks";
        }
    })
}

// Switch functions for "Auden Sprite"

function AudenSpriteSwitch() {
    // Store the variant images into variables
    imgNormal = document.getElementById("AudenSpriteNormal");
    imgAutism = document.getElementById("AudenSpriteAutism");
    imgPanromantic = document.getElementById("AudenSpritePanromantic");
    imgTransgender = document.getElementById("AudenSpriteTransgender");
    // Toggle the images
    imgNormal.style.display = "block";
    imgAutism.style.display = "none";
    imgPanromantic.style.display = "none";
    imgTransgender.style.display = "none";
}

function AudenSpriteAutismSwitch() {
    // Store the variant images into variables
    imgNormal = document.getElementById("AudenSpriteNormal");
    imgAutism = document.getElementById("AudenSpriteAutism");
    imgPanromantic = document.getElementById("AudenSpritePanromantic");
    imgTransgender = document.getElementById("AudenSpriteTransgender");
    // Toggle the images
    imgNormal.style.display = "none";
    imgAutism.style.display = "block";
    imgPanromantic.style.display = "none";
    imgTransgender.style.display = "none";
}

function AudenSpritePanromanticSwitch() {
    // Store the variant images into variables
    imgNormal = document.getElementById("AudenSpriteNormal");
    imgAutism = document.getElementById("AudenSpriteAutism");
    imgPanromantic = document.getElementById("AudenSpritePanromantic");
    imgTransgender = document.getElementById("AudenSpriteTransgender");
    // Toggle the images
    imgNormal.style.display = "none";
    imgAutism.style.display = "none";
    imgPanromantic.style.display = "block";
    imgTransgender.style.display = "none";
}

function AudenSpriteTransgenderSwitch() {
    // Store the variant images into variables
    imgNormal = document.getElementById("AudenSpriteNormal");
    imgAutism = document.getElementById("AudenSpriteAutism");
    imgPanromantic = document.getElementById("AudenSpritePanromantic");
    imgTransgender = document.getElementById("AudenSpriteTransgender");
    // Toggle the images
    imgNormal.style.display = "none";
    imgAutism.style.display = "none";
    imgPanromantic.style.display = "none";
    imgTransgender.style.display = "block";
}

// Switch functions for "人間の姿であるコズミックのスプライト（Human Cosmic Sprite）"

function HumanCosmicFullImageSwitch() {
    // Store the variant images into variables
    imgFullImage = document.getElementById("HumanCosmicSpriteFullImage");
    imgBackgroundOnly = document.getElementById("HumanCosmicSpriteBackgroundOnly");
    // Toggle the images
    imgFullImage.style.display = "block";
    imgBackgroundOnly.style.display = "none";
}

function HumanCosmicBackgroundOnlySwitch() {
    // Store the variant images into variables
    imgFullImage = document.getElementById("HumanCosmicSpriteFullImage");
    imgBackgroundOnly = document.getElementById("HumanCosmicSpriteBackgroundOnly");
    // Toggle the images
    imgFullImage.style.display = "none";
    imgBackgroundOnly.style.display = "block";
}

// Artfight 2026

function Artfight2026Defenses() {}

function Artfight2026Attacks() {}
