adminApp.factory('AdminLoginService', ['$http', '$httpParamSerializerJQLike',
  '$location', 'Notification', '$cookies',
  function ($http, $httpParamSerializerJQLike, $location, Notification,$cookies) {
    return {
      login: function (admin, adminLoginUrl) {
        $http({
          method: 'POST',
          url: adminLoginUrl,
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'scm': 'fancymonk',
          },
          data: $httpParamSerializerJQLike(admin)
        }).then(function (response) {
          console.log('response admin', response);
          if (response.data.status == 1) { 
            debugger;
            Notification.success("Successfully Logged in");
            // $cookies.put('id',response.data.data[0].id);

            // $cookies.put('admin_username', response.data.message);
            $location.path('/dashboard');

          } else {
            console.log('error logging in');
            Notification.error('employeeId or password is incorrect');
          }
         
        })
        .catch(function (response) {
            
          });
      }
    }
  }
]);
