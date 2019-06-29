<?php
  include_once('check_login.php');
  include_once('utils.php');
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>留言板-Home</title>
  <link rel="stylesheet" href="css/reset.css">
  <link rel="stylesheet" href="css/style.css">

</head>
<body>
  <!-- 上方導覽列 -->
  <?php include_once('templates/navbar.php') ?>

  <div class="container">
    <div class="main">
        <h4>本站為練習用網站，因教學用途刻意忽略資安的實作，註冊時請勿使用任何真實的帳號或密碼</h4>

        <form method="POST" action="./handle_update_post.php" class="message">
            <div class="message-tx">Edit Responses</div>
            <textarea name="content" id="message__box" cols="30" rows="8"><?php echo getComments($conn, $_GET['id']); ?></textarea>
            <input type="hidden" name="id" value="<?php echo $_GET['id'] ?>">
            <input type='submit' value='Update' class='btn'>
            <?php  
                echo "<button class='btn'><a href='handle_delete_post.php?id=" . $_GET['id'] . "'>Delete</a></button>";
            ?>
        </form>


    
    </div> 
    
    

    

  </div>

  <script src='./' type='text/javascript'></script>
</body>
</html>