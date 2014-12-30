// Const
var LOCAL_STORAGE_DATA_KEY = "YACEP_EMO_DATA";
var LOCAL_STORAGE_INFO_KEY = "YACEP_EMO_INFO";
var LOCAL_STORAGE_EMOTICON_STATUS = "CHATPP_EMOTICON_STATUS";
var LOCAL_STORAGE_MENTION_STATUS = "CHATPP_MENTION_STATUS";

var CHROME_SYNC_KEY = "CHATPP_CHROME_SYNC_DATA";
var CHROME_LOCAL_KEY = "CHATPP_CHROME_LOCAL_DATA";

var CODE_TYPE_OFFENSIVE = "OFFENSIVE";
var CODE_TYPE_DEFENSIVE = "DEFENSIVE";

var DEFAULT_DATA_URL = "https://dl.dropboxusercontent.com/sh/rnyip87zzjyxaev/AACBVYHPxG88r-1BhYuBNkmHa/new.json?dl=1";

var emo_storage;
var emoticons = [];
var emo_info = {};
var inject_script_timer;
var DELAY_TIME = 5;
var urls = {};

init(true);

function init(inject_script) {
    chrome.storage.sync.get(CHROME_SYNC_KEY, function(info) {
        info = info[CHROME_SYNC_KEY];
        emo_info = info;
        var url = "";
        if (!$.isEmptyObject(info)) {
            for (key in info) {
                var emo_data = info[key];
                if (emo_data.data_name === 'Default' && emo_data.data_url !== DEFAULT_DATA_URL) {
                    url = DEFAULT_DATA_URL;
                } else {
                    url = emo_data.data_url;
                }
                if (url) {
                    urls[emo_data.data_name] = url;
                }
            }
        }
        if (urls.length === 0) {
            urls['Default'] = DEFAULT_DATA_URL;
        }
        if (info === undefined) {
            info = {};
        }
        if (info.mention_status == false) {
            console.log("Mention Feature is disabled!");
            localStorage[LOCAL_STORAGE_MENTION_STATUS] = false;
        } else {
            localStorage[LOCAL_STORAGE_MENTION_STATUS] = true;
        }
        if (info.emoticon_status == false) {
            console.log("Emoticon Feature is disabled!");
            localStorage[LOCAL_STORAGE_EMOTICON_STATUS] = false;
            addInjectedScript();
        } else {
            localStorage[LOCAL_STORAGE_EMOTICON_STATUS] = true;
            getData(info, inject_script);
        }
    });
}

function getData(info, inject_script) {
    var loaded_count = 0;
    var emo_count = getObjectLength(urls);
    var emo_storage = new EmoStorage();
    for (data_name in urls) {
        var url = urls[data_name];
        $.getJSON(url)
            .done(function(data) {
                loaded_count++;
                var last = loaded_count === emo_count;
                if (typeof(data.data_version) !== 'undefined' && typeof(data.emoticons) !== 'undefined') {
                    data.data_url = urls[data.data_name];
                    var priority = (emo_info[data.data_name] && emo_info[data.data_name].priority) ? emo_info[data.data_name].priority : 0;
                    emo_storage.pushData(data, priority);
                    pushEmoticons(data.emoticons, priority);
                    if (last) {
                        emo_storage.syncData();
                        chrome.storage.local.get(CHROME_LOCAL_KEY, function(local_data) {
                            var code_type = '';
                            var version_name = '';
                            if (!$.isEmptyObject(local_data[CHROME_LOCAL_KEY])) {
                                code_type = local_data[CHROME_LOCAL_KEY]['code_type'];
                                version_name = local_data[CHROME_LOCAL_KEY]['version_name'];
                            }
                            if (code_type === undefined || code_type === '') {
                                code_type = CODE_TYPE_DEFENSIVE;
                            }
                            var current_time = (new Date).toLocaleString();
                            console.log("You are using Chat++!. Date sync: " + current_time + ". Version: " + version_name +  ". Code Type: " + code_type);
                            localStorage[LOCAL_STORAGE_DATA_KEY] = JSON.stringify(emoticons);
                            localStorage['yacep_code_type'] = code_type;
                            localStorage['chatpp_version_name'] = version_name;
                            localStorage['yacep_data_version'] = parseDataName(emo_info);
                            if (inject_script !== undefined && inject_script) {
                                addInjectedScript();
                            } else {
                                // runFunction('reloadEmoticions()');
                            }
                        });
                    }
                }
            }).fail(function(jqxhr, textStatus, error) {
                var err = textStatus + ", " + error;
                console.log( "Request Failed: " + err );
            });
    }
}

function parseDataName(data) {
    if (data.data_name !== undefined && data.data_version !== undefined) {
        return data.data_name + "_" + data.data_version;
    }
    var data_name = '';
    for (key in data) {
        if (data[key].data_name !== undefined) {
            data_name += data[key].data_name + '_' + data[key].data_version + '  ';
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
    injectJsFile('fuse.min.js');
    injectJsFile('caretposition.js');
    var counter = 0;
    inject_script_timer = setInterval(
        function() {
            if (counter === DELAY_TIME) {
                window.clearInterval(inject_script_timer);
                injectJsFile('emo.js');
                injectJsFile('mention.js');
            } else {
                counter++;
            }
        }, 1000
    );
}

function injectJsFile(file_name) {
    var script = document.createElement('script');
    script.src = chrome.extension.getURL('js/' + file_name);
    (document.documentElement).appendChild(script);
}

function runFunction(func) {
    $("body").append($("<script />", {
        html: func
    }));
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
    var sync = {};
    sync[CHROME_SYNC_KEY] = this.data;
    chrome.storage.sync.set(sync, function() {
        if (typeof callback != 'undefined') {
            callback();
        }
    });
};