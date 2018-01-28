angular.module('myApp').controller('detail_ctrl',function($scope,$http,$state,serv){
	$scope.indexData=serv.getIndex();
	console.log(serv.getIndex())
	$scope.obj=serv.getData();
	$scope.detailProduct = $scope.obj[$scope.indexData];
});