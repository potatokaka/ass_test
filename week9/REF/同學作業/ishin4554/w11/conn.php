<?php
  $servername  = "localhost";
  $username = "group1";
  $password = "ts1puorg30rtm";
  $dbname = "mtr03group1";
  $conn = new mysqli($servername, $username, $password, $dbname);
  $conn->query("SET NAMES 'UTF8'");
  if ($conn->connect_error){
    die("Connection Fail: ". $conn->connect_error);
  }
?>