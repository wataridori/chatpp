$(window).ready(function(){

    var start = /@/ig;
    var is_displayed = false;
    var is_inserted = false;
    var is_navigated = false;
    var is_outbound_of_list = false;
    var current_index = 0;
    var selected_index = 0;
    var current_RM = null;
    var member_objects = [];
    var insert_mode = 'normal';
    var fuse = null;
    var DISPLAY_NUMS = 3;
    var cached_enter_action = ST.data.enter_action;
    var options = {
        keys: ['keys']
    };
    var chat_text_jquery = $('#_chatText');
    var chat_text_element = document.getElementById('_chatText');
    var suggestion_messages = {
        normal: {ja: '\u691C\u7D22\u7D50\u679C\u306F\u3042\u308A\u307E\u305B\u3093', en: 'No Matching Results'},
        all: {ja: '\u3059\u3079\u3066\u3092\u9078\u629E\u3057\u307E\u3059', en: 'Select All Members'}
    }

    $("<div id='suggestion-container' class='toolTipListWidth toolTip toolTipWhite mainContetTooltip'></div>").insertAfter("#_chatText");
    hideSuggestionBox();

    function findAtmark(){
        content = chat_text_jquery.val();
        atmarks = content.match(start);
        // we only interested in @ symbol that: at the start of line or has a space before it
        last_atmark_index = content.lastIndexOf("@");
        if (last_atmark_index != 0 && (content.charAt(last_atmark_index - 1) != " " && content.charAt(last_atmark_index - 1) != "\n")) {
            return false;
        }
        if (atmarks) {
            spaces = getTypedText().match(/ /ig);
            // text from last @ to current caret position have more than 2 spaces
            if (spaces && spaces.length > 2) {
                return false;
            }
            return true;
        } else{
            // There is no @ symbol
            return false;
        }
    }

    function getTypedText(){
        content = chat_text_jquery.val();
        start_pos = content.lastIndexOf("@");
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
        setCaretPosition(chat_text_element, chat_text_jquery.val().lastIndexOf('@') + 1)
        position = Measurement.caretPos(chat_text_jquery);
        position.top += parseInt(chat_text_jquery.css('font-size')) - rect.top + 2;
        position.left -= rect.left;
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
        insert_mode = 'normal';
        $("#suggestion-container").html('');
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

    function getRawResultsAndSetMode(typed_text){
        if (typed_text == 'me') {
            insert_mode = 'me';
            return [getMemberObject(AC.myid)];
        }
        if (typed_text == 'all') {
            insert_mode = 'all';
            return [];
        }
        insert_mode = 'normal';
        return fuse.search(typed_text);
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
        if (e.which == 27) {
            hideSuggestionBox();
        }
    });

    chat_text_jquery.keydown(function(e) {
        if (e.which == 9 || e.which == 13) {
            if (insert_mode == 'all') {
                setSuggestedChatText(getTypedText(), null, null);
                // dirty hack to prevent message to be sent
                if (cached_enter_action == 'send') ST.data.enter_action = 'br';
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

        if (current_RM != RM.id) {
            member_objects = buildMemberListData();
            fuse = new Fuse(member_objects, options);
            current_RM = RM.id;
        }

        if (findAtmark()) {
            if (!is_displayed) {
                setSuggestionBoxPosition();
                showSuggestionBox(buildList(filterDisplayResults(member_objects)));
                is_displayed = true;
            }

            typed_text = getTypedText();
            if (typed_text.length) {
                if (typed_text.substring(1)) {
                    raw_results = getRawResultsAndSetMode(typed_text.substring(1));
                } else {
                    raw_results = member_objects;
                }

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

    chat_text_jquery.keydown(function (e) {
        if (!mention_status) {
            return;
        }
        if ((e.which == 9 || e.which == 13 || e.which == 38 || e.which == 40) && is_displayed) {
            is_navigated = true;
            holdCaretPosition(e);
        } else {
            is_navigated = false;
        }
    });

    function setSuggestedChatText(entered_text, target_name, cwid){
        current_pos = doGetCaretPosition(chat_text_element);
        var old = chat_text_jquery.val();
        var replace_text = '';
        switch (insert_mode){
            case 'normal':
            case 'me':
                replace_text = "[To:" + cwid + "] " + target_name + '\n';
                break;
            case 'all':
                for (var i = 0; i < member_objects.length; i++) {
                    replace_text += "[To:" + member_objects[i].value + "] " + member_objects[i].aid2name + '\n';
                };
                break;
            default:
                break;
        }
        var content = old.replace(entered_text, replace_text);
        chat_text_jquery.val(content);
        setCaretPosition(chat_text_element, current_pos + replace_text.length);
        hideSuggestionBox();
    }

    function buildList(members){
        switch (insert_mode){
            case 'normal':
            case 'me':
                if (members.length) {
                    txt = '<ul>';
                    for (var i = 0; i < members.length; i++) {
                        txt += '<li class="suggested-name" role="listitem" data-cwui-lt-value="' + members[i].value + '">' + members[i].label + "</li>"
                    };
                    txt + '</ul>';
                    return txt;
                } else {
                    message = (LANGUAGE == 'ja') ? '\u691C\u7D22\u7D50\u679C\u306F\u3042\u308A\u307E\u305B\u3093' : 'No Matching Results';
                    return '<ul><li>' + suggestion_messages[insert_mode][LANGUAGE] + '</li></ul>';
                }
                break;
            case 'all':
                return '<ul><li>' + suggestion_messages[insert_mode][LANGUAGE] + '</li></ul>';
                break;
            default:
                break;
        }

    }

    function buildMemberListData() {
        if (!RM) return [];
        sorted_member_list = RM.getSortedMemberList(),
        b = [],
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
            keys: AC.getSearchKeys(member)[0],
            value: member,
            label: CW.getAvatarPanel(member, {
                clicktip: !1,
                size: "small"
            }) + '<p class="autotrim">' + escape_html(h) + "</p>",
            aid2name: escape_html(h)
        }
    }
});
