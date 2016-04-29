let Const = require("./Const.js");

class Common {
    constructor() {
        this.version = Const.VERSION_FIREFOX;
        this.app_detail = this.getAppDetail();
        this.official_emoticons_data = {
            Default: {
                name: "Default",
                link: "https://dl.dropboxusercontent.com/s/lmxis68cfh4v1ho/default.json?dl=1",
                description: "The default Emoticons data of Chat++"
            },
            Vietnamese: {
                name: "Vietnamese",
                link: "https://dl.dropboxusercontent.com/s/2b085bilbno4ri1/vietnamese.json?dl=1",
                description: "Yet another data for people who want to use Vietnamese Emoticons"
            },
            Japanese: {
                name: "Japanese",
                link: "https://dl.dropboxusercontent.com/s/fdq05pwwtsccrn6/japanese.json?dl=1",
                description: "Yet another data for people who want to use Japanese Emoticons"
            },
            Skype: {
                name: "Skype",
                link: "https://dl.dropboxusercontent.com/s/8ew2mdh0v2vcad8/skype.json?dl=1",
                description: "Skype Original Emoticons"
            }
        };
    }

    isChromeVersion() {
        return this.version === Const.VERSION_CHROME;
    }

    isFirefoxVersion() {
        return this.version === Const.VERSION_FIREFOX;
    }

    isDevVersion() {
        let app_name = this.app_detail.name;
        return app_name.indexOf(Const.VERSION_NAME_DEV, app_name.length - (Const.VERSION_NAME_DEV).length) !== -1;
    }

    getStorage(local) {
        if (!local && this.isChromeVersion()) {
            return chrome.storage.sync;
        }

        return chrome.storage.local;
    }

    sync(key, data, callback) {
        let sync = {};
        sync[key] = data;
        let storage = this.getStorage();
        storage.set(sync, () => {
            if (callback) {
                callback();
            }
        });
    }

    getEmoticonDataUrl(data_name, default_url) {
        if (data_name && this.official_emoticons_data[data_name]) {
            default_url = this.official_emoticons_data[data_name]["link"];
        }

        return default_url ? default_url.replace("http://i.imgur.com/", "https://i.imgur.com/") : null;
    }

    getObjectLength(object) {
        return Object.keys(object).length;
    }

    htmlEncode(value){
        return $("<div/>").text(value).html();
    }

    getEmoUrl(img) {
        let url = `${Const.DEFAULT_IMG_HOST}img/emoticons/${img}`;
        if (img.indexOf("https://") == 0 || img.indexOf("http://") == 0) {
            url = img;
        }
        return this.htmlEncode(url);
    }

    parseRoomId(text) {
        let room = text.match(/\d+/g);
        if (!room || room.length == 0) {
            return null;
        }
        room = room[0];
        let regex = /^[0-9]{6,10}$/g;
        if (regex.test(room)) {
            return room;
        }
        return null;
    }

    reload() {
        location.reload();
    }

    getAppDetail() {
        if (this.isChromeVersion()) {
            return chrome.app.getDetails();
        }

        return {
            "name": "Chat++ for Chatwork",
            "short_name": "Chat++",
            "version": "0.1.1",
            "option_page": "option.html"
        };
    }

    getAppVersion() {
        return this.app_detail.version;
    }

    getAppVersionName() {
        if (this.isDevVersion()) {
            return Const.VERSION_NAME_DEV;
        }

        return Const.VERSION_NAME_RELEASE
    }

    getAppFullName() {
        let version_name = this.getAppVersionName();

        return `${this.app_detail.short_name} ${this.app_detail.version} ${version_name}`;
    }

    openNewUrl(url) {
        chrome.tabs.create({url});
    }


    getExtensionPageUrl(url) {
        return chrome.extension.getURL(url);
    }

    openNewExtensionPageUrl(url) {
        this.openNewUrl(this.getExtensionPageUrl(url));
    }

    validateUrl(url) {
        let regexp = /(https):\/\/(\w+:?\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
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

    regexEscape(string) {
        return string.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
    }

    generateEmoticonRegex(text, regex) {
        regex = regex || this.htmlEncode(this.regexEscape(text));
        return new RegExp(regex, "g");
    }

    random(items) {
        if (!items.length) {
            return null;
        }

        return items[Math.floor(Math.random() * items.length)];
    }
}

let common = new Common();
module.exports = common;
