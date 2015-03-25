(function () {
  'use strict';

  /* @ngdoc object
   * @name login
   * @requires $stateProvider
   *
   * @description
   *
   */
  angular
    .module('login', [
      'ui.router'
    ]);

  angular
    .module('login')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('home.login', {
        url: '/login',
        views:{'@':{templateUrl: 'login/login.tpl.html'}},
        controller: 'LoginCtrl',
        controllerAs: 'login'
      });
  }

})();
