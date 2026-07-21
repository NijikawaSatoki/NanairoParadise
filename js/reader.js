/* =============================================================================
 * Story Reader Scripts
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

const SYSTEM_ERROR = "Something went wrong!\nShutting all systems down!";

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

// <<< Langauges whose English names start with "A" >>>

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
                console.log(SYSTEM_ERROR);
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
    let fontPersoArabicScript = "'Noto Naskh Arabic UI', 'Noto Naskh Arabic', 'Iranian Sans', 'Tahoma', 'Microsoft Sans Serif', 'Arial Unicode MS'";
    for (let i = 0; i < ARABIC.length; i++) {
        switch (font) {
            case SANS_SERIF_FONT:
                ARABIC[i].style.fontFamily = `${fontPersoArabicScript}, sans-serif`;
                break;
            case SERIF_FONT:
                ARABIC[i].style.fontFamily = `${fontPersoArabicScript}, serif`;
                break;
            case MONOSPACED_FONT:
                ARABIC[i].style.fontFamily = `${fontPersoArabicScript}, monospaced`;
                break;
            case CURSIVE_FONT:
                ARABIC[i].style.fontFamily = `${fontPersoArabicScript}, cursive`;
                break;
            default:
                console.log(SYSTEM_ERROR);
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
    let fontArmenianAlphabetSansSerif = "'GHEA Grapalat', 'Mshtakan', 'Arial', 'Segoe UI', 'Tahoma', 'Arian AMU', 'DejaVu Sans'";
    let fontArmenianAlphabetSerif = "'GHEA Mariam', 'Mshtakan', 'Arial', 'Segoe UI', 'Tahoma', 'Arian AMU', 'DejaVu Sans'";
    for (let i = 0; i < ARMENIAN.length; i++) {
        switch (font) {
            case SANS_SERIF_FONT:
                ARMENIAN[i].style.fontFamily = `${fontArmenianAlphabetSansSerif}, sans-serif`;
                break;
            case SERIF_FONT:
                ARMENIAN[i].style.fontFamily = `${fontArmenianAlphabetSerif}, serif`;
                break;
            case MONOSPACED_FONT:
                ARMENIAN[i].style.fontFamily = `${fontArmenianAlphabetSansSerif}, monospaced`;
                break;
            case CURSIVE_FONT:
                ARMENIAN[i].style.fontFamily = `${fontArmenianAlphabetSansSerif}, cursive`;
                break;
            default:
                console.log(SYSTEM_ERROR);
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
    let fontAssameseScript = "'Bangla Sangam MN', 'UniBangla', 'Code2000', 'Likhan', 'UT Bengali Dhaka', 'Vrinda', 'Noto Sans Bengali'";
    for (let i = 0; i < ASSAMESE.length; i++) {
        switch (font) {
            case SANS_SERIF_FONT:
                ASSAMESE[i].style.fontFamily = `${fontAssameseScript}, sans-serif`;
                break;
            case SERIF_FONT:
                ASSAMESE[i].style.fontFamily = `${fontAssameseScript}, serif`;
                break;
            case MONOSPACED_FONT:
                ASSAMESE[i].style.fontFamily = `${fontAssameseScript}, monospaced`;
                break;
            case CURSIVE_FONT:
                ASSAMESE[i].style.fontFamily = `${fontAssameseScript}, cursive`;
                break;
            default:
                console.log(SYSTEM_ERROR);
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
    let fontPersoArabicScript = "'Iranian Sans', 'Geeza Pro', 'Tahoma'";
    for (let i = 0; i < AZERBAIJANI_IRAN.length; i++) {
        switch (font) {
            case SANS_SERIF_FONT:
                AZERBAIJANI_IRAN[i].style.fontFamily = `${fontPersoArabicScript}, sans-serif`;
                break;
            case SERIF_FONT:
                AZERBAIJANI_IRAN[i].style.fontFamily = `${fontPersoArabicScript}, serif`;
                break;
            case MONOSPACED_FONT:
                AZERBAIJANI_IRAN[i].style.fontFamily = `${fontPersoArabicScript}, monospaced`;
                break;
            case CURSIVE_FONT:
                AZERBAIJANI_IRAN[i].style.fontFamily = `${fontPersoArabicScript}, cursive`;
                break;
            default:
                console.log(SYSTEM_ERROR);
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

// <<< Langauges whose English names start with "B" >>>

// Balinese
const BALINESE = document.getElementsByClassName("balinese");
const BALINESE_ROMANIZATION = document.getElementsByClassName("balinese-romanization");
function BalineseFontChange(font) {
    let fontBalineseFont = "'Noto Sans Balinese'";
    for (let i = 0; i < BALINESE.length; i++) {
        switch (font) {
            case SANS_SERIF_FONT:
                BALINESE[i].style.fontFamily = `${fontBalineseFont}, sans-serif`;
                break;
            case SERIF_FONT:
                BALINESE[i].style.fontFamily = `${fontBalineseFont}, serif`;
                break;
            case MONOSPACED_FONT:
                BALINESE[i].style.fontFamily = `${fontBalineseFont}, monospaced`;
                break;
            case CURSIVE_FONT:
                BALINESE[i].style.fontFamily = `${fontBalineseFont}, cursive`;
                break;
            default:
                console.log(SYSTEM_ERROR);
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
    let fontBengaliScript = "'Bangla Sangam MN', 'UniBangla', 'Code2000', 'Likhan', 'UT Bengali Dhaka', 'Vrinda', 'Noto Sans Bengali'";
    for (let i = 0; i < BENGALI.length; i++) {
        switch (font) {
            case SANS_SERIF_FONT:
                BENGALI[i].style.fontFamily = `${fontBengaliScript}, sans-serif`;
                break;
            case SERIF_FONT:
                BENGALI[i].style.fontFamily = `${fontBengaliScript}, serif`;
                break;
            case MONOSPACED_FONT:
                BENGALI[i].style.fontFamily = `${fontBengaliScript}, monospaced`;
                break;
            case CURSIVE_FONT:
                BENGALI[i].style.fontFamily = `${fontBengaliScript}, cursive`;
                break;
            default:
                console.log(SYSTEM_ERROR);
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
    let fontBurmeseScript = "'Pyidaungsu', 'TharLon', 'Padauk', 'Myanmar Text', 'Myanmar3', 'Myanmar2', 'Myanmar1', 'ParabaikSans', 'MyMyanmar', 'Noto Sans Myanmar'";
    for (let i = 0; i < BURMESE.length; i++) {
        switch (font) {
            case SANS_SERIF_FONT:
                BURMESE[i].style.fontFamily = `${fontBurmeseScript}, sans-serif`;
                break;
            case SERIF_FONT:
                BURMESE[i].style.fontFamily = `${fontBurmeseScript}, serif`;
                break;
            case MONOSPACED_FONT:
                BURMESE[i].style.fontFamily = `${fontBurmeseScript}, monospaced`;
                break;
            case CURSIVE_FONT:
                BURMESE[i].style.fontFamily = `${fontBurmeseScript}, cursive`;
                break;
            default:
                console.log(SYSTEM_ERROR);
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

// <<< Langauges whose English names start with "C" >>>

// Hanzi
const TRADITIONAL_CHINESE = document.getElementsByClassName("traditional-chinese");
const SIMPLIFIED_CHINESE = document.getElementsByClassName("simplified-chinese");
function ChineseCharacterFont(font) {
    let fontTraditionalChineseCharacters = "'PingFang TC', 'Source Han Sans TC', 'Source Han Sans TW', 'Noto Sans CJK TC', 'Microsoft Jhenghei', 'MOESongUN', 'PMingLiU', 'PMingLiU-ExtB', 'MingLiU', 'MingLiU-ExtB', 'Ming', 'Heiti TC', 'HanaMinA', 'HanaMinB'";
    for (let i = 0; i < TRADITIONAL_CHINESE.length; i++) {
        switch (font) {
            case SANS_SERIF_FONT:
                TRADITIONAL_CHINESE[i].style.fontFamily = `${fontTraditionalChineseCharacters}, sans-serif`;
                break;
            case SERIF_FONT:
                TRADITIONAL_CHINESE[i].style.fontFamily = `${fontTraditionalChineseCharacters}, serif`;
                break;
            case MONOSPACED_FONT:
                TRADITIONAL_CHINESE[i].style.fontFamily = `${fontTraditionalChineseCharacters}, monospaced`;
                break;
            case CURSIVE_FONT:
                TRADITIONAL_CHINESE[i].style.fontFamily = `${fontTraditionalChineseCharacters}, cursive`;
                break;
            default:
                console.log(SYSTEM_ERROR);
                break;
            // End of switch block
        }
    }
    let fontSimplifiedChineseCharacters = "'PingFang SC', 'DengXian', 'Source Han Sans SC', 'Source Han Sans CN', 'Noto Sans CJK SC', 'Microsoft Yahei', 'SimHei', 'SimSun', 'NSimSun', 'SimSun-ExtB', 'Song','Heiti SC', 'HanaMinA', 'HanaMinB'";
    for (let i = 0; i < SIMPLIFIED_CHINESE.length; i++) {
        switch (font) {
            case SANS_SERIF_FONT:
                SIMPLIFIED_CHINESE[i].style.fontFamily = `${fontSimplifiedChineseCharacters}, sans-serif`;
                break;
            case SERIF_FONT:
                SIMPLIFIED_CHINESE[i].style.fontFamily = `${fontSimplifiedChineseCharacters}, serif`;
                break;
            case MONOSPACED_FONT:
                SIMPLIFIED_CHINESE[i].style.fontFamily = `${fontSimplifiedChineseCharacters}, monospaced`;
                break;
            case CURSIVE_FONT:
                SIMPLIFIED_CHINESE[i].style.fontFamily = `${fontSimplifiedChineseCharacters}, cursive`;
                break;
            default:
                console.log(SYSTEM_ERROR);
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
    let fontZhuyinFuhao = "'PingFang TC', 'Source Han Sans TC', 'Source Han Sans TW', 'Noto Sans CJK TC', 'Microsoft Jhenghei', 'MOESongUN', 'PMingLiU', 'PMingLiU-ExtB', 'MingLiU', 'MingLiU-ExtB', 'Ming', 'Heiti TC', 'HanaMinA', 'HanaMinB'";
    for (let i = 0; i < ZHUYIN_FUHAO.length; i++) {
        switch (font) {
            case SANS_SERIF_FONT:
                ZHUYIN_FUHAO[i].style.fontFamily = `${fontZhuyinFuhao}, sans-serif`;
                break;
            case SERIF_FONT:
                ZHUYIN_FUHAO[i].style.fontFamily = `${fontZhuyinFuhao}, serif`;
                break;
            case MONOSPACED_FONT:
                ZHUYIN_FUHAO[i].style.fontFamily = `${fontZhuyinFuhao}, monospaced`;
                break;
            case CURSIVE_FONT:
                ZHUYIN_FUHAO[i].style.fontFamily = `${fontZhuyinFuhao}, cursive`;
                break;
            default:
                console.log(SYSTEM_ERROR);
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

// <<< Langauges whose English names start with "D" >>>

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
    let fontThaanaScript = "'Noto Sans Thaana'";
    for (let i = 0; i < DHIVEHI.length; i++) {
        switch (font) {
            case SANS_SERIF_FONT:
                DHIVEHI[i].style.fontFamily = `${fontThaanaScript}, sans-serif`;
                break;
            case SERIF_FONT:
                DHIVEHI[i].style.fontFamily = `${fontThaanaScript}, serif`;
                break;
            case MONOSPACED_FONT:
                DHIVEHI[i].style.fontFamily = `${fontThaanaScript}, monospaced`;
                break;
            case CURSIVE_FONT:
                DHIVEHI[i].style.fontFamily = `${fontThaanaScript}, cursive`;
                break;
            default:
                console.log(SYSTEM_ERROR);
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

// <<< Langauges whose English names start with "E" >>>

// Estonian
const ESTONIAN = document.getElementsByClassName("estonian");
function EstonianFontChange(font) {
    for (let i = 0; i < ESTONIAN.length; i++) {
        ESTONIAN[i].style.fontFamily = font;
    }
    return 0;
}

// -----------------------------------------------------------------------------

// <<< Langauges whose English names start with "F" >>>

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

// <<< Langauges whose English names start with "G" >>>

// Georgian
const GEORGIAN = document.getElementsByClassName("georgian");
const GEORGIAN_ROMANIZATION = document.getElementsByClassName("georgian-romanization");
function GeorgianFontChange(font) {
    let fontGeorgianAlphabet = "'DejaVu Sans', 'Arial Unicode MS', 'Sylfaen', 'Noto Sans Georgian'";
    for (let i = 0; i < GEORGIAN.length; i++) {
        switch (font) {
            case SANS_SERIF_FONT:
                GEORGIAN[i].style.fontFamily = `${fontGeorgianAlphabet}, sans-serif`;
                break;
            case SERIF_FONT:
                GEORGIAN[i].style.fontFamily = `${fontGeorgianAlphabet}, serif`;
                break;
            case MONOSPACED_FONT:
                GEORGIAN[i].style.fontFamily = `${fontGeorgianAlphabet}, monospaced`;
                break;
            case CURSIVE_FONT:
                GEORGIAN[i].style.fontFamily = `${fontGeorgianAlphabet}, cursive`;
                break;
            default:
                console.log(SYSTEM_ERROR);
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
    let fontGujaratiScript = "'Noto Sans Gujarati', 'Gujarati Sangam MN', 'Gujarati MT', 'Shruti', 'Lucida Grande', 'Arial Unicode MS', 'Lucida Sans Unicode', 'Code2000', 'TITUS Cyberbit Basic', 'Chrysanthi Unicode', 'Bitstream Cyberbit', 'Bitstream CyberBase', 'Bitstream Vera', 'Visual Geez Unicode'";
    for (let i = 0; i < GUJARATI.length; i++) {
        switch (font) {
            case SANS_SERIF_FONT:
                GUJARATI[i].style.fontFamily = `${fontGujaratiScript}, sans-serif`;
                break;
            case SERIF_FONT:
                GUJARATI[i].style.fontFamily = `${fontGujaratiScript}, serif`;
                break;
            case MONOSPACED_FONT:
                GUJARATI[i].style.fontFamily = `${fontGujaratiScript}, monospaced`;
                break;
            case CURSIVE_FONT:
                GUJARATI[i].style.fontFamily = `${fontGujaratiScript}, cursive`;
                break;
            default:
                console.log(SYSTEM_ERROR);
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

// <<< Langauges whose English names start with "H" >>>

// Hebrew
const HEBREW = document.getElementsByClassName("hebrew");
const HEBREW_SBL_TRANSLITERATION = document.getElementsByClassName("hebrew-sbl-transliteration");
function HebrewFontChange(font) {
    let fontHebrewScript = "'SBL Hebrew', 'SBL BibLit', 'Taamey David CLM', 'Taamey Frank CLM', 'Alef', 'Noto Sans Hebrew', 'Narkisim', 'Miriam', 'Kinryu', 'Arial Hebrew', 'Arial', 'Adobe Hebrew'";
    for (let i = 0; i < HEBREW.length; i++) {
        switch (font) {
            case SANS_SERIF_FONT:
                HEBREW[i].style.fontFamily = `${fontHebrewScript}, sans-serif`;
                break;
            case SERIF_FONT:
                HEBREW[i].style.fontFamily = `${fontHebrewScript}, serif`;
                break;
            case MONOSPACED_FONT:
                HEBREW[i].style.fontFamily = `${fontHebrewScript}, monospaced`;
                break;
            case CURSIVE_FONT:
                HEBREW[i].style.fontFamily = `${fontHebrewScript}, cursive`;
                break;
            default:
                console.log(SYSTEM_ERROR);
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
    let fontDevanagari = "'Chandas', 'Tiro Devanagari Sanskrit', 'Sanskrit Text', 'Adobe Devanagari', 'Noto Serif Devanagari', 'Utsaah', 'Devanagari MT', 'Raghu', 'Gargi', 'JanaSanskrit', 'JanaHindi', 'Siddhanta', 'Noto Sans Devanagari'";
    for (let i = 0; i < HINDI.length; i++) {
        switch (font) {
            case SANS_SERIF_FONT:
                HINDI[i].style.fontFamily = `${fontDevanagari}, sans-serif`;
                break;
            case SERIF_FONT:
                HINDI[i].style.fontFamily = `${fontDevanagari}, serif`;
                break;
            case MONOSPACED_FONT:
                HINDI[i].style.fontFamily = `${fontDevanagari}, monospaced`;
                break;
            case CURSIVE_FONT:
                HINDI[i].style.fontFamily = `${fontDevanagari}, cursive`;
                break;
            default:
                console.log(SYSTEM_ERROR);
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
    let fontHittiteCuneiform = "'UllikummiA', 'Akkadian', 'FreeIdgSerif', 'CuneiformComposite', 'Segoe UI Historic'";
    for (let i = 0; i < HITTITE.length; i++) {
        switch (font) {
            case SANS_SERIF_FONT:
                HITTITE[i].style.fontFamily = `${fontHittiteCuneiform}, sans-serif`;
                break;
            case SERIF_FONT:
                HITTITE[i].style.fontFamily = `${fontHittiteCuneiform}, serif`;
                break;
            case MONOSPACED_FONT:
                HITTITE[i].style.fontFamily = `${fontHittiteCuneiform}, monospaced`;
                break;
            case CURSIVE_FONT:
                HITTITE[i].style.fontFamily = `${fontHittiteCuneiform}, cursive`;
                break;
            default:
                console.log(SYSTEM_ERROR);
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

// <<< Langauges whose English names start with "I" >>>

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

// <<< Langauges whose English names start with "J" >>>

// Japanese
const JAPANESE = document.getElementsByClassName("japanese");
const ROMAJI = document.getElementsByClassName("romaji");
function JapaneseFontChange(font) {
    let fontGothic = "'ヒラギノ角ゴ Pro W3', 'Hiragino Gothic Pro', 'Noto Sans CJK JP', 'Noto Sans JP', 'Kurinto Sans JP', 'ＭＳ ゴシック', 'MS Gothic'";
    let fontMincho = "'ヒラギノ明朝 Pro W3', 'Hiragino Mincho Pro', 'Noto Serif CJK JP', 'Noto Serif JP', 'Kurinto Text JP', 'ＭＳ ゴシック', 'MS Mincho'";
    let fontMaruGothic = "'ヒラギノ丸ゴ Pro W4', 'Hiragino Maru Gothic Pro', 'Noto Sans CJK JP', 'Noto Sans JP', 'Kurinto Mono JP', 'ＭＳ ゴシック', 'MS Gothic'";
    for (let i = 0; i < JAPANESE.length; i++) {
        switch (font) {
            case SANS_SERIF_FONT:
                JAPANESE[i].style.fontFamily = `${fontGothic}, sans-serif`;
                break;
            case SERIF_FONT:
                JAPANESE[i].style.fontFamily = `${fontMincho}, serif`;
                break;
            case MONOSPACED_FONT:
                JAPANESE[i].style.fontFamily = `${fontMaruGothic}, monospaced`;
                break;
            case CURSIVE_FONT:
                JAPANESE[i].style.fontFamily = `${fontMaruGothic}, cursive`;
                break;
            default:
                console.log(SYSTEM_ERROR);
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
    let fontJavaneseScript = "Tuladha Jejeg', 'Javanese Text', 'adjisaka', 'Noto Sans Javanese'";
    for (let i = 0; i < JAVANESE.length; i++) {
        switch (font) {
            case SANS_SERIF_FONT:
                JAVANESE[i].style.fontFamily = `${fontJavaneseScript}, sans-serif`;
                break;
            case SERIF_FONT:
                JAVANESE[i].style.fontFamily = `${fontJavaneseScript}, serif`;
                break;
            case MONOSPACED_FONT:
                JAVANESE[i].style.fontFamily = `${fontJavaneseScript}, monospaced`;
                break;
            case CURSIVE_FONT:
                JAVANESE[i].style.fontFamily = `${fontJavaneseScript}, cursive`;
                break;
            default:
                console.log(SYSTEM_ERROR);
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

// <<< Langauges whose English names start with "K" >>>

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
    let fontKannadaScript = "'Kannada Sangam MN', 'JanaKannada', 'Tunga', 'Kedage', 'RaghuKannada', 'Sampige', 'Arial Unicode MS', 'Code2000', 'Bitstream Cyberbit', 'Bitstream CyberBase', 'Noto Sans Kannada'";
    for (let i = 0; i < KANNADA.length; i++) {
        switch (font) {
            case SANS_SERIF_FONT:
                KANNADA[i].style.fontFamily = `${fontKannadaScript}, sans-serif`;
                break;
            case SERIF_FONT:
                KANNADA[i].style.fontFamily = `${fontKannadaScript}, serif`;
                break;
            case MONOSPACED_FONT:
                KANNADA[i].style.fontFamily = `${fontKannadaScript}, monospaced`;
                break;
            case CURSIVE_FONT:
                KANNADA[i].style.fontFamily = `${fontKannadaScript}, cursive`;
                break;
            default:
                console.log(SYSTEM_ERROR);
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
    let fontKhmerScript = "'Khmer OS', 'Khmer OS Content', 'Leelawadee UI', 'Noto Sans Khmer', 'Code2000', 'Khmer Mondulkiri U OT ls'";
    for (let i = 0; i < KHMER.length; i++) {
        switch (font) {
            case SANS_SERIF_FONT:
                KHMER[i].style.fontFamily = `${fontKhmerScript}, sans-serif`;
                break;
            case SERIF_FONT:
                KHMER[i].style.fontFamily = `${fontKhmerScript}, serif`;
                break;
            case MONOSPACED_FONT:
                KHMER[i].style.fontFamily = `${fontKhmerScript}, monospaced`;
                break;
            case CURSIVE_FONT:
                KHMER[i].style.fontFamily = `${fontKhmerScript}, cursive`;
                break;
            default:
                console.log(SYSTEM_ERROR);
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
    let fontHangul = "'Apple SD Gothic Neo', 'Malgun Gothic', 'Dotum', 'Gulim', 'NanumBarunGothic YetHangul', 'NanumBarunGothic', 'UnDotum', 'Source Han Sans K', 'Source Han Sans KR', 'Noto Sans CJK KR', 'NanumGothic', 'NanumMyeongjo YetHangul', 'NanumMyeongjo', 'Batang', 'UnBatang'";
    for (let i = 0; i < KOREAN_HANGUL.length; i++) {
        switch (font) {
            case SANS_SERIF_FONT:
                KOREAN_HANGUL[i].style.fontFamily = `${fontHangul}, sans-serif`;
                break;
            case SERIF_FONT:
                KOREAN_HANGUL[i].style.fontFamily = `${fontHangul}, serif`;
                break;
            case MONOSPACED_FONT:
                KOREAN_HANGUL[i].style.fontFamily = `${fontHangul}, monospaced`;
                break;
            case CURSIVE_FONT:
                KOREAN_HANGUL[i].style.fontFamily = `${fontHangul}, cursive`;
                break;
            default:
                console.log(SYSTEM_ERROR);
                break;
            // End of switch block
        }
    }
    let fontHanja = "'Apple SD Gothic Neo', 'Malgun Gothic', 'Dotum', 'Gulim', 'NanumBarunGothic YetHangul', 'NanumBarunGothic', 'UnDotum', 'Source Han Sans K', 'Source Han Sans KR', 'Noto Sans CJK KR', 'NanumGothic', 'NanumMyeongjo YetHangul', 'NanumMyeongjo', 'Batang', 'UnBatang'";
    for (let i = 0; i < KOREAN_HANJA.length; i++) {
        switch (font) {
            case SANS_SERIF_FONT:
                KOREAN_HANJA[i].style.fontFamily = `${fontHanja}, sans-serif`;
                break;
            case SERIF_FONT:
                KOREAN_HANJA[i].style.fontFamily = `${fontHanja}, serif`;
                break;
            case MONOSPACED_FONT:
                KOREAN_HANJA[i].style.fontFamily = `${fontHanja}, monospaced`;
                break;
            case CURSIVE_FONT:
                KOREAN_HANJA[i].style.fontFamily = `${fontHanja}, cursive`;
                break;
            default:
                console.log(SYSTEM_ERROR);
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
    let fontPersoArabicScript = "'Noto Naskh Arabic', 'Iranian Sans', 'Tahoma', 'Microsoft Sans Serif', 'Arial Unicode MS'";
    for (let i = 0; i < KYRGYZ_XINJIANG_ARABIC.length; i++) {
        switch (font) {
            case SANS_SERIF_FONT:
                KYRGYZ_XINJIANG_ARABIC[i].style.fontFamily = `${fontPersoArabicScript}, sans-serif`;
                break;
            case SERIF_FONT:
                KYRGYZ_XINJIANG_ARABIC[i].style.fontFamily = `${fontPersoArabicScript}, serif`;
                break;
            case MONOSPACED_FONT:
                KYRGYZ_XINJIANG_ARABIC[i].style.fontFamily = `${fontPersoArabicScript}, monospaced`;
                break;
            case CURSIVE_FONT:
                KYRGYZ_XINJIANG_ARABIC[i].style.fontFamily = `${fontPersoArabicScript}, cursive`;
                break;
            default:
                console.log(SYSTEM_ERROR);
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

// <<< Langauges whose English names start with "L" >>>

// Lao
const LAO = document.getElementsByClassName("laotian");
const LAO_RTGS_ROMANIZATION = document.getElementsByClassName("royal-thai-general-system-of-transcription-laotian-version");
const LAO_LIBRARY_OF_CONGRESS_ROMANIZATION = document.getElementsByClassName("library-of-congress-romanization-for-lao");
const LAO_BGN_PCGN_ROMANIZATION = document.getElementsByClassName("bgn-pcgn-romanization-for-lao");
function LaotianFontChange(font) {
    let fontLaotianScript = "'Phetsarath OT', 'Saysettha OT', 'JG Basic Lao Opentype', 'JG Basic2 Lao Opentype', 'JG LaoTimes Opentype', 'Phagnoum Lao Unicode Opentype', 'JG Lao Old Arial Opentype', 'DokChampa', 'Code2000', 'JG Lao Classic Opentype', 'Alice0 Unicode', 'Alice1 Unicode', 'Alice2 Unicode', 'Alice3 Unicode', 'Alice4 Unicode', 'Alice5 Unicode', 'Noto Sans Lao', 'Noto Sans Lao Looped'";
    for (let i = 0; i < LAO.length; i++) {
        switch (font) {
            case SANS_SERIF_FONT:
                LAO[i].style.fontFamily = `${fontLaotianScript}, sans-serif`;
                break;
            case SERIF_FONT:
                LAO[i].style.fontFamily = `${fontLaotianScript}, serif`;
                break;
            case MONOSPACED_FONT:
                LAO[i].style.fontFamily = `${fontLaotianScript}, monospaced`;
                break;
            case CURSIVE_FONT:
                LAO[i].style.fontFamily = `${fontLaotianScript}, cursive`;
                break;
            default:
                console.log(SYSTEM_ERROR);
                break;
            // End of switch block
        }
    }
    for (let i = 0; i < LAO_RTGS_ROMANIZATION.length; i++) {
        LAO_RTGS_ROMANIZATION[i].style.fontFamily = font;
    }
    for (let i = 0; i < LAO_LIBRARY_OF_CONGRESS_ROMANIZATION.length; i++) {
        LAO_LIBRARY_OF_CONGRESS_ROMANIZATION[i].style.fontFamily = font;
    }
    for (let i = 0; i < LAO_BGN_PCGN_ROMANIZATION.length; i++) {
        LAO_BGN_PCGN_ROMANIZATION[i].style.fontFamily = font;
    }
    return 0;
}

// Latin
const LATIN = document.getElementsByClassName("latin");
function LatinFontChange(font) {
    for (let i = 0; i < LATIN.length; i++) {
        LATIN[i].style.fontFamily = font;
    }
    return 0;
}

// Latvian
const LATVIAN = document.getElementsByClassName("latvian");
function LatvianFontChange(font) {
    for (let i = 0; i < LATVIAN.length; i++) {
        LATVIAN[i].style.fontFamily = font;
    }
    return 0;
}

// Lithuanian
const LITHUANIAN = document.getElementsByClassName("lithuanian");
function LithuanianFontChange(font) {
    for (let i = 0; i < LITHUANIAN.length; i++) {
        LITHUANIAN[i].style.fontFamily = font;
    }
    return 0;
}

// -----------------------------------------------------------------------------

// <<< Langauges whose English names start with "M" >>>

// Malay
const MALAY = document.getElementsByClassName("malay");
function MalayFontChange(font) {
    for (let i = 0; i < MALAY.length; i++) {
        MALAY[i].style.fontFamily = font;
    }
    return 0;
}

// Malayalam
const MALAYALAM = document.getElementsByClassName("malayalam");
const MALAYALAM_ISO_15919_ROMANIZATION = document.getElementsByClassName("malayalam-iso-15919-romanization");
function MalayalamFontChange(font) {
    let fontMalayalamScript = "'Malayalam Sangam MN', 'Kartika', 'Code2000', 'Lucida Grande', 'Arial Unicode MS', 'Lucida Sans Unicode', 'TITUS Cyberbit Basic', 'Chrysanthi Unicode', 'Bitstream Cyberbit', 'Bitstream CyberBase', 'Bitstream Vera', 'Visual Geez Unicode', 'Noto Sans Malayalam'";
    for (let i = 0; i < MALAYALAM.length; i++) {
        switch (font) {
            case SANS_SERIF_FONT:
                MALAYALAM[i].style.fontFamily = `${fontMalayalamScript}, sans-serif`;
                break;
            case SERIF_FONT:
                MALAYALAM[i].style.fontFamily = `${fontMalayalamScript}, serif`;
                break;
            case MONOSPACED_FONT:
                MALAYALAM[i].style.fontFamily = `${fontMalayalamScript}, monospaced`;
                break;
            case CURSIVE_FONT:
                MALAYALAM[i].style.fontFamily = `${fontMalayalamScript}, cursive`;
                break;
            default:
                console.log(SYSTEM_ERROR);
                break;
            // End of switch block
        }
    }
    for (let i = 0; i < MALAYALAM_ISO_15919_ROMANIZATION.length; i++) {
        MALAYALAM_ISO_15919_ROMANIZATION[i].style.fontFamily = font;
    }
    return 0;
}

// Marathi
const MARATHI = document.getElementsByClassName("marathi");
const MARATHI_ISO_15919_ROMANIZATION = document.getElementsByClassName("marathi-iso-15919-romanization");
function MarathiFontChange(font) {
    let fontDevanagari = "'Chandas', 'Tiro Devanagari Sanskrit', 'Sanskrit Text', 'Adobe Devanagari', 'Noto Serif Devanagari', 'Utsaah', 'Devanagari MT', 'Raghu', 'Gargi', 'JanaSanskrit', 'JanaHindi', 'Siddhanta', 'Noto Sans Devanagari'";
    for (let i = 0; i < MARATHI.length; i++) {
        switch (font) {
            case SANS_SERIF_FONT:
                MARATHI[i].style.fontFamily = `${fontDevanagari}, sans-serif`;
                break;
            case SERIF_FONT:
                MARATHI[i].style.fontFamily = `${fontDevanagari}, serif`;
                break;
            case MONOSPACED_FONT:
                MARATHI[i].style.fontFamily = `${fontDevanagari}, monospaced`;
                break;
            case CURSIVE_FONT:
                MARATHI[i].style.fontFamily = `${fontDevanagari}, cursive`;
                break;
            default:
                console.log(SYSTEM_ERROR);
                break;
            // End of switch block
        }
    }
    for (let i = 0; i < MARATHI_ISO_15919_ROMANIZATION.length; i++) {
        MARATHI_ISO_15919_ROMANIZATION[i].style.fontFamily = font;
    }
    return 0;
}

// Mongolian Cyrillic
const MONGOLIAN_CYRILLIC = document.getElementsByClassName("mongolian-cyrillic");
const MONGOLIAN_ROMANIZATION = document.getElementsByClassName("mongolian-romanization");
function MongolianFontChange(font) {
    for (let i = 0; i < MONGOLIAN_CYRILLIC.length; i++) {
        MONGOLIAN_CYRILLIC[i].style.fontFamily = font;
    }
    for (let i = 0; i < MONGOLIAN_ROMANIZATION.length; i++) {
        MONGOLIAN_ROMANIZATION[i].style.fontFamily = font;
    }
    return 0;
}

// Traditional Mongolian
const TRADITIONAL_MONGOLIAN = document.getElementsByClassName("traditional-mongolian");
const TRADITIONAL_MONGOLIAN_ROMANIZATION = document.getElementsByClassName("scholarly-romanization-for-traditional-mongolian");
function TraditionalMongolianFontChange(font) {
    let fontMongolianScript = "'Menk Hawang Tig', 'Menk Qagan Tig', 'Menk Garqag Tig', 'Menk Har_a Tig', 'Menk Scnin Tig', 'Oyun Gurban Ulus Tig', 'Oyun Qagan Tig', 'Oyun Garqag Tig', 'Oyun Har_a Tig', 'Oyun Scnin Tig', 'Oyun Agula Tig', 'Mongolian Baiti', 'Mongolian Universal White', 'Mongol Usug', 'Mongolian White', 'MongolianScript', 'Code2000', 'Menksoft Qagan', 'Noto Sans Mongolian'";
    for (let i = 0; i < TRADITIONAL_MONGOLIAN.length; i++) {
        switch (font) {
            case SANS_SERIF_FONT:
                TRADITIONAL_MONGOLIAN[i].style.fontFamily = `${fontMongolianScript}, sans-serif`;
                break;
            case SERIF_FONT:
                TRADITIONAL_MONGOLIAN[i].style.fontFamily = `${fontMongolianScript}, serif`;
                break;
            case MONOSPACED_FONT:
                TRADITIONAL_MONGOLIAN[i].style.fontFamily = `${fontMongolianScript}, monospaced`;
                break;
            case CURSIVE_FONT:
                TRADITIONAL_MONGOLIAN[i].style.fontFamily = `${fontMongolianScript}, cursive`;
                break;
            default:
                console.log(SYSTEM_ERROR);
                break;
            // End of switch block
        }
    }
    for (let i = 0; i < TRADITIONAL_MONGOLIAN_ROMANIZATION.length; i++) {
        TRADITIONAL_MONGOLIAN_ROMANIZATION[i].style.fontFamily = font;
    }
    return 0;
}

// Montenegrin
const MONTENEGRIN = document.getElementsByClassName("montenegrin-cyrillic");
const MONTENEGRIN_LATIN = document.getElementsByClassName("montengrin-latin");
function MontenegrinFontChange(font) {
    for (let i = 0; i < MONTENEGRIN.length; i++) {
        MONTENEGRIN[i].style.fontFamily = font;
    }
    for (let i = 0; i < MONTENEGRIN_LATIN.length; i++) {
        MONTENEGRIN_LATIN[i].style.fontFamily = font;
    }
    return 0;
}

// -----------------------------------------------------------------------------

// <<< Langauges whose English names start with "N" >>>

// Nepali
const NEPALI = document.getElementsByClassName("nepali");
const NEPALI_ISO_15919_ROMANIZATION = document.getElementsByClassName("nepali-iso-15919-romanization");
function NepaliFontChange(font) {
    let fontDevanagari = "'Chandas', 'Tiro Devanagari Sanskrit', 'Sanskrit Text', 'Adobe Devanagari', 'Noto Serif Devanagari', 'Utsaah', 'Devanagari MT', 'Raghu', 'Gargi', 'JanaSanskrit', 'JanaHindi', 'Siddhanta', 'Noto Sans Devanagari'";
    for (let i = 0; i < NEPALI.length; i++) {
        switch (font) {
            case SANS_SERIF_FONT:
                NEPALI[i].style.fontFamily = `${fontDevanagari}, sans-serif`;
                break;
            case SERIF_FONT:
                NEPALI[i].style.fontFamily = `${fontDevanagari}, serif`;
                break;
            case MONOSPACED_FONT:
                NEPALI[i].style.fontFamily = `${fontDevanagari}, monospaced`;
                break;
            case CURSIVE_FONT:
                NEPALI[i].style.fontFamily = `${fontDevanagari}, cursive`;
                break;
            default:
                console.log(SYSTEM_ERROR);
                break;
            // End of switch block
        }
    }
    for (let i = 0; i < NEPALI_ISO_15919_ROMANIZATION.length; i++) {
        NEPALI_ISO_15919_ROMANIZATION[i].style.fontFamily = font;
    }
    return 0;
}

// Norwegian
const NORWEGIAN_BOKMAL = document.getElementsByClassName("norwegian-bokmal");
const NORWEGIAN_NYNORSK = document.getElementsByClassName("norwegian-nynorsk");
function NorwegianFontChange(font) {
    for (let i = 0; i < NORWEGIAN_BOKMAL.length; i++) {
        NORWEGIAN_BOKMAL[i].style.fontFamily = font;
    }
    for (let i = 0; i < NORWEGIAN_NYNORSK.length; i++) {
        NORWEGIAN_NYNORSK[i].style.fontFamily = font;
    }
    return 0;
}

// -----------------------------------------------------------------------------

// <<< Langauges whose English names start with "O" >>>

// Odia
const ODIA = document.getElementsByClassName("odia");
const ODIA_ISO_15919_ROMANIZATION = document.getElementsByClassName("odia-iso-15919-romanization");
function OdiaFontChange(font) {
    let fontOdiaScript = "'Oriya Sangam MN', 'Noto Sans Oriya'";
    for (let i = 0; i < ODIA.length; i++) {
        switch (font) {
            case SANS_SERIF_FONT:
                ODIA[i].style.fontFamily = `${fontOdiaScript}, sans-serif`;
                break;
            case SERIF_FONT:
                ODIA[i].style.fontFamily = `${fontOdiaScript}, serif`;
                break;
            case MONOSPACED_FONT:
                ODIA[i].style.fontFamily = `${fontOdiaScript}, monospaced`;
                break;
            case CURSIVE_FONT:
                ODIA[i].style.fontFamily = `${fontOdiaScript}, cursive`;
                break;
            default:
                console.log(SYSTEM_ERROR);
                break;
            // End of switch block
        }
    }
    for (let i = 0; i < ODIA_ISO_15919_ROMANIZATION.length; i++) {
        ODIA_ISO_15919_ROMANIZATION[i].style.fontFamily = font;
    }
    return 0;
}

// Ossetian
const OSSETIAN = document.getElementsByClassName("ossetian");
const OSSETIAN_ROMANIZATION = document.getElementsByClassName("ossetian-romanization");
function OssetianFontChange(font) {
    for (let i = 0; i < OSSETIAN.length; i++) {
        OSSETIAN[i].style.fontFamily = font;
    }
    for (let i = 0; i < OSSETIAN_ROMANIZATION.length; i++) {
        OSSETIAN_ROMANIZATION[i].style.fontFamily = font;
    }
    return 0;
}

// -----------------------------------------------------------------------------

// <<< Langauges whose English names start with "P" >>>

// Persian
const FARSI = document.getElementsByClassName("farsi");
const FARSI_ROMANIZATION = document.getElementsByClassname("persian-iranian-romanization");
function FarsiFontChange(font) {
    let fontPersoArabicScript = "'Iranian Sans', 'Geeza Pro', 'Tahoma'";
    for (let i = 0; i < FARSI.length; i++) {
        switch (font) {
            case SANS_SERIF_FONT:
                FARSI[i].style.fontFamily = `${fontPersoArabicScript}, sans-serif`;
                break;
            case SERIF_FONT:
                FARSI[i].style.fontFamily = `${fontPersoArabicScript}, serif`;
                break;
            case MONOSPACED_FONT:
                FARSI[i].style.fontFamily = `${fontPersoArabicScript}, monospaced`;
                break;
            case CURSIVE_FONT:
                FARSI[i].style.fontFamily = `${fontPersoArabicScript}, cursive`;
                break;
            default:
                console.log(SYSTEM_ERROR);
                break;
            // End of switch block
        }
    }
    for (let i = 0; i < FARSI_ROMANIZATION.length; i++) {
        FARSI_ROMANIZATION[i].style.fontFamily = font;
    }
    return 0;
}
const DARI = document.getElementsByClassName("dari");
const DARI_ROMANIZATION = document.getElementsByClassName("persian-classical-romanization");
function DariFontChange(font) {
    let fontPersoArabicScript = "'Iranian Sans', 'Geeza Pro', 'Tahoma'";
    for (let i = 0; i < DARI.length; i++) {
        switch (font) {
            case SANS_SERIF_FONT:
                DARI[i].style.fontFamily = `${fontPersoArabicScript}, sans-serif`;
                break;
            case SERIF_FONT:
                DARI[i].style.fontFamily = `${fontPersoArabicScript}, serif`;
                break;
            case MONOSPACED_FONT:
                DARI[i].style.fontFamily = `${fontPersoArabicScript}, monospaced`;
                break;
            case CURSIVE_FONT:
                DARI[i].style.fontFamily = `${fontPersoArabicScript}, cursive`;
                break;
            default:
                console.log(SYSTEM_ERROR);
                break;
            // End of switch block
        }
    }
    for (let i = 0; i < DARI_ROMANIZATION.length; i++) {
        DARI_ROMANIZATION[i].style.fontFamily = font;
    }
    return 0;
}

// Polish
const POLISH = document.getElementsByClassName("polish");
function PolishFontChange(font) {
    for (let i = 0; i < POLISH.length; i++) {
        POLISH[i].style.fontFamily = font;
    }
    return 0;
}

// Punjabi
const PUNJABI_GURMUKHI = document.getElementsByClassName("punjabi-gurmukhi");
const PUNJABI_SHAHMUKHI = document.getElementsByClassName("punjabi-shahmukhi");
const PUNJABI_ROMANIZATION = document.getElementsByClassName("punjabi-romanization");
function PunjabiFontChange(font) {
    let fontGurmukhiScript = "'Gurmukhi MN', 'Gurmukhi MT', 'UT Punjabi Amritsar', 'Lucida Grande', 'Arial Unicode MS', 'Lucida Sans Unicode', 'Code2000', 'TITUS Cyberbit Basic', 'Chrysanthi Unicode', 'Bitstream Cyberbit', 'Bitstream CyberBase', 'Bitstream Vera', 'Visual Geez Unicode', 'Noto Sans Gurmukhi'";
    for (let i = 0; i < PUNJABI_GURMUKHI.length; i++) {
        switch (font) {
            case SANS_SERIF_FONT:
                PUNJABI_GURMUKHI[i].style.fontFamily = `${fontGurmukhiScript}, sans-serif`;
                break;
            case SERIF_FONT:
                PUNJABI_GURMUKHI[i].style.fontFamily = `${fontGurmukhiScript}, serif`;
                break;
            case MONOSPACED_FONT:
                PUNJABI_GURMUKHI[i].style.fontFamily = `${fontGurmukhiScript}, monospaced`;
                break;
            case CURSIVE_FONT:
                PUNJABI_GURMUKHI[i].style.fontFamily = `${fontGurmukhiScript}, cursive`;
                break;
            default:
                console.log(SYSTEM_ERROR);
                break;
            // End of switch block
        }
    }
    let fontPersoArabicScript = "'Awami Nastaliq', 'Noto Nastaliq Urdu', 'Tahoma', 'Arial Unicode MS', 'UT Cairo', 'UT Naskh'";
    for (let i = 0; i < PUNJABI_SHAHMUKHI.length; i++) {
        switch (font) {
            case SANS_SERIF_FONT:
                PUNJABI_SHAHMUKHI[i].style.fontFamily = `${fontPersoArabicScript}, sans-serif`;
                break;
            case SERIF_FONT:
                PUNJABI_SHAHMUKHI[i].style.fontFamily = `${fontPersoArabicScript}, serif`;
                break;
            case MONOSPACED_FONT:
                PUNJABI_SHAHMUKHI[i].style.fontFamily = `${fontPersoArabicScript}, monospaced`;
                break;
            case CURSIVE_FONT:
                PUNJABI_SHAHMUKHI[i].style.fontFamily = `${fontPersoArabicScript}, cursive`;
                break;
            default:
                console.log(SYSTEM_ERROR);
                break;
            // End of switch block
        }
    }
    for (let i = 0; i < PUNJABI_ROMANIZATION.length; i++) {
        PUNJABI_ROMANIZATION[i].style.fontFamily = font;
    }
    return 0;
}

// -----------------------------------------------------------------------------

// <<< Langauges whose English names start with "Q" >>>

// -----------------------------------------------------------------------------

// <<< Langauges whose English names start with "R" >>>

// Romanian
const ROMANIAN = document.getElementsByClassName("romanian");
function RomanianFontChange(font) {
    for (let i = 0; i < ROMANIAN.length; i++) {
        ROMANIAN[i].style.fontFamily = font;
    }
    return 0;
}

// Russian
const RUSSIAN = document.getElementsByClassName("russian");
const RUSSIAN_PRE_BOLSHEVIK_SPELLING = document.getElementsByClassName("russian-pre-1917-spelling");
const RUSSIAN_ROMANIZATION = document.getElementsByClassName("russian-romanization");
function RussianFontChange(font) {
    for (let i = 0; i < RUSSIAN.length; i++) {
        RUSSIAN[i].style.fontFamily = font;
    }
    for (let i = 0; i < RUSSIAN_PRE_BOLSHEVIK_SPELLING.length; i++) {
        RUSSIAN_PRE_BOLSHEVIK_SPELLING[i].style.fontFamily = font;
    }
    for (let i = 0; i < RUSSIAN_ROMANIZATION.length; i++) {
        RUSSIAN_ROMANIZATION[i].style.fontFamily = font;
    }
    return 0;
}

// -----------------------------------------------------------------------------

// <<< Langauges whose English names start with "S" >>>

// Sanskrit
const SANSKRIT = document.getElementsByClassName("sanskrit");
const SANSKRIT_IAST = document.getElementsByClassName("international-alphabet-of-sanskrit-transliteration");
function SanskritFontChange(font) {
    let fontDevanagari = "'Chandas', 'Tiro Devanagari Sanskrit', 'Sanskrit Text', 'Adobe Devanagari', 'Noto Serif Devanagari', 'Utsaah', 'Devanagari MT', 'Raghu', 'Gargi', 'JanaSanskrit', 'JanaHindi', 'Siddhanta', 'Noto Sans Devanagari'";
    for (let i = 0; i < SANSKRIT.length; i++) {
        switch (font) {
            case SANS_SERIF_FONT:
                SANSKRIT[i].style.fontFamily = `${fontDevanagari}, sans-serif`;
                break;
            case SERIF_FONT:
                SANSKRIT[i].style.fontFamily = `${fontDevanagari}, serif`;
                break;
            case MONOSPACED_FONT:
                SANSKRIT[i].style.fontFamily = `${fontDevanagari}, monospaced`;
                break;
            case CURSIVE_FONT:
                SANSKRIT[i].style.fontFamily = `${fontDevanagari}, cursive`;
                break;
            default:
                console.log(SYSTEM_ERROR);
                break;
            // End of switch block
        }
    }
    for (let i = 0; i < SANSKRIT_IAST.length; i++) {
        SANSKRIT_IAST[i].style.fontFamily = font;
    }
    return 0;
}

// Scottish Gaelic
const SCOTTISH_GAELIC = document.getElementsByClassName("scottish-gaelic");
function ScottishGaelicFontChange(font) {
    for (let i = 0; i < SCOTTISH_GAELIC.length; i++) {
        SCOTTISH_GAELIC[i].style.fontFamily = font;
    }
    return 0;
}

// Serbian
const SERBIAN_CYRILLIC = document.getElementsByClassName("serbian-cyrillic");
const SERBIAN_LATIN = document.getElementsByClassName("serbian-latin");
function SerbianFontChange(font) {
    for (let i = 0; i < SERBIAN_CYRILLIC.length; i++) {
        SERBIAN_CYRILLIC[i].style.fontFamily = font;
    }
    for (let i = 0; i < SERBIAN_LATIN.length; i++) {
        SERBIAN_LATIN[i].style.fontFamily = font;
    }
    return 0;
}

// Sindhi
const SINDHI = document.getElementsByClassName("sindhi-arabic");
const SINDHI_DEVANAGARI = document.getElementsByClassName("sindhi-devanagari");
const SINDHI_ISO_15919_ROMANIZATION = document.getElementsByClassName("sindhi-iso-15919-romanization");
function SindhiFontChange(font) {
    let fontPersoArabicScript = "'MB Sindhi', 'Tahoma', 'MBSarang Sattar', 'MB Bhitai Sattar', 'MB Lateefi', 'Ayaz Gul'";
    for (let i = 0; i < SINDHI.length; i++) {
        switch (font) {
            case SANS_SERIF_FONT:
                SINDHI[i].style.fontFamily = `${fontPersoArabicScript}, sans-serif`;
                break;
            case SERIF_FONT:
                SINDHI[i].style.fontFamily = `${fontPersoArabicScript}, serif`;
                break;
            case MONOSPACED_FONT:
                SINDHI[i].style.fontFamily = `${fontPersoArabicScript}, monospaced`;
                break;
            case CURSIVE_FONT:
                SINDHI[i].style.fontFamily = `${fontPersoArabicScript}, cursive`;
                break;
            default:
                console.log(SYSTEM_ERROR);
                break;
            // End of switch block
        }
    }
    let fontDevanagari = "'Chandas', 'Tiro Devanagari Sanskrit', 'Sanskrit Text', 'Adobe Devanagari', 'Noto Serif Devanagari', 'Utsaah', 'Devanagari MT', 'Raghu', 'Gargi', 'JanaSanskrit', 'JanaHindi', 'Siddhanta', 'Noto Sans Devanagari'";
    for (let i = 0; i < SINDHI_DEVANAGARI.length; i++) {
        switch (font) {
            case SANS_SERIF_FONT:
                SINDHI_DEVANAGARI[i].style.fontFamily = `${fontDevanagari}, sans-serif`;
                break;
            case SERIF_FONT:
                SINDHI_DEVANAGARI[i].style.fontFamily = `${fontDevanagari}, serif`;
                break;
            case MONOSPACED_FONT:
                SINDHI_DEVANAGARI[i].style.fontFamily = `${fontDevanagari}, monospaced`;
                break;
            case CURSIVE_FONT:
                SINDHI_DEVANAGARI[i].style.fontFamily = `${fontDevanagari}, cursive`;
                break;
            default:
                console.log(SYSTEM_ERROR);
                break;
            // End of switch block
        }
    }
    for (let i = 0; i < SINDHI_ISO_15919_ROMANIZATION.length; i++) {
        SINDHI_ISO_15919_ROMANIZATION[i].style.fontFamily = font;
    }
    return 0;
}

// Sinhala
const SINHALA = document.getElementsByClassName("sinhala");
const SINHALA_ISO_15919_ROMANIZATION = document.getElementsByClassName("sinhala-iso-15919-romanization");
function SinhalaFontChange(font) {
    let fontSinhaleseScript = "'Sinhala Sangam MN', 'KaputaUnicode', 'KandyUnicode', 'Dinamina', 'DinaminaUniWeb', 'Potha', 'Madhura', 'Noto Sans Sinhala'";
    for (let i = 0; i < SINHALA.length; i++) {
        switch (font) {
            case SANS_SERIF_FONT:
                SINHALA[i].style.fontFamily = `${fontSinhaleseScript}, sans-serif`;
                break;
            case SERIF_FONT:
                SINHALA[i].style.fontFamily = `${fontSinhaleseScript}, serif`;
                break;
            case MONOSPACED_FONT:
                SINHALA[i].style.fontFamily = `${fontSinhaleseScript}, monospaced`;
                break;
            case CURSIVE_FONT:
                SINHALA[i].style.fontFamily = `${fontSinhaleseScript}, cursive`;
                break;
            default:
                console.log(SYSTEM_ERROR);
                break;
            // End of switch block
        }
    }
    for (let i = 0; i < SINHALA_ISO_15919_ROMANIZATION.length; i++) {
        SINHALA_ISO_15919_ROMANIZATION[i].style.fontFamily = font;
    }
    return 0;
}

// Spanish
const SPANISH = document.getElementsByClassName("spanish");
function SpanishFontChange(font) {
    for (let i = 0; i < SPANISH.length; i++) {
        SPANISH[i].style.fontFamily = font;
    }
    return 0;
}

// Sundanese
const SUNDANESE = document.getElementsByClassName("sundanese");
const SUNDANESE_ROMANIZATION = document.getElementsByClassName("sundanese-romanization");
function SundaneseFontChange(font) {
    let fontSundaneseScript = "'Sundanese Unicode', 'Noto Sans Sundanese'";
    for (let i = 0; i < SUNDANESE.length; i++) {
        switch (font) {
            case SANS_SERIF_FONT:
                SUNDANESE[i].style.fontFamily = `${fontSundaneseScript}, sans-serif`;
                break;
            case SERIF_FONT:
                SUNDANESE[i].style.fontFamily = `${fontSundaneseScript}, serif`;
                break;
            case MONOSPACED_FONT:
                SUNDANESE[i].style.fontFamily = `${fontSundaneseScript}, monospaced`;
                break;
            case CURSIVE_FONT:
                SUNDANESE[i].style.fontFamily = `${fontSundaneseScript}, cursive`;
                break;
            default:
                console.log(SYSTEM_ERROR);
                break;
            // End of switch block
        }
    }
    for (let i = 0; i < SUNDANESE_ROMANIZATION.length; i++) {
        SUNDANESE_ROMANIZATION[i].style.fontFamily = font;
    }
    return 0;
}

// Swedish
const SWEDISH = document.getElementsByClassName("swedish");
function SwedishFontChange(font) {
    for (let i = 0; i < SWEDISH.length; i++) {
        SWEDISH[i].style.fontFamily = font;
    }
    return 0;
}

// -----------------------------------------------------------------------------

// <<< Langauges whose English names start with "T" >>>

// Tajik
const TAJIK = document.getElementsByClassName("tajik");
const TAJIKI_ROMANIZATION = document.getElementsByClassName("tajik-romanization");
const BUKHORI_TAJIK = document.getElementsByClassName("bukhori-tajik");
function TajikFontChange(font) {
    for (let i = 0; i < TAJIK.length; i++) {
        TAJIK[i].style.fontFamily = font;
    }
    for (let i = 0; i < TAJIKI_ROMANIZATION.length; i++) {
        TAJIKI_ROMANIZATION[i].style.fontFamily = font;
    }
    let fontHebrewScript = "'SBL Hebrew', 'SBL BibLit', 'Taamey David CLM', 'Taamey Frank CLM', 'Alef', 'Noto Sans Hebrew', 'Narkisim', 'Miriam', 'Kinryu', 'Arial Hebrew', 'Arial', 'Adobe Hebrew'";
    for (let i = 0; i < BUKHORI_TAJIK.length; i++) {
        switch (font) {
            case SANS_SERIF_FONT:
                BUKHORI_TAJIK[i].style.fontFamily = `${fontHebrewScript}, sans-serif`;
                break;
            case SERIF_FONT:
                BUKHORI_TAJIK[i].style.fontFamily = `${fontHebrewScript}, serif`;
                break;
            case MONOSPACED_FONT:
                BUKHORI_TAJIK[i].style.fontFamily = `${fontHebrewScript}, monospaced`;
                break;
            case CURSIVE_FONT:
                BUKHORI_TAJIK[i].style.fontFamily = `${fontHebrewScript}, cursive`;
                break;
            default:
                console.log(SYSTEM_ERROR);
                break;
            // End of switch block
        }
    }
    return 0;
}

// Tamil
const TAMIL = document.getElementsByClassName("tamil");
const TAMIL_ISO_15919_ROMANIZATION = document.getElementsByClassName("tamil-iso-15919-romanization");
function TamilFontChange(font) {
    let fontTamilScript = "'Tamil Sangam MN', 'InaiMathi', 'Vijaya', 'Akshar', 'JanaTamil', 'Code2000', 'ETTamilNew', 'Lohit Tamil', 'Arial Unicode MS', 'Free Serif', 'Latha', 'Noto Sans Tamil', 'Noto Sans Tamil Supplement'";
    for (let i = 0; i < TAMIL.length; i++) {
        switch (font) {
            case SANS_SERIF_FONT:
                TAMIL[i].style.fontFamily = `${fontTamilScript}, sans-serif`;
                break;
            case SERIF_FONT:
                TAMIL[i].style.fontFamily = `${fontTamilScript}, serif`;
                break;
            case MONOSPACED_FONT:
                TAMIL[i].style.fontFamily = `${fontTamilScript}, monospaced`;
                break;
            case CURSIVE_FONT:
                TAMIL[i].style.fontFamily = `${fontTamilScript}, cursive`;
                break;
            default:
                console.log(SYSTEM_ERROR);
                break;
            // End of switch block
        }
    }
    for (let i = 0; i < TAMIL_ISO_15919_ROMANIZATION.length; i++) {
        TAMIL_ISO_15919_ROMANIZATION[i].style.fontFamily = font;
    }
    return 0;
}

// Telugu
const TELUGU = document.getElementsByClassName("telugu");
const TELUGU_ISO_15919_ROMANIZATION = document.getElementsByClassName("telugu-iso-15919-romanization");
function TeluguFontChange(font) {
    let fontTeluguScript = "'Telugu Sangam MN', 'Noto Sans Telugu'";
    for (let i = 0; i < TELUGU.length; i++) {
        switch (font) {
            case SANS_SERIF_FONT:
                TELUGU[i].style.fontFamily = `${fontTeluguScript}, sans-serif`;
                break;
            case SERIF_FONT:
                TELUGU[i].style.fontFamily = `${fontTeluguScript}, serif`;
                break;
            case MONOSPACED_FONT:
                TELUGU[i].style.fontFamily = `${fontTeluguScript}, monospaced`;
                break;
            case CURSIVE_FONT:
                TELUGU[i].style.fontFamily = `${fontTeluguScript}, cursive`;
                break;
            default:
                console.log(SYSTEM_ERROR);
                break;
            // End of switch block
        }
    }
    for (let i = 0; i < TELUGU_ISO_15919_ROMANIZATION.length; i++) {
        TELUGU_ISO_15919_ROMANIZATION[i].style.fontFamily = font;
    }
    return 0;
}

// Thai
const THAI = document.getElementsByClassName("thai");
const THAI_RTGS_ROMANIZATION = document.getElementsByClassName("royal-thai-general-system-of-transcription");
const THAI_PAIBOON_ROMANIZATION = document.getElementsByClassName("paiboon-romanization-for-thai");
function ThaiFontChange(font) {
    let fontThaiScript = "'Leelawadee UI', 'Leelawadee', 'Arial Unicode MS', 'Code2000', 'Noto Sans Thai', 'Noto Sans Thai Looped'";
    for (let i = 0; i < THAI.length; i++) {
        switch (font) {
            case SANS_SERIF_FONT:
                THAI[i].style.fontFamily = `${fontThaiScript}, sans-serif`;
                break;
            case SERIF_FONT:
                THAI[i].style.fontFamily = `${fontThaiScript}, serif`;
                break;
            case MONOSPACED_FONT:
                THAI[i].style.fontFamily = `${fontThaiScript}, monospaced`;
                break;
            case CURSIVE_FONT:
                THAI[i].style.fontFamily = `${fontThaiScript}, cursive`;
                break;
            default:
                console.log(SYSTEM_ERROR);
                break;
            // End of switch block
        }
    }
    for (let i = 0; i < THAI_RTGS_ROMANIZATION.length; i++) {
        THAI_RTGS_ROMANIZATION[i].style.fontFamily = font;
    }
    for (let i = 0; i < THAI_PAIBOON_ROMANIZATION.length; i++) {
        THAI_PAIBOON_ROMANIZATION[i].style.fontFamily = font;
    }
    return 0;
}

// Tibetan
const TIBETAN = document.getElementsByClassName("tibetan");
const TIBETAN_WYLIE_ROMANIZATION = document.getElementsByClassName("wylie-romanization");
const TIBETAN_PHAGSPA_SCRIPT = document.getElementsByClassName("tibetan-phags-pa");
const TIBETAN_THL_ROMANIZATION = document.getElementsByClassName("tibetan-and-himalayan-library-simplified-phonetic-transcription");
const TIBETAN_PINYIN = document.getElementsByClassName("tibetan-pinyin");
function TibetanFontChange(font) {
    let fontTibetanScript = "'BabelStone Tibetan', 'BabelStone Tibetan Slim', 'Noto Serif Tibetan', 'Noto Sans Tibetan', 'Jomolhari-ID', 'Tibetan Machine Uni', 'Tibetan Machine Web', 'Jomolhari', 'Microsoft Himalaya'";
    for (let i = 0; i < TIBETAN.length; i++) {
        switch (font) {
            case SANS_SERIF_FONT:
                TIBETAN[i].style.fontFamily = `${fontTibetanScript}, sans-serif`;
                break;
            case SERIF_FONT:
                TIBETAN[i].style.fontFamily = `${fontTibetanScript}, serif`;
                break;
            case MONOSPACED_FONT:
                TIBETAN[i].style.fontFamily = `${fontTibetanScript}, monospaced`;
                break;
            case CURSIVE_FONT:
                TIBETAN[i].style.fontFamily = `${fontTibetanScript}, cursive`;
                break;
            default:
                console.log(SYSTEM_ERROR);
                break;
            // End of switch block
        }
    }
    for (let i = 0; i < TIBETAN_WYLIE_ROMANIZATION.length; i++) {
        TIBETAN_WYLIE_ROMANIZATION[i].style.fontFamily = font;
    }
    let fontPhagsPaScript = "'BabelStone Phags-pa Book', 'Microsoft PhagsPa', 'Noto Sans Phags-pa'";
    for (let i = 0; i < TIBETAN_PHAGSPA_SCRIPT.length; i++) {
        switch (font) {
            case SANS_SERIF_FONT:
                TIBETAN_PHAGSPA_SCRIPT[i].style.fontFamily = `${fontPhagsPaScript}, sans-serif`;
                break;
            case SERIF_FONT:
                TIBETAN_PHAGSPA_SCRIPT[i].style.fontFamily = `${fontPhagsPaScript}, serif`;
                break;
            case MONOSPACED_FONT:
                TIBETAN_PHAGSPA_SCRIPT[i].style.fontFamily = `${fontPhagsPaScript}, monospaced`;
                break;
            case CURSIVE_FONT:
                TIBETAN_PHAGSPA_SCRIPT[i].style.fontFamily = `${fontPhagsPaScript}, cursive`;
                break;
            default:
                console.log(SYSTEM_ERROR);
                break;
            // End of switch block
        }
    }
    for (let i = 0; i < TIBETAN_THL_ROMANIZATION.length; i++) {
        TIBETAN_THL_ROMANIZATION[i].style.fontFamily = font;
    }
    for (let i = 0; i < TIBETAN_PINYIN.length; i++) {
        TIBETAN_PINYIN[i].style.fontFamily = font;
    }
    return 0;
}

// Turkish
const TURKISH = document.getElementsByClassName("turkish");
function TurkishFontChange(font) {
    for (let i = 0; i < TURKISH.length; i++) {
        TURKISH[i].style.fontFamily = font;
    }
    return 0;
}

// Turkmen
const TURKMEN = document.getElementsByClassName("turkmen");
function TurkmenFontChange(font) {
    for (let i = 0; i < TURKMEN.length; i++) {
        TURKMEN[i].style.fontFamily = font;
    }
    return 0;
}

// -----------------------------------------------------------------------------

// <<< Langauges whose English names start with "U" >>>

// Ukrainain
const UKRAINIAN = document.getElementsByClassName("ukrainian");
const UKRAINIAN_ROMANIZATION = document.getElementsByClassName("ukrainian-national-romanization");
const UKRAINIAN_SOVIET_ROMANIZATION = document.getElementsByClassName("ukrainian-soviet-era-russian-based-romanization");
function UkrainianFontChange(font) {
    for (let i = 0; i < UKRAINIAN.length; i++) {
        UKRAINIAN[i].style.fontFamily = font;
    }
    for (let i = 0; i < UKRAINIAN_ROMANIZATION.length; i++) {
        UKRAINIAN_ROMANIZATION[i].style.fontFamily = font;
    }
    for (let i = 0; i < UKRAINIAN_SOVIET_ROMANIZATION.length; i++) {
        UKRAINIAN_SOVIET_ROMANIZATION[i].style.fontFamily = font;
    }
    return 0;
}

// Urdu
const URDU = document.getElementsByClassName("urdu");
const URDU_ISO_15919_ROMANIZATION = document.getElementsByClassName("urdu-iso-15919-romanization");
function UrduFontChange(font) {
    let fontPersoArabicScript = "'Awami Nastaliq', 'Noto Nastaliq Urdu', 'Tahoma', 'Arial Unicode MS', 'UT Cairo', 'UT Naskh'";
    for (let i = 0; i < URDU.length; i++) {
        switch (font) {
            case SANS_SERIF_FONT:
                URDU[i].style.fontFamily = `${fontPersoArabicScript}, sans-serif`;
                break;
            case SERIF_FONT:
                URDU[i].style.fontFamily = `${fontPersoArabicScript}, serif`;
                break;
            case MONOSPACED_FONT:
                URDU[i].style.fontFamily = `${fontPersoArabicScript}, monospaced`;
                break;
            case CURSIVE_FONT:
                URDU[i].style.fontFamily = `${fontPersoArabicScript}, cursive`;
                break;
            default:
                console.log(SYSTEM_ERROR);
                break;
            // End of switch block
        }
    }
    for (let i = 0; i < URDU_ISO_15919_ROMANIZATION.length; i++) {
        URDU_ISO_15919_ROMANIZATION[i].style.fontFamily = font;
    }
    return 0;
}

// Uzbek
const UZBEK = document.getElementsByClassName("uzbek");
const UZBEK_SOVIET_CYRILLIC = document.getElementsByClassName("uzbek-soviet-era-cyrillic");
const AFGHAN_UZBEK = document.getElementsByClassName("southern-uzbek");
function UzbekFontChange(font) {
    for (let i = 0; i < UZBEK.length; i++) {
        UZBEK[i].style.fontFamily = font;
    }
    for (let i = 0; i < UZBEK_SOVIET_CYRILLIC.length; i++) {
        UZBEK_SOVIET_CYRILLIC[i].style.fontFamily = font;
    }
    let fontPersoArabicScript = "'Iranian Sans', 'Geeza Pro'";
    for (let i = 0; i < AFGHAN_UZBEK.length; i++) {
        switch (font) {
            case SANS_SERIF_FONT:
                AFGHAN_UZBEK[i].style.fontFamily = `${fontPersoArabicScript}, sans-serif`;
                break;
            case SERIF_FONT:
                AFGHAN_UZBEK[i].style.fontFamily = `${fontPersoArabicScript}, serif`;
                break;
            case MONOSPACED_FONT:
                AFGHAN_UZBEK[i].style.fontFamily = `${fontPersoArabicScript}, monospaced`;
                break;
            case CURSIVE_FONT:
                AFGHAN_UZBEK[i].style.fontFamily = `${fontPersoArabicScript}, cursive`;
                break;
            default:
                console.log(SYSTEM_ERROR);
                break;
            // End of switch block
        }
    }
    return 0;
}

// -----------------------------------------------------------------------------

// <<< Langauges whose English names start with "V" >>>

// Vietnamese
const VIETNAMESE = document.getElementsByClassName("vietnamese");
const VIETNAMESE_CHUWX_NOOM = document.getElementsByClassName("chu-nom");
const VIETNAMESE_TELEX = document.getElementsByClassName("vietnamese-telex");
function VietnameseFontChange(font) {
    for (let i = 0; i < VIETNAMESE.length; i++) {
        VIETNAMESE[i].style.fontFamily = font;
    }
    let fontChuwxNoom = "'Nom Na Tong', 'HAN NOM A', 'HAN NOM B', 'Sun-ExtA', 'Sun-ExtB', 'Ming-Lt-HKSCS-UNI-H', 'Ming-Lt-HKSCS-ExtB', 'HanaMinA', 'HanaMinB', 'HanaMin', 'PingFang TC', 'MingLiU', 'MingLiU-ExtB', 'MingLiU_HKSCS', 'MingLiU_HKSCS-ExtB', 'SimSun', 'SimSun-ExtB', 'Arial Unicode MS', 'TITUS Cyberbit Basic'";
    for (let i = 0; i < VIETNAMESE_CHUWX_NOOM.length; i++) {
        switch (font) {
            case SANS_SERIF_FONT:
                VIETNAMESE_CHUWX_NOOM[i].style.fontFamily = `${fontChuwxNoom}, sans-serif`;
                break;
            case SERIF_FONT:
                VIETNAMESE_CHUWX_NOOM[i].style.fontFamily = `${fontChuwxNoom}, serif`;
                break;
            case MONOSPACED_FONT:
                VIETNAMESE_CHUWX_NOOM[i].style.fontFamily = `${fontChuwxNoom}, monospaced`;
                break;
            case CURSIVE_FONT:
                VIETNAMESE_CHUWX_NOOM[i].style.fontFamily = `${fontChuwxNoom}, cursive`;
                break;
            default:
                console.log(SYSTEM_ERROR);
                break;
            // End of switch block
        }
    }
    let fontTeletype = "'NewComputerModern10', 'Courier Prime', 'Courier New', 'Courier', 'Consolas', 'Lucida Console', 'Lucida Sans Typewriter', 'Lucida Typewriter', monospace";
    for (let i = 0; i < VIETNAMESE_TELEX.length; i++) {
        VIETNAMESE_TELEX[i].style.fontFamily = fontTeletype;
    }
    return 0;
}

// -----------------------------------------------------------------------------

// <<< Langauges whose English names start with "W" >>>

// -----------------------------------------------------------------------------

// <<< Langauges whose English names start with "X" >>>

// -----------------------------------------------------------------------------

// <<< Langauges whose English names start with "Y" >>>

// Yakut / Sakha
const SAKHA = document.getElementsByClassName("yakut-sakha");
const SAKHA_COMMON_TURKIC = document.getElementsByClassName("yakut-sakha-common-turkic-alphabet");
function SakhaFontChange(font) {
    for (let i = 0; i < SAKHA.length; i++) {
        SAKHA[i].style.fontFamily = font;
    }
    for (let i = 0; i < SAKHA_COMMON_TURKIC.length; i++) {
        SAKHA_COMMON_TURKIC[i].style.fontFamily = font;
    }
    return 0;
}

// -----------------------------------------------------------------------------

// <<< Langauges whose English names start with "Z" >>>

// -----------------------------------------------------------------------------

// ------ Languages from Ten'en Project ------ //

// Bhonmesh
const BHONMESH = document.getElementsByClassName("bhonmesh");
const BHONMESH_ROMANIZATION = document.getElementsByClassName("bhonmesh-romanization");
function BhonmeshFontChange(font) {
    let fontBhonScript = "'Chandas', 'Tiro Devanagari Sanskrit', 'Sanskrit Text', 'Adobe Devanagari', 'Noto Serif Devanagari', 'Utsaah', 'Devanagari MT', 'Raghu', 'Gargi', 'JanaSanskrit', 'JanaHindi', 'Siddhanta', 'Noto Sans Devanagari'";
    for (let i = 0; i < BHONMESH.length; i++) {
        switch (font) {
            case SANS_SERIF_FONT:
                BHONMESH[i].style.fontFamily = `${fontBhonScript}, sans-serif`;
                break;
            case SERIF_FONT:
                BHONMESH[i].style.fontFamily = `${fontBhonScript}, serif`;
                break;
            case MONOSPACED_FONT:
                BHONMESH[i].style.fontFamily = `${fontBhonScript}, monospaced`;
                break;
            case CURSIVE_FONT:
                BHONMESH[i].style.fontFamily = `${fontBhonScript}, cursive`;
                break;
            default:
                console.log(SYSTEM_ERROR);
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
    let fontEleAlphabet = "'Menk Hawang Tig', 'Menk Qagan Tig', 'Menk Garqag Tig', 'Menk Har_a Tig', 'Menk Scnin Tig', 'Oyun Gurban Ulus Tig', 'Oyun Qagan Tig', 'Oyun Garqag Tig', 'Oyun Har_a Tig', 'Oyun Scnin Tig', 'Oyun Agula Tig', 'Mongolian Baiti', 'Mongolian Universal White', 'Mongol Usug', 'Mongolian White', 'MongolianScript', 'Code2000', 'Menksoft Qagan', 'Noto Sans Mongolian'";
    for (let i = 0; i < ILBASK_ELESUUKELN.length; i++) {
        switch (font) {
            case SANS_SERIF_FONT:
                ILBASK_ELESUUKELN[i].style.fontFamily = `${fontEleAlphabet}, sans-serif`;
                break;
            case SERIF_FONT:
                ILBASK_ELESUUKELN[i].style.fontFamily = `${fontEleAlphabet}, serif`;
                break;
            case MONOSPACED_FONT:
                ILBASK_ELESUUKELN[i].style.fontFamily = `${fontEleAlphabet}, monospaced`;
                break;
            case CURSIVE_FONT:
                ILBASK_ELESUUKELN[i].style.fontFamily = `${fontEleAlphabet}, cursive`;
                break;
            default:
                console.log(SYSTEM_ERROR);
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
    let fontAncientScript = "'SantakkuM', 'Santakku', 'Kurinto Sans Aux', 'Segoe UI Historic', 'Noto Sans Cuneiform'";
    for (let i = 0; i < NHIMESH.length; i++) {
        switch (font) {
            case SANS_SERIF_FONT:
                NHIMESH[i].style.fontFamily = `${fontAncientScript}, sans-serif`;
                break;
            case SERIF_FONT:
                NHIMESH[i].style.fontFamily = `${fontAncientScript}, serif`;
                break;
            case MONOSPACED_FONT:
                NHIMESH[i].style.fontFamily = `${fontAncientScript}, monospaced`;
                break;
            case CURSIVE_FONT:
                NHIMESH[i].style.fontFamily = `${fontAncientScript}, cursive`;
                break;
            default:
                console.log(SYSTEM_ERROR);
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
    let fontUupScript = "'Noto Naskh Arabic UI', 'Noto Naskh Arabic', 'Iranian Sans', Tahoma, 'Microsoft Sans Serif', 'Arial Unicode MS'";
    for (let i = 0; i < UUPTARI_UUP_SCRIPT.length; i++) {
        switch (font) {
            case SANS_SERIF_FONT:
                UUPTARI_UUP_SCRIPT[i].style.fontFamily = `${fontUupScript}, sans-serif`;
                break;
            case SERIF_FONT:
                UUPTARI_UUP_SCRIPT[i].style.fontFamily = `${fontUupScript}, serif`;
                break;
            case MONOSPACED_FONT:
                UUPTARI_UUP_SCRIPT[i].style.fontFamily = `${fontUupScript}, monospaced`;
                break;
            case CURSIVE_FONT:
                UUPTARI_UUP_SCRIPT[i].style.fontFamily = `${fontUupScript}, cursive`;
                break;
            default:
                console.log(SYSTEM_ERROR);
                break;
            // End of switch block
        }
    }
    for (let i = 0; i < UUPTARI_KANSE_ALPHABET.length; i++) {
        UUPTARI_KANSE_ALPHABET[i].style.fontFamily = font;
    }
    let fontShitoScript = "'Leelawadee UI', 'Leelawadee', 'Arial Unicode MS', 'Code2000', 'Noto Sans Thai', 'Noto Sans Thai Looped'";
    for (let i = 0; i < UUPTARI_SHITO_SCRIPT.length; i++) {
        switch (font) {
            case SANS_SERIF_FONT:
                UUPTARI_SHITO_SCRIPT[i].style.fontFamily = `${fontShitoScript}, sans-serif`;
                break;
            case SERIF_FONT:
                UUPTARI_SHITO_SCRIPT[i].style.fontFamily = `${fontShitoScript}, serif`;
                break;
            case MONOSPACED_FONT:
                UUPTARI_SHITO_SCRIPT[i].style.fontFamily = `${fontShitoScript}, monospaced`;
                break;
            case CURSIVE_FONT:
                UUPTARI_SHITO_SCRIPT[i].style.fontFamily = `${fontShitoScript}, cursive`;
                break;
            default:
                console.log(SYSTEM_ERROR);
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
    let fontYicaexScript = "'Tibetan Machine Uni', 'BabelStone Tibetan Slim', 'BabelStone Tibetan', 'Noto Serif Tibetan'";
    for (let i = 0; i < YICAEXSESE.length; i++) {
        switch (font) {
            case SANS_SERIF_FONT:
                YICAEXSESE[i].style.fontFamily = `${fontYicaexScript}, sans-serif`;
                break;
            case SERIF_FONT:
                YICAEXSESE[i].style.fontFamily = `${fontYicaexScript}, serif`;
                break;
            case MONOSPACED_FONT:
                YICAEXSESE[i].style.fontFamily = `${fontYicaexScript}, monospaced`;
                break;
            case CURSIVE_FONT:
                YICAEXSESE[i].style.fontFamily = `${fontYicaexScript}, cursive`;
                break;
            default:
                console.log(SYSTEM_ERROR);
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
    LaotianFontChange(font);
    LatinFontChange(font);
    LatvianFontChange(font);
    LithuanianFontChange(font);
    return 0;
}

function NaturalLangFontM(font) {
    MalayFontChange(font);
    MalayalamFontChange(font);
    MarathiFontChange(font);
    MongolianFontChange(font);
    TraditionalMongolianFontChange(font);
    MontenegrinFontChange(font);
    return 0;
}

function NaturalLangFontN(font) {
    NepaliFontChange(font);
    NorwegianFontChange(font);
    return 0;
}

function NaturalLangFontO(font) {
    OdiaFontChange(font);
    OssetianFontChange(font);
    return 0;
}

function NaturalLangFontP(font) {
    FarsiFontChange(font);
    DariFontChange(font);
    PolishFontChange(font);
    PunjabiFontChange(font);
    return 0;
}

function NaturalLangFontQ(font) {
    return 0;
}

function NaturalLangFontR(font) {
    RomanianFontChange(font);
    RussianFontChange(font);
    return 0;
}

function NaturalLangFontS(font) {
    SanskritFontChange(font);
    ScottishGaelicFontChange(font);
    SerbianFontChange(font);
    SindhiFontChange(font);
    SinhalaFontChange(font);
    SpanishFontChange(font);
    SundaneseFontChange(font);
    SwedishFontChange(font);
    return 0;
}

function NaturalLangFontT(font) {
    TajikFontChange(font);
    TamilFontChange(font);
    TeluguFontChange(font);
    ThaiFontChange(font);
    TibetanFontChange(font);
    TurkishFontChange(font);
    TurkmenFontChange(font);
    return 0;
}

function NaturalLangFontU(font) {
    UkrainianFontChange(font);
    UrduFontChange(font);
    UzbekFontChange(font);
    return 0;
}

function NaturalLangFontV(font) {
    VietnameseFontChange(font);
    return 0;
}

function NaturalLangFontW(font) {
    return 0;
}

function NaturalLangFontX(font) {
    return 0;
}

function NaturalLangFontY(font) {
    SakhaFontChange(font);
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
