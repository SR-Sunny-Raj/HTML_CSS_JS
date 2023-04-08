<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
<center>
<h1>User Details</h1>
<?php
$name = $_POST['name'];
$username = $_POST['userName'];
$address = $_POST['address'];
$gender = $_POST['gender'];
$district = $_POST['districtName'];
$event[] =  array();
$event[] = $_POST['events'];
//print_r($event);
?>
<table>
	<tr>
		<td><?php echo "Name" ?></td>
		<td><?php echo ":" ?></td>
		<td><?php echo $name ?></td>
	</tr>
	<tr>
		<td><?php echo "User name" ?></td>
		<td><?php echo ":" ?></td>
		<td><?php echo $username ?></td>
	</tr>
	<tr>
		<td><?php echo "Address" ?></td>
		<td><?php echo ":" ?></td>
		<td><?php echo $address ?></td>
	</tr>
	<tr>
		<td><?php echo "Gender" ?></td>
		<td><?php echo ":" ?></td>
		<td><?php echo $gender ?></td>
	</tr>
	<tr>
		<td><?php echo "District" ?></td>
		<td><?php echo ":" ?></td>
		<td><?php echo $district ?></td>
	</tr>
	<tr>
		<td><?php echo "Events" ?></td>
		<td><?php echo ":" ?></td>
		<td>
			<?php foreach ($event[1] as $key =>$value): ?>
				<?php if($key< count($event[1])-1){
				  echo $value.", "; }
				  else { echo $value; } ?>
			<?php endforeach ?>	
		</td>
	</tr>
	</table>

</center>
</body>
</html>