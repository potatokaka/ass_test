## 資料庫欄位型態 VARCHAR 跟 TEXT 的差別是什麼

|    | VARCHAR | TEXT |
|----------|----------|------|
|  設定長度  |    可以     | 不可以     |
|  設定預設值  |    可以     | 不可以     |
|  建立 index 索引  |    可以     | 不可以     |

由上述屬性來看，VARCHAR 適合用來存取短資料，以節省空間，例如：帳號、密碼的形式；TEXT 則適用於字數多的欄位，例如：文章內文。

## Cookie 是什麼？在 HTTP 這一層要怎麼設定 Cookie，瀏覽器又會以什麼形式帶去 Server？
由於 HTTP 本身是無狀態 (Stateless) 的協議，因此從 Client 端發出的 request ，每次都被視為一個獨立的請求。而為了使 Client 端與 Server 端保持聯繫與溝通的狀態，可以透過 Cookie 來達成。
Cookie 是伺服器傳送並儲存在 Client 端瀏覽器的小片段資料，瀏覽器會在下一次發送 request 時，回傳 cookie 至原本的伺服器，如此一來，即可確認 request 是來自同一個瀏覽器，來保持使用者的登入狀態、或是追蹤使用者的行為。而 cookie 有時效期限，時間到了會自動清除。

### Cookie 主要用於：
1. Session 管理  
帳號登入、購物車、使用者在購物網站填寫的email、地址…等

2. 個人化  
使用者設定、語系、佈景主題…等

3. 追蹤  
記錄使用者行為，例如：瀏覽時間、頁面…等

### Cookie 的設定：

伺服器收到瀏覽器的 request 後，回傳一個 HTTP Response 至瀏覽器，其中 header 就包含了 set-cookie 的資訊：
```
HTTP/1.0 200 OK
Content-type: text/html
Set-Cookie: yummy_cookie=choco
Set-Cookie: tasty_cookie=strawberry

[page content]
```
隨著每個 request，瀏覽器會使用 Cookie 標頭將所有先前儲存的 cookies 傳至伺服器：
```
GET /sample_page.html HTTP/1.1
Host: www.example.org
Cookie: yummy_cookie=choco; tasty_cookie=strawberry
```

參考資料：[MDN HTTP cookies](https://developer.mozilla.org/zh-TW/docs/Web/HTTP/Cookies)

## 我們本週實作的會員系統，你能夠想到什麼潛在的問題嗎？
- 沒有修改會員資料的功能
- 留言無法編輯或刪除
- 使用者密碼以明碼的形式儲存，密碼易被盜用
- cookie 的設定規則太簡單，容易被任意竄改冒用身份登入
