<?php  
	require_once('./conn.php');

	$is_login = false ;
	$user_id = '';

	if (isset($_COOKIE['user_id'])) {
		$is_login = true;
		$user_id = $_COOKIE['user_id'];
        $result_user = $conn->query("SELECT nickname FROM potatokaka_users WHERE id = " . $user_id);
        $row_user = $result_user->fetch_assoc();
	}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Week9 HW2-留言板</title>
    <link rel="stylesheet" href="css/reset.css">
    <link rel="stylesheet" href="css/style.css">
    
</head>
<body>

    <div class="nav">
        <h1><a href="index.php"><img src="https://image.flaticon.com/icons/svg/1665/1665577.svg" alt="Message Board" height="30"></a></h1>
        <div>
             <?php  
				if ($is_login) {
                    echo "<span class='welcome'>Hi! " . $row_user['nickname'] . "</span>";
                    echo "<button class='btn-no-outline'><a href='logout.php'>Sign Out</a></button>";
				} else {
					echo "<button class='btn-no-outline'><a href='register.php'>Become a Member</a></button>";
					echo "<button class='btn'><a href='login.php'>Sign In</a></button>";
				}
			?>
        </div>
    </div>

    <div class="container">
        <div class="main">
            
            <h4>本站為練習用網站，因教學用途刻意忽略資安的實作，註冊時請勿使用任何真實的帳號或密碼</h4>
            
            <form method="POST" action="./handle_add.php" class="message">
                <div class="message-tx">Responses</div>
                <textarea name="content" id="message__box" cols="30" rows="5" placeholder="leave a comment"></textarea>

                <?php  
					if ($is_login) {
						echo "<input type='submit' value='Send' class='btn'>";
					} else {
						echo "<button class='btn'><a href='login.php'>Sign In First</a></button>";
					}
                ?>
                <input type="hidden" name="user_id" value="<?php echo $user_id ?>">
            </form>

            <div class="posts">
                <?php 
                    $sql = "SELECT C.content, C.created_at, U.nickname
                        FROM potatokaka_comments as C LEFT JOIN  potatokaka_users as U ON C.user_id = U.id ORDER BY created_at DESC LIMIT 50";

                    $result = $conn->query($sql);

                    if ($result->num_rows > 0) {
                        while ($row = $result->fetch_assoc()) {
                            echo "<div class='post'>";
                            echo    "<div class='post__nickname'>". $row['nickname'] ."</div>";
                            echo    "<div class='post__date'>" . $row['created_at'] . "</div>";
                            echo    "<div class='post__content'>" . $row['content'] . "</div>";
                            echo "</div>";
                        }
                    }
                ?>

            </div>

        </div>
    </div>

    <script src='./'></script>
</body> 
</html>

