//exports.htmlqueries = { BuildHTMLFromTemplate,HTML_Query, JSLIB_Query, CSS_Query, Image_Query };
exports._m_BuildHTML=BuildHTMLFromTemplate;
exports._m_HTMLContent=HTML_Query;
exports._m_JSContent=JSLIB_Query;
exports._m_CSSContent=CSS_Query;
exports._m_MediaContent=Image_Query;


var _HTMLBUILDER= require("../modules/HTMLBuilder");
var fs = require('fs');


function BuildHTMLFromTemplate(str_seed,str_dest){
    console.log("----WEBCONTENT DATAMODEL: BuildIndex");
    _HTMLBUILDER.HTMLBuild(str_seed,str_dest);
}

function HTML_Query(req, res, filepath) {
  console.log("----WEBCONTENT DATAMODEL: Request HTML Ressource");
  fs.readFile(filepath, function (err, data) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(data);
    res.end();
  });
}

function JSLIB_Query(req, res, filepath) {
  console.log("----WEBCONTENT DATAMODEL: Request JAVASCRIPT Ressource");
  fs.readFile(filepath, function (err, data) {
    if (err) {
      console.log("ErrorOccured");
    }
    else {
      res.writeHead(200, { 'Content-Type': 'text/javascript' });
      res.write(data);
      res.end();
    }
  });
}

function CSS_Query(req, res, filepath) {
  console.log("----WEBCONTENT DATAMODEL: Request CSS Ressource");
  fs.readFile(filepath, function (err, data) {
    if (err) {
      console.log("ErrorOccured");
    }
    else {
      res.writeHead(200, { 'Content-Type': 'text/css' });
      res.write(data);
      res.end();
    }
  });
}

function Image_Query(req, res, filepath) {
  console.log("----WEBCONTENT DATAMODEL: Request MEDIA Ressource");
  var content_type;
  if (req.url.includes(".svg") || req.url.includes(".jpg")) {
    if (req.url.includes(".svg")) {
      console.log("----Request for svg");
      content_type = 'image/svg+xml';
    }
    else {
      if (req.url.includes(".jpg")) {
        console.log("----Request for jpg");
        content_type = 'image/jpeg';
      }
    }
    fs.readFile(filepath, function (err, data) {
      if (err) {
        console.log("----ErrorOccured: " + err);
      }
      else {
        res.writeHead(200, { 'Content-Type': content_type });
        res.write(data);
        res.end();
      }
    });
  }
}