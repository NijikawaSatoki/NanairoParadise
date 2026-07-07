/* =============================================================================
 * Story Reader Scripts
 * =============================================================================
 *
 * Author: Wamo, Vihreääketty, Q'aemil (Niji System)
 *
 */

// Document constants

const STORY_BODY = document.getElementById("StoryBody"); // So that <article> element DOES have a use lol
function StoryBodyStyleChange(font) {
    STORY_BODY.style.fontFamily = font;
    return 0;
}

// Language constants and functions

// ------ International Phonetic Alphabet ------ //
const INTERNATIONAL_PHONETIC_ALPHABET = document.getElementsByClassName("ipa");
function IpaStyleChange(font) {
    for (let i = 0; i < INTERNATIONAL_PHONETIC_ALPHABET.length; i++) {
        INTERNATIONAL_PHONETIC_ALPHABET[i].style.fontFamily = font;
    }
    return 0;
}

// ------ Natural languages ------ //

// ------ Languages from Ten'en Project ------ //

// Bhonmesh
const BHONMESH = document.getElementsByClassName("bhonmesh");
const BHONMESH_ROMANIZATION = document.getElementsByClassName("bhonmesh-romanization");
function BhonmeshStyleChange(font) {
    for (let i = 0; i < BHONMESH.length; i++) {
        BHONMESH[i].style.fontFamily = "'Chandas', 'Sanskrit Text', 'Kurinto Sans', 'Mangal', 'Noto Sans Devanagari', sans-serif";
    }
    for (let i = 0; i < BHONMESH_ROMANIZATION.length; i++) {
        BHONMESH_ROMANIZATION[i].style.fontFamily = font;
    }
    return 0;
}

// Frualbuqash
const FRUALBUQASH = document.getElementsByClassName("frualbuqash");
const FRUALBUQASH_ROMANIZATION = document.getElementsByClassName("frualbuqash-romanization");
function FrualbuqashStyleChange(font) {
    for (let i = 0; i < FRUALBUQASH.length; i++) {
        FRUALBUQASH[i].style.fontFamily = font;
    }
    for (let i = 0; i < FRUALBUQASH_ROMANIZATION.length; i++) {
        FRUALBUQASH_ROMANIZATION[i].style.fontFamily = font;
    }
    return 0;
}

// Ilbåsk
const ILBASK_SPALMEAAKELN = document.getElementsByClassName("ilbask-spalmeaakeln");
const ILBASK_ELESUUKELN = document.getElementsByClassName("ilbask-elesuukeln");
const ILBASK_ELESUUKELN_ROMANIZATION = document.getElementsByClassName("ilbask-elesuukeln-romanization");
function IlbaskStyleChange(font) {
    for (let i = 0; i < ILBASK_SPALMEAAKELN.length; i++) {
        ILBASK_SPALMEAAKELN[i].style.fontFamily = font;
    }
    for (let i = 0; i < ILBASK_ELESUUKELN.length; i++) {
        ILBASK_ELESUUKELN[i].style.fontFamily = "'Menk Hawang Tig', 'Menk Qagan Tig', 'Menk Garqag Tig', 'Menk Har_a Tig', 'Menk Scnin Tig', 'Oyun Gurban Ulus Tig', 'Oyun Qagan Tig', 'Oyun Garqag Tig', 'Oyun Har_a Tig', 'Oyun Scnin Tig', 'Oyun Agula Tig', 'Mongolian Baiti', 'Mongolian Universal White', 'Mongol Usug', 'Mongolian White', 'MongolianScript', 'Code2000', 'Menksoft Qagan', 'Noto Sans Mongolian', serif";
    }
    for (let i = 0; i < ILBASK_ELESUUKELN_ROMANIZATION.length; i++) {
        ILBASK_ELESUUKELN_ROMANIZATION[i].style.fontFamily = font;
    }
    return 0;
}

// Mhuislanean
const MHUISLANEAN = document.getElementsByClassName("mhuislanean");
function MhuislaneanStyleChange(font) {
    for (let i = 0; i < MHUISLANEAN.length; i++) {
        MHUISLANEAN[i].style.fontFamily = font;
    }
    return 0;
}

// Neph
const NEPH = document.getElementsByClassName("neph");
function NephStyleChange(font) {
    for (let i = 0; i < NEPH.length; i++) {
        NEPH[i].style.fontFamily = font;
    }
    return 0;
}

// Zhuzuri
const ZHUZURI = document.getElementsByClassName("zhuzuri");
const ZHUZURI_ZHUR_ALPHABET = document.getElementsByClassName("zhuzuri-zhur-alphabet");
const ZHUZURI_ZUGES_ALPHABET = document.getElementsByClassName("zhuzuri-zuges-alphabet");
const ZHUZURI_REVISED_ALPHABET = document.getElementsByClassName("zhuzuri-revised-proposed-alphabet");
function ZhuzuriStyleChange(font) {
    for (let i = 0; i < ZHUZURI.length; i++) {
        ZHUZURI[i].style.fontFamily = font;
    }
    for (let i = 0; i < ZHUZURI_ZHUR_ALPHABET.length; i++) {
        ZHUZURI_ZHUR_ALPHABET[i].style.fontFamily = font;
    }
    for (let i = 0; i < ZHUZURI_ZUGES_ALPHABET.length; i++) {
        ZHUZURI_ZUGES_ALPHABET[i].style.fontFamily = font;
    }
    for (let i = 0; i < ZHUZURI_REVISED_ALPHABET.length; i++) {
        ZHUZURI_REVISED_ALPHABET[i].style.fontFamily = font;
    }
    return 0;
}

// Meta function for this font change stuff (*pain*)

function LanguageFontChange(chosenFont) {
    // Story body
    StoryBodyStyleChange(chosenFont);
    // International Phonetic Alphabet (IPA)
    IpaStyleChange(chosenFont);
    // Natural languages
    // Languages from Ten'en Project
    BhonmeshStyleChange(chosenFont);
    FrualbuqashStyleChange(chosenFont);
    IlbaskStyleChange(chosenFont);
    MhuislaneanStyleChange(chosenFont);
    NephStyleChange(chosenFont);
    ZhuzuriStyleChange(chosenFont);
    return 0;
}

// Font selector

const fontSelect = document.querySelector(".font-select");
fontSelect.addEventListener("change", (event) => {
    let selectedFont = event.target.value;
    switch (selectedFont) {
        case "default":
            let sansSerifFont = "'Arial', sans-serif";
            LanguageFontChange(sansSerifFont);
            console.log("Story font has been switched to Arial.\nHappy reading!");
            break;
        case "serif":
            let serifFont = "'Times New Roman', serif";
            LanguageFontChange(serifFont);
            console.log("Story font has been switched to Times New Roman.\nHappy reading!");
            break;
        case "monospaced":
            let monospacedFont = "'Courier New', monospaced";
            LanguageFontChange(monospacedFont);
            console.log("Story font has been switched to Courier New.\nHappy reading!");
            break;
        case "cursive":
            let cursiveFont = "'Comic Sans', 'Comic Sans MS', 'Comic Neue', cursive";
            LanguageFontChange(cursiveFont);
            console.log("Story font has been switched to Comic Sans.\nHappy reading!");
            break;
        default:
            alert("Please select a font from the list.");
            console.log("Please select a font from the list.");
        // End of switch
    }
});

// Font size selector

const fontSizes = document.querySelector(".font-size");
fontSizes.addEventListener("change", (event) => {
    let selectedFontSize = event.target.value;
    switch (selectedFontSize) {
        case "default":
            STORY_BODY.style.fontSize = "16px";
            console.log("The font size is now 16 px.");
            break;
        case "18px":
            STORY_BODY.style.fontSize = "18px";
            console.log("The font size is now 18 px.");
            break;
        case "24px":
            STORY_BODY.style.fontSize = "24px";
            console.log("The font size is now 24 px.");
            break;
        default:
            alert("Please select a font size from the list.");
            console.log("Please select a font size from the list.");
        // End of switch
    }
});
