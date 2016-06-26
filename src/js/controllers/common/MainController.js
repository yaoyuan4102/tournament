/**
 * Created by chenzhen on 15/12/15.
 */
var module = angular.module('indigo');

function MainController($scope,$modal){
    var vm = this;

    vm.init = function(){
        alert('');
    };
    $scope.login = function(){
        $scope.user = true;
        //var myOtherModal = $modal({scope: $scope, template: 'ngviews/home/login_modal.html', show: true, placement:'center', animation: 'am-fade-and-scale'});
        // Show when some event occurs (use $promise property to ensure the template has been loaded)
        //$scope.showModal = function() {
        //    myOtherModal.$promise.then(myOtherModal.show);
        //};
    }

}

//angular.module('indigo').controller('MainController', function($scope){
//    var vm = this;
//
//
//    vm.init = function(){
//        alert('');
//    }
//    $scope.login = function(){
//        $scope.user = true;
//    }
//});


module.controller('MainController', MainController);