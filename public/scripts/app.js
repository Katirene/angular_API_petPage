var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when('/home', {
            templateUrl: '../views/templates/home.html'
        })
        .when('/dog', {
            templateUrl: '../views/templates/dog.html',
            controller: 'dogController'
        })
        .when('/cat', {
            templateUrl: '../views/templates/cat.html',
            controller: 'buttonController'
        })
        .when('/fish', {
            templateUrl: '../views/templates/fish.html',
            controller: 'buttonController'
        })
        .otherwise({
            redirectTo: '/home'
        });
}]);