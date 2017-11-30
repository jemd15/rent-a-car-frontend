app.controller('HomeCtrl', ['apiConnection', function (apiConnection) {
    var vehiculos = apiConnection.getCars();
    console.log(vehiculos);
}]);