clientApp.factory('ClientLoginService', ['$http', '$httpParamSerializerJQLike','$location',
    '$rootScope', '$cookies','Notification',
    function($http, $httpParamSerializerJQLike, $location, $rootScope, $cookies,Notification) {
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
                  console.log("response logins ", JSON.stringify(response));
                    if (response.data.status == 1) {
                        Notification.success('Logged in successfully');
                        $rootScope.companyDetails = response.data.data.company;
                        $cookies.put("clientPanelCompanyId", response.data.data.company.id);
                        $location.path('/dashboard');
                    } else {
                         Notification.error('Username or password is incorrect');
                    }
                })
                .catch(function(response) {
                  console.log("helo erro");
                  Notification.error('Username or password is incorrect');
                });
            }
        }
    }
]);
