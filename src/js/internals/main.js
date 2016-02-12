let Const = require("../helpers/Const.js");

let emoticon = require("./Emoticon.js");
let shortcut = require("./Shortcut.js");
let mention = require("./Mention.js");
let room_information = require("./RoomInformation.js");
let view_enhancer = require("./ViewEnhancer.js");
let advertisement = require("./Advertisement.js");
let NotificationDisabler = require("./NotificationDisabler.js");

let cw_timer;

$(function(){
    var rebuild = false;
    cw_timer = setInterval(
        function(){
            if (typeof CW !== "undefined" && typeof CW.reg_cmp !== "undefined") {
                window.clearInterval(cw_timer);
                $("#_chatppPreLoad").remove();
                addStyle();

                room_information.setUp();

                if (emoticon.status) {
                    rebuild = true;
                    emoticon.addEmoticonText();
                }

                if (mention.status) {
                    mention.setUp();
                }

                if (shortcut.status) {
                    shortcut.addShortcutText();
                    shortcut.registerShortcut();
                }

                if (view_enhancer.isActive()) {
                    rebuild = true;
                    view_enhancer.updateChatworkView();
                }

                advertisement.setUp();

                if (emoticon.status) {
                    emoticon.addExternalEmo();
                }

                if (rebuild) {
                    RL.rooms[RM.id].build();
                }

                view_enhancer.updateChatSendView();
                NotificationDisabler.setUp();
            }
        },
        100
    );
});

function addStyle() {
    $('<style type="text/css"> .emoticonTextEnable{font-weight: bold;};</style>').appendTo("head");
    $('<style type="text/css"> .chatppErrorsText{font-weight: bold; color: red;};</style>').appendTo("head");
}