let ADVERTISEMENT_CHANGE_TIME = 1000 * 30;

class Advertisement {
    setUp() {
        if ($("#_chatppSponsored").length > 0) {
            return;
        }
        $(".chatInput ul").first().append(
            $("<li>", { id: "_chatppSponsored", class: "_showDescription", css: {
                "display": "inline-block"
            }, attr:{
                "role": "button",
                "aria-label": "Chat Plus Plus Information"
            } }).append(
                $("<span>", { id: "chatppPreLoad", class: "icoSizeSmall" })
            ).append(this.getAdvertisementText())
        );
        setInterval(() => {
            this.changeRandomAdvertisement();
        }, ADVERTISEMENT_CHANGE_TIME);
    }

    changeRandomAdvertisement() {
        let text = this.getAdvertisementText();
        $("#chatppAdvertisement").html(text);
    }

    getAdvertisementText() {
        if (localStorage["chatpp_advertisement"] !== undefined && localStorage["chatpp_advertisement"]) {
            let ads = JSON.parse(localStorage["chatpp_advertisement"]);
            if (ads.length > 0) {
                return ads[Math.floor(Math.random() * ads.length)];
            }
        }
        return "Advertisement Here!";
    }
}

let advertisement = new Advertisement();
module.exports = advertisement;
