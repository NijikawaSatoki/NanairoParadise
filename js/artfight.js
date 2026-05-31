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
    });
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
    });
    return 0;
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
    return 0;
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
    return 0;
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
    return 0;
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
    return 0;
}

// Switch functions for "人間の姿であるコズミックのスプライト（Human Cosmic Sprite）"

function HumanCosmicFullImageSwitch() {
    // Store the variant images into variables
    imgFullImage = document.getElementById("HumanCosmicSpriteFullImage");
    imgBackgroundOnly = document.getElementById("HumanCosmicSpriteBackgroundOnly");
    // Toggle the images
    imgFullImage.style.display = "block";
    imgBackgroundOnly.style.display = "none";
    return 0;
}

function HumanCosmicBackgroundOnlySwitch() {
    // Store the variant images into variables
    imgFullImage = document.getElementById("HumanCosmicSpriteFullImage");
    imgBackgroundOnly = document.getElementById("HumanCosmicSpriteBackgroundOnly");
    // Toggle the images
    imgFullImage.style.display = "none";
    imgBackgroundOnly.style.display = "block";
    return 0;
}

// Switch functions for "Lotus Sprite"

function LotusSpriteArtfightSwitch() {
    // Store the variant images into variables
    imgArtfightSafe = document.getElementById("LotusSpriteArtfightVersion");
    imgFullRisque = document.getElementById("LotusSpriteFullVersion");
    // Toggle the images
    imgArtfightSafe.style.display = "block";
    imgFullRisque.style.display = "none";
    return 0;
}

function LotusSpriteFullSwitch() {
    // Store the variant images into variables
    imgArtfightSafe = document.getElementById("LotusSpriteArtfightVersion");
    imgFullRisque = document.getElementById("LotusSpriteFullVersion");
    // Toggle the images
    imgArtfightSafe.style.display = "none";
    imgFullRisque.style.display = "block";
    return 0;
}

// Switch functions for "Cabbage Sprite"

function CabbageSpriteSwitch() {
    // Store the variant images into variables
    imgNormal = document.getElementById("CabbageSpriteNormal");
    imgAromantic = document.getElementById("CabbageSpriteAromantic");
    imgGay = document.getElementById("CabbageSpriteGay");
    imgTransgender = document.getElementById("CabbageSpriteTransgender");
    // Toggle the images
    imgNormal.style.display = "block";
    imgAromantic.style.display = "none";
    imgGay.style.display = "none";
    imgTransgender.style.display = "none";
    return 0;
}

function CabbageSpriteAromanticSwitch() {
    // Store the variant images into variables
    imgNormal = document.getElementById("CabbageSpriteNormal");
    imgAromantic = document.getElementById("CabbageSpriteAromantic");
    imgGay = document.getElementById("CabbageSpriteGay");
    imgTransgender = document.getElementById("CabbageSpriteTransgender");
    // Toggle the images
    imgNormal.style.display = "none";
    imgAromantic.style.display = "block";
    imgGay.style.display = "none";
    imgTransgender.style.display = "none";
    return 0;
}

function CabbageSpriteGaySwitch() {
    // Store the variant images into variables
    imgNormal = document.getElementById("CabbageSpriteNormal");
    imgAromantic = document.getElementById("CabbageSpriteAromantic");
    imgGay = document.getElementById("CabbageSpriteGay");
    imgTransgender = document.getElementById("CabbageSpriteTransgender");
    // Toggle the images
    imgNormal.style.display = "none";
    imgAromantic.style.display = "none";
    imgGay.style.display = "block";
    imgTransgender.style.display = "none";
    return 0;
}

function CabbageSpriteTransgenderSwitch() {
    // Store the variant images into variables
    imgNormal = document.getElementById("CabbageSpriteNormal");
    imgAromantic = document.getElementById("CabbageSpriteAromantic");
    imgGay = document.getElementById("CabbageSpriteGay");
    imgTransgender = document.getElementById("CabbageSpriteTransgender");
    // Toggle the images
    imgNormal.style.display = "none";
    imgAromantic.style.display = "none";
    imgGay.style.display = "none";
    imgTransgender.style.display = "block";
    return 0;
}

// Artfight 2026

function Artfight2026Defenses() {
    return 0;
}

function Artfight2026Attacks() {
    return 0;
}
