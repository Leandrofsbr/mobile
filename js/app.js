angular.module('ionicApp', ['ionic'])

.controller('Messages', function($scope, $ionicScrollDelegate) {

    $scope.buttonImage = "../img/buttonMic.png";


    $scope.click = function () {
        $scope.buttonImage = "../img/buttonMicRecording.png";
    }


});