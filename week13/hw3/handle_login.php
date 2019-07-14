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
    // 1. 先宣告一個 statement，且先把 query 準備好
    $stmt = $conn->prepare("SELECT * FROM potatokaka_users WHERE username = ?");
    // 2. bind parameters 加入參數。 s 代表 string
    $stmt->bind_param("s", $username);
    // 3. 執行 statement
    $stmt->execute(); 
    // 4. 取得抓回來的資料
    $result = $stmt->get_result();

    // $sql = "SELECT * FROM potatokaka_users WHERE username = '$username'";
    // $result = $conn->query($sql); //執行的結果

    if (!$result) {
      printMessage($conn->error, './login.php');
      exit();
    }

    if ($result->num_rows <= 0) {
      printMessage('帳號密碼錯誤', './login.php');
      exit();
    }

    $row = $result->fetch_assoc();
    $hash_password = $row['password']; //資料庫中已被 hash 的密碼

    //確認密碼是否相同
    if (password_verify($password, $hash_password)) {
      //setToken($conn, $username); //自己寫 Token 

      // PHP 內建的 Session 寫法
      session_start();
      $_SESSION['username'] = $row['username'];
      $_SESSION['nickname'] = $row['nickname'];

      $user = $_SESSION['username'];

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

