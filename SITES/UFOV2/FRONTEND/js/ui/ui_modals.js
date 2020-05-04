class ShowHide_FixedPosition {
    constructor(modal, onOpenFunction,onFieldChange) {
        this.modal = modal;
        this.onOpenFunction = onOpenFunction;
        this.onFieldChange=onFieldChange;
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
//////////////////////MODAL WITH PROTOTYPE////////////////////////////////
function OpenModal(event, row_id) {
    event.preventDefault();
    console.log("Mouse Eevent");
    if (event.button === 2) {
        let padding_left = (event.clientX) + 'px ';
        let padding_top = (event.clientY) + 'px ';
        document.getElementById(this._ModalID).style.paddingLeft = padding_left;
        document.getElementById(this._ModalID).style.paddingTop = padding_top;
        document.getElementById(this._ModalID).style.display = "block";
        if (this._OnOpen != null) {
            this._OnOpen(row_id);
        } else {
            console.log("Function not defined");
        }
    } else {
        console.log("Function not defined");
    }
}
var OpenM = OpenModal;
function CloseModal() {
    document.getElementById(this._ModalID).style.display = "none";
}
var CloseM = CloseModal;
function DependentModal(_ModalID, _OnOpen, _OnUpdateClick,_OnDeleteClick,_OnServer_UpdateOK,_OnServer_DeleteOK,_OnServer_Error, _OnFieldChange) {
    this._ModalID = _ModalID;
    this._OnOpen = _OnOpen;
    this._OnUpdateClick = _OnUpdateClick;
    this._OnDeleteClick = _OnDeleteClick;
    this._OnServer_UpdateOK=_OnServer_UpdateOK;
    this._OnServer_DeleteOK=_OnServer_DeleteOK;
    this._OnServer_Error=_OnServer_Error;
    this._OnFieldChange=_OnFieldChange;
    this._OldValues = 0;
    this._UpdateValues=0;
    this.serverresp = 0;
}
DependentModal.prototype.CF_OpenModal = OpenM;
DependentModal.prototype.CF_CloseModal = CloseM;
DependentModal.prototype.CF_CheckValue = function () {
    console.log(this._OldValues);
    console.log(this.serverresp);
}

