let emoticon = require("./Emoticon.js");
let shortcut = require("./Shortcut.js");
let mention = require("./Mention.js");
let room_information = require("./RoomInformation.js");
let view_enhancer = require("./ViewEnhancer.js");
let advertisement = require("./Advertisement.js");
let NotificationDisabler = require("./NotificationDisabler.js");
let notify_all = require("./NotifyAll.js");

let cw_timer;

$(() => {
    let rebuild = false;
    cw_timer = setInterval(() => {
        if (typeof CW !== "undefined" && typeof RM !== "undefined") {
            window.clearInterval(cw_timer);
            $("#_chatppPreLoad").remove();
            addStyle();

            room_information.setUp();

            if (emoticon.status) {
                rebuild = true;
                emoticon.setUp();
                view_enhancer.updateChatworkView();
            }

            mention.setUp();
            shortcut.setUp();
            advertisement.setUp();
            NotificationDisabler.setUp();
            notify_all.setUp();

            view_enhancer.updateChatSendView();
            view_enhancer.updateGetContactPanelView();

            if (rebuild) {
                RL.rooms[RM.id].build();
            }
        }
    }, 100);
});

function addStyle() {
    $("<style type=\"text/css\"> .emoticonTextEnable{font-weight: bold;};</style>").appendTo("head");
    $("<style type=\"text/css\"> .chatppErrorsText{font-weight: bold; color: red;};</style>").appendTo("head");
    $("<style type=\"text/css\"> .chatInput__element{opacity: 0.8;display: inline-block;padding: 0 5px;cursor: pointer;};</style>").appendTo("head");
    $("<style type=\"text/css\"> .messageBadge{vertical-align: middle !important;};</style>").appendTo("head");
    $("<style type=\"text/css\"> .timelineLinkTrim{vertical-align: middle !important;};</style>").appendTo("head");
    $("<style type=\"text/css\"> .chatpp_ui_emoticon{width: initial !important; height: initial !important};</style>").appendTo("head");
}
