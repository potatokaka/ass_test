<?php
  include_once('check_login.php');
  require_once('conn.php');
  require_once('utils.php');

  // 驗證資料是否為空
  if (
    isset($_POST['content']) && 
    !empty($_POST['content'])
  ) {
    $content = $_POST['content'];
    
    //寫入資料
    $sql = "INSERT INTO potatokaka_comments(content, username) VALUES('$content', '$user')";
    
    if ($conn->query($sql)) {
      // Server Side Redirect
      header('Location: ./index.php');
    } else {
      // Client Side Redirect
      printMessage($conn->error, './index.php');
    }
  
  } else {
    printMessage('請輸入內容', './index.php');
  }


  

?>

