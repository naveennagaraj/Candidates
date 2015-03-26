/*global describe, beforeEach, it, expect, inject, module*/
'use strict';

describe('BranchCtrl', function () {

  beforeEach(module('branch'));

  var ctrl,scope;

  beforeEach(inject(function ($rootScope, $controller) {
    
    scope=$rootScope.$new();

    ctrl = $controller('BranchCtrl',{
    	$scope: scope
    });

  }));

  it('initial length of Gradustion befor pushing AddGraduation', function () {
    // expect(ctrl.AddGraduation).toBeUndefined();
    // ctrl.AddGraduation();
    ctrl.Graduation.push({'Degree' : 'degName','Course' : 'degCourse'});
    
    expect(ctrl.Graduation.length).toEqual(1);
  });

  it('initial length of Gradustion befor pushing AddGraduation', function () {
    // expect(ctrl.AddGraduation).toBeUndefined();
    // ctrl.AddGraduation();
    // scope.Graduation.push(new vm.grad('abc','abc'));
    ctrl.PostGraduation.push({'PDegree' : 'degName','PCourse' : 'degCourse'});
    expect(ctrl.PostGraduation.length).toEqual(1);
  });

});
