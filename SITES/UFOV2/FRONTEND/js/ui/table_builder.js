function BuildPersonTable(json){
    var result = "";
    var table = document.getElementById("table-persons");
    var ligne;
    var i=0;
    for(const person of json){
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
        ligne.appendChild(_lastname);
        ligne.appendChild(_firstname);
        ligne.appendChild(_fonction);
        ligne.appendChild(_domain);
        ligne.appendChild(_country);
        ligne.appendChild(_implication);
        ligne.appendChild(_position);
        ligne.cloneNode();
        console.log(person.Firstname + person.Name);
        result += person.Firstname + " " + person.Name;
        table.appendChild(ligne);
        i++;
    }
}
var _BuildPersonTable=BuildPersonTable;

var post_para = {
    COMMAND: "LOAD PERSON-LIST"
  }
GetPersonData_And_BuildTable= new AjaxPostJSON( "DB_REQUEST",post_para,_BuildPersonTable, function (err){  alert(err);});