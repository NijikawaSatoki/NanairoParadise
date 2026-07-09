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

// -----------------------------------------------------------------------------

// Japanese
const JAPANESE = document.getElementsByClassName("japanese");
const ROMAJI = document.getElementsByClassName("romaji");
function JapaneseStyleChange(font) {
    for (let i = 0; i < JAPANESE.length; i++) {
        switch (font) {
            case "'Arial', sans-serif":
                JAPANESE[i].style.fontFamily = "'ヒラギノ角ゴ Pro W3', 'Hiragino Gothic Pro', 'Noto Sans CJK JP', 'Noto Sans JP', 'Kurinto Sans JP', 'ＭＳ ゴシック', 'MS Gothic', sans-serif";
                break;
            case "'Times New Roman', serif":
                JAPANESE[i].style.fontFamily = "'ヒラギノ明朝 Pro W3', 'Hiragino Mincho Pro', 'Noto Serif CJK JP', 'Noto Serif JP', 'Kurinto Text JP', 'ＭＳ ゴシック', 'MS Mincho', serif";
                break;
            case "'Courier New', monospaced":
                JAPANESE[i].style.fontFamily = "'ヒラギノ丸ゴ Pro W4', 'Hiragino Maru Gothic Pro', 'Noto Sans CJK JP', 'Noto Sans JP', 'Kurinto Mono JP', 'ＭＳ ゴシック', 'MS Gothic', monospaced";
                break;
            case "'Comic Sans', 'Comic Sans MS', 'Comic Neue', cursive":
                JAPANESE[i].style.fontFamily = "'ヒラギノ丸ゴ Pro W4', 'Hiragino Maru Gothic Pro', 'Noto Sans CJK JP', 'Noto Sans JP', 'Kurinto Sans JP', 'ＭＳ ゴシック', 'MS Gothic', cursive";
                break;
            default:
                console.log("Something went wrong!\nShutting all systems down!");
                break;
            // End of switch block
        }
    }
    for (let i = 0; i < ROMAJI.length; i++) {
        ROMAJI[i].style.fontFamily = font;
    }
    return 0;
}

// -----------------------------------------------------------------------------

// ------ Languages from Ten'en Project ------ //

// Bhonmesh
const BHONMESH = document.getElementsByClassName("bhonmesh");
const BHONMESH_ROMANIZATION = document.getElementsByClassName("bhonmesh-romanization");
function BhonmeshStyleChange(font) {
    for (let i = 0; i < BHONMESH.length; i++) {
        switch (font) {
            case "'Arial', sans-serif":
                BHONMESH[i].style.fontFamily = "'Chandas', 'Sanskrit Text', 'Kurinto Sans', 'Mangal', 'Noto Sans Devanagari', sans-serif";
                break;
            case "'Times New Roman', serif":
                BHONMESH[i].style.fontFamily = "'Chandas', 'Sanskrit Text', 'Kurinto Text', 'Mangal', 'Noto Serif Devanagari', serif";
                break;
            case "'Courier New', monospaced":
                BHONMESH[i].style.fontFamily = "'Chandas', 'Sanskrit Text', 'Kurinto Sans', 'Mangal', 'Noto Sans Devanagari', monospaced";
                break;
            case "'Comic Sans', 'Comic Sans MS', 'Comic Neue', cursive":
                BHONMESH[i].style.fontFamily = "'Chandas', 'Sanskrit Text', 'Kurinto Sans', 'Mangal', 'Noto Sans Devanagari', cursive";
                break;
            default:
                console.log("Something went wrong!\nShutting all systems down!");
                break;
            // End of switch block
        }
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
        switch (font) {
            case "'Arial', sans-serif":
                ILBASK_ELESUUKELN[i].style.fontFamily = "'Menk Hawang Tig', 'Menk Qagan Tig', 'Menk Garqag Tig', 'Menk Har_a Tig', 'Menk Scnin Tig', 'Oyun Gurban Ulus Tig', 'Oyun Qagan Tig', 'Oyun Garqag Tig', 'Oyun Har_a Tig', 'Oyun Scnin Tig', 'Oyun Agula Tig', 'Mongolian Baiti', 'Mongolian Universal White', 'Mongol Usug', 'Mongolian White', 'MongolianScript', 'Code2000', 'Menksoft Qagan', 'Noto Sans Mongolian', sans-serif";
                break;
            case "'Times New Roman', serif":
                ILBASK_ELESUUKELN[i].style.fontFamily = "'Menk Hawang Tig', 'Menk Qagan Tig', 'Menk Garqag Tig', 'Menk Har_a Tig', 'Menk Scnin Tig', 'Oyun Gurban Ulus Tig', 'Oyun Qagan Tig', 'Oyun Garqag Tig', 'Oyun Har_a Tig', 'Oyun Scnin Tig', 'Oyun Agula Tig', 'Mongolian Baiti', 'Mongolian Universal White', 'Mongol Usug', 'Mongolian White', 'MongolianScript', 'Code2000', 'Menksoft Qagan', 'Noto Sans Mongolian', serif";
                break;
            case "'Courier New', monospaced":
                ILBASK_ELESUUKELN[i].style.fontFamily = "'Menk Hawang Tig', 'Menk Qagan Tig', 'Menk Garqag Tig', 'Menk Har_a Tig', 'Menk Scnin Tig', 'Oyun Gurban Ulus Tig', 'Oyun Qagan Tig', 'Oyun Garqag Tig', 'Oyun Har_a Tig', 'Oyun Scnin Tig', 'Oyun Agula Tig', 'Mongolian Baiti', 'Mongolian Universal White', 'Mongol Usug', 'Mongolian White', 'MongolianScript', 'Code2000', 'Menksoft Qagan', 'Noto Sans Mongolian', monospaced";
                break;
            case "'Comic Sans', 'Comic Sans MS', 'Comic Neue', cursive":
                ILBASK_ELESUUKELN[i].style.fontFamily = "'Menk Hawang Tig', 'Menk Qagan Tig', 'Menk Garqag Tig', 'Menk Har_a Tig', 'Menk Scnin Tig', 'Oyun Gurban Ulus Tig', 'Oyun Qagan Tig', 'Oyun Garqag Tig', 'Oyun Har_a Tig', 'Oyun Scnin Tig', 'Oyun Agula Tig', 'Mongolian Baiti', 'Mongolian Universal White', 'Mongol Usug', 'Mongolian White', 'MongolianScript', 'Code2000', 'Menksoft Qagan', 'Noto Sans Mongolian', cursive";
                break;
            default:
                console.log("Something went wrong!\nShutting all systems down!");
                break;
            // End of switch block
        }
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

// Nhimesh
const NHIMESH = document.getElementsByClassName("nhimesh");
const NHIMESH_ROMANIZATION = document.getElementsByClassName("nhimesh-romanization");
function NhimeshStyleChange(font) {
    for (let i = 0; i < NHIMESH.length; i++) {
        switch (font) {
            case "'Arial', sans-serif":
                NHIMESH[i].style.fontFamily = "'SantakkuM', 'Santakku', 'Kurinto Sans Aux', 'Segoe UI Historic', 'Noto Sans Cuneiform', sans-serif";
                break;
            case "'Times New Roman', serif":
                NHIMESH[i].style.fontFamily = "'SantakkuM', 'Santakku', 'Kurinto Sans Aux', 'Segoe UI Historic', 'Noto Sans Cuneiform', serif";
                break;
            case "'Courier New', monospaced":
                NHIMESH[i].style.fontFamily = "'SantakkuM', 'Santakku', 'Kurinto Sans Aux', 'Segoe UI Historic', 'Noto Sans Cuneiform', monospaced";
                break;
            case "'Comic Sans', 'Comic Sans MS', 'Comic Neue', cursive":
                NHIMESH[i].style.fontFamily = "'SantakkuM', 'Santakku', 'Kurinto Sans Aux', 'Segoe UI Historic', 'Noto Sans Cuneiform', cursive";
                break;
            default:
                console.log("Something went wrong!\nShutting all systems down!");
                break;
            // End of switch block
        }
    }
    for (let i = 0; i < NHIMESH_ROMANIZATION.length; i++) {
        NHIMESH_ROMANIZATION[i].style.fontFamily = font;
    }
    return 0;
}

// Praanbabi
const PRAANBABI = document.getElementsByClassName("praanbabi");
function PraanbabiStyleChange(font) {
    for (let i = 0; i < PRAANBABI.length; i++) {
        PRAANBABI[i].style.fontFamily = font;
    }
    return 0;
}

// Uokramathi
const UOKRAMATHI = document.getElementsByClassName("uokramathi");
function UokramathiStyleChange(font) {
    for (let i = 0; i < UOKRAMATHI.length; i++) {
        UOKRAMATHI[i].style.fontFamily = font;
    }
    return 0;
}

// Standard Uuptari
const UUPTARI_UUP_SCRIPT = document.getElementsByClassName("uuptari-uup-script");
const UUPTARI_KANSE_ALPHABET = document.getElementsByClassName("uuptari-kanse-alphabet");
const UUPTARI_SHITO_SCRIPT = document.getElementsByClassName("uuptari-shito-script");
function StandardUuptariStyleChange(font) {
    for (let i = 0; i < UUPTARI_UUP_SCRIPT.length; i++) {
        switch (font) {
            case "'Arial', sans-serif":
                UUPTARI_UUP_SCRIPT[i].style.fontFamily = "'Noto Naskh Arabic UI', 'Noto Naskh Arabic', 'Iranian Sans', Tahoma, 'Microsoft Sans Serif', 'Arial Unicode MS', sans-serif";
                break;
            case "'Times New Roman', serif":
                UUPTARI_UUP_SCRIPT[i].style.fontFamily = "'Noto Naskh Arabic UI', 'Noto Naskh Arabic', 'Iranian Serif', 'Times New Roman', Tahoma, 'Microsoft Sans Serif', 'Arial Unicode MS', serif";
                break;
            case "'Courier New', monospaced":
                UUPTARI_UUP_SCRIPT[i].style.fontFamily = "'Noto Naskh Arabic UI', 'Noto Naskh Arabic', 'Iranian Sans', Tahoma, 'Microsoft Sans Serif', 'Arial Unicode MS', monospaced";
                break;
            case "'Comic Sans', 'Comic Sans MS', 'Comic Neue', cursive":
                UUPTARI_UUP_SCRIPT[i].style.fontFamily = "'Noto Naskh Arabic UI', 'Noto Naskh Arabic', 'Iranian Sans', Tahoma, 'Microsoft Sans Serif', 'Arial Unicode MS', cursive";
                break;
            default:
                console.log("Something went wrong!\nShutting all systems down!");
                break;
            // End of switch block
        }
    }
    for (let i = 0; i < UUPTARI_KANSE_ALPHABET.length; i++) {
        UUPTARI_KANSE_ALPHABET[i].style.fontFamily = font;
    }
    for (let i = 0; i < UUPTARI_SHITO_SCRIPT.length; i++) {
        switch (font) {
            case "'Arial', sans-serif":
                UUPTARI_SHITO_SCRIPT[i].style.fontFamily = "'Leelawadee UI', Leelawadee, 'Arial Unicode MS', 'Code2000', sans-serif";
                break;
            case "'Times New Roman', serif":
                UUPTARI_SHITO_SCRIPT[i].style.fontFamily = "'Leelawadee UI', Leelawadee, 'Arial Unicode MS', 'Code2000', serif";
                break;
            case "'Courier New', monospaced":
                UUPTARI_SHITO_SCRIPT[i].style.fontFamily = "'Leelawadee UI', Leelawadee, 'Arial Unicode MS', 'Code2000', monospaced";
                break;
            case "'Comic Sans', 'Comic Sans MS', 'Comic Neue', cursive":
                UUPTARI_SHITO_SCRIPT[i].style.fontFamily = "'Leelawadee UI', Leelawadee, 'Arial Unicode MS', 'Code2000', cursive";
                break;
            default:
                console.log("Something went wrong!\nShutting all systems down!");
                break;
            // End of switch block
        }
    }
    return 0;
}

// Ūpkvikhra Uuptari
const UUPTARI_UPKVIKHRAKANSE_ALPHABET = document.getElementsByClassName("uuptari-upkvikhrakanse-alphabet");
function UpkvikhraUuptariStyleChange(font) {
    for (let i = 0; i < UUPTARI_UPKVIKHRAKANSE_ALPHABET.length; i++) {
        UUPTARI_UPKVIKHRAKANSE_ALPHABET[i].style.fontFamily = font;
    }
    return 0;
}

// Xoabbagdosa
const XOABBAGDOSA = document.getElementsByClassName("xoabbagdosa");
function XoabbagdosaStyleChange(font) {
    for (let i = 0; i < XOABBAGDOSA.length; i++) {
        XOABBAGDOSA[i].style.fontFamily = font;
    }
    return 0;
}

// Yicaexsese
const YICAEXSESE = document.getElementsByClassName("yicaexsese");
const YICAEXSESE_YI_ALPHABETICS = document.getElementsByClassName("yicaexsese-romanization");
function YicaexseseStyleChange(font) {
    for (let i = 0; i < YICAEXSESE.length; i++) {
        switch (font) {
            case "'Arial', sans-serif":
                YICAEXSESE[i].style.fontFamily = "'Tibetan Machine Uni', 'BabelStone Tibetan Slim', 'BabelStone Tibetan', 'Noto Serif Tibetan', sans-serif";
                break;
            case "'Times New Roman', serif":
                YICAEXSESE[i].style.fontFamily = "'Tibetan Machine Uni', 'BabelStone Tibetan Slim', 'BabelStone Tibetan', 'Noto Serif Tibetan', serif";
                break;
            case "'Courier New', monospaced":
                YICAEXSESE[i].style.fontFamily = "'Tibetan Machine Uni', 'BabelStone Tibetan Slim', 'BabelStone Tibetan', 'Noto Serif Tibetan', monospaced";
                break;
            case "'Comic Sans', 'Comic Sans MS', 'Comic Neue', cursive":
                YICAEXSESE[i].style.fontFamily = "'Tibetan Machine Uni', 'BabelStone Tibetan Slim', 'BabelStone Tibetan', 'Noto Serif Tibetan', cursive";
                break;
            default:
                console.log("Something went wrong!\nShutting all systems down!");
                break;
            // End of switch block
        }
    }
    for (let i = 0; i < YICAEXSESE_YI_ALPHABETICS.length; i++) {
        YICAEXSESE_YI_ALPHABETICS[i].style.fontFamily = font;
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
    JapaneseStyleChange(chosenFont);
    // Languages from Ten'en Project
    BhonmeshStyleChange(chosenFont);
    FrualbuqashStyleChange(chosenFont);
    IlbaskStyleChange(chosenFont);
    MhuislaneanStyleChange(chosenFont);
    NephStyleChange(chosenFont);
    NhimeshStyleChange(chosenFont);
    PraanbabiStyleChange(chosenFont);
    UokramathiStyleChange(chosenFont);
    StandardUuptariStyleChange(chosenFont);
    UpkvikhraUuptariStyleChange(chosenFont);
    XoabbagdosaStyleChange(chosenFont);
    YicaexseseStyleChange(chosenFont);
    ZhuzuriStyleChange(chosenFont);
    return 0;
}

// Font selector

const FONT_SELECT = document.querySelector(".font-select");
FONT_SELECT.addEventListener("change", (event) => {
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

const FONT_SIZES = document.querySelector(".font-size");
FONT_SIZES.addEventListener("change", (event) => {
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
