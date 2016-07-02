var xml2js = require("xml2js");
var fs = require("fs");

var parser = new xml2js.Parser();

fs.readFile(__dirname + '/adder.xml', function(err, data) {
    parser.parseString(data, function (err, result) {    
        console.log( JSON.stringify(result, null, 2));                                                       
    });                                                  
}); 
