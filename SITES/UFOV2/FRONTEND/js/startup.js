function  includeHTML()  {
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
 function myMove() {
 

 
  var elem = document.getElementById("page-grids-organisation");   
   var pos = 0;
   var id = setInterval(frame, 40);
   function frame() {
     if (pos == 100) {
       clearInterval(id);
       alert("Hello press F11 to improve experience");
     } else {
       pos++; 
       let cmd=(100-pos)+'% '+ (pos)  +'% ';
       elem.style.gridTemplateRows= cmd   ;
       console.log(cmd);
     }
   }

   
 }
 function Startup() {
   // includeHTML() ;
  //  myMove();

  
  }
