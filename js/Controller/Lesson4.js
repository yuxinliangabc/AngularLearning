/**
 * Created by yuxinliang on 2018/5/14 0014.
 */
angular.module("Lesson4",[])
    .controller('MyController41',
        function($scope){
            $scope.Author = {};
            $scope.Author.Age = 0;
            $scope.Author.Name = "yxl";

            $scope.ResetAge= function () {
                $scope.Author.Age = 0;
            };
            $scope.submit = function(){
                if($scope.num > 100){
                    alert("Bingo! Keep Clean");
                }
                if(form.minLength.$dirty){
                    alert("Bingo! Modified");
                }

            }
        })
