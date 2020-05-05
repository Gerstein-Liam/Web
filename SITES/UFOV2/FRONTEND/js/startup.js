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


/*
function createDB ()  {
   'use strict';
 
   //check for support
   if (!('indexedDB' in window)) {
     console.log('This browser doesn\'t support IndexedDB');
     return;
   }
 
   var dbPromise = idb.open('test-db1', 1);
 
 };
*/
//https://developers.google.com/web/ilt/pwa/working-with-indexeddb

