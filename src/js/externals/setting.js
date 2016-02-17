let Const = require("../helpers/Const.js");
let common = require("../helpers/Common.js");
let Storage = require("../helpers/Storage.js");

let storage = new Storage();
let stored_data = {};

$(() => {
    if (!common.isPage("setting")) {
        return;
    }
    common.setPageTitle();

    storage.get(Const.CHROME_SYNC_KEY, (data) => {
        stored_data[Const.CHROME_SYNC_KEY] = data;
        if ($.isEmptyObject(data)) {
            common.openNewExtensionPageUrl(common.app_detail.options_page)
        } else {
            updateViewData(data);
            $("[id$=-status-btn]").click((e) => {
                let status = true;
                let id = $(e.currentTarget).attr("id");
                let id_parts = id.split("-");
                let feature_name = id_parts[0];
                if ($(e.currentTarget).html() === "Disable") {
                    status = false;
                }
                stored_data[Const.CHROME_SYNC_KEY][feature_name + "_status"] = status;
                storage.setData(stored_data, () => {
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
    let features = ["emoticon", "mention", "shortcut", "thumbnail", "highlight"];
    for (let i in features) {
        loadStatus(features[i], data[features[i] + "_status"]);
    }
}
