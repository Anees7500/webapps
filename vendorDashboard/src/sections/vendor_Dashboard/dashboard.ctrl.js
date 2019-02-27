vendorApp.controller('DashboardController', ['$scope', '$http', 'VendorDashboardService', '$cookies', 'Notification',
    '$location', '$route', 'getSmartCafeteriaOrders', 'getAllCompanyToVendorUrl', 'getCorporateReviewsUrl', 
    '$routeParams',
    function ($scope, $http, VendorDashboardService, $cookies, Notification, $location,
        $route, getSmartCafeteriaOrders, getAllCompanyToVendorUrl, getCorporateReviewsUrl, $routeParams) {

        // ====================== Log out function =========================
        // $scope.logout = function () {
        //     $cookies.remove('vendorname'); 
        //     $cookies.remove('token');
        //     $cookies.remove('vendorId');
        //     $cookies.remove('email');
        //     $cookies.remove('name');
        //     $cookies.remove('mobile');
        //     $cookies.remove('authUserId');
        //     $location.path('/');
        // }
        // if ($cookies.get('vendorId') == null) {
        //     Notification.warning("Login required!!!");
        //     $location.path('/');
        //     $route.reload();
        // }
        var vendorId = 1;
        var companyId = 1;

        $scope.menuNodes = [];

        var getCompanies = getAllCompanyToVendorUrl + vendorId;
        $http.get(getCompanies).then(function (response) {
            $scope.companies = response.data.data.companies;
            $scope.cmpyName = response.data.data.companies.companyName;
            console.log("my company name", $scope.cmpyName);
        });
        // ====================== bool function =============================
        $scope.boolFunction = function (value) {
            console.log("boolFunction", value);

            $scope.pendingOdersBool = false;
            $scope.confirmedOdersBool = false;
            $scope.cancelOdersBool = false;
            $scope.completedOdersBool = false;
            $scope.paymentStatusBool = false;
            $scope.feedbackBool = false;
            $scope.setWeeklyMenuBool = false;
            $scope[value] = true;
        }
        $scope.boolFunction("pendingOdersBool");

        // =============================== set menu =========================================
        $scope.workingDays = [
            { day: "Monday", selected: false, dbName: "monday" },
            { day: "Tuesday", selected: false, dbName: "tuesday" },
            { day: "Wednesday", selected: false, dbName: "wednesday" },
            { day: "Thursday", selected: false, dbName: "thursday" },
            { day: "Friday", selected: false, dbName: "friday" },
            { day: "Saturday", selected: false, dbName: "saturday" },
            { day: "Sunday", selected: false, dbName: "sunday" }
        ];
        //================================ Cancel Oders ====================================
        $scope.cancelOderHistroy = [
            { menuItemName: "Egg Burji Omellete", menuItemCount: "3", totalAmount: "180", orderOn: "10/02/2018", paymentMode: "Online", paymentStatus: "Done", ordersStatus: "Delivered" },
            { menuItemName: "Egg Burji", menuItemCount: "1", totalAmount: "110", orderOn: "21/02/2018", paymentMode: "Online", paymentStatus: "Done", ordersStatus: "Delivered" },
            { menuItemName: "Omellete", menuItemCount: "3", totalAmount: "180", orderOn: "2/03/2018", paymentMode: "Cash on", paymentStatus: "Received", ordersStatus: "Delivered" },
            { menuItemName: "Egg Burji Omellete", menuItemCount: "3", totalAmount: "180", orderOn: "10/02/2019", paymentMode: "Online", paymentStatus: "Done", ordersStatus: "Delivered" },
            { menuItemName: "Egg Burji", menuItemCount: "1", totalAmount: "110", orderOn: "12/01/2019", paymentMode: "Online", paymentStatus: "Done", ordersStatus: "Delivered" },
            { menuItemName: "Omellete", menuItemCount: "3", totalAmount: "180", orderOn: "10/04/2018", paymentMode: "Cash on", paymentStatus: "Received", ordersStatus: "Delivered" },
            { menuItemName: "Egg Burji Omellete", menuItemCount: "3", totalAmount: "180", orderOn: "1/05/2018", paymentMode: "Online", paymentStatus: "Done", ordersStatus: "Delivered" },
            { menuItemName: "Egg Burji", menuItemCount: "1", totalAmount: "110", orderOn: "11/07/2018", paymentMode: "Online", paymentStatus: "Done", ordersStatus: "Delivered" },
            { menuItemName: "Omellete", menuItemCount: "3", totalAmount: "180", orderOn: "10/12/2018", paymentMode: "Cash on", paymentStatus: "Received", ordersStatus: "Delivered" },
            { menuItemName: "Egg Burji Omellete", menuItemCount: "3", totalAmount: "180", orderOn: "3/04/2018", paymentMode: "Online", paymentStatus: "Done", ordersStatus: "Delivered" },
            { menuItemName: "Egg Burji", menuItemCount: "1", totalAmount: "110", orderOn: "16/05/2018", paymentMode: "Online", paymentStatus: "Done", ordersStatus: "Delivered" }
        ];

        //================================ Payment Summary ====================================
        $scope.paymentSummary = [
            { data: "Today", totalAmount: "10,000" },
            { data: "This Week", totalAmount: "70,000" },
            { data: "This Month", totalAmount: "2,10,000" },
            { data: "This Quarter", totalAmount: "8,40,000" },
            { data: "This Year", totalAmount: "22,50,000" }
        ]

         // ================================= confirmed Oders =================================

        $scope.makeConfirmedOders = function (obj) {
            obj.confirmed = obj.confirmed ? false : true;
          }
        // ================================= Employee Feedback =================================
        
        var getFeedbackUrl = getCorporateReviewsUrl + $routeParams.compId;
        $http.get(getFeedbackUrl).then(function (response) {
            $scope.feedback = response.data.data.reviews;
        });
        //================================ Pending Oders ====================================
        var activeBookingListUrl = getSmartCafeteriaOrders + "?companyId=" + 1 + "&bookerId=" + 77 + "&type=pending";
        $http.get(activeBookingListUrl).then(function (response) {
            $scope.activeBookingList = response.data.data.bookings;
        });

        $scope.getVendorCombinations = function (menuArr) {
            // debugger;
            var vendorList = [];
            var vendorNameCombination = "";
            for (var i = 0; i < menuArr.length - 1; i++) {
                var ele = menuArr[i];
                if (!vendorList.includes(ele.vendorId)) {
                    vendorNameCombination = getVendorName(ele.menuObj.vendorId) + "-" + vendorNameCombination;
                    vendorList.push(ele.vendorId);
                }
            }
            // console.log("hahahaha : ", vendorNameCombination);
            return vendorNameCombination.substring(0, vendorNameCombination.length - 1);
        }

        $scope.getMenuForOrdersPage = function (menuArr) {
            var menuCombo = "";
            angular.forEach(menuArr, function (ele) {
                // debugger;
                menuCombo = (ele.quantity + " x " + ele.menuObj.menuName) + ", " + menuCombo;
            });
            // console.log("menu Combo : ", menuCombo);
            return menuCombo.substring(0, menuCombo.length - 2);
        }



    }
]); 