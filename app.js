(function(){
    'use strict';

    angular
        .module('sprechen',['ngMaterial'])
        .config(sprechenConfig);

    sprechenConfig.$inject = ['$mdThemingProvider'];

    function sprechenConfig($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('red')
            .accentPalette('amber');
    }
    
})();