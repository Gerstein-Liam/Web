// Fonctions a exectuer au démaragge (AttachModal quand app sur server)
function Startup() {
   DisableRightClickMenuContext();
}
// Desactive le menu contextuel par défaut du click droit
function DisableRightClickMenuContext() {
   window.addEventListener('contextmenu', function (e) {
      e.preventDefault();
   }, false)
}

