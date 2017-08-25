(function(){
    function BlocChatCookies($cookies){
        var currentUser = $cookies.get('blocChatCurrentUser');
        if(!currentUser || currentUser === ''){

        }
    }

    angular
        .module('blocChat')
        .run(['$cookies', BlocChatCookies]);
})();
