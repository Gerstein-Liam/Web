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
    str=data.toString();
    


    console.log(str);
    
  

    console.log(str.includes("w3-include-html"));
    res.write(data);
    res.end();
  });
}
function LoadJS(req, res, filepath) {
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
var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  console.log(req.url.substring(1));
  if (req.method === "GET") {
    //console.log("GetMethod");
    if (req.url === ("/")) {
      console.log("LoadIndex");
      LoadHTML(req, res, 'index.html');
    }
    else {
      if (req.url === ("/i_from_index.html")) {
        console.log("IncFromIndex");
        LoadHTML(req, res, 'i_from_index.html');
      }
      else
      {
        
        
        if (req.url === ("/i_from_include.html")) {
          console.log("IncFromInclude");
          LoadHTML(req, res, req.url.substring(1));
        }
        else
        {
         // console.log("IncFromInclude");
         // console.log("Look for ClientJS");
          LoadJS(req, res, req.url.substring(1));
        
        
        }
        
       
      
      
      
      
      }
    }
  }
}).listen(8081);