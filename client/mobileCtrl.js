angular.module('myApp').controller('mobile_ctrl',function($scope,$http,$state,serv){
	
	// if(serv.getData()){
	// $scope.cart=serv.getData();
	// }
	// else{
	// 	$scope.cart=[];
	// }
	
 //    	 serv.fetchData().then(function(response){
 //    $scope.products = response.data;
 //    $scope.mobile=$scope.products.mobiles;
 //    serv.setData($scope.mobile);
 //    console.log($scope.mobile);
 //  });
  
    $http.get('/mobiles').then(function(response){
        $scope.products=response.data;
        
        $scope.mobile=$scope.products.mobiles;
        serv.setData($scope.mobile);

    })
    // $scope.add=function(index){
    	
    // 	$scope.cart.push($scope.mobile[index]);
    // 	serv.setData($scope.cart);
    // 	console.log($scope.cart[0]);
    	
    // }

    $scope.detailsRedirect=function(index){
    	serv.setIndex(index);
    	
    	$state.go("detailView");
    	
    }
});