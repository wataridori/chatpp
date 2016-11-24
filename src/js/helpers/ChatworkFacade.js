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

    getRoomMembersCount() {
        return RM.sorted_member_list.length;
    }

    getRoomMembersArray() {
        let members = this.getRoomMembers();
        return Object.keys(members);
    }

    getRandomMemberInRoom() {
        let members = this.getRoomMembersArray();
        return common.random(members);
    }

    searchRoomsByPerson(user_id) {
        let rooms = RL.rooms;
        let same_rooms = [];
        for (let room_id in rooms) {
            let room = rooms[room_id];
            if (room._name && room.member_dat && room.member_dat.hasOwnProperty(user_id)) {
                same_rooms.push(room);
            }
        }
        return same_rooms;
    }

    removeMemberFromRoom(user_id, room_id) {
        let room = RL.rooms[room_id];
        if (room.type === "group" && room.member_dat.hasOwnProperty(user_id) && room.member_dat[this.myId()] === "admin") {
            if (!window.confirm(`Are you sure to delete this user from ${room.getName()} ?`)) {
                return false;
            }
            delete room.member_dat[user_id];
            CW.post("gateway.php", {
                cmd: "update_room",
                room_id,
                role: room.member_dat
            });
            return true;
        }

        return false;
    }

    getChatText() {
        return $("#_chatText").val();
    }

    clearChatText() {
        CS.view.setChatText("");
    }

    checkNotifyAllCondition() {
        return this.getRoomMembersCount() > 100 && this.isAdmin();
    }
}

let chatwork = new ChatworkFacade();
module.exports = chatwork;
