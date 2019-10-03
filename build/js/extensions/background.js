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
/******/ 	return __webpack_require__(__webpack_require__.s = 21);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
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
    TO_ALL_MARK: "TO ALL >>>"
};

module.exports = Const;

/***/ }),

/***/ 1:
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

/***/ 2:
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

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(22);


/***/ }),

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

var common = __webpack_require__(1);
var ChromeStorageLocal = __webpack_require__(3);
var chrome_storage_local = new ChromeStorageLocal();
var Const = __webpack_require__(0);

chrome.runtime.onInstalled.addListener(function () {
    chrome_storage_local.get(function (data) {
        var version = void 0;
        if (data) {
            version = data["version"];
        }
        if (!version || version != common.app_detail.version) {
            chrome.browserAction.setBadgeText({ text: "new" });
        }
    });
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.contentScriptQuery == "fetchEmoticonsData") {
        var url = "https://dl.dropboxusercontent.com/" + request.query;
        getJSON(url, function (error, responseData) {
            if (error !== null) {
                var data = {
                    success: false,
                    data_name: request.data_name
                };
                sendResponse(data);
            }
            responseData.success = true;
            sendResponse(responseData);
        });
    }

    if (request.contentScriptQuery == "fetchAdvertisementData") {
        getJSON(Const.ADVERTISEMENT_URL, function (error, responseData) {
            sendResponse(responseData);
        });
    }

    return true;
});

function getJSON(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.responseType = "json";
    xhr.onload = function () {
        var status = xhr.status;
        if (status === 200) {
            callback(null, xhr.response);
        } else {
            callback(status, xhr.response);
        }
    };
    xhr.send();
}

/***/ }),

/***/ 3:
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

/***/ })

/******/ });