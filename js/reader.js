/* =============================================================================
 * Story Reader Scripts
 * =============================================================================
 *
 * Author: Wamo, Vihreääketty, Q'aemil (Niji System)
 *
 */

// Font constants
const SANS_SERIF_FONT = "'Arimo', 'Linux Biolinum', 'Kurinto Sans', 'Arial', 'Noto Sans', sans-serif";
const SERIF_FONT = "'Gentium', 'Gentium Plus', 'GentiumAlt', 'Tinos', 'Linux Libertine', 'Times New Roman', 'Noto Serif', serif";
const MONOSPACED_FONT = "'Courier New', 'Noto Sans Mono', monospaced";
const CURSIVE_FONT = "'Comic Sans', 'Comic Sans MS', 'Comic Neue', cursive";

// Document constants

const STORY_BODY = document.getElementById("StoryBody"); // So that <article> element DOES have a use lol
function StoryBodyFontChange(font) {
    STORY_BODY.style.fontFamily = font;
    return 0;
}

// Language constants and functions

// ------ International Phonetic Alphabet ------ //
const INTERNATIONAL_PHONETIC_ALPHABET = document.getElementsByClassName("ipa");
function IpaFontChange(font) {
    for (let i = 0; i < INTERNATIONAL_PHONETIC_ALPHABET.length; i++) {
        INTERNATIONAL_PHONETIC_ALPHABET[i].style.fontFamily = font;
    }
    return 0;
}

// ------ Natural languages ------ //

// Abkhaz
const ABKHAZ = document.getElementsByClassName("abkhaz");
const ABKHAZ_ISO_9_ROMANIZATION = document.getElementsByClassName("abkhaz-iso-9-romanization");
function AbkhazFontChange(font) {
    for (let i = 0; i < ABKHAZ.length; i++) {
        ABKHAZ[i].style.fontFamily = font;
    }
    for (let i = 0; i < ABKHAZ_ISO_9_ROMANIZATION.length; i++) {
        ABKHAZ_ISO_9_ROMANIZATION[i].style.fontFamily = font;
    }
    return 0;
}

// Adyghe / West Circassian
const WEST_CIRCASSIAN = document.getElementsByClassName("west-circassian");
const WEST_CIRCASSIAN_ISO_9_ROMANIZATION = document.getElementsByClassName("west-circassian-iso-9-romanization");
const WEST_CIRCASSIAN_KNAB_ROMANIZATION = document.getElementsByClassName("west-circassian-knab-romanization");
const WEST_CIRCASSIAN_LIBRARY_OF_CONGRESS_ROMANIZATION = document.getElementsByClassName("library-of-congress-romanization-for-west-circassian");
const WEST_CIRCASSIAN_TITUS_ROMANIZATION = document.getElementsByClassName("west-circassian-titus-romanization");
function AdygheFontChange(font) {
    for (let i = 0; i < WEST_CIRCASSIAN.length; i++) {
        WEST_CIRCASSIAN[i].style.fontFamily = font;
    }
    for (let i = 0; i < WEST_CIRCASSIAN_ISO_9_ROMANIZATION.length; i++) {
        WEST_CIRCASSIAN_ISO_9_ROMANIZATION[i].style.fontFamily = font;
    }
    for (let i = 0; i < WEST_CIRCASSIAN_KNAB_ROMANIZATION.length; i++) {
        WEST_CIRCASSIAN_KNAB_ROMANIZATION[i].style.fontFamily = font;
    }
    for (let i = 0; i < WEST_CIRCASSIAN_LIBRARY_OF_CONGRESS_ROMANIZATION.length; i++) {
        WEST_CIRCASSIAN_LIBRARY_OF_CONGRESS_ROMANIZATION[i].style.fontFamily = font;
    }
    for (let i = 0; i < WEST_CIRCASSIAN_TITUS_ROMANIZATION.length; i++) {
        WEST_CIRCASSIAN_TITUS_ROMANIZATION[i].style.fontFamily = font;
    }
    return 0;
}

// Akkadian
const AKKADIAN = document.getElementsByClassName("akkadian");
const AKKADIAN_ROMANIZATION = document.getElementsByClassName("akkadian-romanization");
function AkkadianFontChange(font) {
    let fontAkkadianCuneiform = "'SantakkuM', 'Santakku', 'Kurinto Sans Aux', 'Segoe UI Historic', 'Noto Sans Cuneiform'";
    for (let i = 0; i < AKKADIAN.length; i++) {
        switch (font) {
            case SANS_SERIF_FONT:
                AKKADIAN[i].style.fontFamily = `${fontAkkadianCuneiform}, sans-serif`;
                break;
            case SERIF_FONT:
                AKKADIAN[i].style.fontFamily = `${fontAkkadianCuneiform}, serif`;
                break;
            case MONOSPACED_FONT:
                AKKADIAN[i].style.fontFamily = `${fontAkkadianCuneiform}, monospaced`;
                break;
            case CURSIVE_FONT:
                AKKADIAN[i].style.fontFamily = `${fontAkkadianCuneiform}, cursive`;
                break;
            default:
                console.log("Something went wrong!\nShutting all systems down!");
                break;
            // End of switch block
        }
    }
    for (let i = 0; i < AKKADIAN_ROMANIZATION.length; i++) {
        AKKADIAN_ROMANIZATION[i].style.fontFamily = font;
    }
    return 0;
}

// Albanian
const ALBANIAN = document.getElementsByClassName("albanian");
function AlbanianFontChange(font) {
    for (let i = 0; i < ALBANIAN.length; i++) {
        ALBANIAN[i].style.fontFamily = font;
    }
    return 0;
}

// Arabic
const ARABIC = document.getElementsByClassName("arabic");
const ARABIC_ISO_233_2_ROMANIZATION = document.getElementsByClassName("arabic-iso-233-2-romanization");
function ArabicFontChange(font) {
    for (let i = 0; i < ARABIC.length; i++) {
        switch (font) {
            case SANS_SERIF_FONT:
                ARABIC[i].style.fontFamily = "'Noto Naskh Arabic UI', 'Noto Naskh Arabic', 'Iranian Sans', 'Tahoma', 'Microsoft Sans Serif', 'Arial Unicode MS', sans-serif";
                break;
            case SERIF_FONT:
                ARABIC[i].style.fontFamily = "'Noto Naskh Arabic UI', 'Noto Naskh Arabic', 'Iranian Sans', 'Tahoma', 'Microsoft Sans Serif', 'Arial Unicode MS', serif";
                break;
            case MONOSPACED_FONT:
                ARABIC[i].style.fontFamily = "'Noto Naskh Arabic UI', 'Noto Naskh Arabic', 'Iranian Sans', 'Tahoma', 'Microsoft Sans Serif', 'Arial Unicode MS', monospaced";
                break;
            case CURSIVE_FONT:
                ARABIC[i].style.fontFamily = "'Noto Naskh Arabic UI', 'Noto Naskh Arabic', 'Iranian Sans', 'Tahoma', 'Microsoft Sans Serif', 'Arial Unicode MS', cursive";
                break;
            default:
                console.log("Something went wrong!\nShutting all systems down!");
                break;
            // End of switch block
        }
    }
    for (let i = 0; i < ARABIC_ISO_233_2_ROMANIZATION.length; i++) {
        ARABIC_ISO_233_2_ROMANIZATION[i].style.fontFamily = font;
    }
    return 0;
}

// Armenian
const ARMENIAN = document.getElementsByClassName("armenian");
const ARMENIAN_ISO_9985_ROMANIZATION = document.getElementsByClassName("armenian-iso-9985-romanization");
function ArmenianFontChange(font) {
    for (let i = 0; i < ARMENIAN.length; i++) {
        switch (font) {
            case SANS_SERIF_FONT:
                ARMENIAN[i].style.fontFamily = "'GHEA Grapalat', 'Mshtakan', 'Arial', 'Segoe UI', 'Tahoma', 'Arian AMU', 'DejaVu Sans', sans-serif";
                break;
            case SERIF_FONT:
                ARMENIAN[i].style.fontFamily = "'GHEA Mariam', 'Mshtakan', 'Arial', 'Segoe UI', 'Tahoma', 'Arian AMU', 'DejaVu Sans', serif";
                break;
            case MONOSPACED_FONT:
                ARMENIAN[i].style.fontFamily = "'GHEA Grapalat', 'Mshtakan', 'Arial', 'Segoe UI', 'Tahoma', 'Arian AMU', 'DejaVu Sans', monospaced";
                break;
            case CURSIVE_FONT:
                ARMENIAN[i].style.fontFamily = "'GHEA Grapalat', 'Mshtakan', 'Arial', 'Segoe UI', 'Tahoma', 'Arian AMU', 'DejaVu Sans', cursive";
                break;
            default:
                console.log("Something went wrong!\nShutting all systems down!");
                break;
            // End of switch block
        }
    }
    for (let i = 0; i < ARMENIAN_ISO_9985_ROMANIZATION.length; i++) {
        ARMENIAN_ISO_9985_ROMANIZATION[i].style.fontFamily = font;
    }
    return 0;
}

// Assamese
const ASSAMESE = document.getElementsByClassName("assamese");
const ASSAMESE_ISO_15919_ROMANIZATION = document.getElementsByClassName("assamese-iso-15919-romanization");
const ASSAMESE_PHONETIC_ROMANIZATION = document.getElementsByClassName("assamese-phonetic-romanization");
function AssameseFontChange(font) {
    for (let i = 0; i < ASSAMESE.length; i++) {
        switch (font) {
            case SANS_SERIF_FONT:
                ASSAMESE[i].style.fontFamily = "'Bangla Sangam MN', 'UniBangla', 'Code2000', 'Likhan', 'UT Bengali Dhaka', 'Vrinda', 'Noto Sans Bengali', sans-serif";
                break;
            case SERIF_FONT:
                ASSAMESE[i].style.fontFamily = "'Bangla Sangam MN', 'UniBangla', 'Code2000', 'Likhan', 'UT Bengali Dhaka', 'Vrinda', 'Noto Sans Bengali', serif";
                break;
            case MONOSPACED_FONT:
                ASSAMESE[i].style.fontFamily = "'Bangla Sangam MN', 'UniBangla', 'Code2000', 'Likhan', 'UT Bengali Dhaka', 'Vrinda', 'Noto Sans Bengali', monospaced";
                break;
            case CURSIVE_FONT:
                ASSAMESE[i].style.fontFamily = "'Bangla Sangam MN', 'UniBangla', 'Code2000', 'Likhan', 'UT Bengali Dhaka', 'Vrinda', 'Noto Sans Bengali', cursive";
                break;
            default:
                console.log("Something went wrong!\nShutting all systems down!");
                break;
            // End of switch block
        }
    }
    for (let i = 0; i < ASSAMESE_ISO_15919_ROMANIZATION.length; i++) {
        ASSAMESE_ISO_15919_ROMANIZATION[i].style.fontFamily = font;
    }
    for (let i = 0; i < ASSAMESE_PHONETIC_ROMANIZATION.length; i++) {
        ASSAMESE_PHONETIC_ROMANIZATION[i].style.fontFamily = font;
    }
    return 0;
}

// Azerbaijani
const AZERBAIJANI = document.getElementsByClassName("azerbaijani");
const AZERBAIJANI_IRAN = document.getElementsByClassName("south-azerbaijani-perso-arabic");
const AZERBAIJANI_DAGESTAN = document.getElementsByClassName("azerbaijani-cyrillic");
function AzerbaijaniFontChange(font) {
    for (let i = 0; i < AZERBAIJANI.length; i++) {
        AZERBAIJANI[i].style.fontFamily = font;
    }
    for (let i = 0; i < AZERBAIJANI_IRAN.length; i++) {
        switch (font) {
            case SANS_SERIF_FONT:
                AZERBAIJANI_IRAN[i].style.fontFamily = "'Iranian Sans', 'Geeza Pro', 'Tahoma', sans-serif";
                break;
            case SERIF_FONT:
                AZERBAIJANI_IRAN[i].style.fontFamily = "'Iranian Serif', 'Geeza Pro', 'Tahoma', serif";
                break;
            case MONOSPACED_FONT:
                AZERBAIJANI_IRAN[i].style.fontFamily = "'Iranian Sans', 'Geeza Pro', 'Tahoma', monospaced";
                break;
            case CURSIVE_FONT:
                AZERBAIJANI_IRAN[i].style.fontFamily = "'Iranian Sans', 'Geeza Pro', 'Tahoma', cursive";
                break;
            default:
                console.log("Something went wrong!\nShutting all systems down!");
                break;
            // End of switch block
        }
    }
    for (let i = 0; i < AZERBAIJANI_DAGESTAN.length; i++) {
        AZERBAIJANI_DAGESTAN[i].style.fontFamily = font;
    }
    return 0;
}

// -----------------------------------------------------------------------------

// Balinese
const BALINESE = document.getElementsByClassName("balinese");
const BALINESE_ROMANIZATION = document.getElementsByClassName("balinese-romanization");
function BalineseFontChange(font) {
    for (let i = 0; i < BALINESE.length; i++) {
        switch (font) {
            case SANS_SERIF_FONT:
                BALINESE[i].style.fontFamily = "'Noto Sans Balinese', sans-serif";
                break;
            case SERIF_FONT:
                BALINESE[i].style.fontFamily = "'Noto Sans Balinese', serif";
                break;
            case MONOSPACED_FONT:
                BALINESE[i].style.fontFamily = "'Noto Sans Balinese', monospaced";
                break;
            case CURSIVE_FONT:
                BALINESE[i].style.fontFamily = "'Noto Sans Balinese', cursive";
                break;
            default:
                console.log("Something went wrong!\nShutting all systems down!");
                break;
            // End of switch block
        }
    }
    for (let i = 0; i < BALINESE_ROMANIZATION.length; i++) {
        BALINESE_ROMANIZATION[i].style.fontFamily = font;
    }
    return 0;
}

// Bangla / Bengali
const BENGALI = document.getElementsByClassName("bengali");
const BENGALI_ISO_15919_ROMANIZATION = document.getElementsByClassName("bengali-iso-15919-romanization");
const BENGALI_PHONETIC_ROMANIZATION = document.getElementsByClassName("bengali-phonetic-romanization");
function BengaliFontChange(font) {
    for (let i = 0; i < BENGALI.length; i++) {
        switch (font) {
            case SANS_SERIF_FONT:
                BENGALI[i].style.fontFamily = "'Bangla Sangam MN', 'UniBangla', 'Code2000', 'Likhan', 'UT Bengali Dhaka', 'Vrinda', 'Noto Sans Bengali', sans-serif";
                break;
            case SERIF_FONT:
                BENGALI[i].style.fontFamily = "'Bangla Sangam MN', 'UniBangla', 'Code2000', 'Likhan', 'UT Bengali Dhaka', 'Vrinda', 'Noto Sans Bengali', serif";
                break;
            case MONOSPACED_FONT:
                BENGALI[i].style.fontFamily = "'Bangla Sangam MN', 'UniBangla', 'Code2000', 'Likhan', 'UT Bengali Dhaka', 'Vrinda', 'Noto Sans Bengali', monospaced";
                break;
            case CURSIVE_FONT:
                BENGALI[i].style.fontFamily = "'Bangla Sangam MN', 'UniBangla', 'Code2000', 'Likhan', 'UT Bengali Dhaka', 'Vrinda', 'Noto Sans Bengali', cursive";
                break;
            default:
                console.log("Something went wrong!\nShutting all systems down!");
                break;
            // End of switch block
        }
    }
    for (let i = 0; i < BENGALI_ISO_15919_ROMANIZATION.length; i++) {
        BENGALI_ISO_15919_ROMANIZATION[i].style.fontFamily = font;
    }
    for (let i = 0; i < BENGALI_PHONETIC_ROMANIZATION.length; i++) {
        BENGALI_PHONETIC_ROMANIZATION[i].style.fontFamily = font;
    }
    return 0;
}

// Bosnian
const BOSNIAN_LATIN = document.getElementsByClassName("bosnian");
const BOSNIAN_CYRILLIC = document.getElementsByClassName("bosnian-cyrillic");
function BosnianFontChange(font) {
    for (let i = 0; i < BOSNIAN_LATIN.length; i++) {
        BOSNIAN_LATIN[i].style.fontFamily = font;
    }
    for (let i = 0; i < BOSNIAN_CYRILLIC.length; i++) {
        BOSNIAN_CYRILLIC[i].style.fontFamily = font;
    }
    return 0;
}

// Burmese
const BURMESE = document.getElementsByClassName("burmese");
const BURMESE_MCLST_TRANSLITERATION = document.getElementsByClassName("burmese-mclts-romanization");
function BurmeseFontChange(font) {
    for (let i = 0; i < BURMESE.length; i++) {
        switch (font) {
            case SANS_SERIF_FONT:
                BURMESE[i].style.fontFamily = "'Pyidaungsu', 'TharLon', 'Padauk', 'Myanmar Text', 'Myanmar3', 'Myanmar2', 'Myanmar1', 'ParabaikSans', 'MyMyanmar', 'Noto Sans Myanmar', sans-serif";
                break;
            case SERIF_FONT:
                BURMESE[i].style.fontFamily = "'Pyidaungsu', 'TharLon', 'Padauk', 'Myanmar Text', 'Myanmar3', 'Myanmar2', 'Myanmar1', 'ParabaikSans', 'MyMyanmar', 'Noto Sans Myanmar', serif";
                break;
            case MONOSPACED_FONT:
                BURMESE[i].style.fontFamily = "'Pyidaungsu', 'TharLon', 'Padauk', 'Myanmar Text', 'Myanmar3', 'Myanmar2', 'Myanmar1', 'ParabaikSans', 'MyMyanmar', 'Noto Sans Myanmar', monospaced";
                break;
            case CURSIVE_FONT:
                BURMESE[i].style.fontFamily = "'Pyidaungsu', 'TharLon', 'Padauk', 'Myanmar Text', 'Myanmar3', 'Myanmar2', 'Myanmar1', 'ParabaikSans', 'MyMyanmar', 'Noto Sans Myanmar', cursive";
                break;
            default:
                console.log("Something went wrong!\nShutting all systems down!");
                break;
            // End of switch block
        }
    }
    for (let i = 0; i < BURMESE_MCLST_TRANSLITERATION.length; i++) {
        BURMESE_MCLST_TRANSLITERATION[i].style.fontFamily = font;
    }
    return 0;
}

// -----------------------------------------------------------------------------

// Hanzi
const TRADITIONAL_CHINESE = document.getElementsByClassName("traditional-chinese");
const SIMPLIFIED_CHINESE = document.getElementsByClassName("simplified-chinese");
function ChineseCharacterFont(font) {
    for (let i = 0; i < TRADITIONAL_CHINESE.length; i++) {
        switch (font) {
            case SANS_SERIF_FONT:
                TRADITIONAL_CHINESE[i].style.fontFamily = "'PingFang TC', 'Source Han Sans TC', 'Source Han Sans TW', 'Noto Sans CJK TC', 'Microsoft Jhenghei', 'MOESongUN', 'PMingLiU', 'PMingLiU-ExtB', 'MingLiU', 'MingLiU-ExtB', 'Ming', 'Heiti TC', 'HanaMinA', 'HanaMinB', sans-serif";
                break;
            case SERIF_FONT:
                TRADITIONAL_CHINESE[i].style.fontFamily = "'PingFang TC', 'Source Han Sans TC', 'Source Han Sans TW', 'Noto Sans CJK TC', 'Microsoft Jhenghei', 'MOESongUN', 'PMingLiU', 'PMingLiU-ExtB', 'MingLiU', 'MingLiU-ExtB', 'Ming', 'Heiti TC', 'HanaMinA', 'HanaMinB', serif";
                break;
            case MONOSPACED_FONT:
                TRADITIONAL_CHINESE[i].style.fontFamily = "'PingFang TC', 'Source Han Sans TC', 'Source Han Sans TW', 'Noto Sans CJK TC', 'Microsoft Jhenghei', 'MOESongUN', 'PMingLiU', 'PMingLiU-ExtB', 'MingLiU', 'MingLiU-ExtB', 'Ming', 'Heiti TC', 'HanaMinA', 'HanaMinB', monospaced";
                break;
            case CURSIVE_FONT:
                TRADITIONAL_CHINESE[i].style.fontFamily = "'PingFang TC', 'Source Han Sans TC', 'Source Han Sans TW', 'Noto Sans CJK TC', 'Microsoft Jhenghei', 'MOESongUN', 'PMingLiU', 'PMingLiU-ExtB', 'MingLiU', 'MingLiU-ExtB', 'Ming', 'Heiti TC', 'HanaMinA', 'HanaMinB', cursive";
                break;
            default:
                console.log("Something went wrong!\nShutting all systems down!");
                break;
            // End of switch block
        }
    }
    for (let i = 0; i < SIMPLIFIED_CHINESE.length; i++) {
        switch (font) {
            case SANS_SERIF_FONT:
                SIMPLIFIED_CHINESE[i].style.fontFamily = "'PingFang SC', 'DengXian', 'Source Han Sans SC', 'Source Han Sans CN', 'Noto Sans CJK SC', 'Microsoft Yahei', 'SimHei', 'SimSun', 'NSimSun', 'SimSun-ExtB', 'Song','Heiti SC', 'HanaMinA', 'HanaMinB', sans-serif";
                break;
            case SERIF_FONT:
                SIMPLIFIED_CHINESE[i].style.fontFamily = "'PingFang SC', 'DengXian', 'Source Han Sans SC', 'Source Han Sans CN', 'Noto Sans CJK SC', 'Microsoft Yahei', 'SimHei', 'SimSun', 'NSimSun', 'SimSun-ExtB', 'Song','Heiti SC', 'HanaMinA', 'HanaMinB', serif";
                break;
            case MONOSPACED_FONT:
                SIMPLIFIED_CHINESE[i].style.fontFamily = "'PingFang SC', 'DengXian', 'Source Han Sans SC', 'Source Han Sans CN', 'Noto Sans CJK SC', 'Microsoft Yahei', 'SimHei', 'SimSun', 'NSimSun', 'SimSun-ExtB', 'Song','Heiti SC', 'HanaMinA', 'HanaMinB', monospaced";
                break;
            case CURSIVE_FONT:
                SIMPLIFIED_CHINESE[i].style.fontFamily = "'PingFang SC', 'DengXian', 'Source Han Sans SC', 'Source Han Sans CN', 'Noto Sans CJK SC', 'Microsoft Yahei', 'SimHei', 'SimSun', 'NSimSun', 'SimSun-ExtB', 'Song','Heiti SC', 'HanaMinA', 'HanaMinB', cursive";
                break;
            default:
                console.log("Something went wrong!\nShutting all systems down!");
                break;
            // End of switch block
        }
    }
    return 0;
}

// Mandarin Chinese
const HANYU_PINYIN = document.getElementsByClassName("pinyin");
const ZHUYIN_FUHAO = document.getElementsByClassName("zhuyin-fuhao");
const TONGYONG_PINYIN = document.getElementsByClassName("tongyong-pinyin");
const WADES_GILES_ROMANIZATION = document.getElementsByClassName("wade-giles-romanization");
const MANDARIN_CHINESE_YALE_ROMANIZATION = document.getElementsByClassName("yale-romanization-for-mandarin-chinese");
const GWOYEU_ROMATZYH = document.getElementsByClassName("gwoyeu-romatzyh");
const PALLADIUS_SYSTEM_CYRILLIC = document.getElementsByClassName("palladius-cyrillic");
const PALLADIUS_SYSTEM_LATIN = document.getElementsByClassName("palladius-latin");
function MandarinChineseFontChange(font) {
    ChineseCharacterFont(font);
    for (let i = 0; i < HANYU_PINYIN.length; i++) {
        HANYU_PINYIN[i].style.fontFamily = font;
    }
    for (let i = 0; i < ZHUYIN_FUHAO.length; i++) {
        switch (font) {
            case SANS_SERIF_FONT:
                ZHUYIN_FUHAO[i].style.fontFamily = "'PingFang TC', 'Source Han Sans TC', 'Source Han Sans TW', 'Noto Sans CJK TC', 'Microsoft Jhenghei', 'MOESongUN', 'PMingLiU', 'PMingLiU-ExtB', 'MingLiU', 'MingLiU-ExtB', 'Ming', 'Heiti TC', 'HanaMinA', 'HanaMinB', sans-serif";
                break;
            case SERIF_FONT:
                ZHUYIN_FUHAO[i].style.fontFamily = "'PingFang TC', 'Source Han Sans TC', 'Source Han Sans TW', 'Noto Sans CJK TC', 'Microsoft Jhenghei', 'MOESongUN', 'PMingLiU', 'PMingLiU-ExtB', 'MingLiU', 'MingLiU-ExtB', 'Ming', 'Heiti TC', 'HanaMinA', 'HanaMinB', serif";
                break;
            case MONOSPACED_FONT:
                ZHUYIN_FUHAO[i].style.fontFamily = "'PingFang TC', 'Source Han Sans TC', 'Source Han Sans TW', 'Noto Sans CJK TC', 'Microsoft Jhenghei', 'MOESongUN', 'PMingLiU', 'PMingLiU-ExtB', 'MingLiU', 'MingLiU-ExtB', 'Ming', 'Heiti TC', 'HanaMinA', 'HanaMinB', monospaced";
                break;
            case CURSIVE_FONT:
                ZHUYIN_FUHAO[i].style.fontFamily = "'PingFang TC', 'Source Han Sans TC', 'Source Han Sans TW', 'Noto Sans CJK TC', 'Microsoft Jhenghei', 'MOESongUN', 'PMingLiU', 'PMingLiU-ExtB', 'MingLiU', 'MingLiU-ExtB', 'Ming', 'Heiti TC', 'HanaMinA', 'HanaMinB', cursive";
                break;
            default:
                console.log("Something went wrong!\nShutting all systems down!");
                break;
            // End of switch block
        }
    }
    for (let i = 0; i < TONGYONG_PINYIN.length; i++) {
        TONGYONG_PINYIN[i].style.fontFamily = font;
    }
    for (let i = 0; i < WADES_GILES_ROMANIZATION.length; i++) {
        WADES_GILES_ROMANIZATION[i].style.fontFamily = font;
    }
    for (let i = 0; i < MANDARIN_CHINESE_YALE_ROMANIZATION.length; i++) {
        MANDARIN_CHINESE_YALE_ROMANIZATION[i].style.fontFamily = font;
    }
    for (let i = 0; i < GWOYEU_ROMATZYH.length; i++) {
        GWOYEU_ROMATZYH[i].style.fontFamily = font;
    }
    for (let i = 0; i < PALLADIUS_SYSTEM_CYRILLIC.length; i++) {
        PALLADIUS_SYSTEM_CYRILLIC[i].style.fontFamily = font;
    }
    for (let i = 0; i < PALLADIUS_SYSTEM_LATIN.length; i++) {
        PALLADIUS_SYSTEM_LATIN[i].style.fontFamily = font;
    }
    return 0;
}

// Cantonese
const JYUTPING = document.getElementsByClassName("jyutping");
const CANTONESE_YALE_ROMANIZATION = document.getElementsByClassName("yale-romanization-for-cantonese");
const CANTONESE_PINYIN = document.getElementsByClassName("cantonese-pinyin");
const GUANGDONG_ROMANIZATION = document.getElementsByClassName("guangdong-romanization");
function CantoneseFontChange(font) {
    ChineseCharacterFont(font);
    for (let i = 0; i < JYUTPING.length; i++) {
        JYUTPING[i].style.fontFamily = font;
    }
    for (let i = 0; i < CANTONESE_YALE_ROMANIZATION.length; i++) {
        CANTONESE_YALE_ROMANIZATION[i].style.fontFamily = font;
    }
    for (let i = 0; i < CANTONESE_PINYIN.length; i++) {
        CANTONESE_PINYIN[i].style.fontFamily = font;
    }
    for (let i = 0; i < GUANGDONG_ROMANIZATION.length; i++) {
        GUANGDONG_ROMANIZATION[i].style.fontFamily = font;
    }
    return 0;
}

// Hakka Chinese
const PHAK_FA_SU = document.getElementsByClassName("phak-fa-su");
const HAKKA_ROMANIZATION_SYSTEM = document.getElementsByClassName("hakka-romanization-system");
const HAGFA_PINYIM = document.getElementsByClassName("hagfa-pinyim");
function HakkaChineseFontChange(font) {
    ChineseCharacterFont(font);
    for (let i = 0; i < PHAK_FA_SU.length; i++) {
        PHAK_FA_SU[i].style.fontFamily = font;
    }
    for (let i = 0; i < HAKKA_ROMANIZATION_SYSTEM.length; i++) {
        HAKKA_ROMANIZATION_SYSTEM[i].style.fontFamily = font;
    }
    for (let i = 0; i < HAGFA_PINYIM.length; i++) {
        HAGFA_PINYIM[i].style.fontFamily = font;
    }
    return 0;
}

// Min Bei Chinese
const KIENNING_COLLOQUIAL_ROMANIZED = document.getElementsByClassName("kienning-colloquial-romanized");
function MinBeiChineseFontChange(font) {
    ChineseCharacterFont(font);
    for (let i = 0; i < KIENNING_COLLOQUIAL_ROMANIZED.length; i++) {
        KIENNING_COLLOQUIAL_ROMANIZED[i].style.fontFamily = font;
    }
    return 0;
}

// Min Dong Chinese
const BANG_UA_CE = document.getElementsByClassName("bang-ua-ce");
function MinDongChineseFontChange(font) {
    ChineseCharacterFont(font);
    for (let i = 0; i < BANG_UA_CE.length; i++) {
        BANG_UA_CE[i].style.fontFamily = font;
    }
    return 0;
}

// Taiwanese Hokkien / Min Nan Chinese
const PEH_OE_JI = document.getElementsByClassName("peh-oe-ji");
const TAI_LO = document.getElementsByClassName("tai-lo");
const PHOFSIT_DAIBUUN = document.getElementsByClassName("phofsit-daibuun");
function TaiwaneseHokkienFontChange(font) {
    ChineseCharacterFont(font);
    for (let i = 0; i < PEH_OE_JI.length; i++) {
        PEH_OE_JI[i].style.fontFamily = font;
    }
    for (let i = 0; i < TAI_LO.length; i++) {
        TAI_LO[i].style.fontFamily = font;
    }
    for (let i = 0; i < PHOFSIT_DAIBUUN.length; i++) {
        PHOFSIT_DAIBUUN[i].style.fontFamily = font;
    }
    return 0;
}

// Teochew Chinese
const PENGIM = document.getElementsByClassName("pengim");
const PEH_OE_JI_LIKE_ROMANIZATION = document.getElementsByClassName("peh-oe-ji-like-romanization");
function TeochewChineseFontChange(font) {
    ChineseCharacterFont(font);
    for (let i = 0; i < PENGIM.length; i++) {
        PENGIM[i].style.fontFamily = font;
    }
    for (let i = 0; i < PEH_OE_JI_LIKE_ROMANIZATION.length; i++) {
        PEH_OE_JI_LIKE_ROMANIZATION[i].style.fontFamily = font;
    }
    return 0;
}

// Crimean Tatar
const CRIMEAN_TATAR = document.getElementsByClassName("crimean-tatar");
const CRIMEAN_TATAR_OUTDATED_CYRILLIC = document.getElementsByClassName("crimean-tatar-soviet-cyrillic");
function CrimeanTatarFontChange(font) {
    for (let i = 0; i < CRIMEAN_TATAR.length; i++) {
        CRIMEAN_TATAR[i].style.fontFamily = font;
    }
    for (let i = 0; i < CRIMEAN_TATAR_OUTDATED_CYRILLIC.length; i++) {
        CRIMEAN_TATAR_OUTDATED_CYRILLIC[i].style.fontFamily = font;
    }
    return 0;
}

// Croatian
const CROATIAN = document.getElementsByClassName("croatian");
function CroatianFontChange(font) {
    for (let i = 0; i < CROATIAN.length; i++) {
        CROATIAN[i].style.fontFamily = font;
    }
    return 0;
}

// -----------------------------------------------------------------------------

// Danish
const DANISH = document.getElementsByClassName("danish");
function DanishFontChange(font) {
    for (let i = 0; i < DANISH.length; i++) {
        DANISH[i].style.fontFamily = font;
    }
    return 0;
}

// Dhivehi
const DHIVEHI = document.getElementsByClassName("dhivehi-thaana-script");
const DHIVEHI_MALE_LATIN = document.getElementsByClassName("dhivehi-male-latin");
function DhivehiFontChange(font) {
    for (let i = 0; i < DHIVEHI.length; i++) {
        switch (font) {
            case SANS_SERIF_FONT:
                DHIVEHI[i].style.fontFamily = "'Noto Sans Thaana', sans-serif";
                break;
            case SERIF_FONT:
                DHIVEHI[i].style.fontFamily = "'Noto Sans Thaana', serif";
                break;
            case MONOSPACED_FONT:
                DHIVEHI[i].style.fontFamily = "'Noto Sans Thaana', monospaced";
                break;
            case CURSIVE_FONT:
                DHIVEHI[i].style.fontFamily = "'Noto Sans Thaana', cursive";
                break;
            default:
                console.log("Something went wrong!\nShutting all systems down!");
                break;
            // End of switch block
        }
    }
    for (let i = 0; i < DHIVEHI_MALE_LATIN.length; i++) {
        DHIVEHI_MALE_LATIN[i].style.fontFamily = font;
    }
    return 0;
}

// Dutch
const DUTCH = document.getElementsByClassName("dutch");
function DutchFontChange(font) {
    for (let i = 0; i < DUTCH.length; i++) {
        DUTCH[i].style.fontFamily = font;
    }
    return 0;
}

// -----------------------------------------------------------------------------

// Estonian
const ESTONIAN = document.getElementsByClassName("estonian");
function EstonianFontChange(font) {
    for (let i = 0; i < ESTONIAN.length; i++) {
        ESTONIAN[i].style.fontFamily = font;
    }
    return 0;
}

// -----------------------------------------------------------------------------

// Finnish
const FINNISH = document.getElementsByClassName("finnish");
function FinnishFontChange(font) {
    for (let i = 0; i < FINNISH.length; i++) {
        FINNISH[i].style.fontFamily = font;
    }
    return 0;
}

// French
const FRENCH = document.getElementsByClassName("french");
function FrenchFontChange(font) {
    for (let i = 0; i < FRENCH.length; i++) {
        FRENCH[i].style.fontFamily = font;
    }
    return 0;
}

// -----------------------------------------------------------------------------

// Georgian
const GEORGIAN = document.getElementsByClassName("georgian");
const GEORGIAN_ROMANIZATION = document.getElementsByClassName("georgian-romanization");
function GeorgianFontChange(font) {
    for (let i = 0; i < GEORGIAN.length; i++) {
        switch (font) {
            case SANS_SERIF_FONT:
                GEORGIAN[i].style.fontFamily = "'DejaVu Sans', 'Arial Unicode MS', 'Sylfaen', 'Noto Sans Georgian', sans-serif";
                break;
            case SERIF_FONT:
                GEORGIAN[i].style.fontFamily = "'DejaVu Sans', 'Arial Unicode MS', 'Sylfaen', 'Noto Serif Georgian', serif";
                break;
            case MONOSPACED_FONT:
                GEORGIAN[i].style.fontFamily = "'DejaVu Sans', 'Arial Unicode MS', 'Sylfaen', 'Noto Sans Georgian', monospaced";
                break;
            case CURSIVE_FONT:
                GEORGIAN[i].style.fontFamily = "'DejaVu Sans', 'Arial Unicode MS', 'Sylfaen', 'Noto Sans Georgian', cursive";
                break;
            default:
                console.log("Something went wrong!\nShutting all systems down!");
                break;
            // End of switch block
        }
    }
    for (let i = 0; i < GEORGIAN_ROMANIZATION.length; i++) {
        GEORGIAN_ROMANIZATION[i].style.fontFamily = font;
    }
    return 0;
}

// German
const GERMAN = document.getElementsByClassName("german");
function GermanFontChange(font) {
    for (let i = 0; i < GERMAN.length; i++) {
        GERMAN[i].style.fontFamily = font;
    }
    return 0;
}

// Ancient Greek
const POLYTONIC_GREEK = document.getElementsByClassName("ancient-greek");
const POLYTONIC_GREEK_ROMANIZATION = document.getElementsByClassName("ancient-greek-romanization");
function PolytonicGreekFontChange(font) {
    for (let i = 0; i < POLYTONIC_GREEK.length; i++) {
        POLYTONIC_GREEK[i].style.fontFamily = font;
    }
    for (let i = 0; i < POLYTONIC_GREEK_ROMANIZATION.length; i++) {
        POLYTONIC_GREEK_ROMANIZATION[i].style.fontFamily = font;
    }
    return 0;
}

// Modern Greek
const MONOTONIC_GREEK = document.getElementsByClassName("greek");
const MONOTONIC_GREEK_ROMANIZATION = document.getElementsByClassName("greek-romanization");
function MonotonicGreekFontChange(font) {
    for (let i = 0; i < MONOTONIC_GREEK.length; i++) {
        MONOTONIC_GREEK[i].style.fontFamily = font;
    }
    for (let i = 0; i < MONOTONIC_GREEK_ROMANIZATION.length; i++) {
        MONOTONIC_GREEK_ROMANIZATION[i].style.fontFamily = font;
    }
    return 0;
}

// Gujarati
const GUJARATI = document.getElementsByClassName("gujarati");
const GUJARATI_ISO_15919_ROMANIZATION = document.getElementsByClassName("gujarati-iso-15919-romanization");
function GujaratiFontChange(font) {
    for (let i = 0; i < GUJARATI.length; i++) {
        switch (font) {
            case SANS_SERIF_FONT:
                GUJARATI[i].style.fontFamily = "'Noto Sans Gujarati', 'Gujarati Sangam MN', 'Gujarati MT', 'Shruti', 'Lucida Grande', 'Arial Unicode MS', 'Lucida Sans Unicode', 'Code2000', 'TITUS Cyberbit Basic', 'Chrysanthi Unicode', 'Bitstream Cyberbit', 'Bitstream CyberBase', 'Bitstream Vera', 'Visual Geez Unicode', sans-serif";
                break;
            case SERIF_FONT:
                GUJARATI[i].style.fontFamily = "'Noto Sans Gujarati', 'Gujarati Sangam MN', 'Gujarati MT', 'Shruti', 'Lucida Grande', 'Arial Unicode MS', 'Lucida Sans Unicode', 'Code2000', 'TITUS Cyberbit Basic', 'Chrysanthi Unicode', 'Bitstream Cyberbit', 'Bitstream CyberBase', 'Bitstream Vera', 'Visual Geez Unicode', serif";
                break;
            case MONOSPACED_FONT:
                GUJARATI[i].style.fontFamily = "'Noto Sans Gujarati', 'Gujarati Sangam MN', 'Gujarati MT', 'Shruti', 'Lucida Grande', 'Arial Unicode MS', 'Lucida Sans Unicode', 'Code2000', 'TITUS Cyberbit Basic', 'Chrysanthi Unicode', 'Bitstream Cyberbit', 'Bitstream CyberBase', 'Bitstream Vera', 'Visual Geez Unicode', monospaced";
                break;
            case CURSIVE_FONT:
                GUJARATI[i].style.fontFamily = "'Noto Sans Gujarati', 'Gujarati Sangam MN', 'Gujarati MT', 'Shruti', 'Lucida Grande', 'Arial Unicode MS', 'Lucida Sans Unicode', 'Code2000', 'TITUS Cyberbit Basic', 'Chrysanthi Unicode', 'Bitstream Cyberbit', 'Bitstream CyberBase', 'Bitstream Vera', 'Visual Geez Unicode', cursive";
                break;
            default:
                console.log("Something went wrong!\nShutting all systems down!");
                break;
            // End of switch block
        }
    }
    for (let i = 0; i < GUJARATI_ISO_15919_ROMANIZATION.length; i++) {
        GUJARATI_ISO_15919_ROMANIZATION[i].style.fontFamily = font;
    }
    return 0;
}

// -----------------------------------------------------------------------------

// Hebrew
const HEBREW = document.getElementsByClassName("hebrew");
const HEBREW_SBL_TRANSLITERATION = document.getElementsByClassName("hebrew-sbl-transliteration");
function HebrewFontChange(font) {
    for (let i = 0; i < HEBREW.length; i++) {
        switch (font) {
            case SANS_SERIF_FONT:
                HEBREW[i].style.fontFamily = "'SBL Hebrew', 'SBL BibLit', 'Taamey David CLM', 'Taamey Frank CLM', 'Alef', 'Noto Sans Hebrew', 'Narkisim', 'Miriam', 'Kinryu', 'Arial Hebrew', 'Arial', 'Adobe Hebrew', sans-serif";
                break;
            case SERIF_FONT:
                HEBREW[i].style.fontFamily = "'SBL Hebrew', 'SBL BibLit', 'Taamey David CLM', 'Taamey Frank CLM', 'Alef', 'Noto Sans Hebrew', 'Narkisim', 'Miriam', 'Kinryu', 'Arial Hebrew', 'Arial', 'Adobe Hebrew', serif";
                break;
            case MONOSPACED_FONT:
                HEBREW[i].style.fontFamily = "'SBL Hebrew', 'SBL BibLit', 'Taamey David CLM', 'Taamey Frank CLM', 'Alef', 'Noto Sans Hebrew', 'Narkisim', 'Miriam', 'Kinryu', 'Arial Hebrew', 'Arial', 'Adobe Hebrew', monospaced";
                break;
            case CURSIVE_FONT:
                HEBREW[i].style.fontFamily = "'SBL Hebrew', 'SBL BibLit', 'Taamey David CLM', 'Taamey Frank CLM', 'Alef', 'Noto Sans Hebrew', 'Narkisim', 'Miriam', 'Kinryu', 'Arial Hebrew', 'Arial', 'Adobe Hebrew', cursive";
                break;
            default:
                console.log("Something went wrong!\nShutting all systems down!");
                break;
            // End of switch block
        }
    }
    for (let i = 0; i < HEBREW_SBL_TRANSLITERATION.length; i++) {
        HEBREW_SBL_TRANSLITERATION[i].style.fontFamily = font;
    }
    return 0;
}

// Hindi
const HINDI = document.getElementsByClassName("hindi");
const HINDI_ISO_15919_ROMANIZATION = document.getElementsByClassName("hindi-iso-15919-romanization");
const HINDI_HUNTERIAN_ROMANIZATION = document.getElementsByClassName("hindi-hunterian-romanization");
function HindiFontChange(font) {
    for (let i = 0; i < HINDI.length; i++) {
        switch (font) {
            case SANS_SERIF_FONT:
                HINDI[i].style.fontFamily = "'Chandas', 'Tiro Devanagari Sanskrit', 'Sanskrit Text', 'Adobe Devanagari', 'Noto Serif Devanagari', 'Utsaah', 'Devanagari MT', 'Raghu', 'Gargi', 'JanaSanskrit', 'JanaHindi', 'Siddhanta', 'Noto Sans Devanagari', sans-serif";
                break;
            case SERIF_FONT:
                HINDI[i].style.fontFamily = "'Chandas', 'Tiro Devanagari Sanskrit', 'Sanskrit Text', 'Adobe Devanagari', 'Noto Serif Devanagari', 'Utsaah', 'Devanagari MT', 'Raghu', 'Gargi', 'JanaSanskrit', 'JanaHindi', 'Siddhanta', 'Noto Sans Devanagari', serif";
                break;
            case MONOSPACED_FONT:
                HINDI[i].style.fontFamily = "'Chandas', 'Tiro Devanagari Sanskrit', 'Sanskrit Text', 'Adobe Devanagari', 'Noto Serif Devanagari', 'Utsaah', 'Devanagari MT', 'Raghu', 'Gargi', 'JanaSanskrit', 'JanaHindi', 'Siddhanta', 'Noto Sans Devanagari', monospaced";
                break;
            case CURSIVE_FONT:
                HINDI[i].style.fontFamily = "'Chandas', 'Tiro Devanagari Sanskrit', 'Sanskrit Text', 'Adobe Devanagari', 'Noto Serif Devanagari', 'Utsaah', 'Devanagari MT', 'Raghu', 'Gargi', 'JanaSanskrit', 'JanaHindi', 'Siddhanta', 'Noto Sans Devanagari', cursive";
                break;
            default:
                console.log("Something went wrong!\nShutting all systems down!");
                break;
            // End of switch block
        }
    }
    for (let i = 0; i < HINDI_ISO_15919_ROMANIZATION.length; i++) {
        HINDI_ISO_15919_ROMANIZATION[i].style.fontFamily = font;
    }
    for (let i = 0; i < HINDI_HUNTERIAN_ROMANIZATION.length; i++) {
        HINDI_HUNTERIAN_ROMANIZATION[i].style.fontFamily = font;
    }
    return 0;
}

// Hittite
const HITTITE = document.getElementsByClassName("hittite");
const HITTITE_ROMANIZATION = document.getElementsByClassName("hittite-romanization");
function HittiteFontChange(font) {
    for (let i = 0; i < HITTITE.length; i++) {
        switch (font) {
            case SANS_SERIF_FONT:
                HITTITE[i].style.fontFamily = "'UllikummiA', 'Akkadian', 'FreeIdgSerif', 'CuneiformComposite', 'Segoe UI Historic', sans-serif";
                break;
            case SERIF_FONT:
                HITTITE[i].style.fontFamily = "'UllikummiA', 'Akkadian', 'FreeIdgSerif', 'CuneiformComposite', 'Segoe UI Historic', serif";
                break;
            case MONOSPACED_FONT:
                HITTITE[i].style.fontFamily = "'UllikummiA', 'Akkadian', 'FreeIdgSerif', 'CuneiformComposite', 'Segoe UI Historic', monospaced";
                break;
            case CURSIVE_FONT:
                HITTITE[i].style.fontFamily = "'UllikummiA', 'Akkadian', 'FreeIdgSerif', 'CuneiformComposite', 'Segoe UI Historic', cursive";
                break;
            default:
                console.log("Something went wrong!\nShutting all systems down!");
                break;
            // End of switch block
        }
    }
    for (let i = 0; i < HITTITE_ROMANIZATION.length; i++) {
        HITTITE_ROMANIZATION[i].style.fontFamily = font;
    }
    return 0;
}

// Hungarian
const HUNGARIAN = document.getElementsByClassName("hungarian");
function HungarianFontChange(font) {
    for (let i = 0; i < HUNGARIAN.length; i++) {
        HUNGARIAN[i].style.fontFamily = font;
    }
    return 0;
}

// -----------------------------------------------------------------------------

// Icelandic
const ICELANDIC = document.getElementsByClassName("icelandic");
function IcelandicFontChange(font) {
    for (let i = 0; i < ICELANDIC.length; i++) {
        ICELANDIC[i].style.fontFamily = font;
    }
    return 0;
}

// Indonesian
const INDONESIAN = document.getElementsByClassName("indonesian");
function IndonesianFontChange(font) {
    for (let i = 0; i < INDONESIAN.length; i++) {
        INDONESIAN[i].style.fontFamily = font;
    }
    return 0;
}

// Italian
const ITALIAN = document.getElementsByClassName("italian");
function ItalianFontChange(font) {
    for (let i = 0; i < ITALIAN.length; i++) {
        ITALIAN[i].style.fontFamily = font;
    }
    return 0;
}

// -----------------------------------------------------------------------------

// Japanese
const JAPANESE = document.getElementsByClassName("japanese");
const ROMAJI = document.getElementsByClassName("romaji");
function JapaneseFontChange(font) {
    for (let i = 0; i < JAPANESE.length; i++) {
        switch (font) {
            case SANS_SERIF_FONT:
                JAPANESE[i].style.fontFamily = "'ヒラギノ角ゴ Pro W3', 'Hiragino Gothic Pro', 'Noto Sans CJK JP', 'Noto Sans JP', 'Kurinto Sans JP', 'ＭＳ ゴシック', 'MS Gothic', sans-serif";
                break;
            case SERIF_FONT:
                JAPANESE[i].style.fontFamily = "'ヒラギノ明朝 Pro W3', 'Hiragino Mincho Pro', 'Noto Serif CJK JP', 'Noto Serif JP', 'Kurinto Text JP', 'ＭＳ ゴシック', 'MS Mincho', serif";
                break;
            case MONOSPACED_FONT:
                JAPANESE[i].style.fontFamily = "'ヒラギノ丸ゴ Pro W4', 'Hiragino Maru Gothic Pro', 'Noto Sans CJK JP', 'Noto Sans JP', 'Kurinto Mono JP', 'ＭＳ ゴシック', 'MS Gothic', monospaced";
                break;
            case CURSIVE_FONT:
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

// Javanese
const JAVANESE = document.getElementsByClassName("javanese");
const JAVANESE_ROMANIZATION = document.getElementsByClassName("javanese-romanization");
function JavaneseFontChange(font) {
    for (let i = 0; i < JAVANESE.length; i++) {
        switch (font) {
            case SANS_SERIF_FONT:
                JAVANESE[i].style.fontFamily = "'Tuladha Jejeg', 'Javanese Text', 'adjisaka', 'Noto Sans Javanese', sans-serif";
                break;
            case SERIF_FONT:
                JAVANESE[i].style.fontFamily = "'Tuladha Jejeg', 'Javanese Text', 'adjisaka', 'Noto Sans Javanese', serif";
                break;
            case MONOSPACED_FONT:
                JAVANESE[i].style.fontFamily = "'Tuladha Jejeg', 'Javanese Text', 'adjisaka', 'Noto Sans Javanese', monospaced";
                break;
            case CURSIVE_FONT:
                JAVANESE[i].style.fontFamily = "'Tuladha Jejeg', 'Javanese Text', 'adjisaka', 'Noto Sans Javanese', cursive";
                break;
            default:
                console.log("Something went wrong!\nShutting all systems down!");
                break;
            // End of switch block
        }
    }
    for (let i = 0; i < JAVANESE_ROMANIZATION.length; i++) {
        JAVANESE_ROMANIZATION[i].style.fontFamily = font;
    }
    return 0;
}

// -----------------------------------------------------------------------------

// Kabardian / East Circassian
const EAST_CIRCASSIAN = document.getElementsByClassName("east-circassian");
const EAST_CIRCASSIAN_ADDER_ALPHABET = document.getElementsByClassName("east-circassian-adder-alphabet");
function KabardianFontChange(font) {
    for (let i = 0; i < EAST_CIRCASSIAN.length; i++) {
        EAST_CIRCASSIAN[i].style.fontFamily = font;
    }
    for (let i = 0; i < EAST_CIRCASSIAN_ADDER_ALPHABET.length; i++) {
        EAST_CIRCASSIAN_ADDER_ALPHABET[i].style.fontFamily = font;
    }
    return 0;
}

// Kannada
const KANNADA = document.getElementsByClassName("kannada");
const KANNADA_ISO_15919_ROMANIZATION = document.getElementsByClassName("kannada-iso-15919-romanization");
function KannadaFontChange(font) {
    for (let i = 0; i < KANNADA.length; i++) {
        switch (font) {
            case SANS_SERIF_FONT:
                KANNADA[i].style.fontFamily = "'Kannada Sangam MN', 'JanaKannada', 'Tunga', 'Kedage', 'RaghuKannada', 'Sampige', 'Arial Unicode MS', 'Code2000', 'Bitstream Cyberbit', 'Bitstream CyberBase', 'Noto Sans Kannada', sans-serif";
                break;
            case SERIF_FONT:
                KANNADA[i].style.fontFamily = "'Kannada Sangam MN', 'JanaKannada', 'Tunga', 'Kedage', 'RaghuKannada', 'Sampige', 'Arial Unicode MS', 'Code2000', 'Bitstream Cyberbit', 'Bitstream CyberBase', 'Noto Sans Kannada', serif";
                break;
            case MONOSPACED_FONT:
                KANNADA[i].style.fontFamily = "'Kannada Sangam MN', 'JanaKannada', 'Tunga', 'Kedage', 'RaghuKannada', 'Sampige', 'Arial Unicode MS', 'Code2000', 'Bitstream Cyberbit', 'Bitstream CyberBase', 'Noto Sans Kannada', monospaced";
                break;
            case CURSIVE_FONT:
                KANNADA[i].style.fontFamily = "'Kannada Sangam MN', 'JanaKannada', 'Tunga', 'Kedage', 'RaghuKannada', 'Sampige', 'Arial Unicode MS', 'Code2000', 'Bitstream Cyberbit', 'Bitstream CyberBase', 'Noto Sans Kannada', cursive";
                break;
            default:
                console.log("Something went wrong!\nShutting all systems down!");
                break;
            // End of switch block
        }
    }
    for (let i = 0; i < KANNADA_ISO_15919_ROMANIZATION.length; i++) {
        KANNADA_ISO_15919_ROMANIZATION[i].style.fontFamily = font;
    }
    return 0;
}

// Kazakh
const KAZAKH = document.getElementsByClassName("kazakh");
const KAZAKH_ROMANIZATION = document.getElementsByClassName("kazakh-romanization");
function KazakhFontChange(font) {
    for (let i = 0; i < KAZAKH.length; i++) {
        KAZAKH[i].style.fontFamily = font;
    }
    for (let i = 0; i < KAZAKH_ROMANIZATION.length; i++) {
        KAZAKH_ROMANIZATION[i].style.fontFamily = font;
    }
    return 0;
}

// Khmer
const KHMER = document.getElementsByClassName("khmer");
const KHMER_GD_ROMANIZATION = document.getElementsByClassName("geographic-department-romanization");
const KHMER_UNGEGN_ROMANIZATION = document.getElementsByClassName("khmer-ungegn-romanization");
const KHMER_LIBRARY_OF_CONGRESS_ROMANIZATION = document.getElementsByClassName("library-of-congress-romanization-for-khmer");
function KhmerFontChange(font) {
    for (let i = 0; i < KHMER.length; i++) {
        switch (font) {
            case SANS_SERIF_FONT:
                KHMER[i].style.fontFamily = "'Khmer OS', 'Khmer OS Content', 'Leelawadee UI', 'Noto Sans Khmer', 'Code2000', 'Khmer Mondulkiri U OT ls', sans-serif";
                break;
            case SERIF_FONT:
                KHMER[i].style.fontFamily = "'Khmer OS', 'Khmer OS Content', 'Leelawadee UI', 'Noto Sans Khmer', 'Code2000', 'Khmer Mondulkiri U OT ls', serif";
                break;
            case MONOSPACED_FONT:
                KHMER[i].style.fontFamily = "'Khmer OS', 'Khmer OS Content', 'Leelawadee UI', 'Noto Sans Khmer', 'Code2000', 'Khmer Mondulkiri U OT ls', monospaced";
                break;
            case CURSIVE_FONT:
                KHMER[i].style.fontFamily = "'Khmer OS', 'Khmer OS Content', 'Leelawadee UI', 'Noto Sans Khmer', 'Code2000', 'Khmer Mondulkiri U OT ls', cursive";
                break;
            default:
                console.log("Something went wrong!\nShutting all systems down!");
                break;
            // End of switch block
        }
    }
    for (let i = 0; i < KHMER_GD_ROMANIZATION.length; i++) {
        KHMER_GD_ROMANIZATION[i].style.fontFamily = font;
    }
    for (let i = 0; i < KHMER_UNGEGN_ROMANIZATION.length; i++) {
        KHMER_UNGEGN_ROMANIZATION[i].style.fontFamily = font;
    }
    for (let i = 0; i < KHMER_LIBRARY_OF_CONGRESS_ROMANIZATION.length; i++) {
        KHMER_LIBRARY_OF_CONGRESS_ROMANIZATION[i].style.fontFamily = font;
    }
    return 0;
}

// Korean
const KOREAN_HANGUL = document.getElementsByClassName("korean");
const KOREAN_HANJA = document.getElementsByClassName("korean-hanja");
const KOREAN_REVISED_ROMANIZATION = document.getElementsByClassName("korean-revised-romanization");
const KOREAN_MCCUNE_REISCHAUER_ROMANIZATION = document.getElementsByClassName("mccune-reischauer-romanization");
const KOREAN_YALE_ROMANIZATION = document.getElementsByClassName("yale-romanization-for-korean");
const KOREAN_KONTSEVICH_SYSTEM_CYRILLIC = document.getElementsByClassName("kontsevich-cyrillic");
const KOREAN_KONTSEVICH_SYSTEM_LATIN = document.getElementsByClassName("kontsevich-latin");
function KoreanFontChange(font) {
    for (let i = 0; i < KOREAN_HANGUL.length; i++) {
        switch (font) {
            case SANS_SERIF_FONT:
                KOREAN_HANGUL[i].style.fontFamily = "'Apple SD Gothic Neo', 'Malgun Gothic', 'Dotum', 'Gulim', 'NanumBarunGothic YetHangul', 'NanumBarunGothic', 'UnDotum', 'Source Han Sans K', 'Source Han Sans KR', 'Noto Sans CJK KR', 'NanumGothic', 'NanumMyeongjo YetHangul', 'NanumMyeongjo', 'Batang', 'UnBatang', sans-serif";
                break;
            case SERIF_FONT:
                KOREAN_HANGUL[i].style.fontFamily = "'Apple SD Gothic Neo', 'Malgun Gothic', 'Dotum', 'Gulim', 'NanumBarunGothic YetHangul', 'NanumBarunGothic', 'UnDotum', 'Source Han Sans K', 'Source Han Sans KR', 'Noto Sans CJK KR', 'NanumGothic', 'NanumMyeongjo YetHangul', 'NanumMyeongjo', 'Batang', 'UnBatang', serif";
                break;
            case MONOSPACED_FONT:
                KOREAN_HANGUL[i].style.fontFamily = "'Apple SD Gothic Neo', 'Malgun Gothic', 'Dotum', 'Gulim', 'NanumBarunGothic YetHangul', 'NanumBarunGothic', 'UnDotum', 'Source Han Sans K', 'Source Han Sans KR', 'Noto Sans CJK KR', 'NanumGothic', 'NanumMyeongjo YetHangul', 'NanumMyeongjo', 'Batang', 'UnBatang', monospaced";
                break;
            case CURSIVE_FONT:
                KOREAN_HANGUL[i].style.fontFamily = "'Apple SD Gothic Neo', 'Malgun Gothic', 'Dotum', 'Gulim', 'NanumBarunGothic YetHangul', 'NanumBarunGothic', 'UnDotum', 'Source Han Sans K', 'Source Han Sans KR', 'Noto Sans CJK KR', 'NanumGothic', 'NanumMyeongjo YetHangul', 'NanumMyeongjo', 'Batang', 'UnBatang', cursive";
                break;
            default:
                console.log("Something went wrong!\nShutting all systems down!");
                break;
            // End of switch block
        }
    }
    for (let i = 0; i < KOREAN_HANJA.length; i++) {
        switch (font) {
            case SANS_SERIF_FONT:
                KOREAN_HANJA[i].style.fontFamily = "'Apple SD Gothic Neo', 'Malgun Gothic', 'Dotum', 'Gulim', 'NanumBarunGothic YetHangul', 'NanumBarunGothic', 'UnDotum', 'Source Han Sans K', 'Source Han Sans KR', 'Noto Sans CJK KR', 'NanumGothic', 'NanumMyeongjo YetHangul', 'NanumMyeongjo', 'Batang', 'UnBatang', sans-serif";
                break;
            case SERIF_FONT:
                KOREAN_HANJA[i].style.fontFamily = "'Apple SD Gothic Neo', 'Malgun Gothic', 'Dotum', 'Gulim', 'NanumBarunGothic YetHangul', 'NanumBarunGothic', 'UnDotum', 'Source Han Sans K', 'Source Han Sans KR', 'Noto Sans CJK KR', 'NanumGothic', 'NanumMyeongjo YetHangul', 'NanumMyeongjo', 'Batang', 'UnBatang', serif";
                break;
            case MONOSPACED_FONT:
                KOREAN_HANJA[i].style.fontFamily = "'Apple SD Gothic Neo', 'Malgun Gothic', 'Dotum', 'Gulim', 'NanumBarunGothic YetHangul', 'NanumBarunGothic', 'UnDotum', 'Source Han Sans K', 'Source Han Sans KR', 'Noto Sans CJK KR', 'NanumGothic', 'NanumMyeongjo YetHangul', 'NanumMyeongjo', 'Batang', 'UnBatang', monospaced";
                break;
            case CURSIVE_FONT:
                KOREAN_HANJA[i].style.fontFamily = "'Apple SD Gothic Neo', 'Malgun Gothic', 'Dotum', 'Gulim', 'NanumBarunGothic YetHangul', 'NanumBarunGothic', 'UnDotum', 'Source Han Sans K', 'Source Han Sans KR', 'Noto Sans CJK KR', 'NanumGothic', 'NanumMyeongjo YetHangul', 'NanumMyeongjo', 'Batang', 'UnBatang', cursive";
                break;
            default:
                console.log("Something went wrong!\nShutting all systems down!");
                break;
            // End of switch block
        }
    }
    for (let i = 0; i < KOREAN_REVISED_ROMANIZATION.length; i++) {
        KOREAN_REVISED_ROMANIZATION[i].style.fontFamily = font;
    }
    for (let i = 0; i < KOREAN_MCCUNE_REISCHAUER_ROMANIZATION.length; i++) {
        KOREAN_MCCUNE_REISCHAUER_ROMANIZATION[i].style.fontFamily = font;
    }
    for (let i = 0; i < KOREAN_YALE_ROMANIZATION.length; i++) {
        KOREAN_YALE_ROMANIZATION[i].style.fontFamily = font;
    }
    for (let i = 0; i < KOREAN_KONTSEVICH_SYSTEM_CYRILLIC.length; i++) {
        KOREAN_KONTSEVICH_SYSTEM_CYRILLIC[i].style.fontFamily = font;
    }
    for (let i = 0; i < KOREAN_KONTSEVICH_SYSTEM_LATIN.length; i++) {
        KOREAN_KONTSEVICH_SYSTEM_LATIN[i].style.fontFamily = font;
    }
    return 0;
}

// Kyrgyz
const KYRGYZ = document.getElementsByClassName("kyrgyz");
const KYRGYZ_XINJIANG_ARABIC = document.getElementsByClassName("kyrgyz-arabic");
const KYRGYZ_ROMANIZATION = document.getElementsByClassName("kyrgyz-romanization");
function KyrgyzFontChange(font) {
    for (let i = 0; i < KYRGYZ.length; i++) {
        KYRGYZ[i].style.fontFamily = font;
    }
    for (let i = 0; i < KYRGYZ_XINJIANG_ARABIC.length; i++) {
        switch (font) {
            case SANS_SERIF_FONT:
                KYRGYZ_XINJIANG_ARABIC[i].style.fontFamily = "'Noto Naskh Arabic', 'Iranian Sans', 'Tahoma', 'Microsoft Sans Serif', 'Arial Unicode MS', sans-serif";
                break;
            case SERIF_FONT:
                KYRGYZ_XINJIANG_ARABIC[i].style.fontFamily = "'Noto Naskh Arabic', 'Iranian Sans', 'Tahoma', 'Microsoft Sans Serif', 'Arial Unicode MS', serif";
                break;
            case MONOSPACED_FONT:
                KYRGYZ_XINJIANG_ARABIC[i].style.fontFamily = "'Noto Naskh Arabic', 'Iranian Sans', 'Tahoma', 'Microsoft Sans Serif', 'Arial Unicode MS', monospaced";
                break;
            case CURSIVE_FONT:
                KYRGYZ_XINJIANG_ARABIC[i].style.fontFamily = "'Noto Naskh Arabic', 'Iranian Sans', 'Tahoma', 'Microsoft Sans Serif', 'Arial Unicode MS', cursive";
                break;
            default:
                console.log("Something went wrong!\nShutting all systems down!");
                break;
            // End of switch block
        }
    }
    for (let i = 0; i < KYRGYZ_ROMANIZATION.length; i++) {
        KYRGYZ_ROMANIZATION[i].style.fontFamily = font;
    }
    return 0;
}

// -----------------------------------------------------------------------------

// ------ Languages from Ten'en Project ------ //

// Bhonmesh
const BHONMESH = document.getElementsByClassName("bhonmesh");
const BHONMESH_ROMANIZATION = document.getElementsByClassName("bhonmesh-romanization");
function BhonmeshFontChange(font) {
    for (let i = 0; i < BHONMESH.length; i++) {
        switch (font) {
            case SANS_SERIF_FONT:
                BHONMESH[i].style.fontFamily = "'Chandas', 'Sanskrit Text', 'Kurinto Sans', 'Mangal', 'Noto Sans Devanagari', sans-serif";
                break;
            case SERIF_FONT:
                BHONMESH[i].style.fontFamily = "'Chandas', 'Sanskrit Text', 'Kurinto Text', 'Mangal', 'Noto Serif Devanagari', serif";
                break;
            case MONOSPACED_FONT:
                BHONMESH[i].style.fontFamily = "'Chandas', 'Sanskrit Text', 'Kurinto Sans', 'Mangal', 'Noto Sans Devanagari', monospaced";
                break;
            case CURSIVE_FONT:
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
function FrualbuqashFontChange(font) {
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
function IlbaskFontChange(font) {
    for (let i = 0; i < ILBASK_SPALMEAAKELN.length; i++) {
        ILBASK_SPALMEAAKELN[i].style.fontFamily = font;
    }
    for (let i = 0; i < ILBASK_ELESUUKELN.length; i++) {
        switch (font) {
            case SANS_SERIF_FONT:
                ILBASK_ELESUUKELN[i].style.fontFamily = "'Menk Hawang Tig', 'Menk Qagan Tig', 'Menk Garqag Tig', 'Menk Har_a Tig', 'Menk Scnin Tig', 'Oyun Gurban Ulus Tig', 'Oyun Qagan Tig', 'Oyun Garqag Tig', 'Oyun Har_a Tig', 'Oyun Scnin Tig', 'Oyun Agula Tig', 'Mongolian Baiti', 'Mongolian Universal White', 'Mongol Usug', 'Mongolian White', 'MongolianScript', 'Code2000', 'Menksoft Qagan', 'Noto Sans Mongolian', sans-serif";
                break;
            case SERIF_FONT:
                ILBASK_ELESUUKELN[i].style.fontFamily = "'Menk Hawang Tig', 'Menk Qagan Tig', 'Menk Garqag Tig', 'Menk Har_a Tig', 'Menk Scnin Tig', 'Oyun Gurban Ulus Tig', 'Oyun Qagan Tig', 'Oyun Garqag Tig', 'Oyun Har_a Tig', 'Oyun Scnin Tig', 'Oyun Agula Tig', 'Mongolian Baiti', 'Mongolian Universal White', 'Mongol Usug', 'Mongolian White', 'MongolianScript', 'Code2000', 'Menksoft Qagan', 'Noto Sans Mongolian', serif";
                break;
            case MONOSPACED_FONT:
                ILBASK_ELESUUKELN[i].style.fontFamily = "'Menk Hawang Tig', 'Menk Qagan Tig', 'Menk Garqag Tig', 'Menk Har_a Tig', 'Menk Scnin Tig', 'Oyun Gurban Ulus Tig', 'Oyun Qagan Tig', 'Oyun Garqag Tig', 'Oyun Har_a Tig', 'Oyun Scnin Tig', 'Oyun Agula Tig', 'Mongolian Baiti', 'Mongolian Universal White', 'Mongol Usug', 'Mongolian White', 'MongolianScript', 'Code2000', 'Menksoft Qagan', 'Noto Sans Mongolian', monospaced";
                break;
            case CURSIVE_FONT:
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
function MhuislaneanFontChange(font) {
    for (let i = 0; i < MHUISLANEAN.length; i++) {
        MHUISLANEAN[i].style.fontFamily = font;
    }
    return 0;
}

// Neph
const NEPH = document.getElementsByClassName("neph");
function NephFontChange(font) {
    for (let i = 0; i < NEPH.length; i++) {
        NEPH[i].style.fontFamily = font;
    }
    return 0;
}

// Nhimesh
const NHIMESH = document.getElementsByClassName("nhimesh");
const NHIMESH_ROMANIZATION = document.getElementsByClassName("nhimesh-romanization");
function NhimeshFontChange(font) {
    for (let i = 0; i < NHIMESH.length; i++) {
        switch (font) {
            case SANS_SERIF_FONT:
                NHIMESH[i].style.fontFamily = "'SantakkuM', 'Santakku', 'Kurinto Sans Aux', 'Segoe UI Historic', 'Noto Sans Cuneiform', sans-serif";
                break;
            case SERIF_FONT:
                NHIMESH[i].style.fontFamily = "'SantakkuM', 'Santakku', 'Kurinto Sans Aux', 'Segoe UI Historic', 'Noto Sans Cuneiform', serif";
                break;
            case MONOSPACED_FONT:
                NHIMESH[i].style.fontFamily = "'SantakkuM', 'Santakku', 'Kurinto Sans Aux', 'Segoe UI Historic', 'Noto Sans Cuneiform', monospaced";
                break;
            case CURSIVE_FONT:
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
function PraanbabiFontChange(font) {
    for (let i = 0; i < PRAANBABI.length; i++) {
        PRAANBABI[i].style.fontFamily = font;
    }
    return 0;
}

// Uokramathi
const UOKRAMATHI = document.getElementsByClassName("uokramathi");
function UokramathiFontChange(font) {
    for (let i = 0; i < UOKRAMATHI.length; i++) {
        UOKRAMATHI[i].style.fontFamily = font;
    }
    return 0;
}

// Standard Uuptari
const UUPTARI_UUP_SCRIPT = document.getElementsByClassName("uuptari-uup-script");
const UUPTARI_KANSE_ALPHABET = document.getElementsByClassName("uuptari-kanse-alphabet");
const UUPTARI_SHITO_SCRIPT = document.getElementsByClassName("uuptari-shito-script");
function StandardUuptariFontChange(font) {
    for (let i = 0; i < UUPTARI_UUP_SCRIPT.length; i++) {
        switch (font) {
            case SANS_SERIF_FONT:
                UUPTARI_UUP_SCRIPT[i].style.fontFamily = "'Noto Naskh Arabic UI', 'Noto Naskh Arabic', 'Iranian Sans', Tahoma, 'Microsoft Sans Serif', 'Arial Unicode MS', sans-serif";
                break;
            case SERIF_FONT:
                UUPTARI_UUP_SCRIPT[i].style.fontFamily = "'Noto Naskh Arabic UI', 'Noto Naskh Arabic', 'Iranian Serif', 'Times New Roman', Tahoma, 'Microsoft Sans Serif', 'Arial Unicode MS', serif";
                break;
            case MONOSPACED_FONT:
                UUPTARI_UUP_SCRIPT[i].style.fontFamily = "'Noto Naskh Arabic UI', 'Noto Naskh Arabic', 'Iranian Sans', Tahoma, 'Microsoft Sans Serif', 'Arial Unicode MS', monospaced";
                break;
            case CURSIVE_FONT:
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
            case SANS_SERIF_FONT:
                UUPTARI_SHITO_SCRIPT[i].style.fontFamily = "'Leelawadee UI', Leelawadee, 'Arial Unicode MS', 'Code2000', sans-serif";
                break;
            case SERIF_FONT:
                UUPTARI_SHITO_SCRIPT[i].style.fontFamily = "'Leelawadee UI', Leelawadee, 'Arial Unicode MS', 'Code2000', serif";
                break;
            case MONOSPACED_FONT:
                UUPTARI_SHITO_SCRIPT[i].style.fontFamily = "'Leelawadee UI', Leelawadee, 'Arial Unicode MS', 'Code2000', monospaced";
                break;
            case CURSIVE_FONT:
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
function UpkvikhraUuptariFontChange(font) {
    for (let i = 0; i < UUPTARI_UPKVIKHRAKANSE_ALPHABET.length; i++) {
        UUPTARI_UPKVIKHRAKANSE_ALPHABET[i].style.fontFamily = font;
    }
    return 0;
}

// Xoabbagdosa
const XOABBAGDOSA = document.getElementsByClassName("xoabbagdosa");
function XoabbagdosaFontChange(font) {
    for (let i = 0; i < XOABBAGDOSA.length; i++) {
        XOABBAGDOSA[i].style.fontFamily = font;
    }
    return 0;
}

// Yicaexsese
const YICAEXSESE = document.getElementsByClassName("yicaexsese");
const YICAEXSESE_YI_ALPHABETICS = document.getElementsByClassName("yicaexsese-romanization");
function YicaexseseFontChange(font) {
    for (let i = 0; i < YICAEXSESE.length; i++) {
        switch (font) {
            case SANS_SERIF_FONT:
                YICAEXSESE[i].style.fontFamily = "'Tibetan Machine Uni', 'BabelStone Tibetan Slim', 'BabelStone Tibetan', 'Noto Serif Tibetan', sans-serif";
                break;
            case SERIF_FONT:
                YICAEXSESE[i].style.fontFamily = "'Tibetan Machine Uni', 'BabelStone Tibetan Slim', 'BabelStone Tibetan', 'Noto Serif Tibetan', serif";
                break;
            case MONOSPACED_FONT:
                YICAEXSESE[i].style.fontFamily = "'Tibetan Machine Uni', 'BabelStone Tibetan Slim', 'BabelStone Tibetan', 'Noto Serif Tibetan', monospaced";
                break;
            case CURSIVE_FONT:
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
function ZhuzuriFontChange(font) {
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

// Meta functions for this font change stuff (*pain*)

function NaturalLangFontA(font) {
    AbkhazFontChange(font);
    AdygheFontChange(font);
    AkkadianFontChange(font);
    AlbanianFontChange(font);
    ArabicFontChange(font);
    ArmenianFontChange(font);
    AssameseFontChange(font);
    AzerbaijaniFontChange(font);
    return 0;
}

function NaturalLangFontB(font) {
    BalineseFontChange(font);
    BengaliFontChange(font);
    BosnianFontChange(font);
    BurmeseFontChange(font);
    return 0;
}

function NaturalLangFontC(font) {
    MandarinChineseFontChange(font);
    CantoneseFontChange(font);
    HakkaChineseFontChange(font);
    MinBeiChineseFontChange(font);
    MinDongChineseFontChange(font);
    TaiwaneseHokkienFontChange(font);
    TeochewChineseFontChange(font);
    CrimeanTatarFontChange(font);
    CroatianFontChange(font);
    return 0;
}

function NaturalLangFontD(font) {
    DanishFontChange(font);
    DhivehiFontChange(font);
    DutchFontChange(font);
    return 0;
}

function NaturalLangFontE(font) {
    EstonianFontChange(font);
    return 0;
}

function NaturalLangFontF(font) {
    FinnishFontChange(font);
    FrenchFontChange(font);
    return 0;
}

function NaturalLangFontG(font) {
    GeorgianFontChange(font);
    GermanFontChange(font);
    PolytonicGreekFontChange(font);
    MonotonicGreekFontChange(font);
    GujaratiFontChange(font);
    return 0;
}

function NaturalLangFontH(font) {
    HebrewFontChange(font);
    HindiFontChange(font);
    HittiteFontChange(font);
    HungarianFontChange(font);
    return 0;
}

function NaturalLangFontI(font) {
    IcelandicFontChange(font);
    IndonesianFontChange(font);
    ItalianFontChange(font);
    return 0;
}

function NaturalLangFontJ(font) {
    JapaneseFontChange(font);
    JavaneseFontChange(font);
    return 0;
}

function NaturalLangFontK(font) {
    KabardianFontChange(font);
    KannadaFontChange(font);
    KazakhFontChange(font);
    KhmerFontChange(font);
    KoreanFontChange(font);
    KyrgyzFontChange(font);
    return 0;
}

function NaturalLangFontL(font) {
    return 0;
}

function NaturalLangFontM(font) {
    return 0;
}

function NaturalLangFontN(font) {
    return 0;
}

function NaturalLangFontO(font) {
    return 0;
}

function NaturalLangFontP(font) {
    return 0;
}

function NaturalLangFontQ(font) {
    return 0;
}

function NaturalLangFontR(font) {
    return 0;
}

function NaturalLangFontS(font) {
    return 0;
}

function NaturalLangFontT(font) {
    return 0;
}

function NaturalLangFontU(font) {
    return 0;
}

function NaturalLangFontV(font) {
    return 0;
}

function NaturalLangFontW(font) {
    return 0;
}

function NaturalLangFontX(font) {
    return 0;
}

function NaturalLangFontY(font) {
    return 0;
}

function NaturalLangFontZ(font) {
    return 0;
}

function NaturalLangFont(font) {
    NaturalLangFontA(font);
    NaturalLangFontB(font);
    NaturalLangFontC(font);
    NaturalLangFontD(font);
    NaturalLangFontE(font);
    NaturalLangFontF(font);
    NaturalLangFontG(font);
    NaturalLangFontH(font);
    NaturalLangFontI(font);
    NaturalLangFontJ(font);
    NaturalLangFontK(font);
    NaturalLangFontL(font);
    NaturalLangFontM(font);
    NaturalLangFontN(font);
    NaturalLangFontO(font);
    NaturalLangFontP(font);
    NaturalLangFontQ(font);
    NaturalLangFontR(font);
    NaturalLangFontS(font);
    NaturalLangFontT(font);
    NaturalLangFontU(font);
    NaturalLangFontV(font);
    NaturalLangFontW(font);
    NaturalLangFontX(font);
    NaturalLangFontY(font);
    NaturalLangFontZ(font);
    return 0;
}

function TenenLangFont(font) {
    BhonmeshFontChange(font);
    FrualbuqashFontChange(font);
    IlbaskFontChange(font);
    MhuislaneanFontChange(font);
    NephFontChange(font);
    NhimeshFontChange(font);
    PraanbabiFontChange(font);
    UokramathiFontChange(font);
    StandardUuptariFontChange(font);
    UpkvikhraUuptariFontChange(font);
    XoabbagdosaFontChange(font);
    YicaexseseFontChange(font);
    ZhuzuriFontChange(font);
    return 0;
}

function LanguageFontChange(font) {
    StoryBodyFontChange(font);
    IpaFontChange(font);
    NaturalLangFont(font)
    TenenLangFont(font)
    return 0;
}

// Font selector

const FONT_SELECT = document.querySelector(".font-select");
FONT_SELECT.addEventListener("change", (event) => {
    let selectedFont = event.target.value;
    switch (selectedFont) {
        case "default":
            LanguageFontChange(SANS_SERIF_FONT);
            console.log("Story font has been switched to a sans-serif font.\nHappy reading!");
            break;
        case "serif":
            LanguageFontChange(SERIF_FONT);
            console.log("Story font has been switched to a serif font.\nHappy reading!");
            break;
        case "monospaced":
            LanguageFontChange(MONOSPACED_FONT);
            console.log("Story font has been switched to a monospaced font.\nHappy reading!");
            break;
        case "cursive":
            LanguageFontChange(CURSIVE_FONT);
            console.log("Story font has been switched to a cursive font.\nHappy reading!");
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

/* >>>>>> END OF FILE <<<<<< */
