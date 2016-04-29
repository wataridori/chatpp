let Storage = require("../helpers/Storage.js");
let chrome_storage_local = new Storage(true);

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "init") {
        chrome_storage_local.get(request.data, (info) => {
            info = typeof info === "object" ? JSON.stringify(info) : info;
            localStorage[request.data] = info;
        });
    }
    if (request.action == "getLocalStorage") {
        sendResponse(localStorage[request.data]);
    }
    if (request.action == "setLocalStorage") {
        chrome_storage_local.set(request.data);
        sendResponse();
    }
});
