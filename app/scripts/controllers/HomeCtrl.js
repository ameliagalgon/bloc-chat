(function(){
    function HomeCtrl(Room, Message) {
        this.rooms = Room.all;
        this.messages = Message;
        this.currentRoom = null;

        this.setCurrentRoom = function(room){
            this.currentRoom = room
            this.currentRoom.currentMessages = this.messages.getByRoomId(room.$id);
        }
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', HomeCtrl]);
})();
