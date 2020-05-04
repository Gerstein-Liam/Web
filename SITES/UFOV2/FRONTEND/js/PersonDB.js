AddPersonModal = new ShowHide_FixedPosition('AddPersonModal', null);
PersonFilterModal = new ShowHide_FixedPosition('FilterPersonModal', null);
function AddPerson() {
  var person_info = {
    LASTNAME: `${document.getElementById("lastname").value}`,
    FIRSTNAME: `${document.getElementById("firstname").value}`,
    FONCTION: `${document.getElementById("fonction").value}`,
    DOMAIN: `${document.getElementById("domain").value}`,
    COUNTRY: `${document.getElementById("country").value}`,
    IMPLICATION: `${document.getElementById("implication").value}`,
    POSITION: `${document.getElementById("position").value}`
  };
  //console.table([this._UpdateValues]);
  var post_para = {
    COMMAND: "ADD PERSON",
    NEWPERSON: person_info
  }
  let Ajax= new AjaxPostJSON("DB_REQUEST",post_para,function(res){
                                                                    erasetable("table-persons");
                                                                    GetPersonData_And_BuildTable.ExecutePOST(null,null);
                                                                    document.getElementById("save_status").innerHTML = res;
                                                                }, function (err){
                                                                    alert(err);
                                                                });
  Ajax.ExecutePOST(null,null);
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
function OnOpen_PersonModal(Row_No) {
  this._OldValues = {
    LASTNAME: `${document.getElementById('table-persons').getElementsByClassName('_lastname')[parseInt(Row_No, 10)].innerHTML}`,
    FIRSTNAME: `${document.getElementById('table-persons').getElementsByClassName('_firstname')[parseInt(Row_No, 10)].innerHTML}`,
    FONCTION: `${document.getElementById('table-persons').getElementsByClassName('_fonction')[parseInt(Row_No, 10)].innerHTML}`,
    DOMAIN: `${document.getElementById('table-persons').getElementsByClassName('_domain')[parseInt(Row_No, 10)].innerHTML}`,
    COUNTRY: `${document.getElementById('table-persons').getElementsByClassName('_country')[parseInt(Row_No, 10)].innerHTML}`,
    IMPLICATION: `${document.getElementById('table-persons').getElementsByClassName('_implication')[parseInt(Row_No, 10)].innerHTML}`,
    POSITION: `${document.getElementById('table-persons').getElementsByClassName('_position')[parseInt(Row_No, 10)].innerHTML}`
  };
  console.table([this._OldValues]);
  document.getElementById('modal_rightclick_content').getElementsByClassName('_lastname')[0].value = document.getElementById('table-persons').getElementsByClassName('_lastname')[parseInt(Row_No, 10)].innerHTML;
  document.getElementById('modal_rightclick_content').getElementsByClassName('_firstname')[0].value = document.getElementById('table-persons').getElementsByClassName('_firstname')[parseInt(Row_No, 10)].innerHTML;
  document.getElementById('modal_rightclick_content').getElementsByClassName('_fonction')[0].value = document.getElementById('table-persons').getElementsByClassName('_fonction')[parseInt(Row_No, 10)].innerHTML;
  document.getElementById('modal_rightclick_content').getElementsByClassName('_domain')[0].value = document.getElementById('table-persons').getElementsByClassName('_domain')[parseInt(Row_No, 10)].innerHTML;
  document.getElementById('modal_rightclick_content').getElementsByClassName('_country')[0].value = document.getElementById('table-persons').getElementsByClassName('_country')[parseInt(Row_No, 10)].innerHTML;
  document.getElementById('modal_rightclick_content').getElementsByClassName('_implication')[0].value = document.getElementById('table-persons').getElementsByClassName('_implication')[parseInt(Row_No, 10)].innerHTML;
  document.getElementById('modal_rightclick_content').getElementsByClassName('_position')[0].value = document.getElementById('table-persons').getElementsByClassName('_position')[parseInt(Row_No, 10)].innerHTML;
}
function OnClick_UpdateBT_PersonModal() {
   this._UpdateValues = {
    LASTNAME: `${document.getElementById('modal_rightclick_content').getElementsByClassName('_lastname')[0].value}`,
    FIRSTNAME: `${document.getElementById('modal_rightclick_content').getElementsByClassName('_firstname')[0].value}`,
    FONCTION: `${document.getElementById('modal_rightclick_content').getElementsByClassName('_fonction')[0].value}`,
    DOMAIN: `${document.getElementById('modal_rightclick_content').getElementsByClassName('_domain')[0].value}`,
    COUNTRY: `${document.getElementById('modal_rightclick_content').getElementsByClassName('_country')[0].value}`,
    IMPLICATION: `${document.getElementById('modal_rightclick_content').getElementsByClassName('_implication')[0].value}`,
    POSITION: `${document.getElementById('modal_rightclick_content').getElementsByClassName('_position')[0].value}`
  };
  var post_para = {
    COMMAND: "UPDATE PERSON",
    OLD: this._OldValues,
    UPDATE: this._UpdateValues
  }
  let Ajax= new AjaxPostJSON("DB_REQUEST",post_para,this._OnServer_UpdateOK.bind(this), this._OnServer_Error.bind(this));
  Ajax.ExecutePOST(null,null);
}
function OnClick_DeleteBT_PersonModal() {
  //console.table([this._UpdateValues]);
 
  var post_para = {
    COMMAND: "DELETE PERSON",
    OLD: this._OldValues
  }
  let Ajax= new AjaxPostJSON("DB_REQUEST",post_para,this._OnServer_DeleteOK.bind(this), this._OnServer_Error.bind(this));
  Ajax.ExecutePOST(null,null);
 
}
function OnServer_UpDelError_PersonModal() {
  document.getElementById('modal_rightclick_content').getElementsByClassName('db_status')[0].innerHTML="Error on server";
  console.log("ON SERVER ERROR");
  document.getElementById('modal_rightclick_content').getElementsByClassName('_lastname')[0].value = this._OldValues.LASTNAME;
  document.getElementById('modal_rightclick_content').getElementsByClassName('_firstname')[0].value = this._OldValues.FIRSTNAME;
  document.getElementById('modal_rightclick_content').getElementsByClassName('_fonction')[0].value = this._OldValues.FONCTION;
  document.getElementById('modal_rightclick_content').getElementsByClassName('_domain')[0].value = this._OldValues.DOMAIN;
  document.getElementById('modal_rightclick_content').getElementsByClassName('_country')[0].value = this._OldValues.COUNTRY;
  document.getElementById('modal_rightclick_content').getElementsByClassName('_implication')[0].value = this._OldValues.IMPLICATION;
  document.getElementById('modal_rightclick_content').getElementsByClassName('_position')[0].value = this._OldValues.POSITION;
}
function OnServer_UpdateOK_PersonModal() {
  document.getElementById('modal_rightclick_content').getElementsByClassName('db_status')[0].innerHTML="Saved";
  console.log("ON SERVER OK");
  this._OldValues = {
    LASTNAME: `${this._UpdateValues.LASTNAME}`,
    FIRSTNAME: `${this._UpdateValues.FIRSTNAME}`,
    FONCTION: `${this._UpdateValues.FONCTION}`,
    DOMAIN: `${this._UpdateValues.DOMAIN}`,
    COUNTRY: `${this._UpdateValues.COUNTRY}`,
    IMPLICATION: `${this._UpdateValues.IMPLICATION}`,
    POSITION: `${this._UpdateValues.POSITION}`
  };
  erasetable("table-persons");
 // InitTable();
 GetPersonData_And_BuildTable.ExecutePOST(null,null);
}
function OnServer_DeleteOK_PersonModal() {
  document.getElementById('modal_rightclick_content').getElementsByClassName('db_status')[0].innerHTML="Deleted";
  erasetable("table-persons");
 // InitTable();
 GetPersonData_And_BuildTable.ExecutePOST(null,null);
}
function OnFieldChange_PersonModal() {
  document.getElementById('modal_rightclick_content').getElementsByClassName('db_status')[0].innerHTML="IDLE";
}
var _OnOpen_PersonModal = OnOpen_PersonModal;
var _OnClick_UpdateBT_PersonModal = OnClick_UpdateBT_PersonModal;
var _OnClick_DeleteBT_PersonModal=OnClick_DeleteBT_PersonModal;
var _OnFieldChange_PersonModal = OnFieldChange_PersonModal;
var _OnServer_UpdateOK_PersonModal = OnServer_UpdateOK_PersonModal;
var _OnServer_DeleteOK_PersonModal = OnServer_DeleteOK_PersonModal;
var _OnServer_UpDelError_PersonModal = OnServer_UpDelError_PersonModal;
var PersonRightClickModal = new DependentModal("RightClickModal", _OnOpen_PersonModal, _OnClick_UpdateBT_PersonModal,_OnClick_DeleteBT_PersonModal, _OnServer_UpdateOK_PersonModal,_OnServer_DeleteOK_PersonModal,_OnServer_UpDelError_PersonModal , _OnFieldChange_PersonModal);
var CheckSeparation = new DependentModal("RightClickModal", function () { console.table([this._OldValues]) }, null);
AddEventModal = new ShowHide_FixedPosition('AddEventModal', null);
