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

    // vm.course = [];

    vm.AddCourse=AddCourse;
    function AddCourse(degName,degCourse){
      coursedata.cmpcourse.push({'Degree' : degName,'Course' : degCourse});
      console.log(coursedata.cmpcourse);
    }
  }

})();
