let common = require("../helpers/Common.js");
let Const = require("../helpers/Const.js");
let chatwork = require("../helpers/ChatworkFacade.js");

let DISPLAY_NUMS = 3;
let MAX_PATTERN_LENGTH = 20;
let SPECIAL_CHARS = ["\n", "!", "$", "%", "^", "&", "*", "(", ")", "-", "+", "=", "[", "]", "{", "}", ";", ":", ",", "/", "`", "'", "\""];
let INSERT_MODE_SYM = {
    "PICON": "._",
    "NAME": ".",
    "TO": "_",
    "CC": "_cc_"
}

class Mention {
    constructor() {
        this.status = common.getStatus("mention");
        this.start = /@/ig;
        this.is_displayed = false;
        this.is_inserted = false;
        this.is_navigated = false;
        this.is_outbound_of_list = false;
        this.actived_atmark_index = 0;
        this.current_index = 0;
        this.selected_index = 0;
        this.current_RM = null;
        this.member_objects = [];
        this.insert_mode = "normal"; // normal, to, picon, name, cc
        this.insert_type = "one"; // one, me, all, contact, group
        this.selected_group_name = "";
        this.fuse = null;
        this.cached_enter_action = ST.data.enter_action;
        this.options = {
            keys: ["aid2name"],
            maxPatternLength: MAX_PATTERN_LENGTH
        };
        this.chat_text_jquery = $("#_chatText");
        this.chat_text_element = document.getElementById("_chatText");
        this.suggestion_messages = {
            one: {
                ja: "\u691C\u7D22\u7D50\u679C\u306F\u3042\u308A\u307E\u305B\u3093",
                en: "No Matching Results"
            },
            all: {
                ja: "\u3059\u3079\u3066\u3092\u9078\u629E\u3057\u307E\u3059",
                en: "Select All Members"
            },
            group: {
                ja: "\u7A7A\u306E\u30B0\u30EB\u30FC\u30D7",
                en: "Empty Group"
            }
        };
        this.random_user_messages = {
            ja: "\u30e1\u30f3\u30d0\u30fc\u3092\u30e9\u30f3\u30c0\u30e0\u3059\u308b",
            en: "Random a member"
        }
        this.no_admin_messages = {
            ja: "\u30A2\u30C9\u30DF\u30F3\u304C\u5B58\u5728\u3057\u307E\u305B\u3093",
            en: "There is no Admin in this Room"
        }

        this.group_mention = [];
    }

    setUp() {
        if (!this.status) {
            return;
        }
        if (localStorage[Const.LOCAL_STORAGE_GROUP_MENTION]) {
            this.group_mention = JSON.parse(localStorage[Const.LOCAL_STORAGE_GROUP_MENTION]);
        }
        this.group_mention.push({
            "group_name": "random",
            "group_members": ""
        });
        this.group_mention.push({
            "group_name": "admin",
            "group_members": chatwork.getRoomAdmins().join(",")
        });

        $("<div id='suggestion-container' class='toSelectorTooltip tooltipListWidth tooltip tooltip--white' role='tooltip'></div>").insertAfter("#_chatText");
        this.hideSuggestionBox();
        $("#_sendEnterActionArea").click(() => {
            this.cached_enter_action = $("#_sendEnterAction").cwCheckBox().isChecked() ? "send" : "br";
        });
        // http://stackoverflow.com/questions/610406/javascript-equivalent-to-printf-string-format
        // First, checks if it isn't implemented yet.
        if (!String.prototype.format) {
            String.prototype.format = function () {
                let args = arguments;
                return this.replace(/{(\d+)}/g, (match, number) =>
                    typeof args[number] != "undefined" ?
                        args[number] :
                        match
                );
            };
        }

        // hide suggestion box when click in textarea or outside
        this.chat_text_jquery.click(() => this.hideSuggestionBox());

        $("#_roomListArea").click(() => this.hideSuggestionBox());

        $("#_headerSearch").click(() => this.hideSuggestionBox());

        // when user press ESC, we hide suggestion box
        $(document).keyup((e) => {
            if (!this.status) {
                return;
            }
            if (e.which == 27) {
                this.hideSuggestionBox();
            }
        });

        this.chat_text_jquery.keydown((e) => {
            if (!this.status) {
                return;
            }

            if ((e.which == 38 || e.which == 40 || e.which == 9 || e.which == 13) && this.is_displayed) {
                this.is_navigated = true;
                this.holdCaretPosition(e);
            } else {
                this.current_index = 0;
                this.is_navigated = false;
            }

            if (e.which == 9 || e.which == 13) {
                if ((this.insert_type == "all" || this.insert_type == "group") && this.is_displayed) {
                    this.setSuggestedChatText(this.getTypedText(), null, null);
                    // dirty hack to prevent message to be sent
                    if (this.cached_enter_action == "send") {
                        ST.data.enter_action = "br";
                    }
                    e.preventDefault();
                } else {
                    if ($(".suggested-name").first().length) {
                        if (this.is_navigated) {
                            $(".suggested-name").eq(this.selected_index).click();
                        } else {
                            $(".suggested-name").first().click();
                        }
                        // dirty hack to prevent message to be sent
                        if (this.cached_enter_action == "send") {
                            ST.data.enter_action = "br";
                        }
                        e.preventDefault();
                    } else {
                        // there's no thing after @ symbol
                        this.hideSuggestionBox();
                    }
                }
            }
        });

        this.chat_text_jquery.keyup((e) => {
            if (!this.status) {
                return;
            }

            if (e.which == 9 || e.which == 13) {
                return;
            }

            if ((e.which == 38 || e.which == 40) && this.is_displayed) {
                this.is_navigated = true;
                this.holdCaretPosition(e);
            } else {
                this.is_navigated = false;
            }

            if (this.current_RM != RM.id) {
                this.member_objects = this.buildMemberListData(false);
                this.updateAdminGroupData();
                this.fuse = new Fuse(this.member_objects, this.options);
                this.current_RM = RM.id;
            }


            if (this.findAtmark()) {
                if (this.is_displayed && this.getNearestAtmarkIndex() != -1 && this.getNearestAtmarkIndex() != this.actived_atmark_index) {
                    this.hideSuggestionBox();
                }

                if (!this.is_displayed) {
                    if (!this.isTriggerKeyCode(e.which)) {
                        return;
                    }
                    if (this.getNearestAtmarkIndex() != -1) {
                        this.actived_atmark_index = this.getNearestAtmarkIndex();
                    }
                    this.setSuggestionBoxPosition();
                    this.showSuggestionBox(this.buildList(this.filterDisplayResults(this.member_objects)));
                    this.is_displayed = true;
                }

                let typed_text = this.getTypedText();
                if (typed_text.length) {
                    if (typed_text.charAt(1) == "#") {
                        if (this.insert_type != "contact") {
                            this.member_objects = this.buildMemberListData(true);
                            this.fuse = new Fuse(this.member_objects, this.options);
                            this.insert_type = "contact";
                        }
                        typed_text = typed_text.substring(1);
                    }
                    let raw_results = this.getRawResultsAndSetMode(typed_text.substring(1));

                    if (e.which == 38) {
                        this.current_index -= 1;
                    }
                    if (e.which == 40) {
                        this.current_index += 1;
                    }
                    let filtered_results = this.filterDisplayResults(raw_results);

                    if (e.which == 38 && this.is_outbound_of_list) {
                        this.selected_index -= 1;
                        if (this.selected_index < 0) {
                            this.selected_index = 0;
                        }
                    }
                    if (e.which == 40 && this.current_index > raw_results.length - filtered_results.length) {
                        this.selected_index += 1;
                        if (this.selected_index >= Math.min(DISPLAY_NUMS, filtered_results.length)) {
                            this.selected_index = Math.min(DISPLAY_NUMS, filtered_results.length) - 1;
                        }
                    }

                    this.showSuggestionBox(this.buildList(filtered_results));
                }

                if (e.which == 27) {
                    // when user press ESC, we hide suggestion box
                    this.hideSuggestionBox();
                    this.holdCaretPosition(e);
                }
            } else {
                this.hideSuggestionBox();
            }

            return false;
        });

        this.addMentionText();
        this.ccMention();
    }

    getNearestAtmarkIndex() {
        let content = this.chat_text_jquery.val();
        let atmarks = content.match(this.start);

        if (!atmarks) {
            return -1;
        }

        let caret_index = this.doGetCaretPosition(this.chat_text_element);
        let atmark_index = content.indexOf("@");
        let pre_atmark_index = -1;
        do {
            if (atmark_index >= caret_index) {
                break;
            }
            pre_atmark_index = atmark_index;
            atmark_index = content.indexOf("@", atmark_index + 1);
        } while (atmark_index != -1);

        return pre_atmark_index;
    }

    findAtmark() {
        let content = this.chat_text_jquery.val();
        // we only interested in @ symbol that: at the start of line or has a space before it
        let atmark_index = this.getNearestAtmarkIndex();
        if (atmark_index != 0 && (content.charAt(atmark_index - 1) != " " && content.charAt(atmark_index - 1) != "\n")) {
            return false;
        }

        if (this.getTypedText().length >= MAX_PATTERN_LENGTH || this.getTypedText().length == 0) {
            return false;
        }
        if (atmark_index != -1) {
            let spaces = this.getTypedText().match(/ /ig);
            // text from last @ to current caret position have more than 2 spaces
            if (spaces && spaces.length > 2) {
                return false;
            }

            // text contains special characters ?
            for (let i = 0; i < SPECIAL_CHARS.length; i++) {
                if (this.getTypedText().indexOf(SPECIAL_CHARS[i]) != -1) {
                    return false;
                }
            }


            return true;
        } else {
            // There is no @ symbol
            return false;
        }
    }

    getTypedText() {
        let content = this.chat_text_jquery.val();
        let start_pos = this.getNearestAtmarkIndex();
        if (start_pos == -1) return "";
        let end_pos = this.doGetCaretPosition(this.chat_text_element);
        let txt = content.substr(start_pos, end_pos - start_pos);
        if (txt) {
            return txt;
        } else {
            return "";
        }
    }

    setSuggestionBoxPosition() {
        let rect = this.chat_text_element.getBoundingClientRect();
        let current_pos = this.doGetCaretPosition(this.chat_text_element);
        this.setCaretPosition(this.chat_text_element, this.actived_atmark_index + 1);
        let position = Measurement.caretPos(this.chat_text_jquery);
        position.top -= rect.top;
        position.left -= rect.left;
        if (rect.width - position.left < 236) {
            position.left -= 236;
        }
        if (rect.height - position.top < 90) {
            if (position.top < 108) {
                $("#_chatTextArea").css({
                    "overflow-y": "visible",
                    "z-index": 2
                });
            }
            position.top -= 118;
        } else {
            position.top += parseInt(this.chat_text_jquery.css("font-size")) + 2
        }
        $("#suggestion-container").parent().css({
            position: "relative"
        });
        $("#suggestion-container").css({
            top: position.top,
            left: position.left,
            position: "absolute"
        });
        this.setCaretPosition(this.chat_text_element, current_pos);
    }

    showSuggestionBox(content) {
        this.is_inserted = false;
        $("#suggestion-container").html(content).show();
        $("#suggestion-container").css("visibility", "visible");
        if (this.is_navigated) {
            $(".suggested-name").eq(this.selected_index).css("background-color", "#D8F0F9");
        } else {
            $(".suggested-name").first().css("background-color", "#D8F0F9");
        }

        $(".suggested-name").click((e) => {
            if (this.is_inserted) {
                return;
            }
            this.is_inserted = true;
            let target = $(e.currentTarget);
            target.css("background-color", "#D8F0F9");
            this.setSuggestedChatText(this.getTypedText(), target.text(), target.data("cwui-lt-value"));
        });

        $(".suggested-name").mouseover((e) => {
            $(e.currentTarget).css("background-color", "white");
            $("#suggestion-container>ul li:first-child").css("background-color", "#D8F0F9");
        });
    }

    hideSuggestionBox(content) {
        $("#suggestion-container").html(content).hide();
        $("#suggestion-container").css("visibility", "hidden");
        this.cleanUp();
    }

    cleanUp() {
        this.is_displayed = false;
        this.is_navigated = false;
        this.current_index = 0;
        this.selected_index = 0;
        this.actived_atmark_index = -1;
        this.insert_mode = "normal";
        if (this.insert_type == "contact") {
            this.member_objects = this.buildMemberListData(false);
            this.fuse = new Fuse(this.member_objects, this.options);
        }
        if (this.insert_type == "group") {
            this.selected_group_name = "";
        }
        this.insert_type = "one";
        $("#suggestion-container").html("");
        $("#_chatTextArea").css({
            "overflow-y": "scroll",
            "z-index": 0
        });
        // restore setting to correct value
        if (this.cached_enter_action != ST.data.enter_action && this.cached_enter_action == "send") {
            ST.data.enter_action = this.cached_enter_action;
        }
    }

    // http://blog.vishalon.net/index.php/javascript-getting-and-setting-caret-position-in-textarea/
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

    setCaretPosition(ctrl, pos) {
        if (ctrl.setSelectionRange) {
            ctrl.focus();
            ctrl.setSelectionRange(pos, pos);
        } else if (ctrl.createTextRange) {
            let range = ctrl.createTextRange();
            range.collapse(true);
            range.moveEnd("character", pos);
            range.moveStart("character", pos);
            range.select();
        }
    }

    // http://codegolf.stackexchange.com/a/17129
    merge() {
        let args = arguments;
        let hash = {};
        let arr = [];
        for (let i = 0; i < args.length; i++) {
            for (let j = 0; j < args[i].length; j++) {
                if (hash[args[i][j]] !== true) {
                    arr[arr.length] = args[i][j];
                    hash[args[i][j]] = true;
                }
            }
        }
        return arr;
    }

    filterDisplayResults(results) {
        this.is_outbound_of_list = false;
        if (!this.is_navigated) return results.slice(0, DISPLAY_NUMS);
        if (this.current_index < 0) this.current_index = 0;
        if (this.current_index >= results.length) this.current_index = results.length - 1;

        if (results.length <= DISPLAY_NUMS) {
            this.is_outbound_of_list = true;
            return results;
        }
        if (this.current_index >= results.length - DISPLAY_NUMS) {
            this.is_outbound_of_list = true;
            return results.slice(DISPLAY_NUMS * -1);
        } else {
            return results.slice(this.current_index, this.current_index + DISPLAY_NUMS);
        }
    }

    getRawResultsAndSetType(typed_text) {
        if (this.insert_type != "contact") {
            for (let i = 0; i < this.group_mention.length; i++) {
                if (typed_text == this.group_mention[i]["group_name"]) {
                    this.insert_type = "group";
                    this.selected_group_name = this.group_mention[i]["group_name"];
                    return [];
                }
            }
            if (typed_text == "me") {
                this.insert_type = "me";
                return [this.getMemberObject(AC.myid)];
            }
            if (typed_text == "all") {
                this.insert_type = "all";
                return [];
            }
            if (typed_text == "toall") {
                this.insert_type = "toall";
                return [];
            }
            this.insert_type = "one";
        }
        return typed_text ? this.fuse.search(typed_text) : this.member_objects;
    }

    getRawResultsAndSetMode(typed_text) {
        if (typed_text.slice(0, 2) == INSERT_MODE_SYM.PICON) {
            this.insert_mode = "picon";
            return this.getRawResultsAndSetType(typed_text.substring(2));
        }
        if (typed_text.slice(0, 1) == INSERT_MODE_SYM.NAME) {
            this.insert_mode = "name";
            return this.getRawResultsAndSetType(typed_text.substring(1));
        }
        if (typed_text.slice(0, 4) == INSERT_MODE_SYM.CC) {
            this.insert_mode = "CC";
            return this.getRawResultsAndSetType(typed_text.substring(4));
        }
        if (typed_text.slice(0, 1) == INSERT_MODE_SYM.TO) {
            this.insert_mode = "to";
            return this.getRawResultsAndSetType(typed_text.substring(1));
        }
        this.insert_mode = "normal";
        return this.getRawResultsAndSetType(typed_text);
    }

    isTriggerKeyCode(keyCode) {
        return [37, 38, 39, 40].indexOf(keyCode) == -1;
    }

    holdCaretPosition(event_object) {
        event_object.preventDefault();
        this.chat_text_jquery.focus();
        let current_pos = this.doGetCaretPosition(this.chat_text_element);
        this.setCaretPosition(this.chat_text_element, current_pos);
    }

    getReplaceText(format_string, target_name, cwid, members) {
        if (!members) {
            return null;
        }
        let replace_text = "";
        switch (this.insert_type) {
            case "me":
            case "one":
            case "contact":
                replace_text = format_string.format(cwid, target_name);
                break;
            case "group":
            case "all":
                for (let i = 0; i < members.length; i++) {
                    replace_text += format_string.format(members[i].value, members[i].aid2name);
                }
                break;
            case "toall":
                if (this.insert_mode === "to") {
                    replace_text = "TO ALL >>> \n";
                } else {
                    replace_text = "[toall]\n";
                }
                break;
            default:
                break;
        }
        return replace_text;
    }

    setSuggestedChatText(entered_text, target_name, cwid) {
        let old = this.chat_text_jquery.val();
        let start_pos = this.doGetCaretPosition(this.chat_text_element) - entered_text.length;
        let replace_text = "";
        let members = this.member_objects;
        if (this.insert_type == "group") {
            members = this.buildGroupMemberListData(this.selected_group_name);
        }
        switch (this.insert_mode) {
            case "to":
                replace_text = this.getReplaceText("[To:{0}] ", target_name, cwid, members);
                break;
            case "normal":
                replace_text = this.getReplaceText("[To:{0}] {1}\n", target_name, cwid, members);
                break;
            case "picon":
                replace_text = this.getReplaceText("[picon:{0}] ", target_name, cwid, members);
                break;
            case "name":
                replace_text = this.getReplaceText("[picon:{0}] {1}\n", target_name, cwid, members);
                break;
            case "CC":
                replace_text = this.getReplaceText("[CC][To:{0}] {1}\n", target_name, cwid, members);
                break;
            default:
                break;
        }
        let content = old.substring(0, start_pos) + replace_text + old.substring(start_pos + entered_text.length);
        this.chat_text_jquery.val(content);
        this.setCaretPosition(this.chat_text_element, start_pos + replace_text.length);
        this.hideSuggestionBox();
    }

    buildList(members) {
        switch (this.insert_type) {
            case "me":
            case "one":
            case "contact":
                if (members.length) {
                    let txt = "<ul>";
                    for (let i = 0; i < members.length; i++) {
                        txt += `<li class="suggested-name tooltipList__item" role="listitem" data-cwui-lt-value="${members[i].value}">${members[i].avatar + members[i].label}</li>`;
                    }
                    txt += "</ul>";
                    return txt;
                } else {
                    return `<ul><li class="suggested-name tooltipList__item" role="listitem">${this.suggestion_messages["one"][LANGUAGE]}</li></ul>`;
                }
                /* eslint-disable no-unreachable */
                break;
                /* eslint-enable */
            case "group":
                if (this.selected_group_name === "random") {
                    return `<ul><li class="suggested-name tooltipList__item" role="listitem">${this.random_user_messages[LANGUAGE]}</li></ul>`;
                }
                members = this.buildGroupMemberListData(this.selected_group_name);
                if (members.length) {
                    let txt = "<ul><li class='suggested-name tooltipList__item' role='listitem'>";
                    for (let i = 0; i < members.length; i++) {
                        if (i == 6) {
                            txt += `<span>+${(members.length - 6)}</span>`;
                            break;
                        }
                        txt += members[i].avatar;
                    }
                    txt += "</li></ul>";
                    return txt;
                } else {
                    let message = null;
                    if (this.selected_group_name === "admin") {
                        message = this.no_admin_messages[LANGUAGE];
                    } else {
                        message = this.suggestion_messages[this.insert_type][LANGUAGE];
                    }
                    return `<ul><li class="suggested-name tooltipList__item" role="listitem">${message}</li></ul>`;
                }
                /* eslint-disable no-unreachable */
                break;
                /* eslint-enable */
            case "all":
                return `<ul><li class="suggested-name tooltipList__item" role="listitem">${this.suggestion_messages[this.insert_type][LANGUAGE]}</li></ul>`;
                /* eslint-disable no-unreachable */
                break;
                /* eslint-enable */
            case "toall":
                return '<ul><li class="suggested-name tooltipList__item" role="listitem">To All</li></ul>';
                /* eslint-disable no-unreachable */
                break;
                /* eslint-enable */
            default:
                /* eslint-disable no-unreachable */
                break;
                /* eslint-enable */
        }

    }

    buildMemberListData(with_contact) {
        if (!RM) return [];
        let sorted_member_list = RM.getSortedMemberList();
        let b = [];
        if (with_contact) {
            sorted_member_list = this.merge(sorted_member_list, AC.contact_list);
        }
        let sorted_members_length = sorted_member_list.length;
        for (let index = 0; index < sorted_members_length; index++) {
            let member = sorted_member_list[index];
            if (member != AC.myid) {
                b.push(this.getMemberObject(member));
            }
        }
        return b;
    }

    updateAdminGroupData() {
        this.group_mention.forEach((data) => {
            if (data.group_name === "admin") {
                data.group_members = chatwork.getRoomAdmins().join(",");
            }
        })
    }

    getMemberObject(member) {
        let h = CW.is_business && ST.data.private_nickname && !RM.isInternal() ? AC.getDefaultNickName(member) : AC.getNickName(member);
        return {
            value: member,
            avatar: CW.getAvatarPanel(member, {
                clicktip: !1,
                size: "small"
            }),
            label: `<p class="autotrim">${common.htmlEncode(h)}</p>`,
            aid2name: common.htmlEncode(h)
        }
    }

    buildGroupMemberListData(group_name) {
        if (group_name === "random") {
            let member = chatwork.getRandomMemberInRoom();
            return [this.getMemberObject(member)];
        }
        for (let i = 0; i < this.group_mention.length; i++) {
            if (this.group_mention[i]["group_name"] == group_name) {
                let members = this.group_mention[i]["group_members"];
                if (!members) {
                    return [];
                }
                members = members.split(",");
                let results = [];
                for (let j = 0; j < members.length; j++) {
                    results.push(this.getMemberObject(members[j].trim()));
                }
                return results;
            }
        }
        return [];
    }

    ccMention() {
        CW.reg_cmp.push({
            key: /\[CC\]<span class=\"chatTimeLineTo\">TO<\/span>/g,
            rep: '<span class="chatTimeLineTo">CC</span>',
            reptxt: "[CC]",
            special: true
        });

    }


    addMentionText() {
        if ($("#_chatppMentionText").length > 0) {
            return;
        }
        $("#_chatSendTool").append(
            $("<li>", {
                id: "_chatppPreLoad",
                attr: {
                    "role": "button"
                },
                class: "_showDescription"
            }).append(
                $("<span>", {
                    id: "chatppMentionText",
                    class: "emoticonText icoSizeSmall"
                })
            )
        );
        this.updateMentionText();
        $("#chatppMentionText").click(() => this.toggleMentionStatus());
    }

    updateMentionText() {
        let mention_text = `M: ${this.status ? "ON" : "OFF"}`;
        let div = $("#chatppMentionText");
        div.html(mention_text);
        div.addClass("chatInput__element");
        if (this.status) {
            $("#_chatppMentionText").attr("aria-label", "Click to disable Mention Feature");
            div.addClass("emoticonTextEnable");
        } else {
            $("#_chatppMentionText").attr("aria-label", "Click to enable Mention Feature");
            div.removeClass("emoticonTextEnable");
        }
    }

    toggleMentionStatus() {
        this.status = !this.status;
        common.setStatus("mention", this.status);
        this.updateMentionText();
    }
}

let mention = new Mention();
module.exports = mention;
