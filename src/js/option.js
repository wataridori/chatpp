var LOCAL_STORAGE_INFO_KEY = "YACEP_EMO_INFO";
var LOCAL_STORAGE_DATA_KEY = "YACEP_EMO_DATA";
var CHROME_SYNC_KEY = "CHATPP_CHROME_SYNC_DATA";

var DEFAULT_DATA_URL = "https://dl.dropboxusercontent.com/sh/rnyip87zzjyxaev/AACBVYHPxG88r-1BhYuBNkmHa/new.json?dl=1";
var DEFAULT_IMG_HOST = "http://chatpp.thangtd.com/";

var emo_storage;
var emoticons = [];
var emo_info = {};
var urls = {};
var init = false;

var official_emos = {
    Default: {
        name: "Default",
        link: "https://dl.dropboxusercontent.com/sh/rnyip87zzjyxaev/AACBVYHPxG88r-1BhYuBNkmHa/new.json?dl=1",
        description: "The default Emoticons data of Chat++"
    },
    Vietnamese: {
        name: "Vietnamese",
        link: "https://www.dropbox.com/s/1zq7oqg11pkye6m/vn-emo.json?dl=1",
        description: "Yet another data for people who want to use Vietnamese Emoticons"
    },
    Japanese: {
        name: "Japanese",
        link: "https://dl.dropboxusercontent.com/s/59gwiqg9bipvz40/jp-emo.json?dl=1",
        description: "Yet another data for people who want to use Japanese Emoticons"
    },
    Skype: {
        name: "Skype",
        link: "https://www.dropbox.com/s/6wjwy1x9l7bs9xh/skype.json?dl=1",
        description: "Skype Original Emoticons"
    }
};

$(function() {
    chrome.storage.sync.get(CHROME_SYNC_KEY, function(info) {
        if (!$.isEmptyObject(info)) {
            info = info[CHROME_SYNC_KEY];
            emo_info = info;
            console.log(info);
            for (var key in info) {
                var emo_data = info[key];
                if (emo_data.data_name == "Default" && emo_data.data_url != DEFAULT_DATA_URL) {
                    var url = DEFAULT_DATA_URL;
                } else {
                    var url = emo_data.data_url;
                }
                if (url) {
                    urls[emo_data.data_name] = url;
                }
            }
        }
        if ($.isEmptyObject(urls)) {
            init = true;
            urls["Default"] = DEFAULT_DATA_URL;
        }
        fillDataTable();

        if (init) {
            getData(urls, reload);
        } else {
            getData(urls, fillTable);
            showOfficialData();
        }
    });

    var app_detail = chrome.app.getDetails();
    var version = app_detail.version;
    $("#chatpp_version").html(version);
    $("#btn-reset").click(function() {
        bootbox.dialog({
            title: "<span class='text-primary'>Reset Emoticon Data",
            message: "<span class='text-danger'>Your are trying to reset emoticon data, which will clear your current data information.<br>" +
                "This action cannot be undone. Are you sure ?</span>",
            buttons: {
                success: {
                    label: "OK!",
                    className: "btn-success",
                    callback: function() {
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
    })

    $("#btn-load").click(function() {
        if ($("#data-select").val() == "default") {
            getData(DEFAULT_DATA_URL, reload);
        } else {
            var url = $("#data-url").val();
            if (!validateUrl(url)) {
                bootbox.alert("Invalid URL! Make sure your inputted URL is correct, and start with https!");
            } else {
                bootbox.dialog({
                    message: 'The data from <a href="' + url + '">' + url + '</a> may contain undesirable emoticons and we will not be responsible for it' ,
                    title: "<span class='text-danger'>Your are trying to load data that is not officially supported by Chat++.<br/> Do you want to continue ?</span>",
                    buttons: {
                        success: {
                            label: "OK!",
                            className: "btn-success",
                            callback: function() {
                                urls["added"] = url;
                                getData(urls, reload);
                            }
                        },
                        danger: {
                            label: "Cancel!",
                            className: "btn-danger",
                            callback: function() {

                            }
                        }
                    }
                });
            }
        }
    });

    $("#data-select").change(function (){
        var val = $(this).val();
        if (val == "default") {
            $("#url-input-div").hide("slow");
        } else {
            $("#url-input-div").show("slow");
        }
    });
});

function validateUrl(url) {
    var regexp = /(https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
    return regexp.test(url);
}

function getData(urls, callback) {
    if ($.isEmptyObject(urls)) {
        urls["Default"] = DEFAULT_DATA_URL;
    }
    emo_storage = new EmoStorage();
    var loaded_urls = [];
    for (var i in urls) {
        var url = urls[i];
        if (loaded_urls.indexOf(url) === -1) {
            loaded_urls.push(url);
        } else {
            continue;
        }
        $.getJSON(url)
            .done(function(data) {
                if (typeof(data.data_version) !== "undefined" && typeof(data.emoticons) !== "undefined") {
                    data.data_url = urls[data.data_name] ? urls[data.data_name] : urls["added"];
                    var priority = getPriority(data.data_name);
                    emo_storage.pushData(data, priority);
                    pushEmoticons(data.emoticons, priority, data.data_name);
                    if (emo_storage.data_count === getObjectLength(urls)) {
                        emo_storage.syncData(callback);
                    }
                } else {
                    bootbox.alert("Invalid data structure!");
                }
            }).fail(function(jqxhr, textStatus, error) {
                var message = "<span class='text-danger'>There is an error occurred when loading or parsing the following url: <br>" +
                    "<a href='" + url + "'>" + url + "</a>" +
                    "<br>It may be because of the failure in downloading file or invalid file format.<br>" +
                    "Check your file data carefully and try to reload again.</span>"
                bootbox.alert(message);
            });
    }
}

function reload() {
    location.reload();
}

function getObjectLength(object) {
    return Object.keys(object).length;
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
    for (var data_name in official_emos) {
        if (emo_info[data_name] === undefined) {
            var new_button = '<div class="col-md-12 official-data"><button class="btn btn-info btn-sm btn-official-data" data-name="' + data_name + '">Add ' + data_name + '</button>'
                + '<span class="text-primary" style="padding-left: 20px"><strong>' + official_emos[data_name].description + '</strong></span>'
                + '</div><br>';
            official.append(new_button);
        }
    }

    $(".btn-official-data").click(function() {
        var data_name = $(this).data("name");
        var url = official_emos[data_name].link;
        if (validateUrl(url)) {
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
            if (emoticons[j].emo.regex === emos[i].regex) {
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
    var info = JSON.parse(localStorage[LOCAL_STORAGE_INFO_KEY]);
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
    $.each(emoticons, function(key, data) {
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
    var table =
        '<div id="emoticons-table">' +
            '<div class="panel panel-warning">' +
                '<div class="panel-heading">' +
                    name +
                '</div>' +
                '<table class="table table-emo table-bordered" id="table-emo-' + name + '">' +
                    '<thead>' +
                        '<tr class="success text-center">' +
                        '<th colspan="2" class="text-center">Emo</th>' +
                        '<th colspan="2" class="text-center">Emo</th>' +
                        '<th colspan="2" class="text-center">Emo</th>' +
                        '<th colspan="2" class="text-center">Emo</th>' +
                        '</tr>' +
                    '</thead>' +
                    '<tbody>' +
                    '</tbody>' +
                '</table>' +
            '</div>'
        '</div>';

    $("#emoticons-table").append(table);
}

function createTableTd(data) {
    var src = htmlEncode(getEmoUrl(data.emo.src));
    var row = "";
    var class_name = data.status ? "danger" : "info";
    row += "<td class='" + class_name + " text-center'>" + data.emo.key + "</td>";
    row += "<td class='text-center'><img class='emoticon' src='" + src + "'/> </td>";
    return row;
}

function createDataTableText(emo_data) {
    $("#table-data > tbody").html("");
    var table_text = "";
    var first = true;
    $.each(emo_data.slice().reverse(), function(key, data) {
        if (data.data_name !== undefined && data.data_url !== undefined) {
            var disabled = first ? "disabled" : "";
            first = false;
            table_text += "<tr>";
            table_text += "<td class='text-center'>" + data.data_name + "</td>";
            table_text += "<td class='text-center'>" + data.data_version + "</td>";
            table_text += "<td class='text-center'>" + createATag(data.data_url) + "</td>";
            table_text += "<td class='text-center'>" +
                " <button class='btn btn-primary btn-sm btn-data-move-up " + disabled + "' data-priority='" + data.priority + "' id='btn-move-up" + data.data_name + "'> Move Up </button>" +
                " <button class='btn btn-warning btn-sm btn-data-remove' data-name='" + data.data_name + "' id='btn-" + data.data_name + "'> Remove </button></td>";
            table_text += "</tr>";
        }
    });
    $("#table-data").find("tbody").append(table_text);
}

function fillDataTable() {
    var emo_info_array = emoDataObjectToArray(emo_info);
    createDataTableText(emo_info_array);
    $.each(emo_info_array.slice().reverse(), function(key, data) {
        if (data.data_name !== undefined && data.data_url !== undefined) {
            createEmoticonsTable(data.data_name);
        }
    });
    $("#btn-save").click(function() {
        var new_emo_storage = new EmoStorage();
        for (var i in emo_info_array) {
            new_emo_storage.pushData(emo_info_array[i], emo_info_array[i].priority);
        }
        new_emo_storage.syncData(reload);
    });
    $("#table-data").on("click", "button", function() {
        var button = $(this);
        if (button.hasClass("btn-data-move-up")) {
            var priority = button.data("priority");
            var temp;
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
    $.each(data, function(key, emo) {
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
    }).prop("outerHTML");;
}

function htmlEncode(value){
    return $("<div/>").text(value).html();
}

function getEmoUrl(img) {
    if (img.indexOf("https://") == 0 || img.indexOf("http://") == 0) {
        return img;
    }
    return DEFAULT_IMG_HOST + "img/emoticons/" + img;
}

function EmoStorage() {
    this.data = {};
    this.data_count = 0;
    var features = ["mention", "shortcut", "thumbnail", "highlight", "emoticon"];
    for (var i in features) {
        var feature_name = features[i] + "_status";
        this.data[feature_name] = emo_info[feature_name] === undefined ? true : emo_info[feature_name];
    }
}

EmoStorage.prototype.pushData = function(inputed_data, priority) {
    this.data[inputed_data.data_name] = {
        priority: priority,
        data_name: inputed_data.data_name,
        data_url: inputed_data.data_url,
        data_version: inputed_data.data_version,
        date_sync: (new Date()).toLocaleString()
    };
    this.data_count++;
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
        if (typeof callback !== "undefined") {
            callback();
        }
    });
};

