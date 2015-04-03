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
    .module('register', [
      'ui.router'
    ])
    .config(config);
    // .controller(registerCtrl,['',function (){
    //   var vm=this;
      
    // }]);
  function config($stateProvider) {
    $stateProvider
    .state('ROOT.register', {
      url: '/register',
      views: {
        '@': {
          templateUrl: 'register/register.tpl.html'
        }
      }
    });
  }

})();
