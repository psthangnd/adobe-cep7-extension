var express = require('express');
var fs = require('fs');
var app = express();

//localhost:2101/amanaimages.com/data
app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	next();      
});
app.get('/amanaimages.com/data', function(req, res){
	if (typeof (encoding) == 'undefined'){
        encoding = 'utf-8';
    }
	var file = fs.readFileSync('search-data.xml', encoding);
	//console.log(file);
	
	res.header('Content-Type', 'text/xml').send(file);
});

app.listen(2101);