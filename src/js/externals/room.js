let Const = require("../helpers/Const.js");
let common = require("../helpers/Common.js");
let Storage = require("../helpers/Storage.js");

let storage = new Storage();

let rooms = [];

$(() => {
    if (!common.isPage("room")) {
        return;
    }
    common.setPageTitle();

    storage.get(Const.CHROME_SYNC_ROOM_KEY, (data) => {
        if (!$.isEmptyObject(data)) {
            rooms = data;
            loadData();
        }
    });

    $("#save-btn").click(() => {
        $("input").each((index, element) => {
            let number = $(element).data("btn");
            let value = $(element).val();
            rooms[number] = common.parseRoomId(value);
        });
        storage.set(Const.CHROME_SYNC_ROOM_KEY, rooms, common.reload);
    });
});

function loadData() {
    for (let i in rooms) {
        if (rooms[i]) {
            $(`[data-btn='${i}']`).val(rooms[i]);
        }
    }
}
