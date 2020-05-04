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
  //console.table([person_update]);
  var post_para = {
    COMMAND: "ADD PERSON",
    NEWPERSON: person_info
  }
  var _json = JSON.stringify(post_para);
  console.log(_json);
  if (window.fetch) {
    console.log("Fetch supported");
    fetch("DB_REQUEST", {
      method: 'post',
      body: _json})
        .then(function (server_response) {
          erasetable();
          GetPersonData_And_BuildTable.ExecutePOST(null,null);
          document.getElementById("save_status").innerHTML = response;
        }.bind(this))
        .catch(function (ajax_error) {
        }.bind(this));
  } 
  else {
    console.log("Fetch not supporteb by browser");
    var update_ajaxpost = AjaxPOST_XMLHttpRequest_Promises;
    update_ajaxpost("DB_REQUEST", _json).then(function (server_response) { console.log(server_response) }).catch(function (ajax_error) { console.log(ajax_error) });
  }
}
function GetPersonInfoOfRow(Row_No) {
  this.oldvalues = {
    LASTNAME: `${document.getElementById('table-persons').getElementsByClassName('_lastname')[parseInt(Row_No, 10)].innerHTML}`,
    FIRSTNAME: `${document.getElementById('table-persons').getElementsByClassName('_firstname')[parseInt(Row_No, 10)].innerHTML}`,
    FONCTION: `${document.getElementById('table-persons').getElementsByClassName('_fonction')[parseInt(Row_No, 10)].innerHTML}`,
    DOMAIN: `${document.getElementById('table-persons').getElementsByClassName('_domain')[parseInt(Row_No, 10)].innerHTML}`,
    COUNTRY: `${document.getElementById('table-persons').getElementsByClassName('_country')[parseInt(Row_No, 10)].innerHTML}`,
    IMPLICATION: `${document.getElementById('table-persons').getElementsByClassName('_implication')[parseInt(Row_No, 10)].innerHTML}`,
    POSITION: `${document.getElementById('table-persons').getElementsByClassName('_position')[parseInt(Row_No, 10)].innerHTML}`
  };
  console.table([this.oldvalues]);
  document.getElementById('modal_rightclick_content').getElementsByClassName('_lastname')[0].value = document.getElementById('table-persons').getElementsByClassName('_lastname')[parseInt(Row_No, 10)].innerHTML;
  document.getElementById('modal_rightclick_content').getElementsByClassName('_firstname')[0].value = document.getElementById('table-persons').getElementsByClassName('_firstname')[parseInt(Row_No, 10)].innerHTML;
  document.getElementById('modal_rightclick_content').getElementsByClassName('_fonction')[0].value = document.getElementById('table-persons').getElementsByClassName('_fonction')[parseInt(Row_No, 10)].innerHTML;
  document.getElementById('modal_rightclick_content').getElementsByClassName('_domain')[0].value = document.getElementById('table-persons').getElementsByClassName('_domain')[parseInt(Row_No, 10)].innerHTML;
  document.getElementById('modal_rightclick_content').getElementsByClassName('_country')[0].value = document.getElementById('table-persons').getElementsByClassName('_country')[parseInt(Row_No, 10)].innerHTML;
  document.getElementById('modal_rightclick_content').getElementsByClassName('_implication')[0].value = document.getElementById('table-persons').getElementsByClassName('_implication')[parseInt(Row_No, 10)].innerHTML;
  document.getElementById('modal_rightclick_content').getElementsByClassName('_position')[0].value = document.getElementById('table-persons').getElementsByClassName('_position')[parseInt(Row_No, 10)].innerHTML;
}
function PersonSubmitChange() {
  var person_update = {
    LASTNAME: `${document.getElementById('modal_rightclick_content').getElementsByClassName('_lastname')[0].value}`,
    FIRSTNAME: `${document.getElementById('modal_rightclick_content').getElementsByClassName('_firstname')[0].value}`,
    FONCTION: `${document.getElementById('modal_rightclick_content').getElementsByClassName('_fonction')[0].value}`,
    DOMAIN: `${document.getElementById('modal_rightclick_content').getElementsByClassName('_domain')[0].value}`,
    COUNTRY: `${document.getElementById('modal_rightclick_content').getElementsByClassName('_country')[0].value}`,
    IMPLICATION: `${document.getElementById('modal_rightclick_content').getElementsByClassName('_implication')[0].value}`,
    POSITION: `${document.getElementById('modal_rightclick_content').getElementsByClassName('_position')[0].value}`
  };
  //console.table([person_update]);
  var post_para = {
    COMMAND: "UPDATE PERSON",
    OLD: this.oldvalues,
    UPDATE: person_update
  }
  console.log("REQUEST  OLD");
  //console.table([post_para]);
  console.table([post_para.OLD]);
  console.log("REQUEST  NEW");
  //console.table([post_para]);
  console.table([post_para.UPDATE]);
  var _json = JSON.stringify(post_para);
  console.log(_json);
  if (window.fetch) {
    console.log("Fetch supported");
    fetch("DB_REQUEST", {
      method: 'post',
      body: _json})
        .then(function (server_response) {
          console.log("Serveur OK");
          console.table([this.oldvalues]);
          this._OnServer_UpdateOK(person_update);
        }.bind(this))
        .catch(function (ajax_error) {
            this._OnServerError();
        }.bind(this));
  } 
  else {
    console.log("Fetch not supporteb by browser");
    var update_ajaxpost = AjaxPOST_XMLHttpRequest_Promises;
    update_ajaxpost("DB_REQUEST", _json).then(function (server_response) { console.log(server_response) }).catch(function (ajax_error) { console.log(ajax_error) });
  }
}
function PersonSubmitDelete() {
  //console.table([person_update]);
  var post_para = {
    COMMAND: "DELETE PERSON",
    OLD: this.oldvalues
  }
  var _json = JSON.stringify(post_para);
  console.log(_json);
  if (window.fetch) {
    console.log("Fetch supported");
    fetch("DB_REQUEST", {
      method: 'post',
      body: _json})
        .then(function (server_response) {
          this._OnServer_DeleteOK();
        }.bind(this))
        .catch(function (ajax_error) {
            this._OnServerError();
        }.bind(this));
  } 
  else {
    console.log("Fetch not supporteb by browser");
    var update_ajaxpost = AjaxPOST_XMLHttpRequest_Promises;
    update_ajaxpost("DB_REQUEST", _json).then(function (server_response) { console.log(server_response) }).catch(function (ajax_error) { console.log(ajax_error) });
  }
}
function UpdatePerson__OnServorError() {
  document.getElementById('modal_rightclick_content').getElementsByClassName('db_status')[0].innerHTML="Error on server";
  console.log("ON SERVER ERROR");
  document.getElementById('modal_rightclick_content').getElementsByClassName('_lastname')[0].value = this.oldvalues.LASTNAME;
  document.getElementById('modal_rightclick_content').getElementsByClassName('_firstname')[0].value = this.oldvalues.FIRSTNAME;
  document.getElementById('modal_rightclick_content').getElementsByClassName('_fonction')[0].value = this.oldvalues.FONCTION;
  document.getElementById('modal_rightclick_content').getElementsByClassName('_domain')[0].value = this.oldvalues.DOMAIN;
  document.getElementById('modal_rightclick_content').getElementsByClassName('_country')[0].value = this.oldvalues.COUNTRY;
  document.getElementById('modal_rightclick_content').getElementsByClassName('_implication')[0].value = this.oldvalues.IMPLICATION;
  document.getElementById('modal_rightclick_content').getElementsByClassName('_position')[0].value = this.oldvalues.POSITION;
}
function UpdatePerson__OnServorOK(person_update) {
  document.getElementById('modal_rightclick_content').getElementsByClassName('db_status')[0].innerHTML="Saved";
  console.log("ON SERVER OK");
  this.oldvalues = {
    LASTNAME: `${person_update.LASTNAME}`,
    FIRSTNAME: `${person_update.FIRSTNAME}`,
    FONCTION: `${person_update.FONCTION}`,
    DOMAIN: `${person_update.DOMAIN}`,
    COUNTRY: `${person_update.COUNTRY}`,
    IMPLICATION: `${person_update.IMPLICATION}`,
    POSITION: `${person_update.POSITION}`
  };
  erasetable();
 // InitTable();
 GetPersonData_And_BuildTable.ExecutePOST(null,null);
}
function UpdatePerson__OnServorDeleteOK() {
  document.getElementById('modal_rightclick_content').getElementsByClassName('db_status')[0].innerHTML="Deleted";
  erasetable();
 // InitTable();
 GetPersonData_And_BuildTable.ExecutePOST(null,null);
}
function UpdatePerson__OnFieldChange() {
  document.getElementById('modal_rightclick_content').getElementsByClassName('db_status')[0].innerHTML="IDLE";
}
var UP__OnServErr = UpdatePerson__OnServorError;
var UP__OnServOK = UpdatePerson__OnServorOK;
var UP__OnServDeleteOK = UpdatePerson__OnServorDeleteOK;
var GetPersonInfo_AtRow = GetPersonInfoOfRow;
var SubmitPersonDelte=PersonSubmitDelete;
var SubmitPersonChange = PersonSubmitChange;
var UPerson_OnFieldChange = UpdatePerson__OnFieldChange;
var PersonRightClickModal = new DependentModal("RightClickModal", GetPersonInfo_AtRow, SubmitPersonChange,SubmitPersonDelte, UP__OnServOK,UP__OnServDeleteOK,UP__OnServErr , UPerson_OnFieldChange);
var CheckSeparation = new DependentModal("RightClickModal", function () { console.table([this.oldvalues]) }, null);
AddEventModal = new ShowHide_FixedPosition('AddEventModal', null);
