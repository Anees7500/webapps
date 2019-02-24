empApp.controller('OrdersController', ['$scope',
  function($scope) {
  

        //================ Ratingfeedback ============================
        var maxRating = 5;
        $scope.stars = [].constructor(maxRating);
        $scope.ratingParameters = [
          {
            name: "Presentation",
            rating: 3
          },
          {
            name: "Quality",
            rating: 3
          },
          {
            name: "Taste",
            rating: 4
    
          },
          {
            name: "Quantity",
            rating: 4
          }
        ];
    
        $scope.rateBy = function (j, star) {
          console.log("hhhsh cdhbdsjhs : ", star);
          console.log("hhhshs : ", JSON.stringify($scope.stars));
          j.rating = star;
    
        }
  }

  ]);