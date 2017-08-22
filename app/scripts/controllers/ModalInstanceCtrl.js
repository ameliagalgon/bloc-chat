(function(){
    function ModalInstanceCtrl(){
        this.ok = function () {
            console.log('OK Button clicked');
        };

        this.cancel = function () {
                console.log('Cancel button clicked');
        };
    };

    angular
        .module('blocChat')
        .controller('ModalInstanceCtrl', ['$uibModalInstance', ModalInstanceCtrl]);
})()
