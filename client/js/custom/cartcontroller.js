myApp.controller('mycart', function($scope, cart, images, api, $timeout) {

    $(document).ready(function() {
        $('[data-toggle="tooltip"]').tooltip();

    });

    if (cart.getcart().length) {
        $scope.show = true
        $scope.itemsincart = cart.getcart()
    } else {

        $scope.slides = images.getslides()
        $scope.phones = images.getphones()
        $scope.images = images.getimages();
        $scope.breakpoints = images.getbreakpoints()
        $scope.show = false

    }

    $scope.plus = function(data) {
        data.items[2] = parseInt(data.items[2]) + 1
    }

    $scope.minus = function(data) {
        if (data.items[2] > 1) {
            data.items[2] = parseInt(data.items[2]) - 1
        } else {
            $scope.deleteitem = data.items
            callalert()
        }
    }

    var callalert = function() {
        $scope.message = "Do you want to Delete this Item from the Cart?"
        $('#myModal').modal('show');
    }

    $scope.removeitem = function() {
        if ($scope.flag) {
            $scope.itemsincart = []
            cart.emptycart()
            api.flushcart()
            sessionStorage.setItem("cart", "")
            $scope.show = false
            $scope.flag = 0
        } else {
            let index = ($scope.itemsincart.indexOf($scope.deleteitem))
            $scope.itemsincart.splice(index, 1)
            cart.updatecart($scope.itemsincart)
        }
    }

    $scope.flush = function() {
        $scope.message = "Do you want to empty the cart?"
        var res = $('#myModal').modal('show')
        $scope.flag = 1
    }

    $scope.save = function() {
        api.saveusercart($scope.itemsincart)
    }

})