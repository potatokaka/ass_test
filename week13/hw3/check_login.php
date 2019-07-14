<?php
  include_once('conn.php');
  include_once('utils.php');

  // 3. PHP Session 寫法
  session_start();

  if (isset($_SESSION['username']) && !empty($_SESSION['username'])) {
    //$token = $_COOKIE['token'];
    $user = $_SESSION['username'];

  } else {
    //$token = null;
    $user = null;
  }

  // $user = getUserByToken($conn, $token);
  $nickname = getNickname($conn, $user);

  // 1. Set Cookie 寫法
  //改成直接去抓 utils 的 Function
  //$user = getUserByToken($conn, $_COOKIE['token']);

  // 2. Set Token 寫法
  // if (isset($_COOKIE['token']) && !empty($_COOKIE['token'])) {
  //   $token = $_COOKIE['token'];
  // } else {
  //   $token = null;
  // }


?>