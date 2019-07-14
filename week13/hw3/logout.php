<?php
  // 1. Token 寫法
  //setcookie("token", '', time()+3600*24);
  
  session_start();
  session_destroy();
  header('Location: ./index.php');
  
?>