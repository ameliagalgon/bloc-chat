(function(){
    function ModalCtrl($uibModal, $log, $document){

        var modalInstance = null;

        this.open = function() {
            console.log("open the modal");
            modalInstance = $uibModal.open({
              animation: true,
              templateUrl: '/templates/modal.html'
            });
        };

        this.ok = function(newRoom){
            modalInstance.close({$value: newRoom});
        }

        this.cancel = function(){
            modalInstance.dismiss('cancel');
        }
    }

    angular
        .module('blocChat')
        .controller('ModalCtrl', ['$uibModal', '$log', '$document', ModalCtrl])
})
