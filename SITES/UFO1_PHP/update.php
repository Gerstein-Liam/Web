<?php include 'dbconnect.php';?>
<?php
  $pastname =htmlentities(trim($_GET['pastname'])); 
  $pastvorname=htmlentities(trim($_GET['pastvorname'])); 
  $pastsector =htmlentities(trim($_GET['pastsector'])); 
  $pastcountry=htmlentities(trim($_GET['pastcountry'])); 


  $newname =htmlentities(trim($_GET['newname'])); 
  $newvorname=htmlentities(trim($_GET['newvorname'])); 
  $newsector =htmlentities(trim($_GET['newsector'])); 
  $newcountry=htmlentities(trim($_GET['newcountry'])); 
  /*
  echo $pastname;
  echo $pastvorname;
  echo $pastsector;
  echo $pastcountry;

  echo $newname;
  echo $newvorname;
  echo $newsector;
  echo $newcountry;

  */
 
  $query=  "UPDATE person SET `NAME`='" . $newname. "' , `VORNAME`='" . $newvorname. "' ,`SECTOR`='" . $newsector. "' WHERE `ID_person`=(SELECT`ID_person` FROM  person WHERE `NAME`='" . $pastname. "' AND `VORNAME`='" . $pastvorname. "' )";
  $result = $mysqli->query($query) or die($mysqli->error.__LINE__);
  
 
?>