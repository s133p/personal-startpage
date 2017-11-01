chrome.browserAction.onClicked.addListener(function(tab) {
 chrome.tabs.create({});
    // chrome.tabs.executeScript(null, {file: "testScript.js"});
});
