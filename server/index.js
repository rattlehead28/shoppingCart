var express = require('express');
var app = express();
module.exports=app;
app.use(express.static("C:\\Users\\Kartikeya\\Desktop\\shoppingCart\\client"));
app.listen(3000);

require('./usrRouting.js')(app);