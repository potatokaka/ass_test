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
            <button class="btn-no-outline"><a href="register.php">Become a Member</a></button>
            <button class="btn"><a href="login.php">Sign In</a></button>
        </div>
    </div>

    <div class="container">
        <div class="main v-center">
            <h2>註冊帳號</h2>
            <h4>本站為練習用網站，因教學用途刻意忽略資安的實作，註冊時請勿使用任何真實的帳號或密碼</h4>
            
            <form method="POST" action="./handle_register.php" class="register-form">
                <label for="username">帳號</label><br/>
                <input id="username" name="username" class="input-underlined" placeholder="請填寫帳號"><br/>
                <label for="password">密碼</label><br/>
                <input id="password" name="password" class="input-underlined" type="password" placeholder="請填寫密碼"><br/>
                <label for="nickname">暱稱</label><br/>
                <input id="nickname" name="nickname" class="input-underlined" placeholder="請填寫暱稱"><br/>
                <input type="submit" value="Register" class="btn">
            </form>

        </div>
    </div>
    <script src='./'></script>
</body> 
</html>
