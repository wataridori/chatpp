class NotificationDisabler {
    static setUp() {
        let disabledNotifyRooms = [];

        if (localStorage["CHATPP_DISABLE_NOTIFY_ROOM"] !== undefined && localStorage["CHATPP_DISABLE_NOTIFY_ROOM"]) {
            disabledNotifyRooms = JSON.parse(localStorage["CHATPP_DISABLE_NOTIFY_ROOM"]);
        }

        if (disabledNotifyRooms) {
            let chatworkPopup = CW.popup;
            /* eslint-disable no-unused-vars */
            let b = null,
                d = null,
                e = window.navigator.userAgent.toLowerCase().indexOf("chrome") != -1;
            /* eslint-enable */
            CW.popup = function wrapper(a, f, j, h) {
                if (disabledNotifyRooms.indexOf(h.toString()) == -1) {
                    chatworkPopup(a, f, j, h);
                }
            }
        }
    }
}

module.exports = NotificationDisabler;
