class ChatworkFacade {
    constructor() {

    }

    myId() {
        return AC.myid;
    }

    currentRoom() {
        return RM.id;
    }

    getRoomAdmins() {
        let members = this.getRoomMembers();
        let admins = [];
        for (let id in members) {
            if (members[id] === "admin") {
                admins.push(id);
            }
        }
        return admins;
    }

    isAdmin(user) {
        let members = this.getRoomMembers();
        user = user || this.myId();
        return members[user] === "admin";
    }

    getRoomMembers() {
        return RM.member_dat;
    }
}

let chatwork = new ChatworkFacade();
module.exports = chatwork;
