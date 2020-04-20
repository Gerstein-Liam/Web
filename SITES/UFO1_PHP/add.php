<?php include 'dbconnect.php';?>
<?php
	$name =htmlentities(trim($_GET['name'])); 
	$vorname=htmlentities(trim($_GET['vorname'])); 
	$sector =htmlentities(trim($_GET['sector'])); 
  $country=htmlentities(trim($_GET['country'])); 
  $url=htmlentities(trim($_GET['preslink'])); 
 
  $query= "INSERT INTO `person`(`ID_person`, `NAME`, `VORNAME`, `SECTOR`,`COUNTRY`,`PresLink`) VALUES (NULL,'" . $name . "','" . $vorname. "','" . $sector. "','" . $country. "','" . $url. "')";
  $result = $mysqli->query($query) or die($mysqli->error.__LINE__);
?>