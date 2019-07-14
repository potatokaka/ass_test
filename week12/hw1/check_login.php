<?php
  include_once('conn.php');
  include_once('utils.php');

  //改成直接去抓 utils 的 Function
  //$user = getUserByToken($conn, $_COOKIE['token']);

  if (isset($_COOKIE['token']) && !empty($_COOKIE['token'])) {
    $token = $_COOKIE['token'];
  } else {
    $token = null;
  }

  $user = getUserByToken($conn, $token);


?>