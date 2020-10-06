var express = require('express');
var http = require('http');
var fs = require('fs');
var url = require('url');
const querystring = require('querystring');

var app = express();

var server = http.createServer(app)

app.get('/', function(req, res) {
    res.send('<h1>Root Page</h1>')
});

app.get('/age', function(req, res) {
    var path = url.parse(req.url).pathname
    var qs = url.parse(req.url, true).query  // since true is given the query will be parsed automativally result= { index: 1}
    // var q = url.parse(req.url).query  // if true is not given the q will be a string result:  "index=1"
    // var qry = querystring.parse(qs); // parsing string query obtained on var q to convert in to object result: { index: 1}
   
    fs.readFile('./data.json', function (err, data) {
        if (err) {
            res.send("error occuried on reading");
            return;
        }
        var reqData = JSON.parse(data.toString())[path.slice(1)][qs.index][qs.name];
        res.send(qs.name + reqData);
    })
});

server.listen(3000, function () {
    console.log('Server listening to port 3000');
});