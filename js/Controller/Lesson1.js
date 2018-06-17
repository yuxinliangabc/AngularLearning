/**
 * Created by yuxinliang on 2018/5/14 0014.
 */
angular.module("Lesson1",[])
.controller('NameController',
function($scope){
    $scope.Author = {};
    $scope.Author.Age = 0;
   $scope.Author.Name = "yxl";

    $scope.ResetAge= function () {
        $scope.Author.Age = 0;
    }
})
.controller('FatherController',
function($scope){
    $scope.person={greeted:false};
})
.controller('ChildController',
function($scope){
    $scope.SayHello=function(){
        $scope.person.name="Arena"
    }
})