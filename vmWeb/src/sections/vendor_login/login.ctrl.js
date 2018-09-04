vmApp.controller('LoginController',['$scope','$rootScope','$cookies','loginService',
'$http','loginUrl','$route',
            function($scope,$rootScope,$cookies, loginService, $http,loginUrl,$route) {

                $scope.login = function(user) {
                    loginService.login(user,loginUrl);
                }
            }
        ]);
