/* =============================================================================
 * Story Reader Scripts
 * =============================================================================
 *
 * Author: Q'aemil (Niji System)
 *
 */

// Document constants

const storyBody = document.getElementById("StoryBody"); // So that <article> element DOES have a use lol

// Font selector

const fontSelect = document.querySelector(".font-select");
fontSelect.addEventListener("change", (event) => {
    if (event.target.value === "ArialDefault") {
        storyBody.style.fontFamily = "'Arial', sans-serif";
        console.log("Story font has been switched to Arial.\nHappy reading!");
    } else {
        storyBody.style.fontFamily = `${event.target.value}`;
        console.log(`Story font has been switched to ${event.target.value}.\nHappy reading!`);
    }
});
