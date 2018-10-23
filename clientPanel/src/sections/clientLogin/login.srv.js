clientApp.factory('ClientLoginService', ['$http', '$httpParamSerializerJQLike','$location',
    function($http,$httpParamSerializerJQLike,$location) {
        return {
            login: function(clientCredential,LoginClientUrl) {
              console.log("client credential message ",clientCredential);
                $http({
                    method: 'POST',
                    url: LoginClientUrl,
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'type': 'clientPanel',
                        'scm': 'fancymonk',
                        'Authorization': 'Basic WVhCd1FHWmhibU41Ylc5dWEyRmhZV0Z1OjE1OjJDOjJBOkZFOjUxOkQwOkM3OjNCOjQ2OjFGOkREOjk2Ojk0OkFGOjkyOkE2OjFGOjUyOjBEOkUz',
                    },

                    data: $httpParamSerializerJQLike(clientCredential)
                }).then(function(response) {
                  console.log("response logins ",response);
                    if (response.data.status == 1) {
                        $location.path('/dashboard');
                    } else {
                    }
                })
                .catch(function(response) {
                  // Notification.error('Server is down please try again latter');
                });
            }
        }
    }
]);
