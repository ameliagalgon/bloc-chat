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
            var roomMessages = $firebaseArray(ref.orderByChild("roomId").equalTo(roomId));

            var result = [];
            roomMessages.$loaded().then(function(){
                angular.forEach(roomMessages, function(message){
                    result.push(message);
                })
            });

            return result;
        }

        Message.send = function(newMessage){
            //send method logic
        };

        return Message;
    }

    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', Message]);
})();
