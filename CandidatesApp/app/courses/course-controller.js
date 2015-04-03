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
    // console.log(vm.list1[0].value)

    // vm.course = [];

    vm.AddCourse=AddCourse;
    function AddCourse(degName,degCourse){
      coursedata.cmpcourse.push({'Degree' : degName,'Course' : degCourse});
      console.log(coursedata.cmpcourse[0].Course[0]);
      // console.log(coursedata.cmpcourse[0].Course[0].id);
    }
  }

})();
