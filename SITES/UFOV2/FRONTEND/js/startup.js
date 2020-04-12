/*
https://www.w3schools.com/js/js_input_examples.asp
*/
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
 function myMove(cmd) {
   var elem = document.getElementById("page-grids-organisation");   
   var pos = 0;
   var id ;
   if(cmd == "show_welcome"){
     // alert("Display welcome");
      id = setInterval(show_welcome, 30);
    }
    else
    {
     // alert("Display app");
      id = setInterval(show_app, 30);
    }
   function show_app() {
     if (pos == 100) {
       clearInterval(id);
      // alert("Hello press F11 to improve experience");
     } else {
         pos++; 
         let row=(100-pos)+'% '+ (pos)  +'% ';
         elem.style.gridTemplateRows= row   ;
         console.log(row);
      }
   }
   function show_welcome() {
      if (pos == 100) {
        clearInterval(id);
     //   alert("Hello press F11 to improve experience");
      } else {
          pos++; 
          let row=(pos)+'% '+ (100-pos)  +'% ';
          elem.style.gridTemplateRows= row   ;
          console.log(row);
       }
    }
 }



/*
 function survey_iframe() {
   console.log(window.frames[0].location);


}
  setInterval(survey_iframe, 40);
*/



var modal;
var btn;
var span;





 function Startup() {
   modal = document.getElementById("myModal");

   // Get the button that opens the modal
  btn = document.getElementById("PersonFilter");
   
   // Get the <span> element that closes the modal
  span = document.getElementsByClassName("close")[0];
   

   // When the user clicks the button, open the modal 
btn.onclick = function() {
   modal.style.display = "block";
 }
 
 // When the user clicks on <span> (x), close the modal
 span.onclick = function() {
   modal.style.display = "none";
 }
 
 // When the user clicks anywhere outside of the modal, close it
 window.onclick = function(event) {
   if (event.target == modal) {
     modal.style.display = "none";
   }
 }



   // includeHTML() ;
  //  myMove();
  }


