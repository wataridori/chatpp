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
    mix.scripts(["libs/bootstrap.min.js", "libs/bootbox.min.js"], "build/js/externals/external-libs.js")
        .browserify(["externals/popup.js"], "build/js/externals/popup.js")
        .browserify([
            "externals/emoticon.js",
            "externals/shortcut.js",
            "externals/notification.js",
            "externals/room.js",
            "externals/setting.js",
            "externals/group.js",
        ], "build/js/externals/external-page.js");
});
