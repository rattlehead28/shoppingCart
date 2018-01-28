angular.module('myApp').service('serv',function($http,$q){

	this.fetchData=function(){
		var products;
		var defer=$q.defer();
	var request = {
                method: 'get',
                url: 'db.json',
                dataType: 'json',
                contentType: "application/json"
            };
    $http(request).then(function (jsonData){
    	//console.log(jsonData);
    	defer.resolve(jsonData);
    	
    });
    	return defer.promise;
    
   }
	
	this.setData=function(d) {
		
		this.data=d;
	}

	this.getData=function(){

		return this.data;
	}

	this.setIndex=function(i){
		 this.index=i;
	}

	this.getIndex=function() {
		return this.index;
	}
})