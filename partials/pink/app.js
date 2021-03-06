'use strict';

var app=angular.module('projectWeb',[]);
app.controller('todoCtrl', function($scope){
  $scope.appName="AngularJS TODO APP";
  $scope.todoList=[
   { done : true, title : "AngularJS 독서"},
   { done : false, title : "AngularJS 공부하기"},
   { done : false, title : "개인 프로젝트 구성"}
  ];
  $scope.addNewItem=function(){
    $scope.todoList.push({done:false, title:$scope.newTitle});
    $scope.newTitle="";
  };
  $scope.archive=function(){
    for(var i=$scope.todoList.length-1; i>=0; i--){
      if($scope.todoList[i].done)
      $scope.todoList.splice(i,1);
    }
  };
  $scope.remain=function(){
    var remainCount=0;
    angular.forEach($scope.todoList, function(value, index){
      if(!value.done){
        remainCount++;
      }
    });
    return remainCount;
  };
});

app.controller('menuCtrl',function($scope){
  var item=[
    {itemId: 1, menu:'샌드위치', cost:'2000', count:0},
    {itemId:2, menu:'아메리카노', cost:'1000', count:0},
    {itemId:3, menu:'카푸치노', cost:'1500', count:0},
  ];
  $scope.item=item;
  $scope.totalPrice=0;//없으면 초기값이 없어서 총액에 아무것도 안찍힘
  $scope.buy=function(){
    $scope.totalPrice=0;//초기화를 안해주면 이전값을 가지고있어서 계산할 수록 누적됨
    angular.forEach($scope.item, function(menu, idx){
      $scope.totalPrice=$scope.totalPrice+ (menu.cost*menu.count);
    });
  };
});

app.controller('customer',function($scope){
  var customers=[
    {name:'김수현',age:'29'},
    {name:'유아인',age:'31'},
    {name:'주원',age:'30'}
  ];
  $scope.customers=customers;
  var customObj={
    name:'송중기',
    age:'32',
    job:'배우'
  };
  $scope.customObj=customObj;
  var star=['이동현','우규민','박용택'];
  $scope.star=star;

});
app.controller("customerCtrl",function ($scope){
  var customerList = [{name:"영희", age:10},{name:"철수", age:17},{name:"둘리", age:70}];
  var youngCusterList = [];
  angular.forEach(customerList, function(value, key){
    if(value.age < 18){
      youngCusterList.push(value);
    }
  });

  $scope.customerList = customerList;
  $scope.youngCusterList = youngCusterList;
});
//$addController 또는 $removeController() 선언 위치
// 	}).removeContorller();
app.controller("formValidator",function($scope){
});
app.controller('evtCtrl', function($scope) {
	$scope.appName = '이벤트지시자';
	$scope.mes = '';
	$scope.eventCnt = 0;
	$scope.handleEvt=function(mesage){
		$scope.mes = mesage;
		$scope.eventCnt++
	}
});
app.controller('css_class', function($scope) {
	$scope.bgStyle = {backgroundColor:'red'}
	$scope.changeColor=function(color){
		$scope.bgStyle.backgroundColor=color;
	}
});
