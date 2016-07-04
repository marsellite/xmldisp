
var cvt = require("./test")

var fs = require("fs");

var parser = new cvt();

fs.readFile(__dirname + '/adder.xml', function(err, data) {
    parser.parseString(data, function (err, result) {    
        console.log( JSON.stringify(result, null, 2));                                                       
    });                                                  
}); 
