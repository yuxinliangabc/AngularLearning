/**
 * Created by yuxin on 2018/5/30 0030.
 */

angular.module("Lesson8",[])
    .run(function ($rootScope, $timeout) {

    })
    .controller('MyController81',
        function($scope,$timeout){
            $scope.people=[
                {name:'于鑫亮',city:'天津'},
                {name:'张三',city:'北京'},
                {name:'赵四',city:'黑龙江'},
                {name:'于鑫亮',city:'天津'},
                {name:'张三',city:'北京'},
                {name:'赵四',city:'黑龙江'},
            ];

            $scope.greeting = "";
            var initSth = function(){
                $timeout(function(){
                    $scope.greeting = "Hello there";
                },2000);

            };
            initSth();

            var initSth2 = function(){
                setTimeout(function(){
                    $scope.greeting = "Hello Moto"
                    alert("Moto!");
                },2000)
            };
        }
    )

    .controller('CityController',
        function($scope){
            $scope.cities=[
                {name:'天津'},
                {name:'北京'},
                {name:'上海'},
                {name:'深圳'}
            ]
        }
    )

