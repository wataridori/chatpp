let Const = require("../helpers/Const.js");
let common = require("../helpers/Common.js");

let DOM_VK_SPACE = 32,
    DOM_VK_0 = 48,
    DOM_VK_A = 65,
    DOM_VK_B = 66,
    DOM_VK_E = 69,
    DOM_VK_J = 74,
    DOM_VK_K = 75,
    DOM_VK_L = 76,
    DOM_VK_M = 77,
    DOM_VK_N = 78,
    DOM_VK_Q = 81,
    DOM_VK_R = 82,
    DOM_VK_S = 83,
    DOM_VK_V = 86,
    DOM_VK_X = 88,
    DOM_VK_Z = 90;

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
        if (localStorage[Const.LOCAL_STORAGE_ROOM_SHORTCUT]) {
            this.room_shortcuts = JSON.parse(localStorage[Const.LOCAL_STORAGE_ROOM_SHORTCUT]);
        }
        this.status = common.getStatus("shortcut");
    }

    setUp() {
        if (this.status) {
            this.addShortcutText();
            this.registerShortcut();
        }
    }

    addShortcutText() {
        if ($("#_chatppShortcutText").length > 0) {
            return;
        }
        $("#_chatSendTool").append(
            "<li id=\"_chatppShortcutText\" role=\"button\" class=\" _showDescription\">" +
            "<span id=\"chatppShortcutText\" class=\"emoticonText icoSizeSmall\"></span>" +
            "</li>"
        );
        this.updateShortcutText();
        $("#chatppShortcutText").click(() => this.toggleShortcutStatus());
    }

    updateShortcutText() {
        let shortcut_text = `S: ${this.status ? "ON" : "OFF"}`;
        let div = $("#chatppShortcutText");
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
        let shortcuts_default = this.shortcuts_default;
        CW.view.registerKeyboardShortcut(shortcuts_default.reply, !1, !1, !1, !1, () => {
            let message_id = this.getHoverMessageId();
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
            let message_id = this.getHoverMessageId();
            this.goToPreviousMention(message_id);
        });

        CW.view.registerKeyboardShortcut(shortcuts_default.next_mention, !1, !1, !1, !1, () => {
            let message_id = this.getHoverMessageId();
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
            let chat_text = $("#_chatText");
            let text = chat_text.val();
            let img = text.match(/(\[preview id=[0-9]* ht=[0-9]*\])/);
            if (img && img[0]) {
                text = text.replace(/\[info\].*\[\/info\]/, img[0]);
                chat_text.val(text);
            }
        });

        let selectRoom = function (room) {
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
    }

    removeRegisteredKeyboardShortcut() {
        for (let keyboard in this.shortcuts_default) {
            CW.view.registerKeyboardShortcut(this.shortcuts_default[keyboard], !1, !1, !1, !1, () => false);
        }
    }

    triggerDefaultAction(action) {
        let me = $("._message:hover");
        let reply = me.find(`[data-cwui-ab-type='${action}']`);
        if (this.isDomExists(reply)) {
            reply.trigger("click");
        }
    }

    triggerMoreAction() {
        let more_action = $("._message:hover").find("._cwABMoreTip");
        if (this.isDomExists(more_action)) {
            more_action.trigger("click");
            let delete_button = $("._cwABMoreListBox").find("[data-cwui-ab-type=\"action\"]");
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
        let messages = RM.timeline.chat_list;
        for (let i = messages.length - 1; i >= 0; i--) {
            if (messages[i].id == id) {
                return i;
            }
        }

        return -1;
    }

    goToPreviousMention(current) {
        let position = this.getMessagePosition(current);
        let messages = RM.timeline.chat_list;
        for (let i = position - 1; i >= 0; i--) {
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
        let position = this.getMessagePosition(current);
        let messages = RM.timeline.chat_list;
        for (let i = position + 1; i > 0 && i < messages.length; i++) {
            if (this.isMentionMessage(messages[i])) {
                RM.load(messages[i].id);
                return true;
            }
        }

        return false;
    }

    isMentionMessage(message) {
        let regex_reply = new RegExp(`\[.* aid=${AC.myid} .*\]`);
        if (regex_reply.test(message.msg)) {
            return true;
        }

        let regex_to = new RegExp(`\[To:${AC.myid}\]`);
        return regex_to.test(message.msg);
    }

    replyMessage(message) {
        let data = RM.timeline.chat_id2chat_dat[message];
        if (data) {
            $("#_chatText").focus();
            let name = ST.data.private_nickname && !RM.isInternal() ? AC.getDefaultNickName(data.aid) : AC.getNickName(data.aid);
            /* eslint-disable no-useless-concat */
            CS.view.setChatText(`[${L.chatsend_reply} aid=${data.aid} to=${RM.id}-${message}] ${name}` + "\n", !0);
            /* eslint-enable */
        }
    }

    nextUnreadRoom(check_mention) {
        let current_room = RM.id;
        let sortedRooms = RL.getSortedRoomList();
        let rooms = RL.rooms;
        for (let i = 0; i < sortedRooms.length; i++) {
            if (sortedRooms[i] && sortedRooms[i] !== current_room) {
                let room = rooms[sortedRooms[i]];
                let check = check_mention ? room.getMentionNum() : room.getUnreadNum();
                if (check) {
                    return RL.selectRoom(room.id);
                }
            }
        }
    }

    nextRoom(back) {
        let previous;
        let current_room = RM.id;
        let sortedRooms = RL.getSortedRoomList();
        for (let i = 0; i < sortedRooms.length; i++) {
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
        let sortedRooms = RL.getSortedRoomList();
        let room_index = nonstick ? RL.getStickyRoomNum() : 0;
        return RL.selectRoom(sortedRooms[room_index]);
    }
}

let shortcut = new Shortcut();
module.exports = shortcut;
