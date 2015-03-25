(function () {
  'use strict';

  /* @ngdoc object
   * @name branch
   * @requires $stateProvider
   *
   * @description
   *
   */

  angular
    .module('branch', [
      'ui.router'
    ]);

  angular
    .module('branch')
    .config(config);

  function config($stateProvider) {

    $stateProvider
      .state('branch', {
        url: 'branch/',
        templateUrl: 'branches/branch.tpl.html',
        controller: 'BranchCtrl as vm'
      })
      .state('branch.addGradBranch', {
        url: 'addGradBranch',
        templateUrl: 'branches/addGraduation.tpl.html'   
      })
      .state('branch.addPostGradBranch', {
        url: 'addPostGradBranch',
        templateUrl: 'branches/addPostGraduation.tpl.html'
      })
      .state('branch.allData', {
        url: 'allData',
        templateUrl: 'branches/allData.tpl.html'
      });
  }

})();