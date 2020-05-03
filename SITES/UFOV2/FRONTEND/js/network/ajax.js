function AjaxPOST_XMLHttpRequest_Promises(url, parameters) {
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
}

