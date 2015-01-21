var CHROME_SYNC_KEY = "CHATPP_CHROME_SYNC_GROUP";

var group_storage;
var groups = [];
var group_info = {};

$(function() {
   $('#button-group-add').click(function() {
       var info = {};
       info.group_name = $('#data-group-name').val().trim();
       var group_members = getGroupMembers($('#data-group-members').val());
       if (validateGroupName(info.group_name) && group_members.length > 0) {
           info.group_members = group_members.join(',');
           pushGroup(info);
           fillDataTable();
           clearInput();
       }
   });
});

function clearInput() {
    $('#data-group-name').val('');
    $('#data-group-members').val('');
}

function fillDataTable() {
    var table_text = '';
    var table_body = $('#table-data').find('tbody');
    table_body.html('');
    $.each(groups, function(key, data) {
        if (data.group_name !== undefined && data.group_members !== undefined) {
            table_text += "<tr id='row-" + key + "'>";
            table_text += "<td class='text-center'>" + data.group_name + "</td>";
            table_text += "<td class='text-center'>" + data.group_members + "</td>";
            table_text += "<td class='text-center'><button class='btn btn-warning btn-sm btn-data-remove' data-key='" + key
            + "' id='btn-" + key + "'> Remove </button></td>";
            table_text += "</tr>";
        }
    });
    table_body.append(table_text);
    $('.btn-data-remove').click(function() {
        var key = $(this).data('key');
        $('#row-' + key).remove();
    });
}

function pushGroup(info) {
    var found = false;
    $.each(groups, function(index, data) {
        if (info.group_name === data.group_name) {
            groups[index] = info;
            found = true;
        }
    });

    if (!found) {
        groups.push(info);
    }
}

function validateGroupName(data) {
    if (data.length > 15 || data.length < 3) {
        return false;
    }

    return data.split(' ').length - 1 <= 2;
}

function getGroupMembers(data) {
    var members = data.split(',');
    var valid_members = [];
    for (var i = 0; i < members.length; i++) {
        var member = members[i];
        member = member.trim();
        if (member && $.isNumeric(member)) {
            if (valid_members.indexOf(member) === -1) {
                valid_members.push(member);
            }
        }
    }
    return valid_members;
}

