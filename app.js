var app = angular.module('odessa', []);

    app.controller("someController", function($scope, uiGmapGoogleMapApi) {
    // Do stuff with your $scope.
    // Note: Some of the directives require at least something to be defined originally!
    // e.g. $scope.markers = []

    // uiGmapGoogleMapApi is a promise.
    // The "then" callback function provides the google.maps object.
    uiGmapGoogleMapApi.then(function(maps) {

    });
});

app.config(function(uiGmapGoogleMapApi) {
    uiGmapGoogleMapApi.configure({
        key: 'AIzaSyAc0iRgrOXhejzd_egRp8wDGM5H1re6psQ',
        v: '3.20', //defaults to latest 3.X anyhow
        libraries: 'weather,geometry,visualization'
    });
});