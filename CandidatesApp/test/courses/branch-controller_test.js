/*global describe, beforeEach, it, expect, inject, module*/
'use strict';

describe('courseCtrl', function() {

    beforeEach(module('course'));

    var ctrl, scope,createService;

    beforeEach(inject(function($controller) {
        ctrl = $controller('courseCtrl');
    }));

    beforeEach(inject(function() {
        var $injector = angular.injector(['course'])

        createService = function() {
            return $injector.get('coursedata');
        }
    }));


    it('should be defined', function() {
      var service = createService();
      expect(service).toBeTruthy();
    });

    // it('initial length of Gradustion befor pushing AddGraduation', function() {
    //     // expect(ctrl.AddGraduation).toBeUndefined();
    //     // ctrl.AddGraduation();
    //     ctrl.Graduation.push({
    //         'Degree': 'degName',
    //         'Course': 'degCourse'
    //     });

    //     expect(ctrl.Graduation.length).toEqual(1);
    // });

    // it('initial length of Gradustion befor pushing AddGraduation', function() {
    //     // expect(ctrl.AddGraduation).toBeUndefined();
    //     // ctrl.AddGraduation();
    //     // scope.Graduation.push(new vm.grad('abc','abc'));
    //     ctrl.PostGraduation.push({
    //         'PDegree': 'degName',
    //         'PCourse': 'degCourse'
    //     });
    //     expect(ctrl.PostGraduation.length).toEqual(1);
    // });

});
