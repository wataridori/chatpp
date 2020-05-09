var mix = require('laravel-mix');

mix.combine([
        'src/js/libraries/bootstrap.min.js',
        'src/js/libraries/bootbox.min.js'
    ], 'build/js/externals/libs.js')
    .js('src/js/externals/popup.js', 'build/js/externals/popup.js')
    .js([
            'src/js/externals/emoticon.js',
            'src/js/externals/shortcut.js',
            'src/js/externals/notification.js',
            'src/js/externals/room.js',
            'src/js/externals/setting.js',
            'src/js/externals/group.js',
        ], 'build/js/externals/pages.js')
    .js('src/js/extensions/contentscript.js', 'build/js/extensions/contentscript.js')
    .js('src/js/extensions/background.js', 'build/js/extensions/background.js')
    .js('src/js/internals/main.js', 'build/js/internals/all.js')
    .copy("src/js/extensions/injectPreloadHook.js", "build/js/extensions/injectPreloadHook.js");