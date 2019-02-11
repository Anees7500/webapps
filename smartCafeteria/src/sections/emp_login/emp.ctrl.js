empApp.controller('empLoginController', ['$scope',
  function($scope) {
  	$scope.hideDiv = function()
  	{
  		$scope.hide = true;
  	}

  	$scope.forgotPassword = function()
  	{
  		$scope.hide = false;
  	}
  
  }
]);