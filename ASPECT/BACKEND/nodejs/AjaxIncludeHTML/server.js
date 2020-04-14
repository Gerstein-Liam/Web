var htmlBuilder= require("./custom_node_modules/htmlBuilder");
var hq= require("./custom_node_modules/html_queries");
var capi= require("./custom_node_modules/api_request");


htmlBuilder.HTMLBuild("index_seed.html");

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

      capi.apirequest(req, res); 
    }else
    {
      if (req.url === ("/")){
        console.log("LoadIndex");
        hq.htmlqueries.HTML_Query(req, res, 'index.html');
      }
      else
      {
        if (req.url.includes(".html")) {
          console.log("Client request for HTML document");
        }else
        {
          if (req.url.includes(".js")) {
            hq.htmlqueries.JSLIB_Query(req, res, req.url.substring(1));
            console.log("Client request for JAVASCRIPT document");
          }else
          {
            if (req.url.includes(".css")) {
              hq.htmlqueries.CSS_Query(req, res, req.url.substring(1));
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
