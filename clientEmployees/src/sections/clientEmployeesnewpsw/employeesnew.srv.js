ceApp.factory('EmployeesLoginNewService', ['$http', '$httpParamSerializerJQLike','$location',
    function ($http, $httpParamSerializerJQLike,$location) {
        return {
            update: function (newPass, url) {
                $http({
                    method: 'POST',
                    url: url,
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'type': 'clientPanel',
                        'scm': 'fancymonk',
                        'Authorization': 'Basic WVhCd1FHWmhibU41Ylc5dWEyRmhZV0Z1OjE1OjJDOjJBOkZFOjUxOkQwOkM3OjNCOjQ2OjFGOkREOjk2Ojk0OkFGOjkyOkE2OjFGOjUyOjBEOkUz',
                    },

                    data: $httpParamSerializerJQLike(newPass)
                }).then(function (response) {
                    console.log("response update ", JSON.stringify(response));
                    if(response.data.status == 1)
                    {
                      $location.path('/dashboard');
                    }
                    else {
                      Notification.error('Could not update password, Please try again');
                    }
                })
                    .catch(function (response) {
                        // Notification.error('Server is down please try again latter');
                    });
            }
        }
    }
]);
