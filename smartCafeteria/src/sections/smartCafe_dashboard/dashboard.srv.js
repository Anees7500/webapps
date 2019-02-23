empApp.factory('DashboardService', ['$http', '$httpParamSerializerJQLike','$location',
    function ($http, $httpParamSerializerJQLike,$location) {
        return {
            saveBookings: function (data) {
                return $http({
                    method: 'POST',
                    url: postSmartCafeteriaBookingUrl,
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    data: $httpParamSerializerJQLike(data)
                });
            }
        }
    }
]);
