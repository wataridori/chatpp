let common = require("../helpers/Common.js");
let chatwork = require("../helpers/ChatworkFacade.js");
let Const = require("../helpers/Const.js");

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
    "zephir"
];

function insertThumbnail(dom) {
    $(".ui_sp_favicon_parent", dom).each((index, link) => {
        let dom = $(link);
        let imageLink = getThumbnailLink(dom.attr("href"));
        if (imageLink) {
            let img = `<div><img src="${imageLink}" alt="${imageLink}" style="max-width: 500px; max-height: 125px"></div>`;
            dom.after(img);
        }
    });
    return dom;
}

function getThumbnailLink(link) {
    let img_regex = /\.(png|jpg|gif|jpeg)$/i;
    if (link.match(img_regex)) {
        return link;
    }

    let fb_img_regex = /.*fbcdn.*\.(png|jpg|gif|jpeg)(\?.*)?/i;
    if (link.match(fb_img_regex)) {
        return link;
    }

    let gyazo_regex = /^https?:\/\/gyazo.com\//i;
    if (link.match(gyazo_regex)) {
        return `${link}.png`;
    }

    return false;
}

function getHighLightLanguage(language) {
    for (let i in support_languages) {
        if (support_languages[i] === language.toLowerCase()) {
            return support_languages[i];
        }
    }

    return null;
}

function getHighlightOption(text) {
    let highlight_options = {
        language: null,
        nowrap: false,
        has_valid_options: false
    }
    let valid_options = ["nowrap"];
    let options = text.split("\n", 1)[0];
    if (!options) {
        return highlight_options;
    }

    options = options.split(" ");
    for (let i in options) {
        if (!options[i]) {
            continue;
        }
        if (valid_options.indexOf(options[i]) > -1) {
            highlight_options[options[i]] = true;
            continue
        }
        let language = getHighLightLanguage(options[i]);
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

class ViewEnhancer {
    constructor() {
        this.thumbnail_status = common.getStatus("thumbnail");
        this.highlight_status = common.getStatus("highlight");
        this.to_all_status = true;
    }

    isActive() {
        return this.to_all_status || this.thumbnail_status || this.highlight_status;
    }

    updateGetContactPanelView() {
        let getContactPanelOld = AC.view.getContactPanel;
        AC.view.getContactPanel = function(b, d) {
            let panel = getContactPanelOld(b, d);
            if (b == chatwork.myId()) {
                return panel;
            }
            let temp = $("<div></div>");
            let label = LANGUAGE == "ja" ? "同じグループチャットを探す" : "Search for the same Group Chat";
            $(temp).html(panel);
            $(".btnGroup ._profileTipButton", temp).first().append(`<div class="button searchSameRooms _showDescription" aria-label="${label}" data-uid="${b}"><span class="icoFontAdminInfoMenu icoSizeLarge"></span></div>`);
            return $(temp).html();
        };
        $(document).on("click", ".searchSameRooms", (e) => {
            let uid = $(e.currentTarget).data("uid");
            chatwork.searchRoomsByPerson(uid);
        })
    }

    updateChatSendView() {
        let chatTextKeyUpOld = CS.view.chatTextKeyUp;
        CS.view.chatTextKeyUp = function(b) {
            let up_key = b.keyCode;
            let d = $("#_chatText");
            (function() {
                /* eslint-disable no-undef */
                if (!(up_key !== 13 || press_key !== 13)) {
                /* eslint-enable */
                    let a = d.val(),
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

    updateChatworkView() {
        TimeLineView.prototype.getMessagePanelOld = TimeLineView.prototype.getMessagePanel;
        TimeLineView.prototype.getMessagePanel = function(a, b) {
            if (a.msg.indexOf(Const.TO_ALL_MARK) === 0) {
                a.mn = true;
            }
            let message_panel = this.getMessagePanelOld(a, b);
            if (!common.getStatus("thumbnail") && !common.getStatus("highlight")) {
                return message_panel;
            }
            let temp = $("<div></div>");
            $(temp).html(message_panel);
            if (common.getStatus("thumbnail")) {
                temp = insertThumbnail(temp);
            }
            if (common.getStatus("highlight")) {
                $("pre code", temp).each((i, block) => {
                    let block_text = $(block).html();
                    let options = getHighlightOption(block_text);
                    if (options.has_valid_options) {
                        let first_line = block_text.split("\n", 1)[0];
                        /* eslint-disable prefer-template */
                        block_text = block_text.replace(first_line + "\n", "");
                        /* eslint-enable */
                        $(block).html(block_text);
                    }
                    if (options.language) {
                        $(block).addClass(options.language);
                    }
                    if (!options.nowrap) {
                        $(block).css({"word-wrap": "break-word", "white-space": "pre-wrap"});
                    }
                    hljs.highlightBlock(block);
                });
            }
            return $(temp).html();
        };

        if (common.getStatus("thumbnail_status")) {
            TK.view.getTaskPanelOld = TK.view.getTaskPanel;
            TK.view.getTaskPanel = function(b, d) {
                let task_panel = this.getTaskPanelOld(b, d);
                if ($(task_panel).is("div")) {
                    return task_panel;
                }
                let temp = $("<span></span>");
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
}

let view_enhancer = new ViewEnhancer();
module.exports = view_enhancer;
