exports._s_BuildIndex=s_BuildHTMLFromTemplate;
exports._s_WebContentRequest=WebApplication__GetRequests;
var webcontent_model = require("../data_access_layer/webcontent_data");
function s_BuildHTMLFromTemplate(str_seed,str_dest){
    console.log("--WEBCONTENT SERVICE: BuildIndex");
    webcontent_model._m_BuildHTML(str_seed,str_dest);
}
function WebApplication__GetRequests(req, res) {
    console.log("--WEBCONTENT SERVICE: Content request");
    if (req.url === ("/")) {
      if (req.headers['user-agent'].includes("Windows NT")) {
        webcontent_model._m_HTMLContent(req, res, 'index_desktop.html');
      }
      else {
        if (req.headers['user-agent'].includes("Android")) {
          webcontent_model._m_HTMLContent(req, res, 'index_mobile.html');
        }
      }
    }
    else {
      if (req.url.includes(".html")) {
      }
      else {
        if (req.url.includes(".js")) {
          webcontent_model._m_JSContent(req, res, req.url.substring(1));
        } else {
          if (req.url.includes(".css")) {
            webcontent_model._m_CSSContent(req, res, req.url.substring(1));
          } else {
            webcontent_model._m_MediaContent(req, res, req.url.substring(1));
          }
        }
      }
    }
  }
