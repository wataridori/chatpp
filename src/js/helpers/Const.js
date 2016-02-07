class Const {
    static LOCAL_STORAGE_DATA_KEY = "YACEP_EMO_DATA";
    static LOCAL_STORAGE_INFO_KEY = "YACEP_EMO_INFO";

    static LOCAL_STORAGE_GROUP_MENTION = "CHATPP_GROUP_MENTION";
    static LOCAL_STORAGE_ROOM_SHORTCUT = "CHATPP_ROOM_SHORTCUT";
    static LOCAL_STORAGE_DISABLE_NOTIFY_ROOM = "CHATPP_DISABLE_NOTIFY_ROOM";

    static CHROME_LOCAL_KEY = "CHATPP_CHROME_LOCAL_DATA";
    static CHROME_SYNC_KEY = "CHATPP_CHROME_SYNC_DATA";
    static CHROME_SYNC_GROUP_KEY = "CHATPP_CHROME_SYNC_GROUP";
    static CHROME_SYNC_ROOM_KEY = "CHATPP_CHROME_SYNC_ROOM";
    static CHROME_SYNC_DISABLE_NOTIFY_ROOM_KEY = "CHATPP_CHROME_SYNC_DISABLE_NOTIFY_ROOM";

    static DEFAULT_DATA_URL = "https://dl.dropboxusercontent.com/sh/rnyip87zzjyxaev/AACBVYHPxG88r-1BhYuBNkmHa/new.json?dl=1";
    static ADVERTISEMENT_URL = "https://www.dropbox.com/s/flbiyfqhcqapdbe/chatppad.json?dl=1";

    static VERSION_CHROME = "VERSION_CHROME";
    static VERSION_FIREFOX = "VERSION_FIREFOX";
    static VERSION_NAME_DEV = "dev";
    static VERSION_NAME_RELEASE = "final";

    static DEFAULT_IMG_HOST = "https://chatpp.thangtd.com/";

    static DELAY_TIME = 6000;
    static FORCE_TURN_OFF_THUMBNAIL = 1;
    static ADVERTISEMENT_LOAD_TIMEOUT = 1000 * 60 * 30;
}

module.exports = Const;
