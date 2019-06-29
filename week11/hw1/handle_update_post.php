<?php
  include_once('check_login.php');
  require_once('conn.php');
  require_once('utils.php');

  $id = $_POST['id'];
  $content = $_POST['content'];
  $sql = "UPDATE potatokaka_comments SET content = '$content' WHERE id = '$id' ";

  if ($conn->query($sql)) {
    printMessage('更新成功', './index.php');
  } else {
    printMessage('更新失敗', './index.php');
  }

?>

