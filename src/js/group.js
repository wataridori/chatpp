var CHROME_SYNC_GROUP_KEY = "CHATPP_CHROME_SYNC_GROUP";

var groups = [];

$(function() {
    var app_detail = chrome.app.getDetails();
    var version = app_detail.version;
    $('#chatpp_version').html(version);

    chrome.storage.sync.get(CHROME_SYNC_GROUP_KEY, function(data) {
        if (!$.isEmptyObject(data)) {
            data = data[CHROME_SYNC_GROUP_KEY];
            groups = data;
            syncData();
        }
    });

    var data_group_name = $("#data-group-name");
    var data_group_member = $("#data-group-members");

    $('#button-group-add').click(function() {
       var info = {};
       info.group_name = data_group_name.val().trim();
       var group_members = getGroupMembers($('#data-group-members').val());
       if (validateGroupName(info.group_name) && group_members.length > 0) {
           info.group_members = group_members.join(', ');
           pushGroup(info);
           syncData();
           clearInput();
           data_group_name.focus();
       }
    });

    data_group_name.keyup(function (e) {
        if (e.keyCode == 13) {
            data_group_member.focus();
        }
    });

    data_group_member.keyup(function (e) {
        if (e.keyCode == 13) {
            $('#button-group-add').trigger('click');
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
            table_text += "<td class='text-center'><button class='btn btn-warning btn-sm btn-data-remove' data-name='" + data.group_name
            + "' id='btn-" + key + "'> Remove </button></td>";
            table_text += "</tr>";
        }
    });
    table_body.append(table_text);
    $('.btn-data-remove').click(function() {
        var name = $(this).data('name');
        removeGroup(name);
        syncData();
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

function removeGroup(name) {
    var found = false;
    $.each(groups, function(index, data) {
        if (name === data.group_name) {
            found = index;
        }
    });

    if (found >= 0) {
        groups.splice(found, 1);
    }
}

function validateGroupName(data) {
    if (data.length > 15 || data.length < 2) {
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

    var regex = /\[[a-zA-Z]+:([0-9]+)\]/g;
    var match;
    while ((match = regex.exec(data)) != null) {
        valid_members.push(match[1]);
    }
    return valid_members;
}

function syncData(callback) {
    if (callback === undefined) {
        callback = fillDataTable;
    }
    var sync = {};
    sync[CHROME_SYNC_GROUP_KEY] = groups;
    chrome.storage.sync.set(sync, function() {
        if (typeof callback != 'undefined') {
            callback();
        }
    });
}

