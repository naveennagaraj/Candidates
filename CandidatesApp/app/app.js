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
      'home',
      'login',
      'branch',
      'header'
    ]);

  angular
    .module('candidatesApp')
    .config(config);

  function config($urlRouterProvider) {
    $urlRouterProvider.otherwise('/header');
  }

})();
