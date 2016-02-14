let common = require("../helpers/Common.js");
let ChromeStorageLocal = require("../helpers/ChromeStorageLocal.js");
let chrome_storage_local = new ChromeStorageLocal();

chrome.runtime.onInstalled.addListener(() => {
    chrome_storage_local.get((data) => {
        let version;
        if (data) {
            version = data["version"];
        }
        if (!version || version != common.app_detail.version) {
            chrome.browserAction.setBadgeText({text: "new"});
        }
    });
});
