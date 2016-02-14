let common = require("../helpers/Common.js");

$(() => {
    if (!common.isPage("shortcut")) {
        return;
    }
    common.setPageTitle();
});
