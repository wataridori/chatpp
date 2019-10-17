let chatwork = require("../helpers/ChatworkFacade.js");
let Const = require("../helpers/Const.js");

class ViewEnhancer {
    constructor() {
        this.to_all_status = true;
    }

    isActive() {
        return this.to_all_status;
    }

    updateGetContactPanelView() {
        AC.view.getContactPanelOld = AC.view.getContactPanel;
        AC.view.getContactPanel = function(b, d) {
            let panel = AC.view.getContactPanelOld(b, d);
            if (b == chatwork.myId()) {
                return panel;
            }
            let temp = $("<div></div>");
            let label = LANGUAGE == "ja" ? "同じグループチャットを探す" : "Search for the same Group Chat";
            $(temp).html(panel);
            $(".contactPanel__footerButtonContainer", temp).first().append(`<div class="button searchSameRooms _showDescription" aria-label="${label}" style="margin: 0 10px" data-uid="${b}"><span class="icoFontAdminInfoMenu icoSizeLarge"></span></div>`);
            return $(temp).html();
        };
        $(document).on("click", ".searchSameRooms", (e) => {
            let uid = $(e.currentTarget).data("uid");
            let username = chatwork.getUserName(uid);
            let same_rooms = chatwork.searchRoomsByPerson(uid);
            let result = "";
            same_rooms.forEach((room) => {
                result += `<a href="https://www.chatwork.com/#!rid${room.id}"><div class="searchResultTitle _messageSearchChatGroup sameRoomInfo" data-rid="${room.id}"><div>${room.getIcon()} ${room.getName()}</div></div></a>`;
            });
            let delete_button = "";
            if (result) {
                delete_button = '<div class="">' +
                    `Remove <strong>${username}</strong> from the Rooms where you are an Administrator!<br>Please be careful!<br>` +
                    `<div id="_removeSameRoomsBtn" role="button" tabindex="2" class="button btnDanger _cwBN" data-uid="${uid}">Delete</div>` +
                    "</div>";
            }
            result = '<div class="searchResultListBox">' +
                `<div class="searchResultTitle _messageSearchChatGroup"><strong><span id="_sameRoomsNumber">${same_rooms.length}</span> room(s) found!</strong></div>` +
                `${result}${delete_button}` +
                "</div>";
            CW.view.alert(result, null, true);
        });
        $(document).on("click", "#_removeSameRoomsBtn", (e) => {
            let uid = $(e.currentTarget).data("uid");
            let username = chatwork.getUserName(uid);
            CW.confirm(`Are you sure to delete ${username} from the rooms that you are an Administrator?`, () => {
                let same_rooms = chatwork.searchRoomsByPerson(uid);
                let result = "";
                same_rooms.forEach((room) => {
                    if (chatwork.removeMemberFromRoom(uid, room.id)) {
                        $(`.sameRoomInfo[data-rid="${room.id}"]`).hide();
                        let sameRoomNumberElement = $("#_sameRoomsNumber");
                        sameRoomNumberElement.html(sameRoomNumberElement.html() - 1);
                        result += `<a href="https://www.chatwork.com/#!rid${room.id}"><div class="searchResultTitle _messageSearchChatGroup sameRoomInfo" data-rid="${room.id}"><div>${room.getIcon()} ${room.getName()}</div></div></a>`;
                    }
                });
                if (result) {
                    result = '<div class="searchResultListBox">' +
                        `<div class="searchResultTitle _messageSearchChatGroup"><strong>${username}</strong> has been removed from the following room(s)!</div>` +
                        `${result}` +
                        "</div>";
                    CW.view.alert(result, null, true);
                }
            });
        });
    }

    updateChatSendView() {
        CS.view.chatTextKeyUpOld = CS.view.chatTextKeyUp;
        CS.view.chatTextKeyUp = function(b) {
            let up_key = b.keyCode;
            let d = $("#_chatText");
            (function() {
                /* eslint-disable no-undef */
                if (!(up_key !== 13 || press_key !== 13)) {
                /* eslint-enable */
                    let a = d.val(),
                        b = d.prop("selectionStart"),
                        e = d.prop("selectionEnd");
                    b === e && (
                        e = a.substr(0, b), e = $.support.isWindowsFirefox ? e.replace(/(^|\n)``` *\r?\n([\s\S]+?)\r?\n```$/, "$1[code]\n$2\n[/code]") : e.replace(/(^|\n)``` *\r?\n([\s\S]+?)\r?\n```\n$/, "$1[code]\n$2\n[/code]\n"),
                        e = $.support.isWindowsFirefox ? e.replace(/(^|\n)``t *\r?\n([\s\S]+?)\r?\n```$/, "$1[title]$2[/title]") : e.replace(/(^|\n)``t *\r?\n([\s\S]+?)\r?\n```\n$/, "$1[title]$2[/title]"),
                        e = $.support.isWindowsFirefox ? e.replace(/(^|\n)``i *\r?\n([\s\S]+?)\r?\n```$/, "$1[info]$2[/info]") : e.replace(/(^|\n)``i *\r?\n([\s\S]+?)\r?\n```\n$/, "$1[info]$2[/info]\n"),
                        a = a.substr(b), d.val(e + a), d.prop("selectionStart", e.length), d.prop("selectionEnd", e.length)
                    )
                }
            })();
            return CS.view.chatTextKeyUpOld(b);
        };
    }

    updateChatworkView() {
        TimeLineView.prototype.getMessagePanelOld = TimeLineView.prototype.getMessagePanel;
        TimeLineView.prototype.getMessagePanel = function(a, b) {
            if (a.msg.indexOf(Const.TO_ALL_MARK) === 0) {
                a.mn = true;
            }

            return this.getMessagePanelOld(a, b);
        };
    }
}

let view_enhancer = new ViewEnhancer();
module.exports = view_enhancer;
