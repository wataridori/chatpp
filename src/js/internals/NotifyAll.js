let common = require("../helpers/Common.js");
let chatwork = require("../helpers/ChatworkFacade.js");
let Const = require("../helpers/Const.js");

class NotifyAll {
    static setUp() {
        let text = LANGUAGE == "ja" ? "全員に通知" : "TO ALL",
            msg = "",
            token = `~${common.randomString(8)}~`;
        $("#_sendEnterActionArea").after(`<div id=\"_notifyButton\" role=\"button\" tabindex=\"2\" class=\"button btnPrimary _cwBN\" aria-disabled=\"false\" style=\"margin-left: 5px;\">${text}</div>`);
        $("#_notifyButton").click(() => {
            if (chatwork.getChatText().trim() === "") {
                return;
            }
            if (!chatwork.checkNotifyAllCondition()) {
                CW.alert("You are not allow to use this feature in this room");
                return;
            }
            let tl = RM.timeline,
                last_id = tl.getLastChatId();
            for (let id in RM.member_dat) msg += `[To:${id}]`;
            CS.sendMessage(RM.id, msg + token);
            let update_timer = setInterval(() => {
                if (tl.getLastChatId() != last_id) {
                    window.clearInterval(update_timer);
                    for (let i = tl.chat_list.length - 1; i > 0; i--) {
                        if (~tl.chat_list[i].msg.indexOf(token)) {
                            CS.deleteChat(tl.chat_list[i].id, null, null);
                            CS.sendMessage(RM.id, `${Const.TO_ALL_MARK}${chatwork.getChatText()}`);
                            chatwork.clearChatText();
                            break;
                        }
                    }
                }
            }, 100);
        });
    }
}

module.exports = NotifyAll;
