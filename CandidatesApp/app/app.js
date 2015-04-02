(function () {
  'use strict';

  /* @ngdoc object
   * @name myNewApp
   * @requires $urlRouterProvider
   *
   * @description
   *
   */
  angular
    .module('myNewApp', [
      'ngAria',
      'ui.router',
      'mgcrea.ngStrap',
      'home',
      'login',
      'candidate',
      'register',
      'course'
    ])
    .config(config);

  function config($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/ROOT/login');
    $stateProvider
    .state('ROOT', {
      url: '/ROOT',
      views: {
        'header@': {
          templateUrl: 'Header/header.tpl.html'
        }
      }
    });
  }

})();
