let Const = require("../helpers/Const.js");
let common = require("../helpers/Common.js");

chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.local.get(Const.CHROME_LOCAL_KEY, function(data) {
        var version;
        if (data[Const.CHROME_LOCAL_KEY]) {
            version = data[Const.CHROME_LOCAL_KEY]["version"];
        }
        if (!version || version != common.app_detail.version) {
            chrome.browserAction.setBadgeText({text: 'new'});
        }
    });
});
