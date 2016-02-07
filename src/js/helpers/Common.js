let Const = require("./Const.js");

class Common {
    constructor() {
        this.version = Const.VERSION_CHROME;
        this.app_detail = this.getAppDetail();
    }

    isChromeVersion() {
        return this.version === Const.VERSION_CHROME;
    }

    isFirefoxVersion() {
        return this.version === Const.VERSION_FIREFOX;
    }

    isDevVersion() {
        var app_name = this.app_detail.name;
        return app_name.indexOf(Const.VERSION_NAME_DEV, app_name.length - (Const.VERSION_NAME_DEV).length) !== -1;
    }

    getStorage() {
        if (this.isChromeVersion()) {
            return chrome.storage.sync;
        }

        return chrome.storage.local;
    }

    sync(key, data, callback) {
        var sync = {};
        sync[key] = data;
        var storage = this.getStorage();
        storage.set(sync, function() {
            if (callback) {
                callback();
            }
        });
    }

    getObjectLength(object) {
        return Object.keys(object).length;
    }

    htmlEncode(value){
        return $("<div/>").text(value).html();
    }

    getEmoUrl(img) {
        if (img.indexOf("https://") == 0 || img.indexOf("http://") == 0) {
            return img;
        }
        return Const.DEFAULT_IMG_HOST + "img/emoticons/" + img;
    }

    parseRoomId(text) {
        var room = text.match(/\d+/g);
        if (!room || room.length == 0) {
            return null;
        }
        room = room[0];
        var regex = /^[0-9]{6,10}$/g;
        if (regex.test(room)) {
            return room;
        }
        return null;
    }

    reload() {
        location.reload();
    }

    getAppDetail() {
        return chrome.app.getDetails();
    }

    getAppFullName() {
        var version_name = Const.VERSION_NAME_RELEASE;
        if (this.isDevVersion()) {
            version_name = Const.VERSION_NAME_DEV;
        }

        return `${this.app_detail.short_name} ${this.app_detail.version} ${version_name}`;
    }

    openNewUrl(url) {
        chrome.tabs.create({url: url});
    }


    getExtensionPageUrl(url) {
        return chrome.extension.getURL(url);
    }

    openNewExtensionPageUrl(url) {
        this.openNewUrl(this.getExtensionPageUrl(url));
    }

    validateUrl(url) {
        var regexp = /(https):\/\/(\w+:?\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
        return regexp.test(url);
    }

    isPage(page_name) {
        return $("#page-name").data("page-name") === page_name;
    }

    setPageTitle() {
        $("#chatpp_name").html(this.getAppFullName());
    }

    setStatus(key, value) {
        if (key.indexOf("_status") === -1) {
            key = `${key}_status`;
        }
        localStorage[key] = !!value;
    }

    getStatus(key) {
        if (key.indexOf("_status") === -1) {
            key = `${key}_status`;
        }
        return localStorage[key] === "true" || localStorage[key] === true;
    }
}

let common = new Common();
module.exports = common;