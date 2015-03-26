/*global describe, beforeEach, it, expect, inject, module*/
'use strict';

describe('LoginCtrl', function() {
  beforeEach(module('login'));
  beforeEach(module('branch'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

  describe('$scope.loginAuthunticate', function() {
    it('Checks The Valid password', function() {
      var $scope = {};
      var controller = $controller('LoginCtrl', { $scope: $scope });
      $scope.uname = 'naveen';
      $scope.upass = 'naveen';
      $scope.loginAuthunticate();
      expect($scope.uname).toEqual($scope.upass);
    });
  });
});
