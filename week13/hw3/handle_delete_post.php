<?php
  include_once('check_login.php');
  require_once('conn.php');

  if (isset($_POST['id'])) {
    $id = $_POST['id'];
    
    //$sql = "DELETE FROM potatokaka_comments WHERE id = $id";
    $sql = "DELETE FROM potatokaka_comments WHERE id = ? or parent_id = ? AND username = ?";
    $stmt = $conn->prepare($sql);
    $stmt->prepare($sql);
    $stmt->bind_param("iis", $id, $id, $user);

    if ($stmt->execute()) {
      //printMessage('刪除成功', './index.php');  // ∵ ajax 不適合用 redirect
      
      // 輸出訊息
      echo json_encode(array(
        'result' => 'success',
        'message' => '刪除成功'
      ));
    } else {
      //printMessage('無法刪除', './index.php');

      // 從 server 輸出訊息
      echo json_encode(array(
        'result' => 'failure',
        'message' => '刪除失敗'
      ));
    }
    
  } else {
    echo json_encode(array(
      'result' => 'failure',
      'message' => '刪除失敗'
    ));
  }

?>

