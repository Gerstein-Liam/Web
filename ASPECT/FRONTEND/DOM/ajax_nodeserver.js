



var json;

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "SELECT * FROM `person` WHERE 1";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log(result);
      json=result;
    });
  });


  const express = require('express');
  const app = express();

  app.listen(8080, function () {
    console.log('Example app listening on port 3000!');
  });
  
  app.get('/ajax', function (req, res) {
    console.log("request receive");
    res.send(json);
  });
  
  
  
