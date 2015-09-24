var CHROME_SYNC_ROOM_KEY = "CHATPP_CHROME_SYNC_ROOM";

var rooms = [];

$(function() {
    var app_detail = {
        "name": "Chat++ for Chatwork",
        "version": "4.2.0"
    };
    var version = app_detail.version;
    $('#chatpp_version').html(version);

    chrome.storage.local.get(CHROME_SYNC_ROOM_KEY, function(data) {
        if (!$.isEmptyObject(data)) {
            data = data[CHROME_SYNC_ROOM_KEY];
            if (data) {
                rooms = JSON.parse(data);
            }
            loadData();
        }
    });

    $('#save-btn').click(function() {
        $('input').each(function (){
            var number = $(this).data('btn');
            var value = $(this).val();
            value = parseRoomId(value);
            if (value && value.length > 0) {
                value = value[0];
            }
            if (checkRoomId(value)) {
                rooms[number] = value;
            } else {
                rooms[number] = '';
            }
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

function parseRoomId(room) {
    var number_regex = /\d+/g;
    return room.match(number_regex);
}

function checkRoomId(room) {
    var regex = /^[0-9]{6,10}$/g;
    return regex.test(room);
}

function syncData(callback) {
    var sync = {};
    sync[CHROME_SYNC_ROOM_KEY] = JSON.stringify(rooms);
    chrome.storage.local.set(sync, function() {
        location.reload();
    });
}