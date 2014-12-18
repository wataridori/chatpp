var CHROME_SYNC_KEY = "YACEP_CHROME_SYNC_DATA";
var CHROME_LOCAL_KEY = "YACEP_CHROME_LOCAL_DATA";
var CODE_TYPE_OFFENSIVE = "OFFENSIVE";
var CODE_TYPE_DEFENSIVE = "DEFENSIVE";
var stored_data = {};
var local_stored_data = {};

$(function() {
    var app_detail = chrome.app.getDetails();
    var version = app_detail.version;
    $('#chatpp_version').html(version);
    $('#option_page').click(function () {
        chrome.tabs.create({url:chrome.extension.getURL(app_detail.options_page)});
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

    $('#btn-code-type').click(function() {
        switchCodeType();
    });

    chrome.storage.onChanged.addListener(function(changes, namespace) {
        var data = changes[CHROME_SYNC_KEY];
        if (!$.isEmptyObject(data) && !$.isEmptyObject(data.newValue)) {
            data = data.newValue;
            var text = data.data_name + "_" + data.data_version;
            $('#current-data-info').html(text);
            $('#date-sync-info').html(data.date_sync);
            loadEmoticonStatus(data.emoticon_status);
            loadMentionStatus(data.mention_status);
        }
    });
    loadYacepDataStatus();
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
    console.log(status);
    if (status !== undefined && status == false) {
        $('#mention-status').removeClass().addClass('text-danger').html('DISABLED');
        $('#btn-mention-status').html('Enable');
    } else {
        $('#mention-status').removeClass().addClass('text-primary').html('ENABLED');
        $('#btn-mention-status').html('Disable');
    }
}

function loadCodeType(type) {
    if (type == CODE_TYPE_DEFENSIVE) {
        $('#code-type').removeClass().addClass('text-danger').html('DEFENSIVE');
    } else {
        $('#code-type').removeClass().addClass('text-primary').html('OFFENSIVE');
    }
}

function loadYacepDataStatus() {
    chrome.storage.sync.get(CHROME_SYNC_KEY, function(data) {
        stored_data = data;
        data = data[CHROME_SYNC_KEY];
        if (!$.isEmptyObject(data)) {
            var text = data.data_name + "_" + data.data_version;
            $('#current-data-info').html(text);
            $('#date-sync-info').html(data.date_sync);
            loadEmoticonStatus(data.emoticon_status);
            loadMentionStatus(data.mention_status);
        }
    });

    chrome.storage.local.get(CHROME_LOCAL_KEY, function(data) {
        local_stored_data = data;
        data = data[CHROME_LOCAL_KEY];
        var type = CODE_TYPE_DEFENSIVE;
        if (!$.isEmptyObject(data)) {
            type = data.code_type;
        }
        loadCodeType(type);
    });
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

function switchCodeType() {
    var code_type = CODE_TYPE_OFFENSIVE;
    if ($('#code-type').html() == 'OFFENSIVE') {
        code_type = CODE_TYPE_DEFENSIVE;
    }
    if (local_stored_data[CHROME_LOCAL_KEY] == undefined) {
        local_stored_data[CHROME_LOCAL_KEY] = {};
    }
    local_stored_data[CHROME_LOCAL_KEY]['code_type'] = code_type;
    chrome.storage.local.set(local_stored_data, function() {
        loadCodeType(code_type);
    });
}