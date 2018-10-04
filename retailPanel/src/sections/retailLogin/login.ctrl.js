rtApp.controller('RetailLoginController', ['$scope', '$rootScope', '$cookies', 'AdminLoginService', '$http', 'adminLoginUrl', '$route',
    function ($scope, $rootScope, $cookies, AdminLoginService, $http, adminLoginUrl, $route) {
        $scope.login = function (user) {
            AdminLoginService.login(user, adminLoginUrl);
        }
    }
]);