/*global describe, beforeEach, it, expect, inject, module*/
'use strict';

describe('LoginCtrl', function() {
  beforeEach(module('login'));
  // beforeEach(module('course'));

  var $controller,createService;

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

  beforeEach(inject(function() {
        var $injector = angular.injector(['login'])

        createService = function() {
            return $injector.get('dataStore');
        }
    }));

  it('should be defined', function() {
      var service = createService();
      expect(service).toBeTruthy();
      // console.log(service.lgdata);
    });
  it('Should Get Username And password',function(){
    var service = createService();
    expect(service.lgdata[0].username).toEqual('naveen');
    expect(service.lgdata[0].username).toEqual('naveen');
  });

  // describe('$scope.loginAuthunticate', function() {
  //   it('Checks The Valid password', function() {
  //     var $scope = {};
  //     var controller = $controller('LoginCtrl', { $scope: $scope });
  //     $scope.uname = 'naveen';
  //     $scope.upass = 'naveen';
  //     $scope.loginAuthunticate();
  //     expect($scope.uname).toEqual($scope.upass);
  //   });
  // });
});
