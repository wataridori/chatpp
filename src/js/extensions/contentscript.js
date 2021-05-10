let Const = require("../helpers/Const.js");
let common = require("../helpers/Common.js");
let Storage = require("../helpers/Storage.js");
let EmoStorage = require("../helpers/EmoStorage.js");
let ChromeStorageLocal = require("../helpers/ChromeStorageLocal.js");
let storage = new Storage();
let emo_storage = new EmoStorage();
let emoticons = [];
let emo_info = {};
let urls = {};

init(true);
function init(inject_script) {
    storage.get(Const.CHROME_SYNC_KEY, (info) => {
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
            info.theme_status = false;
        }
        emo_info = info;
        localStorage.force_update_version = info.force_update_version;
        let features = ["mention", "shortcut", "thumbnail", "emoticon", "legacy_theme", "shorten_link"];
        let features_default_false = ["legacy_theme", "shorten_link"];
        features.forEach((feature) => {
            let feature_name = `${feature}_status`;
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
        if(info.legacy_theme_status) {
            setTimeout(() => {
                $("<style type=\"text/css\"> .iPjyiK{background: rgb(221, 235, 215) !important;};</style>").appendTo("head");
                $("<style type=\"text/css\"> .iPjyiK{background: rgb(221, 235, 215) !important;};</style>").appendTo("head");
                $("<style type=\"text/css\"> .chatTimeLineReply p{display: none !important;};</style>").appendTo("head");
            }, Const.DELAY_TIME + 1
        )};

        setTimeout(() => {
            let target = document.getElementById("salTag");
            target.addEventListener('click', (event) => {
                var textArea = document.getElementsByClassName("chatInput__textarea");
                let start = textArea[0].selectionStart;
                let finish = textArea[0].selectionEnd;
                var selectedData = textArea[0].value.substring(start, finish);
                let longUrl = getFirstUrl(selectedData);

                if (!longUrl) {
                    return;
                }

                let urlEndPoint = Const.SAL_URL;
                chrome.runtime.sendMessage({contentScriptQuery: "fetchShortenLink", urlEndPoint, longUrl}, (data) => {
                    if (data) {
                        if (textArea[0].value == selectedData) {
                            var message = String(selectedData).replace(data.target, data.shortUrl);
                        } else {
                            var message = String(textArea[0].value).replace(data.target, data.shortUrl);
                        }
    
                        textArea[0].value = message;
                    }
                });
            })

        }, Const.DELAY_TIME + 1000);

        if (info.shorten_link_status) {
            setTimeout(() => {
                var target = document.getElementsByClassName("chatInput__textarea");
                target[0].addEventListener('paste', (event) => {
                    let pastedData = event.clipboardData.getData('text');
                    let longUrl = getFirstUrl(pastedData);
        
                    if (!longUrl || longUrl.length < Const.LIMIT_STRING) {
                        return;
                    }
        
                    let urlEndPoint = Const.SAL_URL;
                    chrome.runtime.sendMessage({contentScriptQuery: "fetchShortenLink", urlEndPoint, longUrl}, (data) => {
                        if (data) {
                            if (target[0].value == pastedData) {
                                var message = String(pastedData).replace(data.target, data.shortUrl);
                            } else {
                                var message = String(target[0].value).replace(data.target, data.shortUrl);
                            }
        
                            target[0].value = message;
                        }
                    });
                });
            }, Const.DELAY_TIME + 1);
        };
    });

    localStorage[Const.LOCAL_STORAGE_GROUP_MENTION] = [];
    storage.get(Const.CHROME_SYNC_GROUP_KEY, (data) => {
        if (!$.isEmptyObject(data)) {
            localStorage[Const.LOCAL_STORAGE_GROUP_MENTION] = JSON.stringify(data);
        }
    });

    localStorage[Const.LOCAL_STORAGE_ROOM_SHORTCUT] = [];
    storage.get(Const.CHROME_SYNC_ROOM_KEY, (data) => {
        if (!$.isEmptyObject(data)) {
            localStorage[Const.LOCAL_STORAGE_ROOM_SHORTCUT] = JSON.stringify(data);
        }
    });

    localStorage[Const.LOCAL_STORAGE_DISABLE_NOTIFY_ROOM] = [];
    storage.get(Const.CHROME_SYNC_DISABLE_NOTIFY_ROOM_KEY, (data) => {
        if (!$.isEmptyObject(data)) {
            localStorage[Const.LOCAL_STORAGE_DISABLE_NOTIFY_ROOM] = JSON.stringify(data);
        }
    });
}

function getData(info, inject_script) {
    let loaded_count = 0;
    let emo_count = common.getObjectLength(urls);
    let failed = false;
    localStorage.removeItem("failed_data");
    $.each(urls, (data_name, url) => {
        let query = getUrlQuery(url);
        if (!query) {
            return false;
        }
        chrome.runtime.sendMessage({contentScriptQuery: "fetchEmoticonsData", query, data_name}, (data) => {
            if (data.success) {
                if (typeof(data.data_version) !== "undefined" && typeof(data.emoticons) !== "undefined") {
                    data.data_url = urls[data.data_name];
                    let priority = (emo_info[data.data_name] && emo_info[data.data_name].priority) ? emo_info[data.data_name].priority : 0;
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
                let chrome_storage_local = new ChromeStorageLocal();
                chrome_storage_local.get((local_data) => {
                    let version_name = "";
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
    let supported_urls = ["https://dl.dropboxusercontent.com/", "https://www.dropbox.com/"];
    for (let supported_url of supported_urls) {
        if (url.startsWith(supported_url)) {
            return url.substring(supported_url.length);
        }
    }

    return false;
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
    setTimeout(() => {
        injectJsFile("internals/all.js");
    }, Const.DELAY_TIME
    );

    setInterval(loadAdvertisement, Const.ADVERTISEMENT_LOAD_TIMEOUT);
}

function preLoad() {
    let chat_send_tool = $(".chatInput div").first();
    chat_send_tool.append(
        $("<li>", { id: "_chatppPreLoad", css: {
            "display": "inline-block"
        } }).append(
            $("<span>", { id: "chatppPreLoad" })
        )
    );
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
    chrome.runtime.sendMessage({contentScriptQuery: "fetchAdvertisementData"}, (data) => {
        if (!$.isEmptyObject(data)) {
            localStorage["chatpp_advertisement"] = JSON.stringify(data);
        }
    });
}

function getFirstUrl(string) {
    var pattern = /(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._\+~#!=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#!?&//=]*)/;
    var match = string.match(pattern);
    if (match) {
        return match[0];
    }

    return match;
}
