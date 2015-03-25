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

    $scope.list = ['Computer Science','Computer Application', 'Information Technology', 'Mechanical', 'Electronics', 'Electrical and Electronics', 'Mathematics', 'Statistics'];
    var vm = this;
    $scope.Graduation=[];
    $scope.PostGraduation=[];
    function grad(name,course){this.name=name,this.course=course};
    // function pGrad(name,course){this.name=name,this.course=course};
    activate();
    function activate () {
    }

    vm.AddGraduation=AddGraduation;
    function AddGraduation(degName,degCourse){
      // console.log(degName,degCourse)
      $scope.Graduation.push(new grad(degName,degCourse));
      console.log($scope.Graduation);
    }

    vm.AddPostGraduation=AddPostGraduation;
    function AddPostGraduation(degName,degCourse){
      // console.log(degName,degCourse)
      $scope.PostGraduation.push(new grad(degName,degCourse));
      console.log($scope.PostGraduation);
    }
  }

})();
