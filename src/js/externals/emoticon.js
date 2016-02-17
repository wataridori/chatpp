let common = require("../helpers/Common.js");
let Const = require("../helpers/Const.js");
let EmoStorage = require("../helpers/EmoStorage.js");
let emo_storage = new EmoStorage();
let emoticons = [];
let emo_info = {};
let urls = {};
let init = false;

let official_emoticons_data = common.official_emoticons_data;

$(() => {
    if (!common.isPage("emoticon")) {
        return;
    }
    common.setPageTitle();
    emo_storage.get(Const.CHROME_SYNC_KEY, (info) => {
        if (!$.isEmptyObject(info)) {
            emo_info = info;
            emo_storage.setFeatureStatus(emo_info);
            for (let key in info) {
                let emo_data = info[key];
                let url = common.getEmoticonDataUrl(emo_data.data_name, emo_data.data_url);
                if (url) {
                    urls[emo_data.data_name] = url;
                }
            }
        }
        if ($.isEmptyObject(urls)) {
            init = true;
            urls["Default"] = common.getEmoticonDataUrl("Default");
        }
        fillDataTable();

        if (init) {
            getData(urls, reload);
        } else {
            getData(urls, fillTable);
            showOfficialData();
        }
    });

    $("#btn-reset").click(() => {
        bootbox.dialog({
            title: "<span class='text-primary'>Reset Emoticon Data",
            message: "<span class='text-danger'>Your are trying to reset emoticon data, which will clear your current data information.<br>" +
                "This action cannot be undone. Are you sure ?</span>",
            buttons: {
                success: {
                    label: "OK!",
                    className: "btn-success",
                    callback() {
                        emo_info = {};
                        getData({}, reload);
                    }
                },
                danger: {
                    label: "Cancel!",
                    className: "btn-danger"
                }
            }
        });
    })

    $("#btn-load").click(() => {
        if ($("#data-select").val() == "default") {
            getData(Const.DEFAULT_DATA_URL, reload);
        } else {
            let url = $("#data-url").val();
            if (!common.validateUrl(url)) {
                bootbox.alert("Invalid URL! Make sure your inputted URL is correct, and start with https!");
            } else {
                bootbox.dialog({
                    message: "The data from <a href=\"" + url + "\">" + url + "</a> may contain undesirable emoticons and we will not be responsible for it" ,
                    title: "<span class='text-danger'>Your are trying to load data that is not officially supported by Chat++.<br/> Do you want to continue ?</span>",
                    buttons: {
                        success: {
                            label: "OK!",
                            className: "btn-success",
                            callback() {
                                urls["added"] = url;
                                getData(urls, reload);
                            }
                        },
                        danger: {
                            label: "Cancel!",
                            className: "btn-danger",
                            callback() {

                            }
                        }
                    }
                });
            }
        }
    });

    $("#data-select").change((e) => {
        let val = $(e.currentTarget).val();
        if (val == "default") {
            $("#url-input-div").hide("slow");
        } else {
            $("#url-input-div").show("slow");
        }
    });
});

function getData(urls, callback) {
    if ($.isEmptyObject(urls)) {
        urls["Default"] = Const.DEFAULT_DATA_URL;
    }
    let loaded_urls = [];
    $.each(urls, (i, url) => {
        if (loaded_urls.indexOf(url) === -1) {
            loaded_urls.push(url);
        } else {
            return;
        }
        $.getJSON(url)
            .done((data) => {
                if (typeof(data.data_version) !== "undefined" && typeof(data.emoticons) !== "undefined") {
                    data.data_url = urls[data.data_name] ? urls[data.data_name] : urls["added"];
                    let priority = getPriority(data.data_name);
                    emo_storage.pushData(data, priority);
                    pushEmoticons(data.emoticons, priority, data.data_name);
                    if (emo_storage.data_count === common.getObjectLength(urls)) {
                        emo_storage.syncData(callback);
                    }
                } else {
                    bootbox.alert("Invalid data structure!");
                }
            }).fail(() => {
                let message = "<span class='text-danger'>There is an error occurred when loading or parsing the following url: <br>" +
                    "<a href='" + url + "'>" + url + "</a>" +
                    "<br>It may be because of the failure in downloading file or invalid file format.<br>" +
                    "Check your file data carefully and try to reload again.</span>"
                bootbox.alert(message);
            });
    });
}

function reload() {
    location.reload();
}

function getPriority(data_name) {
    let max = 0;
    for (let key in emo_info) {
        let val = emo_info[key];
        if (val.data_name === data_name) {
            return val.priority;
        }
        if (val.priority >= max) {
            max = val.priority + 1;
        }
    }

    return max;
}

function showOfficialData() {
    let official = $("#official-data");
    for (let data_name in official_emoticons_data) {
        if (emo_info[data_name] === undefined) {
            let new_button = "<div class=\"col-md-12 official-data\"><button class=\"btn btn-info btn-sm btn-official-data\" data-name=\"" + data_name + "\">Add " + data_name + "</button>"
                + "<span class=\"text-primary\" style=\"padding-left: 20px\"><strong>" + official_emoticons_data[data_name].description + "</strong></span>"
                + "</div><br>";
            official.append(new_button);
        }
    }

    $(".btn-official-data").click((e) => {
        let data_name = $(e.currentTarget).data("name");
        let url = official_emoticons_data[data_name].link;
        if (common.validateUrl(url)) {
            urls[data_name] = url;
            getData(urls, reload);
        }
    });
}

function pushEmoticons(emos, priority, data_name) {
    for (let i = 0; i < emos.length; i++) {
        let disable = false;
        emos[i].priority = priority;
        for (let j = 0; j < emoticons.length; j++) {
            if (emoticons[j].emo.key === emos[i].key) {
                if (emoticons[j].emo.priority < emos[i].priority) {
                    emoticons[j].status = true;
                } else {
                    disable = true;
                }
                break;
            }
        }
        emoticons.push({
            emo: emos[i],
            status: disable,
            data_name
        });
    }
}

function clearTable() {
    $(".table-emo > tbody").html("");
}

function fillTable() {
    clearTable();
    let info = emo_storage.data;
    if (info.data_name != "Default" && info.data_url) {
        $("#data-select").val("custom");
        $("#data-url").val(info.data_url);
        $("#url-input-div").show("slow");
        $("#btn-show-changelog").show("slow");
    }

    let table_text = "";
    let current_data = null;
    let last_key = 0;
    let last_data_name = null;
    $.each(emoticons, (key, data) => {
        if (!current_data || current_data !== data.data_name) {
            if (table_text) {
                $("#table-emo-" + last_data_name).find("tbody").append(table_text);
            }
            current_data = data.data_name;
            table_text = "";
            last_key = key;
        }
        last_data_name = data.data_name;
        if ((key - last_key) % 4 === 0) {
            table_text += "<tr>";
        }
        table_text += createTableTd(data);
        if ((key - last_key) % 4 === 3) {
            table_text += "</tr>";
        }
    });
    $("#table-emo-" + last_data_name).find("tbody").append(table_text);
}

function createEmoticonsTable(name) {
    let table =
        "<div id=\"emoticons-table\">" +
            "<div class=\"panel panel-warning\">" +
                "<div class=\"panel-heading\">" +
                    name +
                "</div>" +
                "<table class=\"table table-emo table-bordered\" id=\"table-emo-" + name + "\">" +
                    "<thead>" +
                        "<tr class=\"success text-center\">" +
                        "<th colspan=\"2\" class=\"text-center\">Emo</th>" +
                        "<th colspan=\"2\" class=\"text-center\">Emo</th>" +
                        "<th colspan=\"2\" class=\"text-center\">Emo</th>" +
                        "<th colspan=\"2\" class=\"text-center\">Emo</th>" +
                        "</tr>" +
                    "</thead>" +
                    "<tbody>" +
                    "</tbody>" +
                "</table>" +
            "</div>"
    "</div>";

    $("#emoticons-table").append(table);
}

function createTableTd(data) {
    let src = common.htmlEncode(common.getEmoUrl(data.emo.src));
    let row = "";
    let class_name = data.status ? "danger" : "info";
    row += "<td class='" + class_name + " text-center'>" + data.emo.key + "</td>";
    row += "<td class='text-center'><img class='emoticon' src='" + src + "'/> </td>";
    return row;
}

function createDataTableText(emo_data) {
    $("#table-data > tbody").html("");
    let table_text = "";
    let first = true;
    $.each(emo_data.slice().reverse(), (key, data) => {
        if (data.data_name !== undefined && data.data_url !== undefined) {
            let disabled = first ? "disabled" : "";
            first = false;
            table_text += "<tr>";
            table_text += "<td class='text-center'>" + data.data_name + "</td>";
            table_text += "<td class='text-center'>" + data.data_version + "</td>";
            table_text += "<td class='text-center'>" + createATag(data.data_url) + "</td>";
            table_text += "<td class='text-center'>" +
                " <button class='btn btn-primary btn-sm btn-data-move-up " + disabled + "' data-priority='" + data.priority + "' id='btn-move-up" + data.data_name + "'> Move Up </button>" +
                " <button class='btn btn-warning btn-sm btn-data-remove' data-name='" + data.data_name + "' id='btn-" + data.data_name + "'> Remove </button></td>";
            table_text += "</tr>";
        }
    });
    $("#table-data").find("tbody").append(table_text);
}

function fillDataTable() {
    let emo_info_array = emoDataObjectToArray(emo_info);
    createDataTableText(emo_info_array);
    $.each(emo_info_array.slice().reverse(), (key, data) => {
        if (data.data_name !== undefined && data.data_url !== undefined) {
            createEmoticonsTable(data.data_name);
        }
    });
    $("#btn-save").click(() => {
        let new_emo_storage = new EmoStorage();
        for (let i in emo_info_array) {
            new_emo_storage.pushData(emo_info_array[i], emo_info_array[i].priority);
        }
        new_emo_storage.syncData(reload);
    });
    $("#table-data").on("click", "button", (e) => {
        let button = $(e.currentTarget);
        if (button.hasClass("btn-data-move-up")) {
            let priority = button.data("priority");
            let temp;
            let up = priority + 1;
            if (emo_info_array[up]) {
                temp = emo_info_array[up];
                emo_info_array[up] = emo_info_array[priority];
                emo_info_array[priority] = temp;
                emo_info_array[up].priority = up;
                emo_info_array[priority].priority = priority;
            }
            createDataTableText(emo_info_array);
        }

        if (button.hasClass("btn-data-remove")) {
            let name = button.data("name");
            emo_storage.removeData(name);
            emo_storage.syncData(reload);
        }
    });
}

function rearrangePriority(data) {
    let i = 0;
    let new_data = [];
    for (let j in data) {
        data[j].priority = i;
        new_data[i++] = data[j];
    }

    return new_data;
}

function emoDataObjectToArray(data) {
    let data_array = [];
    $.each(data, (key, emo) => {
        if (emo.priority !== undefined) {
            data_array[emo.priority] = emo;
        }
    });

    return rearrangePriority(data_array);
}

function createATag(url) {
    if (!url) {
        return "";
    }
    return $("<a>", {
        href: url,
        text: url,
        target: "_blank"
    }).prop("outerHTML");
}

