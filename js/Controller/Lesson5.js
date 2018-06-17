/**
 * Created by yuxinliang on 2018/5/14 0014.
 */
angular.module("Lesson5",[])
    .controller('MyController51',
        function($scope){
            $scope.submitted = false;
            $scope.signupForm = function(){
                if($scope.signup_form.$valid){
                    //正常提交
                }else{
                    $scope.signup_form.submitted = true;
                }
            }
        }
    )
    .directive('ensureUnique',function($http){
        return{
            require:'ngModel',
            link:function(scope,ele,attrs,c){
                scope.$watch(attrs.ngModel,function(n){
                    if(!n) return;
                    $http({
                        method:'POST',
                        url: 'api/check'+attrs.ensureUnique,
                        data:{
                            field:attrs.ensureUnique,
                            value:scope.ngModel
                        }
                    }).success(function(data){
                        c.$setValidity('unique',data.isUnique);
                    }).error(function(data){
                        c.$setValidity('unique',false);
                    })                    ;
                });
            }
        };
    })
    .directive('ngFocus',[function(){
        var FOCUS_CLASS = "ng-focused";
        return{
            restrict:'A',
            require:'ngModel',
            link:function(scope,element,attrs,ctrl){
                ctrl.$focused = false;
                element.bind('focus',function(evt){
                    element.addClass(FOCUS_CLASS);
                    scope.$apply(function(){
                        ctrl.$focused = true;
                    });
                }).bind('blur',function(evt){
                    element.removeClass(FOCUS_CLASS);
                    scope.$apply(function(){
                        ctrl.$focused = false;
                    });
                });
            }
        }
    }])
;
