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
        window.emoticon_tag_hash_list = {};
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
        this.prepareEmoticonsRegex();
        // this.overrideAST();
        this.applyEmoticonsByModifyingDOM();
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

        $("#_chatSendArea ul").first().append(
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
            let name = this.getEmoNameFromTag(emo[index].key);
            let title = `${encoded_text} - ${emo[index].data_name} - Chatpp`;
            let src = common.htmlEncode(common.getEmoUrl(emo[index].src));
            let one_emo = {
                name,
                title,
                src,
                tag: emo[index].key,
                external: true
            };
            this.chatpp_emoticons.baseEmoticons.push(one_emo);
            this.chatpp_emoticons.tagHash[emo[index].key] = one_emo;
            window.emoticon_tag_hash_list[name] = one_emo;
            emoticons.baseEmoticons.push(one_emo);
            emoticons.tagHash[emo[index].key] = one_emo;
        }
        this.chatpp_emoticons.getEmoticonWithTag = (tag) => this.chatpp_emoticons.tagHash[tag];
        this.chatpp_emoticons.getAllEmoticons = () => this.baseEmoticons;
        this.chatpp_emoticons.getEmoticonWithName = (name) => this.chatpp_emoticons.baseEmoticons.find((e) => e.name === name)
        tokenizer.setEmoticons(emoticons.getAllEmoticons().map((emo) => emo.tag));
    }

    getEmoNameFromTag(tag) {
        return `chatpp-${common.htmlEncode(tag)}`;
    }

    hideSuggestionEmotionsBox() {
        this.is_colon = false;
        this.emo_name = "";
        this.emo_cursor_loca = 0;
        $("#suggestion-emotion-container").scrollTop(0);
        $("#suggestion-emotion-container").fadeOut(0);
        $("#suggestion-emotion-container").html("");
    }

    // Enable Chatpp's Emoticons by overriding getAST function
    overrideAST() {
        /* eslint-disable no-console */
        /* for debugging new feature */
        if (!window.notation_module) {
            return;
        }
        getAST_handler = {
            apply: (target, thisArg, args) => {
                let r = target.apply(thisArg, args);
                let raw_text = thisArg.value;
                let matches = raw_text.match(this.emoticons_regex);
                if (matches) {
                    let emoticons_regex = this.generateEmoticonsRegexFromArray(matches);
                    r = this.findTextToken(r, emoticons_regex);
                }
                return r;
            },
        };

        window.notation_module.getAST = new Proxy(window.notation_module.getAST, getAST_handler);
        /* eslint-enable */
    }

    findTextToken(tokenized_objects, emoticons_regex) {
        // list token that directly contain text or have children that contain text
        let list_types = [
            'tokens',
            'messageQuote',
            'quotedTokens',
            'info',
            'title',
            'message',
        ];
        list_types.forEach((key, index) => {
            if (tokenized_objects[key]) {
                if (Array.isArray(tokenized_objects[key])) {
                    // find nested text token
                    if (tokenized_objects[key].some((z) => z.text)) {
                        // last level reached
                        for (let index = 0; index < tokenized_objects[key].length; index++) {
                            if (tokenized_objects[key][index].text) {
                                let head = tokenized_objects[key].slice(0, index);
                                let body = this.parseMoreEmo(tokenized_objects[key][index], emoticons_regex);
                                let tail = tokenized_objects[key].slice(index + 1);
                                tokenized_objects[key] = head.concat(body).concat(tail);
                                index += body.length - 1;
                            }
                        }
                    } else {
                        // not yet, continue check
                        tokenized_objects[key] = tokenized_objects[key].map((item) => {
                            return this.findTextToken(item, emoticons_regex);
                        })
                    }
                } else if (typeof tokenized_objects[key] == 'object') {
                    // an object, continue check
                    tokenized_objects[key] = this.findTextToken(tokenized_objects[key], emoticons_regex);
                }
            }
        })

        return tokenized_objects;
    }

    parseMoreEmo(token, emoticons_regex) {
        let ret = [];
        let pos = 0;
        while (true) {
            let match = emoticons_regex.exec(token.text);
            let end_pos = match ? match.index : token.text.length;
            let text = token.text.slice(pos, end_pos);
            if (text) {
                ret.push({ text });
            }
            if (!match) {
                break;
            }
            ret.push({ emoticon: { value: this.getEmoNameFromTag(match[0]), tag: match[0] } });
            pos = emoticons_regex.lastIndex;
        }
        return ret.length ? ret : [token];
    }

    // New method to apply Emoticons by replacing Node text
    // Thanks to Bui The Hanh for the idea
    textNodesUnder(node) {
        let all = [];
        for (node = node.firstChild; node; node = node.nextSibling) {
            if (node.nodeType == 1 && node.tagName == 'CODE') {
                continue;
            }

            // if node is #text
            if (node.nodeType == 3) {
                all.push(node);
            } else {
                all = all.concat(this.textNodesUnder(node));
            }
        }
        return all;
    }

    applyEmoticons(node) {
        const all_text_nodes = this.textNodesUnder(node);
        for (const text_node of all_text_nodes) {
            const text_node_content = text_node.textContent;
            let replacement = this.applyReplacement(text_node_content);
            let txt = document.createElement('span');
            txt.innerHTML = replacement;
            text_node.replaceWith(txt);
        }
    }

    applyReplacement(text) {
        let newContentParts = [];
        const parsedNodecontent = this.parseMoreEmo({ text }, this.emoticons_regex);

        for (const part of parsedNodecontent) {
            if (part.text) {
              newContentParts.push(common.htmlEncode(part.text));
            } else if (part.emoticon) {
                let emo = this.chatpp_emoticons.getEmoticonWithTag(part.emoticon.tag);

                if (emo) {
                    newContentParts.push(
                        `<img src="${emo.src}" alt="${emo.tag}" data-cwtag="${emo.tag}" title="${emo.title}" class="ui_emoticon chatpp_emoticon">`
                    );
                } else {
                    newContentParts.push(common.htmlEncode(part.emoticon.tag))
                }
            }
        }

        return newContentParts.join('');
    }

    applyEmoticonsByModifyingDOM() {
        window.nodes = [];
        const single_chat_elm_class_name = '_message';
        let observer = new MutationObserver(mutations => {
            mutations.forEach(mutation => {
                let nodes = Array.from(mutation.addedNodes);
                for (let node of nodes) {
                    if (!node.className) {
                        continue;
                    }
                    if (node.className.indexOf(single_chat_elm_class_name) > -1) {
                        let message_node = node.getElementsByTagName("PRE");
                        message_node.length && this.applyEmoticons(message_node[0]);
                    }
                };
            });
        });
        observer.observe(document.documentElement, { childList: true, subtree: true });
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

    generateEmoticonsRegexFromArray(emoticon_list) {
        let patterns = [];
        for (let i in emoticon_list) {
            patterns.push(`(${this.generateRegexFromString(emoticon_list[i])})`);
        }
        return new RegExp(patterns.join("|"), "g");
    }

    generateRegexFromString(string) {
        return string.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
    }
}

let emoticon = new Emoticon();
module.exports = emoticon;
