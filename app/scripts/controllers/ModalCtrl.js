(function(){
    function ModalCtrl($uibModal, Room){

        var modalInstance = null;

        this.open = function() {
            console.log("open the modal");

            modalInstance = $uibModal.open({
              animation: true,
              controller: 'ModalInstanceCtrl',
              controllerAs: 'modalInstance',
              templateUrl: '/templates/modal.html'
            });

            modalInstance.result.then(function(){
                Room.add(modalInstance.result.$$state.value);
            });
        };
    }

    angular
        .module('blocChat')
        .controller('ModalCtrl', ['$uibModal', 'Room', ModalCtrl])
}());
