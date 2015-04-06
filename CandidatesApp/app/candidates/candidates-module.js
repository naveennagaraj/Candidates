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
      vm.lst=coursedata.brdata;
      vm.lst0=coursedata.csdata;
      vm.lst1=coursedata.cmpcourse;
      vm.getBranchNameFromId = getBranchNameFromId;
      vm.updateBranch=updateBranch;
      // console.log(vm.lst1);
      vm.updatelst=[];

      function getBranchNameFromId(branchId) {
        for(var i=0;i<vm.lst0.length;i++)
        {
          if (vm.lst0[i].id == branchId) 
                  {
                    // console.log(vm.lst0[i].id,vm.lst0[i].value)
                    return vm.lst0[i].value;
                  }
        }
            // angular.forEach(vm.lst0, function (value, index) {
            //     console.log(value.id,branchId)
            //     if (value.id == branchId) 
            //       {
            //         console.log(value.id,value.value)
            //         return value.value;
            //       }
            // });
        }

      function updateBranch(abc)
      {
        vm.updatelst=[];
        angular.forEach(vm.lst1,function(value,index){
          // console.log(value,index,abc);
          if(abc.id==value.DegreeId)
          {
            angular.forEach(value.Branches,function(val, ind){
              // console.log(val);
              vm.updatelst.push(vm.getBranchNameFromId(val));
              // vm.updatelst[0]=vm.getBranchNameFromId(val);
              // console.log(vm.getBranchNameFromId(val));
              // console.log(vm.getBranchNameFromId(val))
            });
          }
        });
        console.log(vm.updatelst);
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
