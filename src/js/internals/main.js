let emoticon = require("./Emoticon.js");
let shortcut = require("./Shortcut.js");
let view_enhancer = require("./ViewEnhancer.js");
let NotificationDisabler = require("./NotificationDisabler.js");
let notify_all = require("./NotifyAll.js");
let mention = require("./Mention.js");
let room_information = require("./RoomInformation.js");
const common = require("../helpers/Common.js");

let cw_timer;

$(() => {
    cw_timer = setInterval(() => {
        if (typeof CW !== "undefined" && typeof RM !== "undefined") {
            window.clearInterval(cw_timer);
            $("#_chatppPreLoad").remove();
            addStyle();
            exposeModules();
            if (emoticon.status) {
                emoticon.setUp();
                view_enhancer.updateChatworkView();
            }
            shortcut.setUp();
            NotificationDisabler.setUp();
            notify_all.setUp();

            view_enhancer.updateChatSendView();
            view_enhancer.updateGetContactPanelView();

            RoomView.prototype.buildOld = RoomView.prototype.build;
            RoomView.prototype.build = function(a) {
                this.buildOld(a);
                if (window.chatpp_id != RM.id) {
                    window.chatpp_id = RM.id;
                    setTimeout(() => {
                        emoticon.addExternalEmoList(false);
                        room_information.setUp();
                        mention.setUp();
                    }, 100);
                }
            }

            RL.rooms[RM.id].build();
        }
    }, 100);
});

function exposeModules() {
    /* eslint-disable no-console */
    /* for debugging new feature */
    if (window.esmodules.length < 10) {
        console.log("Exposing esmodules failed! Chat++ Emoticons will not work! Try to reload browser by Ctrl + Shift + R");
    }
    for (let i in window.esmodules) {
        let m = window.esmodules[i];
        if (m.a && m.a.langMap) {
            console.log("Find Language module");
            window.language_module = m;
            continue;
        }
    }
    /* eslint-enable */
}

function addStyle() {
    $("<style type=\"text/css\"> .emoticonTextEnable{font-weight: bold;};</style>").appendTo("head");
    $("<style type=\"text/css\"> .chatppErrorsText{font-weight: bold; color: red;};</style>").appendTo("head");
    $("<style type=\"text/css\"> .chatInput__element{opacity: 0.8;display: inline-block;padding: 0 5px;cursor: pointer;};</style>").appendTo("head");
    $("<style type=\"text/css\"> .messageBadge{vertical-align: middle !important;};</style>").appendTo("head");
    $("<style type=\"text/css\"> .timelineLinkTrim{vertical-align: middle !important;};</style>").appendTo("head");
    $("<style type=\"text/css\"> img.ui_emoticon:not([src^='https://assets.chatwork']) {width: auto !important;height: auto !important;}</style>").appendTo("head");
}
