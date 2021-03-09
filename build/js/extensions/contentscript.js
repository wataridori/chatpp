/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var Const = {
    LOCAL_STORAGE_DATA_KEY: "YACEP_EMO_DATA",
    LOCAL_STORAGE_INFO_KEY: "YACEP_EMO_INFO",
    LOCAL_STORAGE_GROUP_MENTION: "CHATPP_GROUP_MENTION",
    LOCAL_STORAGE_ROOM_SHORTCUT: "CHATPP_ROOM_SHORTCUT",
    LOCAL_STORAGE_DISABLE_NOTIFY_ROOM: "CHATPP_DISABLE_NOTIFY_ROOM",
    CHROME_LOCAL_KEY: "CHATPP_CHROME_LOCAL_DATA",
    CHROME_SYNC_KEY: "CHATPP_CHROME_SYNC_DATA",
    CHROME_SYNC_GROUP_KEY: "CHATPP_CHROME_SYNC_GROUP",
    CHROME_SYNC_ROOM_KEY: "CHATPP_CHROME_SYNC_ROOM",
    CHROME_SYNC_DISABLE_NOTIFY_ROOM_KEY: "CHATPP_CHROME_SYNC_DISABLE_NOTIFY_ROOM",
    DEFAULT_DATA_URL: "https://dl.dropboxusercontent.com/s/lmxis68cfh4v1ho/default.json?dl=1",
    ADVERTISEMENT_URL: "https://dl.dropboxusercontent.com/s/jsmceot0pqi8lpk/chatppad.json?dl=1",
    VERSION_CHROME: "VERSION_CHROME",
    VERSION_FIREFOX: "VERSION_FIREFOX",
    VERSION_NAME_DEV: "dev",
    VERSION_NAME_RELEASE: "final",
    DEFAULT_IMG_HOST: "https://chatpp.thangtd.com/",
    DELAY_TIME: 6000,
    FORCE_TURN_OFF_THUMBNAIL: 1,
    ADVERTISEMENT_LOAD_TIMEOUT: 1000 * 60 * 30,
    TO_ALL_MARK: "TO ALL &gt;&gt;&gt;"
};

module.exports = Const;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Const = __webpack_require__(0);

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
        key: "checkDevVersionInternal",
        value: function checkDevVersionInternal() {
            return localStorage["chatpp_version_name"] === Const.VERSION_NAME_DEV;
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
        key: "parseUsersId",
        value: function parseUsersId(text) {
            var regex = /\[[a-zA-Z]+:([0-9]+)\]/g;
            var match = void 0;
            var users = [];
            while ((match = regex.exec(text)) != null) {
                users.push(match[1]);
            }

            return users;
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
        key: "validateDropboxUrl",
        value: function validateDropboxUrl(url) {
            if (!this.validateUrl(url)) {
                return false;
            }
            var supported_urls = ["https://dl.dropboxusercontent.com/", "https://www.dropbox.com/"];
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = supported_urls[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var supported_url = _step.value;

                    if (url.startsWith(supported_url)) {
                        return true;
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            return false;
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
    }, {
        key: "randomString",
        value: function randomString(n) {
            var text = "";
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

            for (var i = 0; i < n; i++) {
                text += possible.charAt(Math.floor(Math.random() * possible.length));
            }return text;
        }
    }]);

    return Common;
}();

var common = new Common();
module.exports = common;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var common = __webpack_require__(1);

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

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Storage = __webpack_require__(2);
var Const = __webpack_require__(0);

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

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var common = __webpack_require__(1);
var Storage = __webpack_require__(2);
var Const = __webpack_require__(0);

var EmoStorage = function (_Storage) {
    _inherits(EmoStorage, _Storage);

    function EmoStorage() {
        _classCallCheck(this, EmoStorage);

        var _this = _possibleConstructorReturn(this, (EmoStorage.__proto__ || Object.getPrototypeOf(EmoStorage)).call(this));

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
            var features = ["mention", "shortcut", "thumbnail", "emoticon", "legacy_theme"];
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

/***/ }),
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(17);


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var Const = __webpack_require__(0);
var common = __webpack_require__(1);
var Storage = __webpack_require__(2);
var EmoStorage = __webpack_require__(4);
var ChromeStorageLocal = __webpack_require__(3);

var storage = new Storage();
var emo_storage = new EmoStorage();
var emoticons = [];
var emo_info = {};
var urls = {};

init(true);
function init(inject_script) {
    storage.get(Const.CHROME_SYNC_KEY, function (info) {
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
            info.theme_status = false;
        }
        emo_info = info;
        localStorage.force_update_version = info.force_update_version;
        var features = ["mention", "shortcut", "thumbnail", "emoticon", "legacy_theme"];
        var features_default_false = ["legacy_theme"];
        features.forEach(function (feature) {
            var feature_name = feature + "_status";
            if (info[feature_name] === undefined) {
                info[feature_name] = features_default_false.includes(feature) ? false : true;
            }
            common.setStatus(feature, info[feature_name]);
        });

        emo_storage.setFeatureStatus(info);
        if (info.emoticon_status == false) {
            addInjectedScript();
        } else {
            getData(info, inject_script);
        }
        if (info.legacy_theme_status) {
            setTimeout(function () {
                $("<style type=\"text/css\"> .iPjyiK{background: rgb(221, 235, 215) !important;};</style>").appendTo("head");
                $("<style type=\"text/css\"> .iPjyiK{background: rgb(221, 235, 215) !important;};</style>").appendTo("head");
                $("<style type=\"text/css\"> .chatTimeLineReply__label{display: none !important;};</style>").appendTo("head");
                $("body").removeClass("light");
            }, Const.DELAY_TIME + 1);
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
        var query = getUrlQuery(url);
        if (!query) {
            return false;
        }
        chrome.runtime.sendMessage({ contentScriptQuery: "fetchEmoticonsData", query: query, data_name: data_name }, function (data) {
            if (data.success) {
                if (typeof data.data_version !== "undefined" && typeof data.emoticons !== "undefined") {
                    data.data_url = urls[data.data_name];
                    var priority = emo_info[data.data_name] && emo_info[data.data_name].priority ? emo_info[data.data_name].priority : 0;
                    emo_storage.pushData(data, priority);
                    pushEmoticons(data.emoticons, priority, data.data_name);
                }
            } else {
                failed = true;
                delete emo_info[data.data_name];
                pushFailedData(data.data_name);
            }

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

function getUrlQuery(url) {
    var supported_urls = ["https://dl.dropboxusercontent.com/", "https://www.dropbox.com/"];
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = supported_urls[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var supported_url = _step.value;

            if (url.startsWith(supported_url)) {
                return url.substring(supported_url.length);
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    return false;
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
    setTimeout(function () {
        injectJsFile("internals/all.js");
    }, Const.DELAY_TIME);

    setInterval(loadAdvertisement, Const.ADVERTISEMENT_LOAD_TIMEOUT);
}

function preLoad() {
    var chat_send_tool = $(".chatInput div").first();
    chat_send_tool.append($("<li>", { id: "_chatppPreLoad", css: {
            "display": "inline-block"
        } }).append($("<span>", { id: "chatppPreLoad" })));
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
    chrome.runtime.sendMessage({ contentScriptQuery: "fetchAdvertisementData" }, function (data) {
        if (!$.isEmptyObject(data)) {
            localStorage["chatpp_advertisement"] = JSON.stringify(data);
        }
    });
}

/***/ })
/******/ ]);