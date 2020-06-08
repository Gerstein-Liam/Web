AddEventModal = new ShowHide_FixedPosition('AddEventModal',
    function () {
        document.getElementById('add_event_modal').getElementsByClassName('db_status')[0].style.backgroundColor = "blue";
        document.getElementById('add_event_modal').getElementsByClassName('db_status')[0].innerHTML = "IDLE";
    },
    function () {
        document.getElementById('add_event_modal').getElementsByClassName('db_status')[0].style.backgroundColor = "blue";
        document.getElementById('add_event_modal').getElementsByClassName('db_status')[0].innerHTML = "IDLE";
    }
);

/*
function AddEvent() {
    var event_info = {
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
        COMMAND: "ADD EVENT",
        NEWEVENT: event_info
    }
    let Ajax = new AjaxPostJSON("DB_REQUEST", post_para, function (res) {
        erasetable("table-persons");
        DB_EVENT.push({ Lastname: `${event_info.LASTNAME}`, Firstname: `${event_info.FIRSTNAME}`, Fonction: `${event_info.FONCTION}`, Domain: `${event_info.DOMAIN}`, Country: `${event_info.COUNTRY}`, Implication: `${event_info.IMPLICATION}`, Position: `${event_info.POSITION}` })
        erasetable("table-persons");
        BuildEventTable(DB_EVENT);
        document.getElementById('add_event_modal').getElementsByClassName('db_status')[0].style.backgroundColor = "green";
        document.getElementById('add_event_modal').getElementsByClassName('db_status')[0].innerHTML = res.STATUS;
    }, function (err) {
        document.getElementById('add_event_modal').getElementsByClassName('db_status')[0].style.backgroundColor = "red";
        document.getElementById('add_event_modal').getElementsByClassName('db_status')[0].innerHTML = err.ERROR;
        alert(err);
    });
    Ajax.ExecutePOST(null, null);
}
*/