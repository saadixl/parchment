var serveStatic = require('serve-static');
var express = require('express');
var app = express();
app.use(express.static(__dirname + '/public'));
app.listen(8800,function(){
    console.log("Parchment server started at port 8800");
});