//http://dummy.restapiexample.com/
function AjaxGet(url, onsuccess, onfailed) {
    //console.log(`function executed   ${url}`);
    var req = new XMLHttpRequest()
    req.open('GET', url, true)
    req.onreadystatechange = function () {
        if (req.readyState == 4) {
            if (req.status == 200) {
                onsuccess(this.responseText);
            }
            else {
                onfailed(req.status)
            }
        }
    };
    req.send(null)
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
function Bt(){
var ajax = AjaxGet;
var On_SuccessCallback_1 = a__OnSuccess_FirstJSON;
var On_SuccessCallback_2 = a__OnSuccess_SecondJSON;
ajax('https://jsonplaceholder.typicode.com/users', function (success_rep_1) {
    On_SuccessCallback_1(success_rep_1);
    ajax('https://jsonplaceholder.typicode.com/posts', function (success_rep_2) { On_SuccessCallback_2(success_rep_2); }, 
    
    function (failed_rep_2) {
        console.log(failed_rep_2);
    });
}, function (failed_rep_1) {
    console.log(failed_rep_1);
});
console.log("Running");
}
/*               Dev state=2
//http://dummy.restapiexample.com/
function AjaxGet(url, onsuccess, onfailed) {
    //console.log(`function executed   ${url}`);
    var req = new XMLHttpRequest()
    req.open('GET', url, true)
    req.onreadystatechange = function () {
        if (req.readyState == 4) {
            if (req.status == 200) {
                onsuccess(this.responseText);
            }
            else {
                onfailed(req.status)
            }
        }
    };
    req.send(null)
}
function a__OnSuccess(success_reponse) {
    var obj = JSON.parse(success_reponse);
    console.log("On Success callback");
    console.table(obj);
}
console.log("Run");
var ajax = AjaxGet;
var On_SuccessCallback = a__OnSuccess;
ajax('https://jsonplaceholder.typicode.com/users', function (success_rep) {
    a__OnSuccess(success_rep);
    ajax('https://jsonplaceholder.typicode.com/posts', function (success_rep) { a__OnSuccess(success_rep); }, function (failed_rep) {
        console.log(failed_rep);
    })
}, function (failed_rep) {
    console.log(failed_rep);
});
*/
/*           Dev state=1
//http://dummy.restapiexample.com/
function AjaxGet(url, onsuccess, onfailed) {
    //console.log(`function executed   ${url}`);
    var req = new XMLHttpRequest()
    req.open('GET', url, true)
    req.onreadystatechange = function () {
        if (req.readyState == 4) {
            if (req.status == 200) {
                onsuccess(this.responseText);
            }
            else {
                onfailed(req.status)
            }
        }
    };
    req.send(null)
}
function a__OnSuccess(success_reponse){
    var obj = JSON.parse(success_reponse);
    console.log("On Success callback");
    console.table(obj);
}
console.log("Run");
var ajax = AjaxGet;
var On_SuccessCallback=a__OnSuccess;
ajax('https://jsonplaceholder.typicode.com/users', function(success_rep){a__OnSuccess(success_rep);},
    function (failed_rep) {
    console.log(failed_rep);
    }
);
*/
/*          Dev state=0
//http://dummy.restapiexample.com/
function AjaxGet(url, onsuccess, onfailed) {
    //console.log(`function executed   ${url}`);
    var req = new XMLHttpRequest()
    req.open('GET', url, true)
    req.onreadystatechange = function () {
        if (req.readyState == 4) {
            if (req.status == 200) {
                onsuccess(this.responseText);
            }
            else {
                onfailed(req.status)
            }
        }
    };
    req.send(null)
}
console.log("Run");
var ajax = AjaxGet;
ajax('https://jsonplaceholder.typicode.com/users', function (succ_rep) {
    var obj = JSON.parse(succ_rep);
    console.log("On Success callback");
    console.table(obj);
},
    function (failed_rep) {
    console.log(failed_rep);
    }
);
*/