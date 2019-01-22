adminApp.service('Map', function ($q) {

    this.init = function () {
        var options = {
            center: new google.maps.LatLng(12.9715987, 77.59456269999998),
            zoom: 12,
            disableDefaultUI: true
        }
        this.map = new google.maps.Map(
            document.getElementById("map"), options
        );
        this.places = new google.maps.places.PlacesService(this.map);
    }

    this.search = function (str) {
        var d = $q.defer();
        this.places.textSearch({
            query: str
        }, function (results, status) {
            if (status == 'OK') {
                d.resolve(results[0]);
            } else d.reject(status);
        });
        return d.promise;
    }

    this.addMarker = function (res) {
        if (this.marker) this.marker.setMap(null);
        this.marker = new google.maps.Marker({
            map: this.map,
            position: res.geometry.location,
            animation: google.maps.Animation.DROP
        });
        this.map.setCenter(res.geometry.location);
    }

});

adminApp.controller('newPlaceCtrl', function ($scope, Map) {

    $scope.place = {};

    $scope.search = function () {
        $scope.apiError = false;
        Map.search($scope.searchPlace)
            .then(
                function (res) { // success
                    Map.addMarker(res);
                    $scope.place.companyName = res.name;
                    $scope.place.address = res.formatted_address;
                    $scope.place.latitude = res.geometry.location.lat();
                    $scope.place.longitute = res.geometry.location.lng();
                },
                function (status) { // error
                    $scope.apiError = true;
                    $scope.apiStatus = status;
                }
                
            );
    }

    $scope.send = function () {
        // alert($scope.place.name + ' : ' + $scope.place.latitude + ', ' + $scope.place.longitute);
    }

    Map.init();
});