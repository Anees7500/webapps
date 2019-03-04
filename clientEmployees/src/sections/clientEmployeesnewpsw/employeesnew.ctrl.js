ceApp.controller('LoginNewPswController', ['$scope', 'EmployeesLoginNewService', '$rootScope', '$http',
'$route','postEmployeeUpdatePassword','Notification','$cookies',
    function ($scope, EmployeesLoginNewService, $rootScope, $http, $route,
      postEmployeeUpdatePassword, Notification, $cookies) {

        $scope.updatePassword = function (newPass) {

          if(newPass.password === newPass.confirmPassword)
          {
            newPass.employeeId = $cookies.get("eId");
            newPass.id = $cookies.get("rId");
            EmployeesLoginNewService.update(newPass, postEmployeeUpdatePassword);
          }
          else
          {
            Notification.error('Password do not match'); 
          }

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
