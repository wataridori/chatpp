var CHROME_LOCAL_KEY = "CHATPP_CHROME_LOCAL_DATA";
chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.local.get(CHROME_LOCAL_KEY, function(data) {
        var version;
        if (data[CHROME_LOCAL_KEY]) {
            version = data[CHROME_LOCAL_KEY]["version"];
        }
        if (!version || version != chrome.app.getDetails().version) {
            chrome.browserAction.setBadgeText({text: 'new'});
        }
    });
});
