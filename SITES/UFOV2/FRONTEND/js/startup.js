// Fonctions a exectuer au démaragge (AttachModal quand app sur server)
function Startup() {
   DisableRightClickMenuContext();
   var paras = "command=loadpersonlist";
   RequestAPI_PostMethod_LoadPersonList( "/API" ,paras)
}
// Desactive le menu contextuel par défaut du click droit
function DisableRightClickMenuContext() {
   window.addEventListener('contextmenu', function (e) {
      e.preventDefault();
   }, false)
}

