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
        this.addExternalEmo();
        this.setEmoticonTextLabel();
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
                }).append(emo_list_div),
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
}

let emoticon = new Emoticon();
module.exports = emoticon;
