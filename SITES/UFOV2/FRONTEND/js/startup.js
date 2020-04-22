// Fonctions a exectuer au démaragge (AttachModal quand app sur server)
function Startup() {
   DisableRightClickMenuContext();
   InitTable();
  
}


/*

// Desactive le menu contextuel par défaut du click droit
function DisableRightClickMenuContext() {
   window.addEventListener('resize', function (e) {
      console.log("Event occure");
      console.log(e.cancelable);
     // e.preventDefault();
      
   }, false)
}


*/

//https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_style_cursor2



// Desactive le menu contextuel par défaut du click droit
function DisableRightClickMenuContext() {
   window.addEventListener('contextmenu', function (e) {
      console.log("Event occure");
      console.log(e.cancelable);
      e.preventDefault();
   }, false)
}


