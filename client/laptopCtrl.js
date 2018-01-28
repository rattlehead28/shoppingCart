angular.module('myApp').controller('laptop_ctrl',function($scope,$http,$state,serv){
    
    // if(serv.getData()){
    // $scope.cart=serv.getData();
    // }
    // else{
    //  $scope.cart=[];
    // }
    
 //      serv.fetchData().then(function(response){
 //    $scope.products = response.data;
 //    $scope.mobile=$scope.products.mobiles;
 //    serv.setData($scope.mobile);
 //    console.log($scope.mobile);
 //  });
  
    $http.get('/laptops').then(function(response){
        $scope.products=response.data;
        
        $scope.laptop=$scope.products.laptops;
        serv.setData($scope.laptop);

    })
    // $scope.add=function(index){
        
    //  $scope.cart.push($scope.mobile[index]);
    //  serv.setData($scope.cart);
    //  console.log($scope.cart[0]);
        
    // }

    $scope.detailsRedirect=function(index){
        serv.setIndex(index);
        
        $state.go("detailView");
        
    }
});