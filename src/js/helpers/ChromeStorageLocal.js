let Storage = require("./Storage.js");
let Const = require("./Const.js");

class ChromeStorageLocal {
    constructor() {
        this.storage = new Storage(true);
        this.key = Const.CHROME_LOCAL_KEY;
    }

    get(callback) {
        this.storage.get(this.key, callback);
    }

    set(data, callback) {
        this.set(this.key, data, callback);
    }

    setData(data, callback) {
        this.storage.setData(data, callback);
    }
}

module.exports = ChromeStorageLocal;
