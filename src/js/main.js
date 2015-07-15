// Const
var LOCAL_STORAGE_DATA_KEY = "YACEP_EMO_DATA";
var DEFAULT_IMG_HOST = "http://chatpp.thangtd.com/";

var emoticon_status = false;
var cw_timer;

var mention_status = false;
var shortcut_status = false;

var thumbnail_status = false;
var highlight_status = false;

var ADVERTISEMENT_CHANGE_TIME = 1000 * 30;

$(function(){
    cw_timer = setInterval(
        function(){
            if (typeof CW !== 'undefined' && typeof CW.reg_cmp !== 'undefined') {
                window.clearInterval(cw_timer);
                addStyle();
                addInfoIcon();
                if (localStorage.emoticon_status === 'true') {
                    addEmoticonText();
                }
                if (localStorage.mention_status === 'true') {
                    mention_status = true;
                    addMentionText();
                }
                if (localStorage.shortcut_status === 'true') {
                    shortcut_status = true;
                    addShortcutText();
                }
                if (localStorage.thumbnail_status === 'true' || localStorage.highlight_status === 'true') {
                    updateTimeLine();
                    thumbnail_status = localStorage.thumbnail_status === 'true';
                    highlight_status = localStorage.highlight_status === 'true';
                }
                addAdvertisement();
                if (localStorage.emoticon_status === 'true') {
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
    var special_emo = [':-ss', ':-??', '~:>', ':@)', '~X('];
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
    emoticon_status = false;
    updateEmoticonText();
    console.log('Emoticons removed!');
}

function addExternalEmo() {
    var emodata = JSON.parse(localStorage[LOCAL_STORAGE_DATA_KEY]);
    addEmo(emodata);
    emoticon_status = true;
    updateEmoticonText();
    console.log('Emoticon added!');
}

function addStyle() {
    $("<style type='text/css'> .emoticonTextEnable{font-weight: bold;};</style>").appendTo("head");
}

function addInfoIcon() {
    if ($('#roomInfoIcon').length > 0) {
        return;
    }
    var room_info = '<li id="_roomInfo" role="button" class="_showDescription" aria-label="Show room Information" style="display: inline-block;"><span class="icoFontAdminInfoMenu icoSizeLarge"></span></li>';
    $('#_chatSendTool').append(room_info);
    var room_info_list = '<div id="_roomInfoList" class="roomInfo toolTip toolTipWhite mainContetTooltip" role="tooltip">' +
        '<div class="_cwTTTriangle toolTipTriangle toolTipTriangleWhiteBottom"></div>' +
        '<span id="_roomInfoText">' +
        '<div id="_roomInfoTextTotalMembers" class="tooltipFooter"></div>' +
        '<div id="_roomInfoTextTotalMessages" class="tooltipFooter"></div>' +
        '<div id="_roomInfoTextTotalFiles" class="tooltipFooter"></div>' +
        '<div id="_roomInfoTextTotalTasks" class="tooltipFooter"></div>' +
        '<div id="_roomInfoTextMyTasks" class="tooltipFooter"></div>' +
        '</span>' +
        '</div>';
    $('body').append(room_info_list);
    $('#_roomInfo').click(function() {
        prepareRoomInfo();
        var room_name = RM.getIcon() + ' ' + htmlEncode(RM.getName());
        var tip = $('#_roomInfoList').cwListTip({
            selectOptionArea: '<b>' + room_name + '</b>' + ' Information',
            fixHeight: !1,
            search: !1
        });
        tip.open($(this));
    });
}

function prepareRoomInfo() {
    var total_members = '<b>Total Members</b>: ' + RM.getSortedMemberList().length;
    $('#_roomInfoTextTotalMembers').html(total_members);
    var total_messages = '<b>Total Messages</b>: ' + RM.chat_num;
    $('#_roomInfoTextTotalMessages').html(total_messages);
    var total_tasks = '<b>Total Tasks</b>: ' + RM.task_num;
    $('#_roomInfoTextTotalTasks').html(total_tasks);
    var my_tasks = '<b>My Tasks</b>: ' + RM.mytask_num;
    $('#_roomInfoTextMyTasks').html(my_tasks);
    var total_files = '<b>Total Files</b>: ' + RM.file_num;
    $('#_roomInfoTextTotalFiles').html(total_files);
}

function addEmoticonText() {
    if ($('#emoticonText').length > 0) {
        return;
    }
    var emoticon_text = 'E ' + (emoticon_status ? 'ON' : 'OFF');
    $('#_chatSendTool').append(
        '<li id="_emoticons" role="button" class=" _showDescription">' +
            '<span id="emoticonText" class="emoticonText icoSizeSmall">' + emoticon_text + '</span>' +
        '</li>'
    );
    setEmoticonTextLabel();
    $('#emoticonText').click(function() {
        toggleEmoticonsStatus();
    })
}

function setEmoticonTextLabel() {
    $('#_emoticons').attr('aria-label', 'Data: ' + localStorage['emoticon_data_version']);
}

function removeEmoticonText() {
    if ($('#emoticonText').length > 0) {
        $('#emoticonText').remove();
    }
}

function updateEmoticonText() {
    var emoticon_text = 'E: ' + (emoticon_status ? 'ON' : 'OFF');
    var div = $('#emoticonText');
    div.html(emoticon_text);
    if (emoticon_status) {
        div.addClass('emoticonTextEnable');
    } else {
        div.removeClass('emoticonTextEnable');
    }
}

function addAdvertisement() {
    if ($('#chatppAdvertisement').length > 0) {
        return;
    }
    var text = '<li id="_chatppSponsored" role="button" class=" _showDescription" aria-label="Advertising Corner. Contact us if you want to advertise everything here.">' +
        '<span id="chatppAdvertisement" class="icoSizeSmall">' + getAdvertisementText() + '</span>' +
    '</li>';

    $('#_chatSendTool').append(text);
    setInterval(changeRandomAdvertisement, ADVERTISEMENT_CHANGE_TIME);
}

function changeRandomAdvertisement() {
    var text = getAdvertisementText();
    $('#chatppAdvertisement').html(text);
}

function getAdvertisementText() {
    if (localStorage['chatpp_advertisement'] !== undefined && localStorage['chatpp_advertisement']) {
        var ads = JSON.parse(localStorage['chatpp_advertisement']);
        if (ads.length > 0) {
            return ads[Math.floor(Math.random() * ads.length)];
        }
    }
    return 'Advertisement Here!';
}

function removeAdvertisement() {
    if ($('#chatppAdvertisement').length > 0) {
        $('#chatppAdvertisement').remove();
    }
}

function addMentionText() {
    if ($('#_chatppMentionText').length > 0) {
        return;
    }
    $('#_chatSendTool').append(
        '<li id="_chatppMentionText" role="button" class=" _showDescription">' +
        '<span id="chatppMentionText" class="emoticonText icoSizeSmall"></span>' +
        '</li>'
    );
    updateMentionText();
    $('#chatppMentionText').click(function() {
        toggleMentionStatus();
    })
}

function addShortcutText() {
    if ($('#_chatppShortcutText').length > 0) {
        return;
    }
    $('#_chatSendTool').append(
        '<li id="_chatppShortcutText" role="button" class=" _showDescription">' +
        '<span id="chatppShortcutText" class="emoticonText icoSizeSmall"></span>' +
        '</li>'
    );
    updateShortcutText();
    $('#chatppShortcutText').click(function() {
        toggleShortcutStatus();
    })
}

function removeMentionText() {
    if ($('#_chatppMentionText').length > 0) {
        $('#_chatppMentionText').remove();
    }
}

function removeShortcutText() {
    if ($('#_chatppShortcutText').length > 0) {
        $('#_chatppShortcutText').remove();
    }
}

function updateMentionText() {
    var mention_text = 'M: ' + (mention_status ? 'ON' : 'OFF');
    var div = $('#chatppMentionText');
    div.html(mention_text);
    if (mention_status) {
        $('#_chatppMentionText').attr('aria-label', 'Click to disable Mention Feature');
        div.addClass('emoticonTextEnable');
    } else {
        $('#_chatppMentionText').attr('aria-label', 'Click to enable Mention Feature');
        div.removeClass('emoticonTextEnable');
    }
}

function updateShortcutText() {
    var shortcut_text = 'S: ' + (shortcut_status ? 'ON' : 'OFF');
    var div = $('#chatppShortcutText');
    div.html(shortcut_text);
    if (shortcut_status) {
        $('#_chatppShortcutText').attr('aria-label', 'Click to disable Shortcut Feature');
        div.addClass('emoticonTextEnable');
    } else {
        $('#_chatppShortcutText').attr('aria-label', 'Click to enable Shortcut Feature');
        div.removeClass('emoticonTextEnable');
    }
}

function toggleEmoticonsStatus() {
    if (emoticon_status) {
        removeExternalEmo();
    } else {
        addExternalEmo();
    }
}

function toggleMentionStatus() {
    mention_status = mention_status !== true;
    updateMentionText();
}

function toggleShortcutStatus() {
    shortcut_status = shortcut_status !== true;
    if (shortcut_status) {
        registerShortcut()
    } else {
        removeRegisteredKeyboardShortcut();
    }
    updateShortcutText();
}

function disableChatpp() {
    removeEmoticonText();
    removeMentionText();
    removeShortcutText();
    removeAdvertisement();
    removeExternalEmo();
}

function enableChatpp() {
    addEmoticonText();
    addMentionText();
    addShortcutText();
    addAdvertisement();
    addExternalEmo();
}

function reloadEmoticions() {
    removeExternalEmo();
    console.log('Old emoticons removed');
    addExternalEmo();
    console.log('New emoticons removed');
    setEmoticonTextLabel();
}

function updateTimeLine() {
    TimeLineView.prototype.getTimeLineOld = TimeLineView.prototype.getTimeLine;
    TimeLineView.prototype.getTimeLine = function(a, b) {
        var timeLine = this.getTimeLineOld(a, b);
        var temp = $("<div></div>");
        $(temp).html(timeLine);
        if (thumbnail_status) {
            $(".ui_sp_favicon_parent", temp).each(function(index, link) {
                var dom = $(link);
                var imageLink = getThumbnailLink(dom.attr("href"));
                if (imageLink) {
                    var img = '<div><img src="' + imageLink + '" alt="' + imageLink +'" style="max-width: 500px; max-height: 150px"></div>';
                    dom.after(img);
                }
            });
        }
        if (highlight_status) {
            $("pre code", temp).each(function(i, block) {
                hljs.highlightBlock(block);
            });
        }
        return $(temp).html();
    };
}

function getThumbnailLink(link) {
    var imgRegex = /\.(png|jpg|gif|jpeg)$/i;
    if (link.match(imgRegex)) {
        return link;
    };

    var fbImgRegex = /.*fbcdn.*\.(png|jpg|gif|jpeg)(\?.*)?/i;
    if (link.match(fbImgRegex)) {
        return link;
    };

    if (link.indexOf('http://gyazo.com/') === 0) {
        return link + '.png';
    }

    return false;
}