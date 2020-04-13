function LoadHTMLBlock(id, url) {
   
    console.log("requested URL: "+ url);
    if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    } else {
        // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById(id).innerHTML = this.responseText;
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}



// Permet de décomposer le site en plusieurs fichier lorsqu qu^'il n 'y pas de serveur
function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /*loop through a collection of all HTML elements:*/
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
       elmnt = z[i];
       /*search for elements with a certain atrribute:*/
       file = elmnt.getAttribute("w3-include-html");
       if (file) {
          /*make an HTTP request using the attribute value as the file name:*/
          xhttp = new XMLHttpRequest();
          xhttp.onreadystatechange = function () {
             if (this.readyState == 4) {
                if (this.status == 200) { elmnt.innerHTML = this.responseText; }
                if (this.status == 404) { elmnt.innerHTML = "Page not found."; }
                /*remove the attribute, and call this function once more:*/
                elmnt.removeAttribute("w3-include-html");
                elmnt.style.Set
                includeHTML();
             }
          }
          xhttp.open("GET", file, true);
          xhttp.send();
          /*exit the function:*/
          return;
       }
    }
 }
 