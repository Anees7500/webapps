vmApp.factory('loginService', ['$http','$cookies','$rootScope','$httpParamSerializerJQLike','$location','Notification',
    function($http,$cookies,$rootScope, $httpParamSerializerJQLike, $location, Notification) {
        return {
            login: function(user,loginUrl) {
              console.log("user",user);
                $http({
                    method: 'POST',
                    url: loginUrl,
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'type': 'vendor',
                        'scm': 'fancymonk',
                        'Authorization': 'Basic WVhCd1FHWmhibU41Ylc5dWEyRmhZV0Z1OjE1OjJDOjJBOkZFOjUxOkQwOkM3OjNCOjQ2OjFGOkREOjk2Ojk0OkFGOjkyOkE2OjFGOjUyOjBEOkUz',
                    },
                    data: $httpParamSerializerJQLike(user)
                }).then(function(response) {
                  console.log("response 101",response);
                    if (response.data.status == 1) {
                        Notification.success('Successfully loged in');
                        $cookies.put('username',response.data.data.vendor.username);
                        $cookies.put('token',response.data.data.vendor.token);
                        $cookies.put('id',response.data.data.vendor.id);
                        $cookies.put('email',response.data.data.vendor.email);
                        $cookies.put('name',response.data.data.vendor.name);
                        $cookies.put('mobile',response.data.data.vendor.mobile);
                        $cookies.put('authUserId',response.data.data.vendor.authUserId);
                        $location.path('/dashboard');
                    } else {
                        Notification.error('Username/Mobile/Email or password is incorrect');
                    }
                })
                .catch(function(response) {
                  Notification.error('Server is down please try again latter');
                });
            }
        }
    }
]);
