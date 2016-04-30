let Const = require("../helpers/Const.js");
let common = require("../helpers/Common.js");
let EmoStorage = require("../helpers/EmoStorage.js");

let emo_storage = new EmoStorage();
let emoticons = [];
let emo_info = {};
let urls = {};

let keys = [Const.CHROME_SYNC_KEY, Const.CHROME_SYNC_GROUP_KEY, Const.CHROME_SYNC_ROOM_KEY, Const.CHROME_SYNC_DISABLE_NOTIFY_ROOM_KEY, Const.CHROME_LOCAL_KEY];

setTimeout(() => {
    for (let i in keys) {
        chrome.runtime.sendMessage({action: "init", data: keys[i]}, () => {});
    }
}, 500);

setTimeout(() => {
    for (let i in keys) {
        chrome.runtime.sendMessage({action: "getLocalStorage", data: keys[i]}, (response) => {
            localStorage[keys[i]] = response;
        });
    }
}, 1000);

setTimeout(() => {
    init(true);
}, 1500);

function init(inject_script) {
    let info = localStorage[Const.CHROME_SYNC_KEY];
    info = info === "undefined" ? undefined : JSON.parse(info);
    emo_info = info;
    if (!$.isEmptyObject(info)) {
        for (let key in info) {
            let emo_data = info[key];
            let url = common.getEmoticonDataUrl(emo_data.data_name, emo_data.data_url);
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
    let features = ["mention", "shortcut", "thumbnail", "highlight", "emoticon"];
    features.forEach((feature) => {
        let feature_name = `${feature}_status`;
        info[feature_name] = info[feature_name] === undefined ? true : info[feature_name];
        common.setStatus(feature, info[feature_name]);
    });
    emo_storage.setFeatureStatus(info);
    if (info.emoticon_status == false) {
        addInjectedScript();
    } else {
        getData(info, inject_script);
    }

    let data = localStorage[Const.CHROME_SYNC_GROUP_KEY];
    localStorage[Const.LOCAL_STORAGE_GROUP_MENTION] = data === "undefined" ? [] : data;

    data = localStorage[Const.CHROME_SYNC_ROOM_KEY];
    localStorage[Const.LOCAL_STORAGE_ROOM_SHORTCUT] = data === "undefined" ? [] : data;

    data = localStorage[Const.CHROME_SYNC_DISABLE_NOTIFY_ROOM_KEY];
    localStorage[Const.LOCAL_STORAGE_DISABLE_NOTIFY_ROOM] = data === "undefined" ? [] : data;
}

function getData(info, inject_script) {
    let loaded_count = 0;
    let emo_count = common.getObjectLength(urls);
    let failed = false;
    localStorage.removeItem("failed_data");
    $.each(urls, (data_name, url) => {
        $.getJSON(url)
            .done((data) => {
                if (typeof(data.data_version) !== "undefined" && typeof(data.emoticons) !== "undefined") {
                    data.data_url = urls[data.data_name];
                    let priority = (emo_info[data.data_name] && emo_info[data.data_name].priority) ? emo_info[data.data_name].priority : 0;
                    emo_storage.pushData(data, priority);
                    pushEmoticons(data.emoticons, priority, data.data_name);
                }
            }).fail(() => {
                failed = true;
                delete emo_info[data_name];
                pushFailedData(data_name);
            }).always(() => {
                if (++loaded_count === emo_count) {
                    if (!failed) {
                        // emo_storage.syncData();
                    }
                    localStorage[Const.LOCAL_STORAGE_DATA_KEY] = JSON.stringify(emoticons);
                    localStorage["emoticon_data_version"] = parseDataName(emo_info);
                    if (inject_script !== undefined && inject_script) {
                        addInjectedScript();
                    } else {
                        // runFunction("reloadEmoticions()");
                    }
                }
            });
    });
}

function pushFailedData(data_name) {
    let data = localStorage["failed_data"] ? JSON.parse(localStorage["failed_data"]) : [];
    data.push(data_name);
    localStorage["failed_data"] = JSON.stringify(data);
}

function parseDataName(data) {
    if (data.data_name !== undefined && data.data_version !== undefined) {
        return `${data.data_name}_${data.data_version}`;
    }
    let data_name = "";
    for (let key in data) {
        if (data[key].data_name !== undefined) {
            data_name += `${data[key].data_name}_${data[key].data_version}  `;
        }
    }
    return data_name;
}

function pushEmoticons(emos, priority, data_name) {
    for (let i = 0; i < emos.length; i++) {
        let repeated = false;
        emos[i].priority = priority;
        emos[i].data_name = data_name;
        for (let j = 0; j < emoticons.length; j++) {
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
    setTimeout(() => {
        injectJsFile("internals/all.js");
    }, Const.DELAY_TIME
    );

    setInterval(loadAdvertisement, Const.ADVERTISEMENT_LOAD_TIMEOUT);
}

function preLoad() {
    let text = "<li id=\"_chatppPreLoad\"><span id=\"chatppPreLoad\" class=\"icoSizeSmall\"></span></li>";
    $("#_chatSendTool").append(text);
    let chatpp_pre_load = $("#chatppPreLoad");
    let delay_time = Const.DELAY_TIME / 1000;
    let pre_load_interval = setInterval(() => {
        if (--delay_time <= 0) {
            $("#_chatppPreLoad").remove();
            window.clearInterval(pre_load_interval);
        }
        let text = `Chat++ will be loaded in about ${delay_time} second${delay_time > 1 ? "s" : ""}`;
        chatpp_pre_load.html(text);
    }, 1000);
}

function injectJsFile(file_name) {
    let script = document.createElement("script");
    script.src = common.getExtensionPageUrl(`js/${file_name}`);
    (document.documentElement).appendChild(script);
}

function injectCssFile(file_name) {
    let css_link = $("<link>", {
        rel: "stylesheet",
        type: "text/css",
        href: common.getExtensionPageUrl(`css/${file_name}`)
    });
    css_link.appendTo("head");
}

function loadAdvertisement() {
    $.getJSON(Const.ADVERTISEMENT_URL)
        .done((data) => {
            if (!$.isEmptyObject(data)) {
                localStorage["chatpp_advertisement"] = JSON.stringify(data);
            }
        });
}
