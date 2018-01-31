angular.module('myApp').controller('all_ctrl',function($scope,$http,$state,serv){
	$scope.allItems=[];
    $scope.obj={};
	 $http.get('/all').then(function(response){
        $scope.allproducts=response.data;
        console.log($scope.allproducts)
        angular.forEach($scope.allproducts,function(value,key){
        	$scope.allItems.push(value);
        })
       console.log($scope.allItems)
        //serv.setData($scope.mobile);

    })


    $scope.detailsRedirect=function(x,i){
        serv.setIndex(i);
        serv.setData(x);
        console.log(x)
        $state.go("detailView");
        
    }
});