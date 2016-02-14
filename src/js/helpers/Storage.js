let common = require("./Common.js");

class Storage {
    constructor(local) {
        this.storage = common.getStorage(local);
    }

    get(key, callback) {
        this.storage.get(key, (info) => {
            info = info ? info[key] : undefined;
            callback(info);
        });
    }

    set(key, data, callback) {
        let sync = {};
        sync[key] = data;
        this.storage.set(sync, () => {
            if (callback) {
                callback();
            }
        });
    }

    setData(data, callback) {
        this.storage.set(data, () => {
            if (callback) {
                callback();
            }
        });
    }
}

module.exports = Storage;
