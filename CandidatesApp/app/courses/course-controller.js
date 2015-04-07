(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name courseCtrl
   *
   * @description
   *
   */
  angular
    .module('course')
    .controller('courseCtrl', courseCtrl);

  function courseCtrl(coursedata) { 
    var vm = this;

    vm.list = coursedata.csdata;
    vm.list1= coursedata.brdata;
    

    vm.AddCourse=AddCourse;
    function AddCourse(degName,degCourse){
      
      vm.lt=[];
      for (var i = 0; i < degCourse.length; i++) {
        vm.lt.push(degCourse[i].id);
      };
      
      coursedata.cmpcourse.push({'DegreeId' : degName.id,'Branches' : vm.lt});
      // console.log(coursedata.cmpcourse);
    }
  }

})();
