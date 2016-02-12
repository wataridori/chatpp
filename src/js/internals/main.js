let common = require("../helpers/Common.js");
let Const = require("../helpers/Const.js");
let Emoticon = require("./Emoticon.js");
let Shortcut = require("./Shortcut.js");

let mention_status = false;
let thumbnail_status = false;
let highlight_status = false;
let cw_timer;

let ADVERTISEMENT_CHANGE_TIME = 1000 * 30;

let support_languages = [
    "1c",
    "actionscript",
    "apache",
    "applescript",
    "armasm",
    "asciidoc",
    "aspectj",
    "autohotkey",
    "autoit",
    "avrasm",
    "axapta",
    "bash",
    "brainfuck",
    "cal",
    "capnproto",
    "ceylon",
    "clojure-repl",
    "clojure",
    "cmake",
    "coffeescript",
    "cpp",
    "cs",
    "css",
    "d",
    "dart",
    "delphi",
    "diff",
    "django",
    "dns",
    "dockerfile",
    "dos",
    "dust",
    "elixir",
    "elm",
    "erb",
    "erlang-repl",
    "erlang",
    "fix",
    "fortran",
    "fsharp",
    "gcode",
    "gherkin",
    "glsl",
    "go",
    "gradle",
    "groovy",
    "haml",
    "handlebars",
    "haskell",
    "haxe",
    "http",
    "inform7",
    "ini",
    "java",
    "javascript",
    "json",
    "julia",
    "kotlin",
    "lasso",
    "less",
    "lisp",
    "livecodeserver",
    "livescript",
    "lua",
    "makefile",
    "markdown",
    "mathematica",
    "matlab",
    "mel",
    "mercury",
    "mizar",
    "mojolicious",
    "monkey",
    "nginx",
    "nimrod",
    "nix",
    "nsis",
    "objectivec",
    "ocaml",
    "openscad",
    "oxygene",
    "parser3",
    "perl",
    "pf",
    "php",
    "powershell",
    "processing",
    "profile",
    "prolog",
    "protobuf",
    "puppet",
    "python",
    "q",
    "r",
    "rib",
    "roboconf",
    "rsl",
    "ruby",
    "ruleslanguage",
    "rust",
    "scala",
    "scheme",
    "scilab",
    "scss",
    "smali",
    "smalltalk",
    "sml",
    "sql",
    "stata",
    "step21",
    "stylus",
    "swift",
    "tcl",
    "tex",
    "thrift",
    "tp",
    "twig",
    "typescript",
    "vala",
    "vbnet",
    "vbscript-html",
    "vbscript",
    "verilog",
    "vhdl",
    "vim",
    "x86asm",
    "xl",
    "xml",
    "xquery",
    "zephir",
];

$(function(){
    var rebuild = false;
    cw_timer = setInterval(
        function(){
            if (typeof CW !== "undefined" && typeof CW.reg_cmp !== "undefined") {
                window.clearInterval(cw_timer);
                var emoticon_feature = new Emoticon();
                var shortcut_feature = new Shortcut();
                $("#_chatppPreLoad").remove();
                addStyle();
                addInfoIcon();
                if (common.getStatus("emoticon")) {
                    rebuild = true;
                    emoticon_feature.addEmoticonText();
                }
                if (common.getStatus("mention")) {
                    mention_status = true;
                    addMentionText();
                }
                if (common.getStatus("shortcut")) {
                    shortcut_feature.addShortcutText();
                    shortcut_feature.registerShortcut();
                }
                if (common.getStatus("thumbnail") || common.getStatus("highlight")) {
                    rebuild = true;
                    thumbnail_status = common.getStatus("thumbnail");
                    highlight_status = common.getStatus("highlight");
                    updateChatworkView();
                }
                addAdvertisement();
                if (common.getStatus("emoticon")) {
                    emoticon_feature.addExternalEmo();
                }

                if (rebuild) {
                    RL.rooms[RM.id].build();
                }

                updateChatSendView();
            }
        },
        100
    );
});

function addStyle() {
    $('<style type="text/css"> .emoticonTextEnable{font-weight: bold;};</style>').appendTo("head");
    $('<style type="text/css"> .chatppErrorsText{font-weight: bold; color: red;};</style>').appendTo("head");
}

function addInfoIcon() {
    if ($("#roomInfoIcon").length > 0) {
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
    $("body").append(room_info_list);
    $("#_roomInfo").click(function() {
        prepareRoomInfo();
        var room_name = RM.getIcon() + " " + common.htmlEncode(RM.getName());
        var tip = $("#_roomInfoList").cwListTip({
            selectOptionArea: "<b>" + room_name + "</b>" + " Information",
            fixHeight: !1,
            search: !1
        });
        tip.open($(this));
    });
}

function prepareRoomInfo() {
    var total_members = "<b>Total Members</b>: " + RM.getSortedMemberList().length;
    $("#_roomInfoTextTotalMembers").html(total_members);
    var total_messages = "<b>Total Messages</b>: " + RM.chat_num;
    $("#_roomInfoTextTotalMessages").html(total_messages);
    var total_tasks = "<b>Total Tasks</b>: " + RM.task_num;
    $("#_roomInfoTextTotalTasks").html(total_tasks);
    var my_tasks = "<b>My Tasks</b>: " + RM.mytask_num;
    $("#_roomInfoTextMyTasks").html(my_tasks);
    var total_files = "<b>Total Files</b>: " + RM.file_num;
    $("#_roomInfoTextTotalFiles").html(total_files);
}

function addAdvertisement() {
    if ($("#chatppAdvertisement").length > 0) {
        return;
    }
    var text = '<li id="_chatppSponsored" role="button" class=" _showDescription" aria-label="Chat Plus Plus Information">' +
        '<span id="chatppAdvertisement" class="icoSizeSmall">' + getAdvertisementText() + '</span>' +
    '</li>';

    $("#_chatSendTool").append(text);
    setInterval(changeRandomAdvertisement, ADVERTISEMENT_CHANGE_TIME);
}

function changeRandomAdvertisement() {
    var text = getAdvertisementText();
    $("#chatppAdvertisement").html(text);
}

function getAdvertisementText() {
    if (localStorage["chatpp_advertisement"] !== undefined && localStorage["chatpp_advertisement"]) {
        var ads = JSON.parse(localStorage["chatpp_advertisement"]);
        if (ads.length > 0) {
            return ads[Math.floor(Math.random() * ads.length)];
        }
    }
    return "Advertisement Here!";
}

function removeAdvertisement() {
    if ($("#chatppAdvertisement").length > 0) {
        $("#chatppAdvertisement").remove();
    }
}

function addMentionText() {
    if ($("#_chatppMentionText").length > 0) {
        return;
    }
    $("#_chatSendTool").append(
        '<li id="_chatppMentionText" role="button" class=" _showDescription">' +
        '<span id="chatppMentionText" class="emoticonText icoSizeSmall"></span>' +
        '</li>'
    );
    updateMentionText();
    $("#chatppMentionText").click(function() {
        toggleMentionStatus();
    })
}

function updateMentionText() {
    var mention_text = "M: " + (mention_status ? "ON" : "OFF");
    var div = $("#chatppMentionText");
    div.html(mention_text);
    if (mention_status) {
        $("#_chatppMentionText").attr("aria-label", "Click to disable Mention Feature");
        div.addClass("emoticonTextEnable");
    } else {
        $("#_chatppMentionText").attr("aria-label", "Click to enable Mention Feature");
        div.removeClass("emoticonTextEnable");
    }
}

function toggleMentionStatus() {
    mention_status = mention_status !== true;
    common.setStatus("mention", mention_status);
    updateMentionText();
}

function updateChatSendView() {
    var chatTextKeyUpOld = CS.view.chatTextKeyUp;
    CS.view.chatTextKeyUp = function(b) {
        var up_key = b.keyCode;
        var d = $("#_chatText");
        (function() {
            if (!(up_key !== 13 || press_key !== 13)) {
                var a = d.val(),
                    b = d.prop("selectionStart"),
                    e = d.prop("selectionEnd");
                b === e && (
                    e = a.substr(0, b), e = $.support.isWindowsFirefox ? e.replace(/(^|\n)``` *\r?\n([\s\S]+?)\r?\n```$/, "$1[code]\n$2\n[/code]") : e.replace(/(^|\n)``` *\r?\n([\s\S]+?)\r?\n```\n$/, "$1[code]\n$2\n[/code]\n"),
                        e = $.support.isWindowsFirefox ? e.replace(/(^|\n)``t *\r?\n([\s\S]+?)\r?\n```$/, "$1[title]$2[/title]") : e.replace(/(^|\n)``t *\r?\n([\s\S]+?)\r?\n```\n$/, "$1[title]$2[/title]"),
                        e = $.support.isWindowsFirefox ? e.replace(/(^|\n)``i *\r?\n([\s\S]+?)\r?\n```$/, "$1[info]$2[/info]") : e.replace(/(^|\n)``i *\r?\n([\s\S]+?)\r?\n```\n$/, "$1[info]$2[/info]\n"),
                        a = a.substr(b), d.val(e + a), d.prop("selectionStart", e.length), d.prop("selectionEnd", e.length)
                )
            }
        })();
        return chatTextKeyUpOld(b);
    };
}

function updateChatworkView() {
    TimeLineView.prototype.getMessagePanelOld = TimeLineView.prototype.getMessagePanel;
    TimeLineView.prototype.getMessagePanel = function(a, b) {
        var message_panel = this.getMessagePanelOld(a, b);
        var temp = $("<div></div>");
        $(temp).html(message_panel);
        if (thumbnail_status) {
            temp = insertThumbnail(temp);
        }
        if (highlight_status) {
            $("pre code", temp).each(function(i, block) {
                var block_text = $(block).html();
                var options = getHighlightOption(block_text);
                if (options.has_valid_options) {
                    var first_line = block_text.split("\n", 1)[0];
                    block_text = block_text.replace(first_line + "\n", "");
                    $(block).html(block_text);
                }
                if (options.language) {
                    $(block).addClass(options.language);
                }
                if (!options.nowrap) {
                    $(block).css({"word-wrap": "break-word"});;
                }
                hljs.highlightBlock(block);
            });
        }
        return $(temp).html();
    };

    if (thumbnail_status) {
        TK.view.getTaskPanelOld = TK.view.getTaskPanel;
        TK.view.getTaskPanel = function(b, d) {
            var task_panel = TK.view.getTaskPanelOld(b, d);
            if ($(task_panel).is("div")) {
                return task_panel;
            }
            var temp = $("<span></span>");
            temp.html(task_panel);
            temp = insertThumbnail(temp);
            return temp.html();
        };

        RoomView.prototype.buildOld = RoomView.prototype.build;
        RoomView.prototype.build = function(a) {
            this.buildOld(a);
            insertThumbnail($("#_subRoomDescription"));
        }
    }
}

function insertThumbnail(dom) {
    $(".ui_sp_favicon_parent", dom).each(function(index, link) {
        var dom = $(link);
        var imageLink = getThumbnailLink(dom.attr("href"));
        if (imageLink) {
            var img = '<div><img src="' + imageLink + '" alt="' + imageLink +'" style="max-width: 500px; max-height: 125px"></div>';
            dom.after(img);
        }
    });
    return dom;
}

function getThumbnailLink(link) {
    var img_regex = /\.(png|jpg|gif|jpeg)$/i;
    if (link.match(img_regex)) {
        return link;
    };

    var fb_img_regex = /.*fbcdn.*\.(png|jpg|gif|jpeg)(\?.*)?/i;
    if (link.match(fb_img_regex)) {
        return link;
    };

    var gyazo_regex = /^https?:\/\/gyazo.com\//i;
    if (link.match(gyazo_regex)) {
        return link + ".png";
    }

    return false;
}

function getHighLightLanguage(language) {
    for (var i in support_languages) {
        if (support_languages[i] === language.toLowerCase()) {
            return support_languages[i];
        }
    }

    return null;
}

function getHighlightOption(text) {
    var highlight_options = {
        language: null,
        nowrap: false,
        has_valid_options: false
    }
    var valid_options = ["nowrap"];
    var options = text.split("\n", 1)[0];
    if (!options) {
        return highlight_options;
    }

    options = options.split(" ");
    for (var i in options) {
        if (!options[i]) {
            continue;
        }
        if (valid_options.indexOf(options[i]) > -1) {
            highlight_options[options[i]] = true;
            continue
        }
        var language = getHighLightLanguage(options[i]);
        if (language) {
            highlight_options.language = language;
            continue;
        }
        return {
            language: null,
            nowrap: false,
            has_valid_options: false
        }
    }
    highlight_options.has_valid_options = true;
    return highlight_options;
}