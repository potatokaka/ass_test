### 資料庫名稱：comments

| 欄位名稱 | 欄位型態 | 說明 |
|----------|----------|------|
|  id  |    int     | 留言 id (AI)     |
|  content  |    text      | 留言內容     |
|  user_id  |    int      | 使用者 id    |
|  created_at  |    datetime      | 留言時間 (Default: CURRENT_TIMESTAMP)     |

### 資料庫名稱：users
| 欄位名稱 | 欄位型態 | 說明 |
|----------|----------|------|
|  id  |    int     | 使用者 id (AI)     |
|  username |    varchar (16)      | 使用者帳號     |
|  password |    varchar (16)      | 使用者密碼     |
|  nickname  |    varchar (64)      | 暱稱     |
|  created_at  |    datetime      | 留言時間 (Default: CURRENT_TIMESTAMP)     |

### 前台
- index.php
    - 顯示最新的前五十筆留言，最後留的顯示在最上面
    - 顯示每則留言者的暱稱及留言內容與時間
    - 新增留言的文字輸入框、登入會員連結、註冊連結
- handle_add.php
    - 真正處理新增留言的功能

### 後台
- register.php
    - 使用者註冊頁面
- handle_register.php
    - 真正處理使用者註冊的功能
- login.php
    - 使用者登入頁面
- handle_login.php
    - 真正處理使用者登入功能
- logout.php
    - 使用者登出頁面