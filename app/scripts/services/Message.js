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
        var ref = firebase.database().ref().child("messages").orderByChild("roomId");
        var messages = $firebaseArray(ref);
        console.log(messages);
        Message.getByRoomId = function(roomId){
            //var roomMessages = ref.equalTo(roomId);
            var roomMessages = $firebaseArray(ref.equalTo(roomId));
            //console.log(roomMessages);

            var result = [];
            roomMessages.$loaded().then(function(){
                angular.forEach(roomMessages, function(message){
                    result.push(message);
                })
            });

            return result;
        }

        return Message;
    }

    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', Message]);
})();
