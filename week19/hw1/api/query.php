<?php 
  require_once('../conn.php');
  $connection = $conn;

  function getAllTodos() {
    global $connection; // 全域
    $sql = "SELECT * FROM potatokaka_todoItems ORDER BY created_at DESC";
    $result = $connection->query($sql);

    if ($result->num_rows > 0) {
      while ($row = $result->fetch_assoc()) {
        $response[] = $row;
      }
      echo json_encode($response, JSON_UNESCAPED_UNICODE);
    } else {
      echo json_encode(array(
        'result' => 'failure',
        'message' => '新增失敗'
      ), JSON_UNESCAPED_UNICODE);
    }
  }

  function getTodo($id) {
    global $connection;
    $sql = "SELECT * FROM potatokaka_todoItems WHERE id = ?";
    $stmt = $connection->prepare($sql);
    $stmt->bind_param("i", $id);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
      while ($row = $result->fetch_assoc()) {
        $response[] = $row;
      }
      echo json_encode($response, JSON_UNESCAPED_UNICODE);
    } else {
      echo json_encode(array(
        'result' => 'failure',
        'message' => '新增失敗'
      ), JSON_UNESCAPED_UNICODE);
    }
  }
  
  function addTodo($content) {
    global $connection;
    $content = $_POST['content'];

    $sql = "INSERT INTO potatokaka_todoItems(content) VALUES(?)";
    $stmt = $connection->prepare($sql);
    $stmt->bind_param("s", $content);
    
    if ($stmt->execute()) {
      $result = $stmt->get_result();
      $row = $result->fetch_assoc();
      $arr = array(
        'result' => '新增成功', 
        'time' => $row['created_at'],
      );
      echo json_encode($arr, JSON_UNESCAPED_UNICODE);
    } else {
      echo json_encode(array(
        'result' => 'failure',
        'message' => '新增失敗'
      ), JSON_UNESCAPED_UNICODE);
    }
  }

  // function updateTodo($id) {
  //   global $connection;

  //   parse_str(file_get_contents("php://input"), $post_vars);
  //   $content = $post_vars['content'];

  //   $sql = "UPDATE potatokaka_todoItems SET content = ? WHERE id = ? ";
  //   $stmt = $connection->prepare($sql);
  //   $stmt->bind_param("si", $content, $id);
  //   $stmt->execute();
    
  //   if ($stmt->execute()) {
  //     //echo "刪除成功";
  //     echo json_encode(array(
  //       'result' => 'success',
  //       'message' => '更新成功'
  //     ), JSON_UNESCAPED_UNICODE);
  //   } else {
  //     echo json_encode(array(
  //       'result' => 'failure',
  //       'message' => '更新失敗'
  //     ), JSON_UNESCAPED_UNICODE);
  //   }
  // }

  function updateTodo($id) {
    global $connection;

    parse_str(file_get_contents("php://input"), $post_vars);
    $content = $post_vars['content'];
    $state = $post_vars['state'];

    if (isset($content)) {
      $sql = "UPDATE potatokaka_todoItems SET content = ? WHERE id = ? ";
      $stmt = $connection->prepare($sql);
      $stmt->bind_param("si", $content, $id);
    } else if (isset($state)) {
      $sql = "UPDATE potatokaka_todoItems SET `state` = ? WHERE id = ? ";
      $stmt = $connection->prepare($sql);
      $stmt->bind_param("si", $state, $id);
    }
    
    if ($stmt->execute()) {
      echo json_encode(array(
        'result' => 'success',
        'message' => '更新成功'
      ), JSON_UNESCAPED_UNICODE);
    } else {
      echo json_encode(array(
        'result' => 'failure',
        'message' => '更新失敗'
      ), JSON_UNESCAPED_UNICODE);
    }
  }

  function deleteTodo($id) {
    global $connection; // 全域
    $sql = "DELETE FROM potatokaka_todoItems WHERE id = ?";
    $stmt = $connection->prepare($sql);
    $stmt->bind_param("i", $id);
    $stmt->execute();
    
    if ($stmt->execute()) {
      //echo "刪除成功";
      echo json_encode(array(
        'result' => 'success',
        'message' => '刪除成功'
      ), JSON_UNESCAPED_UNICODE);
    } else {
      echo json_encode(array(
        'result' => 'failure',
        'message' => '刪除失敗'
      ), JSON_UNESCAPED_UNICODE);
    }
  }

  
?>