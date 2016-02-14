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
        var emo_data = JSON.parse(localStorage[Const.LOCAL_STORAGE_DATA_KEY]);
        this.addEmo(emo_data);
        this.status = true;
        this.updateEmoticonText();
        console.log("Emoticon added!");
    }

    isSpecialEmo(emo) {
        var special_emo = [":-ss", ":-??", "~:>", ":@)", "~X(", "3:-O"];
        return special_emo.indexOf(emo) > -1;
    }

    removeExternalEmo() {
        for (var i = CW.reg_cmp.length -1; true; i--) {
            var emo = CW.reg_cmp[i];
            if (!$.isEmptyObject(emo) && emo.external !== undefined && emo.external === true) {
                CW.reg_cmp.splice(i, 1);
            } else {
                break;
            }
        }
        this.status = false;
        common.setStatus("emoticon", false);
        this.updateEmoticonText();
        console.log("Emoticons removed!");
    }

    addEmoticonText() {
        if ($("#emoticonText").length > 0) {
            return;
        }
        var emoticon_text = "E " + (this.status ? "ON" : "OFF");
        $("#_chatSendTool").append(
            '<li id="_emoticons" role="button" class=" _showDescription">' +
            '<span id="emoticonText" class="emoticonText icoSizeSmall">' + emoticon_text + '</span>' +
            '</li>'
        );
        this.setEmoticonTextLabel();
        $("#emoticonText").click(() => this.toggleEmoticonsStatus());
        this.addErrorText();
    }

    setEmoticonTextLabel() {
        $("#_emoticons").attr("aria-label", "Data: " + localStorage["emoticon_data_version"]);
    }

    updateEmoticonText() {
        var emoticon_text = "E: " + (this.status ? "ON" : "OFF");
        var div = $("#emoticonText");
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
        var failed_data = JSON.parse(localStorage["failed_data"]).join(", ");
        var failed_data_text = `The following data could not be loaded: ${failed_data}`;
        $("#_chatSendTool").append(
            '<li id="_chatppErrors" role="button" class=" _showDescription">' +
            '<span id="chatppErrors" class="emoticonText icoSizeSmall chatppErrorsText">(ERROR)</span>' +
            '</li>'
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
        for (var index = 0; index < emo.length; index++) {
            var rep = "";
            var encoded_text = common.htmlEncode(emo[index].key);
            var title = encoded_text + " - " + emo[index].data_name;
            var img_src = common.htmlEncode(common.getEmoUrl(emo[index].src));
            if (this.isSpecialEmo(emo[index].key)) {
                rep = '<img src="' + img_src + '" class="ui_emoticon"/>';
            } else {
                rep = '<img src="' + img_src + '" title="' + title + '" alt="' +
                    encoded_text + '" class="ui_emoticon"/>';
            }
            var regex = common.generateEmoticonRegex(emo[index].key, emo[index].regex);
            CW.reg_cmp.push({
                key: regex,
                rep: rep,
                reptxt: emo[index].key,
                external: true
            });
        }
    }
}

let emoticon = new Emoticon();
module.exports = emoticon;
