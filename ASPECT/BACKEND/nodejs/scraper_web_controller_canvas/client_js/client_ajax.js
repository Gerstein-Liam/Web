function RequestAPI_GetMethod(id, url) {
    var cmd = document.getElementById("command").value;
    var apirequest = url + "?command=" + cmd;
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

        
            document.getElementById("ConsoleReponse").innerHTML = this.responseText;
        }
    };
    xmlhttp.open("GET", apirequest, true);
    xmlhttp.send();
}



function RequestAPI_PostMethod(id, url) {
    var cmd = document.getElementById("command").value;
    var apirequest = "command=" + cmd;
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

        
            document.getElementById("ConsoleReponse").innerHTML = this.responseText;
        }
    };
    xmlhttp.open("POST", url, true);
    xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xmlhttp.send(apirequest);
}
