empApp.factory('CheckOutService', ['$http', '$httpParamSerializerJQLike', '$location',
    'postSmartCafeteriaBookingUrl', 'postSmartCafeBookingUpdateUrl', 'postSmartCafePaymentUpdateUrl',
    'Notification', 'CommonDetails', 'postSmartCafeBookingNPaymentUpdateUrl',
    function($http, $httpParamSerializerJQLike, $location, postSmartCafeteriaBookingUrl,
        postSmartCafeBookingUpdateUrl, postSmartCafePaymentUpdateUrl, Notification, CommonDetails,
        postSmartCafeBookingNPaymentUpdateUrl) {
        return {
            saveBookings: function(data) {
                console.log("data passed in save bookings ", JSON.stringify(data));
                return $http({
                    method: 'POST',
                    url: postSmartCafeteriaBookingUrl,
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Authorization': 'Bearer ' + CommonDetails.getAccessToken()
                    },
                    data: $httpParamSerializerJQLike(data)
                });
            },
            updateBookings: function(data) {
                $http({
                    method: 'POST',
                    url: postSmartCafeBookingUpdateUrl,
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    data: $httpParamSerializerJQLike(data)
                }).then(function(response) {
                    console.log('response', JSON.stringify(response));
                    if (response.data.status == 1) {
                        Notification.success('Booking request has been raised..');
                    } else {
                        console.log('error registering');

                    }
                });
            },
            updatePayments: function(data) {
                $http({
                    method: 'POST',
                    url: postSmartCafePaymentUpdateUrl,
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    data: $httpParamSerializerJQLike(data)
                }).then(function(response) {
                    console.log('response', JSON.stringify(response));
                    if (response.data.status == 1) {
                        // Notification.success('Booking request has been raised..');
                        $location.path('/dashboard/orders');
                    } else {
                        console.log('error registering');

                    }
                });
            },
            updateBookingsNPayment: function(data) {
                $http({
                    method: 'POST',
                    url: postSmartCafeBookingNPaymentUpdateUrl,
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Authorization': 'Bearer ' + CommonDetails.getAccessToken()
                    },
                    data: $httpParamSerializerJQLike(data)
                }).then(function(response) {
                    console.log('response', JSON.stringify(response));
                    if (response.data.status == 1) {
                        Notification.success('Booking request has been raised..');
                        $location.path('/dashboard/orders');
                    } else {
                        console.log('error registering');

                    }
                });
            }

        }
    }
]);