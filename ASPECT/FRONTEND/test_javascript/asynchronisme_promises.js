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