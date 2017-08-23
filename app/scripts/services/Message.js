(function(){
    function Message($firebaseArray){
        /**
        * @desc Message empty object
        * @type {Object}
        */
        var Message = {};
        /**
        * @desc Reference to the list of databases in the messages database
        * @type {Object}
        */
        var ref = firebase.database().ref().child("messages");
        var messages = $firebaseArray(ref);

        Message.getByRoomId = function(roomId){
            console.log("Get messages by room id: " + roomId);
            var roomMessages = [];
            ref.orderByChild("roomId").equalTo(roomId).on("child_added", function(snapshot) {
                roomMessages.push(snapshot);
            });

            return roomMessages;

        }

        return Message;
    }

    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', Message]);
})();
