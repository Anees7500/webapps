empApp.factory('DashboardService', ['$http', '$httpParamSerializerJQLike','$location',
'postSmartCafeteriaBookingUrl',
    function ($http, $httpParamSerializerJQLike,$location,postSmartCafeteriaBookingUrl) {
        return {
            saveBookings: function (data) {
                console.log("data passed in save bookings ", JSON.stringify(data));
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
