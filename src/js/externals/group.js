let Const = require("../helpers/Const.js");
let common = require("../helpers/Common.js");
let Storage = require("../helpers/Storage.js");

let storage = new Storage();

let groups = [];

$(() => {
    if (!common.isPage("group")) {
        return;
    }
    common.setPageTitle();

    storage.get(Const.CHROME_SYNC_GROUP_KEY, (data) => {
        if (!$.isEmptyObject(data)) {
            groups = data;
            syncData();
        }
    });

    let data_group_name = $("#data-group-name");
    let data_group_member = $("#data-group-members");

    $("#button-group-add").click(() => {
        let info = {};
        info.group_name = data_group_name.val().trim();
        let group_members = getGroupMembers($("#data-group-members").val());
        if (validateGroupName(info.group_name) && group_members.length > 0) {
            info.group_members = group_members.join(", ");
            pushGroup(info);
            syncData();
            clearInput();
            data_group_name.focus();
        }
    });

    data_group_name.keyup((e) => {
        if (e.keyCode == 13) {
            data_group_member.focus();
        }
    });

    data_group_member.keyup((e) => {
        if (e.keyCode == 13) {
            $("#button-group-add").trigger("click");
        }
    });
});

function clearInput() {
    $("#data-group-name").val("");
    $("#data-group-members").val("");
}

function fillDataTable() {
    let table_text = "";
    let table_body = $("#table-data").find("tbody");
    table_body.html("");
    $.each(groups, (key, data) => {
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
    $(".btn-data-remove").click(() => {
        let name = $(this).data("name");
        removeGroup(name);
        syncData();
    });
}

function pushGroup(info) {
    let found = false;
    $.each(groups, (index, data) => {
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
    let found = false;
    $.each(groups, (index, data) => {
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

    return data.split(" ").length - 1 <= 2;
}

function getGroupMembers(data) {
    let members = data.split(",");
    let valid_members = [];
    for (let i = 0; i < members.length; i++) {
        let member = members[i];
        member = member.trim();
        if (member && $.isNumeric(member)) {
            if (valid_members.indexOf(member) === -1) {
                valid_members.push(member);
            }
        }
    }

    let regex = /\[[a-zA-Z]+:([0-9]+)\]/g;
    let match;
    while ((match = regex.exec(data)) != null) {
        valid_members.push(match[1]);
    }
    return valid_members;
}

function syncData(callback) {
    if (callback === undefined) {
        callback = fillDataTable;
    }
    storage.set(Const.CHROME_SYNC_GROUP_KEY, groups, callback);
}

