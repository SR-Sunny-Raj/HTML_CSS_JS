<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
<center>
<?php
$name = $_POST['name'];
$username = $_POST['userName'];
$mobileNumber = $_POST['mobilenumber'];
$address = $_POST['address'];
echo "<table><tr>Name : ".$name."</tr>";
echo "<tr>User name : ".$username."</tr>";
echo "<tr>MobileNumber : ".$mobileNumber."</tr>";
echo "<tr>Address : ".$address."</tr></table>";
?>
</center>
</body>
</html>
