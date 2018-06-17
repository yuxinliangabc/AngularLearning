/**
 * Created by yuxin on 2018/5/15 0015.
 */

angular.module('Lesson3', [])
    .controller('MyController31', function ($scope) {
        $scope.format = 'yyyy-MM-dd';
        $scope.$watch('time', function (time) {
            //if(angular.isDate(time) && angular.isString($scope.format)){
            var dd = new Date(time);
            var year = dd.getFullYear();
            $scope.timeResult = year;//$filter('date')(time,$scope.format);
            //}
        });
        //过滤器函数，年份是否超过2k
        $scope.YearMore2k = function (time) {
            var dd = new Date(time);
            return dd.getFullYear() > 2000;
        }
    })

    .filter("ChDateFilter",function(){
        return function(input){
            var dd = new Date(input);
            var year = dd.getFullYear();
            var month = dd.getMonth() + 1;
            var day = dd.getDate();
            return year+"年"+month+"月"+day+"日";
        }
    });
