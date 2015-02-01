var CHROME_SYNC_KEY = "CHATPP_CHROME_SYNC_DATA";
var CHROME_LOCAL_KEY = "CHATPP_CHROME_LOCAL_DATA";
var CODE_TYPE_OFFENSIVE = "OFFENSIVE";
var CODE_TYPE_DEFENSIVE = "DEFENSIVE";
var VERSION_NAME_DEV = 'dev';
var VERSION_NAME_RELEASE = 'final';
var version_name;
var stored_data = {};
var local_stored_data = {};
var app_detail;

$(function() {
    app_detail = chrome.app.getDetails();
    var version = app_detail.version;
    var app_name = app_detail.name;
    if (isDevVersion(app_name)) {
        version_name = VERSION_NAME_DEV;
    } else {
        version_name = VERSION_NAME_RELEASE;
    }

    setVersionType();

    $('#chatpp_version').html(version + ' ' + version_name);
    $('#emoticon_page').click(function () {
        chrome.tabs.create({url:chrome.extension.getURL(app_detail.options_page)});
    });

    $('#group_page').click(function () {
        chrome.tabs.create({url:'group.html'});
    });

    $('#shortcut_page').click(function () {
        chrome.tabs.create({url:'shortcut.html'});
    });

    $('#homepage').click(function(){
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

    $('#btn-code-type').click(function() {
        switchCodeType();
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

function loadEmoticonStatus(status) {
    if (status !== undefined && status == false) {
        $('#emo-status').removeClass().addClass('text-danger').html('DISABLED');
        $('#btn-emo-status').html('Enable');
    } else {
        $('#emo-status').removeClass().addClass('text-primary').html('ENABLED');
        $('#btn-emo-status').html('Disable');
    }
}

function loadMentionStatus(status) {
    if (status !== undefined && status == false) {
        $('#mention-status').removeClass().addClass('text-danger').html('DISABLED');
        $('#btn-mention-status').html('Enable');
    } else {
        $('#mention-status').removeClass().addClass('text-primary').html('ENABLED');
        $('#btn-mention-status').html('Disable');
    }
}

function loadShortcutStatus(status) {
    if (status !== undefined && status == false) {
        $('#shortcut-status').removeClass().addClass('text-danger').html('DISABLED');
        $('#btn-shortcut-status').html('Enable');
    } else {
        $('#shortcut-status').removeClass().addClass('text-primary').html('ENABLED');
        $('#btn-shortcut-status').html('Disable');
    }
}

function loadCodeType(type) {
    if (type === CODE_TYPE_OFFENSIVE) {
        $('#code-type').removeClass().addClass('text-danger').html('OFFENSIVE');
    } else {
        $('#code-type').removeClass().addClass('text-primary').html('DEFENSIVE');
    }
}

function loadChatppEmoData() {
    chrome.storage.sync.get(CHROME_SYNC_KEY, function(data) {
        stored_data = data;
        data = data[CHROME_SYNC_KEY];
        if ($.isEmptyObject(data)) {
            chrome.tabs.create({url:chrome.extension.getURL(app_detail.options_page)});
        } else {
            updateViewData(data);
        }
    });

    chrome.storage.local.get(CHROME_LOCAL_KEY, function(data) {
        local_stored_data = data;
        data = data[CHROME_LOCAL_KEY];
        var type = CODE_TYPE_DEFENSIVE;
        if (!$.isEmptyObject(data) && data.code_type !== undefined) {
            type = data.code_type;
        }
        loadCodeType(type);
    });
}

function updateViewData(data) {
    console.log(data);
    var name = parseDataName(data);
    var date_sync = parseDateSynce(data);
    $('#current-data-info').html(name);
    $('#date-sync-info').html(date_sync);
    loadEmoticonStatus(data.emoticon_status);
    loadMentionStatus(data.mention_status);
    loadShortcutStatus(data.shortcut_status);
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

function parseDateSynce(data) {
    if (data.date_sync !== undefined) {
        return data.date_sync;
    }
    var date_sync;
    for (key in data) {
        if (data[key].date_sync !== undefined) {
            date_sync = data[key].date_sync;
        }
    }
    return date_sync;
}

function switchEmoticonStatus() {
    var status = true;
    if ($('#emo-status').html() == 'ENABLED') {
        chrome.tabs.executeScript({code: 'runFunction("disableYacep")'});
        status = false;
    } else {
        chrome.tabs.executeScript({code: 'runFunction("enableYacep")'});
    }
    stored_data[CHROME_SYNC_KEY]['emoticon_status'] = status;
    chrome.storage.sync.set(stored_data, function() {
        loadEmoticonStatus(status);
    });
}

function switchMentionStatus() {
    var status = true;
    if ($('#mention-status').html() == 'ENABLED') {
        status = false;
    } else {

    }
    stored_data[CHROME_SYNC_KEY]['mention_status'] = status;
    chrome.storage.sync.set(stored_data, function() {
        loadMentionStatus(status);
    });
}

function switchShortcutStatus() {
    var status = true;
    if ($('#shortcut-status').html() == 'ENABLED') {
        status = false;
    } else {

    }
    stored_data[CHROME_SYNC_KEY]['shortcut_status'] = status;
    chrome.storage.sync.set(stored_data, function() {
        loadShortcutStatus(status);
    });
}

function switchCodeType() {
    var code_type = CODE_TYPE_DEFENSIVE;
    if ($('#code-type').html() === 'DEFENSIVE') {
        code_type = CODE_TYPE_OFFENSIVE;
    }

    chrome.storage.local.get(CHROME_LOCAL_KEY, function(data) {
        local_stored_data = data;
        if (local_stored_data[CHROME_LOCAL_KEY] === undefined) {
            local_stored_data[CHROME_LOCAL_KEY] = {};
        }
        local_stored_data[CHROME_LOCAL_KEY]['code_type'] = code_type;
        chrome.storage.local.set(local_stored_data, function() {
            loadCodeType(code_type);
        });
    });

}

function setVersionType() {
    chrome.storage.local.get(CHROME_LOCAL_KEY, function(data) {
        local_stored_data = data;
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