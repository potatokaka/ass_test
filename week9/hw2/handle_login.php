<?php
  //引入 連線資料庫的程式
  require_once('./conn.php');

  // 用$_post[' '] 去抓表單的輸入值
  $username = $_POST['username'];
  $password = $_POST['password'];

  // 1. 檢查表單欄位不得為空
  if (empty($username) || empty($password)) {
    echo "<script>
      alert('請輸入帳號密碼')
      location = 'login.php';
    </script>";
  }

  // 2. 將確認欄位資料
  $sql = "SELECT * FROM potatokaka_users WHERE username = '$username' AND password = '$password'";
  $result = $conn->query($sql);
  $row = $result->fetch_assoc();

  // 3. 確認是否寫入成功
  if ($result->num_rows > 0) {
    setcookie("user_id", $row['id'], time()+3600*24);
    echo "<script>
    alert('登入成功')
    location = 'index.php';
  </script>";
  } else {
    echo "<script>
      alert('請輸入正確的帳號密碼')
      location = 'login.php';
    </script>";
  }
?>