let Const = require("../helpers/Const.js");
let common = require("../helpers/Common.js");
let Storage = require("../helpers/Storage.js");

let storage = new Storage();

let rooms = [];

$(function() {
    if (!common.isPage("room")) {
        return;
    }
    common.setPageTitle();

    storage.get(Const.CHROME_SYNC_ROOM_KEY, function(data) {
        if (!$.isEmptyObject(data)) {
            rooms = data;
            loadData();
        }
    });

    $("#save-btn").click(function() {
        $("input").each(function (){
            var number = $(this).data("btn");
            var value = $(this).val();
            rooms[number] = common.parseRoomId(value);
        });
        storage.set(Const.CHROME_SYNC_ROOM_KEY, rooms, common.reload);
    });
});

function loadData() {
    for (var i in rooms) {
        if (rooms[i]) {
            $("[data-btn='" + i +"']").val(rooms[i]);
        }
    }
}
