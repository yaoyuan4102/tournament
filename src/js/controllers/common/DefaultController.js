/**
 * Created by chenzhen on 16/1/15.
 */

angular.module('indigo').controller('DefaultController', function($scope, $timeout){

    $scope.$watch('$viewContentLoaded', function() {
        $timeout(function() {
            $('#index').removeClass('onload');
        }, 100);
    });

})