////////////////////////////////////////
var ajaxpost = AjaxPOST_XMLHttpRequest_Promises;
/*
function AddPerson() {
    let lastname = document.getElementById("lastname").value;
    let firstname = document.getElementById("firstname").value;
    let fonction = document.getElementById("fonction").value;
    let domain = document.getElementById("domain").value;
    let country = document.getElementById("country").value;
    let implication = document.getElementById("implication").value;
    let position = document.getElementById("position").value;
    var paras = `command=addperson&LASTNAME=${lastname}&FIRSTNAME=${firstname}&FONCTION=${fonction}&DOMAIN=${domain}&COUNTRY=${country}&IMPLICATION=${implication}&POSITION=${position}`;
    console.log(`LASTNAME= ${lastname}  FIRSTNAME=${firstname}  FONCTION= ${fonction} `);
    console.log(`DOMAIN= ${domain}  COUNTRY=${country}  IMPLICATION= ${implication}  POSITION ${position} `);
    ajaxpost("/API", paras)
        .then(function(response) {
            console.log("Promise reponse");
            erasetable();
            InitTable();
            document.getElementById("save_status").innerHTML = response;
        })
        .catch(function(error) {
            console.log("Promise error");
            document.getElementById("save_status").innerHTML = error;
        });
}
*/


/*
function InitTable() {
    var post_para = {
      COMMAND: "LOAD PERSON-LIST"
    }
    var _json = JSON.stringify(post_para);
    console.log(_json);
    if (window.fetch) {
      console.log("Fetch supported");
      fetch("/JSON_A", {
        method: 'post',
        body: _json})
          .then(function (server_response ) {
                server_response.json().then( json_data =>{
                    console.log(json_data);
                    var result = "";
                    var table = document.getElementById("table-persons");
                    var ligne;

                    var i=0;
                    
                    for(const person of json_data){


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
                )
          })
          .catch(function (ajax_error) {
          });
    } 
    else {
      console.log("Fetch not supporteb by browser");
      var update_ajaxpost = AjaxPOST_XMLHttpRequest_Promises;
      update_ajaxpost("/JSON_A", _json).then(function (server_response) { 
        var obj = JSON.parse(server_response);
        console.log(obj);
    }).catch(function (ajax_error) { console.log(ajax_error) });
    }
  }


  */
function erasetable() {
    let table = document.getElementById("table-persons");
    let i;
    let l = table.children.length;
    for (i = 0; i < (l - 1); i++) {
        table.lastChild.remove();
    }
}
