adminApp.factory('AdminLoginService', ['$http', '$httpParamSerializerJQLike', 
'$location', 'Notification',
  function($http, $httpParamSerializerJQLike, $location,Notification) {
    return {
      login: function(admin, adminLoginUrl) {
        $http({
            method: 'POST',
            url: adminLoginUrl,
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            data: $httpParamSerializerJQLike(admin)
          }).then(function(response) {
            console.log('response admin', response);
            if (response.data.status == 1) { 
             Notification.success("Successfully Logged in");
              // $cookies.put('admin_username', response.data.message);
               $location.path('/dashboard');

            } else {
              console.log('error logging in');
              
            }
          })
          .catch(function(response) {
            
          });
      }
    }
  }
]);
