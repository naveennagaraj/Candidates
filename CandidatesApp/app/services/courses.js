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
                ['BioInformatics','Cyber Science','Computer Science','Computer Application', 'Information Technology', 'Mechanical Engineer' , 'Electronics Engineer'],
            brdata: ['B.Sc','BCA','B.E','M.Sc','M.C.A','M.E'],
            cmpcourse: []   
        };
    }
})();
