var htmlBuilder= require("./custom_node_modules/htmlBuilder");
htmlBuilder.HTMLBuild("index_seed.html");
function HTML_Query(req, res, filepath) {
  fs.readFile(filepath, function (err, data) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(data);
    res.end();
  });
}
function JSLIB_Query(req, res, filepath) {
 //fs.readFile('client_ajax.js', function (err, data) {
  fs.readFile(filepath, function (err, data) {
   if(err){
    console.log("ErrorOccured");
    }
    else
    {
      res.writeHead(200, { 'Content-Type': 'text/javascript' });
      res.write(data);
      res.end();
    }
  });
}
function CSS_Query(req, res, filepath) {
  //fs.readFile('client_ajax.js', function (err, data) {
   fs.readFile(filepath, function (err, data) {
    if(err){
     console.log("ErrorOccured");
     }
     else
     {
       res.writeHead(200, { 'Content-Type': 'text/css' });
       res.write(data);
       res.end();
     }
   });
 }
 function API_Query(req, res) {
       console.log("CALL TO API");
       res.writeHead(200, { 'Content-Type': 'text' });
       res.write("Your API Request : ");
       res.write(req.url);
       res.end();
 }
var http = require('http');
var fs = require('fs');
const { Console } = require("console");
http.createServer(function (req, res) {
  //To permit refresh
  htmlBuilder.HTMLBuild("index_seed.html");
  console.log(req.url.substring(1));
  if (req.method === "GET") {
    //console.log("GetMethod");
    if (req.url.includes("API")) {
        API_Query(req, res); 
    }else
    {
      if (req.url === ("/")){
        console.log("LoadIndex");
        HTML_Query(req, res, 'index.html');
      }
      else
      {
        if (req.url.includes(".html")) {
          console.log("Client request for HTML document");
        }else
        {
          if (req.url.includes(".js")) {
            JSLIB_Query(req, res, req.url.substring(1));
            console.log("Client request for JAVASCRIPT document");
          }else
          {
            if (req.url.includes(".css")) {
              CSS_Query(req, res, req.url.substring(1));
              console.log("Client request for JAVASCRIPT document");
            }else
            {
              console.log("Client request for other (Image,etc)");
            }
          }
        }
      }
    }
  }
}).listen(8080);
