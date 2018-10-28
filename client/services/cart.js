myApp.service('cart', function() {

    this.cart = new Array
    this.bonuspoint = 0
    this.setcart = function(data) {
        this.cart = data
    }

    this.getcart = function() {
        return this.cart
    }

    this.additem = function(data) {
        var flag = 1
        this.cart.forEach(function(items) {
            if (items["1"] == data["1"]) {
                items["2"] = items["2"] + data["2"]
                flag = 0
            }
        })
        if (flag) {
            this.cart.push(data)
        }
    }

    this.updatecart = function(data) {
        this.cart = []
        this.cart.push(data)
    }

    this.emptycart = function() {
        this.cart = []
    }

    this.usersavedcart = function() {
        let cart = sessionStorage.getItem("cart");
        if(cart){
         cart = cart.split(",")
        let i = 0;
        while ((i < (cart.length)) && (cart.length > 2)) {
            this.cart.push(cart.slice(i, i + 6))
            i = i + 6
        }     
        }
       
    }

    this.userloyaltypoints = function(data){
        this.bonuspoint = data
    }

    this.updateuserloyaltypoints = function(data){
        if(data<0){
        // data = data.split("-")[1]
        data = data * -1
        console.log(this.bonuspoint)
        this.bonuspoint = this.bonuspoint - data
        console.log(this.bonuspoint)

    }else{
        this.bonuspoint = this.bonuspoint + data
    }
    }

    this.getuserloyaltypoints = function(){
        return this.bonuspoint
    }

    this.updateuserloyaltypoints()
    this.usersavedcart()

})