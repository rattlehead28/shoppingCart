var obj = require('./serv.js');
var express = require('express');
var app = express();
var fs = require('fs');
var bodyparser = require("body-parser");
var bd = require('./index.js');
bd.use(bodyparser.json());
// exports.getData =  function(req,res) {
	
// fs.readFile("./mock.json"),function(err,data){
// 	var d = JSON.parse(data);
// 	//console.log(d);
// 	res.json(d);
// }

// };

exports.mainPage = function(req,res){

	app.use(express.static("C:\\Users\\Kartikeya\\Desktop\\sp_2\\shoppingCart\\client"));

}

exports.mobileData = function(req,res){
	

	obj.fetchData().then(function(d){
 		res.json(d);
	});
}

exports.laptopData = function(req,res){
	
	obj.fetchData().then(function(d){
 		res.json(d);
	});

};

exports.allData = function(req,res){

	obj.fetchData().then(function(d){
 		res.json(d);
	});
	


};

exports.postData = function(req,res){
	console.log(req.body);
	obj.collection.insert(req.body,function(err,data){});
	console.log("Data Saved")
}
