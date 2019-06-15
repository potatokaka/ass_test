<?php
  //引入 連線資料庫的程式
  require_once('./conn.php');

  // 用$_post[' '] 去抓表單的輸入值
  $content = $_POST['content'];
  $user_id = $_POST['user_id'];
 

  // 1. 檢查表單欄位不得為空
  if (empty($content) || empty($user_id)) {
    // 防止錯誤
    die('請檢查資料');
  }


  // 2. 將欄位資料插入
  $sql = "INSERT INTO potatokaka_comments(content, user_id) VALUES('$content', '$user_id')";
  // 執行 SQL 執令
  $result = $conn->query($sql);


  // 3. 確認是否寫入成功
  if ($result) {
    //成功寫入資料庫的話，將頁面導回 admin.php
    //輸出一個 http 的 response Header
    header('location: ./index.php');
  } else {
    echo "Failed, " . $conn->error;
  }
?>