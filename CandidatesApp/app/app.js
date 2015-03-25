(function () {
  'use strict';

  /* @ngdoc object
   * @name candidatesApp
   * @requires $urlRouterProvider
   *
   * @description
   *
   */
  angular
    .module('candidatesApp', [
      'ngAria',
      'ui.router',
      'mgcrea.ngStrap',
      'login',
      'branch'
    ]);

  angular
    .module('candidatesApp')
    .config(config);

  function config($urlRouterProvider) {
    $urlRouterProvider.otherwise('/login');
  }

})();
