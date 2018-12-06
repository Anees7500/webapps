ceApp.controller('LoginNewPswController', ['$scope', 'EmployeesLoginNewService', '$rootScope', '$http', '$route',
    function ($scope, EmployeesLoginNewService, $rootScope, $http, $route) {
        console.log("hello i am isnide login contriller");
        $scope.login = function (user) {
            console.log("check ", JSON.stringify(user));
            EmployeesLoginNewService.login(user, "http://fancymonk.com:9124/api/corporate/login");
        }
        // Login page New password************//
        var $btn = document.getElementById("submit");
        var $form = document.getElementById("form")

        function signIn() {
            if ($form.checkValidity()) {
                $btn.classList.add('pending');
                window.setTimeout(function () { $btn.classList.add('granted'); }, 1500);
            }
        }

        $btn.addEventListener("click", signIn);
       

        // Login page New password************  end //
    }
]);
