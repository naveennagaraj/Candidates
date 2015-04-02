(function () {
  'use strict';

  /* @ngdoc object
   * @name candidate
   * @requires $urlRouterProvider
   *
   * @description
   *
   */
  angular
    .module('candidate', [
      'ui.router','course'
    ])
    .config(config)
    .controller('candidateCtrl', ['$scope','coursedata', function ($scope,coursedata) {
      var vm=this;
      vm.lst=coursedata.brdata;
      vm.lst1=coursedata.cmpcourse;
      vm.updatelst=[];
      vm.updateBranch=updateBranch;
      function updateBranch(abc)
      {
        vm.updatelst=[];
        for (var i = 0; i <  vm.lst1.length; i++) 
        {
          if( vm.lst1[i].Degree==abc)
          {
            vm.updatelst.push(vm.lst1[i].Course)
            console.log(vm.updatelst);
          }  
        }
      }

      vm.addCandidates=addCandidates;
      function addCandidates(a,b,c,d,e)
      {
        // console.log(a,b,c,d,e);
        vm.candidatesdata.push({'Name':a,'Address':b,'DOB':c,'Degree':d,'Branch':e});
        console.log(vm.candidatesdata);
      }

    }]);
  function config($stateProvider) {
    $stateProvider
    .state('ROOT.candidate', {
      url: '/candidate',
      views: {
        '@': {
          templateUrl: 'candidates/candidates.tpl.html',
          controller: 'candidateCtrl',
          controllerAs: 'vm',
          requiresLogin: true
        }
      }
    });
  }

})();
