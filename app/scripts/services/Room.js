(function(){
    function Room($firebaseArray){
        /**
        * @desc Room empty object
        * @type {Object}
        */
        var Room = {};
        /**
        * @desc Reference to the list of databases in the rooms database
        * @type {Object}
        */
        var ref = firebase.database().ref().child("rooms");
        /**
        * @desc Array of rooms in database
        * @type {Array}
        */
        var rooms = $firebaseArray(ref);

        /**
        * @desc Messages from the currently selected room
        * @type {Object}
        */
        Room.currentMessages = null; //set in HomeCtrl.js

        /**
        * @desc Public reference to array of rooms
        * @type {Object}
        */
        Room.all = rooms;

        /**
        * @function add()
        * @desc Add function called to add a new room in the database
        * @param {Object} room
        */
        Room.add = function(room){
            console.log("Add new room");
            //Use the firebase method $add
            rooms.$add(room).then(function(ref){
                var id = ref.key;
                console.log("added record with id " + id);
                rooms.$indexFor(id); //returns location in the array
            });
        };

        return Room;
    }

    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();
