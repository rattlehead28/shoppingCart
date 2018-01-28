angular.module('myApp').controller('laptop_ctrl',function($scope,$http,$state,serv){
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
    $scope.laptop=$scope.products.laptops;
    console.log($scope.laptop);
  });
  
    
    $scope.add=function(index){
    	
    	$scope.cart.push($scope.laptop[index]);
    	serv.setData($scope.cart);
    	console.log($scope.cart[0]);
    	
    }

    $scope.cartRedirect=function(){

    	$state.go("view");
    }
});