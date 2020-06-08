var DB_PERSON;
var DB_EVENT;
//------------------------------COMMON
function erasetable(id_table) {
    let table = document.getElementById(id_table);
    let i;
    let l = table.children.length;
    for (i = 0; i < (l - 1); i++) {
        table.lastChild.remove();
    }
}
//-------------------------------PERSON
function StorePersonDB(json) {
    DB_PERSON = json;
}
function BuildPersonTable(_json) {
    var result = "";
    var table = document.getElementById("table-persons");
    var ligne;
    var i = 0;
    for (const person of _json) {
        var ligne = document.createElement("tr");
        ligne.setAttribute('onmousedown', 'PersonRightClickModal.CF_OpenModal(event,this.id)');
        ligne.setAttribute('id', `${i}`);
        var _lastname = document.createElement("td");
        _lastname.setAttribute("class", "_lastname");
        _lastname.innerHTML = person.Lastname;
        var _firstname = document.createElement("td");
        _firstname.setAttribute("class", "_firstname");
        _firstname.innerHTML = person.Firstname;
        var _fonction = document.createElement("td");
        _fonction.setAttribute("class", "_fonction");
        _fonction.innerHTML = person.Fonction;
        var _domain = document.createElement("td");
        _domain.setAttribute("class", "_domain");
        _domain.innerHTML = person.Domain;
        var _country = document.createElement("td");
        _country.setAttribute("class", "_country");
        _country.innerHTML = person.Country;
        var _implication = document.createElement("td");
        _implication.setAttribute("class", "_implication");
        _implication.innerHTML = person.Implication;
        var _position = document.createElement("td");
        _position.setAttribute("class", "_position");
        _position.innerHTML = person.Position;
        var _col_bt_ressource = document.createElement("td");
        _col_bt_ressource.setAttribute("class", "bt-td-th");
        var _ButtonRessource = document.createElement("button");
        _ButtonRessource.setAttribute("class", "button");
        _ButtonRessource.innerHTML = "SHOW";
        _col_bt_ressource.appendChild(_ButtonRessource);
        var _col_bt_relatedevents = document.createElement("td");
        _col_bt_relatedevents.setAttribute("class", "bt-td-th");
        var _Button_RelatedEvent = document.createElement("button");
        _Button_RelatedEvent.setAttribute("class", "button");
        _Button_RelatedEvent.innerHTML = "SHOW";
        _col_bt_relatedevents.appendChild(_Button_RelatedEvent);
        var _col_bt_relatedstudies = document.createElement("td");
        _col_bt_relatedstudies.setAttribute("class", "bt-td-th");
        var _Button_RelatedStudies = document.createElement("button");
        _Button_RelatedStudies.setAttribute("class", "button");
        _Button_RelatedStudies.innerHTML = "SHOW";
        _col_bt_relatedstudies.appendChild(_Button_RelatedStudies);
        ligne.appendChild(_lastname);
        ligne.appendChild(_firstname);
        ligne.appendChild(_fonction);
        ligne.appendChild(_domain);
        ligne.appendChild(_country);
        ligne.appendChild(_implication);
        ligne.appendChild(_position);
        ligne.appendChild(_col_bt_ressource);
        ligne.appendChild(_col_bt_relatedevents);
        ligne.appendChild(_col_bt_relatedstudies);
        console.log(person.Firstname + person.Name);
        result += person.Firstname + " " + person.Name;
        table.appendChild(ligne);
        i++;
    }
}
var _BuildPersonTable = BuildPersonTable;
var post_para = {
    COMMAND: "LOAD PERSON-LIST"
}
var GetPersonData_And_BuildTable = new AjaxPostJSON("DB_REQUEST", post_para, function (json) {
    DB_PERSON = json;
    BuildPersonTable(DB_PERSON);
}, function (err) { console.log(err); });
//------------------------------EVENT
function BuildEventTable(_json) {
    var result = "";
    var table = document.getElementById("table-events");
    var ligne;
    var i = 0;
    for (const event of _json) {
        var ligne = document.createElement("tr");
        ligne.setAttribute('onmousedown', 'PersonRightClickModal.CF_OpenModal(event,this.id)');
        ligne.setAttribute('id', `${i}`);
        var _name = document.createElement("td");
        _name.setAttribute("class", "_name");
        _name.innerHTML = event.Name;
        var _date = document.createElement("td");
        _date.setAttribute("class", "_date");
        _date.innerHTML = event.Date;
        var _country = document.createElement("td");
        _country.setAttribute("class", "_country");
        _country.innerHTML = event.Country;
        var _type = document.createElement("td");
        _type.setAttribute("class", "_type ");
        _type.innerHTML = event.Type;
        var _geolocation = document.createElement("td");
        _geolocation.setAttribute("class", "_type ");
        _geolocation.innerHTML = `N:${event.Latitude} E:${event.Longitude} `;
        var _col_bt_ressource = document.createElement("td");
        _col_bt_ressource.setAttribute("class", "bt-td-th");
        var _ButtonRessource = document.createElement("button");
        _ButtonRessource.setAttribute("class", "button");
        _ButtonRessource.innerHTML = "SHOW";
        _col_bt_ressource.appendChild(_ButtonRessource);
        var _col_bt_implicatedpersons = document.createElement("td");
        _col_bt_implicatedpersons.setAttribute("class", "bt-td-th");
        var _Button_ImplicatedPerson = document.createElement("button");
        _Button_ImplicatedPerson.setAttribute("class", "button");
        _Button_ImplicatedPerson.innerHTML = "SHOW";
        _col_bt_implicatedpersons.appendChild(_Button_ImplicatedPerson);
        var _col_bt_relatedstudies = document.createElement("td");
        _col_bt_relatedstudies.setAttribute("class", "bt-td-th");
        var _Button_RelatedStudies = document.createElement("button");
        _Button_RelatedStudies.setAttribute("class", "button");
        _Button_RelatedStudies.innerHTML = "SHOW";
        _col_bt_relatedstudies.appendChild(_Button_RelatedStudies);
        ligne.appendChild(_name);
        ligne.appendChild(_date);
        ligne.appendChild(_country);
        ligne.appendChild(_type);
        ligne.appendChild(_geolocation);
        ligne.appendChild(_col_bt_ressource);
        ligne.appendChild(_col_bt_implicatedpersons);
        ligne.appendChild(_col_bt_relatedstudies);
        console.log(event.Firstname + event.Name);
        result += event.Firstname + " " + event.Name;
        table.appendChild(ligne);
        i++;
    }
}
function StoreEventDB(json) {
    DB_EVENT = json;
}
var _BuildEventTable = BuildEventTable;
var post_para = {
    COMMAND: "LOAD EVENT-LIST"
}
var GetEventData_And_BuildTable = new AjaxPostJSON("DB_REQUEST", post_para, function (json) {
    DB_EVENT = json;
    BuildEventTable(DB_EVENT);
}, function (err) { console.log(err); });