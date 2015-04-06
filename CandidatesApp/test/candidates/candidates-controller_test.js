/*global describe, beforeEach, it, expect, inject, module*/
'use strict';

describe('candidateCtrl', function() {

    beforeEach(module('course'));
    beforeEach(module('candidate'));

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

});
