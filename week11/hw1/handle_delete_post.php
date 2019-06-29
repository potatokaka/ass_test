<?php
  include_once('check_login.php');
  require_once('conn.php');

  if (isset($_GET['id'])) {
    $id = $_GET['id'];
    $sql = "DELETE FROM potatokaka_comments WHERE id = $id";

    if ($conn->query($sql)) {
      printMessage('刪除成功', './index.php');
    } else {
      printMessage('無法刪除', './index.php');
    }

  }

?>

