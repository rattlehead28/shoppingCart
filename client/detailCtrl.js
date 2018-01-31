angular.module('myApp').controller('detail_ctrl',function($scope,$http,$state,serv){
	if(serv.getCart()){
	$scope.cart=serv.getCart();
	}
	else{
		$scope.cart=[];
	}
	$scope.indexData=serv.getIndex();
	console.log(serv.getIndex())
	$scope.obj=serv.getData();
	$scope.detailProduct = $scope.obj[$scope.indexData];
	console.log($scope.detailProduct)

	$scope.add=function(){
    	console.log($scope.indexData)
    	console.log($scope.detailProduct)
    	$scope.cart.push($scope.detailProduct);
     	serv.setCart($scope.cart);
     	alert("Added to cart");
     	$state.go('view');
     	
};
});