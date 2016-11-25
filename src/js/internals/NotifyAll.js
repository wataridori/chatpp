let common = require("../helpers/Common.js");
let chatwork = require("../helpers/ChatworkFacade.js");
let Const = require("../helpers/Const.js");

class NotifyAll {
    setUp() {
        let text = LANGUAGE == "ja" ? "全員に通知" : "TO ALL",
            tooltip = LANGUAGE == "ja" ? "この機能についてはChat++のFeatureページにてご確認ください" : "Please refer Chat++'s Feature page for more details about this feature";
        $("#_sendEnterActionArea").after(`<div id="_notifyAllButton" role="button" tabindex="2" class="button btnDanger _cwBN _showDescription" aria-label="${tooltip}" style="margin-left: 5px;">${text}</div>`);
        NotifyAll.checkNotifyAllButton();
        $("#_notifyAllButton").click(() => {
            if (chatwork.getChatText().trim() === "") {
                return;
            }
            if (!chatwork.checkNotifyAllCondition()) {
                CW.alert("You are not allowed to use this feature in this room");
                return;
            }
            let room_id = RM.id,
                tl = RL.rooms[room_id].timeline,
                msg = "",
                last_id = tl.getLastChatId(),
                token = `~${common.randomString(8)}~`;
            for (let id in RL.rooms[room_id].member_dat) msg += `[To:${id}]`;
            CS.sendMessage(room_id, msg + token);
            let update_timer = setInterval(() => {
                tl.build();
                if (tl.getLastChatId() != last_id) {
                    for (let i = tl.chat_list.length - 1; i > 0; i--) {
                        if (~tl.chat_list[i].msg.indexOf(token)) {
                            let chat_id = tl.chat_list[i].id;
                            window.clearInterval(update_timer);
                            CS.sendMessage(room_id, `${Const.TO_ALL_MARK}\n${chatwork.getChatText()}`);
                            chatwork.clearChatText();
                            $("#_notifyAllButton").addClass("btnDisable").css("pointer-events", "none");
                            let delete_timeout = setTimeout(() => {
                                window.clearTimeout(delete_timeout);
                                CS.deleteChat(chat_id, null, null);
                                $("#_notifyAllButton").removeClass("btnDisable").css("pointer-events", "");
                            }, 1000);
                            break;
                        }
                    }
                }
            }, 100);
        });
        this.registerRegex();
        this.setUpButton();
    }

    setUpButton() {
        Room.prototype.buildOld = Room.prototype.build;
        Room.prototype.build = function(b) {
            this.buildOld(b);
            NotifyAll.checkNotifyAllButton();
        }
    }

    static checkNotifyAllButton() {
        if (!chatwork.checkNotifyAllCondition()) {
            $("#_notifyAllButton").hide();
        } else {
            $("#_notifyAllButton").show();
        }
    }

    registerRegex() {
        CW.reg_cmp.push({
            key: /TO ALL &gt;&gt;&gt;/g,
            rep: "<span class=\"chatTimeLineTo\">TO ALL</span>",
            reptxt: "TO ALL",
            special: true
        });
    }
}

let notify_all = new NotifyAll();
module.exports = notify_all;

