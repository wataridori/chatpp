let common = require("../helpers/Common.js");

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

function insertThumbnail(dom) {
    $(".ui_sp_favicon_parent", dom).each((index, link) => {
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

class ViewEnhancer {
    constructor() {
        this.thumbnail_status = common.getStatus("thumbnail");
        this.highlight_status = common.getStatus("highlight");
    }

    isActive() {
        return this.thumbnail_status || this.highlight_status;
    }

    updateChatSendView() {
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

    updateChatworkView() {
        TimeLineView.prototype.getMessagePanelOld = TimeLineView.prototype.getMessagePanel;
        TimeLineView.prototype.getMessagePanel = function(a, b) {
            var message_panel = this.getMessagePanelOld(a, b);
            var temp = $("<div></div>");
            $(temp).html(message_panel);
            if (common.getStatus("thumbnail")) {
                temp = insertThumbnail(temp);
            }
            if (common.getStatus("highlight")) {
                $("pre code", temp).each((i, block) => {
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

        if (common.getStatus("thumbnail_status")) {
            TK.view.getTaskPanelOld = TK.view.getTaskPanel;
            TK.view.getTaskPanel = function(b, d) {
                var task_panel = this.getTaskPanelOld(b, d);
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
}

let view_enhancer = new ViewEnhancer();
module.exports = view_enhancer;