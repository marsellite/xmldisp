var xml2js = require("xml2js");

var parser = new xml2js.Parser();
var convertXml2Json = parser.parseString;

module.exports = convertXml2Json ;
