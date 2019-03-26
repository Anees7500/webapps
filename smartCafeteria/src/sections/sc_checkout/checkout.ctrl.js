empApp.controller('CheckoutController', ['$scope', '$cookies', 'Notification', '$location',
    'CartService', 'companyDetails', 'CheckOutService', 'CommonDetails',
    function($scope, $cookies, Notification, $location, CartService, companyDetails,
        CheckOutService, CommonDetails) {
        $scope.cartObj = CartService.getCartObj();

        var selectedVendor = CartService.getSelectedVendor();
        console.log("in srv cart : ", JSON.stringify($scope.cartObj.cartItems));


        $scope.addCount = function(val) {
            $scope.cartObj = CartService.addCount(val);
        }
        $scope.walletAmount = CommonDetails.getWalletBalance();
        $scope.reduceCount = function(val) {
            $scope.cartObj = CartService.reduceCount(val);
        }

        $scope.useWalletMoney = false;
        if ($scope.walletAmount > 0) {
            $scope.useWalletMoney = true;
        }

        $scope.getPayableAmount = function() {
            var payAmount;
            if ($scope.useWalletMoney) {
                var amt = $scope.cartObj.cartItems.totalAmount - $scope.walletAmount;

                if (amt <= 0) {
                    payAmount = 0;
                } else {
                    payAmount = amt;
                }
            } else {
                payAmount = $scope.cartObj.cartItems.totalAmount;
            }
            $scope.payableAmount = payAmount;
            return payAmount;
        }

        var employeeDetails = JSON.parse($cookies.get("employeeDetails"));
        var makeRazorPayOptions = function(data, orderId) {
            var options = {
                "key": "rzp_test_KgnTG2Mdqgd2WX",
                "amount": (data.totalAmount * 100),
                "name": "Fancymonk",
                "description": "Smart Cafeteria",
                "order_id": orderId,
                "prefill": {
                    "name": "Aman Telkar",
                    "email": "fancymonk@razorpay.com",
                    "phone": "9739420527"
                },
                "notes": {
                    "address": " Hello"
                },
                "theme": {
                    "color": "lightseagreen"
                },
                handler: function() {
                    // alert('Payment successful')
                    console.log("after payment success ", JSON.stringify(arguments));
                    var updateObj = {};
                    updateObj.bookingId = $scope.bookingResponse.bookingId;
                    if (arguments['0'] != null) {
                        updateObj.paymentId = arguments['0'].razorpay_payment_id;
                    }
                    CheckOutService.updateBookingsNPayment(updateObj);
                    // updateObj.status = "USERREQUESTED";

                    // CheckOutService.updateBookings(updateObj);

                    // updateObj.status = "CONFIRMED";
                    // if (arguments['0'] != null) {
                    //     updateObj.paymentId = arguments['0'].razorpay_payment_id;
                    // }
                    // CheckOutService.updatePayments(updateObj);
                }
            };
            return options;
        }

        var pay = function(params) {
            $.getScript('https://checkout.razorpay.com/v1/checkout.js', function() {
                var rzp = new Razorpay(params);
                rzp.open();
            });
        };


        var getMenuForBookings = function() {
            var bookingMenuArr = [];
            angular.forEach($scope.cartObj.cartItems, function(cartValue, cartKey) {
                if (cartKey != 'totalAmount') {
                    var temp = {};
                    temp.menuId = cartKey;
                    temp.quantity = cartValue.count;

                    bookingMenuArr.push(temp);
                }
            });
            return bookingMenuArr;
        }
        $scope.checkout = function() {


            var objForDb = {};
            objForDb.companyToken = companyDetails.authUserId;
            objForDb.employeeId = employeeDetails.employeeId;
            objForDb.menu = JSON.stringify(getMenuForBookings());

            objForDb.mobile = employeeDetails.mobile;
            objForDb.totalAmount = $scope.cartObj.cartItems.totalAmount;
            objForDb.vendorToken = selectedVendor.authUserId;

            var payType;

            if ($scope.useWalletMoney) {
                if ($scope.payableAmount == 0) {
                    payType = "WALLET";
                    objForDb.byWallet = $scope.cartObj.cartItems.totalAmount;

                } else if ($scope.paymentByCash) {
                    payType = "WALLETNCASH";
                    objForDb.byWallet = $scope.walletAmount;
                    objForDb.byCash = $scope.payableAmount;
                } else if ($scope.paymentByOnline) {
                    payType = "ONLINENWALLET";
                    objForDb.byWallet = $scope.walletAmount;
                    objForDb.byOnline = $scope.payableAmount;
                }
            } else if (paymentByCash) {
                payType = "CASH";
                objForDb.byCash = $scope.cartObj.cartItems.totalAmount;
            } else if (paymentByOnline) {
                payType = "ONLINE";
                objForDb.byOnline = $scope.cartObj.cartItems.totalAmount;
            }

            objForDb.paymentType = payType;
            CheckOutService.saveBookings(objForDb).then(function(response) {
                if (response.data.status == 1) {
                    $scope.bookingResponse = response.data.data;
                    if (objForDb.paymentType === "ONLINE" || objForDb.paymentType === "ONLINENWALLET") {
                        var params = makeRazorPayOptions(objForDb, response.data.data.rzpOrderId);
                        pay(params);
                    } else {
                        $location.path('/dashboard/orders');
                    }
                } else {

                }
            });
        }

        // $scope.searchButtonText = "Search";
        // $scope.test = "true";

        // $scope.search = function () {
        //     $scope.enable = "false";
        //     $scope.test = "true";
        //     $scope.searchButtonText = "Searching";
        //     // Do your searching here

        //     $timeout(function(){
        //         $scope.enable = "true";
        //         $scope.searchButtonText = "Search";
        //     }, 2000);
        // }


    }

]);