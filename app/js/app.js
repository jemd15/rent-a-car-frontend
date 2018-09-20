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
        .state('drivers', {
            url: "/drivers",
            templateUrl: "app/views/drivers.html",
            controller: "DriversCtrl"
        })
        .state('clients', {
            url: "/clients",
            templateUrl: "app/views/clients.html",
            controller: "ClientsCtrl"
        })
        .state('rentACar', {
            url: "/rentACar/:carID/",
            templateUrl: "app/views/rent.html",
            controller: "RentACarCtrl"
        })
        .state('rents', {
            url: "/rents",
            templateUrl: "app/views/rents.html",
            controller: "RentsCtrl"
        })
});

app.run(function($rootScope){
    $rootScope.$on('$stateChangeSuccess', function() {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    })
});

app.factory('apiConnection', function ($http) {

    //var apiURL = 'http://localhost:8100/';
    var apiURL = 'http://10.170.224.24:3000/';

    var apiConnection = {

        url: function () {
            return apiURL
        },
        
        getCars: function () {
            return $http.get(apiURL + 'api/cars').then(function (data) {
                return data
            }, function (err) {
                console.log('Error ' + err);
            })
        },

        getCarsById: function (carId) {
            return $http.get(apiURL + 'api/cars/' + carId).then(function (data) {
                return data
            }, function (err) {
                console.log('Error ' + err);
            })
        },
        
        getClients: function () {
            return $http.get(apiURL + 'api/users').then(function (data) {
                return data
            }, function (err) {
                console.log('Error ' + err);
            })
        },
        
        getDrivers: function () {
            return $http.get(apiURL + 'api/drivers').then(function (data) {
                return data
            }, function (err) {
                console.log('Error ' + err);
            })
        },

        getRents: function () {
            return $http.get(apiURL + 'api/rents').then(function (data) {
                return data
            }, function (err) {
                console.log('Error ' + err);
            })
        },

        postRent: function (firstname, lastname, telephone, rut, receptionDate, returnDate, email, guarantee, carID, driverID, totalPrice) {
            var newRent = {
                name: firstname,
                lastname: lastname,
                rut : rut,
                telephone: telephone,
                email: email,
                guarantee: guarantee,
                receptionDate: receptionDate,
                returnDate: returnDate,
                sumRent: totalPrice,
                car: carID,
                driver: driverID
            };
            $http.post(apiURL + 'api/unagreement', newRent).then(function () {
                $('#rentModal').addClass('open');
                console.log('open modal');
            }, function (err) {
                console.log('Error ' + err);
            })
        },

        putCar: function (carID, carState) {

        }
        
    };

    return apiConnection
});