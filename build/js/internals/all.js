(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Const = require("./Const.js");

var Common = function () {
    function Common() {
        _classCallCheck(this, Common);

        this.version = Const.VERSION_CHROME;
        this.app_detail = this.getAppDetail();
        this.official_emoticons_data = {
            Default: {
                name: "Default",
                link: "https://dl.dropboxusercontent.com/s/lmxis68cfh4v1ho/default.json?dl=1",
                description: "The default Emoticons data of Chat++"
            },
            Vietnamese: {
                name: "Vietnamese",
                link: "https://dl.dropboxusercontent.com/s/2b085bilbno4ri1/vietnamese.json?dl=1",
                description: "Yet another data for people who want to use Vietnamese Emoticons"
            },
            Japanese: {
                name: "Japanese",
                link: "https://dl.dropboxusercontent.com/s/fdq05pwwtsccrn6/japanese.json?dl=1",
                description: "Yet another data for people who want to use Japanese Emoticons"
            },
            Skype: {
                name: "Skype",
                link: "https://dl.dropboxusercontent.com/s/8ew2mdh0v2vcad8/skype.json?dl=1",
                description: "Skype Original Emoticons"
            }
        };
    }

    _createClass(Common, [{
        key: "isChromeVersion",
        value: function isChromeVersion() {
            return this.version === Const.VERSION_CHROME;
        }
    }, {
        key: "isFirefoxVersion",
        value: function isFirefoxVersion() {
            return this.version === Const.VERSION_FIREFOX;
        }
    }, {
        key: "isDevVersion",
        value: function isDevVersion() {
            var app_name = this.app_detail.name;
            return app_name.indexOf(Const.VERSION_NAME_DEV, app_name.length - Const.VERSION_NAME_DEV.length) !== -1;
        }
    }, {
        key: "getStorage",
        value: function getStorage(local) {
            if (!local && this.isChromeVersion()) {
                return chrome.storage.sync;
            }

            return chrome.storage.local;
        }
    }, {
        key: "sync",
        value: function sync(key, data, callback) {
            var sync = {};
            sync[key] = data;
            var storage = this.getStorage();
            storage.set(sync, function () {
                if (callback) {
                    callback();
                }
            });
        }
    }, {
        key: "getEmoticonDataUrl",
        value: function getEmoticonDataUrl(data_name, default_url) {
            if (data_name && this.official_emoticons_data[data_name]) {
                default_url = this.official_emoticons_data[data_name]["link"];
            }

            return default_url ? default_url.replace("http://i.imgur.com/", "https://i.imgur.com/") : null;
        }
    }, {
        key: "getObjectLength",
        value: function getObjectLength(object) {
            return Object.keys(object).length;
        }
    }, {
        key: "htmlEncode",
        value: function htmlEncode(value) {
            return $("<div/>").text(value).html();
        }
    }, {
        key: "getEmoUrl",
        value: function getEmoUrl(img) {
            if (img.indexOf("https://") == 0 || img.indexOf("http://") == 0) {
                return img;
            }
            return Const.DEFAULT_IMG_HOST + "img/emoticons/" + img;
        }
    }, {
        key: "parseRoomId",
        value: function parseRoomId(text) {
            var room = text.match(/\d+/g);
            if (!room || room.length == 0) {
                return null;
            }
            room = room[0];
            var regex = /^[0-9]{6,10}$/g;
            if (regex.test(room)) {
                return room;
            }
            return null;
        }
    }, {
        key: "reload",
        value: function reload() {
            location.reload();
        }
    }, {
        key: "getAppDetail",
        value: function getAppDetail() {
            return chrome.app.getDetails();
        }
    }, {
        key: "getAppVersion",
        value: function getAppVersion() {
            return this.app_detail.version;
        }
    }, {
        key: "getAppVersionName",
        value: function getAppVersionName() {
            if (this.isDevVersion()) {
                return Const.VERSION_NAME_DEV;
            }

            return Const.VERSION_NAME_RELEASE;
        }
    }, {
        key: "getAppFullName",
        value: function getAppFullName() {
            var version_name = this.getAppVersionName();

            return this.app_detail.short_name + " " + this.app_detail.version + " " + version_name;
        }
    }, {
        key: "openNewUrl",
        value: function openNewUrl(url) {
            chrome.tabs.create({ url: url });
        }
    }, {
        key: "getExtensionPageUrl",
        value: function getExtensionPageUrl(url) {
            return chrome.extension.getURL(url);
        }
    }, {
        key: "openNewExtensionPageUrl",
        value: function openNewExtensionPageUrl(url) {
            this.openNewUrl(this.getExtensionPageUrl(url));
        }
    }, {
        key: "validateUrl",
        value: function validateUrl(url) {
            var regexp = /(https):\/\/(\w+:?\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
            return regexp.test(url);
        }
    }, {
        key: "isPage",
        value: function isPage(page_name) {
            return $("#page-name").data("page-name") === page_name;
        }
    }, {
        key: "setPageTitle",
        value: function setPageTitle() {
            $("#chatpp_name").html(this.getAppFullName());
        }
    }, {
        key: "setStatus",
        value: function setStatus(key, value) {
            if (key.indexOf("_status") === -1) {
                key = key + "_status";
            }
            localStorage[key] = !!value;
        }
    }, {
        key: "getStatus",
        value: function getStatus(key) {
            if (key.indexOf("_status") === -1) {
                key = key + "_status";
            }
            return localStorage[key] === "true" || localStorage[key] === true;
        }
    }, {
        key: "regexEscape",
        value: function regexEscape(string) {
            return string.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
        }
    }, {
        key: "generateEmoticonRegex",
        value: function generateEmoticonRegex(text, regex) {
            regex = regex || this.htmlEncode(this.regexEscape(text));
            return new RegExp(regex, "g");
        }
    }]);

    return Common;
}();

var common = new Common();
module.exports = common;

},{"./Const.js":2}],2:[function(require,module,exports){
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Const = function Const() {
    _classCallCheck(this, Const);
};

Const.LOCAL_STORAGE_DATA_KEY = "YACEP_EMO_DATA";
Const.LOCAL_STORAGE_INFO_KEY = "YACEP_EMO_INFO";
Const.LOCAL_STORAGE_GROUP_MENTION = "CHATPP_GROUP_MENTION";
Const.LOCAL_STORAGE_ROOM_SHORTCUT = "CHATPP_ROOM_SHORTCUT";
Const.LOCAL_STORAGE_DISABLE_NOTIFY_ROOM = "CHATPP_DISABLE_NOTIFY_ROOM";
Const.CHROME_LOCAL_KEY = "CHATPP_CHROME_LOCAL_DATA";
Const.CHROME_SYNC_KEY = "CHATPP_CHROME_SYNC_DATA";
Const.CHROME_SYNC_GROUP_KEY = "CHATPP_CHROME_SYNC_GROUP";
Const.CHROME_SYNC_ROOM_KEY = "CHATPP_CHROME_SYNC_ROOM";
Const.CHROME_SYNC_DISABLE_NOTIFY_ROOM_KEY = "CHATPP_CHROME_SYNC_DISABLE_NOTIFY_ROOM";
Const.DEFAULT_DATA_URL = "https://dl.dropboxusercontent.com/s/lmxis68cfh4v1ho/default.json?dl=1";
Const.ADVERTISEMENT_URL = "https://www.dropbox.com/s/flbiyfqhcqapdbe/chatppad.json?dl=1";
Const.VERSION_CHROME = "VERSION_CHROME";
Const.VERSION_FIREFOX = "VERSION_FIREFOX";
Const.VERSION_NAME_DEV = "dev";
Const.VERSION_NAME_RELEASE = "final";
Const.DEFAULT_IMG_HOST = "https://chatpp.thangtd.com/";
Const.DELAY_TIME = 6000;
Const.FORCE_TURN_OFF_THUMBNAIL = 1;
Const.ADVERTISEMENT_LOAD_TIMEOUT = 1000 * 60 * 30;

module.exports = Const;

},{}],3:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var common = require("../helpers/Common.js");
var Const = require("../helpers/Const.js");

var Emoticon = function () {
    function Emoticon() {
        _classCallCheck(this, Emoticon);

        this.status = common.getStatus("emoticon");
    }

    _createClass(Emoticon, [{
        key: "addExternalEmo",
        value: function addExternalEmo() {
            var emo_data = JSON.parse(localStorage[Const.LOCAL_STORAGE_DATA_KEY]);
            this.addEmo(emo_data);
            this.status = true;
            this.updateEmoticonText();
            console.log("Emoticon added!");
        }
    }, {
        key: "isSpecialEmo",
        value: function isSpecialEmo(emo) {
            var special_emo = [":-ss", ":-??", "~:>", ":@)", "~X(", "3:-O"];
            return special_emo.indexOf(emo) > -1;
        }
    }, {
        key: "removeExternalEmo",
        value: function removeExternalEmo() {
            for (var i = CW.reg_cmp.length - 1; true; i--) {
                var emo = CW.reg_cmp[i];
                if (!$.isEmptyObject(emo) && emo.external !== undefined && emo.external === true) {
                    CW.reg_cmp.splice(i, 1);
                } else {
                    break;
                }
            }
            this.status = false;
            common.setStatus("emoticon", false);
            this.updateEmoticonText();
            console.log("Emoticons removed!");
        }
    }, {
        key: "addEmoticonText",
        value: function addEmoticonText() {
            var _this = this;

            if ($("#emoticonText").length > 0) {
                return;
            }
            var emoticon_text = "E " + (this.status ? "ON" : "OFF");
            $("#_chatSendTool").append('<li id="_emoticons" role="button" class=" _showDescription">' + '<span id="emoticonText" class="emoticonText icoSizeSmall">' + emoticon_text + '</span>' + '</li>');
            this.setEmoticonTextLabel();
            $("#emoticonText").click(function () {
                return _this.toggleEmoticonsStatus();
            });
            this.addErrorText();
        }
    }, {
        key: "setEmoticonTextLabel",
        value: function setEmoticonTextLabel() {
            $("#_emoticons").attr("aria-label", "Data: " + localStorage["emoticon_data_version"]);
        }
    }, {
        key: "updateEmoticonText",
        value: function updateEmoticonText() {
            var emoticon_text = "E: " + (this.status ? "ON" : "OFF");
            var div = $("#emoticonText");
            div.html(emoticon_text);
            if (this.status) {
                div.addClass("emoticonTextEnable");
            } else {
                div.removeClass("emoticonTextEnable");
            }
        }
    }, {
        key: "addErrorText",
        value: function addErrorText() {
            if (!localStorage["failed_data"] || $("#errorText").length > 0) {
                return;
            }
            var failed_data = JSON.parse(localStorage["failed_data"]).join(", ");
            var failed_data_text = "The following data could not be loaded: " + failed_data;
            $("#_chatSendTool").append('<li id="_chatppErrors" role="button" class=" _showDescription">' + '<span id="chatppErrors" class="emoticonText icoSizeSmall chatppErrorsText">(ERROR)</span>' + '</li>');
            $("#_chatppErrors").attr("aria-label", failed_data_text);
        }
    }, {
        key: "toggleEmoticonsStatus",
        value: function toggleEmoticonsStatus() {
            if (this.status) {
                this.removeExternalEmo();
            } else {
                this.addExternalEmo();
            }
            RL.rooms[RM.id].build();
        }
    }, {
        key: "addEmo",
        value: function addEmo(emo) {
            for (var index = 0; index < emo.length; index++) {
                var rep = "";
                var encoded_text = common.htmlEncode(emo[index].key);
                var title = encoded_text + " - " + emo[index].data_name;
                var img_src = common.htmlEncode(common.getEmoUrl(emo[index].src));
                if (this.isSpecialEmo(emo[index].key)) {
                    rep = '<img src="' + img_src + '" class="ui_emoticon"/>';
                } else {
                    rep = '<img src="' + img_src + '" title="' + title + '" alt="' + encoded_text + '" class="ui_emoticon"/>';
                }
                var regex = common.generateEmoticonRegex(emo[index].key, emo[index].regex);
                CW.reg_cmp.push({
                    key: regex,
                    rep: rep,
                    reptxt: emo[index].key,
                    external: true
                });
            }
        }
    }]);

    return Emoticon;
}();

module.exports = Emoticon;

},{"../helpers/Common.js":1,"../helpers/Const.js":2}],4:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Const = require("../helpers/Const.js");
var common = require("../helpers/Common.js");

var DOM_VK_CANCEL = 3,
    DOM_VK_HELP = 6,
    DOM_VK_BACK_SPACE = 8,
    DOM_VK_TAB = 9,
    DOM_VK_CLEAR = 12,
    DOM_VK_RETURN = 13,
    DOM_VK_ENTER = 14,
    DOM_VK_SHIFT = 16,
    DOM_VK_CONTROL = 17,
    DOM_VK_ALT = 18,
    DOM_VK_PAUSE = 19,
    DOM_VK_CAPS_LOCK = 20,
    DOM_VK_ESCAPE = 27,
    DOM_VK_SPACE = 32,
    DOM_VK_PAGE_UP = 33,
    DOM_VK_PAGE_DOWN = 34,
    DOM_VK_END = 35,
    DOM_VK_HOME = 36,
    DOM_VK_LEFT = 37,
    DOM_VK_UP = 38,
    DOM_VK_RIGHT = 39,
    DOM_VK_DOWN = 40,
    DOM_VK_PRINTSCREEN = 44,
    DOM_VK_INSERT = 45,
    DOM_VK_DELETE = 46,
    DOM_VK_0 = 48,
    DOM_VK_1 = 49,
    DOM_VK_2 = 50,
    DOM_VK_3 = 51,
    DOM_VK_4 = 52,
    DOM_VK_5 = 53,
    DOM_VK_6 = 54,
    DOM_VK_7 = 55,
    DOM_VK_8 = 56,
    DOM_VK_9 = 57,
    DOM_VK_SEMICOLON = 59,
    DOM_VK_EQUALS = 61,
    DOM_VK_A = 65,
    DOM_VK_B = 66,
    DOM_VK_C = 67,
    DOM_VK_D = 68,
    DOM_VK_E = 69,
    DOM_VK_F = 70,
    DOM_VK_G = 71,
    DOM_VK_H = 72,
    DOM_VK_I = 73,
    DOM_VK_J = 74,
    DOM_VK_K = 75,
    DOM_VK_L = 76,
    DOM_VK_M = 77,
    DOM_VK_N = 78,
    DOM_VK_O = 79,
    DOM_VK_P = 80,
    DOM_VK_Q = 81,
    DOM_VK_R = 82,
    DOM_VK_S = 83,
    DOM_VK_T = 84,
    DOM_VK_U = 85,
    DOM_VK_V = 86,
    DOM_VK_W = 87,
    DOM_VK_X = 88,
    DOM_VK_Y = 89,
    DOM_VK_Z = 90,
    DOM_VK_CONTEXT_MENU = 93,
    DOM_VK_NUMPAD0 = 96,
    DOM_VK_NUMPAD1 = 97,
    DOM_VK_NUMPAD2 = 98,
    DOM_VK_NUMPAD3 = 99,
    DOM_VK_NUMPAD4 = 100,
    DOM_VK_NUMPAD5 = 101,
    DOM_VK_NUMPAD6 = 102,
    DOM_VK_NUMPAD7 = 103,
    DOM_VK_NUMPAD8 = 104,
    DOM_VK_NUMPAD9 = 105,
    DOM_VK_MULTIPLY = 106,
    DOM_VK_ADD = 107,
    DOM_VK_SEPARATOR = 108,
    DOM_VK_SUBTRACT = 109,
    DOM_VK_DECIMAL = 110,
    DOM_VK_DIVIDE = 111,
    DOM_VK_F1 = 112,
    DOM_VK_F2 = 113,
    DOM_VK_F3 = 114,
    DOM_VK_F4 = 115,
    DOM_VK_F5 = 116,
    DOM_VK_F6 = 117,
    DOM_VK_F7 = 118,
    DOM_VK_F8 = 119,
    DOM_VK_F9 = 120,
    DOM_VK_F10 = 121,
    DOM_VK_F11 = 122,
    DOM_VK_F12 = 123,
    DOM_VK_F13 = 124,
    DOM_VK_F14 = 125,
    DOM_VK_F15 = 126,
    DOM_VK_F16 = 127,
    DOM_VK_F17 = 128,
    DOM_VK_F18 = 129,
    DOM_VK_F19 = 130,
    DOM_VK_F20 = 131,
    DOM_VK_F21 = 132,
    DOM_VK_F22 = 133,
    DOM_VK_F23 = 134,
    DOM_VK_F24 = 135,
    DOM_VK_NUM_LOCK = 144,
    DOM_VK_SCROLL_LOCK = 145,
    DOM_VK_COMMA = 188,
    DOM_VK_PERIOD = 190,
    DOM_VK_SLASH = 191,
    DOM_VK_BACK_QUOTE = 192,
    DOM_VK_OPEN_BRACKET = 219,
    DOM_VK_BACK_SLASH = 220,
    DOM_VK_CLOSE_BRACKET = 221,
    DOM_VK_QUOTE = 222,
    DOM_VK_META = 224;

var Shortcut = function () {
    function Shortcut() {
        _classCallCheck(this, Shortcut);

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
        if (localStorage[Const.LOCAL_STORAGE_ROOM_SHORTCUT] !== undefined && localStorage[Const.LOCAL_STORAGE_ROOM_SHORTCUT]) {
            this.room_shortcuts = JSON.parse(localStorage[Const.LOCAL_STORAGE_ROOM_SHORTCUT]);
        }
        this.status = common.getStatus("shortcut");
    }

    _createClass(Shortcut, [{
        key: "addShortcutText",
        value: function addShortcutText() {
            var _this = this;

            if ($("#_chatppShortcutText").length > 0) {
                return;
            }
            $("#_chatSendTool").append('<li id="_chatppShortcutText" role="button" class=" _showDescription">' + '<span id="chatppShortcutText" class="emoticonText icoSizeSmall"></span>' + '</li>');
            this.updateShortcutText();
            $("#chatppShortcutText").click(function () {
                return _this.toggleShortcutStatus();
            });
        }
    }, {
        key: "updateShortcutText",
        value: function updateShortcutText() {
            var shortcut_text = "S: " + (this.status ? "ON" : "OFF");
            var div = $("#chatppShortcutText");
            div.html(shortcut_text);
            if (this.status) {
                $("#_chatppShortcutText").attr("aria-label", "Click to disable Shortcut Feature");
                div.addClass("emoticonTextEnable");
            } else {
                $("#_chatppShortcutText").attr("aria-label", "Click to enable Shortcut Feature");
                div.removeClass("emoticonTextEnable");
            }
        }
    }, {
        key: "toggleShortcutStatus",
        value: function toggleShortcutStatus() {
            this.status = !this.status;
            common.setStatus("shortcut", this.status);
            if (this.status) {
                this.registerShortcut();
            } else {
                this.removeRegisteredKeyboardShortcut();
            }
            this.updateShortcutText();
        }
    }, {
        key: "registerShortcut",
        value: function registerShortcut() {
            var _this2 = this;

            var shortcuts_default = this.shortcuts_default;
            CW.view.registerKeyboardShortcut(shortcuts_default.reply, !1, !1, !1, !1, function () {
                var message_id = _this2.getHoverMessageId();
                _this2.replyMessage(message_id);
            });

            CW.view.registerKeyboardShortcut(shortcuts_default.quote, !1, !1, !1, !1, function () {
                _this2.triggerDefaultAction("quote");
            });

            CW.view.registerKeyboardShortcut(shortcuts_default.link, !1, !1, !1, !1, function () {
                _this2.triggerDefaultAction("link");
            });

            CW.view.registerKeyboardShortcut(shortcuts_default.edit, !1, !1, !1, !1, function () {
                _this2.triggerDefaultAction("edit");
            });

            CW.view.registerKeyboardShortcut(shortcuts_default.task, !1, !1, !1, !1, function () {
                _this2.triggerDefaultAction("task");
            });

            CW.view.registerKeyboardShortcut(shortcuts_default.my_chat, !1, !1, !1, !1, function () {
                RL.selectRoom(AC.getRoomId(AC.myid));
            });

            CW.view.registerKeyboardShortcut(shortcuts_default.scroll, !1, !1, !1, !1, function () {
                RM.load(RM.timeline.getLastChatId());
            });

            CW.view.registerKeyboardShortcut(shortcuts_default.previous_mention, !1, !1, !1, !1, function () {
                var message_id = _this2.getHoverMessageId();
                _this2.goToPreviousMention(message_id);
            });

            CW.view.registerKeyboardShortcut(shortcuts_default.next_mention, !1, !1, !1, !1, function () {
                var message_id = _this2.getHoverMessageId();
                _this2.goToNexMention(message_id);
            });

            CW.view.registerKeyboardShortcut(shortcuts_default.next_mention_room, !1, !1, !1, !1, function () {
                _this2.nextUnreadRoom(true);
            });

            CW.view.registerKeyboardShortcut(shortcuts_default.next_new_message_room, !1, !1, !1, !1, function () {
                _this2.nextUnreadRoom();
            });

            CW.view.registerKeyboardShortcut(shortcuts_default.up_room, !1, !1, !1, !1, function () {
                _this2.nextRoom(true);
            });

            CW.view.registerKeyboardShortcut(shortcuts_default.down_room, !1, !1, !1, !1, function () {
                _this2.nextRoom();
            });

            CW.view.registerKeyboardShortcut(shortcuts_default.first_room, !1, !1, !1, !1, function () {
                _this2.firstRoom();
            });

            CW.view.registerKeyboardShortcut(shortcuts_default.first_nonstick_room, !1, !1, !1, !1, function () {
                _this2.firstRoom(true);
            });

            CW.view.registerKeyboardShortcut(shortcuts_default.focus_chatbox, !1, !1, !1, !1, function () {
                $("#_chatText").focus();
            });

            CW.view.registerKeyboardShortcut(shortcuts_default.edit_image_upload, !1, !0, !1, !1, function () {
                _this2.triggerDefaultAction("edit");
                var chat_text = $("#_chatText");
                var text = chat_text.val();
                var img = text.match(/(\[preview id=[0-9]* ht=[0-9]*\])/);
                if (img && img[0]) {
                    text = text.replace(/\[info\].*\[\/info\]/, img[0]);
                    chat_text.val(text);
                }
            });

            var selectRoom = function selectRoom(room) {
                return function () {
                    RL.selectRoom(room);
                };
            };
            for (var i in this.room_shortcuts) {
                if (this.room_shortcuts[i]) {
                    var room = this.room_shortcuts[i];
                    CW.view.registerKeyboardShortcut(DOM_VK_0 + parseInt(i), !1, !1, !1, !1, selectRoom(room));
                }
            }
            console.log("ShortCuts added!");
        }
    }, {
        key: "removeRegisteredKeyboardShortcut",
        value: function removeRegisteredKeyboardShortcut() {
            for (var keyboard in this.shortcuts_default) {
                CW.view.registerKeyboardShortcut(this.shortcuts_default[keyboard], !1, !1, !1, !1, function () {
                    return false;
                });
            }
        }
    }, {
        key: "triggerDefaultAction",
        value: function triggerDefaultAction(action) {
            var me = $("._message:hover");
            var reply = me.find("[data-cwui-ab-type='" + action + "']");
            if (this.isDomExists(reply)) {
                reply.trigger("click");
            }
        }
    }, {
        key: "triggerMoreAction",
        value: function triggerMoreAction(action) {
            var more_action = $("._message:hover").find("._cwABMoreTip");
            if (this.isDomExists(more_action)) {
                more_action.trigger("click");
                var delete_button = $("._cwABMoreListBox").find('[data-cwui-ab-type="action"]');
                if (this.isDomExists(delete_button)) {
                    delete_button.trigger("click");
                }
            }
        }
    }, {
        key: "selectRoom",
        value: function selectRoom(room) {
            RL.selectRoom(room);
        }
    }, {
        key: "isDomExists",
        value: function isDomExists(dom) {
            return dom.length > 0;
        }
    }, {
        key: "getHoverMessageId",
        value: function getHoverMessageId() {
            return $("._message:hover").data("mid");
        }
    }, {
        key: "getMessagePosition",
        value: function getMessagePosition(id) {
            var messages = RM.timeline.chat_list;
            for (var i = messages.length - 1; i >= 0; i--) {
                if (messages[i].id == id) {
                    return i;
                }
            }

            return -1;
        }
    }, {
        key: "goToPreviousMention",
        value: function goToPreviousMention(current) {
            var position = this.getMessagePosition(current);
            var messages = RM.timeline.chat_list;
            for (var i = position - 1; i >= 0; i--) {
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
    }, {
        key: "goToNexMention",
        value: function goToNexMention(current) {
            var position = this.getMessagePosition(current);
            var messages = RM.timeline.chat_list;
            for (var i = position + 1; i > 0 && i < messages.length; i++) {
                if (this.isMentionMessage(messages[i])) {
                    RM.load(messages[i].id);
                    return true;
                }
            }

            return false;
        }
    }, {
        key: "isMentionMessage",
        value: function isMentionMessage(message) {
            var regex_reply = new RegExp("\\[.* aid=" + myid + " .*\\]");
            if (regex_reply.test(message.msg)) {
                return true;
            }

            var regex_to = new RegExp("\\[To:" + myid + "\\]");
            return regex_to.test(message.msg);
        }
    }, {
        key: "replyMessage",
        value: function replyMessage(message) {
            var data = RM.timeline.chat_id2chat_dat[message];
            if (data) {
                $C("#_chatText").focus();
                var name = ST.data.private_nickname && !RM.isInternal() ? AC.getDefaultNickName(data.aid) : AC.getNickName(data.aid);
                CS.view.setChatText("[" + L.chatsend_reply + " aid=" + data.aid + " to=" + RM.id + "-" + message + "] " + name + "\n", !0);
            }
        }
    }, {
        key: "nextUnreadRoom",
        value: function nextUnreadRoom(check_mention) {
            var current_room = RM.id;
            var sortedRooms = RL.getSortedRoomList();
            var rooms = RL.rooms;
            for (var i = 0; i < sortedRooms.length; i++) {
                if (sortedRooms[i] && sortedRooms[i] !== current_room) {
                    var room = rooms[sortedRooms[i]];
                    var check = check_mention ? room.getMentionNum() : room.getUnreadNum();
                    if (check) {
                        return RL.selectRoom(room.id);
                    }
                }
            }
        }
    }, {
        key: "nextRoom",
        value: function nextRoom(back) {
            var previous;
            var current_room = RM.id;
            var sortedRooms = RL.getSortedRoomList();
            for (var i = 0; i < sortedRooms.length; i++) {
                if (sortedRooms[i] === current_room) {
                    if (back) {
                        if (previous) {
                            return RL.selectRoom(previous);
                        }
                    } else {
                        if (sortedRooms[i + 1]) {
                            return RL.selectRoom(sortedRooms[i + 1]);
                        }
                    }
                }
                previous = sortedRooms[i];
            }
        }
    }, {
        key: "firstRoom",
        value: function firstRoom(nonstick) {
            var sortedRooms = RL.getSortedRoomList();
            var room_index = nonstick ? RL.getStickyRoomNum() : 0;
            return RL.selectRoom(sortedRooms[room_index]);
        }
    }]);

    return Shortcut;
}();

module.exports = Shortcut;

},{"../helpers/Common.js":1,"../helpers/Const.js":2}],5:[function(require,module,exports){
"use strict";

var common = require("../helpers/Common.js");
var Const = require("../helpers/Const.js");
var Emoticon = require("./Emoticon.js");
var Shortcut = require("./Shortcut.js");

var mention_status = false;
var thumbnail_status = false;
var highlight_status = false;
var cw_timer = undefined;

var ADVERTISEMENT_CHANGE_TIME = 1000 * 30;

var support_languages = ["1c", "actionscript", "apache", "applescript", "armasm", "asciidoc", "aspectj", "autohotkey", "autoit", "avrasm", "axapta", "bash", "brainfuck", "cal", "capnproto", "ceylon", "clojure-repl", "clojure", "cmake", "coffeescript", "cpp", "cs", "css", "d", "dart", "delphi", "diff", "django", "dns", "dockerfile", "dos", "dust", "elixir", "elm", "erb", "erlang-repl", "erlang", "fix", "fortran", "fsharp", "gcode", "gherkin", "glsl", "go", "gradle", "groovy", "haml", "handlebars", "haskell", "haxe", "http", "inform7", "ini", "java", "javascript", "json", "julia", "kotlin", "lasso", "less", "lisp", "livecodeserver", "livescript", "lua", "makefile", "markdown", "mathematica", "matlab", "mel", "mercury", "mizar", "mojolicious", "monkey", "nginx", "nimrod", "nix", "nsis", "objectivec", "ocaml", "openscad", "oxygene", "parser3", "perl", "pf", "php", "powershell", "processing", "profile", "prolog", "protobuf", "puppet", "python", "q", "r", "rib", "roboconf", "rsl", "ruby", "ruleslanguage", "rust", "scala", "scheme", "scilab", "scss", "smali", "smalltalk", "sml", "sql", "stata", "step21", "stylus", "swift", "tcl", "tex", "thrift", "tp", "twig", "typescript", "vala", "vbnet", "vbscript-html", "vbscript", "verilog", "vhdl", "vim", "x86asm", "xl", "xml", "xquery", "zephir"];

$(function () {
    var rebuild = false;
    cw_timer = setInterval(function () {
        if (typeof CW !== "undefined" && typeof CW.reg_cmp !== "undefined") {
            window.clearInterval(cw_timer);
            var emoticon_feature = new Emoticon();
            var shortcut_feature = new Shortcut();
            $("#_chatppPreLoad").remove();
            addStyle();
            addInfoIcon();
            if (common.getStatus("emoticon")) {
                rebuild = true;
                emoticon_feature.addEmoticonText();
            }
            if (common.getStatus("mention")) {
                mention_status = true;
                addMentionText();
            }
            if (common.getStatus("shortcut")) {
                shortcut_feature.addShortcutText();
                shortcut_feature.registerShortcut();
            }
            if (common.getStatus("thumbnail") || common.getStatus("highlight")) {
                rebuild = true;
                thumbnail_status = common.getStatus("thumbnail");
                highlight_status = common.getStatus("highlight");
                updateChatworkView();
            }
            addAdvertisement();
            if (common.getStatus("emoticon")) {
                emoticon_feature.addExternalEmo();
            }

            if (rebuild) {
                RL.rooms[RM.id].build();
            }

            updateChatSendView();
        }
    }, 100);
});

function addStyle() {
    $('<style type="text/css"> .emoticonTextEnable{font-weight: bold;};</style>').appendTo("head");
    $('<style type="text/css"> .chatppErrorsText{font-weight: bold; color: red;};</style>').appendTo("head");
}

function addInfoIcon() {
    if ($("#roomInfoIcon").length > 0) {
        return;
    }
    var room_info = '<li id="_roomInfo" role="button" class="_showDescription" aria-label="Show room Information" style="display: inline-block;"><span class="icoFontAdminInfoMenu icoSizeLarge"></span></li>';
    $('#_chatSendTool').append(room_info);
    var room_info_list = '<div id="_roomInfoList" class="roomInfo toolTip toolTipWhite mainContetTooltip" role="tooltip">' + '<div class="_cwTTTriangle toolTipTriangle toolTipTriangleWhiteBottom"></div>' + '<span id="_roomInfoText">' + '<div id="_roomInfoTextTotalMembers" class="tooltipFooter"></div>' + '<div id="_roomInfoTextTotalMessages" class="tooltipFooter"></div>' + '<div id="_roomInfoTextTotalFiles" class="tooltipFooter"></div>' + '<div id="_roomInfoTextTotalTasks" class="tooltipFooter"></div>' + '<div id="_roomInfoTextMyTasks" class="tooltipFooter"></div>' + '</span>' + '</div>';
    $("body").append(room_info_list);
    $("#_roomInfo").click(function () {
        prepareRoomInfo();
        var room_name = RM.getIcon() + " " + common.htmlEncode(RM.getName());
        var tip = $("#_roomInfoList").cwListTip({
            selectOptionArea: "<b>" + room_name + "</b>" + " Information",
            fixHeight: !1,
            search: !1
        });
        tip.open($(this));
    });
}

function prepareRoomInfo() {
    var total_members = "<b>Total Members</b>: " + RM.getSortedMemberList().length;
    $("#_roomInfoTextTotalMembers").html(total_members);
    var total_messages = "<b>Total Messages</b>: " + RM.chat_num;
    $("#_roomInfoTextTotalMessages").html(total_messages);
    var total_tasks = "<b>Total Tasks</b>: " + RM.task_num;
    $("#_roomInfoTextTotalTasks").html(total_tasks);
    var my_tasks = "<b>My Tasks</b>: " + RM.mytask_num;
    $("#_roomInfoTextMyTasks").html(my_tasks);
    var total_files = "<b>Total Files</b>: " + RM.file_num;
    $("#_roomInfoTextTotalFiles").html(total_files);
}

function addAdvertisement() {
    if ($("#chatppAdvertisement").length > 0) {
        return;
    }
    var text = '<li id="_chatppSponsored" role="button" class=" _showDescription" aria-label="Chat Plus Plus Information">' + '<span id="chatppAdvertisement" class="icoSizeSmall">' + getAdvertisementText() + '</span>' + '</li>';

    $("#_chatSendTool").append(text);
    setInterval(changeRandomAdvertisement, ADVERTISEMENT_CHANGE_TIME);
}

function changeRandomAdvertisement() {
    var text = getAdvertisementText();
    $("#chatppAdvertisement").html(text);
}

function getAdvertisementText() {
    if (localStorage["chatpp_advertisement"] !== undefined && localStorage["chatpp_advertisement"]) {
        var ads = JSON.parse(localStorage["chatpp_advertisement"]);
        if (ads.length > 0) {
            return ads[Math.floor(Math.random() * ads.length)];
        }
    }
    return "Advertisement Here!";
}

function removeAdvertisement() {
    if ($("#chatppAdvertisement").length > 0) {
        $("#chatppAdvertisement").remove();
    }
}

function addMentionText() {
    if ($("#_chatppMentionText").length > 0) {
        return;
    }
    $("#_chatSendTool").append('<li id="_chatppMentionText" role="button" class=" _showDescription">' + '<span id="chatppMentionText" class="emoticonText icoSizeSmall"></span>' + '</li>');
    updateMentionText();
    $("#chatppMentionText").click(function () {
        toggleMentionStatus();
    });
}

function updateMentionText() {
    var mention_text = "M: " + (mention_status ? "ON" : "OFF");
    var div = $("#chatppMentionText");
    div.html(mention_text);
    if (mention_status) {
        $("#_chatppMentionText").attr("aria-label", "Click to disable Mention Feature");
        div.addClass("emoticonTextEnable");
    } else {
        $("#_chatppMentionText").attr("aria-label", "Click to enable Mention Feature");
        div.removeClass("emoticonTextEnable");
    }
}

function toggleMentionStatus() {
    mention_status = mention_status !== true;
    common.setStatus("mention", mention_status);
    updateMentionText();
}

function updateChatSendView() {
    var chatTextKeyUpOld = CS.view.chatTextKeyUp;
    CS.view.chatTextKeyUp = function (b) {
        var up_key = b.keyCode;
        var d = $("#_chatText");
        (function () {
            if (!(up_key !== 13 || press_key !== 13)) {
                var a = d.val(),
                    b = d.prop("selectionStart"),
                    e = d.prop("selectionEnd");
                b === e && (e = a.substr(0, b), e = $.support.isWindowsFirefox ? e.replace(/(^|\n)``` *\r?\n([\s\S]+?)\r?\n```$/, "$1[code]\n$2\n[/code]") : e.replace(/(^|\n)``` *\r?\n([\s\S]+?)\r?\n```\n$/, "$1[code]\n$2\n[/code]\n"), e = $.support.isWindowsFirefox ? e.replace(/(^|\n)``t *\r?\n([\s\S]+?)\r?\n```$/, "$1[title]$2[/title]") : e.replace(/(^|\n)``t *\r?\n([\s\S]+?)\r?\n```\n$/, "$1[title]$2[/title]"), e = $.support.isWindowsFirefox ? e.replace(/(^|\n)``i *\r?\n([\s\S]+?)\r?\n```$/, "$1[info]$2[/info]") : e.replace(/(^|\n)``i *\r?\n([\s\S]+?)\r?\n```\n$/, "$1[info]$2[/info]\n"), a = a.substr(b), d.val(e + a), d.prop("selectionStart", e.length), d.prop("selectionEnd", e.length));
            }
        })();
        return chatTextKeyUpOld(b);
    };
}

function updateChatworkView() {
    TimeLineView.prototype.getMessagePanelOld = TimeLineView.prototype.getMessagePanel;
    TimeLineView.prototype.getMessagePanel = function (a, b) {
        var message_panel = this.getMessagePanelOld(a, b);
        var temp = $("<div></div>");
        $(temp).html(message_panel);
        if (thumbnail_status) {
            temp = insertThumbnail(temp);
        }
        if (highlight_status) {
            $("pre code", temp).each(function (i, block) {
                var block_text = $(block).html();
                var options = getHighlightOption(block_text);
                if (options.has_valid_options) {
                    var first_line = block_text.split("\n", 1)[0];
                    block_text = block_text.replace(first_line + "\n", "");
                    $(block).html(block_text);
                }
                if (options.language) {
                    $(block).addClass(options.language);
                }
                if (!options.nowrap) {
                    $(block).css({ "word-wrap": "break-word" });;
                }
                hljs.highlightBlock(block);
            });
        }
        return $(temp).html();
    };

    if (thumbnail_status) {
        TK.view.getTaskPanelOld = TK.view.getTaskPanel;
        TK.view.getTaskPanel = function (b, d) {
            var task_panel = TK.view.getTaskPanelOld(b, d);
            if ($(task_panel).is("div")) {
                return task_panel;
            }
            var temp = $("<span></span>");
            temp.html(task_panel);
            temp = insertThumbnail(temp);
            return temp.html();
        };

        RoomView.prototype.buildOld = RoomView.prototype.build;
        RoomView.prototype.build = function (a) {
            this.buildOld(a);
            insertThumbnail($("#_subRoomDescription"));
        };
    }
}

function insertThumbnail(dom) {
    $(".ui_sp_favicon_parent", dom).each(function (index, link) {
        var dom = $(link);
        var imageLink = getThumbnailLink(dom.attr("href"));
        if (imageLink) {
            var img = '<div><img src="' + imageLink + '" alt="' + imageLink + '" style="max-width: 500px; max-height: 125px"></div>';
            dom.after(img);
        }
    });
    return dom;
}

function getThumbnailLink(link) {
    var img_regex = /\.(png|jpg|gif|jpeg)$/i;
    if (link.match(img_regex)) {
        return link;
    };

    var fb_img_regex = /.*fbcdn.*\.(png|jpg|gif|jpeg)(\?.*)?/i;
    if (link.match(fb_img_regex)) {
        return link;
    };

    var gyazo_regex = /^https?:\/\/gyazo.com\//i;
    if (link.match(gyazo_regex)) {
        return link + ".png";
    }

    return false;
}

function getHighLightLanguage(language) {
    for (var i in support_languages) {
        if (support_languages[i] === language.toLowerCase()) {
            return support_languages[i];
        }
    }

    return null;
}

function getHighlightOption(text) {
    var highlight_options = {
        language: null,
        nowrap: false,
        has_valid_options: false
    };
    var valid_options = ["nowrap"];
    var options = text.split("\n", 1)[0];
    if (!options) {
        return highlight_options;
    }

    options = options.split(" ");
    for (var i in options) {
        if (!options[i]) {
            continue;
        }
        if (valid_options.indexOf(options[i]) > -1) {
            highlight_options[options[i]] = true;
            continue;
        }
        var language = getHighLightLanguage(options[i]);
        if (language) {
            highlight_options.language = language;
            continue;
        }
        return {
            language: null,
            nowrap: false,
            has_valid_options: false
        };
    }
    highlight_options.has_valid_options = true;
    return highlight_options;
}

},{"../helpers/Common.js":1,"../helpers/Const.js":2,"./Emoticon.js":3,"./Shortcut.js":4}],6:[function(require,module,exports){
"use strict";

var common = require("../helpers/Common.js");
var Const = require("../helpers/Const.js");

$(function () {
    var mention_status = common.getStatus("mention");
    var start = /@/ig;
    var is_displayed = false;
    var is_inserted = false;
    var is_navigated = false;
    var is_outbound_of_list = false;
    var actived_atmark_index = 0;
    var current_index = 0;
    var selected_index = 0;
    var current_RM = null;
    var member_objects = [];
    var insert_mode = 'normal'; // normal, to, picon, name
    var insert_type = 'one'; // one, me, all, contact, group
    var selected_group_name = '';
    var fuse = null;
    var DISPLAY_NUMS = 3;
    var MAX_PATTERN_LENGTH = 20;
    var SPECIAL_CHARS = ["\n", '!', '$', '%', '^', '&', '*', '(', ')', '-', '+', '=', '[', ']', '{', '}', ';', ':', ',', '/', '`', '\'', '"'];
    var cached_enter_action = ST.data.enter_action;
    var options = {
        keys: ['aid2name'],
        maxPatternLength: MAX_PATTERN_LENGTH
    };
    var chat_text_jquery = $('#_chatText');
    var chat_text_element = document.getElementById('_chatText');
    var suggestion_messages = {
        one: { ja: "検索結果はありません", en: 'No Matching Results' },
        all: { ja: "すべてを選択します", en: 'Select All Members' },
        group: { ja: "空のグループ", en: 'Empty Group' }
    };

    var group_mention = [];
    if (localStorage[Const.LOCAL_STORAGE_GROUP_MENTION]) {
        group_mention = JSON.parse(localStorage[Const.LOCAL_STORAGE_GROUP_MENTION]);
    }

    $("<div id='suggestion-container' class='toolTipListWidth toolTip toolTipWhite mainContetTooltip'></div>").insertAfter("#_chatText");
    hideSuggestionBox();

    function getNearestAtmarkIndex() {
        var content = chat_text_jquery.val();
        var atmarks = content.match(start);

        if (!atmarks) {
            return -1;
        }

        var caret_index = doGetCaretPosition(chat_text_element);
        var atmark_index = content.indexOf("@");
        var pre_atmark_index = -1;
        do {
            if (atmark_index >= caret_index) {
                break;
            }
            pre_atmark_index = atmark_index;
            atmark_index = content.indexOf("@", atmark_index + 1);
        } while (atmark_index != -1);

        return pre_atmark_index;
    }

    function findAtmark() {
        var content = chat_text_jquery.val();
        // we only interested in @ symbol that: at the start of line or has a space before it
        var atmark_index = getNearestAtmarkIndex();
        if (atmark_index != 0 && content.charAt(atmark_index - 1) != " " && content.charAt(atmark_index - 1) != "\n") {
            return false;
        }

        if (getTypedText().length >= MAX_PATTERN_LENGTH || getTypedText().length == 0) {
            return false;
        }
        if (atmark_index != -1) {
            var spaces = getTypedText().match(/ /ig);
            // text from last @ to current caret position have more than 2 spaces
            if (spaces && spaces.length > 2) {
                return false;
            }

            // text contains special characters ?
            for (var i = 0; i < SPECIAL_CHARS.length; i++) {
                if (getTypedText().indexOf(SPECIAL_CHARS[i]) != -1) {
                    return false;
                }
            };

            return true;
        } else {
            // There is no @ symbol
            return false;
        }
    }

    function getTypedText() {
        var content = chat_text_jquery.val();
        var start_pos = getNearestAtmarkIndex();
        if (start_pos == -1) return '';
        var end_pos = doGetCaretPosition(chat_text_element);
        var txt = content.substr(start_pos, end_pos - start_pos);
        if (txt) {
            return txt;
        } else {
            return '';
        }
    }

    function setSuggestionBoxPosition() {
        var rect = chat_text_element.getBoundingClientRect();
        var current_pos = doGetCaretPosition(chat_text_element);
        setCaretPosition(chat_text_element, actived_atmark_index + 1);
        var position = Measurement.caretPos(chat_text_jquery);
        position.top -= rect.top;
        position.left -= rect.left;
        if (rect.width - position.left < 236) {
            position.left -= 236;
        }
        if (rect.height - position.top < 90) {
            if (position.top < 108) {
                $("#_chatTextArea").css({ 'overflow-y': 'visible', 'z-index': 2 });
            }
            position.top -= 118;
        } else {
            position.top += parseInt(chat_text_jquery.css('font-size')) + 2;
        }
        $("#suggestion-container").parent().css({ position: 'relative' });
        $("#suggestion-container").css({ top: position.top, left: position.left, position: 'absolute' });
        setCaretPosition(chat_text_element, current_pos);
    }

    function showSuggestionBox(content) {
        is_inserted = false;
        $("#suggestion-container").html(content).show();
        $("#suggestion-container").css('visibility', 'visible');
        if (is_navigated) {
            $(".suggested-name").eq(selected_index).css("background-color", "#D8F0F9");
        } else {
            $(".suggested-name").first().css("background-color", "#D8F0F9");
        }

        $(".suggested-name").click(function () {
            if (is_inserted) return;
            is_inserted = true;
            $(this).css("background-color", "#D8F0F9");
            setSuggestedChatText(getTypedText(), $(this).text(), $(this).data('cwui-lt-value'));
        });

        $(".suggested-name").mouseover(function () {
            $(this).siblings().css("background-color", "white");
            $(this).css("background-color", "#D8F0F9");
        });

        $(".suggested-name").mouseout(function () {
            $(this).siblings().first().css("background-color", "#D8F0F9");
            $(this).css("background-color", "white");
        });
    }

    function hideSuggestionBox(content) {
        $("#suggestion-container").html(content).hide();
        $("#suggestion-container").css('visibility', 'hidden');
        cleanUp();
    }

    function cleanUp() {
        is_displayed = false;
        is_navigated = false;
        current_index = 0;
        selected_index = 0;
        actived_atmark_index = -1;
        insert_mode = 'normal';
        if (insert_type == 'contact') {
            member_objects = buildMemberListData(false);
            fuse = new Fuse(member_objects, options);
        }
        if (insert_type == 'group') {
            selected_group_name = '';
        }
        insert_type = 'one';
        $("#suggestion-container").html('');
        $("#_chatTextArea").css({ 'overflow-y': 'scroll', 'z-index': 0 });
        // restore setting to correct value
        if (cached_enter_action != ST.data.enter_action && cached_enter_action == 'send') {
            ST.data.enter_action = cached_enter_action;
        }
    }

    $("#_sendEnterActionArea").click(function () {
        cached_enter_action = $("#_sendEnterAction").cwCheckBox().isChecked() ? 'send' : 'br';
    });

    // http://blog.vishalon.net/index.php/javascript-getting-and-setting-caret-position-in-textarea/
    function doGetCaretPosition(ctrl) {
        var CaretPos = 0; // IE Support
        if (document.selection) {
            ctrl.focus();
            var Sel = document.selection.createRange();
            Sel.moveStart('character', -ctrl.value.length);
            CaretPos = Sel.text.length;
        }
        // Firefox support
        else if (ctrl.selectionStart || ctrl.selectionStart == '0') CaretPos = ctrl.selectionStart;
        return CaretPos;
    }

    function setCaretPosition(ctrl, pos) {
        if (ctrl.setSelectionRange) {
            ctrl.focus();
            ctrl.setSelectionRange(pos, pos);
        } else if (ctrl.createTextRange) {
            var range = ctrl.createTextRange();
            range.collapse(true);
            range.moveEnd('character', pos);
            range.moveStart('character', pos);
            range.select();
        }
    }

    // http://stackoverflow.com/questions/610406/javascript-equivalent-to-printf-string-format
    // First, checks if it isn't implemented yet.
    if (!String.prototype.format) {
        String.prototype.format = function () {
            var args = arguments;
            return this.replace(/{(\d+)}/g, function (match, number) {
                return typeof args[number] != 'undefined' ? args[number] : match;
            });
        };
    }

    // http://codegolf.stackexchange.com/a/17129
    function merge() {
        var args = arguments;
        var hash = {};
        var arr = [];
        for (var i = 0; i < args.length; i++) {
            for (var j = 0; j < args[i].length; j++) {
                if (hash[args[i][j]] !== true) {
                    arr[arr.length] = args[i][j];
                    hash[args[i][j]] = true;
                }
            }
        }
        return arr;
    }

    function filterDisplayResults(results) {
        is_outbound_of_list = false;
        if (!is_navigated) return results.slice(0, DISPLAY_NUMS);
        if (current_index < 0) current_index = 0;
        if (current_index >= results.length) current_index = results.length - 1;

        if (results.length <= DISPLAY_NUMS) {
            is_outbound_of_list = true;
            return results;
        }
        if (current_index >= results.length - DISPLAY_NUMS) {
            is_outbound_of_list = true;
            return results.slice(DISPLAY_NUMS * -1);
        } else {
            return results.slice(current_index, current_index + DISPLAY_NUMS);
        }
    }

    function getRawResultsAndSetType(typed_text) {
        if (insert_type != 'contact') {
            for (var i = 0; i < group_mention.length; i++) {
                if (typed_text == group_mention[i]['group_name']) {
                    insert_type = 'group';
                    selected_group_name = group_mention[i]['group_name'];
                    return [];
                }
            };

            if (typed_text == 'me') {
                insert_type = 'me';
                return [getMemberObject(AC.myid)];
            }
            if (typed_text == 'all') {
                insert_type = 'all';
                return [];
            }
            insert_type = 'one';
        }
        return typed_text ? fuse.search(typed_text) : member_objects;
    }

    function getRawResultsAndSetMode(typed_text) {
        if (typed_text.slice(0, 2) == '._') {
            insert_mode = 'picon';
            return getRawResultsAndSetType(typed_text.substring(2));
        }
        if (typed_text.slice(0, 1) == '.') {
            insert_mode = 'name';
            return getRawResultsAndSetType(typed_text.substring(1));
        }
        if (typed_text.slice(0, 1) == '_') {
            insert_mode = 'to';
            return getRawResultsAndSetType(typed_text.substring(1));
        }
        insert_mode = 'normal';
        return getRawResultsAndSetType(typed_text);
    }

    // hide suggestion box when click in textarea or outside
    chat_text_jquery.click(function () {
        hideSuggestionBox();
    });

    $('#_roomListArea').click(function () {
        hideSuggestionBox();
    });

    $('#_headerSearch').click(function () {
        hideSuggestionBox();
    });

    // when user press ESC, we hide suggestion box
    $(document).keyup(function (e) {
        if (!mention_status) {
            return;
        }
        if (e.which == 27) {
            hideSuggestionBox();
        }
    });

    function isTriggerKeyCode(keyCode) {
        return [37, 38, 39, 40].indexOf(keyCode) == -1;
    }

    chat_text_jquery.keydown(function (e) {
        if (!mention_status) {
            return;
        }

        if ((e.which == 38 || e.which == 40 || e.which == 9 || e.which == 13) && is_displayed) {
            is_navigated = true;
            holdCaretPosition(e);
        } else {
            current_index = 0;
            is_navigated = false;
        }

        if (e.which == 9 || e.which == 13) {
            if ((insert_type == 'all' || insert_type == 'group') && is_displayed) {
                setSuggestedChatText(getTypedText(), null, null);
                // dirty hack to prevent message to be sent
                if (cached_enter_action == 'send') ST.data.enter_action = 'br';
                e.preventDefault();
            } else {
                if ($(".suggested-name").first().length) {
                    if (is_navigated) {
                        $(".suggested-name").eq(selected_index).click();
                    } else {
                        $(".suggested-name").first().click();
                    }
                    // dirty hack to prevent message to be sent
                    if (cached_enter_action == 'send') ST.data.enter_action = 'br';
                    e.preventDefault();
                } else {
                    // there's no thing after @ symbol
                    hideSuggestionBox();
                }
            }
        }
    });

    chat_text_jquery.keyup(function (e) {
        if (!mention_status) {
            return;
        }

        if (e.which == 9 || e.which == 13) {
            return;
        }

        if ((e.which == 38 || e.which == 40) && is_displayed) {
            is_navigated = true;
            holdCaretPosition(e);
        } else {
            is_navigated = false;
        }

        if (current_RM != RM.id) {
            member_objects = buildMemberListData(false);
            fuse = new Fuse(member_objects, options);
            current_RM = RM.id;
        }

        if (findAtmark()) {
            if (is_displayed && getNearestAtmarkIndex() != -1 && getNearestAtmarkIndex() != actived_atmark_index) {
                hideSuggestionBox();
            }

            if (!is_displayed) {
                if (!isTriggerKeyCode(e.which)) {
                    return;
                }
                if (getNearestAtmarkIndex() != -1) {
                    actived_atmark_index = getNearestAtmarkIndex();
                }
                setSuggestionBoxPosition();
                showSuggestionBox(buildList(filterDisplayResults(member_objects)));
                is_displayed = true;
            }

            var typed_text = getTypedText();
            if (typed_text.length) {
                if (typed_text.charAt(1) == '#') {
                    if (insert_type != 'contact') {
                        member_objects = buildMemberListData(true);
                        fuse = new Fuse(member_objects, options);
                        insert_type = 'contact';
                    }
                    typed_text = typed_text.substring(1);
                }
                var raw_results = getRawResultsAndSetMode(typed_text.substring(1));

                if (e.which == 38) current_index -= 1;
                if (e.which == 40) current_index += 1;
                var filtered_results = filterDisplayResults(raw_results);

                if (e.which == 38 && is_outbound_of_list) {
                    selected_index -= 1;
                    if (selected_index < 0) selected_index = 0;
                }
                if (e.which == 40 && current_index > raw_results.length - filtered_results.length) {
                    selected_index += 1;
                    if (selected_index >= Math.min(DISPLAY_NUMS, filtered_results.length)) selected_index = Math.min(DISPLAY_NUMS, filtered_results.length) - 1;
                }

                showSuggestionBox(buildList(filtered_results));
            }

            if (e.which == 27) {
                // when user press ESC, we hide suggestion box
                hideSuggestionBox();
                holdCaretPosition(e);
            }
        } else {
            hideSuggestionBox();
        }

        return false;
    });

    function holdCaretPosition(event_object) {
        event_object.preventDefault();
        chat_text_jquery.focus();
        var current_pos = doGetCaretPosition(chat_text_element);
        setCaretPosition(chat_text_element, current_pos);
    }

    function getReplaceText(format_string, target_name, cwid, members) {
        var replace_text = '';
        switch (insert_type) {
            case 'me':
            case 'one':
            case 'contact':
                replace_text = format_string.format(cwid, target_name);
                break;
            case 'group':
            case 'all':
                for (var i = 0; i < members.length; i++) {
                    replace_text += format_string.format(members[i].value, members[i].aid2name);
                };
                break;
            default:
                break;
        }
        return replace_text;
    }

    function setSuggestedChatText(entered_text, target_name, cwid) {
        var old = chat_text_jquery.val();
        var start_pos = doGetCaretPosition(chat_text_element) - entered_text.length;
        var replace_text = '';
        var members = member_objects;
        if (insert_type == 'group') {
            members = buildGroupMemberListData(selected_group_name);
        }
        switch (insert_mode) {
            case 'to':
                replace_text = getReplaceText("[To:{0}] ", target_name, cwid, members);
                break;
            case 'normal':
                replace_text = getReplaceText("[To:{0}] {1}\n", target_name, cwid, members);
                break;
            case 'picon':
                replace_text = getReplaceText("[picon:{0}] ", target_name, cwid, members);
                break;
            case 'name':
                replace_text = getReplaceText("[picon:{0}] {1}\n", target_name, cwid, members);
                break;
            default:
                break;
        }
        var content = old.substring(0, start_pos) + replace_text + old.substring(start_pos + entered_text.length);
        chat_text_jquery.val(content);
        setCaretPosition(chat_text_element, start_pos + replace_text.length);
        hideSuggestionBox();
    }

    function buildList(members) {
        switch (insert_type) {
            case 'me':
            case 'one':
            case 'contact':
                if (members.length) {
                    var txt = '<ul>';
                    for (var i = 0; i < members.length; i++) {
                        txt += '<li class="suggested-name" role="listitem" data-cwui-lt-value="' + members[i].value + '">' + members[i].avatar + members[i].label + "</li>";
                    };
                    txt += '</ul>';
                    return txt;
                } else {
                    return '<ul><li>' + suggestion_messages['one'][LANGUAGE] + '</li></ul>';
                }
                break;
            case 'group':
                members = buildGroupMemberListData(selected_group_name);
                if (members.length) {
                    txt = '<ul><li>';
                    for (var i = 0; i < members.length; i++) {
                        if (i == 6) {
                            txt += '<span>+' + (members.length - 6) + '</span>';
                            break;
                        }
                        txt += members[i].avatar;
                    };
                    txt += '</li></ul>';
                    return txt;
                } else {
                    return '<ul><li>' + suggestion_messages[insert_type][LANGUAGE] + '</li></ul>';
                }
                break;
            case 'all':
                return '<ul><li>' + suggestion_messages[insert_type][LANGUAGE] + '</li></ul>';
                break;
            default:
                break;
        }
    }

    function buildMemberListData(with_contact) {
        if (!RM) return [];
        var sorted_member_list = RM.getSortedMemberList();
        var b = [];
        if (with_contact) {
            sorted_member_list = merge(sorted_member_list, AC.contact_list);
        }
        var sorted_members_length = sorted_member_list.length;
        for (var index = 0; index < sorted_members_length; index++) {
            var member = sorted_member_list[index];
            if (member != AC.myid) {
                b.push(getMemberObject(member));
            }
        }
        return b;
    }

    function getMemberObject(member) {
        var h = CW.is_business && ST.data.private_nickname && !RM.isInternal() ? AC.getDefaultNickName(member) : AC.getNickName(member);
        return {
            value: member,
            avatar: CW.getAvatarPanel(member, {
                clicktip: !1,
                size: "small"
            }),
            label: '<p class="autotrim">' + escape_html(h) + "</p>",
            aid2name: escape_html(h)
        };
    }

    function buildGroupMemberListData(group_name) {
        for (var i = 0; i < group_mention.length; i++) {
            if (group_mention[i]['group_name'] == group_name) {
                var members = group_mention[i]['group_members'].split(',');
                var results = [];
                for (var j = 0; j < members.length; j++) {
                    results.push(getMemberObject(members[j].trim()));
                }
                return results;
            }
        }
        return [];
    }
});

},{"../helpers/Common.js":1,"../helpers/Const.js":2}],7:[function(require,module,exports){
"use strict";

$(function () {
    (function () {
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
            };
        }
    })();
});

},{}]},{},[5,6,7]);
