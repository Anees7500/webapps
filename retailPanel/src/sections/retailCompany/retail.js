// var shoppingCart =(function(){
//     myModal = [];
// })
// // Constructor
// function Item(menuName, price, count) {
//   this.menuName = name;
//     this.price = price;
//   this.count = count;
// }

// // Save cart
// function

//     t() {
//     sessionStorage.setItem('shoppingCart', JSON.stringify(myModal));
// }
// // Load cart
// function loadCart() {
//     myModal = JSON.parse(sessionStorage.getItem('shoppingCart'));
// }
// if (sessionStorage.getItem("shoppingCart") != null) {
//     loadCart();
// }
// // Public methods and propeties
// var obj = {};

// // Add to cart
// obj.addItemToCart = function (menuName, price, count) {
//     for (var item in myModal) {
//         if (myModal[item].menuName === name) {
//             myModal[item].count++;


//             t();
//             return;
//         }
//     }
//     var item = new Item(menuName, price, count);
//     myModal.push(item);


//     t();
// }
// // Set count from item
// obj.setCountForItem = function (myModal, count) {
//     for (var i in myModal) {
//         if (myModal[i].menuName === name) {
//             myModal[i].count = count;
//             break;
//         }
//     }
// };
// // Remove item from cart
// obj.removeItemFromCart = function (myModal) {
//     for (var item in myModal) {
//         if (myModal[item].menuName === name) {
//             cart[item].count--;
//             if (myModal[item].count === 0) {
//                 myModal.splice(item, 1);
//             }
//             break;
//         }
//     }
//     t();
// }
// // Remove all items from cart
// obj.removeItemFromCartAll = function (name) {
//     for (var item in cart) {
//         if (cart[item].menuName === name) {
//             cart.splice(item, 1);
//             break;
//         }
//     }


//     t();
// }
// // Count cart 
// obj.totalCount = function () {
//     var totalCount = 0;
//     for (var item in myModal) {
//         totalCount += myModal[item].count;
//     }
//     return totalCount;
// }
// // Total cart
// obj.totalCart = function () {
//     var totalCart = 0;
//     for (var item in myModal) {
//         totalCart += myModal[item].price * myModal[item].count;
//     }
//     return Number(totalCart.toFixed(2));
// }
// // List cart
// obj.listCart = function () {
//     var cartCopy = [];
//     for (i in myModal) {
//         item = myModal[i];
//         itemCopy = {};
//         for (p in item) {
//             itemCopy[p] = item[p];

//         }
//         itemCopy.total = Number(item.price * item.count).toFixed(2);
//         cartCopy.push(itemCopy)
//     }
//     return cartCopy;
// }
// t: Function
// // loadCart : Function
// return obj;
// }) 
// ();
// // Add item
// $('.add-to-cart').click(function (event) {
//     event.preventDefault();
//     var myModal = $(this).data('name');
//     var price = Number($(this).data('price'));
//     shoppingCart.addItemToCart(myModal, price, 1);
//     displayCart();
// });
// function displayCart() {
//     var cartArray = shoppingCart.listCart();
//     var output = "";
//     for (var i in cartArray) {
//         output += "<tr>"
//             + "<td>" + cartArray[i].myModal + "</td>"
//             + "<td>(" + cartArray[i].price + ")</td>"
//             + "<td><div class='input-group'><button class='minus-item input-group-addon btn btn-primary' data-name=" + cartArray[i].myModal+ ">-</button>"
//             + "<input type='number' class='item-count form-control' data-name='" + cartArray[i].myModal + "' value='" + cartArray[i].count + "'>"
//             + "<button class='plus-item btn btn-primary input-group-addon' data-name=" + cartArray[i].myModal + ">+</button></div></td>"
//             + "<td><button class='delete-item btn btn-danger' data-name=" + cartArray[i].myModal + ">X</button></td>"
//             + " = "
//             + "<td>" + cartArray[i].total + "</td>"
//             + "</tr>";
//     }
//     $('.show-cart').html(output);
//     $('.total-cart').html(shoppingCart.totalCart());
//     $('.total-count').html(shoppingCart.totalCount());
// }

// // Delete item button

// $('.show-cart').on("click", ".delete-item", function (event) {
//     var name = $(this).data('name')
//     shoppingCart.removeItemFromCartAll(name);
//     displayCart();
// })


// // -1
// $('.show-cart').on("click", ".minus-item", function (event) {
//     var name = $(this).data('name')
//     shoppingCart.removeItemFromCart(name);
//     displayCart();
// })
// // +1
// $('.show-cart').on("click", ".plus-item", function (event) {
//     var myModal = $(this).data('name')
//     shoppingCart.addItemToCart(myModal);
//     displayCart();
// })

// // Item count input
// $('.show-cart').on("change", ".item-count", function (event) {
//     var myModal = $(this).data('name');
//     var count = Number($(this).val());
//     shoppingCart.setCountForItem(myModal, count);
//     displayCart();
// });

// displayCart();