empApp.controller('EmpLoginController', ['$scope', 'EmployeesLoginService', '$rootScope', '$http', '$route',
    'postEmployeeLogin',
    function($scope, EmployeesLoginService, $rootScope, $http, $route, postEmployeeLogin) {

        // =============== LogIn =================================
        $scope.login = function(user) {
            user.companyId = 1;
            EmployeesLoginService.login(user, postEmployeeLogin);
        }


        $scope.hideDiv = function() {
                $scope.hide = true;
            }
            // =============== Forgot Password =========================
        $scope.forgotPassword = function() {
            $scope.hide = false;
        }

        $scope.sendOtp = function(phoneNumber) {

        }

    }
]);