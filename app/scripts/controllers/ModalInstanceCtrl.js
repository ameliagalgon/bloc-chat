(function(){
    function ModalInstanceCtrl($uibModalInstance){
        this.ok = function (newRoom) {
            console.log('OK Button clicked');
            $uibModalInstance.close({$value: newRoom});
        };

        this.cancel = function () {
            console.log('Cancel button clicked');
            $uibModalInstance.dismiss('cancel');
        };
    };

    angular
        .module('blocChat')
        .controller('ModalInstanceCtrl', ['$uibModalInstance', ModalInstanceCtrl]);
})();
