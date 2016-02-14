let common = require("../helpers/Common.js");
let Const = require("../helpers/Const.js");

class Emoticon {
    constructor() {
        this.status = common.getStatus("emoticon");
    }

    setUp() {
        if (!this.status) {
            return;
        }
        this.addEmoticonText();
        this.addExternalEmo();
    }

    addExternalEmo() {
        let emo_data = JSON.parse(localStorage[Const.LOCAL_STORAGE_DATA_KEY]);
        this.addEmo(emo_data);
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
                break;
            }
        }
        this.status = false;
        common.setStatus("emoticon", false);
        this.updateEmoticonText();
    }

    addEmoticonText() {
        if ($("#emoticonText").length > 0) {
            return;
        }
        let emoticon_text = "E " + (this.status ? "ON" : "OFF");
        $("#_chatSendTool").append(
            "<li id=\"_emoticons\" role=\"button\" class=\" _showDescription\">" +
            "<span id=\"emoticonText\" class=\"emoticonText icoSizeSmall\">" + emoticon_text + "</span>" +
            "</li>"
        );
        this.setEmoticonTextLabel();
        $("#emoticonText").click(() => this.toggleEmoticonsStatus());
        this.addErrorText();
    }

    setEmoticonTextLabel() {
        $("#_emoticons").attr("aria-label", "Data: " + localStorage["emoticon_data_version"]);
    }

    updateEmoticonText() {
        let emoticon_text = "E: " + (this.status ? "ON" : "OFF");
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
            "<li id=\"_chatppErrors\" role=\"button\" class=\" _showDescription\">" +
            "<span id=\"chatppErrors\" class=\"emoticonText icoSizeSmall chatppErrorsText\">(ERROR)</span>" +
            "</li>"
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
            let title = encoded_text + " - " + emo[index].data_name;
            let img_src = common.htmlEncode(common.getEmoUrl(emo[index].src));
            if (this.isSpecialEmo(emo[index].key)) {
                rep = "<img src=\"" + img_src + "\" class=\"ui_emoticon\"/>";
            } else {
                rep = "<img src=\"" + img_src + "\" title=\"" + title + "\" alt=\"" +
                    encoded_text + "\" class=\"ui_emoticon\"/>";
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
