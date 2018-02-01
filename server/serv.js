var obj=require('./model/mongoose.js');
var Q = require('q');
exports.fetchData=function(req,res){
	var defer = Q.defer();
	obj.findOne({},function(err,data){
		defer.resolve(data);
	})

		return defer.promise;
}




