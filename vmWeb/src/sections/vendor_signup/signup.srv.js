vmApp.factory('signupService', ['$http','$httpParamSerializerJQLike','$location','loginUrl','loginService','Notification',
  function($http, $httpParamSerializerJQLike,$location,loginUrl,loginService,Notification) {
    return {
        signup: function(user,signupUrl) {
            console.log("in side service signup");
            console.log("passsed value : ", user);
            var rest = JSON.parse(JSON.stringify(user));
            console.log("final check : ", rest);
            $http({
                method: 'POST',
                url: signupUrl,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                data: $httpParamSerializerJQLike(rest)
            })
            .then(function(response) {
                console.log('response', response);
                if (response.data.status == 1) {
                    console.log('success');
                    Notification.success('Successfully registered');
                    var loginData = {
                      value:user.username,
                      password:user.password
                    }
                    loginService.login(loginData,loginUrl);
                } else {
                    Notification.error('[Error] in registering please check your internet connection');
                    console.log('error registering');
                }
            });
        }
    }
}]);
