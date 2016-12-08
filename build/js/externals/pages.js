(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var common = require("../helpers/Common.js");
var Const = require("../helpers/Const.js");
var EmoStorage = require("../helpers/EmoStorage.js");
var emo_storage = new EmoStorage();
var emoticons = [];
var emo_info = {};
var urls = {};
var init = false;

var official_emoticons_data = common.official_emoticons_data;

$(function () {
    if (!common.isPage("emoticon")) {
        return;
    }
    common.setPageTitle();
    emo_storage.get(Const.CHROME_SYNC_KEY, function (info) {
        if (!$.isEmptyObject(info)) {
            emo_info = info;
            emo_storage.setFeatureStatus(emo_info);
            for (var key in info) {
                var emo_data = info[key];
                var url = common.getEmoticonDataUrl(emo_data.data_name, emo_data.data_url);
                if (url) {
                    urls[emo_data.data_name] = url;
                }
            }
        }
        if ($.isEmptyObject(urls)) {
            init = true;
            urls["Default"] = common.getEmoticonDataUrl("Default");
        }
        fillDataTable();

        if (init) {
            getData(urls, reload);
        } else {
            getData(urls, fillTable);
            showOfficialData();
        }
    });

    $("#btn-reset").click(function () {
        bootbox.dialog({
            title: "<span class='text-primary'>Reset Emoticon Data",
            message: "<span class='text-danger'>Your are trying to reset emoticon data, which will clear your current data information.<br>" + "This action cannot be undone. Are you sure ?</span>",
            buttons: {
                success: {
                    label: "OK!",
                    className: "btn-success",
                    callback: function callback() {
                        emo_info = {};
                        getData({}, reload);
                    }
                },
                danger: {
                    label: "Cancel!",
                    className: "btn-danger"
                }
            }
        });
    });

    $("#btn-load").click(function () {
        if ($("#data-select").val() == "default") {
            getData(Const.DEFAULT_DATA_URL, reload);
        } else {
            (function () {
                var url = $("#data-url").val();
                if (!common.validateUrl(url)) {
                    bootbox.alert("Invalid URL! Make sure your inputted URL is correct, and start with https!");
                } else {
                    bootbox.dialog({
                        message: "The data from <a href=\"" + url + "\">" + url + "</a> may contain undesirable emoticons and we will not be responsible for it",
                        title: "<span class='text-danger'>Your are trying to load data that is not officially supported by Chat++.<br/> Do you want to continue ?</span>",
                        buttons: {
                            success: {
                                label: "OK!",
                                className: "btn-success",
                                callback: function callback() {
                                    urls["added"] = url;
                                    getData(urls, reload);
                                }
                            },
                            danger: {
                                label: "Cancel!",
                                className: "btn-danger",
                                callback: function callback() {}
                            }
                        }
                    });
                }
            })();
        }
    });

    $("#data-select").change(function (e) {
        var val = $(e.currentTarget).val();
        if (val == "default") {
            $("#url-input-div").hide("slow");
        } else {
            $("#url-input-div").show("slow");
        }
    });
});

function getData(urls, callback) {
    if ($.isEmptyObject(urls)) {
        urls["Default"] = Const.DEFAULT_DATA_URL;
    }
    var loaded_urls = [];
    $.each(urls, function (i, url) {
        if (loaded_urls.indexOf(url) === -1) {
            loaded_urls.push(url);
        } else {
            return;
        }
        $.getJSON(url).done(function (data) {
            if (typeof data.data_version !== "undefined" && typeof data.emoticons !== "undefined") {
                data.data_url = urls[data.data_name] ? urls[data.data_name] : urls["added"];
                var priority = getPriority(data.data_name);
                emo_storage.pushData(data, priority);
                pushEmoticons(data.emoticons, priority, data.data_name);
                if (emo_storage.data_count === common.getObjectLength(urls)) {
                    emo_storage.syncData(callback);
                }
            } else {
                bootbox.alert("Invalid data structure!");
            }
        }).fail(function () {
            var message = "<span class='text-danger'>There is an error occurred when loading or parsing the following url: <br>" + ("<a href='" + url + "'>" + url + "</a>") + "<br>It may be because of the failure in downloading file or invalid file format.<br>" + "Check your file data carefully and try to reload again.</span>";
            bootbox.alert(message);
        });
    });
}

function reload() {
    location.reload();
}

function getPriority(data_name) {
    var max = 0;
    for (var key in emo_info) {
        var val = emo_info[key];
        if (val.data_name === data_name) {
            return val.priority;
        }
        if (val.priority >= max) {
            max = val.priority + 1;
        }
    }

    return max;
}

function showOfficialData() {
    var official = $("#official-data");
    for (var data_name in official_emoticons_data) {
        if (emo_info[data_name] === undefined) {
            var new_button = "<div class=\"col-md-12 official-data\"><button class=\"btn btn-info btn-sm btn-official-data\" data-name=\"" + data_name + "\">Add " + data_name + "</button>" + ("<span class=\"text-primary\" style=\"padding-left: 20px\"><strong>" + official_emoticons_data[data_name].description + "</strong></span>") + "</div><br>";
            official.append(new_button);
        }
    }

    $(".btn-official-data").click(function (e) {
        var data_name = $(e.currentTarget).data("name");
        var url = official_emoticons_data[data_name].link;
        if (common.validateUrl(url)) {
            urls[data_name] = url;
            getData(urls, reload);
        }
    });
}

function pushEmoticons(emos, priority, data_name) {
    for (var i = 0; i < emos.length; i++) {
        var disable = false;
        emos[i].priority = priority;
        for (var j = 0; j < emoticons.length; j++) {
            if (emoticons[j].emo.key === emos[i].key) {
                if (emoticons[j].emo.priority < emos[i].priority) {
                    emoticons[j].status = true;
                } else {
                    disable = true;
                }
                break;
            }
        }
        emoticons.push({
            emo: emos[i],
            status: disable,
            data_name: data_name
        });
    }
}

function clearTable() {
    $(".table-emo > tbody").html("");
}

function fillTable() {
    clearTable();
    var info = emo_storage.data;
    if (info.data_name != "Default" && info.data_url) {
        $("#data-select").val("custom");
        $("#data-url").val(info.data_url);
        $("#url-input-div").show("slow");
        $("#btn-show-changelog").show("slow");
    }

    var table_text = "";
    var current_data = null;
    var last_key = 0;
    var last_data_name = null;
    $.each(emoticons, function (key, data) {
        if (!current_data || current_data !== data.data_name) {
            if (table_text) {
                $("#table-emo-" + last_data_name).find("tbody").append(table_text);
            }
            current_data = data.data_name;
            table_text = "";
            last_key = key;
        }
        last_data_name = data.data_name;
        if ((key - last_key) % 4 === 0) {
            table_text += "<tr>";
        }
        table_text += createTableTd(data);
        if ((key - last_key) % 4 === 3) {
            table_text += "</tr>";
        }
    });
    $("#table-emo-" + last_data_name).find("tbody").append(table_text);
}

function createEmoticonsTable(name) {
    var table = "<div id=\"emoticons-table\">" + "<div class=\"panel panel-warning\">" + ("<div class=\"panel-heading\">" + name + "</div>") + ("<table class=\"table table-emo table-bordered\" id=\"table-emo-" + name + "\">") + "<thead>" + "<tr class=\"success text-center\">" + "<th colspan=\"2\" class=\"text-center\">Emo</th>" + "<th colspan=\"2\" class=\"text-center\">Emo</th>" + "<th colspan=\"2\" class=\"text-center\">Emo</th>" + "<th colspan=\"2\" class=\"text-center\">Emo</th>" + "</tr>" + "</thead>" + "<tbody>" + "</tbody>" + "</table>" + "</div>";
    "</div>";

    $("#emoticons-table").append(table);
}

function createTableTd(data) {
    var src = common.htmlEncode(common.getEmoUrl(data.emo.src));
    var row = "";
    var class_name = data.status ? "danger" : "info";
    row += "<td class='" + class_name + " text-center'>" + data.emo.key + "</td>";
    row += "<td class='text-center'><img class='emoticon' src='" + src + "'/></td>";
    return row;
}

function createDataTableText(emo_data) {
    $("#table-data > tbody").html("");
    var table_text = "";
    var first = true;
    $.each(emo_data.slice().reverse(), function (key, data) {
        if (data.data_name !== undefined && data.data_url !== undefined) {
            var disabled = first ? "disabled" : "";
            first = false;
            table_text += "<tr>";
            table_text += "<td class='text-center'>" + data.data_name + "</td>";
            table_text += "<td class='text-center'>" + data.data_version + "</td>";
            table_text += "<td class='text-center'>" + createATag(data.data_url) + "</td>";
            table_text += "<td class='text-center'>" + ("<button class='btn btn-primary btn-sm btn-data-move-up " + disabled + "' data-priority='" + data.priority + "' id='btn-move-up" + data.data_name + "'> Move Up </button>") + ("<button class='btn btn-warning btn-sm btn-data-remove' data-name='" + data.data_name + "' id='btn-" + data.data_name + "'> Remove </button></td>");
            table_text += "</tr>";
        }
    });
    $("#table-data").find("tbody").append(table_text);
}

function fillDataTable() {
    var emo_info_array = emoDataObjectToArray(emo_info);
    createDataTableText(emo_info_array);
    $.each(emo_info_array.slice().reverse(), function (key, data) {
        if (data.data_name !== undefined && data.data_url !== undefined) {
            createEmoticonsTable(data.data_name);
        }
    });
    $("#btn-save").click(function () {
        var new_emo_storage = new EmoStorage();
        for (var i in emo_info_array) {
            new_emo_storage.pushData(emo_info_array[i], emo_info_array[i].priority);
        }
        new_emo_storage.syncData(reload);
    });
    $("#table-data").on("click", "button", function (e) {
        var button = $(e.currentTarget);
        if (button.hasClass("btn-data-move-up")) {
            var priority = button.data("priority");
            var temp = void 0;
            var up = priority + 1;
            if (emo_info_array[up]) {
                temp = emo_info_array[up];
                emo_info_array[up] = emo_info_array[priority];
                emo_info_array[priority] = temp;
                emo_info_array[up].priority = up;
                emo_info_array[priority].priority = priority;
            }
            createDataTableText(emo_info_array);
        }

        if (button.hasClass("btn-data-remove")) {
            var name = button.data("name");
            emo_storage.removeData(name);
            emo_storage.syncData(reload);
        }
    });
}

function rearrangePriority(data) {
    var i = 0;
    var new_data = [];
    for (var j in data) {
        data[j].priority = i;
        new_data[i++] = data[j];
    }

    return new_data;
}

function emoDataObjectToArray(data) {
    var data_array = [];
    $.each(data, function (key, emo) {
        if (emo.priority !== undefined) {
            data_array[emo.priority] = emo;
        }
    });

    return rearrangePriority(data_array);
}

function createATag(url) {
    if (!url) {
        return "";
    }
    return $("<a>", {
        href: url,
        text: url,
        target: "_blank"
    }).prop("outerHTML");
}

},{"../helpers/Common.js":7,"../helpers/Const.js":8,"../helpers/EmoStorage.js":9}],2:[function(require,module,exports){
"use strict";

var Const = require("../helpers/Const.js");
var common = require("../helpers/Common.js");
var Storage = require("../helpers/Storage.js");

var storage = new Storage();

var groups = [];

$(function () {
    if (!common.isPage("group")) {
        return;
    }
    common.setPageTitle();

    storage.get(Const.CHROME_SYNC_GROUP_KEY, function (data) {
        if (!$.isEmptyObject(data)) {
            groups = data;
            syncData();
        }
    });

    var data_group_name = $("#data-group-name");
    var data_group_member = $("#data-group-members");

    $("#button-group-add").click(function () {
        var info = {};
        info.group_name = data_group_name.val().trim();
        var group_members = getGroupMembers($("#data-group-members").val());
        if (validateGroupName(info.group_name) && group_members.length > 0) {
            info.group_members = group_members.join(", ");
            pushGroup(info);
            syncData();
            clearInput();
            data_group_name.focus();
        }
    });

    data_group_name.keyup(function (e) {
        if (e.keyCode == 13) {
            data_group_member.focus();
        }
    });

    data_group_member.keyup(function (e) {
        if (e.keyCode == 13) {
            $("#button-group-add").trigger("click");
        }
    });
});

function clearInput() {
    $("#data-group-name").val("");
    $("#data-group-members").val("");
}

function fillDataTable() {
    var table_text = "";
    var table_body = $("#table-data").find("tbody");
    table_body.html("");
    $.each(groups, function (key, data) {
        if (data.group_name !== undefined && data.group_members !== undefined) {
            table_text += "<tr id='row-" + key + "'>";
            table_text += "<td class='text-center'>" + data.group_name + "</td>";
            table_text += "<td class='text-center'>" + data.group_members + "</td>";
            table_text += "<td class='text-center'><button class='btn btn-warning btn-sm btn-data-remove' data-name='" + data.group_name + "'" + ("id='btn-" + key + "'> Remove </button></td>");
            table_text += "</tr>";
        }
    });
    table_body.append(table_text);
    $(".btn-data-remove").click(function (e) {
        var name = $(e.currentTarget).data("name");
        removeGroup(name);
        syncData();
    });
}

function pushGroup(info) {
    var found = false;
    $.each(groups, function (index, data) {
        if (info.group_name == data.group_name) {
            groups[index] = info;
            found = true;
        }
    });

    if (!found) {
        groups.push(info);
    }
}

function removeGroup(name) {
    var found = -1;
    $.each(groups, function (index, data) {
        if (name == data.group_name) {
            found = index;
        }
    });

    if (found >= 0) {
        groups.splice(found, 1);
    }
}

function validateGroupName(data) {
    if (data.length > 15 || data.length < 2) {
        return false;
    }

    return data.split(" ").length - 1 <= 2;
}

function getGroupMembers(data) {
    var members = data.split(",");
    var valid_members = [];
    for (var i = 0; i < members.length; i++) {
        var member = members[i];
        member = member.trim();
        if (member && $.isNumeric(member)) {
            if (valid_members.indexOf(member) === -1) {
                valid_members.push(member);
            }
        }
    }

    var regex = /\[[a-zA-Z]+:([0-9]+)\]/g;
    var match = void 0;
    while ((match = regex.exec(data)) != null) {
        valid_members.push(match[1]);
    }
    return valid_members;
}

function syncData(callback) {
    if (callback === undefined) {
        callback = fillDataTable;
    }
    storage.set(Const.CHROME_SYNC_GROUP_KEY, groups, callback);
}

},{"../helpers/Common.js":7,"../helpers/Const.js":8,"../helpers/Storage.js":10}],3:[function(require,module,exports){
"use strict";

var Const = require("../helpers/Const.js");
var common = require("../helpers/Common.js");
var Storage = require("../helpers/Storage.js");

var storage = new Storage();
var disabled_notify_rooms = [];

$(function () {
    if (!common.isPage("notification")) {
        return;
    }
    common.setPageTitle();

    storage.get(Const.CHROME_SYNC_DISABLE_NOTIFY_ROOM_KEY, function (data) {
        if (!$.isEmptyObject(data)) {
            disabled_notify_rooms = data;
            loadData();
        }
    });

    $("#save-btn").click(function () {
        var rooms = $("textarea").val().split(",");
        disabled_notify_rooms = [];
        $.each(rooms, function (index, room) {
            var room_id = common.parseRoomId(room);
            if (room_id) {
                disabled_notify_rooms.push(room_id);
            }
        });
        storage.set(Const.CHROME_SYNC_DISABLE_NOTIFY_ROOM_KEY, disabled_notify_rooms, common.reload);
    });
});

function loadData() {
    $("textarea").val(disabled_notify_rooms.join());
}

},{"../helpers/Common.js":7,"../helpers/Const.js":8,"../helpers/Storage.js":10}],4:[function(require,module,exports){
"use strict";

var Const = require("../helpers/Const.js");
var common = require("../helpers/Common.js");
var Storage = require("../helpers/Storage.js");

var storage = new Storage();

var rooms = [];

$(function () {
    if (!common.isPage("room")) {
        return;
    }
    common.setPageTitle();

    storage.get(Const.CHROME_SYNC_ROOM_KEY, function (data) {
        if (!$.isEmptyObject(data)) {
            rooms = data;
            loadData();
        }
    });

    $("#save-btn").click(function () {
        $("input").each(function (index, element) {
            var number = $(element).data("btn");
            var value = $(element).val();
            rooms[number] = common.parseRoomId(value);
        });
        storage.set(Const.CHROME_SYNC_ROOM_KEY, rooms, common.reload);
    });
});

function loadData() {
    for (var i in rooms) {
        if (rooms[i]) {
            $("[data-btn='" + i + "']").val(rooms[i]);
        }
    }
}

},{"../helpers/Common.js":7,"../helpers/Const.js":8,"../helpers/Storage.js":10}],5:[function(require,module,exports){
"use strict";

var Const = require("../helpers/Const.js");
var common = require("../helpers/Common.js");
var Storage = require("../helpers/Storage.js");

var storage = new Storage();
var stored_data = {};

$(function () {
    if (!common.isPage("setting")) {
        return;
    }
    common.setPageTitle();

    storage.get(Const.CHROME_SYNC_KEY, function (data) {
        stored_data[Const.CHROME_SYNC_KEY] = data;
        if ($.isEmptyObject(data)) {
            common.openNewExtensionPageUrl(common.app_detail.options_page);
        } else {
            updateViewData(data);
            $("[id$=-status-btn]").click(function (e) {
                var status = true;
                var id = $(e.currentTarget).attr("id");
                var id_parts = id.split("-");
                var feature_name = id_parts[0];
                if ($(e.currentTarget).html() === "Disable") {
                    status = false;
                }
                stored_data[Const.CHROME_SYNC_KEY][feature_name + "_status"] = status;
                storage.setData(stored_data, function () {
                    loadStatus(feature_name, status);
                });
            });
        }
    });
});

function loadStatus(name, value) {
    if (value !== undefined && value === false) {
        $("#" + name + "-status").removeClass().addClass("text-danger").html("DISABLED");
        $("#" + name + "-status-btn").removeClass().addClass("btn btn-success btn-xs").html("Enable");
    } else {
        $("#" + name + "-status").removeClass().addClass("text-success").html("ENABLED");
        $("#" + name + "-status-btn").removeClass().addClass("btn btn-danger btn-xs").html("Disable");
    }
}

function updateViewData(data) {
    var features = ["emoticon", "mention", "shortcut", "thumbnail", "highlight"];
    for (var i in features) {
        loadStatus(features[i], data[features[i] + "_status"]);
    }
}

},{"../helpers/Common.js":7,"../helpers/Const.js":8,"../helpers/Storage.js":10}],6:[function(require,module,exports){
"use strict";

var common = require("../helpers/Common.js");

$(function () {
    if (!common.isPage("shortcut")) {
        return;
    }
    common.setPageTitle();
});

},{"../helpers/Common.js":7}],7:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Const = require("./Const.js");

var Common = function () {
    function Common() {
        _classCallCheck(this, Common);

        this.version = Const.VERSION_FIREFOX;
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
            if (this.isChromeVersion()) {
                return chrome.app.getDetails();
            }

            return {
                "name": "Chat++ for Chatwork",
                "short_name": "Chat++",
                "version": "5.0.4",
                "option_page": "option.html"
            };
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

},{"./Const.js":8}],8:[function(require,module,exports){
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

},{}],9:[function(require,module,exports){
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

},{"./Common.js":7,"./Const.js":8,"./Storage.js":10}],10:[function(require,module,exports){
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

},{"./Common.js":7}]},{},[1,6,3,4,5,2]);
