myApp.controller('payment', function($scope, cart, api) {

    $scope.loc = 'Store 1'
    $scope.flag = false

    if (cart.getcart().length) {
        $scope.flag = true
        $scope.finalcart = cart.getcart()
        $scope.finaluserbonus = cart.getuserloyaltypoints()
        console.log($scope.finaluserbonus)
    }

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            $scope.$apply(function() {
                $scope.position = {
                    "lat": position.coords.latitude,
                    "lng": position.coords.longitude
                };
                $scope.$broadcast('gotlocation')
            });
        });
    }

    $scope.$on('gotlocation', StoreFinder)

    function StoreFinder() {

        $scope.locations = [
            ["Store 1", $scope.position.lat, $scope.position.lng],
            ["Store 2", $scope.position.lat + 0.05, $scope.position.lng + 0.05],
            ["Store 3", $scope.position.lat - 0.05, $scope.position.lng - 0.05],
        ];

        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 10,
            center: new google.maps.LatLng($scope.position.lat, $scope.position.lng),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });

        var infowindow = new google.maps.InfoWindow();

        var marker, i;

        for (i = 0; i < $scope.locations.length; i++) {
            marker = new google.maps.Marker({
                position: new google.maps.LatLng($scope.locations[i][1], $scope.locations[i][2]),
                map: map
            });

            google.maps.event.addListener(marker, 'click', (function(marker, i) {
                return function() {
                    $scope.currentlocation = $scope.locations[i][0]
                    infowindow.setContent($scope.locations[i][0]);
                    infowindow.open(map, marker);
                    $scope.$broadcast('hello')
                }
            })(marker, i));

        }

        $scope.$on('hello', function() {
            $scope.loc = $scope.currentlocation
            $scope.$apply()
        })

        $scope.submit = function() {

            let address = document.getElementById("address").value
            
            api.placeorder([$scope.finalcart, address , $scope.finaluserbonus])
            api.flushcart()
            cart.emptycart()
            sessionStorage.setItem("cart", "")
            $('#ordered').modal('show')
        }

        function loylatybonus() {
            api.getloylatypoints().then(function(data) {
                $scope.loyaltypoints = data
                $scope.bonus = $scope.loyaltypoints * 1000
            })
        }

        $scope.share = function() {

            FB.ui({
                method: 'share',
                mobile_iframe: true,
                href: 'https://developers.facebook.com/docs/',
            }, function(response) {
                console.log(response)
                if(response!=undefined){
                    cart.updateuserloyaltypoints(10)
                }
            });
        }

    loylatybonus()

}
})