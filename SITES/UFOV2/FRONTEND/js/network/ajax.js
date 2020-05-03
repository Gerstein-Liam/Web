function AjaxPOST_XMLHttpRequest_Promises(url, parameters) {
    return new Promise(function(resolve, reject) {
        console.log("requested URL: " + url);
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            console.log(`STATE=${this.readyState}    STATUS=${this.status} `);
            if (this.status != 0 && this.status != 200) {
                reject(this.status);
            } else {
                if (this.readyState == 4) {
                    if (this.status == 200) {
                        resolve(this.responseText);
                    }
                }
            }
        };
        xmlhttp.open("POST", url, true);
        xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xmlhttp.send(parameters);
    })
}

function ExecuteAjaxPostJson(url, postpara) {
    let Url = url;
    let PostPara = postpara;
    if (url === null) {
        Url = this._url;
    }
    if (postpara === null) {
        PostPara = this._postpara;
    }
    var _json = JSON.stringify(PostPara);
    if (window.fetch) {
        console.log("Fetch supported");
        fetch(Url, {
                method: 'post',
                body: _json
            })
            .then(function(response) {
                response.json().then(json_data => {
                   console.log("ON SUCCCESS AJAX");
                    this._OnSuccess(json_data);
                }).catch( err=>{ this._OnError(err)})
            }.bind(this))
            .catch(function(error) {
                this._OnError(ajax_error);
            }.bind(this));
    } else {
        console.log("Fetch not supporteb by browser");
        var update_ajaxpost = AjaxPOST_XMLHttpRequest_Promises;
        update_ajaxpost(Url, _json).then(function(server_response) {
            console.log(server_response)
        }).catch(function(ajax_error) {
            console.log(ajax_error)
        });
    }
}
var _ExecuteAjaxPostJson=ExecuteAjaxPostJson;
function AjaxPostJSON(_url, _postpara, _OnSuccess, _OnError) {
    this._url = _url;
    this._postpara = _postpara;
    this._OnSuccess = _OnSuccess;
    this._OnError = _OnError;
}
AjaxPostJSON.prototype.ExecutePOST =_ExecuteAjaxPostJson;

//()=> {alert("AjaxError")}