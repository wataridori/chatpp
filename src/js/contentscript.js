// Const
var LOCAL_STORAGE_DATA_KEY = "YACEP_EMO_DATA";
var LOCAL_STORAGE_INFO_KEY = "YACEP_EMO_INFO";

var CHROME_SYNC_KEY = "YACEP_CHROME_SYNC_DATA";
var CHROME_LOCAL_KEY = "YACEP_CHROME_LOCAL_DATA";

var CODE_TYPE_OFFENSIVE = "OFFENSIVE";
var CODE_TYPE_DEFENSIVE = "DEFENSIVE";

var DEFAULT_DATA_URL = "https://dl.dropboxusercontent.com/sh/rnyip87zzjyxaev/AACBVYHPxG88r-1BhYuBNkmHa/new.json?dl=1";

var inject_script_timer;
var DELAY_TIME = 5;

init(true);

function init(inject_script) {
    chrome.storage.sync.get(CHROME_SYNC_KEY, function(info) {
        info = info[CHROME_SYNC_KEY];
        var url = "";
        if (!$.isEmptyObject(info)) {
            console.log("Getting Data Info from Chrome Storage");
            if (info.data_name == 'Default' && info.data_url != DEFAULT_DATA_URL) {
                url = DEFAULT_DATA_URL;
            } else {
                url = info.data_url;
            }
        }
        if (url == "") {
            console.log("No information from Chrome Storage. Using default Version");
            url = DEFAULT_DATA_URL;
        }
        if (info == undefined) {
            info = {};
        }
        if (info.ext_status == false) {
            console.log("YACEP is disabled!");
        } else {
            getData(url, info, inject_script);
        }
    });
}

function getData(url, info, inject_script) {
    $.getJSON(url)
        .done(function(data) {
            if (typeof(data.data_version) !== 'undefined' && typeof(data.emoticons) !== 'undefined') {
                chrome.storage.local.get(CHROME_LOCAL_KEY, function(local_data) {
                    var code_type = "";
                    if (!$.isEmptyObject(local_data[CHROME_LOCAL_KEY])) {
                        code_type = local_data[CHROME_LOCAL_KEY]['code_type'];
                    }
                    if (code_type == undefined || code_type == "") {
                        code_type = CODE_TYPE_DEFENSIVE;
                    }
                    data.data_url = url;
                    var current_time = (new Date).toLocaleString();
                    console.log("You are using Yacep!" + ". Data Name: " + data.data_name + ". Data Version: "
                        + data.data_version + ". Date sync: " + current_time + ". Code Version: " + code_type);
                    localStorage[LOCAL_STORAGE_DATA_KEY] = JSON.stringify(data.emoticons);
                    localStorage['yacep_code_type'] = code_type;
                    localStorage['yacep_data_version'] = data.data_name + ' ' + data.data_version + ' ' + current_time;
                    info.data_name = data.data_name;
                    info.data_version = data.data_version;
                    info.data_changelog = data.data_changelog;
                    info.date_sync = current_time;
                    console.log(info);
                    localStorage[LOCAL_STORAGE_INFO_KEY] = JSON.stringify(info);
                    var sync = {};
                    sync[CHROME_SYNC_KEY] = info;
                    chrome.storage.sync.set(sync, function() {});
                    if (inject_script != undefined && inject_script) {
                        addInjectedScript();
                    } else {
                        runFunction('setYacepTextLabel()');
                    }
                });
            }
        }).fail(function(jqxhr, textStatus, error) {
            var err = textStatus + ", " + error;
            console.log( "Request Failed: " + err );
        });
}


function addInjectedScript() {
    injectJsFile('fuse.min.js');
    injectJsFile('caretposition.js');
    var counter = 0;
    inject_script_timer = setInterval(
        function(){
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