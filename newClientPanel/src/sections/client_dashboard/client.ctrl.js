clientApp.controller('ClientDashboardCtrl',['$scope','$route', function($scope,$route)
{
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