// Const
var LOCAL_STORAGE_DATA_KEY = "YACEP_EMO_DATA";
var DEFAULT_IMG_HOST = "http://yacep.thangtd.com/";
var CODE_TYPE_OFFENSIVE = "OFFENSIVE";
var CODE_TYPE_DEFENSIVE = "DEFENSIVE";

var yacep_status = false;
var cw_timer;

$(function(){
    cw_timer = setInterval(
        function(){
            if (typeof CW != 'undefined' && typeof CW.reg_cmp != 'undefined') {
                window.clearInterval(cw_timer);
                addStyle();
                addYacepText();
                addAdvertistment();
                var code_type = localStorage['yacep_code_type'];
                if (code_type === CODE_TYPE_OFFENSIVE) {
                    CW.prepareRegExp();
                }
                addExternalEmo();
                console.log('Data loaded !');
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
    var yacep_text = 'YACEP ' + (yacep_status ? 'ON' : 'OFF');
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
    console.log('set yacep label');
    $('#_yacep').attr('aria-label', 'Data: ' + localStorage['yacep_data_version']);
}

function removeYacepText() {
    if ($('#yacepText').length > 0) {
        $('#yacepText').remove();
    }
}

function updateYacepText() {
    var yacep_text = 'Chat++ ' + (yacep_status ? 'ON' : 'OFF');
    var div = $('#yacepText');
    div.html(yacep_text);
    if (yacep_status) {
        div.addClass('yacepTextEnable');
    } else {
        div.addClass('yacepTextEnable');
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

function disableYacep() {
    removeExternalEmo();
    removeYacepText();
    removeAdvertistment();
    yacep_status = false;
}

function enableYacep() {
    addYacepText();
    addAdvertistment();
    addExternalEmo();
}