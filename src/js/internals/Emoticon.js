let common = require("../helpers/Common.js");
let Const = require("../helpers/Const.js");

let KEY_COLON = "::";

class Emoticon {
    constructor() {
        this.status = common.getStatus("emoticon");
        this.emoticons = [];
        this.start = /::/ig;
        this.is_colon = false;
        this.emo_name = "";
        this.emo_cursor_loca = 0;
        this.list_all_emo = JSON.parse(localStorage[Const["LOCAL_STORAGE_DATA_KEY"]]);
        this.chat_text_jquery = $("#_chatText");
        this.chat_text_element = document.getElementById("_chatText");
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
        let html = "<div id='suggestion-emotion-container'></div>";
        $("#_chatTextArea").append(html);
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
        if ($("#externalEmoticonsButton").length > 0) {
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
                    "role": "button"
                }
            }).append(
                $("<span>", { id: "externalEmoticonsButton", class:"icoFontActionMore icoSizeLarge" })
            )
        );
        
        let data = [];
        this.sorted_emoticons.forEach((emo) => {
            if (data.indexOf(emo.data_name) == -1) {
                data.push(emo.data_name);
            }  
        });

        let temp = [];
        let arrayData= [];
        let sorted_Emoticons = this.sorted_emoticons;
        data.forEach((item) => {
            temp = [];
            sorted_Emoticons.map((emo) => {
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

        $("#externalEmoticonsButton").click((e) => {
            u.open($(e.currentTarget));
            $("#_externalEmoticonList #_emoticonGalleryTab").append(arrayData[0]);
            $("#_externalEmoticonList #tabEmotionBig button").css("background-color", "white");
            $("#tabEmotion0").css("background-color", "#eaeae8");
        });

        data.forEach((item, index) => {
            $("#_externalEmoticonList #tabEmotionBig").append($("<button>", {
                id: `tabEmotion${index}`,
                class: "w3-bar-item w3-button w3-emotion"
            }).append(item));
        });

        data.forEach((item, index) => {
            $(`#tabEmotion${index}`).on("click", (event) => {
                event.preventDefault();
                $("#_emoticonGalleryTab li").remove();
                $("#_externalEmoticonList #_emoticonGalleryTab").append(arrayData[index]);
            });
        });

        data.forEach((item, index) => {
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

        if (!bind_event) {
            return;
        }
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
        for (let index = 0; index < emo.length; index++) {
            let encoded_text = common.htmlEncode(emo[index].key);
            let title = `${encoded_text} - ${emo[index].data_name} - Chatpp`;
            let src = common.htmlEncode(common.getEmoUrl(emo[index].src));
            // Check whether Chatworks use new Javascript Code
            if (this.isNewMechanism()) {
                let one_emo = {
                    name: encoded_text,
                    title,
                    src,
                    tag: emo[index].key,
                    external: true
                };
                emoticons.baseEmoticons.push(one_emo);
                emoticons.tagHash[emo[index].key] = one_emo;
            } else {
                if (this.isSpecialEmo(emo[index].key)) {
                    title = "";
                    encoded_text = "";
                }
                // If Chatwork uses old Javascript code, then use the old method
                let rep = `<img src="${src}" title="${title}" alt="${encoded_text}" class="ui_emoticon"/>`;
                let regex = common.generateEmoticonRegex(emo[index].key, emo[index].regex);
                CW.reg_cmp.push({
                    key: regex,
                    rep,
                    reptxt: emo[index].key,
                    external: true
                });
            }
        }
        if (this.isNewMechanism()) {
            tokenizer.setEmoticons(emoticons.getAllEmoticons().map((emo) => emo.tag));
        }
    }

    isNewMechanism() {
        return typeof emoticons !== "undefined" && typeof tokenizer !== "undefined";
    }

    hideSuggestionEmotionsBox() {
        this.is_colon = false;
        this.emo_name = "";
        this.emo_cursor_loca = 0;
        $("#suggestion-emotion-container").scrollTop(0);
        $("#suggestion-emotion-container").fadeOut(0);
        $("#suggestion-emotion-container").html("");
    }
}

let emoticon = new Emoticon();
module.exports = emoticon;
