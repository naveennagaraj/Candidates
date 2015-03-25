(function() {
    'use strict';

    /**
     * @ngdoc object
     * @name login.controller:LoginCtrl
     *
     * @description
     *
     */
    angular
        .module('login')
        .controller('LoginCtrl', LoginCtrl);

    function LoginCtrl($scope, $location) {
        console.log("hi");
        var vm = this;
        activate();
        function activate() {
            console.log("hi");
        }
        $scope.loginAuthunticate = function() {
            console.log("hi");
            if ($scope.uname === 'naveen' && $scope.upass === 'naveen') {
                console.log("hi");
                $location.path("home");
            }
            else
            {
                alert("Error");
            }
        };
    }

})();
