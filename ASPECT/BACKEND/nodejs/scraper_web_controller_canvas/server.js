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
                  capi.apirequest(req, res);       
                } else {
                  WebApplication__GetRequests(req,res);
                }
    break;
    case "POST": console.log("Post Method");
                WebApplication__PostRequests(req,res);
    break;
    default: break;
  }
}).listen(8080);

function WebApplication__PostRequests(req,res){
  //https://nodejs.dev/making-http-requests-with-nodejs
  let body = '';
        // very important to handle errors
        req.on('error', (err) => {
            if(err) {
                response.writeHead(500, {'Content-Type': 'text/html'});
                response.write('An error occurred');
                response.end();
            }
        });
        // read chunks of POST data
        req.on('data', chunk => {
            body += chunk.toString();
        });
        // when complete POST data is received
        req.on('end', () => {
            // use parse() method
            body = querystring.parse(body);
            // { name: 'John', gender: 'MALE', email: 'john@gmail.com' }
            console.log(body);
            console.log(body.command);
            // rest of the code
        });
}
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
        //console.log("Client request for HTML document,other than index.html :  URL=" + req.url.substring(1));
      }
      else {
        if (req.url.includes(".js")) {
       //   console.log("Client request for JAVASCRIPT document : URL=" + req.url.substring(1));
          hq.htmlqueries.JSLIB_Query(req, res, req.url.substring(1));
        } else {
          if (req.url.includes(".css")) {
          //  console.log("Client request for CSS document   :  URL=" + req.url.substring(1));
            hq.htmlqueries.CSS_Query(req, res, req.url.substring(1));
          } else {
           // console.log("Client request for other (Image,etc) ,TO DO :  URL=" + req.url.substring(1));
            hq.htmlqueries.Image_Query(req, res, req.url.substring(1));
          }
        }
      }
    }
}