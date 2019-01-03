adminApp.factory('AdminLoginService', ['$http', '$rootScope', '$httpParamSerializerJQLike', '$location',
  function($http, $rootScope, $httpParamSerializerJQLike, $location) {
    return {
      login: function(admin, adminLoginUrl) {
        $http({
            method: 'POST',
            url: 'http://fancymonk.com:9125/api/admin/login',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            data: $httpParamSerializerJQLike(admin)
          }).then(function(response) {
            console.log('response admin', response);
            if (response.data.status == 1) {
             
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
