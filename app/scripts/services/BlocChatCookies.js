(function(){
    function BlocChatCookies($cookies, $uibModal){
        console.log("in BlocChatCookies");
        var currentUser = $cookies.get('blocChatCurrentUser');
        if(!currentUser || currentUser === ''){

            var username = $uibModal.open({
                animation: true,
                controller: 'UserModalInstanceCtrl',
                controllerAs: 'userSignIn',
                templateUrl: '/templates/signIn.html'
            });

            username.result.then(function(){
                //console.log(username.result.$$state.value.$value);
                $cookies.put('blocChatCurrentUser', username.result.$$state.value.$value);
            });
        }
    }

    angular
        .module('blocChat')
        .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
