myApp.controller('offers', function($scope, cart, images, api ) {
    $scope.data = {}
    $scope.qtn = "1"

    $scope.slides = images.getslides()

    $scope.phones = images.getphones()

    $scope.images = images.getimages();

    $scope.breakpoints = images.getbreakpoints()

    $scope.modal = function(data) {
        $scope.data.url = data.url
        $scope.data.price = data.price
        $scope.data.discounted = data.discounted
        $scope.data.name = data.name
        $scope.data.details = data.details
        $scope.data.productid = data.productid
    }

    $scope.add = function(data) {
        console.log(data)
        cart.additem([data.name, data.productid, $scope.qtn, data.url, data.price, data.discounted])
        cart.updateuserloyaltypoints(data.discounted*.1)
        cart.getcart()
    }

})