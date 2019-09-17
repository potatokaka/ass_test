<?php

  $servername = 'localhost'; //本機
  $username = 'root'; //預設是  group5
  $password = ''; //預設是沒密碼 ht5puorg30rtm
  $dbname = 'mentor_week9'; // 資料庫 本機是  mtr03group5

  //連接資料庫
  $conn = new mysqli($servername, $username, $password, $dbname);

  //執行一個 query，才不會中文變亂碼
  $conn->query('SET NAMES UTF8');
  $conn->query("SET time_zone = '+08:00'");

  if ($conn->connect_error) {
    die("connection failed" . $conn->connect_error);
  } 


?>
