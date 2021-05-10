let common = require("./Common.js");
let Storage = require("./Storage.js");
let Const = require("./Const.js");

class EmoStorage extends Storage {
    constructor() {
        super();
        this.data = {};
        this.data_count = 0;
    }

    getDataCount() {
        return common.getObjectLength(this.data);
    }

    setFeatureStatus(emo_info) {
        let features = ["mention", "shortcut", "thumbnail", "emoticon", "legacy_theme", "shorten_link"];
        for (let i in features) {
            let feature_name = `${features[i]}_status`;
            this.data[feature_name] = emo_info[feature_name] === undefined ? true : emo_info[feature_name];
        }
        this.data.force_update_version = emo_info.force_update_version;
    }

    pushData(inputted_data, inputted_priority) {
        let priority = (inputted_priority !== undefined) ? inputted_priority : inputted_data.priority;
        if (this.data[inputted_data.data_name] === undefined) {
            this.data_count++;
        }
        this.data[inputted_data.data_name] = {
            priority,
            data_name: inputted_data.data_name,
            data_url: inputted_data.data_url,
            data_changelog: inputted_data.data_changelog,
            data_version: inputted_data.data_version,
            date_sync: (new Date()).toLocaleString()
        };
    }

    removeData(data_name) {
        if (this.data[data_name] !== undefined) {
            delete this.data[data_name];
        }
    }

    syncData(callback) {
        this.set(Const.CHROME_SYNC_KEY, this.data, callback);
    }
}

module.exports = EmoStorage;
