app.controller('HomeCtrl', function (apiConnection, $scope) {
    apiConnection.getCars().then(function (data) {
        $scope.apiUrl = apiConnection.url();
        $scope.cars = data.data.cars;
        //$scope.cars = data.data.cars;
    });
    $scope.filter = {
        'type': '',
        'state': ''
    };
});

app.controller('DriversCtrl', function (apiConnection, $scope) {
    apiConnection.getDrivers().then(function (data) {
        $scope.apiUrl = apiConnection.url();
        $scope.drivers = data.data.drivers; //.drivers;
    });
    $scope.filter= {
        'gender': '',
        "rate": ''
    }
});

app.controller('ClientsCtrl', function (apiConnection, $scope) {
    apiConnection.getClients().then(function (data) {
        $scope.apiUrl = apiConnection.url();
        $scope.clients = data.data.clients;
    });
    $scope.filter = {
        'convenio': ''
    }
});

app.controller('RentACarCtrl', function (apiConnection, $scope, $stateParams) {
    apiConnection.getCarsById($stateParams.carID).then(function (data) {
        $scope.apiUrl = apiConnection.url();
        $scope.car = data.data.car;
    });
    $scope.convenio = 'sin-convenio';
    apiConnection.getCars().then(function (data) {
        $scope.apiUrl = apiConnection.url();
        $scope.cars = data.data.cars;
    });
    apiConnection.getDrivers().then(function (data) {
        $scope.apiUrl = apiConnection.url();
        $scope.drivers = data.data.drivers;
    });
    $scope.car = {
        id: $stateParams.carID,
        price: $stateParams.carPrice,
        img: $stateParams.carImg,
        description: $stateParams.carDescription
    };
    $scope.rent = {
        carID: '',
        days: '',
        client: '',
        guarantee: '',
        receptionDate: '',
        returnDate: '',
        totalAmount: '0'
    };

    $scope.openRentModal = function () {
        $('#rentModal').addClass('open');
    };

    $scope.closeRentModal = function () {
        $('#rentModal').removeClass('open');
    };

    $scope.makeRent = function (firstname, lastname, telephone, rut, receptionDate, returnDate, email, guarantee, carID, driverID, totalPrice) {
        apiConnection.postRent(firstname, lastname, telephone, rut, receptionDate, returnDate, email, guarantee, carID, driverID, totalPrice)
    };

    $scope.iva = '19';

    var currentTime = new Date();
    $scope.currentTime = currentTime;
    $scope.month = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    $scope.monthShort = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    $scope.weekdaysFull = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    $scope.weekdaysLetter = ['D', 'L', 'M', 'X', 'J', 'V', 'S'];
    //$scope.disable = [false, 1, 7];
    $scope.today = 'Hoy';
    $scope.clear = 'Borrar';
    $scope.close = 'Cerrar';
    var days = 30;
    $scope.minDate = (new Date($scope.currentTime.getTime())).toISOString();
    $scope.maxDate = (new Date($scope.currentTime.getTime() + ( 1000 * 60 * 60 *24 * days ))).toISOString();

    $scope.todayDate = currentTime.getDate() + "/" + (currentTime.getMonth()+1)  + "/" + currentTime.getFullYear();
    var returnDate = $scope.rent.returnDate.split('/');
    $scope.rent.days = $scope.rent.returnDate - $scope.todayDate;
});

app.controller('RentsCtrl', function (apiConnection, $scope) {
    apiConnection.getRents().then(function (data) {
        $scope.apiUrl = apiConnection.url();
        $scope.rents = data.data.rents;
    });
    $scope.rent = {
        carID: '',
        days: '',
        client: '',
        guarantee: '',
        receptionDate: '',
        returnDate: '',
        totalAmount: '0'
    };
});