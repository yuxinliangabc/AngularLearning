

angular.module("Lesson9",[])
    .run(function ($rootScope, $timeout) {

    })
    .controller('MyController91',
        function($scope){
            $scope.myProperty = "Property in Controller91;"
        })
    .controller('MyController92',
        function($scope){
            $scope.myProperty = "Property in Controller92;"
        })

    .directive('myDirective2', function() {
        return {
            restrict: 'A',
            scope: true,
            priority: 100,
            template: '<div>Inside myDirective2 {{ myProperty }}</div>'
        };
    })

    .directive('myDirective3', function() {
        return {
            restrict: 'A',
            scope: false,
            priority: 100,
            template: '<div>Inside myDirective3 {{ myProperty }}</div>'
        };
    })
    .directive('myDirective4', function() {
        return {
            restrict: 'A',
            template: 'Inside myDirective4, isolate scope: {{ myProperty }}',
            scope: {}
        };
    })

    .directive('scopeExample',function(){
        return{
            restrict:'A',
            replace:true ,
            template:
            '<div>'+
            '<p>email to:{{ngModel}}</p>>' +
            '<button ng-click = onSend>Send</button>' +
            '<p>from:{{fromName}}</p>'+
            '</div>',

            scope: {
                ngModel: '=', // 将ngModel同指定对象绑定
                onSend: '&', // 将引用传递给这个方法
                fromName: '@' // 储存与fromName相关联的字符串
            }
        }
    })

    .controller('MyController93',
        function($scope){
            var sendMail = function(){
                alert("jalkjsdlkfj");
            }
    })

    .directive ( 'sidebox' , function () {
        return {
            restrict: 'EA' ,
            scope: {
                title: '@'
            } ,
            transclude: true ,
            template: '<div style="background-color: aqua">\
            <div class="content">\
            <h2 class="header">{{ title }}</h2>\
            <span class="content" ng-transclude>\
            </span>\
            </div>\
            </div>'
        };
    } )

    //通过指令添加标签
    .directive('link', function() {
        return {
            restrict: 'EA',
            transclude: true,
            controller:
                function($scope, $element, $transclude, $log) {
                    $transclude(function(clone) {
                        var a = angular.element('<a>');
                        a.attr('href', clone.text());
                        a.text(clone.text());
                        $log.info("Created new a tag in link directive");
                        $element.append(a);
                    });
                }
        };
    });