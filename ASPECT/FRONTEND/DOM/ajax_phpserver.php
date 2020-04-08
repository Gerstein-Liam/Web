<?php

$DB_NAME = 'ufo';
$DB_HOST = 'localhost';
$DB_USER = 'root';
$DB_PASS = '';

$mysqli = new mysqli($DB_HOST, $DB_USER, $DB_PASS, $DB_NAME);

if (mysqli_connect_errno())
{
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();

}
class Person
{
    /* Member variables */
    var $FirstName;
    var $LastName;
    var $Sector;

    function __construct($par1, $par2, $par3)
    {
        $this->FirstName = $par1;
        $this->LastName = $par2;
        $this->Sector = $par3;
    }
}
$query = "SELECT * FROM `person` WHERE 1 ";
$result = $mysqli->query($query) or die($mysqli->error . __LINE__);
$index = 0;
while ($row = mysqli_fetch_array($result))
{

    $myBag[$index] = new Person($row['NAME'], $row['VORNAME'], $row['SECTOR']);

    $index++;
}
$bags = array_values($myBag);
$JsonValue = json_encode((array)$bags);
$JsonHead = "{\"Person\":";
$JsonTail = "}";
$Response = $JsonHead . $JsonValue . $JsonTail;
echo $Response;

?>
