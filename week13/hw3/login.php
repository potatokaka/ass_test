<?php
  include_once('check_login.php');
  include_once('conn.php');
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>留言板-Login</title>
  <link rel="stylesheet" href="css/reset.css">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
  <link rel="stylesheet" href="css/style.css">

</head>
<body>
  <?php include_once('templates/navbar.php') ?>

  <div class="container">
    <div class="main">
      <h2>登入</h2>
      <form method="POST" action="./handle_login.php" class="register-form">
        <label for="username">帳號</label><br/>
        <input id="username" name="username" class="input-underlined" placeholder="請填寫帳號"><br/>
        <label for="password">密碼</label><br/>
        <input id="password" name="password" class="input-underlined" type="password" placeholder="請填寫密碼"><br/>
        <input type="submit" value="Sign In" class="btn">
      </form>
    </div>
  </div>

  <script src='./'></script>
</body>
</html>
