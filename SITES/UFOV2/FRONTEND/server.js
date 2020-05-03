var http = require('http');
var data_api_service = require("./node_server/service_layer/data_api_service");
var webcontentservice = require("./node_server/service_layer/webcontent_service");
//
console.log("SERVER CONTROLLER: Build Index");
webcontentservice._s_BuildIndex("index_desktop_seed.html", "index_desktop.html");
//
http.createServer(async function (req, res) {
  webcontentservice._s_BuildIndex("index_desktop_seed.html", "index_desktop.html");
  switch (req.method) {
    case "GET":
      console.log("SERVER CONTROLLER: GET Request");
      webcontentservice._s_WebContentRequest(req, res);
      break;
    case "POST": console.log("Post Method");
      if (req.url.includes("DB_REQUEST")) {
        console.log("SERVER CONTROLLER: POST api request");
        var http_resp;
        try {
          console.log("AWAIT CONTROLLER");
          http_resp = await data_api_service._s_dataAPI(req);
          console.log("AFTER AWAIT CONTROLLER");
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.write(http_resp);
          res.end();
        }
        catch (err) {
          res.writeHead(400, { 'Content-Type': 'text/html' });
          res.write(err);
          res.end();
        }
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write("Something wrong");
        res.end();
      }
      break;
    default: break;
  }
}).listen(8080);
