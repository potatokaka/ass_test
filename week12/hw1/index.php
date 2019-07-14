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

        <form method="POST" action="./handle_add_post.php" class="message">
            <input type="hidden" value="0" name="parent_id">
            <div class="message-tx">Responses</div>
            <textarea name="content" id="message__box" cols="30" rows="8" placeholder="leave a comment"></textarea>

            <?php  
            if ($user) {
                echo "<input type='submit' value='Send' class='btn'>";
            } else {
                echo "<button class='btn'><a href='login.php'>Sign In First</a></button>";
            }
            ?>
        </form>

        <!-- 頁碼功能 -->
        <?php include_once('handle_pagination.php')?>

        <div class="posts">
            <?php 
                // $sql = "SELECT C.content, C.created_at, C.id, U.nickname, U.username
                //     FROM potatokaka_comments as C LEFT JOIN potatokaka_users as U ON C.username = U.username ORDER BY created_at DESC LIMIT $data_start, $page_limit";
                // $result = $conn->query($sql);

                // 改成預防 SQL Injection 寫法
                $sql = "SELECT C.content, C.created_at, C.id,  U.nickname, U.username
                    FROM potatokaka_comments as C LEFT JOIN potatokaka_users as U ON C.username = U.username WHERE C.parent_id = 0 ORDER BY created_at DESC LIMIT ?, ?";
                $stmt = $conn->prepare($sql);
                $stmt->bind_param("ii", $data_start, $page_limit);
                $stmt->execute();
                $result = $stmt->get_result();

                if ($result->num_rows > 0) {
                    // 先賦值，再去看 $row 是不是 true
                    while ($row = $result->fetch_assoc()) {
                        echo "<div class='post'>";
                        echo    "<div class='post__nickname'>". escape($row['nickname']) ."</div>";
                        echo    "<div class='post__date'>" . escape($row['created_at']) . "</div>";
                        echo    "<div class='post__content'>" . escape($row['content']) . "</div>";
                        
                        // 判斷是否為自己的文章，會出現刪除、修改的按鈕
                            if ($user ===  $row['username']) {
                                echo renderDeleteBtn($row['id']);
                            }
                            ?>

                            <!-- 子留言 -->
                            <?php include('templates/sub-comments.php'); ?>
                            
                            <?php
                        echo "</div>";
                    }
                }
            ?>
            

        </div>
        
        <!-- 頁碼 -->
        <?php include_once('templates/pagination.php')?>
        
    </div> 
    

  </div>

  <script src='./' type='text/javascript'></script>
</body>
</html>