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
        sameRooms.forEach((room) => {
            /* eslint-disable no-console */
            console.log(`${room._name}   https://www.chatwork.com/#!rid${room.id}`);
            /* eslint-enable */
        });
    }
}

let chatwork = new ChatworkFacade();
module.exports = chatwork;
