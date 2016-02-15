var elixir = require("laravel-elixir");

elixir.config.assetsPath = "src";
elixir.config.publicPath = "build";
elixir.config.sourcemaps = false;
elixir.config.js.browserify.transformers
    .find(transformer => transformer.name === 'babelify')
    .options.plugins = [
        'transform-class-properties'
    ];

elixir(function(mix) {
    mix.scripts([
            "libs/bootstrap.min.js",
            "libs/bootbox.min.js"
        ], "build/js/externals/libs.js")
        .scripts([
            "libs/caretposition.js",
            "libs/fuse.min.js",
            "libs/highlight.min.js"
        ], "build/js/internals/libs.js")
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
