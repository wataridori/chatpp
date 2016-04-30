(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var Const = require("../helpers/Const.js");
var common = require("../helpers/Common.js");
var Storage = require("../helpers/Storage.js");
var EmoStorage = require("../helpers/EmoStorage.js");
var ChromeStorageLocal = require("../helpers/ChromeStorageLocal.js");

var storage = new Storage();
var emo_storage = new EmoStorage();
var emoticons = [];
var emo_info = {};
var urls = {};

init(true);

function init(inject_script) {
    storage.get(Const.CHROME_SYNC_KEY, function (info) {
        emo_info = info;
        if (!$.isEmptyObject(info)) {
            for (var key in info) {
                var emo_data = info[key];
                var url = common.getEmoticonDataUrl(emo_data.data_name, emo_data.data_url);
                if (url) {
                    urls[emo_data.data_name] = url;
                }
            }
        }
        if ($.isEmptyObject(urls)) {
            urls["Default"] = Const.DEFAULT_DATA_URL;
        }
        if (info === undefined) {
            info = {};
        }
        if (!info.force_update_version || info.force_update_version < Const.FORCE_TURN_OFF_THUMBNAIL) {
            info.force_update_version = Const.FORCE_TURN_OFF_THUMBNAIL;
            info.thumbnail_status = false;
            info.emoticon_status = true;
        }
        localStorage.force_update_version = info.force_update_version;
        var features = ["mention", "shortcut", "thumbnail", "highlight", "emoticon"];
        features.forEach(function (feature) {
            var feature_name = feature + "_status";
            info[feature_name] = info[feature_name] === undefined ? true : info[feature_name];
            common.setStatus(feature, info[feature_name]);
        });
        emo_storage.setFeatureStatus(info);
        if (info.emoticon_status == false) {
            addInjectedScript();
        } else {
            getData(info, inject_script);
        }
    });

    localStorage[Const.LOCAL_STORAGE_GROUP_MENTION] = [];
    storage.get(Const.CHROME_SYNC_GROUP_KEY, function (data) {
        if (!$.isEmptyObject(data)) {
            localStorage[Const.LOCAL_STORAGE_GROUP_MENTION] = JSON.stringify(data);
        }
    });

    localStorage[Const.LOCAL_STORAGE_ROOM_SHORTCUT] = [];
    storage.get(Const.CHROME_SYNC_ROOM_KEY, function (data) {
        if (!$.isEmptyObject(data)) {
            localStorage[Const.LOCAL_STORAGE_ROOM_SHORTCUT] = JSON.stringify(data);
        }
    });

    localStorage[Const.LOCAL_STORAGE_DISABLE_NOTIFY_ROOM] = [];
    storage.get(Const.CHROME_SYNC_DISABLE_NOTIFY_ROOM_KEY, function (data) {
        if (!$.isEmptyObject(data)) {
            localStorage[Const.LOCAL_STORAGE_DISABLE_NOTIFY_ROOM] = JSON.stringify(data);
        }
    });
}

function getData(info, inject_script) {
    var loaded_count = 0;
    var emo_count = common.getObjectLength(urls);
    var failed = false;
    localStorage.removeItem("failed_data");
    $.each(urls, function (data_name, url) {
        $.getJSON(url).done(function (data) {
            if (typeof data.data_version !== "undefined" && typeof data.emoticons !== "undefined") {
                data.data_url = urls[data.data_name];
                var priority = emo_info[data.data_name] && emo_info[data.data_name].priority ? emo_info[data.data_name].priority : 0;
                emo_storage.pushData(data, priority);
                pushEmoticons(data.emoticons, priority, data.data_name);
            }
        }).fail(function () {
            failed = true;
            delete emo_info[data_name];
            pushFailedData(data_name);
        }).always(function () {
            if (++loaded_count === emo_count) {
                if (!failed) {
                    emo_storage.syncData();
                }
                var chrome_storage_local = new ChromeStorageLocal();
                chrome_storage_local.get(function (local_data) {
                    var version_name = "";
                    if (!$.isEmptyObject(local_data)) {
                        version_name = local_data["version_name"];
                    }
                    // let current_time = (new Date).toLocaleString();
                    // console.log("You are using Chat++!. Date sync: " + current_time + ". Version: " + version_name);
                    localStorage[Const.LOCAL_STORAGE_DATA_KEY] = JSON.stringify(emoticons);
                    localStorage["chatpp_version_name"] = version_name;
                    localStorage["emoticon_data_version"] = parseDataName(emo_info);
                    if (inject_script !== undefined && inject_script) {
                        addInjectedScript();
                    } else {
                        // runFunction("reloadEmoticions()");
                    }
                });
            }
        });
    });
}

function pushFailedData(data_name) {
    var data = localStorage["failed_data"] ? JSON.parse(localStorage["failed_data"]) : [];
    data.push(data_name);
    localStorage["failed_data"] = JSON.stringify(data);
}

function parseDataName(data) {
    if (data.data_name !== undefined && data.data_version !== undefined) {
        return data.data_name + "_" + data.data_version;
    }
    var data_name = "";
    for (var key in data) {
        if (data[key].data_name !== undefined) {
            data_name += data[key].data_name + "_" + data[key].data_version + "  ";
        }
    }
    return data_name;
}

function pushEmoticons(emos, priority, data_name) {
    for (var i = 0; i < emos.length; i++) {
        var repeated = false;
        emos[i].priority = priority;
        emos[i].data_name = data_name;
        for (var j = 0; j < emoticons.length; j++) {
            if (emoticons[j].key === emos[i].key) {
                if (emoticons[j].src !== emos[i].src && emoticons[j].priority < emos[i].priority) {
                    emoticons[j] = emos[i];
                }
                repeated = true;
                break;
            }
        }
        if (!repeated) {
            emoticons.push(emos[i]);
        }
    }
}

function addInjectedScript() {
    loadAdvertisement();
    preLoad();
    injectJsFile("libraries/caretposition.js");
    injectJsFile("libraries/fuse.min.js");
    injectJsFile("libraries/highlight.min.js");
    injectCssFile("highlight.min.css");
    setTimeout(function () {
        injectJsFile("internals/all.js");
    }, Const.DELAY_TIME);

    setInterval(loadAdvertisement, Const.ADVERTISEMENT_LOAD_TIMEOUT);
}

function preLoad() {
    var text = "<li id=\"_chatppPreLoad\"><span id=\"chatppPreLoad\" class=\"icoSizeSmall\"></span></li>";
    $("#_chatSendTool").append(text);
    var chatpp_pre_load = $("#chatppPreLoad");
    var delay_time = Const.DELAY_TIME / 1000;
    var pre_load_interval = setInterval(function () {
        if (--delay_time <= 0) {
            $("#_chatppPreLoad").remove();
            window.clearInterval(pre_load_interval);
        }
        var text = "Chat++ will be loaded in about " + delay_time + " second" + (delay_time > 1 ? "s" : "");
        chatpp_pre_load.html(text);
    }, 1000);
}

function injectJsFile(file_name) {
    var script = document.createElement("script");
    script.src = common.getExtensionPageUrl("js/" + file_name);
    document.documentElement.appendChild(script);
}

function injectCssFile(file_name) {
    var css_link = $("<link>", {
        rel: "stylesheet",
        type: "text/css",
        href: common.getExtensionPageUrl("css/" + file_name)
    });
    css_link.appendTo("head");
}

function loadAdvertisement() {
    $.getJSON(Const.ADVERTISEMENT_URL).done(function (data) {
        if (!$.isEmptyObject(data)) {
            localStorage["chatpp_advertisement"] = JSON.stringify(data);
        }
    });
}

},{"../helpers/ChromeStorageLocal.js":2,"../helpers/Common.js":3,"../helpers/Const.js":4,"../helpers/EmoStorage.js":5,"../helpers/Storage.js":6}],2:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Storage = require("./Storage.js");
var Const = require("./Const.js");

var ChromeStorageLocal = function () {
    function ChromeStorageLocal() {
        _classCallCheck(this, ChromeStorageLocal);

        this.storage = new Storage(true);
        this.key = Const.CHROME_LOCAL_KEY;
    }

    _createClass(ChromeStorageLocal, [{
        key: "get",
        value: function get(callback) {
            this.storage.get(this.key, callback);
        }
    }, {
        key: "set",
        value: function set(data, callback) {
            this.set(this.key, data, callback);
        }
    }, {
        key: "setData",
        value: function setData(data, callback) {
            this.storage.setData(data, callback);
        }
    }]);

    return ChromeStorageLocal;
}();

module.exports = ChromeStorageLocal;

},{"./Const.js":4,"./Storage.js":6}],3:[function(require,module,exports){
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
            var url = Const.DEFAULT_IMG_HOST + "img/emoticons/" + img;
            if (img.indexOf("https://") == 0 || img.indexOf("http://") == 0) {
                url = img;
            }
            return this.htmlEncode(url);
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
            return string.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
        }
    }, {
        key: "generateEmoticonRegex",
        value: function generateEmoticonRegex(text, regex) {
            regex = regex || this.htmlEncode(this.regexEscape(text));
            return new RegExp(regex, "g");
        }
    }, {
        key: "random",
        value: function random(items) {
            if (!items.length) {
                return null;
            }

            return items[Math.floor(Math.random() * items.length)];
        }
    }]);

    return Common;
}();

var common = new Common();
module.exports = common;

},{"./Const.js":4}],4:[function(require,module,exports){
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
Const.ADVERTISEMENT_URL = "https://dl.dropboxusercontent.com/s/jsmceot0pqi8lpk/chatppad.json?dl=1";
Const.VERSION_CHROME = "VERSION_CHROME";
Const.VERSION_FIREFOX = "VERSION_FIREFOX";
Const.VERSION_NAME_DEV = "dev";
Const.VERSION_NAME_RELEASE = "final";
Const.DEFAULT_IMG_HOST = "https://chatpp.thangtd.com/";
Const.DELAY_TIME = 6000;
Const.FORCE_TURN_OFF_THUMBNAIL = 1;
Const.ADVERTISEMENT_LOAD_TIMEOUT = 1000 * 60 * 30;

module.exports = Const;

},{}],5:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var common = require("./Common.js");
var Storage = require("./Storage.js");
var Const = require("./Const.js");

var EmoStorage = function (_Storage) {
    _inherits(EmoStorage, _Storage);

    function EmoStorage() {
        _classCallCheck(this, EmoStorage);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(EmoStorage).call(this));

        _this.data = {};
        _this.data_count = 0;
        return _this;
    }

    _createClass(EmoStorage, [{
        key: "getDataCount",
        value: function getDataCount() {
            return common.getObjectLength(this.data);
        }
    }, {
        key: "setFeatureStatus",
        value: function setFeatureStatus(emo_info) {
            var features = ["mention", "shortcut", "thumbnail", "highlight", "emoticon"];
            for (var i in features) {
                var feature_name = features[i] + "_status";
                this.data[feature_name] = emo_info[feature_name] === undefined ? true : emo_info[feature_name];
            }
            this.data.force_update_version = emo_info.force_update_version;
        }
    }, {
        key: "pushData",
        value: function pushData(inputted_data, inputted_priority) {
            var priority = inputted_priority !== undefined ? inputted_priority : inputted_data.priority;
            if (this.data[inputted_data.data_name] === undefined) {
                this.data_count++;
            }
            this.data[inputted_data.data_name] = {
                priority: priority,
                data_name: inputted_data.data_name,
                data_url: inputted_data.data_url,
                data_changelog: inputted_data.data_changelog,
                data_version: inputted_data.data_version,
                date_sync: new Date().toLocaleString()
            };
        }
    }, {
        key: "removeData",
        value: function removeData(data_name) {
            if (this.data[data_name] !== undefined) {
                delete this.data[data_name];
            }
        }
    }, {
        key: "syncData",
        value: function syncData(callback) {
            this.set(Const.CHROME_SYNC_KEY, this.data, callback);
        }
    }]);

    return EmoStorage;
}(Storage);

module.exports = EmoStorage;

},{"./Common.js":3,"./Const.js":4,"./Storage.js":6}],6:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var common = require("./Common.js");

var Storage = function () {
    function Storage(local) {
        _classCallCheck(this, Storage);

        this.storage = common.getStorage(local);
    }

    _createClass(Storage, [{
        key: "get",
        value: function get(key, callback) {
            this.storage.get(key, function (info) {
                info = info ? info[key] : undefined;
                callback(info);
            });
        }
    }, {
        key: "set",
        value: function set(key, data, callback) {
            var sync = {};
            sync[key] = data;
            this.storage.set(sync, function () {
                if (callback) {
                    callback();
                }
            });
        }
    }, {
        key: "setData",
        value: function setData(data, callback) {
            this.storage.set(data, function () {
                if (callback) {
                    callback();
                }
            });
        }
    }]);

    return Storage;
}();

module.exports = Storage;

},{"./Common.js":3}]},{},[1]);
