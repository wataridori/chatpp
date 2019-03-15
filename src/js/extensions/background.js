let common = require("../helpers/Common.js");
let ChromeStorageLocal = require("../helpers/ChromeStorageLocal.js");
let chrome_storage_local = new ChromeStorageLocal();
let Const = require("../helpers/Const.js");

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

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.contentScriptQuery == "fetchEmoticonsData") {
        let url = `https://dl.dropboxusercontent.com/${request.query}`;
        getJSON(url, (error, responseData) => {
            if (error !== null) {
                let data = {
                    success: false,
                    data_name: request.data_name
                };
                sendResponse(data);
            }
            responseData.success = true;
            sendResponse(responseData);
        });
    }

    if (request.contentScriptQuery == "fetchAdvertisementData") {
        getJSON(Const.ADVERTISEMENT_URL, (error, responseData) => {
            sendResponse(responseData);
        });
    }

    return true;
});

function getJSON(url, callback) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.responseType = "json";
    xhr.onload = function() {
        let status = xhr.status;
        if (status === 200) {
            callback(null, xhr.response);
        } else {
            callback(status, xhr.response);
        }
    };
    xhr.send();
}
