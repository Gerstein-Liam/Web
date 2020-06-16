PersonFilterModal = new ShowHide_FixedPosition('FilterPersonModal', null, null);
function PersonFilter() {
    let _DomainQuery = document.getElementById("fdomain").value;
    let _CountryQuery = document.getElementById("fcountry").value;
    let _ImplicationQuery = document.getElementById("fimp").value;
    let _PositionQuery = document.getElementById("fpos").value;
    console.log(_DomainQuery);
    let tmp = DB_PERSON;
    //  console.log(tmp);
    if (_DomainQuery != "%") {
        tmp = tmp.filter(element => element.Domain === _DomainQuery)
    }
    if (_CountryQuery != "%") {
        tmp = tmp.filter(element => element.Country === _CountryQuery)
    }
    if (_ImplicationQuery != "%") {
        tmp = tmp.filter(element => element.Implication === _ImplicationQuery)
    }
    if (_PositionQuery != "%") {
        tmp = tmp.filter(element => element.Position === _PositionQuery)
    }
    console.log("Filter result");
    console.log(tmp);
    erasetable("table-persons");
    BuildPersonTable(tmp);
}
/**********************************************ADD MODAL**************************************************************** */
AddPersonModal = new ShowHide_FixedPosition('AddPersonModal',
    function () {
        document.getElementById('add_person_modal').getElementsByClassName('db_status')[0].style.backgroundColor = "blue";
        document.getElementById('add_person_modal').getElementsByClassName('db_status')[0].innerHTML = "IDLE";
    },
    function (element) {
        /*
         console.log(element.type);
         if(element.type==="text"){
             console.log("Text Field");
             this.value=" ";
         }
         */
        document.getElementById('add_person_modal').getElementsByClassName('db_status')[0].style.backgroundColor = "blue";
        document.getElementById('add_person_modal').getElementsByClassName('db_status')[0].innerHTML = "IDLE";
    }
);
function AddPerson() {
    var person_info = {
        LASTNAME: `${document.getElementById('add_person_modal').getElementsByClassName('lastname')[0].value}`,
        FIRSTNAME: `${document.getElementById('add_person_modal').getElementsByClassName('firstname')[0].value}`,
        FONCTION: `${document.getElementById('add_person_modal').getElementsByClassName('fonction')[0].value}`,
        DOMAIN: `${document.getElementById('add_person_modal').getElementsByClassName('domain')[0].value}`,
        COUNTRY: `${document.getElementById('add_person_modal').getElementsByClassName('country')[0].value}`,
        IMPLICATION: `${document.getElementById('add_person_modal').getElementsByClassName('implication')[0].value}`,
        POSITION: `${document.getElementById('add_person_modal').getElementsByClassName('position')[0].value}`
    };
    //console.table([this._UpdateValues]);
    var post_para = {
        COMMAND: "ADD PERSON",
        NEWPERSON: person_info
    }
    let Ajax = new AjaxPostJSON("DB_REQUEST", post_para, function (res) {
        erasetable("table-persons");
        DB_PERSON.push({ Lastname: `${person_info.LASTNAME}`, Firstname: `${person_info.FIRSTNAME}`, Fonction: `${person_info.FONCTION}`, Domain: `${person_info.DOMAIN}`, Country: `${person_info.COUNTRY}`, Implication: `${person_info.IMPLICATION}`, Position: `${person_info.POSITION}` })
        erasetable("table-persons");
        BuildPersonTable(DB_PERSON);
        document.getElementById('add_person_modal').getElementsByClassName('db_status')[0].style.backgroundColor = "green";
        document.getElementById('add_person_modal').getElementsByClassName('db_status')[0].innerHTML = res.STATUS;
    }, function (err) {
        document.getElementById('add_person_modal').getElementsByClassName('db_status')[0].style.backgroundColor = "red";
        document.getElementById('add_person_modal').getElementsByClassName('db_status')[0].innerHTML = err.ERROR;
        alert(err);
    });
    Ajax.ExecutePOST(null, null);
}
/**********************************************UPDATE DELETE MODAL**************************************************************** */
function OnOpen_PersonModal(Row_No) {
    document.getElementById('modal_rightclick_content').getElementsByClassName('db_status')[0].style.backgroundColor = "blue";
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
    document.getElementById('modal_rightclick_content').getElementsByClassName('db_status')[0].style.backgroundColor = "red";
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
    document.getElementById('modal_rightclick_content').getElementsByClassName('db_status')[0].style.backgroundColor = "green";
    document.getElementById('modal_rightclick_content').getElementsByClassName('db_status')[0].innerHTML = res.STATUS;
    let index = DB_PERSON.findIndex(i => i.Lastname === `${this._OldValues.LASTNAME}` && i.Firstname === `${this._OldValues.FIRSTNAME}`);
    console.log(index);
    DB_PERSON[index].Firstname = "Daniel";
    DB_PERSON[index].Lastname = `${this._UpdateValues.LASTNAME}`;
    DB_PERSON[index].Firstname = `${this._UpdateValues.FIRSTNAME}`;
    DB_PERSON[index].Fonction = `${this._UpdateValues.FONCTION}`;
    DB_PERSON[index].Domain = `${this._UpdateValues.DOMAIN}`;
    DB_PERSON[index].Country = `${this._UpdateValues.COUNTRY}`;
    DB_PERSON[index].Implication = `${this._UpdateValues.IMPLICATION}`;
    DB_PERSON[index].Position = `${this._UpdateValues.POSITION}`;
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
    BuildPersonTable(DB_PERSON);
}
function OnServer_DeleteOK_PersonModal(res) {
    document.getElementById('modal_rightclick_content').getElementsByClassName('db_status')[0].style.backgroundColor = "green";
    document.getElementById('modal_rightclick_content').getElementsByClassName('db_status')[0].innerHTML = res.STATUS;
    let index = DB_PERSON.findIndex(i => i.Firstname === this._OldValues.FIRSTNAME && i.Lastname === this._OldValues.LASTNAME);
    DB_PERSON.splice(index, 1);
    console.log(DB_PERSON)
    erasetable("table-persons");
    BuildPersonTable(DB_PERSON);
    // InitTable();
    // GetPersonData_And_BuildTable.ExecutePOST(null, null);
}
function OnFieldChange_PersonModal() {
    document.getElementById('modal_rightclick_content').getElementsByClassName('db_status')[0].style.backgroundColor = "blue";
    document.getElementById('modal_rightclick_content').getElementsByClassName('db_status')[0].innerHTML = "IDLE";
}
var _OnOpen_PersonModal = OnOpen_PersonModal;
var _OnClick_UpdateBT_PersonModal = OnClick_UpdateBT_PersonModal;
var _OnClick_DeleteBT_PersonModal = OnClick_DeleteBT_PersonModal;
var _OnFieldChange_PersonModal = OnFieldChange_PersonModal;
var _OnServer_UpdateOK_PersonModal = OnServer_UpdateOK_PersonModal;
var _OnServer_DeleteOK_PersonModal = OnServer_DeleteOK_PersonModal;
var _OnServer_UpDelError_PersonModal = OnServer_UpDelError_PersonModal;
var PersonRightClickModal = new DependentModal("PersonRightClickModal", _OnOpen_PersonModal, _OnClick_UpdateBT_PersonModal, _OnClick_DeleteBT_PersonModal, _OnServer_UpdateOK_PersonModal, _OnServer_DeleteOK_PersonModal, _OnServer_UpDelError_PersonModal, _OnFieldChange_PersonModal);
var CheckSeparation = new DependentModal("PersonRightClickModal", function () { console.table([this._OldValues]) }, null);
AddEventModal = new ShowHide_FixedPosition('AddEventModal', null);
