let Const = require("../helpers/Const.js");
let common = require("../helpers/Common.js");
let ChromeStorageLocal = require("../helpers/ChromeStorageLocal.js");
let chrome_storage_local = new ChromeStorageLocal();

chrome.runtime.onInstalled.addListener(function() {
    chrome_storage_local.get(function(data) {
        var version;
        if (data) {
            version = data["version"];
        }
        if (!version || version != common.app_detail.version) {
            chrome.browserAction.setBadgeText({text: 'new'});
        }
    });
});
