var LOCAL_STORAGE_INFO_KEY = "YACEP_EMO_INFO";
var LOCAL_STORAGE_DATA_KEY = "YACEP_EMO_DATA";
var CHROME_SYNC_KEY = "CHATPP_CHROME_SYNC_DATA";

var DEFAULT_DATA_URL = "https://dl.dropboxusercontent.com/sh/rnyip87zzjyxaev/AACBVYHPxG88r-1BhYuBNkmHa/new.json?dl=1";
var DEFAULT_IMG_HOST = "http://chatpp.thangtd.com/";

var emo_storage;
var emoticons = [];
var emo_info = {};

var init = false;

$(function() {
    var urls = {};
    chrome.storage.sync.get(CHROME_SYNC_KEY, function(info) {
        if (!$.isEmptyObject(info)) {
            info = info[CHROME_SYNC_KEY];
            emo_info = info;
            console.log(info);
            for (key in info) {
                var emo_data = info[key];
                if (emo_data.data_name == 'Default' && emo_data.data_url != DEFAULT_DATA_URL) {
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
            init = true;
            urls['Default'] = DEFAULT_DATA_URL;
        }
        fillDataTable(info);

        if (init) {
            getData(urls, reload);
        } else {
            getData(urls, fillTable);
        }
    });

    var app_detail = chrome.app.getDetails();
    var version = app_detail.version;
    $('#chatpp_version').html(version);
    $('#btn-reset').click(function() {
        emo_info = {};
        getData({}, reload);
    });
    $('#btn-load').click(function() {
        if ($('#data-select').val() == 'default') {
            getData(DEFAULT_DATA_URL, reload);
        } else {
            var url = $('#data-url').val();
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
                                urls['added'] = url;
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

    $('#data-select').change(function (){
        var val = $(this).val();
        if (val == 'default') {
            $('#url-input-div').hide("slow");
        } else {
            $('#url-input-div').show("slow");
        }
    });

    $('#btn-show-changelog').click(function() {
        var changelog = $('#changelog');
        if (changelog.is(':visible')) {
            changelog.hide('slow', function(){
                $('#btn-show-changelog').removeClass('btn-danger').addClass('btn-success').html('Show Changelog');
            });
        } else {
            showChangelog();
        }
    });
});

function validateUrl(url) {
    var regexp = /(https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
    return regexp.test(url);
}

function verifyInfoLocalStorage() {
    return localStorage[LOCAL_STORAGE_INFO_KEY] != 'undefined' && !$.isEmptyObject(localStorage[LOCAL_STORAGE_INFO_KEY]);
}

function verifyDataLocalStorage() {
    return localStorage[LOCAL_STORAGE_DATA_KEY] != 'undefined' && !$.isEmptyObject(localStorage[LOCAL_STORAGE_DATA_KEY]);
}

function getData(urls, callback) {
    if ($.isEmptyObject(urls)) {
        urls['Default'] = DEFAULT_DATA_URL;
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
                if (typeof(data.data_version) !== 'undefined' && typeof(data.emoticons) !== 'undefined') {
                    var index = getObjectLength(emo_storage.data);
                    var last = index === getObjectLength(urls) - 1;
                    data.data_url = urls[data.data_name] ? urls[data.data_name] : urls['added'];
                    var priority = getPriority(data.data_name);
                    emo_storage.pushData(data, priority);
                    pushEmoticons(data.emoticons, priority);
                    if (last) {
                        emo_storage.syncData(callback);
                    }
                } else {
                    bootbox.alert("Invalid data structure!");
                }
            }).fail(function( jqxhr, textStatus, error ) {
                var err = textStatus + ", " + error;
                bootbox.alert("Request Failed: " + err);
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
    for (key in emo_info) {
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

function validateEmoData(data) {
    return !$.isEmptyObject(data) && $.isArray(data.data) && data.date_sync !== undefined;
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

function clearTable() {
    $('#table-emo > tbody').html("");
}

function fillTable() {
    clearTable();
    var info = JSON.parse(localStorage[LOCAL_STORAGE_INFO_KEY]);
    if (info.data_name != "Default" && info.data_url) {
        $('#data-select').val('custom');
        $('#data-url').val(info.data_url);
        $('#url-input-div').show("slow");
        $('#btn-show-changelog').show("slow");
    }
    var table_text = '';
    $.each(emoticons, function(key, emo) {
        if (key % 4 === 0) {
            table_text += "<tr>";
        }
        table_text += createTableTd(emo);
        if (key % 4 === 3) {
            table_text += "</tr>";
        }
    });
    $('#table-emo').find('tbody').append(table_text);
}

function createTableTd(data) {
    var src = getEmoUrl(data.src);
    var row = "";
    row += "<td class='info text-center'>" + data.key + "</td>";
    row += "<td class='text-center'><img src='" + src + "'/> </td>";
    //row += "<td><button class='btn btn-warning btn-sm action' id='btn-" + data.key + "'> Hide </button></td>";
    return row;
}

function fillDataTable(info) {
    var table_text = '';
    $.each(info, function(key, data) {
        if (data.data_name !== undefined && data.data_url !== undefined) {
            table_text += "<tr>";
            table_text += "<td class='text-center'>" + data.priority + "</td>";
            table_text += "<td class='text-center'>" + data.data_name + "</td>";
            table_text += "<td class='text-center'>" + data.data_version + "</td>";
            table_text += "<td class='text-center'>" + createATag(data.data_url) + "</td>";
            table_text += "<td class='text-center'>" + createATag(data.data_changelog) + "</td>";
            table_text += "<td class='text-center'><button class='btn btn-warning btn-sm btn-data-remove' data-name='" + data.data_name
            + "' id='btn-" + data.data_name + "'> Remove </button></td>";
            table_text += "</tr>";
        }
    });
    $('#table-data').find('tbody').append(table_text);
    $('.btn-data-remove').click(function() {
        var name = $(this).data('name');
        emo_storage.removeData(name);
        emo_storage.syncData(reload);
    });
}

function createATag(url) {
    if (!url) {
        return '';
    }
    return $('<a>', {
        href: url,
        text: url,
        target: '_blank'
    }).prop('outerHTML');;
}

function getEmoUrl(img) {
    if (img.indexOf('https://') == 0 || img.indexOf('http://') == 0) {
        return img;
    }
    return DEFAULT_IMG_HOST + "img/emoticons/" + img;
}

function showChangelog() {
    var changelog_div = $('#changelog');
    if (changelog_div.find('ul').length) {
        changelog_div.show('slow', function(){
            $('#btn-show-changelog').removeClass('btn-success').addClass('btn-danger').html('Hide Changelog');
        });
        return;
    }
    var info = JSON.parse(localStorage[LOCAL_STORAGE_INFO_KEY]);

    var changelog_url = info["data_changelog"];
    if (changelog_url !== undefined && changelog_url !== "") {
        $.getJSON(changelog_url)
            .done(function(data) {
                if (data.data_name !== undefined && data.changelog !== undefined) {
                    var html = "";
                    $.each(data.changelog, function(version, changes) {
                        var log = '<h4 class="text-danger">' + version + '</h4><ul>';
                        $.each(changes, function(index, change) {
                            log += '<li class="text-primary">' + change + '</li>';
                        });
                        log += '</ul>';
                        html = log + html;
                    });
                    changelog_div.html(html);
                    changelog_div.show('slow', function(){
                        $('#btn-show-changelog').removeClass('btn-success').addClass('btn-danger').html('Hide Changelog');
                    });
                } else {
                    bootbox.alert("Invalid data changelog structure!");
                }
            }).fail(function( jqxhr, textStatus, error ) {
                var err = textStatus + ", " + error;
                bootbox.alert("Request Failed: " + err);
            });
    } else {
        bootbox.alert("Current Data Version does not have any change logs!");
    }
}

function EmoStorage() {
    this.data = {};
}

EmoStorage.prototype.pushData = function(inputed_data, priority) {
    this.data[inputed_data.data_name] = {
        priority: priority,
        data_name: inputed_data.data_name,
        data_url: inputed_data.data_url,
        data_changelog: inputed_data.data_changelog,
        data_version: inputed_data.data_version,
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

