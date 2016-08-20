var elixir = require("laravel-elixir");

elixir.config.assetsPath = "src";
elixir.config.publicPath = "build";
elixir.config.sourcemaps = false;

elixir(function(mix) {
    mix.scripts([
            "libraries/bootstrap.min.js",
            "libraries/bootbox.min.js"
        ], "build/js/externals/libs.js")
        .browserify("externals/popup.js", "build/js/externals/popup.js")
        .browserify([
            "externals/emoticon.js",
            "externals/shortcut.js",
            "externals/notification.js",
            "externals/room.js",
            "externals/setting.js",
            "externals/group.js",
        ], "build/js/externals/pages.js")
        .browserify("extensions/contentscript.js", "build/js/extensions/contentscript.js")
        .browserify("extensions/background.js", "build/js/extensions/background.js")
        .browserify("internals/main.js", "build/js/internals/all.js");
});
