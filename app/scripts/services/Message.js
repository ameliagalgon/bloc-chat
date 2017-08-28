(function(){
    function Message($firebaseArray, $cookies){
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

        Message.send = function(newMessage, room){
            //send method logic
            var username = $cookies.get('blocChatCurrentUser');
            //console.log(username);
            var currentTime = new Date();
            var messageObj = {
                "content": newMessage,
                "roomId": room.$id,
                "sentAt": currentTime.getTime(),
                "username": username
            };

            console.log(messageObj);

            messages.$add(messageObj).then(function(ref){
                var id = ref.key;
                console.log("added record with id " + id);
                messages.$indexFor(id);
            });

            //clear the input text
            document.getElementById("message-text").value = '';
        };

        return Message;
    }

    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray','$cookies', Message]);
})();
