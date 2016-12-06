let chatwork = require("../helpers/ChatworkFacade.js");
let Const = require("../helpers/Const.js");

class NotifyAll {
    setUp() {
        let text = LANGUAGE == "ja" ? "全員に通知" : "TO ALL",
            tooltip = LANGUAGE == "ja" ? "この機能についてはChat++のFeatureページにてご確認ください" : "Please refer Chat++'s Feature page for more details about this feature";
        $("#_sendEnterActionArea").after(`<div id="_notifyAllButton" role="button" tabindex="2" class="button btnDanger _cwBN _showDescription" aria-label="${tooltip}" style="margin-left: 5px;">${text}</div>`);
        let btn = $("#_notifyAllButton");
        NotifyAll.checkNotifyAllButton();
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
            window.CHATPP_NOTIFY_ALL = {
                room_id,
                msg,
                last_id: RM.timeline.getLastChatId()
            };
            let callback = (data) => {
                if (window.CHATPP_NOTIFY_ALL && data.chat_list) {
                    for (let i = 0; i < data.chat_list.length; i++) {
                        if (data.chat_list[i].msg === window.CHATPP_NOTIFY_ALL.msg && data.chat_list[i].aid === chatwork.myId()) {
                            console.log(data.chat_list[i].id, i);
                            CS.deleteChat(data.chat_list[i].id, room_id, () => {
                                setTimeout(() => {
                                    CS.sendMessage(room_id, `${Const.TO_ALL_MARK}\n${chatwork.getChatText()}`, void 0, () => {
                                        chatwork.clearChatText();
                                        btn.removeClass("btnDisable").addClass("btnDanger").css("pointer-events", "");
                                    });
                                }, 1000);
                            }, null);
                            window.CHATPP_NOTIFY_ALL = null;
                        }
                    }
                }
            };
            CS.sendMessage(room_id, msg, void 0, callback);
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
