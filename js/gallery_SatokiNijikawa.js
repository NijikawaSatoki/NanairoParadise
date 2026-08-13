/* =============================================================================
 * Gallery Script - Satoki Nijikawa
 * =============================================================================
 * 
 * Author: Niji System
 * 
 */

// Switch functions for "Existing - Train Scene"

function ExistingTrainSceneSwitch() {
    // Store the variant images into variables
    let imgExistingTrainScene = document.getElementById("ExistingTrainScene");
    let imgExistingTrainSceneBg = document.getElementById("ExistingTrainSceneBg");
    // Toggle the images
    imgExistingTrainScene.style.display = "block";
    imgExistingTrainSceneBg.style.display = "none";
    return 0;
}

function ExistingTrainSceneBgSwitch() {
    // Store the variant images into variables
    let imgExistingTrainScene = document.getElementById("ExistingTrainScene");
    let imgExistingTrainSceneBg = document.getElementById("ExistingTrainSceneBg");
    // Toggle the images
    imgExistingTrainScene.style.display = "none";
    imgExistingTrainSceneBg.style.display = "block";
    return 0;
}

/* >>>>>> END OF FILE <<<<<< */