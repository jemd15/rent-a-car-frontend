var app = angular.module('RentACar',['ui.router','ui.materialize']);

app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/home");

    $stateProvider
        .state('home', {
            url: "/home",
            templateUrl: "app/views/home.html",
            controller: 'HomeCtrl'
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

app.service('apiConnection', ['$http', function ($http) {
    var apiURL = 'http://localhost:8000/';

    this.getCars = function () {
        var data = {'asdasd':'asdasd'};
        return $http({
            method: 'GET',
            url: apiURL + 'cars'
        }).then(function (success){
            data = success.data;
            return data
        },function (error){

        });
    };
}]);