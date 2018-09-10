rtApp.controller('RetailController', ['$scope', '$rootScope', '$route', '$http', 'GetRetailMenuUrl', 'ngDialog', '$routeParams', 'retailCompanyService',
    function ($scope, $rootScope, $route, $http, GetRetailMenuUrl, ngDialog, $routeParams, retailCompanyService) {

		// read companyName from path parameter
		var compName = $routeParams.companyName;

		console.log("company Name : ", compName);

		var companyDetail;

		retailCompanyService.getCompanyDetail(compName).then(function (resp) {
			companyDetail = resp.data.data.company;

			console.log("dtls ", companyDetail);
		});;

		console.log("dtls 2 ", companyDetail);


		$http.get(GetRetailMenuUrl).then(function (response) {
			console.log(JSON.stringify(response.data.data.menus));
			$scope.menuNode = unflatten(response.data.data.menus);
			console.log("test", $scope.menuNode);
		});

		$scope.cartItems = [
			{
				itemId: 21,
				itemName: "Item number 1",
				price: 200,
				quantity: 3
      },
			{
				itemId: 22,
				itemName: "Item number 2",
				price: 300,
				quantity: 5
      },
			{
				itemId: 23,
				itemName: "Item number 3",
				price: 500,
				quantity: 1
      }

    ];
		console.log("Inside retail controller: ");
		$(document).ready(function () {
			$('.count').prop('disabled', true);
			$(document).on('click', '.plus', function () {
				$('.count').val(parseInt($('.count').val()) + 1);
			});
			$(document).on('click', '.minus', function () {
				$('.count').val(parseInt($('.count').val()) - 1);
				if ($('.count').val() == 0) {
					$('.count').val(1);
				}
			});
		});

		$scope.clickToOpen = function () {
			ngDialog.open({
				template: 'sections/retailCompany/cart.html',
				className: 'ngdialog-theme-default'
			});
		};
	}]);

var unflatten = function (array, parent, tree) {
	// //console.log("value passed here : ",array);
	tree = typeof tree !== 'undefined' ? tree : [];
	parent = typeof parent !== 'undefined' ? parent : {
		uid: null
	};
	// console.log("tree type : ",tree);
	console.log("parent type : ", parent);
	var children = _.filter(array, function (child) {
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
	console.log("chilren value : ", children.length);
	if (!_.isEmpty(children)) {
		if (parent.id == 0 || parent.id == null) {
			console.log("parent.id ", parent.id);
			// //console.log("Children value after first check : ",JSON.stringify(children));
			// children.isInserted = true;
			// //console.log("Children value after Enhancement : ",JSON.stringify(children));
			tree = children;
		} else {
			parent['menuNode'] = children
		}
		_.each(children, function (child) {
			unflatten(array, child)
		});
	}
	console.log("treee : ", JSON.stringify(tree));
	return tree;
};
