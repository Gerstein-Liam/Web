PersonFilterModal = new ShowHide_FixedPosition('FilterPersonModal',null,null);
/**********************************************ADD MODAL**************************************************************** */
AddPersonModal = new ShowHide_FixedPosition('AddPersonModal',  
    function(){
        document.getElementById('add_person_modal').getElementsByClassName('db_status')[0].style.backgroundColor="blue";
        document.getElementById('add_person_modal').getElementsByClassName('db_status')[0].innerHTML = "IDLE";
    },
    function(element){
       
       
       /*
        console.log(element.type);

        if(element.type==="text"){

            console.log("Text Field");
            this.value=" ";
        }

        */
        document.getElementById('add_person_modal').getElementsByClassName('db_status')[0].style.backgroundColor="blue";
        document.getElementById('add_person_modal').getElementsByClassName('db_status')[0].innerHTML = "IDLE";
    }
);
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
    let Ajax = new AjaxPostJSON("DB_REQUEST", post_para, function (res) {
        erasetable("table-persons");
        GetPersonData_And_BuildTable.ExecutePOST(null, null);

        document.getElementById('add_person_modal').getElementsByClassName('db_status')[0].style.backgroundColor="green";
        document.getElementById('add_person_modal').getElementsByClassName('db_status')[0].innerHTML = res.STATUS;
   
    }, function (err) {
        document.getElementById('add_person_modal').getElementsByClassName('db_status')[0].style.backgroundColor="red";
        document.getElementById('add_person_modal').getElementsByClassName('db_status')[0].innerHTML = err.ERROR;
        alert(err);
    });
    Ajax.ExecutePOST(null, null);
}
/**********************************************UPDATE DELETE MODAL**************************************************************** */
function OnOpen_PersonModal(Row_No) {
    document.getElementById('modal_rightclick_content').getElementsByClassName('db_status')[0].style.backgroundColor="blue";
    document.getElementById('modal_rightclick_content').getElementsByClassName('db_status')[0].innerHTML = "IDLE";
    
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
    let Ajax = new AjaxPostJSON("DB_REQUEST", post_para, this._OnServer_UpdateOK.bind(this), this._OnServer_Error.bind(this));
    Ajax.ExecutePOST(null, null);
}
function OnClick_DeleteBT_PersonModal() {
    //console.table([this._UpdateValues]);
    var post_para = {
        COMMAND: "DELETE PERSON",
        OLD: this._OldValues
    }
    let Ajax = new AjaxPostJSON("DB_REQUEST", post_para, this._OnServer_DeleteOK.bind(this), this._OnServer_Error.bind(this));
    Ajax.ExecutePOST(null, null);
}
function OnServer_UpDelError_PersonModal(err) {

    document.getElementById('modal_rightclick_content').getElementsByClassName('db_status')[0].style.backgroundColor="red";

    document.getElementById('modal_rightclick_content').getElementsByClassName('db_status')[0].innerHTML = err.ERROR;
    document.getElementById('modal_rightclick_content').getElementsByClassName('_lastname')[0].value = this._OldValues.LASTNAME;
    document.getElementById('modal_rightclick_content').getElementsByClassName('_firstname')[0].value = this._OldValues.FIRSTNAME;
    document.getElementById('modal_rightclick_content').getElementsByClassName('_fonction')[0].value = this._OldValues.FONCTION;
    document.getElementById('modal_rightclick_content').getElementsByClassName('_domain')[0].value = this._OldValues.DOMAIN;
    document.getElementById('modal_rightclick_content').getElementsByClassName('_country')[0].value = this._OldValues.COUNTRY;
    document.getElementById('modal_rightclick_content').getElementsByClassName('_implication')[0].value = this._OldValues.IMPLICATION;
    document.getElementById('modal_rightclick_content').getElementsByClassName('_position')[0].value = this._OldValues.POSITION;
}
function OnServer_UpdateOK_PersonModal(res) {
    document.getElementById('modal_rightclick_content').getElementsByClassName('db_status')[0].style.backgroundColor="green";
    document.getElementById('modal_rightclick_content').getElementsByClassName('db_status')[0].innerHTML = res.STATUS;
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
    GetPersonData_And_BuildTable.ExecutePOST(null, null);
}
function OnServer_DeleteOK_PersonModal(res) {
    document.getElementById('modal_rightclick_content').getElementsByClassName('db_status')[0].style.backgroundColor="green";
    document.getElementById('modal_rightclick_content').getElementsByClassName('db_status')[0].innerHTML = res.STATUS;
    erasetable("table-persons");
    // InitTable();
    GetPersonData_And_BuildTable.ExecutePOST(null, null);
}
function OnFieldChange_PersonModal() {
    document.getElementById('modal_rightclick_content').getElementsByClassName('db_status')[0].style.backgroundColor="blue";
    document.getElementById('modal_rightclick_content').getElementsByClassName('db_status')[0].innerHTML = "IDLE";
}
var _OnOpen_PersonModal = OnOpen_PersonModal;
var _OnClick_UpdateBT_PersonModal = OnClick_UpdateBT_PersonModal;
var _OnClick_DeleteBT_PersonModal = OnClick_DeleteBT_PersonModal;
var _OnFieldChange_PersonModal = OnFieldChange_PersonModal;
var _OnServer_UpdateOK_PersonModal = OnServer_UpdateOK_PersonModal;
var _OnServer_DeleteOK_PersonModal = OnServer_DeleteOK_PersonModal;
var _OnServer_UpDelError_PersonModal = OnServer_UpDelError_PersonModal;
var PersonRightClickModal = new DependentModal("RightClickModal", _OnOpen_PersonModal, _OnClick_UpdateBT_PersonModal, _OnClick_DeleteBT_PersonModal, _OnServer_UpdateOK_PersonModal, _OnServer_DeleteOK_PersonModal, _OnServer_UpDelError_PersonModal, _OnFieldChange_PersonModal);
var CheckSeparation = new DependentModal("RightClickModal", function () { console.table([this._OldValues]) }, null);
AddEventModal = new ShowHide_FixedPosition('AddEventModal', null);
