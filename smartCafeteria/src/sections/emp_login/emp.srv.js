empApp.factory('EmployeesLoginService', ['$http', '$httpParamSerializerJQLike','$rootScope','$location',
'$cookies','Notification',
    function ($http, $httpParamSerializerJQLike, $rootScope, $location, $cookies,Notification) {
        return {
            // login: function (user, url) {
            //     $http({
            //         method: 'POST',
            //         url: url,
            //         headers: {
            //             'Content-Type': 'application/x-www-form-urlencoded',
            //             'type': 'clientPanel',
            //             'scm': 'fancymonk',
            //             'Authorization': 'Basic WVhCd1FHWmhibU41Ylc5dWEyRmhZV0Z1OjE1OjJDOjJBOkZFOjUxOkQwOkM3OjNCOjQ2OjFGOkREOjk2Ojk0OkFGOjkyOkE2OjFGOjUyOjBEOkUz',
            //         },
            //         data: $httpParamSerializerJQLike(user)
            //     }).then(function (response) {
            //         console.log("response logins ", JSON.stringify(response));
            //         if (response.data.data != null && response.data.data.employee != null) {
            //             var eDetails = response.data.data.employee;
            //             $rootScope.employeeDetails = eDetails;
            //             $cookies.put("eId", eDetails.employeeId);
            //             $cookies.put("rId", eDetails.id);
            //             $cookies.put("cId", eDetails.companyId);
            //             Notification.success('Logged in Successfully');
            //             if(eDetails.defaultPassword)
            //             {
            //               $location.path('/dashboard');
            //             }
            //             else {
            //               $location.path('/dashboard');
            //             }

            //         } else {
            //             Notification.error('employeeId or password is incorrect');
            //         }
            //     })
            //         .catch(function (response) {
            //             Notification.error('employeeId or password is incorrect');
            //         });
            // }
        }
    }
]);
