AddPersonModal= new Modal("AddPersonModal");
//https://www.w3schools.com/js/js_objects.asp
function RequestAPI_PostMethod(id, url ,parameters) {
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
            console.log(this.responseText);
            document.getElementById(id).innerHTML = this.responseText;
        }
    };
    xmlhttp.open("POST", url, true);
    xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xmlhttp.send(parameters);
}
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
}