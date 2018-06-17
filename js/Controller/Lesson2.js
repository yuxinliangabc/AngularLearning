/**
 * Created by yuxin on 2018/5/15 0015.
 */

//module 2
angular.module('Lesson2', [])
    .controller('MyController21',
        function ($scope, $parse) {
            $scope.count = 0;
            //此方法能够对结果进行计算，并输出例如输入model为2 输出为model的倍数。
            $scope.$watch('expr', function (newV, oldV) {
                //$scope.parseValue =  parseFun(param);
                $scope.parseValue = 2* newV;
            });
        })
    .controller('MyController22',
        function ($scope, $parse) {
            $scope.User = {
                name:'David',
                age:0
            };

            var context = {
                name: "dreamapple"
            };
            var expression = "'Hello ' + name";
            var parseFunc = $parse(expression);
            $scope.ParsedValue = parseFunc(context);

            var expression2 = "'Hello ' + name + ',age: '+ age";
            var expression3 = "'Your old age is'+ age";
            var parseFunc2 = $parse(expression2);
            var parseFunc3 = $parse(expression3);

            $scope.$watch('age',function(newV,oldV){
                var usertmp = $scope.User;
                usertmp.age = newV;
                $scope.ParsedValue2 = parseFunc2(usertmp);

                if(undefined == oldV){
                    usertmp.age = 0;
                }
                else{
                    usertmp.age = oldV;
                }
                $scope.ParsedValue3 = parseFunc3(usertmp);
            })


        });
