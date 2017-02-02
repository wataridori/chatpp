let common = require("../helpers/Common.js");
let Const = require("../helpers/Const.js");

class Emoticon {
    constructor() {
        this.status = common.getStatus("emoticon");
        this.emoticons = [];
    }

    setUp() {
        // Chatwork has updated Javascript code, therefore the Emoticons feature does not work anymore.
        // Temporarily disable this feature
        return;
        // Normal code
        /* eslint-disable */
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
            "<li id='_externalEmoticonsButton' role='button' class=' _showDescription chatInput__element'>" +
            "<span id='externalEmoticonsButton' class='icoFontActionMore icoSizeLarge'></span>" +
            "</li>"
        );
        let emo_list_div = this.sorted_emoticons.map((emo) => {
            let encoded_text = common.htmlEncode(emo.key);
            let title = `${emo.data_name} - ${encoded_text}`;
            let img_src = common.htmlEncode(common.getEmoUrl(emo.src));
            let style = "padding: 5px; cursor: pointer; border: 1px solid #fff; border-radius: 3px; transition: border 0.2s linear 0s;"
            return `<li style="${style}"><img style="width:100%; max-width:50px" src="${img_src}" title="${title}" alt="${encoded_text}"></li>`;
        }).join("");

        $("#_wrapper").append(
            "<div id='_externalEmoticonList' class='emoticonList toolTip toolTipWhite mainContetTooltip' style='opacity: 1; z-index: 2; display: none; top: 480px; left: 160px;' role='tooltip'>" +
            "<div class='_cwTTTriangle toolTipTriangle toolTipTriangleWhiteBottom' style='left: 129px;'></div>" +
            `<ul id='_emoticonGallery' style='display: flex; flex-wrap: wrap; justify-content: center; max-width: 350px; max-height: 450px; overflow: auto'>${emo_list_div}</ul>` +
            "<div id=\"_externalEmotionDescription\" class=\"tooltipFooter\"></div>" +
            "</div>"
        )
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
        for (let i = CW.reg_cmp.length - 1; CW.reg_cmp.length > 0; i--) {
            let emo = CW.reg_cmp[i];
            if (!$.isEmptyObject(emo) && emo.external !== undefined && emo.external === true) {
                CW.reg_cmp.splice(i, 1);
            } else {
                if (!emo.special) {
                    break;
                }
            }
        }
        this.status = false;
        this.updateEmoticonText();
    }

    addEmoticonText() {
        if ($("#emoticonText").length > 0) {
            return;
        }
        let emoticon_text = `E: ${this.status ? "ON" : "OFF"}`;
        $("#_chatSendTool").append(
            `<li id="_emoticons" role="button" class=" _showDescription chatInput__element">
                <span id="emoticonText" class="emoticonText icoSizeSmall">${emoticon_text}</span>
            </li>`
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
        let emoticon_text = `E: ${this.status ? "ON" : "OFF"}`;
        let div = $("#emoticonText");
        div.html(emoticon_text);
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
            `<li id="_chatppErrors" role="button" class=" _showDescription chatInput__element">
                <span id="chatppErrors" class="emoticonText icoSizeSmall chatppErrorsText">(ERROR)</span>
            </li>`
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
            let rep = "";
            let encoded_text = common.htmlEncode(emo[index].key);
            let title = `${encoded_text} - ${emo[index].data_name}`;
            let src = common.htmlEncode(common.getEmoUrl(emo[index].src));
            if (this.isSpecialEmo(emo[index].key)) {
                rep = `<img src="${src}" class="ui_emoticon"/>`;
            } else {
                rep = `<img src="${src}" title="${title}" alt="${encoded_text}" class="ui_emoticon"/>`;
            }
            let regex = common.generateEmoticonRegex(emo[index].key, emo[index].regex);
            CW.reg_cmp.push({
                key: regex,
                rep,
                reptxt: emo[index].key,
                external: true
            });
        }
    }
}

let emoticon = new Emoticon();
module.exports = emoticon;
