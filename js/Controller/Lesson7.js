/**
 * Created by yuxinliang on 2018/5/14 0014.
 */
angular.module("Lesson7",[])
    .run(function ($rootScope, $timeout) {
            $rootScope.isDisabled = true;
            $timeout(function(){
                    $rootScope.isDisabled = false;
            },5000);
            $timeout(function() {
                    $rootScope.myHref = 'http://www.baidu.com';
            }, 2000);
            $timeout(function() {
                    $rootScope.imgSrc = 'http://www.reader8.cn/uploadfile/jiaocheng/2014/011434/2014011402342720322.png';
            }, 5000);
    })
    .controller('MyController71',
        function($scope){
            $scope.$watch('isChecked',function(n){
                if(n === false){
                    alert("No value Found!!");
                }

            })

        })

    .controller('Lesson7a',
        function($scope){
            $scope.sV = {
                someValue : "hello Computer"
            };
            $scope.someValue="hello Engineer";
            $scope.pAction = function(){
                $scope.sV.someValue = "This is From Parent";
                $scope.someValue="hello Engineer,from Parent";
            }
        })

    .controller('Lesson7b',
        function($scope){
            $scope.cAction = function(){
                $scope.sV.someValue = "This is From Child";
                $scope.someValue="hello Engineer,from Child";
            }
        });