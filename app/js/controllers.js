app.controller('HomeCtrl', function (apiConnection) {
    var vm = this;
    var apiUrl = 'http://localhost:8000/';
    vm.cars = [];
    apiConnection.getCars().then(function (data) {
        vm.cars = data.data;
    });
    console.log(vm.cars);
});