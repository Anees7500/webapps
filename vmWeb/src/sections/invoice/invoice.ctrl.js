vmApp.controller('InvoiceController', ['$scope','$rootScope','$route','$http',
            function($scope,$rootScope,$route,$http) {

              $http.get('data.json')
                          .then(function(res){
                             $scope.invoice = res.data;
                             console.log("res.data",$scope.invoice)
                          });
        }]);
