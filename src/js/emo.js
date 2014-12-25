// Const
var LOCAL_STORAGE_DATA_KEY = "YACEP_EMO_DATA";
var DEFAULT_IMG_HOST = "http://chatpp.thangtd.com/";
var CODE_TYPE_OFFENSIVE = "OFFENSIVE";
var CODE_TYPE_DEFENSIVE = "DEFENSIVE";
var LOCAL_STORAGE_EMOTICON_STATUS = "CHATPP_EMOTICON_STATUS";
var LOCAL_STORAGE_MENTION_STATUS = "CHATPP_MENTION_STATUS";

var yacep_status = false;
var cw_timer;

var mention_status = false;
var VERSION_TYPE_DEV = 'dev';

$(function(){

    cw_timer = setInterval(
        function(){
            if (typeof CW != 'undefined' && typeof CW.reg_cmp != 'undefined') {
                window.clearInterval(cw_timer);
                addStyle();
                if (localStorage[LOCAL_STORAGE_EMOTICON_STATUS] === 'true') {
                    addYacepText();
                }
                if (localStorage[LOCAL_STORAGE_MENTION_STATUS] === 'true') {
                    mention_status = true;
                    addMentionText();
                }
                addAdvertistment();
                if (localStorage[LOCAL_STORAGE_EMOTICON_STATUS] === 'true') {
                    var code_type = localStorage['yacep_code_type'];
                    if (code_type === CODE_TYPE_OFFENSIVE) {
                        CW.prepareRegExp();
                    }
                    addExternalEmo();
                }
            }
        },
        100
    );
});

function htmlEncode(value){
    return $('<div/>').text(value).html();
}

function addEmo(emo) {
    for (var index = 0; index < emo.length; index++) {
        var rep = "";
        var encoded_text = htmlEncode(emo[index].key);
        var img_src = getEmoUrl(emo[index].src);
        if (isSpecialEmo(emo[index].key)) {
            rep = '<img src="' + img_src + '" class="ui_emoticon"/>';
        } else {
            rep = '<img src="' + img_src + '" title="' + encoded_text + '" alt="' +
            encoded_text + '" class="ui_emoticon"/>';
        }
        CW.reg_cmp.push({
            key: new RegExp(emo[index].regex, 'g'),
            rep: rep,
            reptxt: emo[index].key,
            external: true
        });
    }
}

function getEmoUrl(img) {
    if (img.indexOf('https://') == 0 || img.indexOf('http://') == 0) {
        return img;
    }
    return DEFAULT_IMG_HOST + "img/emoticons/" + img;
}

function isSpecialEmo(emo) {
    var special_emo = [':-ss', ':-??'];
    return special_emo.indexOf(emo) > -1;
}

function removeExternalEmo() {
    for (var i = CW.reg_cmp.length -1; true; i--) {
        var emo = CW.reg_cmp[i];
        if (!$.isEmptyObject(emo) && emo.external !== undefined && emo.external === true) {
            CW.reg_cmp.splice(i, 1);
        } else {
            break;
        }
    }
    yacep_status = false;
    updateYacepText();
    console.log('Yacep emo removed!');
}

function addExternalEmo() {
    var emodata = JSON.parse(localStorage[LOCAL_STORAGE_DATA_KEY]);
    addEmo(emodata);
    var version_type = localStorage['chatpp_version_type'];
    if (version_type === VERSION_TYPE_DEV) {
        var secret_emos = getSecretEmos();
        addEmo(secret_emos);
    }
    yacep_status = true;
    updateYacepText();
    console.log('Yacep emo added!');
}

function addStyle() {
    $("<style type='text/css'> .yacepTextEnable{font-weight: bold;} </style>").appendTo("head");
}

function addYacepText() {
    if ($('#yacepText').length > 0) {
        return;
    }
    var yacep_text = 'Emoticons ' + (yacep_status ? 'ON' : 'OFF');
    $('#_chatSendTool').append(
        '<li id="_yacep" role="button" class=" _showDescription">' +
            '<span id="yacepText" class="yacepText icoSizeSmall">' + yacep_text + '</span>' +
        '</li>'
    );
    setYacepTextLabel();
    $('#yacepText').click(function() {
        if (yacep_status) {
            removeExternalEmo();
        } else {
            addExternalEmo();
        }
    })
}

function setYacepTextLabel() {
    $('#_yacep').attr('aria-label', 'Data: ' + localStorage['yacep_data_version']);
}

function removeYacepText() {
    if ($('#yacepText').length > 0) {
        $('#yacepText').remove();
    }
}

function updateYacepText() {
    var yacep_text = 'Emoticons ' + (yacep_status ? 'ON' : 'OFF');
    var div = $('#yacepText');
    div.html(yacep_text);
    if (yacep_status) {
        div.addClass('yacepTextEnable');
    } else {
        div.removeClass('yacepTextEnable');
    }
}

function addAdvertistment() {
    if ($('#yacepAdvertisment').length > 0) {
        return;
    }
    $('#_chatSendTool').append(
        '<li id="_yacepSponsored" role="button" class=" _showDescription" aria-label="Advertising Corner. Contact us if you want to advertise everything here.">' +
            '<span id="yacepAdvertisment" class="icoSizeSmall">Sponsored by <a href="https://hkt.thangtd.com" target="_blank">Framgia Hyakkaten</a></span>' +
        '</li>'
    );
}

function removeAdvertistment() {
    if ($('#yacepAdvertisment').length > 0) {
        $('#yacepAdvertisment').remove();
    }
}

function addMentionText() {
    if ($('#_chatppMentionText').length > 0) {
        return;
    }
    $('#_chatSendTool').append(
        '<li id="_chatppMentionText" role="button" class=" _showDescription">' +
        '<span id="chatppMentionText" class="yacepText icoSizeSmall"></span>' +
        '</li>'
    );
    updateMentionText();
    $('#chatppMentionText').click(function() {
        mention_status = mention_status !== true;
        updateMentionText();
    })
}

function removeMentionText() {
    if ($('#_chatppMentionText').length > 0) {
        $('#_chatppMentionText').remove();
    }
}

function updateMentionText() {
    var mention_text = 'Mention ' + (mention_status ? 'ON' : 'OFF');
    var div = $('#chatppMentionText');
    div.html(mention_text);
    if (mention_status) {
        $('#_chatppMentionText').attr('aria-label', 'Click to disable Mention Feature');
        div.addClass('yacepTextEnable');
    } else {
        $('#_chatppMentionText').attr('aria-label', 'Click to enable Mention Feature');
        div.removeClass('yacepTextEnable');
    }
}

function getSecretEmos() {
    return [
        {"key": "(ngotlong)", "regex": "\\(ngotlong\\)", "src": "ngotlong.png"},
        {"key": "(chatpp)", "regex": "\\(chatpp\\)", "src": "chatpp.png"}
    ];
}

function disableYacep() {
    removeYacepText();
    removeMentionText();
    removeAdvertistment();
    removeExternalEmo();
}

function enableYacep() {
    addYacepText();
    addMentionText();
    addAdvertistment();
    addExternalEmo();
}

function reloadEmoticions() {
    removeExternalEmo();
    console.log('old emoticons removed');
    addExternalEmo();
    console.log('new emoticons removed');
    setYacepTextLabel();
}