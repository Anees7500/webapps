// rtApp.controller('CheckoutController',[ '$scope', '$rootScope', '$route', '$http', 
// 	function($scope, $rootScope, $route, $http,){ 


// }]);

rtApp.controller('CheckoutController', ['$scope', function ($scope) {

    console.log("hi , inside foocontroler");
    var options = {
        "key": "rzp_test_glA246D8rCFOVc",
        "amount": 100,
        "name": "Fancymonk",
        "description": " Description",
        "prefill": {
            "name": "Aman Telkar",
            "email": "fancymonk@razorpay.com"
        },
        "notes": {
            "address": " Hello"
        },
        "theme": {
            "color": "lightseagreen"
        },
        handler: function () {
            alert('Payment successful')
            console.log(arguments)
        }
    };
    $scope.pay = function () {
        $.getScript('https://checkout.razorpay.com/v1/checkout.js', function () {
            var rzp = new Razorpay(options);
            rzp.open();
        });
    };
    $scope.back = function () {
        if ($scope.tabIndex > 0) {
            $scope.tabIndex--;
        }
    };
    $scope.next = function () {
        if ($scope.tabIndex < 2) {
            $scope.tabIndex++;
        }
    }

}]);
(window.angular);