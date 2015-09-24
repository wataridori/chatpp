chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "init") {
        chrome.storage.local.get(request.data, function(info) {
            info = typeof info[request.data] === "object" ? JSON.stringify(info[request.data]) : info[request.data]
            localStorage[request.data] = info;
        });
    }
    if (request.action == "getLocalStorage") {
        sendResponse(localStorage[request.data]);
    }
    if (request.action == "setLocalStorage") {
        chrome.storage.local.set(request.data);
        sendResponse();
    }
});

