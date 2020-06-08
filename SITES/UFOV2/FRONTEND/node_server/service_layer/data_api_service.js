exports._s_dataAPI = API_Query_Post__TestJSON;
var _Database = require("../data_access_layer/database_model");
var _Queries = {
    LOAD_PERSON_LIST: `SELECT * FROM person WHERE 1`,
    ADD_PERSON: `INSERT INTO person(ID_person, Lastname,Firstname, Fonction, Domain, Country, Implication, Position) VALUES (NULL, ?,?,?,?,?,?,?)`,
    DELETE_PERSON: ` DELETE FROM person WHERE Lastname=? AND Firstname =?`,
    UPDATE_PERSON: `UPDATE person SET Lastname=? , Firstname=? ,Fonction=? ,Domain=? ,Country=?, Implication=? , Position=? WHERE ID_person=(SELECT ID_person FROM  person WHERE  Lastname=? AND Firstname=? )`,
    LOAD_EVENT_LIST: `SELECT * FROM event WHERE 1`,
    ADD_EVENT: `INSERT INTO person(ID_event, Name,Date, Country, Type, Latitude, Longitude) VALUES (NULL, ?,?,?,?,?,?)`,
};
function API_Query_Post__TestJSON(req) {
    return new Promise(function (resolve, reject) {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        let http_response = " ";
        req.on('error', (err) => {
            if (err) {
                let CustomError_OnPost = {
                    ERROR: "SERVER SAY:POST-BODY-READ-ERROR"
                }
                reject(JSON.stringify(CustomError_OnPost));
            }
        });
        req.on('end', async function () {
            var JSONPOST = JSON.parse(body);
            console.table([JSONPOST]);
            console.log("--API BEFORE AWAIT");
            let CustomError_OnSQL = { ERROR: "SERVER SAY:SQL-ERROR" }
            switch (JSONPOST.COMMAND) {
                case "LOAD PERSON-LIST":
                    console.log("--LOAD PERSON-LIST");
                    try { http_response = await _Database._m_DBQuery_Promise(_Queries.LOAD_PERSON_LIST, null); }
                    catch (err) { reject(JSON.stringify(CustomError_OnSQL)); }
                    break;
                case "LOAD EVENT-LIST":
                    console.log("--LOAD EVENT-LIST");
                    try { http_response = await _Database._m_DBQuery_Promise(_Queries.LOAD_EVENT_LIST, null); }
                    catch (err) { reject(JSON.stringify(CustomError_OnSQL)); }
                    break;
                case "ADD PERSON":
                    console.log("--ADD PERSON");
                    console.table([JSONPOST.NEWPERSON]);
                    try {
                        await _Database._m_DBQuery_Promise(_Queries.ADD_PERSON, Object.values(JSONPOST.NEWPERSON));
                        http_response = {
                            STATUS: "SERVER SAY: PERSON SAVED"
                        }
                    }
                    catch (err) { reject(JSON.stringify(CustomError_OnSQL)); }
                    break;
                case "ADD EVENT":
                    console.log("--ADD EVENT");
                    console.table([JSONPOST.NEWEVENT]);
                    try {
                        await _Database._m_DBQuery_Promise(_Queries.ADD_EVENT, Object.values(JSONPOST.NEWEVENT));
                        http_response = {
                            STATUS: "SERVER SAY: EVENT SAVED"
                        }
                    }
                    catch (err) { reject(JSON.stringify(CustomError_OnSQL)); }
                    break;
                case "UPDATE PERSON":
                    console.log("--UPDATE");
                    console.log(" [OLD] ");
                    console.table([JSONPOST.OLD]);
                    console.log(" [NEW] ");
                    console.table([JSONPOST.UPDATE]);
                    var _old = Object.values(JSONPOST.OLD);
                    var _update = Object.values(JSONPOST.UPDATE);
                    var _values = _update.concat(_old);
                    try {
                        await _Database._m_DBQuery_Promise(_Queries.UPDATE_PERSON, _values);
                        http_response = {
                            STATUS: "SERVER SAY: PERSON UPDATED"
                        }
                    }
                    catch (err) { reject(JSON.stringify(CustomError_OnSQL)); }
                    break;
                case "DELETE PERSON":
                    console.log("--DELETE PERSON");
                    console.table([JSONPOST.OLD]);
                    try {
                        await _Database._m_DBQuery_Promise(_Queries.DELETE_PERSON, Object.values(JSONPOST.OLD));
                        http_response = {
                            STATUS: "SERVER SAY: PERSON DELETED"
                        }
                    }
                    catch (err) { reject(JSON.stringify(CustomError_OnSQL)); }
                    break;
                default: console.log("Command not implemented");
                    break;
            }
            console.log("--API AFTER AWAIT");
            resolve(JSON.stringify(http_response));
        });
    })
}
