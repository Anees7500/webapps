rtApp.controller('RetailController', ['$scope', '$rootScope', '$route', '$http', 'GetRetailMenuUrl','ngDialog',
    function ($scope, $rootScope, $route, $http, GetRetailMenuUrl,ngDialog) {

		// var unflatten = function(array, parent, tree) {
		//   // console.log("array ",JSON.stringify(array));
		//   // console.log("parent ",JSON.stringify(parent));
		//   // console.log("tree",JSON.stringify(tree));
		//
		//   console.log("=========================================");
		//     tree = typeof tree !== 'undefined' ? tree : [];
		//     parent = typeof parent !== 'undefined' ? parent : {
		//         id: null
		//     };
		//     var children = _.filter(array, function(child) {
		//       // console.log("child : ", JSON.stringify(child));
		//         child.isInserted = true;
		//         // console.log("child.menuNodes,child.menuType",child.menuNodes,child.menuType);
		//         if(child.menuNodes ==null)
		//         {
		//           child.menuNodes = [];
		//         }
		//         if(child.menuType != null)
		//         {
		//           if(child.menuType === "veg")
		//           {
		//             child.isVeg = true;
		//             // console.log("isVeg");
		//           }
		//           else if(child.menuType === "egg")
		//           {
		//             child.isEgg = true;
		//             // console.log("isegg");
		//           }
		//         }
		//         return child.parentId == parent.id;
		//     });
		//
		//     console.log("child ren : ", JSON.stringify(children));
		//
		//     if (!_.isEmpty(children)) {
		//         console.log("parent.id ",parent.id);
		//         if (parent.id == 0 || parent.id == null) {
		//                   tree = children;
		//         } else {
		//             parent['menuNodes'] = children
		//         }
		//         _.each(children, function(child) {
		//             unflatten(array, child)
		//         });
		//     }
		//     return tree;
		// };


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

		$http.get(GetRetailMenuUrl).then(function (response) {
			console.log(JSON.stringify(response.data.data.menus));
			$scope.menuNode = unflatten(response.data.data.menus);
			console.log("test", $scope.menuNode);

		});
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
              ngDialog.open({ template: 'sections/retailCompany/cart.html', className: 'ngdialog-theme-default' });
          };
	}]);
