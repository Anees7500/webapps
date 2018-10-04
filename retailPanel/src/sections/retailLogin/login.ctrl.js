rtApp.controller('RetailLoginController', ['$scope', '$rootScope', 'AdminLoginService', '$http', 'adminLoginUrl',
    function ($scope, $rootScope, AdminLoginService, $http, adminLoginUrl) {
        $scope.login = function (user) {
            AdminLoginService.login(user, adminLoginUrl);
        }
    }
]);