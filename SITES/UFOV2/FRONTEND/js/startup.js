/*
https://www.w3schools.com/js/js_input_examples.asp
var btn = document.getElementById("PersonFilter");
btn.onclick = function() {
   modal.style.display = "block";
 }
 */
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

/*
 function survey_iframe() {
   console.log(window.frames[0].location);
}
  setInterval(survey_iframe, 40);
*/
var ModalLoaded = 0;
function ShowModal() {
   if (ModalLoaded == 0) {
      ModalLoaded = 1;
      //AttachModals();
   }
   document.getElementById("myModal").style.display = "block";
}
function CloseModal() {
   document.getElementById("myModal").style.display = "none";
}
function AttachModals() {
   console.log("Starting");
   window.onclick = function (event) {
      console.log("Window click");
      if (event.target == document.getElementById("myModal")) {
         document.getElementById("myModal").style.display = "none";
      }
   }
   console.log("Atteched???");
}
function Startup() {
}
function showCoords(event) {
   alert("aEVent");
}
function OpenRightClickModal(event) {
   // alert("You pressed button: " + event.button + "Position X: " + event.clientX + " Y " +  event.clientY);
   event.preventDefault();
   let padding_left = (event.clientX) + 'px ';
   let padding_top = (event.clientY) + 'px ';
   document.getElementById("RightClickModal").style.paddingLeft = padding_left;
   document.getElementById("RightClickModal").style.paddingTop = padding_top;
   document.getElementById("RightClickModal").style.display = "block";
}
function CloseRightClickModal() {
   document.getElementById("RightClickModal").style.display = "none";
}
window.addEventListener('contextmenu', function (e) {
   e.preventDefault();
}, false);
