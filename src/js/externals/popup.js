let common = require("../helpers/Common.js");
let Storage = require("../helpers/Storage.js");
let ChromeStorageLocal = require("../helpers/ChromeStorageLocal.js");
let Const = require("../helpers/Const.js");

let local_stored_data = {};

$(function() {
    setVersionType();

    $("#chatpp_version").html(common.getAppFullName());

    var pages = ["setting", "emoticon", "room", "group", "shortcut", "change_logs", "features", "notification"];
    pages.forEach(function(page_name) {
        var url = `html/${page_name}.html`;
        $("#" + page_name + "_page").click(function() {
            common.openNewUrl(url);
        });
    });

    $(".ext-url").click(function(){
        common.openNewUrl($(this).attr("href"));
    });

    $("#btn-emo-status").click(function() {
        switchEmoticonStatus();
    });

    $("#btn-mention-status").click(function() {
        switchMentionStatus();
    });

    $("#btn-shortcut-status").click(function() {
        switchShortcutStatus();
    });

    chrome.storage.onChanged.addListener(function(changes, namespace) {
        var data = changes[Const.CHROME_SYNC_KEY];
        if (!$.isEmptyObject(data) && !$.isEmptyObject(data.newValue)) {
            data = data.newValue;
            updateViewData(data);
        }
    });

    loadChatppEmoData();
});

function loadStatus(name, value) {
    if (value !== undefined && value === false) {
        $("#" + name + "-status").removeClass().addClass("text-danger").html("DISABLED");
    } else {
        $("#" + name + "-status").removeClass().addClass("text-primary").html("ENABLED");
    }
}

function loadChatppEmoData() {
    var storage = new Storage;
    storage.get(Const.CHROME_SYNC_KEY, function(data) {
        if ($.isEmptyObject(data)) {
            common.openNewExtensionPageUrl(common.app_detail.options_page);
        } else {
            updateViewData(data);
        }
    });
}

function updateViewData(data) {
    var features = ["emoticon", "mention", "shortcut", "thumbnail", "highlight"];
    for (var i in features) {
        loadStatus(features[i], data[features[i] + "_status"]);
    }
}

function setVersionType() {
    var chrome_storage_local = new ChromeStorageLocal();
    chrome_storage_local.get(function(data) {
        if ($.isEmptyObject(data)) {
            local_stored_data = {};
        } else {
            local_stored_data = data;
        }
        if (local_stored_data[Const.CHROME_LOCAL_KEY] === undefined) {
            local_stored_data[Const.CHROME_LOCAL_KEY] = {};
        }
        local_stored_data[Const.CHROME_LOCAL_KEY]["version"] = common.getAppVersion();
        local_stored_data[Const.CHROME_LOCAL_KEY]["version_name"] = common.getAppVersionName();
        chrome.browserAction.getBadgeText({}, function(result) {
            if (result === "new") {
                chrome.browserAction.setBadgeText({text: ""});
                //chrome.tabs.create({url: "change_logs.html"});
            }
        });
        chrome_storage_local.setData(local_stored_data);
    });
}
