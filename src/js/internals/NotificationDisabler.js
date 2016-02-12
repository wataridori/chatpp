class NotificationDisabler {
    static setUp() {
        var disabledNotifyRooms = [];

        if (localStorage["CHATPP_DISABLE_NOTIFY_ROOM"] !== undefined && localStorage["CHATPP_DISABLE_NOTIFY_ROOM"]) {
            disabledNotifyRooms = JSON.parse(localStorage["CHATPP_DISABLE_NOTIFY_ROOM"]);
        }

        if (disabledNotifyRooms) {
            var chatworkPopup = CW.popup;
            var b = null,
                d = null,
                e = window.navigator.userAgent.toLowerCase().indexOf("chrome") != -1;
            CW.popup = function wrapper(a, f, j, h) {
                if (disabledNotifyRooms.indexOf(h.toString()) == -1) {
                    chatworkPopup(a, f, j, h);
                }
            }
        }
    }
}

module.exports = NotificationDisabler;
