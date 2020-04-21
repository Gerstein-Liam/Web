
function AjaxGet_WithPromises(url) {
    return new Promise(function(resolve, reject){
        var req = new XMLHttpRequest();
        req.open('GET', url, true)
        req.onreadystatechange = function () {
            if (req.readyState == 4) {
                if (req.status == 200) {
                    resolve(this.responseText);
                }
                else {
                    reject(req.status);
                }
            }
        };
        req.send(null);
    }
    )
//console.log(`function executed   ${url}`);
}


function a__OnSuccess_FirstJSON(success_reponse) {
    var obj = JSON.parse(success_reponse);
    console.log("On Success callback");
    console.table(obj);
    document.getElementById("FirstJson").innerHTML=success_reponse;
}
function a__OnSuccess_SecondJSON(success_reponse) {
    var obj = JSON.parse(success_reponse);
    console.log("On Success callback");
    console.table(obj);
    document.getElementById("SecondJson").innerHTML=success_reponse;
}

function Bt_PromisesTest(){


var ajax = AjaxGet_WithPromises;
var On_SuccessCallback_1 = a__OnSuccess_FirstJSON;
var On_SuccessCallback_2 = a__OnSuccess_SecondJSON;
ajax("https://jsonplaceholder.typicode.com/users").then(function (resolve_response){On_SuccessCallback_1(resolve_response);}).catch(function (reject_response){console.log("Unsolved");});
console.log("Still Running after inititing ajax");
}




/*          Promise second step
function AjaxGet_WithPromises(url) {
    return new Promise(function(resolve, reject){
        var req = new XMLHttpRequest();
        req.open('GET', url, true)
        req.onreadystatechange = function () {
            if (req.readyState == 4) {
                if (req.status == 200) {
                    resolve(this.responseText);
                }
                else {
                    reject(req.status);
                }
            }
        };
        req.send(null);
    }
    )
//console.log(`function executed   ${url}`);
}


function a__OnSuccess_FirstJSON(success_reponse) {
    var obj = JSON.parse(success_reponse);
    console.log("On Success callback");
    console.table(obj);
    document.getElementById("FirstJson").innerHTML=success_reponse;
}
function a__OnSuccess_SecondJSON(success_reponse) {
    var obj = JSON.parse(success_reponse);
    console.log("On Success callback");
    console.table(obj);
    document.getElementById("SecondJson").innerHTML=success_reponse;
}

function Bt_PromisesTest(){


var ajax = AjaxGet_WithPromises;
var On_SuccessCallback_1 = a__OnSuccess_FirstJSON;
var On_SuccessCallback_2 = a__OnSuccess_SecondJSON;
ajax("https://jsonplaceholder.typicode.com/users").then(function (resolve_response){On_SuccessCallback_1(resolve_response);}).catch(function (reject_response){console.log("Unsolved");});
console.log("Still Running after inititing ajax");
}


*/

/*          Promise first step

function AjaxGet_WithPromises(url) {
        return new Promise(function(resolve, reject){
            var req = new XMLHttpRequest();
            req.open('GET', url, true)
            req.onreadystatechange = function () {
                if (req.readyState == 4) {
                    if (req.status == 200) {
                        resolve(this.responseText);
                    }
                    else {
                        reject(req.status);
                    }
                }
            };
            req.send(null);
        }
        )
    //console.log(`function executed   ${url}`);
}
function Bt_PromisesTest(){
AjaxGet_WithPromises("https://jsonplaceholder.typicode.com/users").then(function (resolve_response){console.log("Resolved");}).catch(function (reject_response){console.log("Unsolved");});
console.log("Running Beginning");
}

*/