// Const
var LOCAL_STORAGE_DATA_KEY = "YACEP_EMO_DATA";
var LOCAL_STORAGE_INFO_KEY = "YACEP_EMO_INFO";

var LOCAL_STORAGE_GROUP_MENTION = "CHATPP_GROUP_MENTION";
var LOCAL_STORAGE_ROOM_SHORTCUT = "CHATPP_ROOM_SHORTCUT";

var CHROME_SYNC_KEY = "CHATPP_CHROME_SYNC_DATA";
var CHROME_SYNC_GROUP_KEY = "CHATPP_CHROME_SYNC_GROUP";
var CHROME_LOCAL_KEY = "CHATPP_CHROME_LOCAL_DATA";
var CHROME_SYNC_ROOM_KEY = "CHATPP_CHROME_SYNC_ROOM";

var DEFAULT_DATA_URL = "https://dl.dropboxusercontent.com/sh/rnyip87zzjyxaev/AACBVYHPxG88r-1BhYuBNkmHa/new.json?dl=1";

var ADVERTISEMENT_URL = "https://dl.dropboxusercontent.com/s/flbiyfqhcqapdbe/chatppad.json?dl=1";
var ADVERTISEMENT_LOAD_TIMEOUT = 1000 * 60 * 30;

var FORCE_TURN_OFF_THUMBNAIL = 1;

var emoticons = [];
var emo_info = {};
var DELAY_TIME = 6000;
var urls = {};

var keys = [CHROME_SYNC_KEY, CHROME_SYNC_GROUP_KEY, CHROME_SYNC_ROOM_KEY, CHROME_LOCAL_KEY];

for (var i in keys) {
    chrome.runtime.sendMessage({action: "init", data: keys[i]}, function(response) {});
}

setTimeout(function() {
    $.each(keys, function(index, key) {
        chrome.runtime.sendMessage({action: "getLocalStorage", data: key}, function(response) {
            localStorage[key] = response;
        });
    })
}, 500);

setTimeout(function() {
    init(true);
}, 1000);


function init(inject_script) {
    var info = localStorage[CHROME_SYNC_KEY];
    emo_info = info = (info && info !== "undefined") ? JSON.parse(info) : {};
    var url = "";
    if (!$.isEmptyObject(info)) {
        for (var key in info) {
            var emo_data = info[key];
            if (emo_data.data_name === "Default" && emo_data.data_url !== DEFAULT_DATA_URL) {
                url = DEFAULT_DATA_URL;
            } else {
                url = emo_data.data_url;
            }
            if (url) {
                urls[emo_data.data_name] = url;
            }
        }
    }
    if ($.isEmptyObject(urls)) {
        urls["Default"] = DEFAULT_DATA_URL;
    }
    if (info === undefined) {
        info = {};
    }
    if (!info.force_update_version || info.force_update_version < FORCE_TURN_OFF_THUMBNAIL) {
        info.force_update_version = FORCE_TURN_OFF_THUMBNAIL;
        info.thumbnail_status = false;
        info.emoticon_status = true;
    }
    localStorage.force_update_version = info.force_update_version;
    var features = ["mention", "shortcut", "thumbnail", "highlight"];
    features.forEach(function(feature) {
        if (info[feature + "_status"] == false) {
            console.log(feature + " feature is disabled!");
            localStorage[feature + "_status"] = false;
        } else {
            localStorage[feature + "_status"] = true;
        }
    });
    if (info.emoticon_status == false) {
        console.log("emoticon feature is disabled!");
        localStorage.emoticon_status = false;
        addInjectedScript();
    } else {
        localStorage.emoticon_status = true;
        getData(info, inject_script);
    }

    localStorage[LOCAL_STORAGE_GROUP_MENTION] = [];
    var data = localStorage[CHROME_SYNC_GROUP_KEY];
    if (!$.isEmptyObject(data)) {
        localStorage[LOCAL_STORAGE_GROUP_MENTION] = data;
    }


    localStorage[LOCAL_STORAGE_ROOM_SHORTCUT] = [];
    data = localStorage[CHROME_SYNC_ROOM_KEY];
    if (!$.isEmptyObject(data)) {
        localStorage[LOCAL_STORAGE_ROOM_SHORTCUT] = data;
    }
}

function getData(info, inject_script) {
    var loaded_count = 0;
    var emo_count = getObjectLength(urls);
    var emo_storage = new EmoStorage();
    var failed = false;
    for (data_name in urls) {
        var url = urls[data_name];
        $.getJSON(url)
            .done(function(data) {
                if (typeof(data.data_version) !== "undefined" && typeof(data.emoticons) !== "undefined") {
                    data.data_url = urls[data.data_name];
                    var priority = (emo_info[data.data_name] && emo_info[data.data_name].priority) ? emo_info[data.data_name].priority : 0;
                    emo_storage.pushData(data, priority);
                    pushEmoticons(data.emoticons, priority);
                }
            }).fail(function(jqxhr, textStatus, error) {
                failed = true;
                var message = "Chat++ Error\n\nThere is an error occurred when loading or parsing the data named '" + data_name + "' (" + url + "). \n\n" +
                    "It may be because of the failure in downloading file or invalid file format.\n\n" +
                    "Check your file data carefully and try to reload again."
                alert(message);
            }).always(function() {
                if (++loaded_count === emo_count) {
                    if (!failed) {
                        emo_storage.syncData();
                    }
                    var data = localStorage[CHROME_LOCAL_KEY];
                    var version_name = "";
                    if ($.isEmptyObject(data)) {
                        local_stored_data = {};
                    } else {
                        local_stored_data = data;
                    }
                    if (!$.isEmptyObject(local_stored_data[CHROME_LOCAL_KEY])) {
                        version_name = local_stored_data[CHROME_LOCAL_KEY]["version_name"];
                    }
                    var current_time = (new Date).toLocaleString();
                    console.log("You are using Chat++!. Date sync: " + current_time + ". Version: " + version_name);
                    localStorage[LOCAL_STORAGE_DATA_KEY] = JSON.stringify(emoticons);
                    localStorage["chatpp_version_name"] = version_name;
                    localStorage["emoticon_data_version"] = parseDataName(emo_info);
                    if (inject_script !== undefined && inject_script) {
                        addInjectedScript();
                    } else {
                        // runFunction("reloadEmoticions()");
                    }
                }
            });
    }
}

function parseDataName(data) {
    if (data.data_name !== undefined && data.data_version !== undefined) {
        return data.data_name + "_" + data.data_version;
    }
    var data_name = "";
    for (key in data) {
        if (data[key].data_name !== undefined) {
            data_name += data[key].data_name + "_" + data[key].data_version + "  ";
        }
    }
    return data_name;
}

function getObjectLength(object) {
    return Object.keys(object).length;
}

function pushEmoticons(emos, priority) {
    for (var i = 0; i < emos.length; i++) {
        var repeated = false;
        emos[i].priority = priority;
        for (var j = 0; j < emoticons.length; j++) {
            if (emoticons[j].regex === emos[i].regex) {
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
    injectJsFile("fuse.min.js");
    injectJsFile("caretposition.js");
    injectCssFile("highlight.min.css");
    setTimeout(
        function() {
            injectJsFile("highlight.min.js");
            injectJsFile("main.js");
            injectJsFile("mention.js");
            injectJsFile("shortcut.js");
        }, DELAY_TIME
    );

    setInterval(loadAdvertisement, ADVERTISEMENT_LOAD_TIMEOUT);
}

function preLoad() {
    var text = '<li id="_chatppPreLoad"><span id="chatppPreLoad" class="icoSizeSmall"></span></li>';
    $("#_chatSendTool").append(text);
    var chatpp_pre_load = $("#chatppPreLoad");
    var delay_time = DELAY_TIME / 1000;
    var pre_load_interval = setInterval(function() {
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
    script.src = chrome.extension.getURL("js/" + file_name);
    (document.documentElement).appendChild(script);
}

function injectCssFile(file_name) {
    var css_link = $("<link>", {
        rel: "stylesheet",
        type: "text/css",
        href: chrome.extension.getURL("css/" + file_name)
    });
    css_link.appendTo("head");
}

function runFunction(func) {
    $("body").append($("<script />", {
        html: func
    }));
}

function loadAdvertisement() {
    $.getJSON(ADVERTISEMENT_URL)
        .done(function(data) {
            if (!$.isEmptyObject(data)) {
                localStorage["chatpp_advertisement"] = JSON.stringify(data);
            }
        }).fail(function(jqxhr, textStatus, error) {
            var err = textStatus + ", " + error;
            console.log( "Load Ads Failed: " + err );
        });
}

function EmoStorage() {
    this.data = {};
}

EmoStorage.prototype.pushData = function(inputted_data, inputted_priority) {
    var priority = (inputted_priority !== undefined) ? inputted_priority : inputted_data.priority;
    this.data[inputted_data.data_name] = {
        priority: priority,
        data_name: inputted_data.data_name,
        data_url: inputted_data.data_url,
        data_changelog: inputted_data.data_changelog,
        data_version: inputted_data.data_version,
        date_sync: (new Date()).toLocaleString()
    };
};

EmoStorage.prototype.removeData = function(data_name) {
    if (this.data[data_name] !== undefined) {
        delete this.data[data_name];
    }
};

EmoStorage.prototype.syncData = function(callback) {
    localStorage[LOCAL_STORAGE_INFO_KEY] = JSON.stringify(this.data);
    var features = ["mention", "shortcut", "thumbnail", "highlight"];
    for (var i in features) {
        var status_name = features[i] + "_status";
        this.data[status_name] = localStorage[status_name] === 'true';
    }
    this.data.force_update_version = localStorage.force_update_version;
    var sync = {};
    sync[CHROME_SYNC_KEY] = JSON.stringify(this.data);
    chrome.runtime.sendMessage({action: "setLocalStorage", data: sync}, function(response) {
        if (typeof callback != "undefined") {
            callback();
        }
    });
};