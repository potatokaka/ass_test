<?php
  require_once('conn.php');
  require_once('utils.php');

  // 驗證資料是否為空
  if (
    isset($_POST['username']) && 
    isset($_POST['password']) &&
    !empty($_POST['username']) &&
    !empty($_POST['password']) 
  ) {
    $username = $_POST['username'];
    $password = $_POST['password'];
    
    //檢查user是否存在
    $sql = "SELECT * FROM potatokaka_users WHERE  username = '$username'";
    $result = $conn->query($sql); //執行的結果

    if (!$result) {
      printMessage($conn->error, './login.php');
      exit(); //離開整個 PHP，像是 JS 的 return 的功能
    }

    if ($result->num_rows <= 0) {
      printMessage('帳號密碼錯誤', './login.php');
      exit();
    }

    $row = $result->fetch_assoc();
    $hash_password = $row['password']; //資料庫中已被 hash 的密碼

    //確認密碼是否相同
    if (password_verify($password, $hash_password)) {
      // // 使用 php 內建功能，加入token
      // $token = uniqid();
      // $sql = "INSERT INTO potatokaka_users_certificates(username, token) VALUES('$username', '$token') ";

      // // 把 cookie 原本的 username 換成 token
      //setcookie("token", $token, time()+3600*24);
      
      setToken($conn, $username);
      printMessage('登入成功', './index.php');
    } else {
      printMessage('帳號密碼錯誤', './login.php');
      exit();
    }
  
  } else {
    printMessage('請輸入帳號密碼', './login.php');
    exit();
  }

  

?>

