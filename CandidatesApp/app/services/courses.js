(function() {
    'use strict';
    /* @ngdoc object
   * @name myNewApp
   * @requires $urlRouterProvider
   *
   * @description
   *
   */
    
    angular
        .module('course')
        .factory('coursedata', coursedata);

    /* @ngInject */
    function coursedata() {
        return {
            csdata: 
                [{'id':'c1','value':'Information Technology'},{'id':'c2','value':'Mechanical Engineer'},{'id':'c3','value':'Electronics Engineer'},{'id':'c4','value':'Computer Application'},{'id':'c5','value':'Computer Science'},{'id':'c6','value':'Cyber Science'},{'id':'c7','value':'BioInformatics'}],
            brdata: [{'id':'b1','value':'B.Sc'},{'id':'b2','value':'M.E'},{'id':'b3','value':'M.C.A'},{'id':'b4','value':'BCA'},{'id':'b5','value':'B.E'},{'id':'b6','value':'M.Sc'}],
            cmpcourse: [{'DegreeId':'b1','Branches':['c1','c2','c3']}]   
        };
    }
})();
