let common = require("../helpers/Common.js");
let Const = require("../helpers/Const.js");
let chatwork = require("../helpers/ChatworkFacade.js");
let KEY_COLON = "::";

class Emoticon {
    constructor() {
        this.status = common.getStatus("emoticon");
        this.emoticons = [];
        this.chatpp_emoticons = {};
        this.emoticons_regex;
        this.chatpp_cached_messages = {};
        this.start = /::/ig;
        this.is_colon = false;
        this.emo_name = "";
        this.emo_cursor_loca = 0;
        this.list_all_emo = JSON.parse(localStorage[Const.LOCAL_STORAGE_DATA_KEY]);
        this.chat_text_jquery = $("#_chatText");
        this.chat_text_element = document.getElementById("_chatText");
        this.emoticons_replace_dom_mechanism = false;
    }

    setUp() {
        if (!this.status) {
            return;
        }
        this.emoticons = JSON.parse(localStorage[Const.LOCAL_STORAGE_DATA_KEY]);
        this.sorted_emoticons = this.emoticons.slice().sort((a, b) => {
            if (a.priority < b.priority) {
                return 1;
            } else if (a.priority > b.priority) {
                return -1;
            }
            return a.key < b.key ? -1 : (a.key > b.key) ? 1 : 0;
        });

        this.prepareChatppEmoticons();

        if (this.emoticons_replace_dom_mechanism) {
            this.applyEmoticonsByModifyingDOM();
        } else {
            this.disableAST();
        }
    }

    prepareChatppEmoticons() {
        let html = "<div id='suggestion-emotion-container'></div>";
        $(html).insertAfter("#_externalInfo");
        $("#suggestion-emotion-container").css({
            "background": "#fff",
            "position": "absolute",
            "max-height": "200px",
            "width": "200px",
            "border": "1px solid #ababab",
            "border-radius": "3px",
            "padding": "4px 6px 4px 6px",
            "box-shadow": "0px 3px 10px rgba(103, 103, 103, 0.57)",
            "display": "none",
            "overflow-y": "auto",
            "z-index": "99"
        });

        this.chat_text_jquery.click(() => this.hideSuggestionEmotionsBox());

        $("#_roomListArea").click(() => this.hideSuggestionEmotionsBox());

        $("#_headerSearch").click(() => this.hideSuggestionEmotionsBox());
        // Temporarily remove the emoticon suggestion list
        this.addExternalEmoList(true);
        this.addExternalEmo();
        this.setEmoticonTextLabel();

        //event
        $(document).keyup((e) => {
            if (!this.status) {
                return;
            }
            if (e.which == 27) {
                this.hideSuggestionEmotionsBox();
            }
        });

        this.chat_text_jquery.keydown((e) => {
            if (e.which == 40 && this.is_colon) {
                if (this.emo_cursor_loca != $("#suggestion-emotion-container").find("p").length - 1) {
                    this.emo_cursor_loca += 1;
                }
                e.preventDefault();
            }

            if (e.which == 38 && this.is_colon) {
                if (this.emo_cursor_loca !== -1) {
                    this.emo_cursor_loca -= 1;
                }

                e.preventDefault();
            }


            if ((e.which == 13 || e.which == 9) && this.is_colon) {
                $("#suggestion-emotion-container").find("p[data-emo-selected='true']").click();

                e.preventDefault();
            }
        });

        $("#suggestion-emotion-container").on("mouseenter", "p", (e) => {
            $(e.currentTarget).attr("data-emo-selected", true);
            $(e.currentTarget).css("background-color", "rgb(216, 240, 249)");
        }).on("mouseleave", "p", (e) => {
            $(e.currentTarget).removeAttr("data-emo-selected");
            $(e.currentTarget).css("background-color", "#fff");
        }).on("click", "p", (e) => {
            let pos = this.chat_text_jquery.val().lastIndexOf(`::${this.emo_name}`);
            let end_pos = this.chat_text_jquery.val().slice(this.emo_name.length + pos + 2, this.chat_text_jquery.val().length);
            let this_value = `${this.chat_text_jquery.val().substring(0, pos) + $(e.currentTarget).attr("data-emo")} ${end_pos}`;
            $("#_chatText").val(this_value);
            this.hideSuggestionEmotionsBox();
            $("#_chatText").focus();
        });

        this.chat_text_jquery.keyup((e) => {
            if (!this.chat_text_jquery.val()) {
                this.hideSuggestionEmotionsBox();
            }

            if (this.getNearestAtmarkIndex() != -1) {
                this.is_colon = true;
            } else {
                this.is_colon = false;
            }

            if (e.which == 40 && this.is_colon) {
                let curentScroll = $("#suggestion-emotion-container").scrollTop();
                let scrollValue = $(".suggestion-emo-list[data-emo-selected='true']").height();
                $("#suggestion-emotion-container").scrollTop(scrollValue + curentScroll);
                let firstEleP = $("#suggestion-emotion-container").find("p");
                if ($(firstEleP[this.emo_cursor_loca]).length > 0) {
                    $(firstEleP[this.emo_cursor_loca-1]).mouseleave();
                    $(firstEleP[this.emo_cursor_loca]).mouseenter();
                }

                return;
            }

            if (e.which == 38 && this.is_colon) {
                let curentScroll = $("#suggestion-emotion-container").scrollTop();
                let scrollValue = $(".suggestion-emo-list[data-emo-selected='true']").height();
                $("#suggestion-emotion-container").scrollTop(curentScroll - scrollValue);

                let firstEleP = $("#suggestion-emotion-container").find("p");

                if (this.emo_cursor_loca == -1) {
                    $(firstEleP).mouseleave();

                    return;
                }

                if ($(firstEleP[this.emo_cursor_loca]).length > 0) {
                    $(firstEleP[this.emo_cursor_loca+1]).mouseleave();
                    $(firstEleP[this.emo_cursor_loca]).mouseenter();
                }

                return;
            }

            if (e.which == 8) {
                if (this.emo_name.length > 0) {
                    let arrChar = this.emo_name.split("");
                    arrChar.pop();
                    this.emo_name = arrChar.join("");
                } else {
                    this.hideSuggestionEmotionsBox();
                }
            }

            if (e.which == 32) {
                this.hideSuggestionEmotionsBox();
            }

            if (this.is_colon) {
                if (this.emo_name.length > 0) {
                    $("#suggestion-emotion-container").html("");
                    $("#suggestion-emotion-container").fadeIn(0);
                }
                let lastColonIndex = this.chat_text_jquery.val().lastIndexOf(KEY_COLON);
                let textAfterColon = this.chat_text_jquery.val().substr(lastColonIndex + 2);
                let emoLastText = "";
                if (textAfterColon.match(/\n/)) {
                    emoLastText = textAfterColon.split(/\r|\n/);
                } else {
                    emoLastText = textAfterColon.split(" ");
                }

                if (emoLastText.length > 0) {
                    if (e.which != 37 || e.which != 38 || e.which != 39 || e.which != 40) {
                        this.emo_name = emoLastText[0];
                    }
                } else {
                    this.hideSuggestionEmotionsBox();
                }

                let findEmo = $.grep(this.list_all_emo, (e) => {
                    let comp = e.key.toLowerCase();
                    return comp.indexOf(this.emo_name) > -1;
                });
                let toAppend = "";

                if(findEmo.length > 0){
                    for(let i = 0; i < findEmo.length; i++) {
                        if (i == 0) {
                            toAppend += `<p class="suggestion-emo-list" data-emo-selected="true" data-emo="${findEmo[i].key}" style="cursor: pointer; margin-top: 5px; background-color: rgb(216, 240, 249);">`
                        } else {
                            toAppend += `<p class="suggestion-emo-list" data-emo="${findEmo[i].key}" style="cursor: pointer; margin-top: 5px;">`;
                        }
                        toAppend += `<img id="example" src="${common.htmlEncode(common.getEmoUrl(findEmo[i].src ))}" title="${findEmo[i].key} - ${findEmo[i].data_name} - Chatpp" alt="${findEmo[i].key}" style="width: 100%; max-width: 50px;"> <b> ${findEmo[i].key}</b></p>`;
                    }
                    $("#suggestion-emotion-container").append(toAppend);
                } else {
                    $("#suggestion-emotion-container").html("");
                    $("#suggestion-emotion-container").fadeOut(0);
                }
                let rect = this.chat_text_element.getBoundingClientRect();
                let position = Measurement.caretPos(this.chat_text_jquery);
                position.left -= rect.left;
                let bt = window.innerHeight - position.top;
                $("#_chatTextArea").css({
                    "overflow-y": "visible",
                    "z-index": 0
                });
                $("#suggestion-emotion-container").parent().css({
                    position: "relative"
                });
                $("#suggestion-emotion-container").css({
                    bottom: bt,
                    left: position.left + 5
                });
            }
        });
    }

    getNearestAtmarkIndex() {
        let content = this.chat_text_jquery.val();
        let atmarks = content.match(this.start);

        if (!atmarks) {
            return -1;
        }

        let caret_index = this.doGetCaretPosition(this.chat_text_element);
        let atmark_index = content.indexOf(KEY_COLON);
        let pre_atmark_index = -1;
        do {
            if (atmark_index >= caret_index) {
                break;
            }
            pre_atmark_index = atmark_index;
            atmark_index = content.indexOf(KEY_COLON, atmark_index + 1);
        } while (atmark_index != -1);

        return pre_atmark_index;
    }

    doGetCaretPosition(ctrl) {
        let CaretPos = 0; // IE Support
        if (document.selection) {
            ctrl.focus();
            let Sel = document.selection.createRange();
            Sel.moveStart("character", -ctrl.value.length);
            CaretPos = Sel.text.length;
        }
        // Firefox support
        else if (ctrl.selectionStart || ctrl.selectionStart == "0")
            CaretPos = ctrl.selectionStart;
        return (CaretPos);
    }

    addExternalEmoList(bind_event) {
        if (!this.status || $("#externalEmoticonsButton").length > 0) {
            return;
        }

        $("#_chatSendTool").append(
            $("<li>", {
                id: "_externalEmoticonsButton",
                class:"_showDescription chatInput__element",
                css: {
                    "display": "inline-block"
                },
                attr: {
                    "role": "button",
                    "aria-label": "View Chatpp Emoticons List"
                }
            }).append(
                $("<span>", { id: "externalEmoticonsButton", class:"icoFontActionMore icoSizeLarge" })
            )
        );

        if (!bind_event) {
            return;
        }

        $("#_wrapper").append($("<style>").append("::-webkit-scrollbar {width:10px;height:10px} .w3-emotion {display:inline-block;text-align:center;min-width:80px;height:30px;border:1px solid #ccc;cursor:pointer;margin:0px 2px;border-radius:5px;font-size:10px;background-color:white;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}"));

        $("#_wrapper").append(
            $("<div>", {
                id: "_externalEmoticonList",
                class: "emoticonList emoticonTooltip toolTip tooltip--white mainContetTooltip",
                css: {
                    "opacity": "1",
                    "z-index": "2",
                    "display": "none",
                    "top": "480px",
                    "left": "160px",
                    "role": "tooltip",
                    "width": "350px"
                }
            }).append(
                $("<div>", {
                    class:"_cwTTTriangle toolTipTriangle toolTipTriangleWhiteBottom",
                    css: {
                        "left" :"129px"
                    }
                }),
                $("<ul>", {
                    id:"_emoticonGalleryTab",
                    css: {
                        "display": "flex",
                        "flex-wrap": "wrap",
                        "justify-content": "center",
                        "max-width": "350px",
                        "height": "450px",
                        "overflow": "auto"
                    }
                }),
                $("<div>", {
                    id: "_externalEmotionDescription",
                    class:"tooltipFooter"
                }), $("<div>", {
                    id: "tabEmotionBig",
                    css: {
                        "display": "flex",
                        "overflow": "auto",
                        "overflow-y": "scroll",
                        "height": "42px"
                    }
                })
            )
        );
        let hint = _is_mac ? L.chatsend_shift_and_command_hint : L.chatsend_shift_and_ctrl_hint;
        let u = $("#_externalEmoticonList").cwToolTip({
            open: () => $("#_externalEmotionDescription").text(hint)
        });

        let arrayDataName = [];
        let sorted_emoticons = this.sorted_emoticons;

        sorted_emoticons.forEach((emo) => {
            if (arrayDataName.indexOf(emo.data_name) == -1) {
                arrayDataName.push(emo.data_name);
            }
        });

        let temp = [];
        let arrayData= [];

        arrayDataName.forEach((item) => {
            temp = [];
            sorted_emoticons.map((emo) => {
                let encoded_text = common.htmlEncode(emo.key);
                let titleapp = `${encoded_text} - ${emo.data_name} - Chatpp`;
                let img_src = common.htmlEncode(common.getEmoUrl(emo.src));
                if (emo.data_name == item) {
                    let liElement = $("<li>", {
                        css: {
                            "padding": "5px",
                            "cursor": "pointer",
                            "border": "1px solid #fff",
                            "border-radius": "3px",
                            "transition": "border 0.2s linear 0s"
                        }
                    }).append($("<img>", {
                        id: "example",
                        css: {
                            "width": "100%",
                            "max-width": "50px"
                        },
                        attr: {
                            "src": img_src,
                            "title": titleapp,
                            "alt": encoded_text
                        }
                    }));
                    temp.push(liElement);

                    return liElement.prop("outerHTML");
                }
            }).join("");
            arrayData.push(temp);
        });

        $("body").on("click", "#externalEmoticonsButton", ((e) => {
            u.open($(e.currentTarget));
            $("#_emoticonGalleryTab li").remove();
            $("#_externalEmoticonList #_emoticonGalleryTab").append(arrayData[0]);
            $("#_externalEmoticonList #tabEmotionBig button").css("background-color", "white");
            $("#tabEmotion0").css("background-color", "#eaeae8");
        }));

        arrayDataName.forEach((item, index) => {
            $("#_externalEmoticonList #tabEmotionBig").append($("<button>", {
                id: `tabEmotion${index}`,
                class: "w3-bar-item w3-button w3-emotion"
            }).append(item));
        });

        arrayDataName.forEach((item, index) => {
            $(`#tabEmotion${index}`).on("click", (event) => {
                event.preventDefault();
                $("#_emoticonGalleryTab li").remove();
                $("#_externalEmoticonList #_emoticonGalleryTab").append(arrayData[index]);
            });
        });

        arrayDataName.forEach((item, index) => {
            $("#_externalEmoticonList #tabEmotionBig button").on("click", (event) => {
                $("#_externalEmoticonList #tabEmotionBig button").css("background-color", "white");
                $(event.currentTarget).css("background-color", "#eaeae8");
            });

            $(`#_externalEmoticonList #tabEmotionBig #tabEmotion${index}`).hover((event) => {
                $(event.currentTarget).attr("data-toggle", "tooltip");
                $(event.currentTarget).attr("data-placement", "top");
                $(event.currentTarget).attr("title", item);
            });
        });

        $("#_externalEmoticonList").on("mouseenter", "li", (e) => {
            let a = $(e.currentTarget).find("img");
            $("#_externalEmotionDescription").text(a.attr("title"))
        }).on("mouseleave", "li", () => $("#_externalEmotionDescription").text(hint)
        ).on("click", "li", function() {
            CW.view.key.ctrl || CW.view.key.command ? (u.close(),
            CS.view.sendMessage($(this).find("img").prop("alt"), !0)) : ($("_chatText").focus(),
            CS.view.setChatText($(this).find("img").prop("alt"), !0),
            CW.view.key.shift || u.close())
        })
    }

    addExternalEmo() {
        this.addEmo(this.emoticons);
        this.status = true;
    }

    isSpecialEmo(emo) {
        let special_emo = [":-ss", ":-??", "~:>", ":@)", "~X(", "3:-O"];
        return special_emo.indexOf(emo) > -1;
    }

    setEmoticonTextLabel() {
        $("#_externalEmoticonsButton").attr("aria-label", "View Chat++ Emoticons");
    }

    addEmo(emo) {
        this.chatpp_emoticons.baseEmoticons = [];
        this.chatpp_emoticons.tagHash = {};
        for (let index = 0; index < emo.length; index++) {
            let encoded_text = common.htmlEncode(emo[index].key);
            let title = `${encoded_text} - ${emo[index].data_name} - Chatpp`;
            let src = common.htmlEncode(common.getEmoUrl(emo[index].src));
            let one_emo = {
                name: encoded_text,
                title,
                src,
                tag: emo[index].key,
                external: true
            };
            if (this.emoticons_replace_dom_mechanism) {
                // Due to Chatwork mechanism changed, do not push external emo to Chatwork's emoticons list anymore
                this.chatpp_emoticons.baseEmoticons.push(one_emo);
                this.chatpp_emoticons.tagHash[emo[index].key] = one_emo;
            } else {
                // Legacy mechanism, push external emo to Chatwork's emoticons list
                emoticons.baseEmoticons.push(one_emo);
                emoticons.tagHash[emo[index].key] = one_emo;
            }
        }
        if (this.emoticons_replace_dom_mechanism) {
            this.chatpp_emoticons.getEmoticonWithTag = (tag) => this.chatpp_emoticons.tagHash[tag];
            this.chatpp_emoticons.getAllEmoticons = () => this.baseEmoticons;
            this.chatpp_emoticons.getEmoticonWithName = (name) => this.chatpp_emoticons.baseEmoticons.find((e) => e.name === name)
        } else {
            tokenizer.setEmoticons(emoticons.getAllEmoticons().map((emo) => emo.tag));
        }
    }

    hideSuggestionEmotionsBox() {
        this.is_colon = false;
        this.emo_name = "";
        this.emo_cursor_loca = 0;
        $("#suggestion-emotion-container").scrollTop(0);
        $("#suggestion-emotion-container").fadeOut(0);
        $("#suggestion-emotion-container").html("");
    }

    // Enable Chatpp's Emoticons by disable rendering with AST
    disableAST() {
        /* eslint-disable no-console */
        /* for debugging new feature */
        if (window.feature_flags_module) {
            window.feature_flags_module.a.FRE2252 = false;
            console.log('Clear htmlCache');

            for (i in CW.application.domainLifecycleContext.messageRepository.entities[RM.id]) {
                    let msg = CW.application.domainLifecycleContext.messageRepository.entities[RM.id][i];
                    msg.body.body.htmlCache = null;
            }
            RL.rooms[RM.id].buildtime = 0;
        }

        if (window.chatwork_notation_module) {
            getAST_handler = {
                apply: function(target, thisArg, args) {
                    // temporary enable FeatureFlags.FRE2252 to make getAST() works then disable it
                    window.feature_flags_module.a.FRE2252 = true;
                    r = target.apply(thisArg, args);
                    window.feature_flags_module.a.FRE2252 = false;
                    return r;
                }
            }
            window.chatwork_notation_module.a.prototype.getAST = new Proxy(window.chatwork_notation_module.a.prototype.getAST, getAST_handler);
        }
        /* eslint-enable */
    }

    // Update Emoticons by new approach: directly replace text from DOM
    applyEmoticonsByModifyingDOM() {
        this.prepareEmoticonsRegex();
        $("#_timeLine ._message[data-mid]").each((index, element) => {
            this.applyEmoticonsForMessageDOM(element);
        });
        $("#_timeLine").on("DOMNodeInserted", (e) => {
            this.applyEmoticonsForMessageDOM(e.target);
        });

        this.overrideEditMessage();
    }

    overrideEditMessage() {
        // A very tricky way to override Chatwork's editMessage function to make editting message work
        // This feature may break if Chatwork change their code structure
        let acl = CW.application.getACL();
        let messageAPIService = acl.applicationServiceContext.currentSelectedRoomService.messageService.messageAPIService;
        if (messageAPIService) {
            messageAPIService.editMessageOld = messageAPIService.editMessage;
            let me = this;
            messageAPIService.editMessage = function (e, t, n) {
                let result = this.editMessageOld(e, t, n);
                let mid = t.value;
                let message_content = n.value;
                let rid = RM.id;
                let message_element = $(`#_messageId${mid} pre img.chatpp_emoticon`);
                if (message_element.length || me.emoticons_regex.test(message_content)) {
                    let start = Date.now();
                    $("#_loader").fadeIn(100);
                    setTimeout(() => {
                        let temp_room = chatwork.getTempRoomId();
                        RL.selectRoom(temp_room);
                        let original_onhashchange = window.onhashchange;
                        window.chatpp_force_reloading = true;
                        window.onhashchange = () => {
                            if (window.chatpp_force_reloading && `#!rid${temp_room}` === location.hash) {
                                RL.selectRoom(rid);
                            } else if (window.chatpp_force_reloading && `#!rid${rid}` === location.hash) {
                                let finish = Date.now();
                                console.log("Chatpp finish reloading editted message in", finish - start, "miliseconds");
                                $("#_loader").fadeOut("fast");
                                window.chatpp_force_reloading = false;
                                window.onhashchange = original_onhashchange;
                            }
                        };
                    }, 500);
                }

                return result;
            }
        }
    }

    applyEmoticonsForMessageDOM(target) {
        let mid = $(target).data("mid");
        if (!mid) {
            return;
        }
        let message_element = $(target).find("pre");
        if (message_element.length && !message_element.hasClass("chatpp_emoticon")) {
            let content = message_element.html();
            if (this.emoticons_regex.test(content)) {
                this.renderContentAndApplyToDOM(message_element, content, mid);
            }
        }
    }

    renderContentAndApplyToDOM(message_element, content, mid) {
        if (!this.chatpp_cached_messages[mid] || this.chatpp_cached_messages[mid].message_before != content || !this.chatpp_cached_messages[mid].message_after) {
            let replaced = this.applyReplacement(content);
            this.chatpp_cached_messages[mid] = {
                message_before: content,
                message_after: replaced
            };
        }
        message_element.html(this.chatpp_cached_messages[mid].message_after);
        message_element.addClass("chatpp_emoticon");
    }

    prepareEmoticonsRegex() {
        let patterns = [];
        let baseEmoticons = this.chatpp_emoticons.baseEmoticons;
        for (let i in baseEmoticons) {
            if (baseEmoticons[i].external) {
                patterns.push(`(${this.generateRegexFromString(baseEmoticons[i].tag)})`);
            }
        }
        this.emoticons_regex = new RegExp(patterns.join("|"), "g");
    }

    applyReplacement(string) {
        let current_index = -1, code_tag_index = 0, start = 0, result = "";
        while (code_tag_index != -1) {
            current_index = string.indexOf("<code", code_tag_index);
            if (current_index > -1) {
                result += this.replaceEmoticons(string.substring(start, current_index));
                start = current_index + 1;
                code_tag_index = string.indexOf("</code>", current_index + 5);
                if (code_tag_index > -1) {
                    start = code_tag_index + 7;
                    code_tag_index = start;
                    result += string.substring(current_index, code_tag_index);
                }
            } else {
                break;
            }
        }
        result += this.replaceEmoticons(string.substring(start));

        return result;
    }

    replaceEmoticons(string) {
        return string.replace(this.emoticons_regex, (match) => {
            let emo = this.chatpp_emoticons.getEmoticonWithTag(match);
            if (!emo) {
                return match;
            }
            let replaceText = `<img src="${emo.src}" alt="${emo.name}" data-cwtag="${emo.tag}" title="${emo.title}" class="ui_emoticon chatpp_emoticon">`;
            return replaceText;
        });
    }

    generateRegexFromString(string) {
        return string.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
    }
}

let emoticon = new Emoticon();
module.exports = emoticon;
