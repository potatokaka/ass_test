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

  // if (isset($_COOKIE['token']) && !empty($_COOKIE['token'])) {
  //   $token = $_COOKIE['token'];

  //   // 驗證是否 token 和資料庫的 token 一樣
  //   $sql = "SELECT * FROM potatokaka_users_certificates WHERE token='$token'";
  //   $result = $conn->query($sql);
    
  //   // 如果沒有成功，或者結果是 0
  //   if (!$result || $result->num_rows <= 0 ) {
  //     $user = null;
  //   } else {
  //     // 成功的話，就把資料撈出來
  //     $row = $result->fetch_assoc();
  //     $user = $row['username'];
  //   }

  // } else {
  //   $user = null;
  // }

?>