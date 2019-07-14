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
    $parent_id = $_POST['parent_id'];
    
    //寫入資料 
    //$sql = "INSERT INTO potatokaka_comments(content, username) VALUES('$content', '$user')";
    $sql = "INSERT INTO potatokaka_comments(content, username, parent_id) VALUES(?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ssi", $content, $user, $parent_id);
 
    if ($stmt->execute()) {
      $last_id = $stmt->insert_id;

      $arr = array(
        'result' => '新增成功', 
        'id' => $last_id, 
        'nickname' => $nickname,
      );
      echo json_encode($arr);

      // header('Location: ./index.php');
    } else {
      echo json_encode(array(
        'result' => 'failure',
        'message' => '新增失敗'
      ));

      //printMessage($conn->error, './index.php');
    }
  
  } else {
    printMessage('請輸入內容', './index.php');
  }


?>

