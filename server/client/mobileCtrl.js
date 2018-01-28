angular.module('myApp').controller('mobile_ctrl',function($scope,$http,$state,serv){
	//$scope.products=[];
	if(serv.getData()){
	$scope.cart=serv.getData();
	}
	else{
		$scope.cart=[];
	}
	//var request = {
      //          method: 'get',
        //        url: 'db.json',
          //      dataType: 'json',
            //    contentType: "application/json"
            //};
    //$http(request).then(function (jsonData){
    	//console.log(jsonData);
    //	$scope.products=jsonData.data;
    //	console.log($scope.products);

    	 serv.fetchData().then(function(response){
    $scope.products = response.data;
    $scope.mobile=$scope.products.mobiles;
    serv.setData($scope.mobile);
    console.log($scope.mobile);
  });
  
    
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