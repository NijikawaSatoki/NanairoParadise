/* =============================================================================
 * Story Reader Scripts
 * =============================================================================
 *
 * Author: Wamo, Vihreääketty, Q'aemil (Niji System)
 *
 */

// Document constants

const storyBody = document.getElementById("StoryBody"); // So that <article> element DOES have a use lol

// Font selector

const fontSelect = document.querySelector(".font-select");
fontSelect.addEventListener("change", (event) => {
    let selectedFont = event.target.value;
    switch (selectedFont) {
        case "default":
            storyBody.style.fontFamily = "'Arial', sans-serif";
            console.log("Story font has been switched to Arial.\nHappy reading!");
            break;
        case "serif":
            storyBody.style.fontFamily = "'Times New Roman', serif";
            console.log("Story font has been switched to Times New Roman.\nHappy reading!");
            break;
        case "monospaced":
            storyBody.style.fontFamily = "'Courier New', monospaced";
            console.log("Story font has been switched to Courier New.\nHappy reading!");
            break;
        case "cursive":
            storyBody.style.fontFamily = "'Comic Sans', 'Comic Sans MS', 'Comic Neue', cursive";
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
            storyBody.style.fontSize = "16px";
            console.log("The font size is now 16 px.");
            break;
        case "18px":
            storyBody.style.fontSize = "18px";
            console.log("The font size is now 18 px.");
            break;
        case "24px":
            storyBody.style.fontSize = "24px";
            console.log("The font size is now 24 px.");
            break;
        default:
            alert("Please select a font size from the list.");
            console.log("Please select a font size from the list.");
        // End of switch
    }
});
