<?php
  require_once('conn.php');
  require_once('utils.php');

  // 驗證資料是否為空
  if (
    isset($_POST['username']) && 
    isset($_POST['password']) &&
    isset($_POST['nickname']) &&  
    !empty($_POST['username']) &&
    !empty($_POST['password']) &&
    !empty($_POST['nickname'])
  ) {
    $username = $_POST['username'];
    // 將密碼 Hash 處理
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT);
    $nickname = $_POST['nickname'];
    
    //寫入資料
    //$sql = "INSERT INTO potatokaka_users(username, password, nickname) VALUES('$username', '$password', '$nickname')";
    $sql = "INSERT INTO potatokaka_users(username, password, nickname) VALUES(?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sss", $username, $password, $nickname);

    if ($stmt->execute()) {
      //註冊成功後，設制 cookie
      setToken($conn, $username);
      printMessage('註冊成功', './index.php');
    } else {
      printMessage($conn->error, './register.php');
    }
  
  } else {
    printMessage('請輸入帳號密碼', './register.php');
  }


  

?>

