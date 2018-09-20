rtApp.controller('RetailController', ['$scope', '$rootScope', '$route', '$http', 'GetRetailMenuUrl', '$routeParams', 'retailCompanyService', '$mdDialog',
function($scope, $rootScope, $route, $http, GetRetailMenuUrl, $routeParams, retailCompanyService, $mdDialog) {

  // read companyName from path parameter
  var compName = $routeParams.companyName;

  console.log("company Name : ", compName);

  var companyDetail;
  var dayName;

  retailCompanyService.getCompanyDetail(compName).then(function(resp) {
    companyDetail = resp.data.data.company;
    dayName = resp.data.data.day;
    console.log("dtls ", companyDetail);
    console.log("dayName ", dayName);

    retailCompanyService.getCompanyMenu(companyDetail.id,
      companyDetail.assignedVendorId,
      dayName).then(function(response) {
      console.log(JSON.stringify(response.data.data.menus));
      $scope.menuNode = unflatten(response.data.data.menus);
      console.log("test", $scope.menuNode);
    });

  });

  $scope.cartItems = {};

  $scope.addToCart = function(itemObj) {
    console.log("item id  ", JSON.stringify(itemObj));
    console.log("check ", $scope.cartItems[itemObj.id]);
    if ($scope.cartItems[itemObj.id]) {
      console.log("item  present");
      $scope.cartItems[itemObj.id].count = $scope.cartItems[itemObj.id].count + 1;
    } else {
      console.log("item not present");
      console.log("adding");
      $scope.cartItems[itemObj.id] = {
        obj: itemObj,
        count: 1
      };
    }
    $scope.cartItems[itemObj.id].addedInCart = true;
    console.log("cart items : ", JSON.stringify($scope.cartItems));
  };

  $scope.showCart = function(ev) {
    $mdDialog.show({
        controller: DialogController,
        templateUrl: 'sections/retailCompany/cart.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose: true,
        fullscreen: $scope.customFullscreen,
        locals: {
          items: $scope.cartItems
        }
      })
      .then(function(answer) {
        $scope.status = 'You said the information was "' + answer + '".';
      }, function() {
        $scope.status = 'You cancelled the dialog.';
      });
  };

  function DialogController($scope, $mdDialog, items) {
    $scope.hide = function() {
      $mdDialog.hide();
    };

    $scope.cancel = function() {
      $mdDialog.cancel();
    };

    $scope.answer = function(answer) {
      $mdDialog.hide(answer);
    };

    // console.log("cart items : ", JSON.stringify(items));
    // console.log("cart items count : ",Object.keys(items).length);

    $scope.selectedCartItems = items;

    $scope.addCount = function(val) {
      val.count = val.count + 1;
    }

    $scope.reduceCount = function(val) {
      if (val.count > 0) {
        val.count = val.count - 1;
      }
    }
    $scope.remove_click = function($index) {
        $scope.node.menuNode.splice($index, 1);
      }
  }

  function getTotalPrice(obj) {
    var tp = 0;
    // _.each(arr, function(ar){
    //   tp = tp + (ar.price*ar.quantity);
    // });

    return tp;
  };

  $scope.totalPrice = getTotalPrice($scope.cartItems);
}


// console.log("Inside retail controller: ");
$(document).ready(function() {
  $('.count').prop('disabled', true);
  $(document).on('click', '.plus', function() {
    $('.count').val(parseInt($('.count').val()) + 1);
  });
  $(document).on('click', '.minus', function() {
    $('.count').val(parseInt($('.count').val()) - 1);
    if ($('.count').val() == 0) {
      $('.count').val(1);
    }
  });
});

$scope.clickToOpen = function() {
  ngDialog.open({
    template: 'sections/retailCompany/cart.html',
    className: 'ngdialog-theme-default',
    controller: '',
  });
};
}]);

var unflatten = function(array, parent, tree) {
  // //console.log("value passed here : ",array);
  tree = typeof tree !== 'undefined' ? tree : [];
  parent = typeof parent !== 'undefined' ? parent : {
    uid: null
  };
  // console.log("tree type : ",tree);
  // console.log("parent type : ", parent);
  var children = _.filter(array, function(child) {
    child.isInserted = true;
    if (child.menuNodes == null) {
      child.menuNodes = [];
    }
    if (child.menuType != null) {
      if (child.menuType === "veg") {
        child.isVeg = true;
      } else if (child.menuType === "egg") {
        child.isEgg = true;
      }
    }
    return child.parentId == parent.id;
  });
  // console.log("chilren value : ", children.length);
  if (!_.isEmpty(children)) {
    if (parent.id == 0 || parent.id == null) {
      // console.log("parent.id ", parent.id);
      // //console.log("Children value after first check : ",JSON.stringify(children));
      // children.isInserted = true;
      // //console.log("Children value after Enhancement : ",JSON.stringify(children));
      tree = children;
    } else {
      parent['menuNode'] = children
    }
    _.each(children, function(child) {
      unflatten(array, child)
    });
  }
  // console.log("treee : ", JSON.stringify(tree));
  return tree;
};
