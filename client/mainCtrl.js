angular.module('myApp').controller('mainCtrl',function($scope,$http){

	$scope.postData = function(){			

		$http.get('./mock.json').then(function(response){
				
				$scope.prod = response.data;
				console.log(response.data);
		       $http({
		           method : "POST",
		           url : "http://localhost:3000/postData",
		           data: response.data 
		       }).then(function mySuccess(resp) {
		           console.log(resp.data);
		           }, function myError(err) {
		       });			
	});
}

	
});