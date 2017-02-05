angular.module("ngClassifieds",["ngMaterial"]).config(function($mdThemingProvider, $stateProvider) {
    $mdThemingProvider.theme('default').primaryPalette('teal').accentPalette('orange');

    $stateProvider
    .state('stateone', {
        url: '/stateone',
        template: "<h1>Hello World</h1>"
    })
    .state('stateone', {
        url: '/statetwo',
        template: "<h1>StateTwo</h1>"
    })
})
.directive("helloWorld",function() {
    return {
        template: "<h1>Hello World</h1>"
    };
});