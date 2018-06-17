/**
 * Created by yuxinliang on 2018/5/19 0028.
 */
angular.module("Lesson6",[])
    .controller('MyController61',
        function($scope){

            $scope.submit = function(){
                if($scope.num > 100){
                    alert("Bingo! Keep Clean");
                }
                if(form.minLength.$dirty){
                    alert("Bingo! Modified");
                }
            };
        }
    )
    .directive('myDirective',function(){
        return{
            restrict:'E',
            replace:'true',
            template: '<a href="http://www.baidu.com">Click me to Baidu</a>'
        }
    })
    .directive('myDirective2',function(){
        return{
            restrict:'A',
            replace:'true',
            template: '<a href="http://www.baidu.com">Click me to Baidu</a>'//硬编码模板
        }
    })
    .directive('urlDirect',function(){
        return{
            restrict:'A',
            replace:true,
            scope: {
                myUrl: '@someAttr',//显示绑定策略，将someAttr的属性值绑定到myUrl
                urlDescription: '@'//绑定策略
            },
            template:'<div>' +
                '<input type="text" ng-model="myUrl">'+
                '<a href="{{myUrl}}">{{urlDescription}}</a></div>'
            }
    })
    .directive('myDirective3', function () {
        return {
            restrict: 'A',
            replace: true,
            //scope是指令的作用域，与外部隔离
            scope: {
                myUrl: '=someAttr', // 注意，这里是‘=’而不是‘@’，没有与指令内的someAttr属性做双向绑定
                                        //而是使其等于已经绑定过的someAttr属性值，也就是上一层的‘theirUrl’
                                        //若改为@ 则与外部的theirUrl毫无关联
                myLinkText: '@'
            },
            template: '<div>' +
            '<label>My Url Field:</label>' +
            '<input type="text" ng-model="myUrl" />' +
            '<a href="{{myUrl}}">{{myLinkText}}</a>' +
            '</div>'
        };
    });
