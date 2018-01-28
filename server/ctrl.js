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

	app.use(express.static("C:\\Users\\Kartikeya\\Desktop\\shoppingCart\\client"));
}

exports.mobileData = function(req,res){
	

	fs.readFile("./mock.json",function(err,data){
 	var d = JSON.parse(data);
	
 	res.json(d);
 })
}

exports.laptopData = function(req,res){
	
	fs.readFile("./mock.json",function(err,data){
		var d = JSON.parse(data);
	
 		res.json(d);
	})

};

exports.allData = function(req,res){

	fs.readFile("./mock.json",function(err,data){
		var d = JSON.parse(data);
	
 		res.json(d);
	})
}
exports.postMethod = function(req,res){


	//var urlData=url.parse(req.url,true);
	//console.log(urlData);
	console.log(req.body);
};
