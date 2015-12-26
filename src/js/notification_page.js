var CHROME_SYNC_DISABLE_NOTIFY_ROOM_KEY = "CHATPP_CHROME_SYNC_DISABLE_NOTIFY_ROOM";

var disabled_notify_rooms = [];

$(function() {
    var app_detail = chrome.app.getDetails();
    var version = app_detail.version;
    $("#chatpp_version").html(version);

    chrome.storage.sync.get(CHROME_SYNC_DISABLE_NOTIFY_ROOM_KEY, function(data) {
        if (!$.isEmptyObject(data)) {
            data = data[CHROME_SYNC_DISABLE_NOTIFY_ROOM_KEY];
            disabled_notify_rooms = data;
            loadData();
        }
    });

    $("#save-btn").click(function() {
        var rooms = $("textarea").val().split(",");
        disabled_notify_rooms = [];
        $.each(rooms, function(index, room) {
            var room_id = parseRoomId(room);
            if (room_id) {
                disabled_notify_rooms.push(room_id);
            }
        })
        syncData();
    });
});

function loadData() {
    $("textarea").val(disabled_notify_rooms.join());
}

function parseRoomId(text) {
    var room = text.match(/\d+/g);
    if (!room || room.length == 0) {
        return null;
    }
    room = room[0];
    var regex = /^[0-9]{6,10}$/g;
    if (regex.test(room)) {
        return room;
    }
    return null;
}

function syncData(callback) {
    var sync = {};
    sync[CHROME_SYNC_DISABLE_NOTIFY_ROOM_KEY] = disabled_notify_rooms;
    chrome.storage.sync.set(sync, function() {
        location.reload();
    });
}
