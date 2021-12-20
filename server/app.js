// Implement your web server here

const express = require('express');
var http = require('http');
var data = require('./data/personnel.json');

var server = http.createServer(function (req,res) {
    if(req.url === "/api/personnel") {
        res.writeHead(200, {"Content-Type": "text/json"});
        res.end(JSON.stringify(data));
    }
})



server.listen(8081, function () {
    
    console.log(`App running at http://localhost on port 8081`);
})

