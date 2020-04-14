var http = require('http');
var htmlBuilder= require("./custom_node_modules/htmlBuilder");
var hq= require("./custom_node_modules/html_queries");
var capi= require("./custom_node_modules/api_request");
htmlBuilder.HTMLBuild("index_seed.html");     //On crée le fichier HTML generé en debut d'execution (bloquand)
http.createServer(function (req, res) {
  htmlBuilder.HTMLBuild("index_seed.html");   //On refresh tout le contenu HTML, comme ca tu peux developper le HTML,CSS,Javascript coté client,  sans redemarrer le serveur
  console.log(req.url.substring(1));
  if (req.method === "GET") {
    if (req.url.includes("API")) {
      console.log("Client request console api");
      capi.apirequest(req, res);        //C'est dans cette fonction (module api_request) que tu va executer du code sur la console et renvoye la reponse
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
        }
        else
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
