(function(){
    function ModalCtrl($uibModal){

        var modalInstance = null;

        this.open = function() {
            console.log("open the modal");

            modalInstance = $uibModal.open({
              animation: true,
              controller: 'ModalInstanceCtrl',
              controllerAs: 'modal',
              templateUrl: '/templates/modal.html'
            });
        };
    }

    angular
        .module('blocChat')
        .controller('ModalCtrl', ['$uibModal', ModalCtrl])
}());
