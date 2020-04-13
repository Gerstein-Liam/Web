/*
var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('demofile1.html', function (err, data) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(data);
    res.end();
  });
}).listen(8080);
*/
function LoadHTML(req, res, filepath) {
  fs.readFile(filepath, function (err, data) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(data);
    res.end();
  });
}



var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  if (req.method === "GET") {
    console.log("GetMethod");
    if (req.url === ("/")) {
      LoadHTML(req, res, 'demofile1.html');
    }
    else {
      if (req.url === ("/other")) {
        LoadHTML(req, res, 'otherfile.html');
      }
    }
  }
}).listen(8080);