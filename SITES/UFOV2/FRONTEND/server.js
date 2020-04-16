var http = require('http');
var url = require('url');
var htmlBuilder= require("./custom_node_modules/htmlBuilder");
var hq= require("./custom_node_modules/html_queries");
var capi= require("./custom_node_modules/api_request");

htmlBuilder.HTMLBuild("index_seed.html");     //On crée le fichier HTML generé en debut d'execution (bloquand)




















http.createServer(function (req, res) {
  htmlBuilder.HTMLBuild("index_seed.html");   //On refresh tout le contenu HTML, comme ca tu peux developper le HTML,CSS,Javascript coté client,  sans redemarrer le serveur
 // console.log(req.url.substring(1));
  if (req.method === "GET") {
    if (req.url.includes("API")) {
      console.log("Client request console api");
      capi.apirequest(req, res);        //C'est dans cette fonction (module api_request) que tu va executer du code sur la console et renvoye la reponse
    }else
    {
      if (req.url === ("/")){
        console.log("request of index.html :  URL=" +  req.url.substring(1));
        hq.htmlqueries.HTML_Query(req, res, 'index.html');
      }
      else
      {
        if (req.url.includes(".html")) {
          console.log("Client request for HTML document,other than index.html :  URL=" +  req.url.substring(1));
        }
        else
        {
          if (req.url.includes(".js")) {
            console.log("Client request for JAVASCRIPT document : URL="+  req.url.substring(1));
            hq.htmlqueries.JSLIB_Query(req, res, req.url.substring(1));
            
          }else
          {
            if (req.url.includes(".css")) {
              console.log("Client request for CSS document   :  URL=" +  req.url.substring(1));
              hq.htmlqueries.CSS_Query(req, res, req.url.substring(1));
             
            }else
            {
              console.log("Client request for other (Image,etc) ,TO DO :  URL=" +  req.url.substring(1));
              hq.htmlqueries.Image_Query(req, res, req.url.substring(1));
            }
          }
        }
      }
    }
  }
}).listen(8081);
