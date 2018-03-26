let common = require("../helpers/Common.js");
let Const = require("../helpers/Const.js");

class Emoticon {
    constructor() {
        this.status = common.getStatus("emoticon");
        this.emoticons = [];
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
        this.addExternalEmoList();
        this.addEmoticonText();
        this.addExternalEmo();
    }

    addExternalEmoList() {
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
        let emo_list_div = this.sorted_emoticons.map((emo) => {
            let encoded_text = common.htmlEncode(emo.key);
            let titleapp = `${encoded_text} - ${emo.data_name} - Chatpp`;
            let img_src = common.htmlEncode(common.getEmoUrl(emo.src));
            let liElement = $("<li>", {
                css: {
                    "padding": "5px",
                    "cursor": "pointer",
                    "border": "1px solid #fff",
                    "border-radius": "3px",
                    "transition": "border 0.2s linear 0s"
                }
            }).append(
                $("<img>", {
                    id:"example",
                    css:{
                        "width": "100%",
                        "max-width": "50px"
                    },
                    attr: {
                        "src": img_src,
                        "title": titleapp,
                        "alt": encoded_text
                    }
                })
            );
            return liElement.prop("outerHTML");
        }).join("");

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
                    "role": "tooltip"
                }
            }).append(
                $("<div>", {
                    class:"_cwTTTriangle toolTipTriangle toolTipTriangleWhiteBottom",
                    css: {
                        "left" :"129px"
                    }
                }),
                $("<ul>", {
                    id:"_emoticonGallery",
                    css: {
                        "display": "flex",
                        "flex-wrap": "wrap",
                        "justify-content": "center",
                        "max-width": "350px",
                        "max-height": "450px",
                        "overflow": "auto"
                    }
                }).append(emo_list_div),
                $("<div>", {
                    id: "_externalEmotionDescription",
                    class:"tooltipFooter"
                })

            )
        );
        let hint = _is_mac ? L.chatsend_shift_and_command_hint : L.chatsend_shift_and_ctrl_hint;
        let u = $("#_externalEmoticonList").cwToolTip({
            open: () => $("#_externalEmotionDescription").text(hint)
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
        $("#externalEmoticonsButton").click((e) => {
            u.open($(e.currentTarget));
        });
    }

    addExternalEmo() {
        this.addEmo(this.emoticons);
        this.status = true;
        this.updateEmoticonText();
    }

    isSpecialEmo(emo) {
        let special_emo = [":-ss", ":-??", "~:>", ":@)", "~X(", "3:-O"];
        return special_emo.indexOf(emo) > -1;
    }

    removeExternalEmo() {
        let emoticons_list = this.isNewMechanism() ? emoticons.baseEmoticons : CW.reg_cmp;
        for (let i = emoticons_list.length - 1; emoticons_list.length > 0; i--) {
            let emo = emoticons_list[i];
            if (!$.isEmptyObject(emo) && emo.external !== undefined && emo.external === true) {
                // Check whether Chatwork uses new Javascript Code
                if (this.isNewMechanism()) {
                    emoticons.baseEmoticons.splice(i, 1);
                    delete emoticons.tagHash[emo.key];
                } else {
                    CW.reg_cmp.splice(i, 1);
                }
            } else {
                if (!emo.special) {
                    break;
                }
            }
        }
        if (this.isNewMechanism()) {
            tokenizer.setEmoticons(emoticons.getAllEmoticons().map((emo) => emo.tag));
        }
        this.status = false;
        this.updateEmoticonText();
    }

    addEmoticonText() {
        if ($("#emoticonText").length > 0) {
            return;
        }
        let emoticonText = `E: ${this.status ? "ON" : "OFF"}`;
        $("#_chatSendTool").append(
            $("<li>", {
                id: "_emoticons",
                class: "_showDescription chatInput__element",
                attr: {
                    "role": "button"
                }
            }).append(
                $("<span>", {
                    id: "emoticonText",
                    class: "emoticonText icoSizeSmall"
                }).append(emoticonText)
            )
        );
        this.setEmoticonTextLabel();
        $("#emoticonText").click(() => this.toggleEmoticonsStatus());
        this.addErrorText();
    }

    setEmoticonTextLabel() {
        $("#_emoticons").attr("aria-label", `Data: ${localStorage["emoticon_data_version"]}`);
        $("#_externalEmoticonsButton").attr("aria-label", "View Chat++ Emoticons");
    }

    updateEmoticonText() {
        let emoticonText = `E: ${this.status ? "ON" : "OFF"}`;
        let div = $("#emoticonText");
        div.html(emoticonText);
        if (this.status) {
            div.addClass("emoticonTextEnable");
        } else {
            div.removeClass("emoticonTextEnable");
        }
    }

    addErrorText() {
        if (!localStorage["failed_data"] || $("#errorText").length > 0) {
            return;
        }
        let failed_data = JSON.parse(localStorage["failed_data"]).join(", ");
        let failed_data_text = `The following data could not be loaded: ${failed_data}`;
        $("#_chatSendTool").append(
            $("<li>", {
                id: "_chatppErrors",
                attr: {
                    "role": "button"
                },
                class: "_showDescription chatInput__element"
            }).append(
                $("<span>", {
                    id: "chatppPreLoad",
                    class: "emoticonText icoSizeSmall chatppErrorsText"
                }).text("ERROR")
            )
        );
        $("#_chatppErrors").attr("aria-label", failed_data_text);
    }

    toggleEmoticonsStatus() {
        if (this.status) {
            this.removeExternalEmo();
        } else {
            this.addExternalEmo();
        }
        RL.rooms[RM.id].build();
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
}

let emoticon = new Emoticon();
module.exports = emoticon;
