/*global describe, beforeEach, it, expect, inject, module*/
'use strict';

describe('HomeCtrl', function () {
  var ctrl;

  beforeEach(module('home'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('HomeCtrl');
  }));

  it('should have ctrlName as HomeCtrl', function () {
    expect(ctrl.ctrlName).toEqual('HomeCtrl');
  });

});


describe('ROOT.home', function() {

  var $rootScope, $state, $injector, state = 'ROOT.home';
 
  beforeEach(module('myNewApp'));
  beforeEach(module('home'));

  beforeEach(function() {

    inject(function(_$rootScope_, _$state_, _$injector_, $templateCache) {

      $rootScope = _$rootScope_;
      $state = _$state_;
      $injector = _$injector_;
      // We need add the template entry into the templateCache if we ever
      // specify a templateUrl
      $templateCache.put('home.tpl.html', '');
    })
  });

  it('should respond to URL', function() {
    expect($state.href(state)).toEqual('#/ROOT/home');
  });
});
