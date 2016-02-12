let common = require("../helpers/Common.js");

class RoomInformation {
    setUp() {
        if ($("#roomInfoIcon").length > 0) {
            return;
        }
        var room_info = '<li id="_roomInfo" role="button" class="_showDescription" aria-label="Show room Information" style="display: inline-block;"><span class="icoFontAdminInfoMenu icoSizeLarge"></span></li>';
        $('#_chatSendTool').append(room_info);
        var room_info_list = '<div id="_roomInfoList" class="roomInfo toolTip toolTipWhite mainContetTooltip" role="tooltip">' +
            '<div class="_cwTTTriangle toolTipTriangle toolTipTriangleWhiteBottom"></div>' +
            '<span id="_roomInfoText">' +
            '<div id="_roomInfoTextTotalMembers" class="tooltipFooter"></div>' +
            '<div id="_roomInfoTextTotalMessages" class="tooltipFooter"></div>' +
            '<div id="_roomInfoTextTotalFiles" class="tooltipFooter"></div>' +
            '<div id="_roomInfoTextTotalTasks" class="tooltipFooter"></div>' +
            '<div id="_roomInfoTextMyTasks" class="tooltipFooter"></div>' +
            '</span>' +
            '</div>';
        $("body").append(room_info_list);
        $("#_roomInfo").click(e => {
            this.prepareRoomInfo();
            var room_name = RM.getIcon() + " " + common.htmlEncode(RM.getName());
            var tip = $("#_roomInfoList").cwListTip({
                selectOptionArea: "<b>" + room_name + "</b>" + " Information",
                fixHeight: !1,
                search: !1
            });
            tip.open($(e.target));
        });
    }

    prepareRoomInfo() {
        var total_members = "<b>Total Members</b>: " + RM.getSortedMemberList().length;
        $("#_roomInfoTextTotalMembers").html(total_members);
        var total_messages = "<b>Total Messages</b>: " + RM.chat_num;
        $("#_roomInfoTextTotalMessages").html(total_messages);
        var total_tasks = "<b>Total Tasks</b>: " + RM.task_num;
        $("#_roomInfoTextTotalTasks").html(total_tasks);
        var my_tasks = "<b>My Tasks</b>: " + RM.mytask_num;
        $("#_roomInfoTextMyTasks").html(my_tasks);
        var total_files = "<b>Total Files</b>: " + RM.file_num;
        $("#_roomInfoTextTotalFiles").html(total_files);
    }

}

let room_information = new RoomInformation();
module.exports = room_information;