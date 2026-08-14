/* =============================================================================
 * Warning script for NSFW galleries
 * =============================================================================
 * 
 * Author: Niji System
 * 
 */

// Warns the user of the contents of the page

function PageContentWarning() {
    alert(`WARNING!!
This gallery contains art that is NOT suitable for those under 18!!
If you're under that age, then get the fuck out!
No one wants you, and I'm not your babysitter!
By closing this alert window, you are thereby confirming that you're of age and are not lying.`);
    return 0;
}

window.onload = PageContentWarning();

/* >>>>>> END OF FILE <<<<<< */