myApp.controller('redeem',function($scope,cart,images){

 	$scope.slides = images.getslides()
 	$scope.data = {}
 	$scope.qtn = "1"

    $scope.modal = function(data) {
        $scope.data.url = data.url
        $scope.data.price = data.price
        $scope.data.discounted = data.discounted
        $scope.data.name = data.name
        $scope.data.details = data.details
        $scope.data.productid = data.productid
        $scope.redeempointsrequired = "300"
    }

    $scope.add_redeem = function(data){
        cart.additem([data.name, data.productid, $scope.qtn, data.url, data.price, data.discounted])		
		cart.updateuserloyaltypoints(-300)
    }


})