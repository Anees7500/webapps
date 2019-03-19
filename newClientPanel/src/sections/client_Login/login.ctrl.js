clientApp.controller('ClientLoginCtrl', ['$scope','ClientLoginService', 'ClientLoginUrl', '$http','$location',
function($scope, ClientLoginService, loginUrl, $http,$location)
{
    $scope.login = function(user) {
        console.log("check ",JSON.stringify(user));
        ClientLoginService.login(user, ClientLoginUrl);
      }
}
]);