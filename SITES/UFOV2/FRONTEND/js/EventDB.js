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
function AddEvent() {
    var event_info = {
        NAME: `${document.getElementById('add_event_modal').getElementsByClassName('name')[0].value}`,
        DATE: `${document.getElementById('add_event_modal').getElementsByClassName('year')[0].value}-${document.getElementById('add_event_modal').getElementsByClassName('month')[0].value}-${document.getElementById('add_event_modal').getElementsByClassName('day')[0].value}`,
        COUNTRY: `${document.getElementById('add_event_modal').getElementsByClassName('country')[0].value}`,
        TYPE: `${document.getElementById('add_event_modal').getElementsByClassName('type')[0].value}`
      //  LATITUDE: `${document.getElementById("latitude").value}`,
      //  LONGITUDE:
    };


    console.log(event_info.DATE);


    // Y : M : D
    //console.table([this._UpdateValues]);
    var post_para = {
        COMMAND: "ADD EVENT",
        NEWEVENT: event_info
    }
    let Ajax = new AjaxPostJSON("DB_REQUEST", post_para, function (res) {
      //  erasetable("table-persons");
        DB_EVENT.push({ Name: `${event_info.NAME}`, Date: `${event_info.DATE}`, Country: `${event_info.COUNTRY}`, Type: `${event_info.TYPE}`, Latitude: `${0}`, Longitude: `${0}`})
        erasetable("table-events");
        BuildEventTable(DB_EVENT);
        document.getElementById('add_event_modal').getElementsByClassName('db_status')[0].style.backgroundColor = "green";
        document.getElementById('add_event_modal').getElementsByClassName('db_status')[0].innerHTML = res.STATUS;
    }, function (err) {
        document.getElementById('add_event_modal').getElementsByClassName('db_status')[0].style.backgroundColor = "red";
        document.getElementById('add_event_modal').getElementsByClassName('db_status')[0].innerHTML = err.ERROR;
        //alert(err);
    });
    Ajax.ExecutePOST(null, null);
}
