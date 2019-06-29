<?php
  require_once('conn.php');

  //設定印出訊息的 Function
  function printMessage($msg, $redirect) {
    echo "<script>";
    echo    "alert('". htmlentities($msg, ENT_QUOTES) ."');";
    echo    "window.location = '". $redirect ."'";
    echo "</script>";
  }

  // 登入 set Token 功能
  function setToken ($conn, $username) {
    // uniqid() 是 php 內建的功能
    $token = uniqid();
    // 如果之前已經有登入取得 token，要先刪除 (或另外做驗證，判斷是否有拿到 token)
    $sql = "DELETE FROM potatokaka_users_certificates WHERE username ='$username'";
    $result = $conn->query($sql);

    $sql = "INSERT INTO potatokaka_users_certificates(username, token) VALUES('$username', '$token') ";
    $result = $conn->query($sql);
    setcookie("token", $token, time()+3600*24);
  }

  // 用 token 去找出 username
  function getUserByToken($conn, $token) {
    if (isset($token) && !empty($token)) {
      // 驗證是否 token 和資料庫的 token 一樣
      $sql = "SELECT * FROM potatokaka_users_certificates WHERE token='$token'";
      $result = $conn->query($sql);
      
      // 如果沒有成功，或者結果是 0
      if (!$result || $result->num_rows <= 0 ) {
        return null; // 因為要輸出的是 username
      }
        // 成功的話，就把資料撈出來
        $row = $result->fetch_assoc();
        return $row['username'];
    } else {
      return null;
    }
  }

  function getComments($conn, $id) {
    $sql = "SELECT * FROM potatokaka_comments WHERE id ='$id'";
    $result = $conn->query($sql);
    $row = $result->fetch_assoc();
    return $row['content'];
  }

?>