vendorApp.controller('VendorLoginController', ['$scope',  'VendorLoginService',  'loginUrl', '$location', 
    function ($scope, VendorLoginService, loginUrl, $location) {
        $scope.login = function(user) {
            VendorLoginService.login(user,loginUrl);
        }
   
    }
]); 