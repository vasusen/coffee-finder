/* Listen for messages and return DOM if requested by background js */
chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
    if (msg.from === 'background' && msg.subject === 'return_dom') {
        sendResponse(document.all[0].innerHTML);
    }
});