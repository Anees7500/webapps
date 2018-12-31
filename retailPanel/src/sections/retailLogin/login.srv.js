rtApp.factory('AdminLoginService', ['$http', '$rootScope', '$httpParamSerializerJQLike', '$location', 'Notification',
    function ($http, $cookies, $httpParamSerializerJQLike, $location, Notification) {
        return {
            login: function (user, adminLoginUrl) {
                $http({
                        method: 'POST',
                        url: adminLoginUrl,
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded',
                        },
                        data: $httpParamSerializerJQLike(user)
                    }).then(function (response) {
                        console.log('response admin 112', response);
                        if (response.data.status == 1) {
                            Notification.success('Welcome You Are In Admin Penal');
                            // $cookies.put('admin_username', response.data.message);
                            // $cookies.put('token',response.data.data[0].token);
                            // $cookies.put('id',response.data.data[0].id);
                            // $cookies.put('email',response.data.data[0].email);
                            $location.path('/admin');

                        } else {
                            console.log('error logging in');
                            Notification.error('Username/Mobile/Email or password is incorrect');
                        }
                    })
                    .catch(function (response) {
                        Notification.error('Username/Mobile/Email or password is incorrect');
                    });
            }
        }
    }
]);