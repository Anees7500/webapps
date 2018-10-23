rtApp.controller('FooController', ['$scope',
 function ($scope) {
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
        $.getScript('https://checkout.razorpay.com/v1/checkout.js', function() {
        var rzp = new Razorpay(options);
        rzp.open();
    });
    };
     
}]);
(window.angular);