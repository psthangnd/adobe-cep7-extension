var fs = require('fs');
var Client = require('node-rest-client').Client;
 
var client = new Client();
 

// set content-type header and data as json in args parameter 
var args = {
    //data: { trm: "abc" },
	parameters: { trm: "abc", srchtyp: 1 },
    headers: { "Content-Type": "application/xml" }
};

// call direct API 
client.post("http://amanaimages.com/webtools/corporate/search.aspx", args, function (data, response) {
	//save data into xml file
	fs.writeFile("search-data.xml", data, function(err) {
		if(err) {
			return console.log(err);
		}
		console.log("The file was saved!");
	}); 
	
});