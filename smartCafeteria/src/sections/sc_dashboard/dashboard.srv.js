empApp.factory('DashboardService', ['$http', '$httpParamSerializerJQLike', '$location',
    'Notification', 'CommonDetails',
    function($http, $httpParamSerializerJQLike, $location, Notification, CommonDetails) {
        var access_token = CommonDetails.getAccessToken();
        return {
            makeMenuFavoriteAndUnfavorite: function(data, favBool) {
                $http({
                    method: 'POST',
                    url: "http://fancymonk.com:9125/api/client/emp-favorite-menu/add",
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    data: $httpParamSerializerJQLike(data)
                }).then(function(response) {
                    console.log('response from favorite url', JSON.stringify(response));
                    // if (response.data.status == 1) {
                    //     // Notification.success('Booking request has been raised..');
                    //     $location.path('/dashboard/orders');
                    // } else {
                    //     console.log('error registering');
                    // }
                });
            },
            getVendors: getVendorsMethod
        }

        function callHttp(vendorListUrl) {
            return $http({
                method: 'GET',
                url: vendorListUrl,
                headers: {
                    'Authorization': 'Bearer ' + access_token
                }
            });
        }

        function getVendorsMethod(vendorListUrl) {
            var vendorList = null;
            return callHttp(vendorListUrl);
        }
    }
]);