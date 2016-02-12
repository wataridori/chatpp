let Const = require("../helpers/Const.js");
let common = require("../helpers/Common.js");
let Storage = require("../helpers/Storage.js");

let storage = new Storage();
let disabled_notify_rooms = [];

$(function() {
    if (!common.isPage("notification")) {
        return;
    }
    common.setPageTitle();

    storage.get(Const.CHROME_SYNC_DISABLE_NOTIFY_ROOM_KEY, function(data) {
        if (!$.isEmptyObject(data)) {
            disabled_notify_rooms = data;
            loadData();
        }
    });

    $("#save-btn").click(function() {
        var rooms = $("textarea").val().split(",");
        disabled_notify_rooms = [];
        $.each(rooms, function(index, room) {
            var room_id = common.parseRoomId(room);
            if (room_id) {
                disabled_notify_rooms.push(room_id);
            }
        })
        storage.set(Const.CHROME_SYNC_DISABLE_NOTIFY_ROOM_KEY, disabled_notify_rooms);
    });
});

function loadData() {
    $("textarea").val(disabled_notify_rooms.join());
}
