<?php
  include_once('conn.php');
  include_once('check_login.php');
  include_once('utils.php');
?>

<!-- 子留言 -->
<div class='sub-posts'>
  <?php
  $parent_id = $row['id'];

//   $sql_sub = "SELECT C.content, C.created_at, C.id, U.nickname, U.username
//   FROM potatokaka_comments as C LEFT JOIN potatokaka_users as U ON C.username = U.username WHERE C.parent_id =  $parent_id ORDER BY created_at ASC ";
   
   $sql_sub = "SELECT C.content, C.created_at, C.id, U.nickname, U.username
   FROM potatokaka_comments as C LEFT JOIN potatokaka_users as U ON C.username = U.username WHERE C.parent_id = ? ORDER BY created_at ASC ";
    $stmt_sub = $conn->prepare($sql_sub);
    $stmt_sub->bind_param("i", $parent_id);
    $stmt_sub->execute();
    $result_sub = $stmt_sub->get_result();


  //$result_sub = $conn->query($sql_sub);

  if ($result_sub->num_rows > 0) {
      // 先賦值，再去看 $row是不是 true
      while ($row_sub = $result_sub->fetch_assoc()) {

        // 判斷是否為 原 po 作者
        if ($row_sub['username'] === $user) {
            echo "<div class='sub-post active'>";
        } else {
            echo "<div class='sub-post'>";
        }

        echo    "<div class='post__nickname'>". escape($row_sub['nickname']) ."</div>";
        echo    "<div class='post__date'>" . escape($row_sub['created_at']) . "</div>";
        echo    "<div class='post__content'>" . escape($row_sub['content']) . "</div>";
        echo "</div>";

        if ($user ===  $row_sub['username']) {
            echo renderDeleteBtn($row_sub['id']);
        }
      }
  }
  ?>
  <form method="POST" action="./handle_add_post.php" class="sub-message">
      <input type="hidden" value="<?php echo escape($row['id'])?>" name="parent_id">
      <div class="message-tx">Response</div>
      <textarea name="content" id="message__box" cols="30" rows="4" placeholder="leave a comment"></textarea>
      <?php  
      if ($user) {
          echo "<input type='submit' value='Send' class='btn'>";
      } else {
          echo "<button class='btn'><a href='login.php'>Sign In First</a></button>";
      }
      ?>
  </form>
</div>