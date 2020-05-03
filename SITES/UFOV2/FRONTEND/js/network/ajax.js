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
function BuildPersonTable(json){
    var result = "";
    var table = document.getElementById("table-persons");
    var ligne;
    var i=0;
    for(const person of json){
        var ligne = document.createElement("tr");
        ligne.setAttribute('onmousedown', 'PersonRightClickModal.CF_OpenModal(event,this.id)');
        ligne.setAttribute('id', `${i}`);
        var _lastname = document.createElement("td");
        _lastname.setAttribute("class", "_lastname");
        _lastname.innerHTML = person.Lastname;
        var _firstname = document.createElement("td");
        _firstname.setAttribute("class", "_firstname");
        _firstname.innerHTML = person.Firstname;
        var _fonction = document.createElement("td");
        _fonction.setAttribute("class", "_fonction");
        _fonction.innerHTML = person.Fonction;
        var _domain = document.createElement("td");
        _domain.setAttribute("class", "_domain");
        _domain.innerHTML = person.Domain;
        var _country = document.createElement("td");
        _country.setAttribute("class", "_country");
        _country.innerHTML = person.Country;
        var _implication = document.createElement("td");
        _implication.setAttribute("class", "_implication");
        _implication.innerHTML = person.Implication;
        var _position = document.createElement("td");
        _position.setAttribute("class", "_position");
        _position.innerHTML = person.Position;
        ligne.appendChild(_lastname);
        ligne.appendChild(_firstname);
        ligne.appendChild(_fonction);
        ligne.appendChild(_domain);
        ligne.appendChild(_country);
        ligne.appendChild(_implication);
        ligne.appendChild(_position);
        ligne.cloneNode();
        console.log(person.Firstname + person.Name);
        result += person.Firstname + " " + person.Name;
        table.appendChild(ligne);
        i++;
    }
}
var _BuildPersonTable=BuildPersonTable;
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


var post_para = {
    COMMAND: "LOAD PERSON-LIST"
  }

 


GetPersonData_And_BuildTable= new AjaxPostJSON( "DB_REQUEST",post_para,_BuildPersonTable, function (err){  alert(err);} );
//()=> {alert("AjaxError")}