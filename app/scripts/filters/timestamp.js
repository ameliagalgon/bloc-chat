(function(){
    function timestamp(){

        var monthNames = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

        return function(time){
            var messageDate = new Date(time);
            var currentDate = new Date();
            if(messageDate.getDay() !== currentDate.getDay()){
                var output = monthNames[messageDate.getMonth()] + " " + messageDate.getDate();
                return output;
            }
            var hours = messageDate.getHours();
            var ampm = hours < 12 ? "AM" : "PM";
            hours = hours % 12;
            hours = hours ? hours : 12;
            var minutes = messageDate.getMinutes();
            if(minutes < 10){
                minutes = "0" + minutes;
            }
            var output = hours + ":" + minutes + " " + ampm;
            return output;
        };
    }

    angular
        .module('blocChat')
        .filter('timestamp', timestamp)
})();
