AddPersonModal = new Modal("AddPersonModal");
//https://www.w3schools.com/js/js_objects.asp
//https://www.geeksforgeeks.org/remove-all-the-child-elements-of-a-dom-node-in-javascript/
//https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/README.md
//https://javascript.developpez.com/actu/146280/Comprendre-les-Promises-en-JavaScript-TypeScript-article-de-yahiko/
//https://www.pierre-giraud.com/javascript-apprendre-coder-cours/promesse-promise/
//https://www.youtube.com/watch?v=uUZxHkcidps
function RequestAPI_PostMethod(id, url, parameters) {
    console.log("requested URL: " + url);
    if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    } else {
        // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            if (this.status == 200) {
                console.log(this.responseText);
                document.getElementById(id).innerHTML = this.responseText;
                //ReloadPersonTable();
            }
            else {
            }
        }
    };
    xmlhttp.open("POST", url, true);
    xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xmlhttp.send(parameters);
}
function AjaxPOST_WithPromises(url, parameters) {
    return new Promise(function (resolve, reject) {
        console.log("requested URL: " + url);
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function () {
            console.log(`STATE=${this.readyState}    STATUS=${this.status} `);
            if (this.status != 0 && this.status != 200) {
                reject(this.status);
            }
            else {
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
    }
    )
    //console.log(`function executed   ${url}`);
}
var ajaxpost = AjaxPOST_WithPromises;
function AddPerson() {
    let lastname = document.getElementById("lastname").value;
    let firstname = document.getElementById("firstname").value;
    let fonction = document.getElementById("fonction").value;
    let domain = document.getElementById("domain").value;
    let country = document.getElementById("country").value;
    let implication = document.getElementById("implication").value;
    let position = document.getElementById("position").value;
    var paras = `command=addperson&LASTNAME=${lastname}&FIRSTNAME=${firstname}&FONCTION=${fonction}&DOMAIN=${domain}&COUNTRY=${country}&IMPLICATION=${implication}&POSITION=${position} `;
    console.log(`LASTNAME= ${lastname}  FIRSTNAME=${firstname}  FONCTION= ${fonction} `);
    console.log(`DOMAIN= ${domain}  COUNTRY=${country}  IMPLICATION= ${implication}  POSITION ${position} `);
    ajaxpost("/API", paras)
        .then(function (response) {
            console.log("Promise reponse");
            document.getElementById("save_status").innerHTML = response;
        })
        .catch(function (error) {
            console.log("Promise error");
            document.getElementById("save_status").innerHTML = error;
        });
}
/*
function AddPerson(){
let lastname = document.getElementById("lastname").value;
let firstname = document.getElementById("firstname").value;
let fonction  = document.getElementById("fonction").value;
let domain = document.getElementById("domain").value;
let country = document.getElementById("country").value;
let implication = document.getElementById("implication").value;
let position = document.getElementById("position").value;
var paras = `command=addperson&LASTNAME=${lastname}&FIRSTNAME=${firstname}&FONCTION=${fonction}&DOMAIN=${domain}&COUNTRY=${country}&IMPLICATION=${implication}&POSITION=${position} `;
console.log(`LASTNAME= ${lastname}  FIRSTNAME=${firstname}  FONCTION= ${fonction} `);
console.log(`DOMAIN= ${domain}  COUNTRY=${country}  IMPLICATION= ${implication}  POSITION ${position} `);
RequestAPI_PostMethod("save_status", "/API" ,paras);
}
*/
function RequestAPI_PostMethod_LoadPersonList(url, parameters) {
    console.log("requested URL: " + url);
    if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    } else {
        // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var obj = JSON.parse(this.responseText);
            console.log(obj);
            var result = "";
            var table = document.getElementById("customers");
            var ligne;
            for (let i = 0; i <= (obj.length - 1); i++) {
                var ligne = document.createElement("tr");
                ligne.setAttribute('onmousedown', 'OpenPersonRightClickModal(event)');
                var _firstname = document.createElement("td");
                _firstname.innerHTML = obj[i].Firstname;
                var _lastname = document.createElement("td");
                _lastname.innerHTML = obj[i].Name;
                var _fonction = document.createElement("td");
                _fonction.innerHTML = obj[i].Fonction;
                var _domain = document.createElement("td");
                _domain.innerHTML = obj[i].Domain;
                var _country = document.createElement("td");
                _country.innerHTML = obj[i].Country;
                var _implication = document.createElement("td");
                _implication.innerHTML = obj[i].Implication;
                var _position = document.createElement("td");
                _position.innerHTML = obj[i].Position;
                ligne.appendChild(_firstname);
                ligne.appendChild(_lastname);
                ligne.appendChild(_fonction);
                ligne.appendChild(_domain);
                ligne.appendChild(_country);
                ligne.appendChild(_implication);
                ligne.appendChild(_position);
                console.log(obj[i].Firstname + obj[i].Name);
                result += obj[i].Firstname + " " + obj[i].Name;
                table.appendChild(ligne);
            }
            //  dom.appendChild(table);
            //   console.log(result);
        }
    };
    xmlhttp.open("POST", url, true);
    xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xmlhttp.send(parameters);
}
function ReloadPersonTable() {
    var paras = "command=loadpersonlist";
    RequestAPI_PostMethod_LoadPersonList("/API", paras);
}
/*
function RequestAPI_PostMethod_LoadPersonList(url ,parameters) {
    console.log("requested URL: " + url);
    if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    } else {
        // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var obj = JSON.parse(this.responseText);
            console.log(obj);
            //document.getElementById(id).innerHTML = this.responseText;
        }
    };
    xmlhttp.open("POST", url, true);
    xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xmlhttp.send(parameters);
}*/