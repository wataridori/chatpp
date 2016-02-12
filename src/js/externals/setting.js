let Const = require("../helpers/Const.js");
let common = require("../helpers/Common.js");
let Storage = require("../helpers/Storage.js");

let storage = new Storage();
let stored_data = {};

$(function() {
    if (!common.isPage("setting")) {
        return;
    }
    common.setPageTitle();

    storage.get(Const.CHROME_SYNC_KEY, function(data) {
        stored_data[Const.CHROME_SYNC_KEY] = data;
        if ($.isEmptyObject(data)) {
            common.openNewExtensionPageUrl(common.app_detail.options_page)
        } else {
            updateViewData(data);
            $("[id$=-status-btn]").click(function() {
                var status = true;
                var id = $(this).attr("id");
                var id_parts = id.split("-");
                var feature_name = id_parts[0];
                if ($(this).html() === "Disable") {
                    status = false;
                }
                stored_data[Const.CHROME_SYNC_KEY][feature_name + "_status"] = status;
                storage.setData(stored_data, function() {
                    loadStatus(feature_name, status);
                });
            })
        }
    });
});

function loadStatus(name, value) {
    if (value !== undefined && value === false) {
        $("#" + name + "-status").removeClass().addClass("text-danger").html("DISABLED");
        $("#" + name + "-status-btn").removeClass().addClass("btn btn-success btn-xs").html("Enable");
    } else {
        $("#" + name + "-status").removeClass().addClass("text-success").html("ENABLED");
        $("#" + name + "-status-btn").removeClass().addClass("btn btn-danger btn-xs").html("Disable");
    }
}

function updateViewData(data) {
    var features = ["emoticon", "mention", "shortcut", "thumbnail", "highlight"];
    for (var i in features) {
        loadStatus(features[i], data[features[i] + "_status"]);
    }
}