## 請以自己的話解釋 API 是什麼
API (Application Programming Interface) 從字面上的解釋是「應用程式界面」。舉例來說，日本拉麵店的食券眅賣機所提供的點餐服務，會經過的流程是：  
1. 客人按下點餐面版的拉麵按鈕 (Request)
2. 廚房接到訂單後開始製作，再提供拉麵給客人 (Response)

其中，點餐的面版，就等同於 API 的功能，是交換資料的一個界面；而廚房的功能則像是資料庫。  
因為拉麵店不方便讓每位客人都跑進廚房點餐，容易造成廚房的混亂與食安問題，所以才會需要點餐販賣機的服務界面，作為與客人溝通資訊的接口。這就好比提供服務的公司，不會直接開放資料庫，讓使用者無限度地自由抓取資料，而是開放一個 API 界面，定義一個特定的資料交換格式，讓使用者可以存取服務內容。

而最常見的 API 是透過網路來傳輸，也稱作 Web API。另外，也有不需要透過網路串接，在作業系統下操作的進行方式。

## 請找出三個課程沒教的 HTTP status code 並簡單介紹
- 403 Forbidden：禁止使用此資源，禁止執行訪問   
- 500 Internal Server Error：伺服器端發生未知或無法處理的錯誤    
- 502 Bad Gateway：不正確的閘道或伺服器負荷過重  


## 假設你現在是個餐廳平台，需要提供 API 給別人串接並提供基本的 CRUD 功能，包括：回傳所有餐廳資料、回傳單一餐廳資料、刪除餐廳、新增餐廳、更改餐廳，你的 API 會長什麼樣子？請提供一份 API 文件。

### Ramen API
Ramen API 服務，提供餐廳資料顯示、新增、修改、刪除餐廳資訊的功能。

### Getting Started
Base URL： `https://loveRamen.com/api/ramen`

| 說明     | Method | path       | 參數                   | Example             |
|--------|--------|------------|----------------------|----------------|
| 獲取餐廳列表 | GET    | /ramen     | _limit:限制回傳資料數量           | /ramen?_limit=10 |
| 獲取單一餐廳 | GET    | /ramen/:id | 無                    | /ramen/10      |
| 新增餐廳   | POST   | /ramen     | id:餐廳ID name: 餐廳名稱 | /ramen?name="小山屋"              |
| 刪除餐廳   | DELETE   | /ramen/:id     | 無 | /ramen/10               |
| 更改餐廳資訊   | PATCH   | /ramen/:id     | id:餐廳ID name: 餐廳名稱 | /ramen/10?name="小山屋"             |


