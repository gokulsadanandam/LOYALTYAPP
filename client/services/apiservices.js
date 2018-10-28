myApp.service('api', function($http) {

    this.getusercart = function() {

        $http({
            method: 'GET',
            url: '/api/usercart',
        }).then(function(data) {
            return data
        })

    }

    this.saveusercart = function(data) {

        $http({
            method: 'POST',
            url: '/api/usercart',
            data: data
        }).then(function(response) {
            console.log(response)
        })

    }

    this.flushcart = function() {

        $http({
            method: 'DELETE',
            url: '/api/usercart'
        })
    }

    this.placeorder = function(data) {

        $http({
            method: 'POST',
            url: '/api/order',
            data: data
        })

    }

    this.getloylatypoints = function() {
        return $http({
            method: 'GET',
            url: '/api/loyalty'
        }).then(function(data) {
            return data.data
        })
    }

    this.getuserimagepath = function(){

        return $http({
            method:'GET',
            url:'/api/userimage'
        }).then(function(data){
                return data
        })

    }

    this.userorders = function(){

        return $http({
            method:'GET',
            url:'/api/userorders'
        }).then(function(data){
            return data
        })


    }

    this.getusercurrentbonus = function(){

         return $http({
            method:'GET',
            url:'/api/userbonus'
        }).then(function(data){
                return data
        })

    }



})