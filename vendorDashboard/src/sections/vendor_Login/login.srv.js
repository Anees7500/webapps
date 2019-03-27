vendorApp.factory('VendorLoginService', ['$cookies','$rootScope','$httpParamSerializerJQLike', '$http',
'$location','Notification','clientId','clientToken',
    function ($cookies,$rootScope, $httpParamSerializerJQLike, $http, $location, Notification,clientId,clientToken) {
        return {
            login: function(user,loginUrl) {
              console.log("user",user);
                $http({
                    method: 'POST',
                    url: loginUrl,
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'client': clientId,
                        'Authorization': 'Basic ' + clientToken 
                    },

                    data: $httpParamSerializerJQLike(user)
                }).then(function(response) {
                  console.log("response",response);
                    if (response.data.data != null) {
                        Notification.success('Successfully loged in');
                       
                        var vTokens = response.data.data.tokens;                        
                        $cookies.put('vendor_access_token',vTokens.access_token);
                        $cookies.put('vendor_refresh_token',vTokens.refresh_token);
                        $cookies.put('vendor_expires_in',vTokens.expires_in);

                        // $cookies.put('vendorname',response.data.data.vendor.username);
                        // $cookies.put('token',response.data.data.vendor.token);
                        // $cookies.put('vendorId',response.data.data.vendor.id);
                        // $cookies.put('email',response.data.data.vendor.email);
                        // $cookies.put('name',response.data.data.vendor.name);
                        // $cookies.put('mobile',response.data.data.vendor.mobile);
                        // $cookies.put('authUserId',response.data.data.vendor.authUserId);
                        $location.path('/companies');
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
