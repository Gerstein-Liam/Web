<?php include 'dbconnect.php';?>

<!-- 


<h2>find</h2>
<ul>
  <li>country: <?php echo htmlspecialchars($_GET['country']); ?></li>
  <li>sector <?php echo $_GET['sector']; ?></li>
  <li>country: <?php echo htmlspecialchars($_GET['country']); ?></li>
  <li>sector <?php echo $_GET['sector']; ?></li>
</ul>


-->




<?php
	$_sector =htmlentities(trim($_GET['sector'])); 
	$_country=htmlentities(trim($_GET['country'])); 
	$query=  "SELECT * FROM `person` WHERE SECTOR LIKE '" . $_sector . "'&& COUNTRY LIKE'" . $_country . "'";
	$result = $mysqli->query($query) or die($mysqli->error.__LINE__);
echo "<table  id=\"list\">
<thead>
<tr>
<th>Index</th>
<th>Firstname</th>
<th>Lastname</th>
<th>Sector</th>
<th>Country</th>
<th>Presentation Link</th>
<th>Modification</th>
</tr>
</thead>"

;

$index=1;
while($row = mysqli_fetch_array($result)) {
    
  
    echo "<tr>";
    echo "<td>" . $index . "</td>";
    echo "<td>" . $row['NAME'] . "</td>";
    echo "<td>" . $row['VORNAME'] . "</td>";
    echo "<td>" . $row['SECTOR'] . "</td>";
    echo "<td>" . $row['COUNTRY'] . "</td>";
    echo '<td><a href="'  . $row['PresLink'] . '">Click here</a></td>';
    echo '<td><div id="modfield"></div><button type="button"     onclick="openForm__Mod('.$index.')"         >Modifier</button></td>';
    echo "</tr>";
   
    $index++;
}
echo "</table>";
?>

