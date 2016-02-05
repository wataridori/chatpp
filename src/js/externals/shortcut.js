let common = require("../helpers/Common.js");

$(function() {
    if (!common.isPage("shortcut")) {
        return;
    }
    common.setPageTitle();
});
