/* A function creator for callbacks */
function findCoffeeInTheDOM(domContent) {
    // Search regular expression for coffee and alert if found
    if (typeof domContent != 'undefined') {
        var re = /coffee/;
        var myArray = domContent.match(re);

        if (myArray && myArray.length > 0) {
            alert('coffee found :)');
        }
        else {
            alert('coffee not found :(');
        }
    }
}

/* When the browser-action button is clicked, send a message to content.js requesting DOM */
chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.sendMessage(
        tab.id,
        { from: 'background', subject: 'return_dom' },
        findCoffeeInTheDOM);
});