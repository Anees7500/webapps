vmApp.factory('companydetailsService',['$http','$route','$httpParamSerializerJQLike','$location','Notification',
function($http,$route,$httpParamSerializerJQLike,$location,Notification){
  return {
    companySignup: function(company,companySignupUrl)
    {
      // console.log("passsed value : ", company);
      var rest = JSON.parse(JSON.stringify(company));
        $http({
          method: 'POST',
          url: companySignupUrl,
          headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
          },
          data: $httpParamSerializerJQLike(rest)
      }).then(function(response) {
          console.log('response', response);
          if (response.data.status == 1) {
              // console.log('Successfully registered ');
              Notification.success('Successfully submit the company details');
              // $location.path('/admin');
              $route.reload();
          } else {
              // console.log('error registering');
              Notification.error('error registering');
              $route.reload();
          }
      });

    }
  }
}]);
