vendorApp.controller('DashboardController', ['$scope', 'VendorDashboardService', '$cookies', 'Notification',
'$location','$route',
    function ($scope, VendorDashboardService, $cookies, Notification,  $location,  $route ) {

    // ====================== Log out function =========================
    $scope.logout = function(){
        $cookies.remove('vendorname');
        $cookies.remove('token');
        $cookies.remove('vendorId');
        $cookies.remove('email');
        $cookies.remove('name');
        $cookies.remove('mobile');
        $cookies.remove('authUserId');
        $location.path('/');
    }
    if ($cookies.get('vendorId') == null) {
        Notification.warning("Login required!!!");
        $location.path('/');
        $route.reload();
      } 

    // ====================== bool function =============================
        $scope.boolFunction = function(value){
            console.log("boolFunction", value);
            
            $scope.pendingOdersBool = false;
            $scope.confirmedOdersBool = false;
            $scope.cancelOdersBool  = false;
            $scope.completedOdersBool = false;
            $scope.paymentStatusBool = false;
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
    }
]); 