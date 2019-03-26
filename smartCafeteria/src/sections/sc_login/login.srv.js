empApp.factory('EmployeesLoginService', ['$http', '$httpParamSerializerJQLike', '$rootScope', '$location',
    '$cookies', 'Notification', 'clientToken', 'clientId', 'CommonDetails',
    function($http, $httpParamSerializerJQLike, $rootScope, $location, $cookies, Notification,
        clientToken, clientId, CommonDetails) {
        return {
            login: function(user, url) {
                $http({
                        method: 'POST',
                        url: url,
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded',
                            'client': clientId,
                            'Authorization': 'Basic ' + clientToken
                        },
                        data: $httpParamSerializerJQLike(user)
                    }).then(function(response) {
                        // console.log("response logins ", JSON.stringify(response));
                        if (response.data.data != null && response.data.data.employee != null) {
                            var eDetails = response.data.data.employee;
                            var eTokens = response.data.data.tokens;
                            $rootScope.employeeDetails = eDetails;
                            $cookies.put("employeeDetails", JSON.stringify(eDetails));
                            debugger;
                            $cookies.put("sc_access_token", eTokens.access_token);
                            $cookies.put("sc_refresh_token", eTokens.refresh_token);
                            $cookies.put("sc_access_token_expiry", eTokens.expires_in);

                            // $cookies.put("eId", eDetails.employeeId);
                            // $cookies.put("rId", eDetails.id);
                            // $cookies.put("cId", eDetails.companyId);
                            Notification.success('Logged in Successfully');
                            if (eDetails.defaultPassword) {
                                $location.path('/dashboard');
                            } else {
                                $location.path('/dashboard');
                            }

                        } else {
                            Notification.error('employeeId or password is incorrect');
                        }
                    })
                    .catch(function(response) {
                        Notification.error('employeeId or password is incorrect');
                    });
            }
        }
    }
]);