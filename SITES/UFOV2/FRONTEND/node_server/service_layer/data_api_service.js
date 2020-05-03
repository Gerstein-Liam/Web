exports._s_dataAPI = API_Query_Post__TestJSON;
var _Database = require("../data_access_layer/database_model");
var _Queries = {
    LOAD_PERSON_LIST: `SELECT * FROM person WHERE 1`,
    ADD_PERSON: `INSERT INTO person(ID_person, Lastname,Firstname, Fonction, Domain, Country, Implication, Position) VALUES (NULL, ?,?,?,?,?,?,?)`,
    DELETE_PERSON: ` DELETE FROM person WHERE Lastname=? AND Firstname =?`,
    UPDATE_PERSON: `UPDATE person SET Lastname=? , Firstname=? ,Fonction=? ,Domain=? ,Country=?, Implication=? , Position=? WHERE ID_person=(SELECT ID_person FROM  person WHERE  Lastname=? AND Firstname=? )`
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
                let CustomError_OnPost={
                    ERROR: "POST-BODY-READ-ERROR"
                }
                reject(JSON.stringify(CustomError_OnPost));
            }
        });
        req.on('end', async function () {
            var JSONPOST = JSON.parse(body);
            console.table([JSONPOST]);
            console.log("--API BEFORE AWAIT");
            let CustomError_OnSQL={ERROR: "SQL-ERROR"}
            switch (JSONPOST.COMMAND) {
                case "LOAD PERSON-LIST":
                    console.log("--LOAD PERSON-LIST");
                    try { http_response = await _Database._m_DBQuery_Promise(_Queries.LOAD_PERSON_LIST, null); }
                    catch (err) {reject(JSON.stringify(CustomError_OnSQL));}
                    break;
                case "ADD PERSON":
                    console.log("--ADD PERSON");
                    console.table([JSONPOST.NEWPERSON]);
                    try { http_response = await _Database._m_DBQuery_Promise(_Queries.ADD_PERSON, Object.values(JSONPOST.NEWPERSON)); }
                    catch (err) {reject(JSON.stringify(CustomError_OnSQL));}
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
                    try { http_response = await _Database._m_DBQuery_Promise(_Queries.UPDATE_PERSON, _values); }
                    catch (err) { reject(JSON.stringify(CustomError_OnSQL));}
                    break;
                case "DELETE PERSON":
                    console.log("--DELETE PERSON");
                    console.table([JSONPOST.OLD]);
                    try { http_response = await _Database._m_DBQuery_Promise(_Queries.DELETE_PERSON, Object.values(JSONPOST.OLD)); }
                    catch (err) { reject(JSON.stringify(CustomError_OnSQL));}
                    break;
                default: console.log("Command not implemented");
                    break;
            }
            console.log("--API AFTER AWAIT");
            resolve(JSON.stringify(http_response));
        });
    })
}
