<?php
  $servername = 'localhost';
  $username = 'group5';
  $password = 'ht5puorg30rtm'; //預設是沒密碼
  $dbname = 'mtr03group5';

  // Create connection
  $conn = new mysqli($servername, $username, $password, $dbname);

  //編碼：執行一個 query，才不會中文變亂碼
  $conn->query('SET NAMES UTF8');
  $conn->query("SET time_zone = '+08:00'");

  // Check connection
  if ($conn->connect_error) {
      die("Connection failed: " . $conn->connect_error);
  } 

?>