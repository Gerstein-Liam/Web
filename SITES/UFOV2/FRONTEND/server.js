//npm install querystring
var http = require('http');
var querystring = require('querystring');
var url = require('url');
var htmlBuilder = require("./custom_node_modules/htmlBuilder");
var hq = require("./custom_node_modules/html_queries");
var capi = require("./custom_node_modules/api_request");
htmlBuilder.HTMLBuild("index_desktop_seed.html","index_desktop.html");  
http.createServer(function (req, res) {
  htmlBuilder.HTMLBuild("index_desktop_seed.html","index_desktop.html");  
  // console.log(req.url.substring(1));
  switch(req.method){
    case "GET": console.log("Get Method");
                if (req.url.includes("API")) {
                  capi.apirequest.API_Query_Get(req, res);       
                } else {
                  WebApplication__GetRequests(req,res);
                }
    break;
    case "POST": console.log("Post Method");
                if (req.url.includes("API")) {
                  capi.apirequest.API_Query_Post(req, res);       
                } else {
                  res.writeHead(200, { 'Content-Type': 'text/html' });
                  res.write("Something wrong");
                  res.end();
                }
                 break;
    default: break;
  }
}).listen(8080);
function WebApplication__GetRequests(req,res){
  if (req.url === ("/")) {
    //  console.log("request of index.html :  URL=" + req.url.substring(1));
      if (req.headers['user-agent'].includes("Windows NT")) {
        console.log("request of index.html :  URL=" +  req.url.substring(1));
        hq.htmlqueries.HTML_Query(req, res, 'index_desktop.html');
        console.log("Windows desktop");
      }
      else {
        if (req.headers['user-agent'].includes("Android")) {
          hq.htmlqueries.HTML_Query(req, res, 'index_mobile.html');
          console.log("Android device");
        }
      }
    }
    else {
      if (req.url.includes(".html")) {
      }
      else {
        if (req.url.includes(".js")) {
          hq.htmlqueries.JSLIB_Query(req, res, req.url.substring(1));
        } else {
          if (req.url.includes(".css")) {
            hq.htmlqueries.CSS_Query(req, res, req.url.substring(1));
          } else {
            hq.htmlqueries.Image_Query(req, res, req.url.substring(1));
          }
        }
      }
    }
}