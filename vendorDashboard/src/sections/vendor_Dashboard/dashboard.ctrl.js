vendorApp.controller('DashboardController', ['$scope', 'VendorDashboardService', '$cookies', 'Notification',
'$location','$route',
    function ($scope, VendorDashboardService, $cookies, Notification,  $location,  $route,$timeout ) {

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

      



//weeklyMenu insert
$scope.newField = [];
$scope.editing = false;

$scope.appkeys = [{"name":"januka"}];

$scope.editAppKey = function(field) {
$scope.editing = $scope.appkeys.indexOf(field);
$scope.newField[$scope.editing] = angular.copy(field);
}

$scope.saveField = function(index) {
  $scope.appkeys[$scope.editing] = $scope.newField;
       
};

$scope.cancel = function(index){
    $scope.appkeys.splice( index, 1);
    if ($scope.appkeys.length() === 0){
        $scope.appkeys = [];
      }
    };
$scope.add = function () {
  var entry = {};
  $scope.appkeys.push(entry);
  console.log("hiii", $scope.appkeys);
 
};
}



    
]); 