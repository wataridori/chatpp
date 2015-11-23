var CHROME_SYNC_DISABLE_NOTIFY_ROOM_KEY = "CHATPP_CHROME_SYNC_DISABLE_NOTIFY_ROOM";

var disabledNotifyRooms = [];

$(function() {
    var app_detail = chrome.app.getDetails();
    var version = app_detail.version;
    $("#chatpp_version").html(version);

    chrome.storage.sync.get(CHROME_SYNC_DISABLE_NOTIFY_ROOM_KEY, function(data) {
        if (!$.isEmptyObject(data)) {
            data = data[CHROME_SYNC_DISABLE_NOTIFY_ROOM_KEY];
            disabledNotifyRooms = data;
            loadData();
        }
    });

    $("#save-btn").click(function() {
        disabledNotifyRooms = $("textarea").val().split(",");
        syncData();
    });
});

function loadData() {
    $("textarea").val(disabledNotifyRooms.join());
}

function syncData(callback) {
    var sync = {};
    sync[CHROME_SYNC_DISABLE_NOTIFY_ROOM_KEY] = disabledNotifyRooms;
    chrome.storage.sync.set(sync, function() {
        location.reload();
    });
}
