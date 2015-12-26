var CHROME_SYNC_ROOM_KEY = "CHATPP_CHROME_SYNC_ROOM";

var rooms = [];

$(function() {
    var app_detail = chrome.app.getDetails();
    var version = app_detail.version;
    $("#chatpp_version").html(version);

    chrome.storage.sync.get(CHROME_SYNC_ROOM_KEY, function(data) {
        if (!$.isEmptyObject(data)) {
            data = data[CHROME_SYNC_ROOM_KEY];
            rooms = data;
            loadData();
        }
    });

    $("#save-btn").click(function() {
        $("input").each(function (){
            var number = $(this).data("btn");
            var value = $(this).val();
            rooms[number] = parseRoomId(value);
        });
        syncData();
    });
});

function loadData() {
    for (var i in rooms) {
        if (rooms[i]) {
            $("[data-btn='" + i +"']").val(rooms[i]);
        }
    }
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
    sync[CHROME_SYNC_ROOM_KEY] = rooms;
    chrome.storage.sync.set(sync, function() {
        location.reload();
    });
}