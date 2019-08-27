<?php 
  header('Access-Control-Allow-Origin: *');
  header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, PATCH');
  header('Access-Control-Allow-Headers: X-Requested-With, Content-Type, Accept');

  require_once('../conn.php');
  include_once('query.php');

  // 路由，上線時要調整數字
  $uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
  $uri = explode( '/', $uri );
  $id = '';
  if (isset($uri[6])) {
    $id = (int) $uri[6];
  };

  $method = $_SERVER['REQUEST_METHOD'];

  switch($method) {
    case 'GET':
      if ($id) {
        getTodo($id);
      } else {
        getAllTodos();
      }
      break;
    
    case 'POST':
      addTodo($content);
      break;

    case 'PATCH':
       updateTodo($id);
       //updateState($id, $state);

      // if ($content) {
      //   updateTodo($id);
      // };
      // if ($state) {
      //   updateState($id);   
      // }

      break;

    case 'DELETE':
      deleteTodo($id);
      break;
    
    default:
      break;
    
  }

?>