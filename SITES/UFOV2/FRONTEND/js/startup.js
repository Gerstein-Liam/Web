// Fonctions a exectuer au démaragge (AttachModal quand app sur server)
function Startup() {
   DisableRightClickMenuContext();
   GetPersonData_And_BuildTable.ExecutePOST(null,null);

  
}

function DisableRightClickMenuContext() {
   window.addEventListener('contextmenu', function (e) {
      console.log("Event occure");
      console.log(e.cancelable);
      e.preventDefault();
   }, false)
}


