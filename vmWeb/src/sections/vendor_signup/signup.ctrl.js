vmApp.controller('SignupController', ['$scope','$rootScope', '$cookies', 'signupService', '$http','signupUrl',
        function($scope, $rootScope, $cookies, signupService, $http, signupUrl) {
            $cookies.remove('id');

            console.log("Id cookie val ",$cookies.get('id'));
            $cookies.remove('token');
            $cookies.remove('username');
            $scope.signup = function(user) {
            //var num = user.number;
            // var n = num.toString();
         console.log("I am in ctrl file : ",user);
                signupService.signup(user, signupUrl);

            }
            $rootScope.barBool = false;
          }
    ]);
