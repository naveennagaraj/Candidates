(function() {
    'use strict';

    angular
        .module('login')
        .controller('LoginCtrl',LoginCtrl);

    /* @ngInject */
    function LoginCtrl($scope,$state) {
       
        var vm = this;
        activate();

        function activate() {
            console.log(1);
        }
        $scope.loginAuthunticate = function() {
            //console.log("hi");
            if ($scope.uname === 'naveen' && $scope.upass === 'naveen') {
                console.log("hi");
                $state.go('branch');
            } else {
                alert("Error");
            }
        };
    }
})();
