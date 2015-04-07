/*global describe, beforeEach, it, expect, inject, module*/
'use strict';

describe('candidateCtrl', function() {

    beforeEach(module('candidate'));
    beforeEach(module('course'));

    var ctrl, scope,createServiceCourse,createServiceCandidates;

    beforeEach(inject(function($controller) {
        ctrl = $controller('candidateCtrl');
    }));

    beforeEach(inject(function() {
        var $injector = angular.injector(['course'])

        createServiceCourse = function() {
            return $injector.get('coursedata');
        }
    }));

    beforeEach(inject(function() {
        var $injector = angular.injector(['candidate'])

        createServiceCandidates = function() {
            return $injector.get('candidatedata');
        }
    }));


    it('should be defined', function() {
      var service = createServiceCourse();
      expect(service).toBeTruthy();
    });

    it('should be defined', function() {
      var service = createServiceCandidates();
      expect(service).toBeTruthy();
    });

    it('initial length of students',function(){
        var service = createServiceCandidates();
        expect(service.candidatesdata.length).toEqual(0);
    });
    it('initial length of Courses',function(){
        var service = createServiceCourse();
        expect(service.cmpcourse.length).toEqual(1);
    });

    it('To check getBranchNameFromId function',function(){
      var service= createServiceCourse();
      var branchId=service.csdata[0].id;
      expect(ctrl.getBranchNameFromId(branchId)).toEqual('Information Technology');
      // console.log('hi',b2);
    });

    it('To check updateBranch function',function(){
      var service= createServiceCourse();
      var abc=service.brdata[0];
      console.log(abc);
      ctrl.updateBranch(abc);
      expect(ctrl.updatelst.length).toEqual(3);
    });

});

describe('ROOT.candidate', function() {

  var $rootScope, $state, $injector, state = 'ROOT.candidate';
 
  beforeEach(module('myNewApp'));
  beforeEach(module('candidate'));

  beforeEach(function() {

    inject(function(_$rootScope_, _$state_, _$injector_, $templateCache) {

      $rootScope = _$rootScope_;
      $state = _$state_;
      $injector = _$injector_;
      // We need add the template entry into the templateCache if we ever
      // specify a templateUrl
      $templateCache.put('candidates.tpl.html', '');
    })
  });
  
  it('should respond to URL', function() {
    expect($state.href(state)).toEqual('#/ROOT/candidate');
  });
});
