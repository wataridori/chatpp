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
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
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
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var common = __webpack_require__(1);

var ChatworkFacade = function () {
    function ChatworkFacade() {
        _classCallCheck(this, ChatworkFacade);
    }

    _createClass(ChatworkFacade, [{
        key: "myId",
        value: function myId() {
            return AC.myid;
        }
    }, {
        key: "getUserName",
        value: function getUserName(user_id) {
            return AC.getDefaultNickName(user_id);
        }
    }, {
        key: "currentRoom",
        value: function currentRoom() {
            return RM.id;
        }
    }, {
        key: "getRoomAdmins",
        value: function getRoomAdmins() {
            var members = this.getRoomMembers();
            var admins = [];
            for (var id in members) {
                if (members[id] === "admin") {
                    admins.push(id);
                }
            }
            return admins;
        }
    }, {
        key: "isAdmin",
        value: function isAdmin(user) {
            var members = this.getRoomMembers();
            user = user || this.myId();
            return members[user] === "admin";
        }
    }, {
        key: "getRoomMembers",
        value: function getRoomMembers() {
            return RM.member_dat;
        }
    }, {
        key: "getRoomMembersCount",
        value: function getRoomMembersCount() {
            return RM.sorted_member_list.length;
        }
    }, {
        key: "getRoomMembersArray",
        value: function getRoomMembersArray() {
            var members = this.getRoomMembers();
            return Object.keys(members);
        }
    }, {
        key: "getRandomMemberInRoom",
        value: function getRandomMemberInRoom() {
            var members = this.getRoomMembersArray();
            return common.random(members);
        }
    }, {
        key: "searchRoomsByPerson",
        value: function searchRoomsByPerson(user_id) {
            var rooms = RL.rooms;
            var same_rooms = [];
            for (var room_id in rooms) {
                var room = rooms[room_id];
                if (room._name && room.member_dat && room.member_dat.hasOwnProperty(user_id)) {
                    same_rooms.push(room);
                }
            }
            return same_rooms;
        }
    }, {
        key: "removeMemberFromRoom",
        value: function removeMemberFromRoom(user_id, room_id) {
            var room = RL.rooms[room_id];
            if (room.type === "group" && room.member_dat.hasOwnProperty(user_id) && room.member_dat[this.myId()] === "admin") {
                if (!window.confirm("Are you sure to delete this user from " + room.getName() + " ?")) {
                    return false;
                }
                delete room.member_dat[user_id];
                var params = {
                    body_params: {
                        cmd: "update_room",
                        room_id: room_id,
                        role: room.member_dat
                    },
                    query_params: {}
                };
                CW.post("gateway.php", params);
                return true;
            }

            return false;
        }
    }, {
        key: "addMembersFromChatTextToCurrentRoom",
        value: function addMembersFromChatTextToCurrentRoom() {
            var room_id = this.currentRoom();
            var room = RL.rooms[room_id];
            var member_dat = $.extend({}, room.member_dat);
            if (room.type === "group" && member_dat[this.myId()] === "admin") {
                if (!window.confirm("Are you sure to add all Users mentioned in Chatbox to this room?")) {
                    return false;
                }
                var text = this.getChatText();
                var users = common.parseUsersId(text);
                var update = false;
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = users[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        u = _step.value;

                        if (!member_dat.hasOwnProperty(u)) {
                            member_dat[u] = "member";
                            update = true;
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

                if (update) {
                    var params = {
                        body_params: {
                            cmd: "update_room",
                            room_id: room_id,
                            role: member_dat
                        },
                        query_params: {}
                    };
                    CW.post("gateway.php", params, function (response) {
                        if (response.status && !response.status.success) {
                            window.alert(response.status.message);
                        }
                    });
                } else {
                    window.alert("There are no new mentioned Members to add into this Room");
                }

                return true;
            }
        }
    }, {
        key: "getChatText",
        value: function getChatText() {
            return $("#_chatText").val();
        }
    }, {
        key: "clearChatText",
        value: function clearChatText() {
            CS.view.setChatText("");
        }
    }, {
        key: "checkNotifyAllCondition",
        value: function checkNotifyAllCondition() {
            return common.checkDevVersionInternal() || this.getRoomMembersCount() > 100 && this.isAdmin();
        }
    }, {
        key: "getMessageObjectById",
        value: function getMessageObjectById(mid) {
            return RM.timeline.chat_id2chat_dat[mid];
        }
    }, {
        key: "getMessagePanelByMessageId",
        value: function getMessagePanelByMessageId(mid) {
            var message = this.getMessageObjectById(mid);
            return TimeLineView.prototype.getMessagePanel(message);
        }
    }, {
        key: "getMyRoomId",
        value: function getMyRoomId() {
            return AC.getRoomId(AC.myid);
        }
    }, {
        key: "getTempRoomId",
        value: function getTempRoomId() {
            // Get the first room that is not the same as current room
            var current_room = RM.id;
            var my_room = this.getMyRoomId();
            if (current_room != my_room) {
                return my_room;
            }
            var sorted_rooms_list = RL.getSortedRoomList();
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = sorted_rooms_list[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    i = _step2.value;

                    if (i !== current_room) {
                        return i;
                    }
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }
        }
    }]);

    return ChatworkFacade;
}();

var chatwork = new ChatworkFacade();
module.exports = chatwork;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var common = __webpack_require__(1);
var Const = __webpack_require__(0);
var chatwork = __webpack_require__(5);
var KEY_COLON = "::";

var Emoticon = function () {
    function Emoticon() {
        _classCallCheck(this, Emoticon);

        this.status = common.getStatus("emoticon");
        this.emoticons = [];
        this.chatpp_emoticons = {};
        this.emoticons_regex;
        this.chatpp_cached_messages = {};
        this.start = /::/ig;
        this.is_colon = false;
        this.emo_name = "";
        this.emo_cursor_loca = 0;
        this.list_all_emo = JSON.parse(localStorage[Const.LOCAL_STORAGE_DATA_KEY]);
        this.chat_text_jquery = $("#_chatText");
        this.chat_text_element = document.getElementById("_chatText");
        window.emoticon_tag_hash_list = {};
    }

    _createClass(Emoticon, [{
        key: "setUp",
        value: function setUp() {
            if (!this.status) {
                return;
            }
            this.emoticons = JSON.parse(localStorage[Const.LOCAL_STORAGE_DATA_KEY]);
            this.sorted_emoticons = this.emoticons.slice().sort(function (a, b) {
                if (a.priority < b.priority) {
                    return 1;
                } else if (a.priority > b.priority) {
                    return -1;
                }
                return a.key < b.key ? -1 : a.key > b.key ? 1 : 0;
            });

            this.prepareChatppEmoticons();
            this.prepareEmoticonsRegex();
            // this.overrideAST();
            this.applyEmoticonsByModifyingDOM();
        }
    }, {
        key: "prepareChatppEmoticons",
        value: function prepareChatppEmoticons() {
            var _this = this;

            var html = "<div id='suggestion-emotion-container'></div>";
            $(html).insertAfter("#_externalInfo");
            $("#suggestion-emotion-container").css({
                "background": "#fff",
                "position": "absolute",
                "max-height": "200px",
                "width": "200px",
                "border": "1px solid #ababab",
                "border-radius": "3px",
                "padding": "4px 6px 4px 6px",
                "box-shadow": "0px 3px 10px rgba(103, 103, 103, 0.57)",
                "display": "none",
                "overflow-y": "auto",
                "z-index": "99"
            });

            this.chat_text_jquery.click(function () {
                return _this.hideSuggestionEmotionsBox();
            });

            $("#_roomListArea").click(function () {
                return _this.hideSuggestionEmotionsBox();
            });

            $("#_headerSearch").click(function () {
                return _this.hideSuggestionEmotionsBox();
            });
            // Temporarily remove the emoticon suggestion list
            this.addExternalEmoList(true);
            this.addExternalEmo();
            this.setEmoticonTextLabel();

            //event
            $(document).keyup(function (e) {
                if (!_this.status) {
                    return;
                }
                if (e.which == 27) {
                    _this.hideSuggestionEmotionsBox();
                }
            });

            this.chat_text_jquery.keydown(function (e) {
                if (e.which == 40 && _this.is_colon) {
                    if (_this.emo_cursor_loca != $("#suggestion-emotion-container").find("p").length - 1) {
                        _this.emo_cursor_loca += 1;
                    }
                    e.preventDefault();
                }

                if (e.which == 38 && _this.is_colon) {
                    if (_this.emo_cursor_loca !== -1) {
                        _this.emo_cursor_loca -= 1;
                    }

                    e.preventDefault();
                }

                if ((e.which == 13 || e.which == 9) && _this.is_colon) {
                    $("#suggestion-emotion-container").find("p[data-emo-selected='true']").click();

                    e.preventDefault();
                }
            });

            $("#suggestion-emotion-container").on("mouseenter", "p", function (e) {
                $(e.currentTarget).attr("data-emo-selected", true);
                $(e.currentTarget).css("background-color", "rgb(216, 240, 249)");
            }).on("mouseleave", "p", function (e) {
                $(e.currentTarget).removeAttr("data-emo-selected");
                $(e.currentTarget).css("background-color", "#fff");
            }).on("click", "p", function (e) {
                var pos = _this.chat_text_jquery.val().lastIndexOf("::" + _this.emo_name);
                var end_pos = _this.chat_text_jquery.val().slice(_this.emo_name.length + pos + 2, _this.chat_text_jquery.val().length);
                var this_value = _this.chat_text_jquery.val().substring(0, pos) + $(e.currentTarget).attr("data-emo") + " " + end_pos;
                $("#_chatText").val(this_value);
                _this.hideSuggestionEmotionsBox();
                $("#_chatText").focus();
            });

            this.chat_text_jquery.keyup(function (e) {
                if (!_this.chat_text_jquery.val()) {
                    _this.hideSuggestionEmotionsBox();
                }

                if (_this.getNearestAtmarkIndex() != -1) {
                    _this.is_colon = true;
                } else {
                    _this.is_colon = false;
                }

                if (e.which == 40 && _this.is_colon) {
                    var curentScroll = $("#suggestion-emotion-container").scrollTop();
                    var scrollValue = $(".suggestion-emo-list[data-emo-selected='true']").height();
                    $("#suggestion-emotion-container").scrollTop(scrollValue + curentScroll);
                    var firstEleP = $("#suggestion-emotion-container").find("p");
                    if ($(firstEleP[_this.emo_cursor_loca]).length > 0) {
                        $(firstEleP[_this.emo_cursor_loca - 1]).mouseleave();
                        $(firstEleP[_this.emo_cursor_loca]).mouseenter();
                    }

                    return;
                }

                if (e.which == 38 && _this.is_colon) {
                    var _curentScroll = $("#suggestion-emotion-container").scrollTop();
                    var _scrollValue = $(".suggestion-emo-list[data-emo-selected='true']").height();
                    $("#suggestion-emotion-container").scrollTop(_curentScroll - _scrollValue);

                    var _firstEleP = $("#suggestion-emotion-container").find("p");

                    if (_this.emo_cursor_loca == -1) {
                        $(_firstEleP).mouseleave();

                        return;
                    }

                    if ($(_firstEleP[_this.emo_cursor_loca]).length > 0) {
                        $(_firstEleP[_this.emo_cursor_loca + 1]).mouseleave();
                        $(_firstEleP[_this.emo_cursor_loca]).mouseenter();
                    }

                    return;
                }

                if (e.which == 8) {
                    if (_this.emo_name.length > 0) {
                        var arrChar = _this.emo_name.split("");
                        arrChar.pop();
                        _this.emo_name = arrChar.join("");
                    } else {
                        _this.hideSuggestionEmotionsBox();
                    }
                }

                if (e.which == 32) {
                    _this.hideSuggestionEmotionsBox();
                }

                if (_this.is_colon) {
                    if (_this.emo_name.length > 0) {
                        $("#suggestion-emotion-container").html("");
                        $("#suggestion-emotion-container").fadeIn(0);
                    }
                    var lastColonIndex = _this.chat_text_jquery.val().lastIndexOf(KEY_COLON);
                    var textAfterColon = _this.chat_text_jquery.val().substr(lastColonIndex + 2);
                    var emoLastText = "";
                    if (textAfterColon.match(/\n/)) {
                        emoLastText = textAfterColon.split(/\r|\n/);
                    } else {
                        emoLastText = textAfterColon.split(" ");
                    }

                    if (emoLastText.length > 0) {
                        if (e.which != 37 || e.which != 38 || e.which != 39 || e.which != 40) {
                            _this.emo_name = emoLastText[0];
                        }
                    } else {
                        _this.hideSuggestionEmotionsBox();
                    }

                    var findEmo = $.grep(_this.list_all_emo, function (e) {
                        var comp = e.key.toLowerCase();
                        return comp.indexOf(_this.emo_name) > -1;
                    });
                    var toAppend = "";

                    if (findEmo.length > 0) {
                        for (var i = 0; i < findEmo.length; i++) {
                            if (i == 0) {
                                toAppend += "<p class=\"suggestion-emo-list\" data-emo-selected=\"true\" data-emo=\"" + findEmo[i].key + "\" style=\"cursor: pointer; margin-top: 5px; background-color: rgb(216, 240, 249);\">";
                            } else {
                                toAppend += "<p class=\"suggestion-emo-list\" data-emo=\"" + findEmo[i].key + "\" style=\"cursor: pointer; margin-top: 5px;\">";
                            }
                            toAppend += "<img id=\"example\" src=\"" + common.htmlEncode(common.getEmoUrl(findEmo[i].src)) + "\" title=\"" + findEmo[i].key + " - " + findEmo[i].data_name + " - Chatpp\" alt=\"" + findEmo[i].key + "\" style=\"width: 100%; max-width: 50px;\"> <b> " + findEmo[i].key + "</b></p>";
                        }
                        $("#suggestion-emotion-container").append(toAppend);
                    } else {
                        $("#suggestion-emotion-container").html("");
                        $("#suggestion-emotion-container").fadeOut(0);
                    }
                    var rect = _this.chat_text_element.getBoundingClientRect();
                    var position = Measurement.caretPos(_this.chat_text_jquery);
                    position.left -= rect.left;
                    var bt = window.innerHeight - position.top;
                    $("#_chatTextArea").css({
                        "overflow-y": "visible",
                        "z-index": 0
                    });
                    $("#suggestion-emotion-container").parent().css({
                        position: "relative"
                    });
                    $("#suggestion-emotion-container").css({
                        bottom: bt,
                        left: position.left + 5
                    });
                }
            });
        }
    }, {
        key: "getNearestAtmarkIndex",
        value: function getNearestAtmarkIndex() {
            var content = this.chat_text_jquery.val();
            var atmarks = content.match(this.start);

            if (!atmarks) {
                return -1;
            }

            var caret_index = this.doGetCaretPosition(this.chat_text_element);
            var atmark_index = content.indexOf(KEY_COLON);
            var pre_atmark_index = -1;
            do {
                if (atmark_index >= caret_index) {
                    break;
                }
                pre_atmark_index = atmark_index;
                atmark_index = content.indexOf(KEY_COLON, atmark_index + 1);
            } while (atmark_index != -1);

            return pre_atmark_index;
        }
    }, {
        key: "doGetCaretPosition",
        value: function doGetCaretPosition(ctrl) {
            var CaretPos = 0; // IE Support
            if (document.selection) {
                ctrl.focus();
                var Sel = document.selection.createRange();
                Sel.moveStart("character", -ctrl.value.length);
                CaretPos = Sel.text.length;
            }
            // Firefox support
            else if (ctrl.selectionStart || ctrl.selectionStart == "0") CaretPos = ctrl.selectionStart;
            return CaretPos;
        }
    }, {
        key: "addExternalEmoList",
        value: function addExternalEmoList(bind_event) {
            if (!this.status || $("#externalEmoticonsButton").length > 0) {
                return;
            }

            $("#_chatSendArea ul").first().append($("<li>", {
                id: "_externalEmoticonsButton",
                class: "_showDescription chatInput__element",
                css: {
                    "display": "inline-block"
                },
                attr: {
                    "role": "button",
                    "aria-label": "View Chatpp Emoticons List"
                }
            }).append($("<span>", { id: "externalEmoticonsButton", class: "icoFontActionMore icoSizeLarge" })));

            if (!bind_event) {
                return;
            }

            $("#_wrapper").append($("<style>").append("::-webkit-scrollbar {width:10px;height:10px} .w3-emotion {display:inline-block;text-align:center;min-width:80px;height:30px;border:1px solid #ccc;cursor:pointer;margin:0px 2px;border-radius:5px;font-size:10px;background-color:white;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}"));

            $("#_wrapper").append($("<div>", {
                id: "_externalEmoticonList",
                class: "emoticonList emoticonTooltip toolTip tooltip--white mainContetTooltip",
                css: {
                    "opacity": "1",
                    "z-index": "2",
                    "display": "none",
                    "top": "480px",
                    "left": "160px",
                    "role": "tooltip",
                    "width": "350px"
                }
            }).append($("<div>", {
                class: "_cwTTTriangle toolTipTriangle toolTipTriangleWhiteBottom",
                css: {
                    "left": "129px"
                }
            }), $("<ul>", {
                id: "_emoticonGalleryTab",
                css: {
                    "display": "flex",
                    "flex-wrap": "wrap",
                    "justify-content": "center",
                    "max-width": "350px",
                    "height": "450px",
                    "overflow": "auto"
                }
            }), $("<div>", {
                id: "_externalEmotionDescription",
                class: "tooltipFooter"
            }), $("<div>", {
                id: "tabEmotionBig",
                css: {
                    "display": "flex",
                    "overflow": "auto",
                    "overflow-y": "scroll",
                    "height": "42px"
                }
            })));
            var hint = _is_mac ? L.chatsend_shift_and_command_hint : L.chatsend_shift_and_ctrl_hint;
            var u = $("#_externalEmoticonList").cwToolTip({
                open: function open() {
                    return $("#_externalEmotionDescription").text(hint);
                }
            });

            var arrayDataName = [];
            var sorted_emoticons = this.sorted_emoticons;

            sorted_emoticons.forEach(function (emo) {
                if (arrayDataName.indexOf(emo.data_name) == -1) {
                    arrayDataName.push(emo.data_name);
                }
            });

            var temp = [];
            var arrayData = [];

            arrayDataName.forEach(function (item) {
                temp = [];
                sorted_emoticons.map(function (emo) {
                    var encoded_text = common.htmlEncode(emo.key);
                    var titleapp = encoded_text + " - " + emo.data_name + " - Chatpp";
                    var img_src = common.htmlEncode(common.getEmoUrl(emo.src));
                    if (emo.data_name == item) {
                        var liElement = $("<li>", {
                            css: {
                                "padding": "5px",
                                "cursor": "pointer",
                                "border": "1px solid #fff",
                                "border-radius": "3px",
                                "transition": "border 0.2s linear 0s"
                            }
                        }).append($("<img>", {
                            id: "example",
                            css: {
                                "width": "100%",
                                "max-width": "50px"
                            },
                            attr: {
                                "src": img_src,
                                "title": titleapp,
                                "alt": encoded_text
                            }
                        }));
                        temp.push(liElement);

                        return liElement.prop("outerHTML");
                    }
                }).join("");
                arrayData.push(temp);
            });

            $("body").on("click", "#externalEmoticonsButton", function (e) {
                u.open($(e.currentTarget));
                $("#_emoticonGalleryTab li").remove();
                $("#_externalEmoticonList #_emoticonGalleryTab").append(arrayData[0]);
                $("#_externalEmoticonList #tabEmotionBig button").css("background-color", "white");
                $("#tabEmotion0").css("background-color", "#eaeae8");
            });

            arrayDataName.forEach(function (item, index) {
                $("#_externalEmoticonList #tabEmotionBig").append($("<button>", {
                    id: "tabEmotion" + index,
                    class: "w3-bar-item w3-button w3-emotion"
                }).append(item));
            });

            arrayDataName.forEach(function (item, index) {
                $("#tabEmotion" + index).on("click", function (event) {
                    event.preventDefault();
                    $("#_emoticonGalleryTab li").remove();
                    $("#_externalEmoticonList #_emoticonGalleryTab").append(arrayData[index]);
                });
            });

            arrayDataName.forEach(function (item, index) {
                $("#_externalEmoticonList #tabEmotionBig button").on("click", function (event) {
                    $("#_externalEmoticonList #tabEmotionBig button").css("background-color", "white");
                    $(event.currentTarget).css("background-color", "#eaeae8");
                });

                $("#_externalEmoticonList #tabEmotionBig #tabEmotion" + index).hover(function (event) {
                    $(event.currentTarget).attr("data-toggle", "tooltip");
                    $(event.currentTarget).attr("data-placement", "top");
                    $(event.currentTarget).attr("title", item);
                });
            });

            $("#_externalEmoticonList").on("mouseenter", "li", function (e) {
                var a = $(e.currentTarget).find("img");
                $("#_externalEmotionDescription").text(a.attr("title"));
            }).on("mouseleave", "li", function () {
                return $("#_externalEmotionDescription").text(hint);
            }).on("click", "li", function () {
                CW.view.key.ctrl || CW.view.key.command ? (u.close(), CS.view.sendMessage($(this).find("img").prop("alt"), !0)) : ($("_chatText").focus(), CS.view.setChatText($(this).find("img").prop("alt"), !0), CW.view.key.shift || u.close());
            });
        }
    }, {
        key: "addExternalEmo",
        value: function addExternalEmo() {
            this.addEmo(this.emoticons);
            this.status = true;
        }
    }, {
        key: "isSpecialEmo",
        value: function isSpecialEmo(emo) {
            var special_emo = [":-ss", ":-??", "~:>", ":@)", "~X(", "3:-O"];
            return special_emo.indexOf(emo) > -1;
        }
    }, {
        key: "setEmoticonTextLabel",
        value: function setEmoticonTextLabel() {
            $("#_externalEmoticonsButton").attr("aria-label", "View Chat++ Emoticons");
        }
    }, {
        key: "addEmo",
        value: function addEmo(emo) {
            var _this2 = this;

            this.chatpp_emoticons.baseEmoticons = [];
            this.chatpp_emoticons.tagHash = {};
            for (var index = 0; index < emo.length; index++) {
                var encoded_text = common.htmlEncode(emo[index].key);
                var name = this.getEmoNameFromTag(emo[index].key);
                var title = encoded_text + " - " + emo[index].data_name + " - Chatpp";
                var src = common.htmlEncode(common.getEmoUrl(emo[index].src));
                var one_emo = {
                    name: name,
                    title: title,
                    src: src,
                    tag: emo[index].key,
                    external: true
                };
                this.chatpp_emoticons.baseEmoticons.push(one_emo);
                this.chatpp_emoticons.tagHash[emo[index].key] = one_emo;
                window.emoticon_tag_hash_list[name] = one_emo;
                emoticons.baseEmoticons.push(one_emo);
                emoticons.tagHash[emo[index].key] = one_emo;
            }
            this.chatpp_emoticons.getEmoticonWithTag = function (tag) {
                return _this2.chatpp_emoticons.tagHash[tag];
            };
            this.chatpp_emoticons.getAllEmoticons = function () {
                return _this2.baseEmoticons;
            };
            this.chatpp_emoticons.getEmoticonWithName = function (name) {
                return _this2.chatpp_emoticons.baseEmoticons.find(function (e) {
                    return e.name === name;
                });
            };
            tokenizer.setEmoticons(emoticons.getAllEmoticons().map(function (emo) {
                return emo.tag;
            }));
        }
    }, {
        key: "getEmoNameFromTag",
        value: function getEmoNameFromTag(tag) {
            return "chatpp-" + common.htmlEncode(tag);
        }
    }, {
        key: "hideSuggestionEmotionsBox",
        value: function hideSuggestionEmotionsBox() {
            this.is_colon = false;
            this.emo_name = "";
            this.emo_cursor_loca = 0;
            $("#suggestion-emotion-container").scrollTop(0);
            $("#suggestion-emotion-container").fadeOut(0);
            $("#suggestion-emotion-container").html("");
        }

        // Enable Chatpp's Emoticons by overriding getAST function

    }, {
        key: "overrideAST",
        value: function overrideAST() {
            var _this3 = this;

            /* eslint-disable no-console */
            /* for debugging new feature */
            if (!window.notation_module) {
                return;
            }
            getAST_handler = {
                apply: function apply(target, thisArg, args) {
                    var r = target.apply(thisArg, args);
                    var raw_text = thisArg.value;
                    var matches = raw_text.match(_this3.emoticons_regex);
                    if (matches) {
                        var emoticons_regex = _this3.generateEmoticonsRegexFromArray(matches);
                        r = _this3.findTextToken(r, emoticons_regex);
                    }
                    return r;
                }
            };

            window.notation_module.getAST = new Proxy(window.notation_module.getAST, getAST_handler);
            /* eslint-enable */
        }
    }, {
        key: "findTextToken",
        value: function findTextToken(tokenized_objects, emoticons_regex) {
            var _this4 = this;

            // list token that directly contain text or have children that contain text
            var list_types = ['tokens', 'messageQuote', 'quotedTokens', 'info', 'title', 'message'];
            list_types.forEach(function (key, index) {
                if (tokenized_objects[key]) {
                    if (Array.isArray(tokenized_objects[key])) {
                        // find nested text token
                        if (tokenized_objects[key].some(function (z) {
                            return z.text;
                        })) {
                            // last level reached
                            for (var _index = 0; _index < tokenized_objects[key].length; _index++) {
                                if (tokenized_objects[key][_index].text) {
                                    var head = tokenized_objects[key].slice(0, _index);
                                    var body = _this4.parseMoreEmo(tokenized_objects[key][_index], emoticons_regex);
                                    var tail = tokenized_objects[key].slice(_index + 1);
                                    tokenized_objects[key] = head.concat(body).concat(tail);
                                    _index += body.length - 1;
                                }
                            }
                        } else {
                            // not yet, continue check
                            tokenized_objects[key] = tokenized_objects[key].map(function (item) {
                                return _this4.findTextToken(item, emoticons_regex);
                            });
                        }
                    } else if (_typeof(tokenized_objects[key]) == 'object') {
                        // an object, continue check
                        tokenized_objects[key] = _this4.findTextToken(tokenized_objects[key], emoticons_regex);
                    }
                }
            });

            return tokenized_objects;
        }
    }, {
        key: "parseMoreEmo",
        value: function parseMoreEmo(token, emoticons_regex) {
            var ret = [];
            var pos = 0;
            while (true) {
                var match = emoticons_regex.exec(token.text);
                var end_pos = match ? match.index : token.text.length;
                var text = token.text.slice(pos, end_pos);
                if (text) {
                    ret.push({ text: text });
                }
                if (!match) {
                    break;
                }
                ret.push({ emoticon: { value: this.getEmoNameFromTag(match[0]), tag: match[0] } });
                pos = emoticons_regex.lastIndex;
            }
            return ret.length ? ret : [token];
        }

        // New method to apply Emoticons by replacing Node text
        // Thanks to Bui The Hanh for the idea

    }, {
        key: "textNodesUnder",
        value: function textNodesUnder(node) {
            var all = [];
            for (node = node.firstChild; node; node = node.nextSibling) {
                if (node.nodeType == 1 && node.tagName == 'CODE') {
                    continue;
                }

                // if node is #text
                if (node.nodeType == 3) {
                    all.push(node);
                } else {
                    all = all.concat(this.textNodesUnder(node));
                }
            }
            return all;
        }
    }, {
        key: "applyEmoticons",
        value: function applyEmoticons(node) {
            var all_text_nodes = this.textNodesUnder(node);
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = all_text_nodes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var text_node = _step.value;

                    var text_node_content = text_node.textContent;
                    var replacement = this.applyReplacement(text_node_content);
                    var txt = document.createElement('span');
                    txt.innerHTML = replacement;
                    text_node.replaceWith(txt);
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
        }
    }, {
        key: "applyReplacement",
        value: function applyReplacement(text) {
            var newContentParts = [];
            var parsedNodecontent = this.parseMoreEmo({ text: text }, this.emoticons_regex);

            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = parsedNodecontent[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var part = _step2.value;

                    if (part.text) {
                        newContentParts.push(common.htmlEncode(part.text));
                    } else if (part.emoticon) {
                        var emo = this.chatpp_emoticons.getEmoticonWithTag(part.emoticon.tag);

                        if (emo) {
                            newContentParts.push("<img src=\"" + emo.src + "\" alt=\"" + emo.tag + "\" data-cwtag=\"" + emo.tag + "\" title=\"" + emo.title + "\" class=\"ui_emoticon chatpp_emoticon\">");
                        } else {
                            newContentParts.push(common.htmlEncode(part.emoticon.tag));
                        }
                    }
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }

            return newContentParts.join('');
        }
    }, {
        key: "applyEmoticonsByModifyingDOM",
        value: function applyEmoticonsByModifyingDOM() {
            var _this5 = this;

            window.nodes = [];
            var single_chat_elm_class_name = '_message';
            var observer = new MutationObserver(function (mutations) {
                mutations.forEach(function (mutation) {
                    var nodes = Array.from(mutation.addedNodes);
                    var _iteratorNormalCompletion3 = true;
                    var _didIteratorError3 = false;
                    var _iteratorError3 = undefined;

                    try {
                        for (var _iterator3 = nodes[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                            var node = _step3.value;

                            if (!node.className) {
                                continue;
                            }
                            if (node.className.indexOf(single_chat_elm_class_name) > -1) {
                                var message_node = node.getElementsByTagName("PRE");
                                message_node.length && _this5.applyEmoticons(message_node[0]);
                            }
                        }
                    } catch (err) {
                        _didIteratorError3 = true;
                        _iteratorError3 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion3 && _iterator3.return) {
                                _iterator3.return();
                            }
                        } finally {
                            if (_didIteratorError3) {
                                throw _iteratorError3;
                            }
                        }
                    }

                    ;
                });
            });
            observer.observe(document.documentElement, { childList: true, subtree: true });
        }
    }, {
        key: "prepareEmoticonsRegex",
        value: function prepareEmoticonsRegex() {
            var patterns = [];
            var baseEmoticons = this.chatpp_emoticons.baseEmoticons;
            for (var i in baseEmoticons) {
                if (baseEmoticons[i].external) {
                    patterns.push("(" + this.generateRegexFromString(baseEmoticons[i].tag) + ")");
                }
            }
            this.emoticons_regex = new RegExp(patterns.join("|"), "g");
        }
    }, {
        key: "generateEmoticonsRegexFromArray",
        value: function generateEmoticonsRegexFromArray(emoticon_list) {
            var patterns = [];
            for (var i in emoticon_list) {
                patterns.push("(" + this.generateRegexFromString(emoticon_list[i]) + ")");
            }
            return new RegExp(patterns.join("|"), "g");
        }
    }, {
        key: "generateRegexFromString",
        value: function generateRegexFromString(string) {
            return string.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
        }
    }]);

    return Emoticon;
}();

var emoticon = new Emoticon();
module.exports = emoticon;

/***/ }),
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(21);


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var emoticon = __webpack_require__(6);
var shortcut = __webpack_require__(22);
var view_enhancer = __webpack_require__(23);
var NotificationDisabler = __webpack_require__(24);
var notify_all = __webpack_require__(25);
var mention = __webpack_require__(26);
var room_information = __webpack_require__(27);
var common = __webpack_require__(1);

var cw_timer = void 0;

$(function () {
    cw_timer = setInterval(function () {
        if (typeof CW !== "undefined" && typeof RM !== "undefined") {
            window.clearInterval(cw_timer);
            $("#_chatppPreLoad").remove();
            addStyle();
            exposeModules();
            if (emoticon.status) {
                emoticon.setUp();
            }
            shortcut.setUp();
            NotificationDisabler.setUp();
            notify_all.setUp();

            view_enhancer.updateChatSendView();
            view_enhancer.updateGetContactPanelView();

            RoomView.prototype.buildOld = RoomView.prototype.build;
            RoomView.prototype.build = function (a) {
                this.buildOld(a);
                if (window.chatpp_id != RM.id) {
                    window.chatpp_id = RM.id;
                    setTimeout(function () {
                        emoticon.addExternalEmoList(false);
                        room_information.setUp();
                        mention.setUp();
                    }, 100);
                }
            };

            RL.rooms[RM.id].build();
        }
    }, 100);
});

function exposeModules() {
    /* eslint-disable no-console */
    /* for debugging new feature */
    if (window.esmodules.length < 10) {
        console.log("Exposing esmodules failed! Chat++ Emoticons will not work! Try to reload browser by Ctrl + Shift + R");
    }
    for (var i in window.esmodules) {
        var m = window.esmodules[i];
        if (m.a && m.a.langMap) {
            console.log("Find Language module");
            window.language_module = m;
            break;
        }
    }
    /* eslint-enable */
}

function addStyle() {
    $("<style type=\"text/css\"> .emoticonTextEnable{font-weight: bold;};</style>").appendTo("head");
    $("<style type=\"text/css\"> .chatppErrorsText{font-weight: bold; color: red;};</style>").appendTo("head");
    $("<style type=\"text/css\"> .chatInput__element{opacity: 0.8;display: inline-block;padding: 0 5px;cursor: pointer;};</style>").appendTo("head");
    $("<style type=\"text/css\"> .messageBadge{vertical-align: middle !important;};</style>").appendTo("head");
    $("<style type=\"text/css\"> .timelineLinkTrim{vertical-align: middle !important;};</style>").appendTo("head");
    $("<style type=\"text/css\"> img.ui_emoticon {vertical-align: middle !important;}</style>").appendTo("head");
    $("<style type=\"text/css\"> img.ui_emoticon:not([src^='https://assets.chatwork']) {width: auto !important;height: auto !important; vertical-align: middle;}</style>").appendTo("head");
    $("<style type=\"text/css\"> div[data-cwtag]:not([data-cwtag='']) {width: auto !important;height: auto !important; vertical-align: middle;}</style>").appendTo("head");
}

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Const = __webpack_require__(0);
var common = __webpack_require__(1);
var emoticon = __webpack_require__(6);

var DOM_VK_SPACE = 32,
    DOM_VK_0 = 48,
    DOM_VK_A = 65,
    DOM_VK_B = 66,
    DOM_VK_E = 69,
    DOM_VK_J = 74,
    DOM_VK_K = 75,
    DOM_VK_L = 76,
    DOM_VK_M = 77,
    DOM_VK_N = 78,
    DOM_VK_Q = 81,
    DOM_VK_R = 82,
    DOM_VK_S = 83,
    DOM_VK_T = 84,
    DOM_VK_V = 86,
    DOM_VK_X = 88,
    DOM_VK_Z = 90;

var Shortcut = function () {
    function Shortcut() {
        _classCallCheck(this, Shortcut);

        this.shortcuts_default = {
            reply: DOM_VK_R,
            quote: DOM_VK_Q,
            link: DOM_VK_L,
            edit: DOM_VK_E,
            task: DOM_VK_T,
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
        if (localStorage[Const.LOCAL_STORAGE_ROOM_SHORTCUT]) {
            this.room_shortcuts = JSON.parse(localStorage[Const.LOCAL_STORAGE_ROOM_SHORTCUT]);
        }
        this.status = common.getStatus("shortcut");
        this.actions = {
            quote: "quote",
            link: "link",
            edit: "edit",
            task: "task"
        };
    }

    _createClass(Shortcut, [{
        key: "setUp",
        value: function setUp() {
            if (this.status) {
                this.registerShortcut();
            }

            if (window.language_module) {
                for (i in this.actions) {
                    this.actions[i] = window.language_module.a.getLang("%%%chat_action_" + i + "%%%");
                }
            }
        }
    }, {
        key: "registerShortcut",
        value: function registerShortcut() {
            var _this = this;

            var shortcuts_default = this.shortcuts_default;
            CW.view.registerKeyboardShortcut(shortcuts_default.reply, !1, !1, !1, !1, function () {
                var message_id = _this.getHoverMessageId();
                _this.replyMessage(message_id);
            });

            CW.view.registerKeyboardShortcut(shortcuts_default.quote, !1, !1, !1, !1, function () {
                var message_id = _this.getHoverMessageId();
                _this.quoteMessage(message_id, false);
                // this.triggerDefaultAction("quote");
            });

            if (emoticon.status) {
                $("#_chatContent").on("click", "li.actionNav__item", function (e) {
                    var target = e.currentTarget;
                    e.preventDefault();
                    var label = $(target).find(".actionNav__itemLabel");
                    if (label && label.text() === _this.actions.quote) {
                        var message_id = _this.getHoverMessageId();
                        _this.quoteMessage(message_id, true);
                    }
                });
            }

            CW.view.registerKeyboardShortcut(shortcuts_default.link, !1, !1, !1, !1, function () {
                _this.triggerDefaultAction("link");
            });

            CW.view.registerKeyboardShortcut(shortcuts_default.edit, !1, !1, !1, !1, function () {
                _this.triggerDefaultAction("edit");
            });

            CW.view.registerKeyboardShortcut(shortcuts_default.task, !1, !1, !1, !1, function () {
                _this.triggerDefaultAction("task");
            });

            CW.view.registerKeyboardShortcut(shortcuts_default.my_chat, !1, !1, !1, !1, function () {
                RL.selectRoom(AC.getRoomId(AC.myid));
            });

            CW.view.registerKeyboardShortcut(shortcuts_default.scroll, !1, !1, !1, !1, function () {
                _this.goToBottom();
            });

            CW.view.registerKeyboardShortcut(shortcuts_default.previous_mention, !1, !1, !1, !1, function () {
                _this.goToPreviousMention();
            });

            CW.view.registerKeyboardShortcut(shortcuts_default.next_mention, !1, !1, !1, !1, function () {
                _this.goToNexMention();
            });

            CW.view.registerKeyboardShortcut(shortcuts_default.next_mention_room, !1, !1, !1, !1, function () {
                _this.nextUnreadRoom(true);
            });

            CW.view.registerKeyboardShortcut(shortcuts_default.next_new_message_room, !1, !1, !1, !1, function () {
                _this.nextUnreadRoom();
            });

            CW.view.registerKeyboardShortcut(shortcuts_default.up_room, !1, !1, !1, !1, function () {
                _this.nextRoom(true);
            });

            CW.view.registerKeyboardShortcut(shortcuts_default.down_room, !1, !1, !1, !1, function () {
                _this.nextRoom();
            });

            CW.view.registerKeyboardShortcut(shortcuts_default.first_room, !1, !1, !1, !1, function () {
                _this.firstRoom();
            });

            CW.view.registerKeyboardShortcut(shortcuts_default.first_nonstick_room, !1, !1, !1, !1, function () {
                _this.firstRoom(true);
            });

            CW.view.registerKeyboardShortcut(shortcuts_default.focus_chatbox, !1, !1, !1, !1, function () {
                $("#_chatText").focus();
            });

            CW.view.registerKeyboardShortcut(shortcuts_default.edit_image_upload, !1, !0, !1, !1, function () {
                _this.triggerDefaultAction("edit");
                var chat_text = $("#_chatText");
                var text = chat_text.val();
                var img = text.match(/(\[preview id=[0-9]* ht=[0-9]*\])/);
                if (img && img[0]) {
                    text = text.replace(/\[info\].*\[\/info\]/, img[0]);
                    chat_text.val(text);
                }
            });

            for (var _i in this.room_shortcuts) {
                if (this.room_shortcuts[_i] && this.room_shortcuts.hasOwnProperty(_i)) {
                    (function () {
                        var room = _this.room_shortcuts[_i];
                        CW.view.registerKeyboardShortcut(DOM_VK_0 + parseInt(_i), !1, !1, !1, !1, function () {
                            RL.selectRoom(room);
                        });
                    })();
                }
            }
        }
    }, {
        key: "isScrollable",
        value: function isScrollable() {
            return this.get(0).scrollHeight > this.height();
        }
    }, {
        key: "triggerDefaultAction",
        value: function triggerDefaultAction(action) {
            var _this2 = this;

            $("._message:hover .actionNav__item").each(function (index, element) {
                var label = $(element).find(".actionNav__itemLabel");
                if (label) {
                    if (label.text() === _this2.actions[action]) {
                        $(element).trigger("click");
                    }
                }
            });
        }
    }, {
        key: "triggerMoreAction",
        value: function triggerMoreAction() {
            var more_action = $("._message:hover").find("._cwABMoreTip");
            if (this.isDomExists(more_action)) {
                more_action.trigger("click");
                var delete_button = $("._cwABMoreListBox").find("[data-cwui-ab-type=\"action\"]");
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
        key: "getPivotMessage",
        value: function getPivotMessage() {
            return this.getHoverMessageId() || $("#_timeLine ._messageSelected").data("mid");
        }
    }, {
        key: "getMessagePosition",
        value: function getMessagePosition(id) {
            var messages = RM.timeline.chat_list;
            for (var _i2 = messages.length - 1; _i2 >= 0; _i2--) {
                if (messages[_i2].id == id) {
                    return _i2;
                }
            }

            return -1;
        }
    }, {
        key: "goToBottom",
        value: function goToBottom() {
            this.goToMessageInRoom(RM.timeline.getLastChatId());
        }
    }, {
        key: "goToPreviousMention",
        value: function goToPreviousMention() {
            var current = this.getPivotMessage();
            var position = this.getMessagePosition(current);
            var messages = RM.timeline.chat_list;
            for (var _i3 = position - 1; _i3 >= 0; _i3--) {
                if (this.isMentionMessage(messages[_i3])) {
                    this.goToMessageInRoom(messages[_i3].id);
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
        value: function goToNexMention() {
            var current = this.getPivotMessage();
            var position = this.getMessagePosition(current);
            var messages = RM.timeline.chat_list;
            for (var _i4 = position + 1; _i4 > 0 && _i4 < messages.length; _i4++) {
                if (this.isMentionMessage(messages[_i4])) {
                    this.goToMessageInRoom(messages[_i4].id);
                    return true;
                }
            }

            return false;
        }
    }, {
        key: "goToMessageInRoom",
        value: function goToMessageInRoom(message_id) {
            RL.selectRoom(RM.id, message_id, {
                smoothScroll: true
            });
        }
    }, {
        key: "isMentionMessage",
        value: function isMentionMessage(message) {
            var regex_reply = new RegExp("\\[.* aid=" + AC.myid + " .*\\]");
            var regex_to = new RegExp("\\[To:" + AC.myid + "\\]");
            var regex_to_all = new RegExp("\\[toall\\]");

            return [regex_reply, regex_to, regex_to_all].some(function (r) {
                return r.test(message.msg);
            });
        }
    }, {
        key: "replyMessage",
        value: function replyMessage(message) {
            var data = RM.timeline.chat_id2chat_dat[message];
            if (data) {
                $("#_chatText").focus();
                var name = ST.data.private_nickname && !RM.isInternal() ? AC.getDefaultNickName(data.aid) : AC.getNickName(data.aid);
                /* eslint-disable no-useless-concat */
                CS.view.setChatText("[" + L.chatsend_reply + " aid=" + data.aid + " to=" + RM.id + "-" + message + "] " + name + "\n", !0);
                /* eslint-enable */
            }
        }
    }, {
        key: "quoteMessage",
        value: function quoteMessage(message, skipable) {
            var data = RM.timeline.chat_id2chat_dat[message];
            if (data) {
                // Apply Chatpp's own inserting logic when quoting a message which has Chatpp's emoticons
                if (skipable && $("#_messageId" + message).find('img.ui_emoticon[data-cwtag^="chatpp-"]').length == 0) {
                    return;
                }
                $("#_chatText").focus();
                /* eslint-disable no-useless-concat */
                CS.view.setChatText("[" + L.chatsend_quote + " aid=" + data.aid + " time=" + data.tm + "]" + data.msg + "[/" + L.chatsend_quote + "]" + "\n", !0);
                /* eslint-enable */
            }
        }
    }, {
        key: "nextUnreadRoom",
        value: function nextUnreadRoom(check_mention) {
            var current_room = RM.id;
            var sortedRooms = RL.getSortedRoomList();
            var rooms = RL.rooms;
            for (var _i5 = 0; _i5 < sortedRooms.length; _i5++) {
                if (sortedRooms[_i5] && sortedRooms[_i5] !== current_room) {
                    var room = rooms[sortedRooms[_i5]];
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
            var previous = void 0;
            var current_room = RM.id;
            var sortedRooms = RL.getSortedRoomList();
            for (var _i6 = 0; _i6 < sortedRooms.length; _i6++) {
                if (sortedRooms[_i6] === current_room) {
                    if (back) {
                        if (previous) {
                            return RL.selectRoom(previous);
                        }
                    } else {
                        if (sortedRooms[_i6 + 1]) {
                            return RL.selectRoom(sortedRooms[_i6 + 1]);
                        }
                    }
                }
                previous = sortedRooms[_i6];
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

var shortcut = new Shortcut();
module.exports = shortcut;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var chatwork = __webpack_require__(5);
var Const = __webpack_require__(0);

var ViewEnhancer = function () {
    function ViewEnhancer() {
        _classCallCheck(this, ViewEnhancer);

        this.to_all_status = true;
    }

    _createClass(ViewEnhancer, [{
        key: "isActive",
        value: function isActive() {
            return this.to_all_status;
        }
    }, {
        key: "updateGetContactPanelView",
        value: function updateGetContactPanelView() {
            AC.view.getContactPanelOld = AC.view.getContactPanel;
            AC.view.getContactPanel = function (b, d) {
                var panel = AC.view.getContactPanelOld(b, d);
                if (b == chatwork.myId()) {
                    return panel;
                }
                var temp = $("<div></div>");
                var label = LANGUAGE == "ja" ? "同じグループチャットを探す" : "Search for the same Group Chat";
                $(temp).html(panel);
                $(".contactPanel__footerButtonContainer", temp).first().append("<div class=\"button searchSameRooms _showDescription\" aria-label=\"" + label + "\" style=\"margin: 0 10px\" data-uid=\"" + b + "\"><span class=\"icoFontAdminInfoMenu icoSizeLarge\"></span></div>");
                return $(temp).html();
            };
            $(document).on("click", ".searchSameRooms", function (e) {
                var uid = $(e.currentTarget).data("uid");
                var username = chatwork.getUserName(uid);
                var same_rooms = chatwork.searchRoomsByPerson(uid);
                var result = "";
                same_rooms.forEach(function (room) {
                    result += "<a href=\"https://www.chatwork.com/#!rid" + room.id + "\"><div class=\"searchResultTitle _messageSearchChatGroup sameRoomInfo\" data-rid=\"" + room.id + "\"><div>" + room.getIcon() + " " + room.getName() + "</div></div></a>";
                });
                var delete_button = "";
                if (result) {
                    delete_button = '<div class="">' + ("Remove <strong>" + username + "</strong> from the Rooms where you are an Administrator!<br>Please be careful!<br>") + ("<div id=\"_removeSameRoomsBtn\" role=\"button\" tabindex=\"2\" class=\"button btnDanger _cwBN\" data-uid=\"" + uid + "\">Delete</div>") + "</div>";
                }
                result = '<div class="searchResultListBox">' + ("<div class=\"searchResultTitle _messageSearchChatGroup\"><strong><span id=\"_sameRoomsNumber\">" + same_rooms.length + "</span> room(s) found!</strong></div>") + ("" + result + delete_button) + "</div>";
                CW.view.alert(result, null, true);
            });
            $(document).on("click", "#_removeSameRoomsBtn", function (e) {
                var uid = $(e.currentTarget).data("uid");
                var username = chatwork.getUserName(uid);
                CW.confirm("Are you sure to delete " + username + " from the rooms that you are an Administrator?", function () {
                    var same_rooms = chatwork.searchRoomsByPerson(uid);
                    var result = "";
                    same_rooms.forEach(function (room) {
                        if (chatwork.removeMemberFromRoom(uid, room.id)) {
                            $(".sameRoomInfo[data-rid=\"" + room.id + "\"]").hide();
                            var sameRoomNumberElement = $("#_sameRoomsNumber");
                            sameRoomNumberElement.html(sameRoomNumberElement.html() - 1);
                            result += "<a href=\"https://www.chatwork.com/#!rid" + room.id + "\"><div class=\"searchResultTitle _messageSearchChatGroup sameRoomInfo\" data-rid=\"" + room.id + "\"><div>" + room.getIcon() + " " + room.getName() + "</div></div></a>";
                        }
                    });
                    if (result) {
                        result = '<div class="searchResultListBox">' + ("<div class=\"searchResultTitle _messageSearchChatGroup\"><strong>" + username + "</strong> has been removed from the following room(s)!</div>") + ("" + result) + "</div>";
                        CW.view.alert(result, null, true);
                    }
                });
            });
        }
    }, {
        key: "updateChatSendView",
        value: function updateChatSendView() {
            CS.view.chatTextKeyUpOld = CS.view.chatTextKeyUp;
            CS.view.chatTextKeyUp = function (b) {
                var up_key = b.keyCode;
                var d = $("#_chatText");
                (function () {
                    /* eslint-disable no-undef */
                    if (!(up_key !== 13 || press_key !== 13)) {
                        /* eslint-enable */
                        var a = d.val(),
                            _b = d.prop("selectionStart"),
                            e = d.prop("selectionEnd");
                        _b === e && (e = a.substr(0, _b), e = $.support.isWindowsFirefox ? e.replace(/(^|\n)``` *\r?\n([\s\S]+?)\r?\n```$/, "$1[code]\n$2\n[/code]") : e.replace(/(^|\n)``` *\r?\n([\s\S]+?)\r?\n```\n$/, "$1[code]\n$2\n[/code]\n"), e = $.support.isWindowsFirefox ? e.replace(/(^|\n)``t *\r?\n([\s\S]+?)\r?\n```$/, "$1[title]$2[/title]") : e.replace(/(^|\n)``t *\r?\n([\s\S]+?)\r?\n```\n$/, "$1[title]$2[/title]"), e = $.support.isWindowsFirefox ? e.replace(/(^|\n)``i *\r?\n([\s\S]+?)\r?\n```$/, "$1[info]$2[/info]") : e.replace(/(^|\n)``i *\r?\n([\s\S]+?)\r?\n```\n$/, "$1[info]$2[/info]\n"), a = a.substr(_b), d.val(e + a), d.prop("selectionStart", e.length), d.prop("selectionEnd", e.length));
                    }
                })();
                return CS.view.chatTextKeyUpOld(b);
            };
        }
    }]);

    return ViewEnhancer;
}();

var view_enhancer = new ViewEnhancer();
module.exports = view_enhancer;

/***/ }),
/* 24 */
/***/ (function(module, exports) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NotificationDisabler = function () {
    function NotificationDisabler() {
        _classCallCheck(this, NotificationDisabler);
    }

    _createClass(NotificationDisabler, null, [{
        key: "setUp",
        value: function setUp() {
            var disabledNotifyRooms = null;

            if (localStorage["CHATPP_DISABLE_NOTIFY_ROOM"] !== "" && localStorage["CHATPP_DISABLE_NOTIFY_ROOM"] !== "undefined" && localStorage["CHATPP_DISABLE_NOTIFY_ROOM"]) {
                disabledNotifyRooms = JSON.parse(localStorage["CHATPP_DISABLE_NOTIFY_ROOM"]);
            }

            if (disabledNotifyRooms) {
                CW.popupOld = CW.popup;
                /* eslint-disable no-unused-vars */
                var b = null,
                    d = null,
                    e = window.navigator.userAgent.toLowerCase().indexOf("chrome") != -1;
                /* eslint-enable */
                CW.popup = function wrapper(icon, title, body, room_id) {
                    if (disabledNotifyRooms.indexOf(room_id.toString()) == -1) {
                        CW.popupOld(icon, title, body, room_id);
                    }
                };
            }
        }
    }]);

    return NotificationDisabler;
}();

module.exports = NotificationDisabler;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Const = __webpack_require__(0);

var NotifyAll = function () {
    function NotifyAll() {
        _classCallCheck(this, NotifyAll);
    }

    _createClass(NotifyAll, [{
        key: "setUp",
        value: function setUp() {
            this.registerRegex();
        }
    }, {
        key: "registerRegex",
        value: function registerRegex() {
            CW.reg_cmp.push({
                key: /TO ALL &gt;&gt;&gt;/g,
                rep: "<span class=\"chatTimeLineTo\">TO ALL</span>",
                reptxt: "TO ALL",
                special: true
            });

            window.FindReact = function (dom) {
                var key = Object.keys(dom).find(function (key) {
                    return key.startsWith("__reactInternalInstance$");
                });
                var internalInstance = dom[key];
                if (internalInstance == null) return null;

                if (internalInstance.return) {
                    // react 16+
                    return internalInstance._debugOwner ? internalInstance._debugOwner.stateNode : internalInstance.return.stateNode;
                } else {
                    // react <16
                    return internalInstance._currentElement._owner._instance;
                }
            };

            var dom = document.getElementsByClassName("_message messageHasBorder");
            if (!dom.length) {
                return;
            }
            var node = window.FindReact(dom[dom.length - 1]);
            if (!node) {
                return;
            }
            node.__proto__.renderOld = node.__proto__.render;
            node.__proto__.render = function () {
                if (this.props.message.body.indexOf(Const.TO_ALL_MARK) === 0) {
                    this.props.message.mentioned = true;
                }

                return this.renderOld();
            };
        }
    }]);

    return NotifyAll;
}();

var notify_all = new NotifyAll();
module.exports = notify_all;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var common = __webpack_require__(1);
var Const = __webpack_require__(0);
var chatwork = __webpack_require__(5);

var DISPLAY_NUMS = 3;
var MAX_PATTERN_LENGTH = 20;
var SPECIAL_CHARS = ["\n", "!", "$", "%", "^", "&", "*", "(", ")", "-", "+", "=", "[", "]", "{", "}", ";", ":", ",", "/", "`", "'", "\""];
var INSERT_MODE_SYM = {
    "PICON": "._",
    "NAME": ".",
    "TO": "_",
    "CC": "_cc_"
};

var Mention = function () {
    function Mention() {
        var _this = this;

        _classCallCheck(this, Mention);

        this.status = common.getStatus("mention");
        this.start = /@/ig;
        this.is_colon = false;
        this.is_displayed = false;
        this.is_inserted = false;
        this.is_navigated = false;
        this.is_outbound_of_list = false;
        this.actived_atmark_index = 0;
        this.current_index = 0;
        this.selected_index = 0;
        this.current_RM = null;
        this.member_objects = [];
        this.insert_mode = "normal"; // normal, to, picon, name, cc
        this.insert_type = "one"; // one, me, all, contact, group
        this.selected_group_name = "";
        this.fuse = null;
        this.cached_enter_action = ST.data.enter_action;
        this.options = {
            keys: ["aid2name"],
            maxPatternLength: MAX_PATTERN_LENGTH
        };
        this.suggestion_messages = {
            one: {
                ja: "\u691C\u7D22\u7D50\u679C\u306F\u3042\u308A\u307E\u305B\u3093",
                en: "No Matching Results"
            },
            all: {
                ja: "\u3059\u3079\u3066\u3092\u9078\u629E\u3057\u307E\u3059",
                en: "Select All Members"
            },
            group: {
                ja: "\u7A7A\u306E\u30B0\u30EB\u30FC\u30D7",
                en: "Empty Group"
            }
        };
        this.random_user_messages = {
            ja: "\u30E1\u30F3\u30D0\u30FC\u3092\u30E9\u30F3\u30C0\u30E0\u3059\u308B",
            en: "Random a member"
        };
        this.no_admin_messages = {
            ja: "\u30A2\u30C9\u30DF\u30F3\u304C\u5B58\u5728\u3057\u307E\u305B\u3093",
            en: "There is no Admin in this Room"
        };

        this.group_mention = [];
        if (localStorage[Const.LOCAL_STORAGE_GROUP_MENTION]) {
            this.group_mention = JSON.parse(localStorage[Const.LOCAL_STORAGE_GROUP_MENTION]);
        }
        this.group_mention.push({
            "group_name": "random",
            "group_members": ""
        });
        this.group_mention.push({
            "group_name": "admin",
            "group_members": chatwork.getRoomAdmins().join(",")
        });

        // http://stackoverflow.com/questions/610406/javascript-equivalent-to-printf-string-format
        // First, checks if it isn't implemented yet.
        if (!String.prototype.format) {
            String.prototype.format = function () {
                var args = arguments;
                return this.replace(/{(\d+)}/g, function (match, number) {
                    return typeof args[number] != "undefined" ? args[number] : match;
                });
            };
        }

        $("#_roomListArea").click(function () {
            return _this.hideSuggestionBox();
        });

        $("#_headerSearch").click(function () {
            return _this.hideSuggestionBox();
        });

        // when user press ESC, we hide suggestion box
        $(document).keyup(function (e) {
            if (!_this.status) {
                return;
            }
            if (e.which == 27) {
                _this.hideSuggestionBox();
            }
        });
    }

    _createClass(Mention, [{
        key: "setUp",
        value: function setUp() {
            var _this2 = this;

            if (!this.status || this.isTagAdded()) {
                return;
            }
            this.chat_text_jquery = $("#_chatText");
            this.chat_text_element = document.getElementById("_chatText");

            var chat_input = $("#_chatText").parent();
            $("<div id='suggestion-container' class='toSelectorTooltip tooltipListWidth tooltip tooltip--white' role='tooltip'></div>").insertAfter(chat_input);
            this.hideSuggestionBox();
            $("#_sendEnterActionArea").click(function () {
                _this2.cached_enter_action = ST.data.enter_action;
            });

            // hide suggestion box when click in textarea or outside
            this.chat_text_jquery.click(function () {
                return _this2.hideSuggestionBox();
            });

            this.chat_text_jquery.keydown(function (e) {
                if (!_this2.status) {
                    return;
                }
                if ((e.which == 38 || e.which == 40 || e.which == 9 || e.which == 13) && _this2.is_displayed) {
                    _this2.is_navigated = true;
                    _this2.holdCaretPosition(e);
                } else {
                    _this2.current_index = 0;
                    _this2.is_navigated = false;
                }

                if (_this2.getNearestColonIndex()) {
                    _this2.is_colon = true;
                } else {
                    _this2.is_colon = false;
                }
                if (e.which == 9 || e.which == 13) {
                    if ((_this2.insert_type == "all" || _this2.insert_type == "group") && _this2.is_displayed) {
                        _this2.setSuggestedChatText(_this2.getTypedText(), null, null);
                        // dirty hack to prevent message to be sent
                        if (_this2.cached_enter_action == "send") {
                            ST.data.enter_action = "br";
                        }
                        e.preventDefault();
                    } else {
                        if ($(".suggested-name").first().length) {
                            if (_this2.is_navigated) {
                                $(".suggested-name").eq(_this2.selected_index).click();
                            } else {
                                $(".suggested-name").first().click();
                            }
                            // dirty hack to prevent message to be sent
                            if (_this2.cached_enter_action == "send") {
                                ST.data.enter_action = "br";
                            }
                            e.preventDefault();
                        } else {
                            // there's no thing after @ symbol
                            _this2.hideSuggestionBox();
                        }
                    }
                }
            });

            this.chat_text_jquery.keyup(function (e) {
                if (!_this2.status) {
                    return;
                }

                if (e.which == 9 || e.which == 13) {
                    return;
                }
                if ((e.which == 38 || e.which == 40) && _this2.is_displayed) {
                    _this2.is_navigated = true;
                    _this2.holdCaretPosition(e);
                } else {
                    _this2.is_navigated = false;
                }

                if (_this2.current_RM != RM.id) {
                    _this2.member_objects = _this2.buildMemberListData(false);
                    _this2.updateAdminGroupData();
                    _this2.fuse = new Fuse(_this2.member_objects, _this2.options);
                    _this2.current_RM = RM.id;
                }
                if (_this2.findAtmark()) {
                    if (_this2.is_displayed && _this2.getNearestAtmarkIndex() != -1 && _this2.getNearestAtmarkIndex() != _this2.actived_atmark_index) {
                        _this2.hideSuggestionBox();
                    }

                    if (!_this2.is_displayed) {
                        if (!_this2.isTriggerKeyCode(e.which)) {
                            return;
                        }
                        if (_this2.getNearestAtmarkIndex() != -1) {
                            _this2.actived_atmark_index = _this2.getNearestAtmarkIndex();
                        }
                        _this2.setSuggestionBoxPosition();
                        _this2.showSuggestionBox(_this2.buildList(_this2.filterDisplayResults(_this2.member_objects)));
                        _this2.is_displayed = true;
                    }

                    var typed_text = _this2.getTypedText();
                    if (typed_text.length) {
                        if (typed_text.charAt(1) == "#") {
                            if (_this2.insert_type != "contact") {
                                _this2.member_objects = _this2.buildMemberListData(true);
                                _this2.fuse = new Fuse(_this2.member_objects, _this2.options);
                                _this2.insert_type = "contact";
                            }
                            typed_text = typed_text.substring(1);
                        }
                        var raw_results = _this2.getRawResultsAndSetMode(typed_text.substring(1));

                        if (e.which == 38) {
                            _this2.current_index -= 1;
                        }
                        if (e.which == 40) {
                            _this2.current_index += 1;
                        }
                        var filtered_results = _this2.filterDisplayResults(raw_results);

                        if (e.which == 38 && _this2.is_outbound_of_list) {
                            _this2.selected_index -= 1;
                            if (_this2.selected_index < 0) {
                                _this2.selected_index = 0;
                            }
                        }
                        if (e.which == 40 && _this2.current_index > raw_results.length - filtered_results.length) {
                            _this2.selected_index += 1;
                            if (_this2.selected_index >= Math.min(DISPLAY_NUMS, filtered_results.length)) {
                                _this2.selected_index = Math.min(DISPLAY_NUMS, filtered_results.length) - 1;
                            }
                        }

                        _this2.showSuggestionBox(_this2.buildList(filtered_results));
                    }

                    if (e.which == 27) {
                        // when user press ESC, we hide suggestion box
                        _this2.hideSuggestionBox();
                        _this2.holdCaretPosition(e);
                    }
                } else {
                    _this2.hideSuggestionBox();
                }

                return true;
            });
            this.addTagButton();
            this.ccMention();
        }
    }, {
        key: "getNearestAtmarkIndex",
        value: function getNearestAtmarkIndex() {
            var content = this.chat_text_jquery.val();
            var atmarks = content.match(this.start);

            if (!atmarks) {
                return -1;
            }

            var caret_index = this.doGetCaretPosition(this.chat_text_element);
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
    }, {
        key: "getNearestColonIndex",
        value: function getNearestColonIndex() {
            var content = this.chat_text_jquery.val();
            var atmarks = content.match(this.start);

            if (!atmarks) {
                return -1;
            }

            var caret_index = this.doGetCaretPosition(this.chat_text_element);
            var atmark_index = content.indexOf("::");
            var pre_atmark_index = -1;
            do {
                if (atmark_index >= caret_index) {
                    break;
                }
                pre_atmark_index = atmark_index;
                atmark_index = content.indexOf("::", atmark_index + 1);
            } while (atmark_index != -1);

            return pre_atmark_index;
        }
    }, {
        key: "findAtmark",
        value: function findAtmark() {
            var content = this.chat_text_jquery.val();
            // we only interested in @ symbol that: at the start of line or has a space before it
            var atmark_index = this.getNearestAtmarkIndex();
            if (atmark_index != 0 && content.charAt(atmark_index - 1) != " " && content.charAt(atmark_index - 1) != "\n") {
                return false;
            }

            if (this.getTypedText().length >= MAX_PATTERN_LENGTH || this.getTypedText().length == 0) {
                return false;
            }
            if (atmark_index != -1) {
                var spaces = this.getTypedText().match(/ /ig);
                // text from last @ to current caret position have more than 2 spaces
                if (spaces && spaces.length > 2) {
                    return false;
                }

                // text contains special characters ?
                for (var i = 0; i < SPECIAL_CHARS.length; i++) {
                    if (this.getTypedText().indexOf(SPECIAL_CHARS[i]) != -1) {
                        return false;
                    }
                }

                return true;
            } else {
                // There is no @ symbol
                return false;
            }
        }
    }, {
        key: "getTypedText",
        value: function getTypedText() {
            var content = this.chat_text_jquery.val();
            var start_pos = this.getNearestAtmarkIndex();
            if (start_pos == -1) return "";
            var end_pos = this.doGetCaretPosition(this.chat_text_element);
            var txt = content.substr(start_pos, end_pos - start_pos);
            if (txt) {
                return txt;
            } else {
                return "";
            }
        }
    }, {
        key: "setSuggestionBoxPosition",
        value: function setSuggestionBoxPosition() {
            var rect = this.chat_text_element.getBoundingClientRect();
            var current_pos = this.doGetCaretPosition(this.chat_text_element);
            this.setCaretPosition(this.chat_text_element, this.actived_atmark_index + 1);
            var position = Measurement.caretPos(this.chat_text_jquery);
            position.top -= rect.top;
            position.left -= rect.left;

            if (rect.width - position.left < 236) {
                position.left -= 236;
            }
            if (rect.height - position.top < 90) {
                if (position.top < 108) {
                    $("#_chatTextArea").css({
                        "overflow-y": "visible",
                        "z-index": 2
                    });
                }
                position.top -= 118;
            } else {
                position.top += parseInt(this.chat_text_jquery.css("font-size")) + 5;
            }
            $("#suggestion-container").parent().css({
                position: "relative"
            });

            $("#suggestion-container").css({
                top: position.top,
                left: position.left,
                position: "absolute"
            });
            this.setCaretPosition(this.chat_text_element, current_pos);
        }
    }, {
        key: "showSuggestionBox",
        value: function showSuggestionBox(content) {
            var _this3 = this;

            this.is_inserted = false;
            $("#suggestion-container").html(content).show();
            $("#suggestion-container").css("visibility", "visible");
            if (this.is_navigated) {
                $(".suggested-name").eq(this.selected_index).css("background-color", "#D8F0F9");
            } else {
                $(".suggested-name").first().css("background-color", "#D8F0F9");
            }

            $(".suggested-name").click(function (e) {
                if (_this3.is_inserted) {
                    return;
                }
                _this3.is_inserted = true;
                var target = $(e.currentTarget);
                target.css("background-color", "#D8F0F9");
                _this3.setSuggestedChatText(_this3.getTypedText(), target.text(), target.data("cwui-lt-value"));
            });

            $(".suggested-name").mouseover(function (e) {
                $(e.currentTarget).css("background-color", "white");
                $("#suggestion-container>ul li:first-child").css("background-color", "#D8F0F9");
            });
        }
    }, {
        key: "hideSuggestionBox",
        value: function hideSuggestionBox(content) {
            $("#suggestion-container").html(content).hide();
            $("#suggestion-container").css("visibility", "hidden");
            this.cleanUp();
        }
    }, {
        key: "cleanUp",
        value: function cleanUp() {
            this.is_displayed = false;
            this.is_navigated = false;
            this.current_index = 0;
            this.selected_index = 0;
            this.actived_atmark_index = -1;
            this.insert_mode = "normal";
            if (this.insert_type == "contact") {
                this.member_objects = this.buildMemberListData(false);
                this.fuse = new Fuse(this.member_objects, this.options);
            }
            if (this.insert_type == "group") {
                this.selected_group_name = "";
            }
            this.insert_type = "one";
            $("#suggestion-container").html("");
            if (!this.is_colon) {
                $("#_chatTextArea").css({
                    "overflow-y": "scroll",
                    "z-index": 0
                });
            }
            // restore setting to correct value
            if (this.cached_enter_action != ST.data.enter_action && this.cached_enter_action == "send") {
                ST.data.enter_action = this.cached_enter_action;
            }
        }

        // http://blog.vishalon.net/index.php/javascript-getting-and-setting-caret-position-in-textarea/

    }, {
        key: "doGetCaretPosition",
        value: function doGetCaretPosition(ctrl) {
            var CaretPos = 0; // IE Support
            if (document.selection) {
                ctrl.focus();
                var Sel = document.selection.createRange();
                Sel.moveStart("character", -ctrl.value.length);
                CaretPos = Sel.text.length;
            }
            // Firefox support
            else if (ctrl.selectionStart || ctrl.selectionStart == "0") CaretPos = ctrl.selectionStart;
            return CaretPos;
        }
    }, {
        key: "setCaretPosition",
        value: function setCaretPosition(ctrl, pos) {
            if (ctrl.setSelectionRange) {
                ctrl.focus();
                ctrl.setSelectionRange(pos, pos);
            } else if (ctrl.createTextRange) {
                var range = ctrl.createTextRange();
                range.collapse(true);
                range.moveEnd("character", pos);
                range.moveStart("character", pos);
                range.select();
            }
        }

        // http://codegolf.stackexchange.com/a/17129

    }, {
        key: "merge",
        value: function merge() {
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
    }, {
        key: "filterDisplayResults",
        value: function filterDisplayResults(results) {
            this.is_outbound_of_list = false;
            if (!this.is_navigated) return results.slice(0, DISPLAY_NUMS);
            if (this.current_index < 0) this.current_index = 0;
            if (this.current_index >= results.length) this.current_index = results.length - 1;

            if (results.length <= DISPLAY_NUMS) {
                this.is_outbound_of_list = true;
                return results;
            }
            if (this.current_index >= results.length - DISPLAY_NUMS) {
                this.is_outbound_of_list = true;
                return results.slice(DISPLAY_NUMS * -1);
            } else {
                return results.slice(this.current_index, this.current_index + DISPLAY_NUMS);
            }
        }
    }, {
        key: "getRawResultsAndSetType",
        value: function getRawResultsAndSetType(typed_text) {
            if (this.insert_type != "contact") {
                for (var i = 0; i < this.group_mention.length; i++) {
                    if (typed_text == this.group_mention[i]["group_name"]) {
                        this.insert_type = "group";
                        this.selected_group_name = this.group_mention[i]["group_name"];
                        return [];
                    }
                }
                if (typed_text == "me") {
                    this.insert_type = "me";
                    return [this.getMemberObject(AC.myid)];
                }
                if (typed_text == "all") {
                    this.insert_type = "all";
                    return [];
                }
                if (typed_text == "toall") {
                    this.insert_type = "toall";
                    return [];
                }
                this.insert_type = "one";
            }
            return typed_text ? this.fuse.search(typed_text) : this.member_objects;
        }
    }, {
        key: "getRawResultsAndSetMode",
        value: function getRawResultsAndSetMode(typed_text) {
            if (typed_text.slice(0, 2) == INSERT_MODE_SYM.PICON) {
                this.insert_mode = "picon";
                return this.getRawResultsAndSetType(typed_text.substring(2));
            }
            if (typed_text.slice(0, 1) == INSERT_MODE_SYM.NAME) {
                this.insert_mode = "name";
                return this.getRawResultsAndSetType(typed_text.substring(1));
            }
            if (typed_text.slice(0, 4) == INSERT_MODE_SYM.CC) {
                this.insert_mode = "CC";
                return this.getRawResultsAndSetType(typed_text.substring(4));
            }
            if (typed_text.slice(0, 1) == INSERT_MODE_SYM.TO) {
                this.insert_mode = "to";
                return this.getRawResultsAndSetType(typed_text.substring(1));
            }
            this.insert_mode = "normal";
            return this.getRawResultsAndSetType(typed_text);
        }
    }, {
        key: "isTriggerKeyCode",
        value: function isTriggerKeyCode(keyCode) {
            return [37, 38, 39, 40].indexOf(keyCode) == -1;
        }
    }, {
        key: "holdCaretPosition",
        value: function holdCaretPosition(event_object) {
            event_object.preventDefault();
            this.chat_text_jquery.focus();
            var current_pos = this.doGetCaretPosition(this.chat_text_element);
            this.setCaretPosition(this.chat_text_element, current_pos);
        }
    }, {
        key: "getReplaceText",
        value: function getReplaceText(format_string, target_name, cwid, members) {
            if (!members) {
                return null;
            }
            var replace_text = "";
            switch (this.insert_type) {
                case "me":
                case "one":
                case "contact":
                    replace_text = format_string.format(cwid, target_name);
                    break;
                case "group":
                case "all":
                    for (var i = 0; i < members.length; i++) {
                        replace_text += format_string.format(members[i].value, members[i].aid2name);
                    }
                    break;
                case "toall":
                    if (this.insert_mode === "to") {
                        replace_text = "TO ALL >>> \n";
                    } else {
                        replace_text = "[toall]\n";
                    }
                    break;
                default:
                    break;
            }
            return replace_text;
        }
    }, {
        key: "setSuggestedChatText",
        value: function setSuggestedChatText(entered_text, target_name, cwid) {
            var old = this.chat_text_jquery.val();
            var start_pos = this.doGetCaretPosition(this.chat_text_element) - entered_text.length;
            var replace_text = "";
            var members = this.member_objects;
            if (this.insert_type == "group") {
                members = this.buildGroupMemberListData(this.selected_group_name);
            }
            switch (this.insert_mode) {
                case "to":
                    replace_text = this.getReplaceText("[To:{0}] ", target_name, cwid, members);
                    break;
                case "normal":
                    replace_text = this.getReplaceText("[To:{0}] {1}\n", target_name, cwid, members);
                    break;
                case "picon":
                    replace_text = this.getReplaceText("[picon:{0}] ", target_name, cwid, members);
                    break;
                case "name":
                    replace_text = this.getReplaceText("[picon:{0}] {1}\n", target_name, cwid, members);
                    break;
                case "CC":
                    replace_text = this.getReplaceText("[CC][To:{0}] {1}\n", target_name, cwid, members);
                    break;
                default:
                    break;
            }
            var content = old.substring(0, start_pos) + replace_text + old.substring(start_pos + entered_text.length);
            this.chat_text_jquery.val(content);
            this.setCaretPosition(this.chat_text_element, start_pos + replace_text.length);
            this.hideSuggestionBox();
        }
    }, {
        key: "setSuggestedChatTag",
        value: function setSuggestedChatTag(type) {
            var old = this.chat_text_jquery.val();
            var start_pos = this.chat_text_jquery[0].selectionStart;
            var end_pos = this.chat_text_jquery[0].selectionEnd;
            var selectedString = old.substring(start_pos, end_pos);
            var tag = "[" + type + "]" + selectedString + "[/" + type + "]";
            var content = old.substring(0, start_pos) + tag + old.substring(end_pos, old.length);
            this.chat_text_jquery.val(content);
            this.setCaretPosition(this.chat_text_element, start_pos + 2 + type.length + selectedString.length);
            this.hideSuggestionBox();
        }
    }, {
        key: "buildList",
        value: function buildList(members) {
            switch (this.insert_type) {
                case "me":
                case "one":
                case "contact":
                    if (members.length) {
                        var txt = "<ul>";
                        for (var i = 0; i < members.length; i++) {
                            txt += "<li class=\"suggested-name tooltipList__item\" role=\"listitem\" data-cwui-lt-value=\"" + members[i].value + "\">" + (members[i].avatar + members[i].label) + "</li>";
                        }
                        txt += "</ul>";
                        return txt;
                    } else {
                        return "<ul><li class=\"suggested-name tooltipList__item\" role=\"listitem\">" + this.suggestion_messages["one"][LANGUAGE] + "</li></ul>";
                    }
                    /* eslint-disable no-unreachable */
                    break;
                /* eslint-enable */
                case "group":
                    if (this.selected_group_name === "random") {
                        return "<ul><li class=\"suggested-name tooltipList__item\" role=\"listitem\">" + this.random_user_messages[LANGUAGE] + "</li></ul>";
                    }
                    members = this.buildGroupMemberListData(this.selected_group_name);
                    if (members.length) {
                        var _txt = "<ul><li class='suggested-name tooltipList__item' role='listitem'>";
                        for (var _i = 0; _i < members.length; _i++) {
                            if (_i == 6) {
                                _txt += "<span>+" + (members.length - 6) + "</span>";
                                break;
                            }
                            _txt += members[_i].avatar;
                        }
                        _txt += "</li></ul>";
                        return _txt;
                    } else {
                        var message = null;
                        if (this.selected_group_name === "admin") {
                            message = this.no_admin_messages[LANGUAGE];
                        } else {
                            message = this.suggestion_messages[this.insert_type][LANGUAGE];
                        }
                        return "<ul><li class=\"suggested-name tooltipList__item\" role=\"listitem\">" + message + "</li></ul>";
                    }
                    /* eslint-disable no-unreachable */
                    break;
                /* eslint-enable */
                case "all":
                    return "<ul><li class=\"suggested-name tooltipList__item\" role=\"listitem\">" + this.suggestion_messages[this.insert_type][LANGUAGE] + "</li></ul>";
                    /* eslint-disable no-unreachable */
                    break;
                /* eslint-enable */
                case "toall":
                    return '<ul><li class="suggested-name tooltipList__item" role="listitem">To All</li></ul>';
                    /* eslint-disable no-unreachable */
                    break;
                /* eslint-enable */
                default:
                    /* eslint-disable no-unreachable */
                    break;
                /* eslint-enable */
            }
        }
    }, {
        key: "buildMemberListData",
        value: function buildMemberListData(with_contact) {
            if (!RM) return [];
            var sorted_member_list = RM.getSortedMemberList();
            var b = [];
            if (with_contact) {
                sorted_member_list = this.merge(sorted_member_list, AC.contact_list);
            }
            var sorted_members_length = sorted_member_list.length;
            for (var index = 0; index < sorted_members_length; index++) {
                var member = sorted_member_list[index];
                if (member != AC.myid) {
                    b.push(this.getMemberObject(member));
                }
            }
            return b;
        }
    }, {
        key: "updateAdminGroupData",
        value: function updateAdminGroupData() {
            this.group_mention.forEach(function (data) {
                if (data.group_name === "admin") {
                    data.group_members = chatwork.getRoomAdmins().join(",");
                }
            });
        }
    }, {
        key: "getMemberObject",
        value: function getMemberObject(member) {
            var h = CW.is_business && ST.data.private_nickname && !RM.isInternal() ? AC.getDefaultNickName(member) : AC.getNickName(member);
            return {
                value: member,
                avatar: CW.getAvatarPanel(member, {
                    clicktip: !1,
                    size: "small"
                }),
                label: "<p class=\"autotrim\">" + common.htmlEncode(h) + "</p>",
                aid2name: common.htmlEncode(h)
            };
        }
    }, {
        key: "buildGroupMemberListData",
        value: function buildGroupMemberListData(group_name) {
            if (group_name === "random") {
                var member = chatwork.getRandomMemberInRoom();
                return [this.getMemberObject(member)];
            }
            for (var i = 0; i < this.group_mention.length; i++) {
                if (this.group_mention[i]["group_name"] == group_name) {
                    var members = this.group_mention[i]["group_members"];
                    if (!members) {
                        return [];
                    }
                    members = members.split(",");
                    var results = [];
                    for (var j = 0; j < members.length; j++) {
                        results.push(this.getMemberObject(members[j].trim()));
                    }
                    return results;
                }
            }
            return [];
        }
    }, {
        key: "ccMention",
        value: function ccMention() {
            CW.reg_cmp.push({
                key: /\[CC\]<span class=\"chatTimeLineTo\">TO<\/span>/g,
                rep: '<span class="chatTimeLineTo">CC</span>',
                reptxt: "[CC]",
                special: true
            });
        }
    }, {
        key: "isTagAdded",
        value: function isTagAdded() {
            return $("._chatppbutton").length > 0 ? true : false;
        }
    }, {
        key: "addTagButton",
        value: function addTagButton() {
            var _this4 = this;

            if ($("#_tag").length > 0 || this.isTagAdded()) {
                return;
            }
            var chat_send_tool = $("#_chatSendArea ul").first();
            chat_send_tool.append($("<li>", {
                id: "infoTag",
                class: "_showDescription _chatppbutton chatInput__element",
                attr: {
                    "role": "button",
                    "aria-label": "Add info tag"
                },
                css: {
                    "display": "inline-block",
                    "margin-left": 5
                },
                html: "<strong>[info]</strong>"
            }));
            chat_send_tool.append($("<li>", {
                id: "titleTag",
                class: "_showDescription _chatppbutton chatInput__element",
                attr: {
                    "role": "button",
                    "aria-label": "Add title tag"
                },
                css: {
                    "display": "inline-block"
                },
                html: "<strong>[title]</strong>"
            }));
            chat_send_tool.append($("<li>", {
                id: "codeTag",
                class: "_showDescription _chatppbutton chatInput__element",
                attr: {
                    "role": "button",
                    "aria-label": "Add code tag"
                },
                css: {
                    "display": "inline-block"
                },
                html: "<strong>[code]</strong>"
            }));

            chat_send_tool.append($("<li>", {
                id: "_addUserButton",
                class: "_showDescription chatInput__element",
                css: {
                    "display": "inline-block"
                },
                attr: {
                    "role": "button",
                    "aria-label": "Add all users mentioned in chat box to this Room"
                }
            }).append($("<span>", { class: "icoFontAddBtn icoSizeLarge" })));

            $("#infoTag").click(function () {
                _this4.setSuggestedChatTag("info");
            });

            $("#titleTag").click(function () {
                _this4.setSuggestedChatTag("title");
            });

            $("#codeTag").click(function () {
                _this4.setSuggestedChatTag("code");
            });

            $("#_addUserButton").click(function () {
                chatwork.addMembersFromChatTextToCurrentRoom();
            });
        }
    }]);

    return Mention;
}();

var mention = new Mention();
module.exports = mention;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var common = __webpack_require__(1);

var RoomInformation = function () {
    function RoomInformation() {
        _classCallCheck(this, RoomInformation);
    }

    _createClass(RoomInformation, [{
        key: "setUp",
        value: function setUp() {
            var _this = this;

            if ($("#_roomInfo").length > 0) {
                return;
            }
            $(".chatInput ul").first().append($("<li>", {
                id: "_roomInfo",
                class: "_showDescription chatInput__element",
                css: {
                    "display": "inline-block"
                },
                attr: {
                    "role": "button",
                    "aria-label": "View Room Information"
                }
            }).append($("<span>", { class: "icoFontAdminInfoMenu icoSizeLarge" })));
            $("body").append($("<div>", {
                id: "_roomInfoList",
                class: "roomInfo emoticonTooltip toolTip tooltip--white mainContetTooltip",
                attr: {
                    "role": "tooltip"
                }
            }).append($("<div>", {
                class: "_cwTTTriangle toolTipTriangle toolTipTriangleWhiteBottom"
            }), $("<span>", {
                id: "_roomInfoText"
            }).append($("<div>", {
                id: "_roomInfoTextTotalMembers",
                class: "tooltipFooter"

            }), $("<div>", {
                id: "_roomInfoTextTotalMessages",
                class: "tooltipFooter"

            }), $("<div>", {
                id: "_roomInfoTextTotalFiles",
                class: "tooltipFooter"

            }), $("<div>", {
                id: "_roomInfoTextTotalTasks",
                class: "tooltipFooter"

            }), $("<div>", {
                id: "_roomInfoTextMyTasks",
                class: "tooltipFooter"

            }))));
            $("#_roomInfo").click(function (e) {
                _this.prepareRoomInfo();
                var room_name = RM.getIcon() + " " + common.htmlEncode(RM.getName());
                var tip = $("#_roomInfoList").cwListTip({
                    selectOptionArea: "<b>" + room_name + "</b> Information",
                    fixHeight: !1,
                    search: !1
                });
                tip.open($(e.currentTarget));
            });
        }
    }, {
        key: "prepareRoomInfo",
        value: function prepareRoomInfo() {
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
    }]);

    return RoomInformation;
}();

var room_information = new RoomInformation();
module.exports = room_information;

/***/ })
/******/ ]);