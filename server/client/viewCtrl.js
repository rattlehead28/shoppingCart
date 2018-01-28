angular.module('myApp').controller('view_ctrl',function($scope,serv){

	$scope.obj = serv.getData();
	console.log($scope.obj)

})