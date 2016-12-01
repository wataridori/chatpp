let chatwork = require("../helpers/ChatworkFacade.js");
let Const = require("../helpers/Const.js");

class NotifyAll {
    setUp() {
        let text = LANGUAGE == "ja" ? "全員に通知" : "TO ALL",
            tooltip = LANGUAGE == "ja" ? "この機能についてはChat++のFeatureページにてご確認ください" : "Please refer Chat++'s Feature page for more details about this feature";
        $("#_sendEnterActionArea").after(`<div id="_notifyAllButton" role="button" tabindex="2" class="button btnDanger _cwBN _showDescription" aria-label="${tooltip}" style="margin-left: 5px;">${text}</div>`);
        let btn = $("#_notifyAllButton");
        NotifyAll.checkNotifyAllButton();
        RL.updateRoomDataOld = RL.updateRoomData;
        RL.updateRoomData = (a) => {
            RL.updateRoomDataOld(a);
            let room_id = btn.attr("data-room_id"), last_id = btn.attr("data-last_id"), msg = btn.attr("data-msg");
            if (room_id && last_id) {
                let tl = RL.rooms[room_id].timeline;
                for (let i = tl.chat_list.length - 1; tl.chat_list[i].id >= last_id; i--) {
                    if (tl.chat_list[i].aid == AC.myid && tl.chat_list[i].msg == msg) {
                        CS.sendMessage(room_id, `${Const.TO_ALL_MARK}\n${chatwork.getChatText()}`);
                        chatwork.clearChatText();
                        CS.deleteChat(tl.chat_list[i].id, null, null);
                        btn.attr("data-room_id", "").attr("data-last_id", "").attr("data-msg", "");
                        btn.removeClass("btnDisable").addClass("btnDanger").css("pointer-events", "");
                        break;
                    }
                }
            }
        }
        btn.click(() => {
            if (chatwork.getChatText().trim() === "") {
                return;
            }
            if (!chatwork.checkNotifyAllCondition()) {
                CW.alert("You are not allowed to use this feature in this room");
                return;
            }
            let msg = "", room_id = RM.id;
            for (let id in RL.rooms[room_id].member_dat) {
                msg += `[To:${id}]`;
            }
            btn.attr("data-room_id", room_id).attr("data-last_id", RM.timeline.getLastChatId()).attr("data-msg", msg);
            CS.sendMessage(room_id, msg);
            btn.addClass("btnDisable").css("pointer-events", "none");
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
