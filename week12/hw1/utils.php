<?php
  require_once('conn.php');


  //跳脫字元，解決 XSS 問題
  function escape($str) {
    return htmlspecialchars($str, ENT_QUOTES, 'utf-8');
  }

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
    //$sql = "DELETE FROM potatokaka_users_certificates WHERE username ='$username'";
    $sql = "DELETE FROM potatokaka_users_certificates WHERE username =?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $username);
    $stmt->execute();

    //$result = $conn->query($sql);
    $result = $stmt->get_result();

    //$sql = "INSERT INTO potatokaka_users_certificates(username, token) VALUES('$username', '$token') ";
    $sql = "INSERT INTO potatokaka_users_certificates(username, token) VALUES(?, ?) ";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ss", $username, $token);
    $stmt->execute();

    //$result = $conn->query($sql);
    $result = $stmt->get_result();
    setcookie("token", $token, time()+3600*24);
  }

  // 用 token 去找出 username
  function getUserByToken($conn, $token) {
    if (isset($token) && !empty($token)) {
      // 驗證是否 token 和資料庫的 token 一樣
      //$sql = "SELECT * FROM potatokaka_users_certificates WHERE token='$token'";
      $sql = "SELECT * FROM potatokaka_users_certificates WHERE token=?";
      $stmt = $conn->prepare($sql);
      $stmt->bind_param("s", $token);
      $stmt->execute();
      //$result = $conn->query($sql);
      $result = $stmt->get_result();
      
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
    //$sql = "SELECT * FROM potatokaka_comments WHERE id ='$id'";
    $sql = "SELECT * FROM potatokaka_comments WHERE id =?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $id);
    $stmt->execute();

    //$result = $conn->query($sql);
    $result = $stmt->get_result();
    $row = $result->fetch_assoc();
    return $row['content'];
  }

  // 出現刪除的按鈕
  function renderDeleteBtn($id) {
    // 原本 echo 的寫法，在 function 時要改成 return 
    return "
      <div class='post__func'>
        <button class='btn'><a href='update_post.php?id=$id'>Edit</a></button>
        <button class='btn'><a href='handle_delete_post.php?id=$id'>Delete</a></button>
      </div>
    ";
  }

?>