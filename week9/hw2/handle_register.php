<?php
  //引入 連線資料庫的程式
  require_once('./conn.php');

  // 用$_post[' '] 去抓表單的輸入值
  $username = $_POST['username'];
  $password = $_POST['password'];
  $nickname = $_POST['nickname'];

  // 檢查資料
  if (empty($username) || empty($password) || empty($nickname)) {
    echo "<script>
      alert('請輸入欄位內容');
      window.location = 'register.php';
    </script>";
  }

  //確認是否有註冊成功
  $isRegistered = "SELECT * FROM potatokaka_users WHERE username = '$username'";
  $result_isRegistered = $conn->query($isRegistered);
  $sql = "INSERT INTO potatokaka_users(username, password, nickname) VALUES('$username', '$password', '$nickname')";
  
  if ($result_isRegistered->num_rows > 0) {
    echo "<script>
      alert('此帳號已註冊過囉');
      window.location = 'register.php';
    </script>";
  } else {
    $conn ->query($sql);
    echo "<script>
      alert('註冊成功');
      window.location = 'login.php';
    </script>";
  }

?>