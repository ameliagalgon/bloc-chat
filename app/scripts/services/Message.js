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
        var ref = $firebase.database().ref().child("messages");

        return Message;
    }

    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', Message]);
})();
