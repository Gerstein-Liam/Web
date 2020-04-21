//https://www.grafikart.fr/tutoriels/promise-async-await-875
function AjaxGet_WithPromises(url) {
    return new Promise(function (resolve, reject) {
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
    document.getElementById("FirstJson").innerHTML = success_reponse;
}
function a__OnSuccess_SecondJSON(success_reponse) {
    var obj = JSON.parse(success_reponse);
    console.log("On Success callback");
    console.table(obj);
    document.getElementById("SecondJson").innerHTML = success_reponse;
}
var ajax = AjaxGet_WithPromises;
var On_SuccessCallback_1 = a__OnSuccess_FirstJSON;
var On_SuccessCallback_2 = a__OnSuccess_SecondJSON;
///////////////////////////////////////////////////////////
var getJSONs = async function () {
    // Plutot que d'utilise le then on peut attendre la résolution
    let rep1= await ajax('https://jsonplaceholder.typicode.com/users');
    let rep2= await ajax('https://jsonplaceholder.typicode.com/posts');
    // Return permettra le resolve de la promesse
    var reps= [rep1,rep2]
    return reps
    // Un throw permettra de reject la promesse
  }
  function Bt_PromisesAsyncAwait(){
    getJSONs().then(reponses => {
        On_SuccessCallback_1 (reponses[0]);
        On_SuccessCallback_2 (reponses[1]);
    }
        ).catch(error =>{console.log(`A XHR Failed : ${error}`) })

    
    console.log("Still Running after inititing ajax");
}

/*  
function Bt_PromisesAsyncAwait(){
    getJSONs().then(reponses => {
        On_SuccessCallback_1 (reponses[0]);
        On_SuccessCallback_2 (reponses[1]);
    }
        ).catch(error =>{console.log(error) })

    
    console.log("Still Running after inititing ajax");
}
*/
function Bt_PromisesAllTest(){
}
function Bt_PromisesTest() {
    ajax("https://jsonplaceholder.typicode.com/users")
        .then(function (resolve_response_1) {
            On_SuccessCallback_1(resolve_response_1);
            return ajax("https://jsonplaceholder.typicode.com/posts");
        })
        .then(function (resolve_response_2) {
            On_SuccessCallback_2(resolve_response_2);
        })
        .catch(function (reject_respect) {
            console.log("One of the request faildes");
        })
    console.log("Still Running after inititing ajax");
}
/*    Second Step
function AjaxGet_WithPromises(url) {
    return new Promise(function (resolve, reject) {
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
    document.getElementById("FirstJson").innerHTML = success_reponse;
}
function a__OnSuccess_SecondJSON(success_reponse) {
    var obj = JSON.parse(success_reponse);
    console.log("On Success callback");
    console.table(obj);
    document.getElementById("SecondJson").innerHTML = success_reponse;
}
function Bt_PromisesTest() {
    var ajax = AjaxGet_WithPromises;
    var On_SuccessCallback_1 = a__OnSuccess_FirstJSON;
    var On_SuccessCallback_2 = a__OnSuccess_SecondJSON;
    ajax("https://jsonplaceholder.typicode.com/users").then(function (resolve_response_1) {
        On_SuccessCallback_1(resolve_response_1);
        ajax("https://jsonplaceholder.typicode.com/posts").then(function (resolve_response_2) {
            On_SuccessCallback_2(resolve_response_2);
        }
        ).catch(function (reject_response_2) { console.log("Unsolved 2"); })
    }
    ).catch(function (reject_response_1) {
        console.log("Unsolved 1");
    });
    console.log("Still Running after inititing ajax");
}
*/
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