let common = require("../helpers/Common.js");

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

    getRoomMembersArray() {
        let members = this.getRoomMembers();
        return Object.keys(members);
    }

    getRandomMemberInRoom() {
        let members = this.getRoomMembersArray();
        return common.random(members);
    }

    searchRoomsByPerson(account_id) {
        let rooms = RL.rooms;
        let sameRooms = [];
        for (let room_id in rooms) {
            let room = rooms[room_id];
            if (room._name && room.member_dat && room.member_dat.hasOwnProperty(account_id)) {
                sameRooms.push(room);
            }
        }
        let result = "";
        sameRooms.forEach((room) => {
            result += `<a href="https://www.chatwork.com/#!rid${room.id}"><div class="searchResultTitle _messageSearchChatGroup"><div>${room.getIcon()} ${room.getName()}</div></div></a>`;
        });
        result = `<div class="searchResultListBox"><div class="searchResultTitle _messageSearchChatGroup"><strong>${sameRooms.length} room${sameRooms.length > 1 ? "s" : ""} found!</strong></div>${result}</div>`;
        CW.view.alert(result, null, true);
    }

    getChatText() {
        return $("#_chatText").val();
    }

    clearChatText() {
        CS.view.setChatText("");
    }

    checkNotifyAllCondition() {
        return common.checkDevVersionInternal() || this.getRoomMembers().length > 100;
    }
}

let chatwork = new ChatworkFacade();
module.exports = chatwork;
