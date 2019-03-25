clientApp.controller('ClientLoginCtrl', ['$scope','ClientLoginService', 'clientLoginUrl', '$http','$location',
function($scope, ClientLoginService, clientLoginUrl, $http,$location)
{
    $scope.login = function(user) {
        console.log("check ",JSON.stringify(user));
        ClientLoginService.login(user, clientLoginUrl);
      }
}
]);