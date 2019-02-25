salesApp.service('Map', function ($q) {

    this.init = function () {
        var options = {
            center: new google.maps.LatLng(12.9715987, 77.59456269999998),
            zoom: 12,
            disableDefaultUI: true
        }
        var input = document.getElementById('searchTextField');
        console.log("get input value",input);
        new google.maps.places.Autocomplete(input);

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

salesApp.controller('newPlaceCtrl', function ($scope, Map) {

    $scope.place = {};
    $scope.getCurrentLocation = function () {
        geolocation.getLocation().then(function (data) {
            return {
                lat: data.coords.latitude,
                long: data.coords.longitude
            };
        });
    }
    $scope.search = function () {
        $scope.apiError = false;
        Map.search($scope.searchPlace)
            .then(
                function (res) { // success
                    Map.addMarker(res);
                    console.log("response : ", JSON.stringify(res));
                    $scope.place.name = res.name;
                    $scope.place.address = res.formatted_address;
                    $scope.place.lat = res.geometry.location.lat();
                    $scope.place.lng = res.geometry.location.lng();
                },
                function (status) { // error
                    $scope.apiError = true;
                    $scope.apiStatus = status;
                }
            );
    }

    $scope.send = function () {

    }

    Map.init();
});

function getLocation() {
    if (navigator.geolocation) {

        navigator.geolocation.watchPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported ";
    }
}

function showPosition(position) {

    x.innerHTML = "Latitude: " + position.coords.latitude +
        "<br>Longitude: " + position.coords.longitude;
}