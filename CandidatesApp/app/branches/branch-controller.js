(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name branch.controller:BranchCtrl
   *
   * @description
   *
   */
  angular
    .module('branch')
    .controller('BranchCtrl', BranchCtrl);

  function BranchCtrl($scope) {

    
    var vm = this;
    vm.list = ['Computer Science','Computer Application', 'Information Technology', 'Mechanical', 'Electronics', 'Electrical and Electronics', 'Mathematics', 'Statistics'];
    vm.Graduation=[];
    vm.PostGraduation=[];
    // function grad(name,course){this.name=name,this.course=course};
    // function pGrad(name,course){this.name=name,this.course=course};
    activate();
    function activate () {
    }

    vm.AddGraduation=AddGraduation;
    function AddGraduation(degName,degCourse){
      // console.log(degName,degCourse)
      vm.Graduation.push({'Degree' : degName,'Course' : degCourse});
      console.log(vm.Graduation[0]);
    }

    vm.AddPostGraduation=AddPostGraduation;
    function AddPostGraduation(degName,degCourse){
      // console.log(degName,degCourse)
      vm.PostGraduation.push({'PDegree' : degName,'PCourse' : degCourse});
      console.log(vm.PostGraduation);

    }
  }

})();
