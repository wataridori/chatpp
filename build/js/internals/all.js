(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var common = require("../helpers/Common.js");

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
    }]);

    return ChatworkFacade;
}();

var chatwork = new ChatworkFacade();
module.exports = chatwork;

},{"../helpers/Common.js":2}],2:[function(require,module,exports){
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

},{"./Const.js":3}],3:[function(require,module,exports){
"use strict";

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

},{}],4:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ADVERTISEMENT_CHANGE_TIME = 1000 * 30;

var Advertisement = function () {
    function Advertisement() {
        _classCallCheck(this, Advertisement);
    }

    _createClass(Advertisement, [{
        key: "setUp",
        value: function setUp() {
            var _this = this;

            if ($("#chatppAdvertisement").length > 0) {
                return;
            }
            $("#_chatSendTool").append($("<li>", { id: "_chatppSponsored", class: "_showDescription", css: {
                    "display": "inline-block"
                }, attr: {
                    "role": "button",
                    "aria-label": "Chat Plus Plus Information"
                } }).append($("<span>", { id: "chatppPreLoad", class: "icoSizeSmall" })).append(this.getAdvertisementText()));
            setInterval(function () {
                _this.changeRandomAdvertisement();
            }, ADVERTISEMENT_CHANGE_TIME);
        }
    }, {
        key: "changeRandomAdvertisement",
        value: function changeRandomAdvertisement() {
            var text = this.getAdvertisementText();
            $("#chatppAdvertisement").html(text);
        }
    }, {
        key: "getAdvertisementText",
        value: function getAdvertisementText() {
            if (localStorage["chatpp_advertisement"] !== undefined && localStorage["chatpp_advertisement"]) {
                var ads = JSON.parse(localStorage["chatpp_advertisement"]);
                if (ads.length > 0) {
                    return ads[Math.floor(Math.random() * ads.length)];
                }
            }
            return "Advertisement Here!";
        }
    }]);

    return Advertisement;
}();

var advertisement = new Advertisement();
module.exports = advertisement;

},{}],5:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var common = require("../helpers/Common.js");
var Const = require("../helpers/Const.js");

var Emoticon = function () {
    function Emoticon() {
        _classCallCheck(this, Emoticon);

        this.status = common.getStatus("emoticon");
        this.emoticons = [];
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
            this.addExternalEmoList();
            this.addExternalEmo();
            this.setEmoticonTextLabel();
        }
    }, {
        key: "addExternalEmoList",
        value: function addExternalEmoList() {
            if ($("#externalEmoticonsButton").length > 0) {
                return;
            }
            $("#_chatSendTool").append($("<li>", {
                id: "_externalEmoticonsButton",
                class: "_showDescription chatInput__element",
                css: {
                    "display": "inline-block"
                },
                attr: {
                    "role": "button"
                }
            }).append($("<span>", { id: "externalEmoticonsButton", class: "icoFontActionMore icoSizeLarge" })));
            var emo_list_div = this.sorted_emoticons.map(function (emo) {
                var encoded_text = common.htmlEncode(emo.key);
                var titleapp = encoded_text + " - " + emo.data_name + " - Chatpp";
                var img_src = common.htmlEncode(common.getEmoUrl(emo.src));
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

                return liElement.prop("outerHTML");
            }).join("");

            var data = [];
            this.sorted_emoticons.forEach(function (emo) {
                if (data.indexOf(emo.data_name) == -1) {
                    data.push(emo.data_name);
                }
            });

            var temp = [];
            var arrayData = [];
            var sorted_Emoticons = this.sorted_emoticons;
            data.forEach(function (item) {
                temp = [];
                sorted_Emoticons.map(function (emo) {
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
            }).append(emo_list_div), $("<div>", {
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
            $("#_externalEmoticonList").on("mouseenter", "li", function (e) {
                var a = $(e.currentTarget).find("img");
                $("#_externalEmotionDescription").text(a.attr("title"));
            }).on("mouseleave", "li", function () {
                return $("#_externalEmotionDescription").text(hint);
            }).on("click", "li", function () {
                CW.view.key.ctrl || CW.view.key.command ? (u.close(), CS.view.sendMessage($(this).find("img").prop("alt"), !0)) : ($("_chatText").focus(), CS.view.setChatText($(this).find("img").prop("alt"), !0), CW.view.key.shift || u.close());
            });
            $("#externalEmoticonsButton").click(function (e) {
                u.open($(e.currentTarget));
            });

            data.forEach(function (item, index) {
                $("#_externalEmoticonList #tabEmotionBig").append($("<button>", {
                    id: "tabEmotion" + index,
                    class: "w3-bar-item w3-button w3-emotion"
                }).append(item));
            });

            data.forEach(function (item, index) {
                $("#tabEmotion" + index).on("click", function (event) {
                    event.preventDefault();
                    $("#_emoticonGalleryTab li").remove();
                    $("#_externalEmoticonList #_emoticonGalleryTab").append(arrayData[index]);
                });
            });

            data.forEach(function (item, index) {
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
            for (var index = 0; index < emo.length; index++) {
                var encoded_text = common.htmlEncode(emo[index].key);
                var title = encoded_text + " - " + emo[index].data_name + " - Chatpp";
                var src = common.htmlEncode(common.getEmoUrl(emo[index].src));
                // Check whether Chatworks use new Javascript Code
                if (this.isNewMechanism()) {
                    var one_emo = {
                        name: encoded_text,
                        title: title,
                        src: src,
                        tag: emo[index].key,
                        external: true
                    };
                    emoticons.baseEmoticons.push(one_emo);
                    emoticons.tagHash[emo[index].key] = one_emo;
                } else {
                    if (this.isSpecialEmo(emo[index].key)) {
                        title = "";
                        encoded_text = "";
                    }
                    // If Chatwork uses old Javascript code, then use the old method
                    var rep = "<img src=\"" + src + "\" title=\"" + title + "\" alt=\"" + encoded_text + "\" class=\"ui_emoticon\"/>";
                    var regex = common.generateEmoticonRegex(emo[index].key, emo[index].regex);
                    CW.reg_cmp.push({
                        key: regex,
                        rep: rep,
                        reptxt: emo[index].key,
                        external: true
                    });
                }
            }
            if (this.isNewMechanism()) {
                tokenizer.setEmoticons(emoticons.getAllEmoticons().map(function (emo) {
                    return emo.tag;
                }));
            }
        }
    }, {
        key: "isNewMechanism",
        value: function isNewMechanism() {
            return typeof emoticons !== "undefined" && typeof tokenizer !== "undefined";
        }
    }]);

    return Emoticon;
}();

var emoticon = new Emoticon();
module.exports = emoticon;

},{"../helpers/Common.js":2,"../helpers/Const.js":3}],6:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var common = require("../helpers/Common.js");
var Const = require("../helpers/Const.js");
var chatwork = require("../helpers/ChatworkFacade.js");

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
        _classCallCheck(this, Mention);

        this.status = common.getStatus("mention");
        this.start = /@/ig;
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
<<<<<<< c157ac3fae33a07976cfe6512b30a085e927d716

        this.chat_text_jquery = $("#_chatText");
        this.chat_text_element = document.getElementById("_chatText");
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
=======
        this.chat_text_jquery = $("#_chatText");
        this.chat_text_element = document.getElementById("_chatText");
        this.suggestion_messages = {
            one: { ja: "\u691C\u7D22\u7D50\u679C\u306F\u3042\u308A\u307E\u305B\u3093", en: "No Matching Results" },
            all: { ja: "\u3059\u3079\u3066\u3092\u9078\u629E\u3057\u307E\u3059", en: "Select All Members" },
            group: { ja: "\u7A7A\u306E\u30B0\u30EB\u30FC\u30D7", en: "Empty Group" }
>>>>>>> Issue84 fix
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
<<<<<<< c157ac3fae33a07976cfe6512b30a085e927d716

        this.room_shortcuts = {};
        if (localStorage[Const.LOCAL_STORAGE_ROOM_SHORTCUT]) {
            this.room_shortcuts = JSON.parse(localStorage[Const.LOCAL_STORAGE_ROOM_SHORTCUT]);
        }
        this.status = common.getStatus("shortcut");

=======
>>>>>>> Issue84 fix
    }

    _createClass(Mention, [{
        key: "setUp",
        value: function setUp() {
            var _this = this;

            if (!this.status) {
                return;
            }
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

            $("<div id='suggestion-container' class='toSelectorTooltip tooltipListWidth tooltip tooltip--white' role='tooltip'></div>").insertAfter("#_chatText");
            this.hideSuggestionBox();
            $("#_sendEnterActionArea").click(function () {
                _this.cached_enter_action = $("#_sendEnterAction").cwCheckBox().isChecked() ? "send" : "br";
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

            // hide suggestion box when click in textarea or outside
            this.chat_text_jquery.click(function () {
                return _this.hideSuggestionBox();
            });

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

            this.chat_text_jquery.keydown(function (e) {
                if (!_this.status) {
                    return;
                }

                if ((e.which == 38 || e.which == 40 || e.which == 9 || e.which == 13) && _this.is_displayed) {
                    _this.is_navigated = true;
                    _this.holdCaretPosition(e);
                } else {
                    _this.current_index = 0;
                    _this.is_navigated = false;
                }

                if (e.which == 9 || e.which == 13) {
                    if ((_this.insert_type == "all" || _this.insert_type == "group") && _this.is_displayed) {
                        _this.setSuggestedChatText(_this.getTypedText(), null, null);
                        // dirty hack to prevent message to be sent
                        if (_this.cached_enter_action == "send") {
                            ST.data.enter_action = "br";
                        }
                        e.preventDefault();
                    } else {
                        if ($(".suggested-name").first().length) {
                            if (_this.is_navigated) {
                                $(".suggested-name").eq(_this.selected_index).click();
                            } else {
                                $(".suggested-name").first().click();
                            }
                            // dirty hack to prevent message to be sent
                            if (_this.cached_enter_action == "send") {
                                ST.data.enter_action = "br";
                            }
                            e.preventDefault();
                        } else {
                            // there's no thing after @ symbol
                            _this.hideSuggestionBox();
                        }
                    }
                }
            });

            this.chat_text_jquery.keyup(function (e) {
                if (!_this.status) {
                    return;
                }

                if (e.which == 9 || e.which == 13) {
                    return;
                }

                if ((e.which == 38 || e.which == 40) && _this.is_displayed) {
                    _this.is_navigated = true;
                    _this.holdCaretPosition(e);
                } else {
                    _this.is_navigated = false;
                }

                if (_this.current_RM != RM.id) {
                    _this.member_objects = _this.buildMemberListData(false);
                    _this.updateAdminGroupData();
                    _this.fuse = new Fuse(_this.member_objects, _this.options);
                    _this.current_RM = RM.id;
                }

                if (_this.findAtmark()) {
                    if (_this.is_displayed && _this.getNearestAtmarkIndex() != -1 && _this.getNearestAtmarkIndex() != _this.actived_atmark_index) {
                        _this.hideSuggestionBox();
                    }

                    if (!_this.is_displayed) {
                        if (!_this.isTriggerKeyCode(e.which)) {
                            return;
                        }
                        if (_this.getNearestAtmarkIndex() != -1) {
                            _this.actived_atmark_index = _this.getNearestAtmarkIndex();
                        }
                        _this.setSuggestionBoxPosition();
                        _this.showSuggestionBox(_this.buildList(_this.filterDisplayResults(_this.member_objects)));
                        _this.is_displayed = true;
                    }

                    var typed_text = _this.getTypedText();
                    if (typed_text.length) {
                        if (typed_text.charAt(1) == "#") {
                            if (_this.insert_type != "contact") {
                                _this.member_objects = _this.buildMemberListData(true);
                                _this.fuse = new Fuse(_this.member_objects, _this.options);
                                _this.insert_type = "contact";
                            }
                            typed_text = typed_text.substring(1);
                        }
                        var raw_results = _this.getRawResultsAndSetMode(typed_text.substring(1));

                        if (e.which == 38) {
                            _this.current_index -= 1;
                        }
                        if (e.which == 40) {
                            _this.current_index += 1;
                        }
                        var filtered_results = _this.filterDisplayResults(raw_results);

                        if (e.which == 38 && _this.is_outbound_of_list) {
                            _this.selected_index -= 1;
                            if (_this.selected_index < 0) {
                                _this.selected_index = 0;
                            }
                        }
                        if (e.which == 40 && _this.current_index > raw_results.length - filtered_results.length) {
                            _this.selected_index += 1;
                            if (_this.selected_index >= Math.min(DISPLAY_NUMS, filtered_results.length)) {
                                _this.selected_index = Math.min(DISPLAY_NUMS, filtered_results.length) - 1;
                            }
                        }

                        _this.showSuggestionBox(_this.buildList(filtered_results));
                    }

                    if (e.which == 27) {
                        // when user press ESC, we hide suggestion box
                        _this.hideSuggestionBox();
                        _this.holdCaretPosition(e);
                    }
                } else {
                    _this.hideSuggestionBox();
                }

                return false;
            });

            this.addTag();
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
<<<<<<< c157ac3fae33a07976cfe6512b30a085e927d716

=======
>>>>>>> Issue84 fix
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
<<<<<<< c157ac3fae33a07976cfe6512b30a085e927d716
            }
            if (rect.height - position.top < 90) {
                if (position.top < 108) {
                    $("#_chatTextArea").css({
                        "overflow-y": "visible",
                        "z-index": 2
                    });

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
            $("#_chatTextArea").css({
                "overflow-y": "scroll",
                "z-index": 0
            });
            // restore setting to correct value
            if (this.cached_enter_action != ST.data.enter_action && this.cached_enter_action == "send") {
                ST.data.enter_action = this.cached_enter_action;
            }

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
            for (var i = messages.length - 1; i >= 0; i--) {
                if (messages[i].id == id) {
                    return i;
=======
            }
            if (rect.height - position.top < 90) {
                if (position.top < 108) {
                    $("#_chatTextArea").css({ "overflow-y": "visible", "z-index": 2 });
>>>>>>> Issue84 fix
                }
                position.top -= 118;
            } else {
                position.top += parseInt(this.chat_text_jquery.css("font-size")) + 2;
            }
            $("#suggestion-container").parent().css({ position: "relative" });
            $("#suggestion-container").css({ top: position.top, left: position.left, position: "absolute" });
            this.setCaretPosition(this.chat_text_element, current_pos);
        }
    }, {
<<<<<<< c157ac3fae33a07976cfe6512b30a085e927d716
        key: "goToPreviousMention",
        value: function goToPreviousMention() {
            var current = this.getPivotMessage();
            var position = this.getMessagePosition(current);
            var messages = RM.timeline.chat_list;
            for (var i = position - 1; i >= 0; i--) {
                if (this.isMentionMessage(messages[i])) {
                    this.goToMessageInRoom(messages[i].id);
                    return true;
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

            if (!RM.timeline.has_old && messages.length == 0) {
                return false;

=======
        key: "showSuggestionBox",
        value: function showSuggestionBox(content) {
            var _this2 = this;

            this.is_inserted = false;
            $("#suggestion-container").html(content).show();
            $("#suggestion-container").css("visibility", "visible");
            if (this.is_navigated) {
                $(".suggested-name").eq(this.selected_index).css("background-color", "#D8F0F9");
            } else {
                $(".suggested-name").first().css("background-color", "#D8F0F9");
>>>>>>> Issue84 fix
            }

            $(".suggested-name").click(function (e) {
                if (_this2.is_inserted) {
                    return;
                }
                _this2.is_inserted = true;
                var target = $(e.currentTarget);
                target.css("background-color", "#D8F0F9");
                _this2.setSuggestedChatText(_this2.getTypedText(), target.text(), target.data("cwui-lt-value"));
            });

            $(".suggested-name").mouseover(function (e) {
                $(e.currentTarget).siblings().css("background-color", "white");
                $(e.currentTarget).css("background-color", "#D8F0F9");
            });

            $(".suggested-name").mouseout(function (e) {
                $(e.currentTarget).siblings().first().css("background-color", "#D8F0F9");
                $(e.currentTarget).css("background-color", "white");
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
            $("#_chatTextArea").css({ "overflow-y": "scroll", "z-index": 0 });
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
<<<<<<< c157ac3fae33a07976cfe6512b30a085e927d716

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
                        replace_text = "TO ALL >>>";
                    } else {
                        replace_text = "[toall]";
                    }
                    break;
                default:
                    break;

        key: "replyMessage",
        value: function replyMessage(message) {
            var data = RM.timeline.chat_id2chat_dat[message];
            if (data) {
                $("#_chatText").focus();
                var name = ST.data.private_nickname && !RM.isInternal() ? AC.getDefaultNickName(data.aid) : AC.getNickName(data.aid);
                /* eslint-disable no-useless-concat */
                CS.view.setChatText("[" + L.chatsend_reply + " aid=" + data.aid + " to=" + RM.id + "-" + message + "] " + name + "\n", !0);
                /* eslint-enable */

=======
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
>>>>>>> Issue84 fix
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
        key: "addMentionText",
        value: function addMentionText() {
            var _this3 = this;

            if ($("#_chatppMentionText").length > 0) {
                return;
            }
            $("#_chatSendTool").append($("<li>", {
                id: "_chatppPreLoad",
                attr: {
                    "role": "button"
                },
                class: "_showDescription"
            }).append($("<span>", {
                id: "chatppMentionText",
                class: "emoticonText icoSizeSmall"
            })));
            this.updateMentionText();
            $("#chatppMentionText").click(function () {
                return _this3.toggleMentionStatus();
            });
        }
    }, {
        key: "updateMentionText",
        value: function updateMentionText() {
            var mention_text = "M: " + (this.status ? "ON" : "OFF");
            var div = $("#chatppMentionText");
            div.html(mention_text);
            div.addClass("chatInput__element");
            if (this.status) {
                $("#_chatppMentionText").attr("aria-label", "Click to disable Mention Feature");
                div.addClass("emoticonTextEnable");
            } else {
                $("#_chatppMentionText").attr("aria-label", "Click to enable Mention Feature");
                div.removeClass("emoticonTextEnable");

                }
<<<<<<< c157ac3fae33a07976cfe6512b30a085e927d716
                previous = sortedRooms[i];

=======

                if (typed_text == "me") {
                    this.insert_type = "me";
                    return [this.getMemberObject(AC.myid)];
                }
                if (typed_text == "all") {
                    this.insert_type = "all";
                    return [];
                }
                this.insert_type = "one";
>>>>>>> Issue84 fix
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
        value: function setSuggestedChatTag(entered_text, type) {
            var old = this.chat_text_jquery.val();
            var start_pos = this.doGetCaretPosition(this.chat_text_element) - entered_text.length;
            var tag = "";
            switch (type) {
                case "info":
                    tag = "[info][/info]";
                    break;
                case "title":
                    tag = "[title][/title]";
                    break;
                default:
                    break;
            }
            var content = old.substring(0, start_pos) + tag + old.substring(start_pos + entered_text.length);
            this.chat_text_jquery.val(content);
            this.setCaretPosition(this.chat_text_element, start_pos + tag.length / 2);
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
                    return "<ul><li class=\"suggested-name tooltipList__item\" role=\"listitem\">" + this.suggestion_messages[this.insert_type][LANGUAGE] + "</lia></ul>";
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
        key: "addTag",
        value: function addTag() {
            var _this3 = this;

            if ($("#_tag").length > 0) {
                return;
            }
            $("#_chatSendTool").append($("<li>", {
                id: "_tag",
                class: "_showDescription chatInput__element",
                css: {
                    "display": "inline-block"
                }
            }).append($("<span>", {
                id: "infoTag",
                class: "chatInput__iconContainer"
            }).append("Info"), $("<span>", {
                id: "titleTag",
                class: "chatInput__iconContainer" }).append("Title")));

            $("#infoTag").click(function (e) {
                _this3.setSuggestedChatTag(_this3.getTypedText(), "info");
            });

            $("#titleTag").click(function (e) {
                _this3.setSuggestedChatTag(_this3.getTypedText(), "title");
            });
        }
    }]);

    return Mention;
}();

var mention = new Mention();
module.exports = mention;

},{"../helpers/ChatworkFacade.js":1,"../helpers/Common.js":2,"../helpers/Const.js":3}],7:[function(require,module,exports){
"use strict";

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

},{}],8:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
        }
    }]);

    return NotifyAll;
}();

var notify_all = new NotifyAll();
module.exports = notify_all;

},{}],9:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var common = require("../helpers/Common.js");

var RoomInformation = function () {
    function RoomInformation() {
        _classCallCheck(this, RoomInformation);
    }

    _createClass(RoomInformation, [{
        key: "setUp",
        value: function setUp() {
            var _this = this;

            if ($("#roomInfoIcon").length > 0) {
                return;
            }
            $("#_chatSendTool").append($("<li>", {
                id: "_roomInfo",
                class: "_showDescription chatInput__element",
                css: {
                    "display": "inline-block"
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

},{"../helpers/Common.js":2}],10:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Const = require("../helpers/Const.js");
var common = require("../helpers/Common.js");

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
    }

    _createClass(Shortcut, [{
        key: "setUp",
        value: function setUp() {
            if (this.status) {
                this.registerShortcut();
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
                _this.triggerDefaultAction("quote");
            });

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

            for (var i in this.room_shortcuts) {
                if (this.room_shortcuts[i] && this.room_shortcuts.hasOwnProperty(i)) {
                    (function () {
                        var room = _this.room_shortcuts[i];
                        CW.view.registerKeyboardShortcut(DOM_VK_0 + parseInt(i), !1, !1, !1, !1, function () {
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
            var me = $("._message:hover");
            var reply = me.find("[data-cwui-ab-type='" + action + "']");
            if (this.isDomExists(reply)) {
                reply.trigger("click");
            }
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
            for (var i = messages.length - 1; i >= 0; i--) {
                if (messages[i].id == id) {
                    return i;
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
            for (var i = position - 1; i >= 0; i--) {
                if (this.isMentionMessage(messages[i])) {
                    this.goToMessageInRoom(messages[i].id);
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
            for (var i = position + 1; i > 0 && i < messages.length; i++) {
                if (this.isMentionMessage(messages[i])) {
                    this.goToMessageInRoom(messages[i].id);
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
            var previous = void 0;
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

var shortcut = new Shortcut();
module.exports = shortcut;

},{"../helpers/Common.js":2,"../helpers/Const.js":3}],11:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var common = require("../helpers/Common.js");
var chatwork = require("../helpers/ChatworkFacade.js");
var Const = require("../helpers/Const.js");

var support_languages = ["1c", "actionscript", "apache", "applescript", "armasm", "asciidoc", "aspectj", "autohotkey", "autoit", "avrasm", "axapta", "bash", "brainfuck", "cal", "capnproto", "ceylon", "clojure-repl", "clojure", "cmake", "coffeescript", "cpp", "cs", "css", "d", "dart", "delphi", "diff", "django", "dns", "dockerfile", "dos", "dust", "elixir", "elm", "erb", "erlang-repl", "erlang", "fix", "fortran", "fsharp", "gcode", "gherkin", "glsl", "go", "gradle", "groovy", "haml", "handlebars", "haskell", "haxe", "http", "inform7", "ini", "java", "javascript", "json", "julia", "kotlin", "lasso", "less", "lisp", "livecodeserver", "livescript", "lua", "makefile", "markdown", "mathematica", "matlab", "mel", "mercury", "mizar", "mojolicious", "monkey", "nginx", "nimrod", "nix", "nsis", "objectivec", "ocaml", "openscad", "oxygene", "parser3", "perl", "pf", "php", "powershell", "processing", "profile", "prolog", "protobuf", "puppet", "python", "q", "r", "rib", "roboconf", "rsl", "ruby", "ruleslanguage", "rust", "scala", "scheme", "scilab", "scss", "smali", "smalltalk", "sml", "sql", "stata", "step21", "stylus", "swift", "tcl", "tex", "thrift", "tp", "twig", "typescript", "vala", "vbnet", "vbscript-html", "vbscript", "verilog", "vhdl", "vim", "x86asm", "xl", "xml", "xquery", "zephir"];

function insertThumbnail(dom) {
    $(".chatwork-token-url", dom).each(function (index, link) {
        var dom = $(link);
        var image_link = getThumbnailLink(dom.attr("href"));
        if (image_link) {
            var img = "<div><img src=\"" + image_link + "\" alt=\"" + image_link + "\" style=\"max-width: 500px; max-height: 125px\"></div>";
            dom.after(img);
        }
    });
    return dom;
}

function insertChatppEmoticonClass(dom) {
    $(".ui_emoticon", dom).each(function (index, image) {
        var image_dom = $(image);
        var title = image_dom.attr("title");
        if (title.indexOf("Chatpp") > 0) {
            image_dom.addClass("chatpp_ui_emoticon");
        }
    });
    return dom;
}

function getThumbnailLink(link) {
    var img_regex = /\.(png|jpg|gif|jpeg)$/i;
    if (link.match(img_regex)) {
        return link;
    }

    var fb_img_regex = /.*fbcdn.*\.(png|jpg|gif|jpeg)(\?.*)?/i;
    if (link.match(fb_img_regex)) {
        return link;
    }

    var media_giphy_regex = /^https:\/\/media.giphy.com\/media\/(.*)\/giphy\.gif/i;
    var giphy_code = link.match(media_giphy_regex);
    if (giphy_code && giphy_code[1]) {
        return "https://i.giphy.com/" + giphy_code[1] + ".gif";
    }

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

var ViewEnhancer = function () {
    function ViewEnhancer() {
        _classCallCheck(this, ViewEnhancer);

        this.thumbnail_status = common.getStatus("thumbnail");
        this.highlight_status = common.getStatus("highlight");
        this.to_all_status = true;
    }

    _createClass(ViewEnhancer, [{
        key: "isActive",
        value: function isActive() {
            return this.to_all_status || this.thumbnail_status || this.highlight_status;
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
    }, {
        key: "updateChatworkView",
        value: function updateChatworkView() {
            TimeLineView.prototype.getMessagePanelOld = TimeLineView.prototype.getMessagePanel;
            TimeLineView.prototype.getMessagePanel = function (a, b) {
                if (a.msg.indexOf(Const.TO_ALL_MARK) === 0) {
                    a.mn = true;
                }
                var message_panel = this.getMessagePanelOld(a, b);
                var temp = $("<div></div>");
                $(temp).html(message_panel);
                if (common.getStatus("emoticon")) {
                    temp = insertChatppEmoticonClass(temp);
                }

                if (!common.getStatus("thumbnail") && !common.getStatus("highlight")) {
                    return $(temp).html();
                }
                if (common.getStatus("thumbnail")) {
                    temp = insertThumbnail(temp);
                }
                if (common.getStatus("highlight")) {
                    $("pre code", temp).each(function (i, block) {
                        var block_text = $(block).html();
                        var options = getHighlightOption(block_text);
                        if (options.has_valid_options) {
                            var first_line = block_text.split("\n", 1)[0];
                            /* eslint-disable prefer-template */
                            block_text = block_text.replace(first_line + "\n", "");
                            /* eslint-enable */
                            $(block).html(block_text);
                        }
                        if (options.language) {
                            $(block).addClass(options.language);
                        }
                        if (!options.nowrap) {
                            $(block).css({ "word-wrap": "break-word", "white-space": "pre-wrap" });
                        }
                        hljs.highlightBlock(block);
                    });
                }
                return $(temp).html();
            };

            if (common.getStatus("thumbnail_status")) {
                TK.view.getTaskPanelOld = TK.view.getTaskPanel;
                TK.view.getTaskPanel = function (b, d) {
                    var task_panel = this.getTaskPanelOld(b, d);
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
    }]);

    return ViewEnhancer;
}();

var view_enhancer = new ViewEnhancer();
module.exports = view_enhancer;

},{"../helpers/ChatworkFacade.js":1,"../helpers/Common.js":2,"../helpers/Const.js":3}],12:[function(require,module,exports){
"use strict";

var emoticon = require("./Emoticon.js");
var shortcut = require("./Shortcut.js");
var mention = require("./Mention.js");
var room_information = require("./RoomInformation.js");
var view_enhancer = require("./ViewEnhancer.js");
var advertisement = require("./Advertisement.js");
var NotificationDisabler = require("./NotificationDisabler.js");
var notify_all = require("./NotifyAll.js");

var cw_timer = void 0;

$(function () {
    var rebuild = false;
    cw_timer = setInterval(function () {
        if (typeof CW !== "undefined" && typeof RM !== "undefined") {
            window.clearInterval(cw_timer);
            $("#_chatppPreLoad").remove();
            addStyle();

            room_information.setUp();

            if (emoticon.status) {
                rebuild = true;
                emoticon.setUp();
                view_enhancer.updateChatworkView();
            }

            mention.setUp();
            shortcut.setUp();
            advertisement.setUp();
            NotificationDisabler.setUp();
            notify_all.setUp();

            view_enhancer.updateChatSendView();
            view_enhancer.updateGetContactPanelView();

            if (rebuild) {
                RL.rooms[RM.id].build();
            }
        }
    }, 100);
});

function addStyle() {
    $("<style type=\"text/css\"> .emoticonTextEnable{font-weight: bold;};</style>").appendTo("head");
    $("<style type=\"text/css\"> .chatppErrorsText{font-weight: bold; color: red;};</style>").appendTo("head");
    $("<style type=\"text/css\"> .chatInput__element{opacity: 0.8;display: inline-block;padding: 0 5px;cursor: pointer;};</style>").appendTo("head");
    $("<style type=\"text/css\"> .messageBadge{vertical-align: middle !important;};</style>").appendTo("head");
    $("<style type=\"text/css\"> .timelineLinkTrim{vertical-align: middle !important;};</style>").appendTo("head");
    $("<style type=\"text/css\"> .chatpp_ui_emoticon{width: initial !important; height: initial !important};</style>").appendTo("head");
}

},{"./Advertisement.js":4,"./Emoticon.js":5,"./Mention.js":6,"./NotificationDisabler.js":7,"./NotifyAll.js":8,"./RoomInformation.js":9,"./Shortcut.js":10,"./ViewEnhancer.js":11}]},{},[12]);
