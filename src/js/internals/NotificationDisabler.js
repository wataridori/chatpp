class NotificationDisabler {
    static setUp() {
        let disabledNotifyRooms = null;

        if (localStorage["CHATPP_DISABLE_NOTIFY_ROOM"] !== ""
            && localStorage["CHATPP_DISABLE_NOTIFY_ROOM"] !== "undefined"
            && localStorage["CHATPP_DISABLE_NOTIFY_ROOM"]) {
            disabledNotifyRooms = JSON.parse(localStorage["CHATPP_DISABLE_NOTIFY_ROOM"]);
        }

        if (disabledNotifyRooms) {
            CW.popupOld = CW.popup;
            /* eslint-disable no-unused-vars */
            let b = null,
                d = null,
                e = window.navigator.userAgent.toLowerCase().indexOf("chrome") != -1;
            /* eslint-enable */
            CW.popup = function wrapper(icon, title, body, room_id) {
                if (disabledNotifyRooms.indexOf(room_id.toString()) == -1) {
                    CW.popupOld(icon, title, body, room_id);
                }
            }
        }
    }
}

module.exports = NotificationDisabler;
