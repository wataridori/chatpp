let common = require("../helpers/Common.js");

class ChatworkFacade {
    constructor() {

    }

    myId() {
        return AC.myid;
    }

    getUserName(user_id) {
        return AC.getDefaultNickName(user_id);
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
            let params = {
                body_params: {
                    cmd: "update_room",
                    room_id,
                    role: room.member_dat
                },
                query_params: {}
            };
            CW.post("gateway.php", params);
            return true;
        }

        return false;
    }

    addMembersFromChatTextToCurrentRoom() {
        let room_id = this.currentRoom();
        let room = RL.rooms[room_id];
        let member_dat = $.extend({}, room.member_dat);
        if (room.type === "group" && member_dat[this.myId()] === "admin") {
            if (!window.confirm("Are you sure to add all Users mentioned in Chatbox to this room?")) {
                return false;
            }
            let text = this.getChatText();
            let users = common.parseUsersId(text);
            let update = false;
            for (u of users) {
                if (!member_dat.hasOwnProperty(u)) {
                    member_dat[u] = "member";
                    update = true;
                }
            }
            if (update) {
                let params = {
                    body_params: {
                        cmd: "update_room",
                        room_id,
                        role: member_dat
                    },
                    query_params: {}
                };
                CW.post("gateway.php", params, (response) => {
                    if (response.status && !response.status.success) {
                        window.alert(response.status.message);
                    }
                });
            } else {
                window.alert("There are no new mentioned Members to add into this Room");
            }

            return true;
        }
    }

    getChatText() {
        return $("#_chatText").val();
    }

    clearChatText() {
        CS.view.setChatText("");
    }

    checkNotifyAllCondition() {
        return common.checkDevVersionInternal() || (this.getRoomMembersCount() > 100 && this.isAdmin());
    }

    getMessageObjectById(mid) {
        return RM.timeline.chat_id2chat_dat[mid];
    }

    getMessagePanelByMessageId(mid) {
        let message = this.getMessageObjectById(mid);
        return TimeLineView.prototype.getMessagePanel(message);
    }

    getMyRoomId() {
        return AC.getRoomId(AC.myid);
    }

    getTempRoomId() {
        // Get the first room that is not the same as current room
        let current_room = RM.id;
        let my_room = this.getMyRoomId();
        if (current_room != my_room) {
            return my_room;
        }
        let sorted_rooms_list = RL.getSortedRoomList();
        for (i of sorted_rooms_list) {
            if (i !== current_room) {
                return i;
            }
        }
    }
}

let chatwork = new ChatworkFacade();
module.exports = chatwork;
