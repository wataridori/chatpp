var common = require("./Common.js");

class Storage {
    constructor() {
        this.common = common;
        this.storage = this.common.getStorage();
    }

    get(key, callback) {
        this.storage.get(key, function(info) {
            callback(info);
        });
    }

    set(key, data, callback) {
        var sync = {};
        sync[key] = data;
        this.storage.set(sync, function() {
            if (callback) {
                callback();
            }
        });
    }

    setData(data, callback) {
        this.storage.set(data, function() {
            if (callback) {
                callback();
            }
        });
    }
}

module.exports = Storage;
