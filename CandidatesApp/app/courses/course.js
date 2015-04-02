(function () {
  'use strict';

  /* @ngdoc object
   * @name course
   * @requires $stateProvider
   *
   * @description
   *
   */

  angular
    .module('course', [
      'ui.router'
    ])
    .config(config);

  function config($urlRouterProvider,$stateProvider) {
    $urlRouterProvider.otherwise('/ROOT/login');
    $stateProvider
    .state('ROOT.course', {
      url: '/addcourses',
      views: {
        '@': {
          templateUrl: 'courses/addCourse.tpl.html',
          controller: 'courseCtrl',
          controllerAs: 'vm'
        }
      }
    })
    .state('ROOT.course.viewCourse', {
        url: '/viewCourse',
        views: {
          '@':{
            templateUrl: 'courses/viewCourse.tpl.html'
          }
      }
      });
  }
})();