let Const = require("../helpers/Const.js");
let common = require("../helpers/Common.js");

let DOM_VK_CANCEL = 3,
    DOM_VK_HELP = 6,
    DOM_VK_BACK_SPACE = 8,
    DOM_VK_TAB = 9,
    DOM_VK_CLEAR = 12,
    DOM_VK_RETURN = 13,
    DOM_VK_ENTER = 14,
    DOM_VK_SHIFT = 16,
    DOM_VK_CONTROL = 17,
    DOM_VK_ALT = 18,
    DOM_VK_PAUSE = 19,
    DOM_VK_CAPS_LOCK = 20,
    DOM_VK_ESCAPE = 27,
    DOM_VK_SPACE = 32,
    DOM_VK_PAGE_UP = 33,
    DOM_VK_PAGE_DOWN = 34,
    DOM_VK_END = 35,
    DOM_VK_HOME = 36,
    DOM_VK_LEFT = 37,
    DOM_VK_UP = 38,
    DOM_VK_RIGHT = 39,
    DOM_VK_DOWN = 40,
    DOM_VK_PRINTSCREEN = 44,
    DOM_VK_INSERT = 45,
    DOM_VK_DELETE = 46,
    DOM_VK_0 = 48,
    DOM_VK_1 = 49,
    DOM_VK_2 = 50,
    DOM_VK_3 = 51,
    DOM_VK_4 = 52,
    DOM_VK_5 = 53,
    DOM_VK_6 = 54,
    DOM_VK_7 = 55,
    DOM_VK_8 = 56,
    DOM_VK_9 = 57,
    DOM_VK_SEMICOLON = 59,
    DOM_VK_EQUALS = 61,
    DOM_VK_A = 65,
    DOM_VK_B = 66,
    DOM_VK_C = 67,
    DOM_VK_D = 68,
    DOM_VK_E = 69,
    DOM_VK_F = 70,
    DOM_VK_G = 71,
    DOM_VK_H = 72,
    DOM_VK_I = 73,
    DOM_VK_J = 74,
    DOM_VK_K = 75,
    DOM_VK_L = 76,
    DOM_VK_M = 77,
    DOM_VK_N = 78,
    DOM_VK_O = 79,
    DOM_VK_P = 80,
    DOM_VK_Q = 81,
    DOM_VK_R = 82,
    DOM_VK_S = 83,
    DOM_VK_T = 84,
    DOM_VK_U = 85,
    DOM_VK_V = 86,
    DOM_VK_W = 87,
    DOM_VK_X = 88,
    DOM_VK_Y = 89,
    DOM_VK_Z = 90,
    DOM_VK_CONTEXT_MENU = 93,
    DOM_VK_NUMPAD0 = 96,
    DOM_VK_NUMPAD1 = 97,
    DOM_VK_NUMPAD2 = 98,
    DOM_VK_NUMPAD3 = 99,
    DOM_VK_NUMPAD4 = 100,
    DOM_VK_NUMPAD5 = 101,
    DOM_VK_NUMPAD6 = 102,
    DOM_VK_NUMPAD7 = 103,
    DOM_VK_NUMPAD8 = 104,
    DOM_VK_NUMPAD9 = 105,
    DOM_VK_MULTIPLY = 106,
    DOM_VK_ADD = 107,
    DOM_VK_SEPARATOR = 108,
    DOM_VK_SUBTRACT = 109,
    DOM_VK_DECIMAL = 110,
    DOM_VK_DIVIDE = 111,
    DOM_VK_F1 = 112,
    DOM_VK_F2 = 113,
    DOM_VK_F3 = 114,
    DOM_VK_F4 = 115,
    DOM_VK_F5 = 116,
    DOM_VK_F6 = 117,
    DOM_VK_F7 = 118,
    DOM_VK_F8 = 119,
    DOM_VK_F9 = 120,
    DOM_VK_F10 = 121,
    DOM_VK_F11 = 122,
    DOM_VK_F12 = 123,
    DOM_VK_F13 = 124,
    DOM_VK_F14 = 125,
    DOM_VK_F15 = 126,
    DOM_VK_F16 = 127,
    DOM_VK_F17 = 128,
    DOM_VK_F18 = 129,
    DOM_VK_F19 = 130,
    DOM_VK_F20 = 131,
    DOM_VK_F21 = 132,
    DOM_VK_F22 = 133,
    DOM_VK_F23 = 134,
    DOM_VK_F24 = 135,
    DOM_VK_NUM_LOCK = 144,
    DOM_VK_SCROLL_LOCK = 145,
    DOM_VK_COMMA = 188,
    DOM_VK_PERIOD = 190,
    DOM_VK_SLASH = 191,
    DOM_VK_BACK_QUOTE = 192,
    DOM_VK_OPEN_BRACKET = 219,
    DOM_VK_BACK_SLASH = 220,
    DOM_VK_CLOSE_BRACKET = 221,
    DOM_VK_QUOTE = 222,
    DOM_VK_META = 224;

class Shortcut {
    constructor() {
        this.shortcuts_default = {
            reply: DOM_VK_R,
            quote: DOM_VK_Q,
            link: DOM_VK_L,
            edit: DOM_VK_E,
            task: DOM_VK_K,
            my_chat: DOM_VK_A,
            scroll: DOM_VK_S,
            previous_mention: DOM_VK_K,
            next_mention: DOM_VK_J,
            next_mention_room: DOM_VK_M,
            next_new_message_room: DOM_VK_N,
            down_room: DOM_VK_V,
            up_room: DOM_VK_B,
            first_room: DOM_VK_Z,
            first_nonstick_room: DOM_VK_X,
            focus_chatbox: DOM_VK_SPACE,
            edit_image_upload: DOM_VK_E
        };
        this.room_shortcuts = {};
        if (localStorage[Const.LOCAL_STORAGE_ROOM_SHORTCUT] !== undefined && localStorage[Const.LOCAL_STORAGE_ROOM_SHORTCUT]) {
            this.room_shortcuts = JSON.parse(localStorage[Const.LOCAL_STORAGE_ROOM_SHORTCUT]);
        }
        this.status = common.getStatus("shortcut");
    }

    addShortcutText() {
        if ($("#_chatppShortcutText").length > 0) {
            return;
        }
        $("#_chatSendTool").append(
            '<li id="_chatppShortcutText" role="button" class=" _showDescription">' +
            '<span id="chatppShortcutText" class="emoticonText icoSizeSmall"></span>' +
            '</li>'
        );
        this.updateShortcutText();
        $("#chatppShortcutText").click(() => this.toggleShortcutStatus());
    }

    updateShortcutText() {
        var shortcut_text = "S: " + (this.status ? "ON" : "OFF");
        var div = $("#chatppShortcutText");
        div.html(shortcut_text);
        if (this.status) {
            $("#_chatppShortcutText").attr("aria-label", "Click to disable Shortcut Feature");
            div.addClass("emoticonTextEnable");
        } else {
            $("#_chatppShortcutText").attr("aria-label", "Click to enable Shortcut Feature");
            div.removeClass("emoticonTextEnable");
        }
    }

    toggleShortcutStatus() {
        this.status = !this.status;
        common.setStatus("shortcut", this.status);
        if (this.status) {
            this.registerShortcut()
        } else {
            this.removeRegisteredKeyboardShortcut();
        }
        this.updateShortcutText();
    }

    registerShortcut() {
        var shortcuts_default = this.shortcuts_default;
        CW.view.registerKeyboardShortcut(shortcuts_default.reply, !1, !1, !1, !1, () => {
            var message_id = this.getHoverMessageId();
            this.replyMessage(message_id);
        });

        CW.view.registerKeyboardShortcut(shortcuts_default.quote, !1, !1, !1, !1, () => {
            this.triggerDefaultAction("quote");
        });

        CW.view.registerKeyboardShortcut(shortcuts_default.link, !1, !1, !1, !1, () => {
            this.triggerDefaultAction("link");
        });

        CW.view.registerKeyboardShortcut(shortcuts_default.edit, !1, !1, !1, !1, () => {
            this.triggerDefaultAction("edit");
        });

        CW.view.registerKeyboardShortcut(shortcuts_default.task, !1, !1, !1, !1, () => {
            this.triggerDefaultAction("task");
        });

        CW.view.registerKeyboardShortcut(shortcuts_default.my_chat, !1, !1, !1, !1, () => {
            RL.selectRoom(AC.getRoomId(AC.myid));
        });

        CW.view.registerKeyboardShortcut(shortcuts_default.scroll, !1, !1, !1, !1, () => {
            RM.load(RM.timeline.getLastChatId());
        });

        CW.view.registerKeyboardShortcut(shortcuts_default.previous_mention, !1, !1, !1, !1, () => {
            var message_id = this.getHoverMessageId();
            this.goToPreviousMention(message_id);
        });

        CW.view.registerKeyboardShortcut(shortcuts_default.next_mention, !1, !1, !1, !1, () => {
            var message_id = this.getHoverMessageId();
            this.goToNexMention(message_id);
        });

        CW.view.registerKeyboardShortcut(shortcuts_default.next_mention_room, !1, !1, !1, !1, () => {
            this.nextUnreadRoom(true);
        });

        CW.view.registerKeyboardShortcut(shortcuts_default.next_new_message_room, !1, !1, !1, !1, () => {
            this.nextUnreadRoom();
        });

        CW.view.registerKeyboardShortcut(shortcuts_default.up_room, !1, !1, !1, !1, () => {
            this.nextRoom(true)
        });

        CW.view.registerKeyboardShortcut(shortcuts_default.down_room, !1, !1, !1, !1, () => {
            this.nextRoom();
        });

        CW.view.registerKeyboardShortcut(shortcuts_default.first_room, !1, !1, !1, !1, () => {
            this.firstRoom();
        });

        CW.view.registerKeyboardShortcut(shortcuts_default.first_nonstick_room, !1, !1, !1, !1, () => {
            this.firstRoom(true);
        });

        CW.view.registerKeyboardShortcut(shortcuts_default.focus_chatbox, !1, !1, !1, !1, () => {
            $("#_chatText").focus();
        });

        CW.view.registerKeyboardShortcut(shortcuts_default.edit_image_upload, !1, !0, !1, !1, () => {
            this.triggerDefaultAction("edit");
            var chat_text = $("#_chatText");
            var text = chat_text.val();
            var img = text.match(/(\[preview id=[0-9]* ht=[0-9]*\])/);
            if (img && img[0]) {
                text = text.replace(/\[info\].*\[\/info\]/, img[0]);
                chat_text.val(text);
            }
        });

        var selectRoom = function (room) {
            return function() {
                RL.selectRoom(room);
            }
        };
        for (let i in this.room_shortcuts) {
            if (this.room_shortcuts[i]) {
                let room = this.room_shortcuts[i];
                CW.view.registerKeyboardShortcut(DOM_VK_0 + parseInt(i), !1, !1, !1, !1, selectRoom(room));
            }
        }
        console.log("ShortCuts added!");
    }

    removeRegisteredKeyboardShortcut() {
        for (var keyboard in this.shortcuts_default) {
            CW.view.registerKeyboardShortcut(this.shortcuts_default[keyboard], !1, !1, !1, !1, function() {
                return false;
            });
        }
    }

    triggerDefaultAction(action) {
        var me = $("._message:hover");
        var reply = me.find("[data-cwui-ab-type='" + action + "']");
        if (this.isDomExists(reply)) {
            reply.trigger("click");
        }
    }

    triggerMoreAction(action) {
        var more_action = $("._message:hover").find("._cwABMoreTip");
        if (this.isDomExists(more_action)) {
            more_action.trigger("click");
            var delete_button = $("._cwABMoreListBox").find('[data-cwui-ab-type="action"]');
            if (this.isDomExists(delete_button)) {
                delete_button.trigger("click");
            }
        }
    }

    selectRoom(room) {
        RL.selectRoom(room);
    }

    isDomExists(dom) {
        return dom.length > 0;
    }

    getHoverMessageId() {
        return $("._message:hover").data("mid");
    }

    getMessagePosition(id) {
        var messages = RM.timeline.chat_list;
        for (var i = messages.length - 1; i >= 0; i--) {
            if (messages[i].id == id) {
                return i;
            }
        }

        return -1;
    }

    goToPreviousMention(current) {
        var position = this.getMessagePosition(current);
        var messages = RM.timeline.chat_list;
        for (var i = position - 1; i >= 0; i--) {
            if (this.isMentionMessage(messages[i])) {
                RM.load(messages[i].id);
                return true;
            }
        }

        if (!RM.timeline.has_old && messages.length == 0) {
            return false;
        }

        RM.timeline.loadOld();
    }

    goToNexMention(current) {
        var position = this.getMessagePosition(current);
        var messages = RM.timeline.chat_list;
        for (var i = position + 1; i > 0 && i < messages.length; i++) {
            if (this.isMentionMessage(messages[i])) {
                RM.load(messages[i].id);
                return true;
            }
        }

        return false;
    }

    isMentionMessage(message) {
        var regex_reply = new RegExp("\\[.* aid=" + myid + " .*\\]");
        if (regex_reply.test(message.msg)) {
            return true;
        }

        var regex_to = new RegExp("\\[To:" + myid + "\\]");
        return regex_to.test(message.msg);
    }

    replyMessage(message) {
        var data = RM.timeline.chat_id2chat_dat[message];
        if (data) {
            $C("#_chatText").focus();
            var name = ST.data.private_nickname && !RM.isInternal() ? AC.getDefaultNickName(data.aid) : AC.getNickName(data.aid);
            CS.view.setChatText("[" + L.chatsend_reply + " aid=" + data.aid + " to=" + RM.id + "-" + message + "] " + name + "\n", !0);
        }
    }

    nextUnreadRoom(check_mention) {
        var current_room = RM.id;
        var sortedRooms = RL.getSortedRoomList();
        var rooms = RL.rooms;
        for (var i = 0; i < sortedRooms.length; i++) {
            if (sortedRooms[i] && sortedRooms[i] !== current_room) {
                var room = rooms[sortedRooms[i]];
                var check = check_mention ? room.getMentionNum() : room.getUnreadNum();
                if (check) {
                    return RL.selectRoom(room.id);
                }
            }
        }
    }

    nextRoom(back) {
        var previous;
        var current_room = RM.id;
        var sortedRooms = RL.getSortedRoomList();
        for (var i = 0; i < sortedRooms.length; i++) {
            if (sortedRooms[i] === current_room) {
                if (back) {
                    if (previous) {
                        return RL.selectRoom(previous);
                    }
                } else {
                    if (sortedRooms[i+1]) {
                        return RL.selectRoom(sortedRooms[i+1]);
                    }
                }
            }
            previous = sortedRooms[i];
        }
    }

    firstRoom(nonstick) {
        var sortedRooms = RL.getSortedRoomList();
        var room_index = nonstick ? RL.getStickyRoomNum() : 0;
        return RL.selectRoom(sortedRooms[room_index]);
    }
}

let shortcut = new Shortcut();
module.exports = shortcut;
