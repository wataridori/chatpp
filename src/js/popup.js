var CHROME_SYNC_KEY = "CHATPP_CHROME_SYNC_DATA";
var CHROME_LOCAL_KEY = "CHATPP_CHROME_LOCAL_DATA";
var VERSION_NAME_DEV = 'dev';
var VERSION_NAME_RELEASE = 'final';
var version_name;
var stored_data = {};
var local_stored_data = {};
var app_detail;

$(function() {
    app_detail = {
        "name": "Chat++ for Chatwork",
        "version": "4.2.0"
    };
    var version = app_detail.version;
    var app_name = app_detail.name;
    if (isDevVersion(app_name)) {
        version_name = VERSION_NAME_DEV;
    } else {
        version_name = VERSION_NAME_RELEASE;
    }

    setVersionType();

    $('#chatpp_version').html(version + ' ' + version_name);

    var pages = ['setting', 'emoticon', 'room', 'group', 'shortcut', 'change_logs', 'features'];
    pages.forEach(function(page_name) {
        var url = page_name === 'emoticon' ? 'option.html' : page_name + '.html';
        $('#' + page_name + '_page').click(function() {
            chrome.tabs.create({url: url});
        });
    });

    $('.ext-url').click(function(){
        chrome.tabs.create({url: $(this).attr('href')});
    });

    $('#btn-emo-status').click(function() {
        switchEmoticonStatus();
    });

    $('#btn-mention-status').click(function() {
        switchMentionStatus();
    });

    $('#btn-shortcut-status').click(function() {
        switchShortcutStatus();
    });

    chrome.storage.onChanged.addListener(function(changes, namespace) {
        var data = changes[CHROME_SYNC_KEY];
        if (!$.isEmptyObject(data) && !$.isEmptyObject(data.newValue)) {
            data = data.newValue;
            updateViewData(data);
        }
    });

    loadChatppEmoData();
});

function loadStatus(name, value) {
    if (value !== undefined && value === false) {
        $('#' + name + '-status').removeClass().addClass('text-danger').html('DISABLED');
    } else {
        $('#' + name + '-status').removeClass().addClass('text-primary').html('ENABLED');
    }
}

function loadChatppEmoData() {
    chrome.storage.local.get(CHROME_SYNC_KEY, function(data) {
        stored_data = data;
        data = data[CHROME_SYNC_KEY];
        if ($.isEmptyObject(data)) {
            chrome.tabs.create({url: chrome.extension.getURL() + 'option.html'});
        } else {
            data = JSON.parse(data);
            updateViewData(data);
        }
    });
}

function updateViewData(data) {
    var features = ['emoticon', 'mention', 'shortcut', 'thumbnail', 'highlight'];
    for (var i in features) {
        loadStatus(features[i], data[features[i] + '_status']);
    }
}

function setVersionType() {
    chrome.storage.local.get(CHROME_LOCAL_KEY, function(data) {
        if ($.isEmptyObject(data)) {
            local_stored_data = {};
        } else {
            local_stored_data = data;
        }
        if (local_stored_data[CHROME_LOCAL_KEY] === undefined) {
            local_stored_data[CHROME_LOCAL_KEY] = {};
        }
        local_stored_data[CHROME_LOCAL_KEY]['version_name'] = version_name;
        chrome.storage.local.set(local_stored_data);
    });
}

function isDevVersion(app_name) {
    return app_name.indexOf(VERSION_NAME_DEV, app_name.length - VERSION_NAME_DEV.length) !== -1;
}