$(window).ready(function(){

    var start = /@/ig;
    var is_displayed = false;
    var is_inserted = false;
    var is_navigated = false;
    var is_outbound_of_list = false;
    var actived_atmark_index = 0;
    var current_index = 0;
    var selected_index = 0;
    var current_RM = null;
    var member_objects = [];
    var insert_mode = 'normal'; // normal, to, picon, name
    var insert_type = 'one'; // one, me, all, contact, group
    var selected_group_name = '';
    var fuse = null;
    var DISPLAY_NUMS = 3;
    var MAX_PATTERN_LENGTH = 20;
    var cached_enter_action = ST.data.enter_action;
    var options = {
        keys: ['aid2name'],
        maxPatternLength: MAX_PATTERN_LENGTH,
    };
    var chat_text_jquery = $('#_chatText');
    var chat_text_element = document.getElementById('_chatText');
    var suggestion_messages = {
        one: {ja: '\u691C\u7D22\u7D50\u679C\u306F\u3042\u308A\u307E\u305B\u3093', en: 'No Matching Results'},
        all: {ja: '\u3059\u3079\u3066\u3092\u9078\u629E\u3057\u307E\u3059', en: 'Select All Members'},
        group: {ja: '\u7A7A\u306E\u30B0\u30EB\u30FC\u30D7', en: 'Empty Group'}
    };

    var group_mention = [];
    if (localStorage['CHATPP_GROUP_MENTION'] !== undefined && localStorage['CHATPP_GROUP_MENTION']) {
        group_mention = JSON.parse(localStorage['CHATPP_GROUP_MENTION']);
    }

    $("<div id='suggestion-container' class='toolTipListWidth toolTip toolTipWhite mainContetTooltip'></div>").insertAfter("#_chatText");
    hideSuggestionBox();

    function getNearestAtmarkIndex(){
        var content = chat_text_jquery.val();
        var atmarks = content.match(start);

        if (!atmarks) {
            return -1;
        }

        var caret_index = doGetCaretPosition(chat_text_element);
        var atmark_index = content.indexOf("@");
        var pre_atmark_index = -1;
        do {
            if (atmark_index >= caret_index) {
                break;
            }
            pre_atmark_index = atmark_index;
            atmark_index = content.indexOf("@", atmark_index + 1);
        } while (atmark_index != -1);

        return pre_atmark_index;
    }

    function findAtmark(){
        var content = chat_text_jquery.val();
        // we only interested in @ symbol that: at the start of line or has a space before it
        atmark_index = getNearestAtmarkIndex();
        if (atmark_index != 0 && (content.charAt(atmark_index - 1) != " " && content.charAt(atmark_index - 1) != "\n")) {
            return false;
        }

        if (getTypedText().length >= MAX_PATTERN_LENGTH || getTypedText().length == 0) {
            return false;
        }
        if (atmark_index != -1) {
            spaces = getTypedText().match(/ /ig);
            // text from last @ to current caret position have more than 2 spaces
            if (spaces && spaces.length > 2) {
                return false;
            }
            // text contain new line character
            if (getTypedText().indexOf("\n") != -1){
                return false;
            }
            return true;
        } else {
            // There is no @ symbol
            return false;
        }
    }

    function getTypedText(){
        content = chat_text_jquery.val();
        start_pos = getNearestAtmarkIndex();
        if (start_pos == -1) return '';
        end_pos = doGetCaretPosition(chat_text_element);
        txt = content.substr(start_pos, end_pos - start_pos);
        if (txt) {
            return txt;
        } else {
            return '';
        }
    }

    function setSuggestionBoxPosition() {
        var rect = chat_text_element.getBoundingClientRect();
        var current_pos = doGetCaretPosition(chat_text_element);
        setCaretPosition(chat_text_element, actived_atmark_index + 1);
        position = Measurement.caretPos(chat_text_jquery);
        position.top -= rect.top;
        position.left -= rect.left;
        if (rect.width - position.left < 236) {
            position.left -= 236;
        }
        if (rect.height - position.top < 90) {
            if (position.top < 108) {
                $("#_chatTextArea").css({'overflow-y': 'visible', 'z-index': 2});
            }
            position.top -= 118;
        } else {
            position.top += parseInt(chat_text_jquery.css('font-size'))  + 2
        }
        $("#suggestion-container").parent().css({position: 'relative'});
        $("#suggestion-container").css({top: position.top, left: position.left, position:'absolute'});
        setCaretPosition(chat_text_element, current_pos);
    }

    function showSuggestionBox(content){
        is_inserted = false;
        $("#suggestion-container").html(content).show();
        $("#suggestion-container").css('visibility', 'visible');
        if (is_navigated) {
            $(".suggested-name").eq(selected_index).css("background-color", "#D8F0F9");
        } else {
            $(".suggested-name").first().css("background-color", "#D8F0F9");
        }

        $(".suggested-name").click(function () {
            if (is_inserted) return;
            is_inserted = true;
            $(this).css("background-color", "#D8F0F9");
            setSuggestedChatText(getTypedText(), $(this).text(), $(this).data('cwui-lt-value'));
        });

        $(".suggested-name" ).mouseover(function() {
            $(this).siblings().css("background-color", "white");
            $(this).css("background-color", "#D8F0F9");
        });

        $(".suggested-name" ).mouseout(function() {
            $(this).siblings().first().css("background-color", "#D8F0F9");
            $(this).css("background-color", "white");
        });
    }

    function hideSuggestionBox(content){
        $("#suggestion-container").html(content).hide();
        $("#suggestion-container").css('visibility', 'hidden');
        cleanUp();
    }

    function cleanUp(){
        is_displayed = false;
        is_navigated = false;
        current_index = 0;
        selected_index = 0;
        actived_atmark_index = -1;
        insert_mode = 'normal';
        if (insert_type == 'contact') {
            member_objects = buildMemberListData(false);
            fuse = new Fuse(member_objects, options);
        }
        if (insert_type == 'group') {
            selected_group_name = '';
        }
        insert_type = 'one';
        $("#suggestion-container").html('');
        $("#_chatTextArea").css({'overflow-y': 'scroll', 'z-index': 0});
        // restore setting to correct value
        if (cached_enter_action != ST.data.enter_action && cached_enter_action == 'send') {
            ST.data.enter_action = cached_enter_action;
        }
    }

    $("#_sendEnterActionArea").click(function() {
        cached_enter_action = $("#_sendEnterAction").cwCheckBox().isChecked() ? 'send' : 'br';
    });

    // http://blog.vishalon.net/index.php/javascript-getting-and-setting-caret-position-in-textarea/
    function doGetCaretPosition(ctrl){
        var CaretPos = 0;   // IE Support
        if (document.selection) {
            ctrl.focus ();
            var Sel = document.selection.createRange ();
            Sel.moveStart ('character', -ctrl.value.length);
            CaretPos = Sel.text.length;
        }
        // Firefox support
        else if (ctrl.selectionStart || ctrl.selectionStart == '0')
            CaretPos = ctrl.selectionStart;
        return (CaretPos);
    }

    function setCaretPosition(ctrl, pos){
        if(ctrl.setSelectionRange)
        {
            ctrl.focus();
            ctrl.setSelectionRange(pos,pos);
        }
        else if (ctrl.createTextRange) {
            var range = ctrl.createTextRange();
            range.collapse(true);
            range.moveEnd('character', pos);
            range.moveStart('character', pos);
            range.select();
        }
    }

    // http://stackoverflow.com/questions/610406/javascript-equivalent-to-printf-string-format
    // First, checks if it isn't implemented yet.
    if (!String.prototype.format) {
      String.prototype.format = function() {
        var args = arguments;
        return this.replace(/{(\d+)}/g, function(match, number) {
          return typeof args[number] != 'undefined'
            ? args[number]
            : match
          ;
        });
      };
    }

    // http://codegolf.stackexchange.com/a/17129
    function merge() {
       var args = arguments;
       var hash = {};
       var arr = [];
       for (var i = 0; i < args.length; i++) {
          for (var j = 0; j < args[i].length; j++) {
            if (hash[args[i][j]] !== true) {
              arr[arr.length] = args[i][j];
              hash[args[i][j]] = true;
            }
          }
        }
       return arr;
    }

    function filterDisplayResults(results){
        is_outbound_of_list = false;
        if (!is_navigated) return results.slice(0, DISPLAY_NUMS);
        if (current_index < 0) current_index = 0;
        if (current_index >= results.length) current_index = results.length - 1;

        if (results.length <= DISPLAY_NUMS) {
            is_outbound_of_list = true;
            return results;
        }
        if (current_index >= results.length - DISPLAY_NUMS) {
            is_outbound_of_list = true;
            return results.slice(DISPLAY_NUMS * -1);
        } else {
            return results.slice(current_index, current_index + DISPLAY_NUMS);
        }
    }

    function getRawResultsAndSetType(typed_text){
        if (insert_type != 'contact') {
            for (var i = 0; i < group_mention.length; i++) {
                if (typed_text == group_mention[i]['group_name']) {
                    insert_type = 'group';
                    selected_group_name = group_mention[i]['group_name'];
                    return [];
                }
            };

            if (typed_text == 'me') {
                insert_type = 'me';
                return [getMemberObject(AC.myid)];
            }
            if (typed_text == 'all') {
                insert_type = 'all';
                return [];
            }
            insert_type = 'one';
        }
        return typed_text ? fuse.search(typed_text) : member_objects;
    }

    function getRawResultsAndSetMode(typed_text){
        if (typed_text.slice(0, 2) == '._') {
            insert_mode = 'picon';
            return getRawResultsAndSetType(typed_text.substring(2));
        }
        if (typed_text.slice(0, 1) == '.') {
            insert_mode = 'name';
            return getRawResultsAndSetType(typed_text.substring(1));
        }
        if (typed_text.slice(0, 1) == '_') {
            insert_mode = 'to';
            return getRawResultsAndSetType(typed_text.substring(1));
        }
        insert_mode = 'normal';
        return getRawResultsAndSetType(typed_text);
    }

    // hide suggestion box when click in textarea or outside
    chat_text_jquery.click(function(){
        hideSuggestionBox();
    });

    $('#_roomListArea').click(function(){
        hideSuggestionBox();
    });

    $('#_headerSearch').click(function(){
        hideSuggestionBox();
    });

    // when user press ESC, we hide suggestion box
    $(document).keyup(function(e){
        if (!mention_status) {
            return;
        }
        if (e.which == 27) {
            hideSuggestionBox();
        }
    });

    function isTriggerKeyCode(keyCode){
        return [37, 38, 39, 40].indexOf(keyCode) == -1;
    }

    chat_text_jquery.keydown(function(e) {
        if (!mention_status) {
            return;
        }

        if (e.which == 38 || e.which == 40 && is_displayed) {
            is_navigated = true;
            holdCaretPosition(e);
        } else {
            is_navigated = false;
        }

        if (e.which == 9 || e.which == 13) {
            if ((insert_type == 'all' || insert_type == 'group') && is_displayed) {
                setSuggestedChatText(getTypedText(), null, null);
                // dirty hack to prevent message to be sent
                if (cached_enter_action == 'send') ST.data.enter_action = 'br';
                e.preventDefault();
            } else {
                if ($(".suggested-name").first().length) {
                    if (is_navigated) {
                        $(".suggested-name").eq(selected_index).click();
                    } else {
                        $(".suggested-name").first().click();
                    }
                    // dirty hack to prevent message to be sent
                    if (cached_enter_action == 'send') ST.data.enter_action = 'br';
                    e.preventDefault();
                } else {
                    // there's no thing after @ symbol
                    hideSuggestionBox();
                }
            }
        }
    });

    chat_text_jquery.keyup(function(e) {
        if (!mention_status) {
            return;
        }

        if (e.which == 9 || e.which == 13) {
            return;
        }

        if (e.which == 38 || e.which == 40 && is_displayed) {
            is_navigated = true;
            holdCaretPosition(e);
        } else {
            is_navigated = false;
        }

        if (current_RM != RM.id) {
            member_objects = buildMemberListData(false);
            fuse = new Fuse(member_objects, options);
            current_RM = RM.id;
        }


        if (findAtmark()) {
            if (is_displayed && getNearestAtmarkIndex() != -1 && getNearestAtmarkIndex() != actived_atmark_index) {
                hideSuggestionBox();
            }

            if (!is_displayed) {
                if (!isTriggerKeyCode(e.which)) {
                    return;
                }
                if (getNearestAtmarkIndex() != -1) {
                    actived_atmark_index = getNearestAtmarkIndex();
                }
                setSuggestionBoxPosition();
                showSuggestionBox(buildList(filterDisplayResults(member_objects)));
                is_displayed = true;
            }

            typed_text = getTypedText();
            if (typed_text.length) {
                if (typed_text.charAt(1) == '#') {
                    if (insert_type != 'contact') {
                        member_objects = buildMemberListData(true);
                        fuse = new Fuse(member_objects, options);
                        insert_type = 'contact';
                    }
                    typed_text = typed_text.substring(1);
                }
                raw_results = getRawResultsAndSetMode(typed_text.substring(1));

                if (e.which == 38) current_index -= 1;
                if (e.which == 40) current_index += 1;
                filtered_results = filterDisplayResults(raw_results);

                if (e.which == 38 && is_outbound_of_list) {
                    selected_index -= 1;
                    if (selected_index < 0) selected_index = 0;
                }
                if (e.which == 40 && current_index > raw_results.length - filtered_results.length) {
                    selected_index += 1;
                    if (selected_index >= Math.min(DISPLAY_NUMS, filtered_results.length)) selected_index = Math.min(DISPLAY_NUMS, filtered_results.length) - 1;
                }

                showSuggestionBox(buildList(filtered_results));
            }

            if (e.which == 27) {
                // when user press ESC, we hide suggestion box
                hideSuggestionBox();
                holdCaretPosition(e);
            }
        } else {
            hideSuggestionBox();
        }

        return false;
    });

    function holdCaretPosition(event_object) {
        event_object.preventDefault();
        chat_text_jquery.focus();
        current_pos = doGetCaretPosition(chat_text_element);
        setCaretPosition(chat_text_element, current_pos);
    }

    function getReplaceText(format_string, target_name, cwid, members){
        replace_text = '';
        switch (insert_type){
            case 'me':
            case 'one':
            case 'contact':
                replace_text = format_string.format(cwid, target_name);
                break;
            case 'group':
            case 'all':
                for (var i = 0; i < members.length; i++) {
                    replace_text += format_string.format(members[i].value, members[i].aid2name);
                };
                break;
            default:
                break;
        }
        return replace_text;
    }

    function setSuggestedChatText(entered_text, target_name, cwid){
        var old = chat_text_jquery.val();
        var start_pos = doGetCaretPosition(chat_text_element) - entered_text.length;
        var replace_text = '';
        var members = member_objects;
        if (insert_type == 'group') {
            members = buildGroupMemberListData(selected_group_name);
        }
        switch (insert_mode){
            case 'to':
                replace_text = getReplaceText("[To:{0}] ", target_name, cwid, members);
                break;
            case 'normal':
                replace_text = getReplaceText("[To:{0}] {1}\n", target_name, cwid, members);
                break;
            case 'picon':
                replace_text = getReplaceText("[picon:{0}] ", target_name, cwid, members);
                break;
            case 'name':
                replace_text = getReplaceText("[picon:{0}] {1}\n", target_name, cwid, members);
                break;
            default:
                break;
        }
        var content = old.substring(0, start_pos) + replace_text + old.substring(start_pos + entered_text.length);
        chat_text_jquery.val(content);
        setCaretPosition(chat_text_element, start_pos + replace_text.length);
        hideSuggestionBox();
    }

    function buildList(members){
        switch (insert_type){
            case 'me':
            case 'one':
            case 'contact':
                if (members.length) {
                    txt = '<ul>';
                    for (var i = 0; i < members.length; i++) {
                        txt += '<li class="suggested-name" role="listitem" data-cwui-lt-value="' + members[i].value + '">' + members[i].avatar + members[i].label + "</li>"
                    };
                    txt += '</ul>';
                    return txt;
                } else {
                    return '<ul><li>' + suggestion_messages['one'][LANGUAGE] + '</li></ul>';
                }
                break;
            case 'group':
                members = buildGroupMemberListData(selected_group_name);
                if (members.length) {
                    txt = '<ul><li>';
                    for (var i = 0; i < members.length; i++) {
                        if (i == 6){
                            txt += '<span>+' + (members.length - 6) + '</span>';
                            break;
                        }
                        txt += members[i].avatar;
                    };
                    txt += '</li></ul>';
                    return txt;
                } else {
                    return '<ul><li>' + suggestion_messages[insert_type][LANGUAGE] + '</li></ul>';
                }
                break;
            case 'all':
                return '<ul><li>' + suggestion_messages[insert_type][LANGUAGE] + '</li></ul>';
                break;
            default:
                break;
        }

    }

    function buildMemberListData(with_contact) {
        if (!RM) return [];
        sorted_member_list = RM.getSortedMemberList(),
        b = [];
        if (with_contact) {
            sorted_member_list = merge(sorted_member_list, AC.contact_list);
        }
        sorted_members_length = sorted_member_list.length;
        for (var index = 0; index < sorted_members_length; index++) {
            var member = sorted_member_list[index];
            if (member != AC.myid) {
                b.push(getMemberObject(member));
            }
        }
        return b;
    }

    function getMemberObject(member){
        var h = CW.is_business && ST.data.private_nickname && !RM.isInternal() ? AC.getDefaultNickName(member) : AC.getNickName(member);
        return {
            value: member,
            avatar: CW.getAvatarPanel(member, {
                clicktip: !1,
                size: "small"
            }),
            label: '<p class="autotrim">' + escape_html(h) + "</p>",
            aid2name: escape_html(h)
        }
    }

    function buildGroupMemberListData(group_name){
        for (var i = 0; i < group_mention.length; i++) {
            if (group_mention[i]['group_name'] == group_name) {
                members = group_mention[i]['group_members'].split(',');
                results = [];
                for (var j = 0; j < members.length; j++) {
                    results.push(getMemberObject(members[j].trim()));
                }
                return results;
            }
        }
        return [];
    }
});
