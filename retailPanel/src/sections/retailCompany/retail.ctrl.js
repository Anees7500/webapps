rtApp.controller('RetailController', ['$scope', '$rootScope', '$route', '$http', 'GetRetailMenuUrl',
    function ($scope, $rootScope, $route, $http, GetRetailMenuUrl) {

        $http.get(GetRetailMenuUrl).then(function (response) {
            console.log(JSON.stringify(response.data.data));
            // console.log("hh");
            $scope.menus = response.data.data.menus[0].menuNode;
        });
        console.log("Inside retail controller: ");
        console.log("Inside retail fvhcxxj: ");
    }]);
