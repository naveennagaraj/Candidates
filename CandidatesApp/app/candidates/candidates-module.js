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
    .controller('candidateCtrl', ['coursedata', function (coursedata) {
      var vm=this;
      vm.updatelst=[];
      vm.lst=coursedata.brdata;
      vm.lst0=coursedata.csdata;
      vm.lst1=coursedata.cmpcourse;
      // console.log(vm.lst1);
      vm.getBranchNameFromId = getBranchNameFromId;
      vm.updateBranch=updateBranch;
      
      vm.updatelst=[];

      function getBranchNameFromId(branchId) 
      {
        // 
        for(var i=0;i<vm.lst0.length;i++)
        {
          // console.log(vm.lst0[i]);
          if (vm.lst0[i].id == branchId) 
          {
            return vm.lst0[i].value;
          }
        }
      }

      function updateBranch(abc)
      {
        vm.updatelst=[];
        angular.forEach(vm.lst1,function(value,index)
        { 
          // console.log(value); 
          if(abc.id==value.DegreeId)
          {
            angular.forEach(value.Branches,function(val, ind)
            {  
              vm.updatelst.push(vm.getBranchNameFromId(val));
            });
          }
        });
        
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
