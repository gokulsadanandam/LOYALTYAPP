myApp.controller('profile', function($scope, $http , profile , cart , api , bonus ) {
    $scope.flag = false
    $scope.userimagesrc = "/uploads/" +  profile.data[0]

    $scope.loyaltyid = profile.data[1]
    $scope.email = profile.data[2]
    $scope.name = profile.data[3] + profile.data[4]
    $scope.contact = profile.data[5]
    $scope.time = profile.data[6]
    $scope.wishlist = cart.getcart()

     $('.counter').counterUp({
                delay: 10,
                time: 1000
            });

    $scope.userpoints = bonus.data
    cart.userloyaltypoints(bonus.data)

    api.userorders().then(function(data) {
                $scope.orders = data.data
                
            })


    $scope.upload = function() {

        var formdata = new FormData();
        formdata.append('file', $scope.test);
        $http.post('/test', formdata, {
            transformRequest: angular.identity,
            headers: {
                'Content-Type': undefined
            }
        }).then(function(response) {
            $scope.flag = true
        })
    }
})

