/* =============================================================================
 * Gallery Script
 * =============================================================================
 * 
 * Author: Niji System
 * 
 */

// Spoiler toggles

// Nudity
const NSFW_NUDITY = document.getElementsByClassName("nsfw-nudity");
const NSFW_NUDITY_SUMMARY = document.getElementsByClassName("nsfw-nudity-name");
function ToggleNudity() {
    for (let i = 0; i < NSFW_NUDITY.length; i++) {
        NSFW_NUDITY[i].toggleAttribute('open');
        if (NSFW_NUDITY[i].open) {
            NSFW_NUDITY_SUMMARY[i].textContent = "Hide spoilered image";
        } else {
            NSFW_NUDITY_SUMMARY[i].textContent = "Show spoilered image";
        }
    }
    return 0;
}
function ResetNudity() {
    for (let i = 0; i < NSFW_NUDITY.length; i++) {
        NSFW_NUDITY[i].toggleAttribute('open', false);
        NSFW_NUDITY_SUMMARY[i].textContent = "Show spoilered image";
    }
}

// Master functions

function ToggleAll() {
    ToggleNudity();
    return 0;
}

function ResetAll() {
    ResetNudity();
    return 0;
}

/* >>>>>> END OF FILE <<<<<< */
