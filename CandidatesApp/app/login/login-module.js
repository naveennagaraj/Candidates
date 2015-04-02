(function () {
  'use strict';

  /* @ngdoc object
   * @name login
   * @requires $urlRouterProvider
   *
   * @description
   *
   */
  angular
    .module('login', [
      'ui.router'
    ])
    .config(config)
    .controller('loginCtrl', ['$location','$rootScope','dataStore', function ($location, $rootScope,dataStore) {
      var vm=this;
      // console.log(dataStore.lgdata[0].username);
      vm.loginAuthenticate=loginAuthenticate;
      vm.logout=logout;

      function loginAuthenticate(uname,pass) {
        alert('validate');
        $rootScope.uname=uname;
        for(vm.b=0; vm.b < dataStore.lgdata.length; vm.b++)
        {
          if (uname === dataStore.lgdata[vm.b].username && pass === dataStore.lgdata[vm.b].password)
          {
            $rootScope.login = true;
            $location.path('/ROOT/welcome');
          }
          else
          {
            alert('Invalid Username or password');
          }
        }
      }
      function logout() {
        $rootScope.login=false;
        $location.path('/');
        location.reload();
      }
    }]);
  function config($urlRouterProvider,$stateProvider) {
    $urlRouterProvider.otherwise('/ROOT/login');
    /*console.log($stateProvider);*/
    $stateProvider
    .state('ROOT.login', {
      url: '/login',
      views: {
        '@': {
          templateUrl: 'login/login.tpl.html',
          controller: 'loginCtrl',
          controllerAs: 'vm'
        }
      }
    })
    .state('ROOT.success', {
      url: '/welcome',
      views: {
        '@': {
          templateUrl: 'welcome/welcome.tpl.html',
          controller: 'loginCtrl'
        }
      }
    });
  }

})();
