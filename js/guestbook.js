/* =============================================================================
 * Page Template Scripts
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

// Using Google App Script for guestbook
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzt4dNac468qAec4Dr4s6PoMo6KS7gRBL5vw11DnnHVBclYwQN4MCo3ioqrjHSl1uEu/exec";

// READ FUNCTION: Handles displaying data on page load
function displayComments(comments) {
    const container = document.getElementById('commentsContainer');
    if (!comments || comments.length === 0) {
        container.innerHTML = "<p>No guest has signed yet. Be the first to sign!</p>";
        return;
    }
    container.innerHTML = "What Visitors Said...";
    comments.reverse().forEach(item => {
        const card = document.createElement('div');
        card.className = 'comment-card';
        card.innerHTML = `
                <div class="comment-meta">${escapeHTML(item.name)} [${escapeHTML(item.email)}] {${escapeHTML(item.datetime)}}</div>
                <div class="comment-text">${escapeHTML(item.comment)}</div>
            `;
        container.appendChild(card);
    });
}

// Automatically load existing comments on page load
const loadScript = document.createElement('script');
loadScript.src = `${GOOGLE_SCRIPT_URL}?callback=displayComments`; 
document.body.appendChild(loadScript);

// Handle Submission Response
function handleSubmissionResponse(response) {
    const statusText = document.getElementById('formStatus');
    const submitBtn = document.getElementById('submitBtn');
                
    if (response.status === "success") {
        statusText.style.color = "green";
        statusText.innerText = response.message;
        document.getElementById('guestbookForm').reset();
    } else {
        statusText.style.color = "red";
        statusText.innerText = response.message;
    }
    submitBtn.disabled = false;
                
    // Clean up
    const tempScript = document.getElementById('tempSubmitScript');
    if (tempScript) tempScript.remove();
}

// Save Guestbook signature
document.getElementById('guestbookForm').addEventListener('submit', function(e) {
    e.preventDefault();
                
    const submitBtn = document.getElementById('submitBtn');
    const statusText = document.getElementById('formStatus');
                
    submitBtn.disabled = true;
    statusText.style.display = "block";
    statusText.innerText = "Saving your entry...";

    const name = encodeURIComponent(document.getElementById('name').value);
    const email = encodeURIComponent(document.getElementById('email').value);
    const comment = encodeURIComponent(document.getElementById('comment').value);
                
    const submissionUrl = `${GOOGLE_SCRIPT_URL}?name=${name}&email=${email}&comment=${comment}&callback=handleSubmissionResponse`;
                
    const submitScript = document.createElement('script');
    submitScript.id = 'tempSubmitScript';
    submitScript.src = submissionUrl;
    document.body.appendChild(submitScript);
});

// Helper to prevent, or at least reduce the likelihood of a script injection attack (XSS)
function escapeHTML(str) {
    if (!str) return '';
    return str.toString().replace(/[&<>'"]/g, 
        tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
    );
}

/* >>>>>> END OF FILE <<<<<< */
