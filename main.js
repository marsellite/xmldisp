var express = require("express");
var app = express();
app.use(express.static('app/public'));
app.use(express.static('app/js'));
app.listen("8080")
