
class Modal {
    constructor(modal) {
        this.modal = modal;
    }
    OpenModal() {
        document.getElementById(this.modal).style.display = "block";
    }
    CloseModal() {
        document.getElementById(this.modal).style.display = "none";
    }
}

PersonFilterModal= new Modal("myModal");
/*
//Filter modal
function OpenPersonFilterModal() {
    document.getElementById("myModal").style.display = "block";
}
function ClosePersonFilterModal() {
    document.getElementById("myModal").style.display = "none";
}
*/
//Right click sur une Person
// https://hackernoon.com/copying-text-to-clipboard-with-javascript-df4d4988697f
function OpenPersonRightClickModal(event,id) {
    // alert("You pressed button: " + event.button + "Position X: " + event.clientX + " Y " +  event.clientY);
    event.preventDefault();
   
    if(event.button===2){
        let padding_left = (event.clientX) + 'px ';
        let padding_top = (event.clientY) + 'px ';
        document.getElementById("RightClickModal").style.paddingLeft = padding_left;
        document.getElementById("RightClickModal").style.paddingTop = padding_top;
        document.getElementById("RightClickModal").style.display = "block";
        console.log(`Row ID= ${id}`);
        var entries=document.getElementById(id).children;

      //  console.table([entries]);
       // console.log(`Lastname ${entries[0].innerHTML}`);
        var obj_entri= {LASTNAME:`${entries[0].innerHTML}`, FIRSTNAME:`${entries[1].innerHTML}`, FONCTIONS:`${entries[2].innerHTML}`, DOMAIN:`${entries[3].innerHTML}`,COUNTRY:`${entries[4].innerHTML}`};



        console.table([obj_entri]);
    }
   
}
function ClosePersonRightClickModal() {
    document.getElementById("RightClickModal").style.display = "none";
}
/*      Maybe change when app located in server, KEEP IT !!!!!!!
var ModalLoaded = 0;
function ShowModal() {
    if (ModalLoaded == 0) {
        ModalLoaded = 1;
        //AttachModals();                                     //No need when site located on served!!!!!!
    }
    document.getElementById("myModal").style.display = "block";
}
function AttachModals() {
    //Attach bt, attach span in the future
    console.log("Starting");
    window.onclick = function (event) {
        console.log("Window click");
        if (event.target == document.getElementById("myModal")) {
            document.getElementById("myModal").style.display = "none";
        }
    }
    console.log("Atteched???");
}
*/