empApp.controller('empScrollspyController', ['$scope',
  function($scope) {
    $scope.addToCartReverse = function()
    {
      $scope.add = $scope.add ? false : true;
    }

  }

  ]);