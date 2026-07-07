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
