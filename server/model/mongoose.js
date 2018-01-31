var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/shoppingCart');
var db = mongoose.connection;
db.on('connected',function(){
	console.log("connected to MongoDb");
})
var Schema = mongoose.Schema;

var productDetails = new Schema({

	
	mobiles: [{
			id:  Number,
			name: String,
			description: String,
			image: String,
			price: String,
			details: String
		}],

	laptops: [{
			id: Number,
			name: String,
			description: String,
			image: String,
			price: String,
			details: String
		}]
	

});

var product = mongoose.model('product',productDetails);

module.exports = product;
			
		