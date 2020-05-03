class ShowHide_FixedPosition {
    constructor(modal, onOpenFunction) {
        this.modal = modal;
        this.onOpenFunction = onOpenFunction;
    }
    OpenModal() {
        document.getElementById(this.modal).style.display = "block";
        if (this.onOpenFunction != null) {
            this.onOpenFunction();
        } else {
            console.log("Function not defined");
        }
    }
    CloseModal() {
        document.getElementById(this.modal).style.display = "none";
    }
}
class ShowHide_MousePosition {
    constructor(modal, onOpenFunction) {
        this.modal = modal;
        this.onOpenFunction = onOpenFunction;
    }
    OpenModal(event, id) {
        event.preventDefault();
        console.log("Mouse Eevent");
        if (event.button === 2) {
            let padding_left = (event.clientX) + 'px ';
            let padding_top = (event.clientY) + 'px ';
            document.getElementById(this.modal).style.paddingLeft = padding_left;
            document.getElementById(this.modal).style.paddingTop = padding_top;
            document.getElementById(this.modal).style.display = "block";
            if (this.onOpenFunction != null) {
                this.onOpenFunction(id);
            } else {
                console.log("Function not defined");
            }
        } else {
            console.log("Function not defined");
        }
    }
    CloseModal() {
        document.getElementById(this.modal).style.display = "none";
    }
}
//////////////////////MODAL WITH PROTOTYPE////////////////////////////////
function OpenModal(event, row_id) {
    event.preventDefault();
    console.log("Mouse Eevent");
    if (event.button === 2) {
        let padding_left = (event.clientX) + 'px ';
        let padding_top = (event.clientY) + 'px ';
        document.getElementById(this.ModalID).style.paddingLeft = padding_left;
        document.getElementById(this.ModalID).style.paddingTop = padding_top;
        document.getElementById(this.ModalID).style.display = "block";
        if (this.onOpenFunction != null) {
            this.onOpenFunction(row_id);
        } else {
            console.log("Function not defined");
        }
    } else {
        console.log("Function not defined");
    }
}
var OpenM = OpenModal;
function CloseModal() {
    document.getElementById(this.ModalID).style.display = "none";
}
var CloseM = CloseModal;
function DependentModal(ModalID, onOpenFunction, OnSubmitFunction,OnSubmitFunction_Delete,_OnServer_UpdateOK,_OnServer_DeleteOK,_OnServerError, _OnFieldChange) {
    this.ModalID = ModalID;
    this.onOpenFunction = onOpenFunction;
    this.OnSubmitFunction = OnSubmitFunction;
    this.OnSubmitFunction_Delete = OnSubmitFunction_Delete;
    this._OnServer_UpdateOK=_OnServer_UpdateOK;
    this._OnServer_DeleteOK=_OnServer_DeleteOK;
    this._OnServerError=_OnServerError;
    this._OnFieldChange=_OnFieldChange;
    this.oldvalues = 0;
    this.serverresp = 0;
}
DependentModal.prototype.CF_OpenModal = OpenM;
DependentModal.prototype.CF_CloseModal = CloseM;
DependentModal.prototype.CF_CheckValue = function () {
    console.log(this.oldvalues);
    console.log(this.serverresp);
}
