let ADVERTISEMENT_CHANGE_TIME = 1000 * 30;

class Advertisement {
    setUp() {
        if ($("#chatppAdvertisement").length > 0) {
            return;
        }
        var text = '<li id="_chatppSponsored" role="button" class=" _showDescription" aria-label="Chat Plus Plus Information">' +
            '<span id="chatppAdvertisement" class="icoSizeSmall">' + this.getAdvertisementText() + '</span>' +
            '</li>';

        $("#_chatSendTool").append(text);
        setInterval(() => {
            this.changeRandomAdvertisement();
        }, ADVERTISEMENT_CHANGE_TIME);
    }

    changeRandomAdvertisement() {
        var text = this.getAdvertisementText();
        $("#chatppAdvertisement").html(text);
    }

    getAdvertisementText() {
        if (localStorage["chatpp_advertisement"] !== undefined && localStorage["chatpp_advertisement"]) {
            var ads = JSON.parse(localStorage["chatpp_advertisement"]);
            if (ads.length > 0) {
                return ads[Math.floor(Math.random() * ads.length)];
            }
        }
        return "Advertisement Here!";
    }
}

let advertisement = new Advertisement();
module.exports = advertisement;