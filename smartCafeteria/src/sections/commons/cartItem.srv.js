empApp.service('CartService', function () {

    

    this.addToCart = function (itemObj) {

        if (this.cartItems == null) {
            this.cartItems = {};
        }
        if (this.cartItems[itemObj.id] != null) {
            this.cartItems[itemObj.id].count = this.cartItems[itemObj.id].count + 1;
        } else {
            this.cartItems[itemObj.id] = {
                obj: itemObj,
                count: 1
            };
        }
        this.cartItems[itemObj.id].addedInCart = true;
        this.cartItems[itemObj.id].amount = getAmount(this.cartItems[itemObj.id]);
        this.cartItems.totalAmount = getTotalAmount(this.cartItems);
        console.log("cart items : ", JSON.stringify(this.cartItems));

        return this;
    }

    this.addCount = function (val) {
        // console.log("val passed : ", JSON.stringify(val));
        this.cartItems[val.obj.id].count = this.cartItems[val.obj.id].count + 1;
        this.cartItems[val.obj.id].amount = getAmount(this.cartItems[val.obj.id]);
        this.cartItems.totalAmount = getTotalAmount(this.cartItems);
        // console.log(" cart itmes : ", JSON.stringify(this.cartItems));
        return this;
    }

    this.reduceCount = function (val) {
        if (this.cartItems[val.obj.id].count > 0) {
            if (this.cartItems[val.obj.id].count == 1) {
                delete this.cartItems[val.obj.id];
            }
            else {
                this.cartItems[val.obj.id].count = this.cartItems[val.obj.id].count - 1;
                this.cartItems[val.obj.id].amount = getAmount(this.cartItems[val.obj.id]);
            }
            this.cartItems.totalAmount = getTotalAmount(this.cartItems);
            //   console.log(" cart itmes : ", JSON.stringify(this.cartItems));
        }

        return this;
    }

    this.getCartItemSize = function()
    {
        return getCartItemSize(this.cartItems);
    }
    this.getCartObj = function () {
        return this;
    }

    var getAmount = function (obj) {
        return (obj.count * obj.obj.price);
    }

    var getTotalAmount = function (obj) {
        if (getCartItemSize(obj) == 0) {
            return null;
        }
        var amt = 0;
        angular.forEach(obj, function (val, key) {
            if (val != null) {
                if (val.amount != null) {
                    amt = amt + val.amount;
                }
            }
        });
        return amt;
    }

    var getCartItemSize = function (obj) {
        // debugger;
        // var tempObj = obj;
        var len = 0;
        if(obj != null)
        {
            if (obj.totalAmount != null) {
                len = Object.keys(obj).length - 1;
            }
            else{
                len = Object.keys(obj).length;
            }
        }
        return len;
    }

    return this;
});