<?php 
	$servername = 'localhost';
	$username = 'group1';
	$password = 'ts1puorg30rtm';
	$dbname = 'mtr03group1';

	$conn = new mysqli($servername, $username, $password, $dbname);
	$conn->query("SET NAMES UTF8");
	$conn->query("SET time_zone = '+08:00'");
	if($conn->connect_error){
		die('錯誤訊息 :' . $conn->connect_error);
	}
?>