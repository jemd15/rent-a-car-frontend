var app = angular.module('RentACar',['ui.router','ui.materialize']);

app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/home");

    $stateProvider
        .state('home', {
            url: "/home",
            templateUrl: "app/views/home.html",
            controllerAs: 'HomeCtrl'
        })
        .state('login', {
            url: "/login",
            templateUrl: "app/views/login.html"
        })
});

app.run(function($rootScope){
    $rootScope.$on('$stateChangeSuccess', function() {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    })
});

app.factory('apiConnection', function ($http) {

    var apiURL = 'http://localhost:8000/';
    
    var apiConnection = {
        
        getCars: function () {
            return $http.get(apiURL + 'cars').then(function (data) {
                return data
            }, function (err) {
                console.log('Error ' + err);
            })
        },
        
        getUsers: function () {
            return $http.get(apiURL + 'users').then(function (data) {
                return data
            }, function (err) {
                console.log('Error ' + err);
            })
        },
        
        getDrivers: function () {
            return $http.get(apiURL + 'drivers').then(function (data) {
                return data
            }, function (err) {
                console.log('Error ' + err);
            })
        }
        
    };

    return apiConnection
});