(function(){
    function UserModalInstanceCtrl($uibModalInstance){
        this.ok = function (username) {
            console.log('OK Button clicked');
            if(!username || username === ''){
                console.log("You did not enter a proper username");
                return;
            }
            $uibModalInstance.close({$value: username});
        };
    };

    angular
        .module('blocChat')
        .controller('UserModalInstanceCtrl', ['$uibModalInstance', UserModalInstanceCtrl]);
})();
