## 什麼是 Ajax？
Ajax 是 Asynchronous JavaScript and XML 的簡寫，字面上的意思是「非同步的 JavaScript 和 XML」。其中 JavaScript 是使用的程式語言， XML 則是資料交換的格式，因為此技術早期是使用 XML 格式來傳資料，但目前最通用的交換資料格式為 JSON。

Ajax 是一種非同步網頁處理資料的技術。首先，「同步」的概念是，依序一行一行去執行 JavaScript 的程式，但常常會遇到的狀況是，使用 API 發送 request 到 server 端時，等待 response 傳回來的時間太長，此時整個頁面裡的其他程式碼會停止載入，呈現停滯假死狀態，因此造成頁面載入耗時，操作不穩定而破壞使用者體驗。而「非同步」的方式，是非同步載入的流程，也就是發送 request 之後，不用等 response 回來，頁面可以同時執行其他程式，一旦 response 回傳之後，再使用 callback function 來處理回傳的資料。

基於「非同步」的特性，Ajax 的最大優點是，網頁不需換頁就可以動態更新頁面。舉一個常見的例子是 Gamil，點選其中一個頁籤，就會重新載入新的資料，而不需要重新整理頁面，讓程式能即時更新內容，提升網頁的互動性與速度。

## 用 Ajax 與我們用表單送出資料的差別在哪？
表單送出資料的方式是，提交表單時，會透過瀏覽器向 server 端發送 request，當伺服器處理接收到的資料後回傳 response ，再透過瀏覽器將 response 載入頁面上。這個方式，每一個動作都需要經歷一連串「request → 資料處理 → response → 頁面重新載入」的過程，在尚未得到 response 之前，使用者都不能對頁面進行任何的存取，此時等待回應的漫長狀態，常被稱為「World Wide Wait」。

而 Ajax 與表單不同的方式是，當 Ajax 發出 request 後，在等待 server 端回應的過程中，可以繼續執行後續的程式碼，等收到 response 後，瀏覽器僅需更新部份的資訊，讓網頁能更迅速回應 client 端的操作。總結來說， Ajax 將回傳訊息的處理程序分批次進行，且因為在伺服器和瀏覽器之間交換次數減少，大幅改善瀏覽器效能、增加響應速度與用戶體驗。

## JSONP 是什麼？
JSONP 全名是 JSON with Padding，是一種跨網域取得資料的技術。瀏覽器因為設置同源政策 (same-origin policy) 的限制，只允許同一網域互相存取資料，以確保網路安全性。而 JSONP 的本質是運用 `<script>` 標籤可以跨網域的特性，來達成跨網域的請求。此為一種非正式傳輸協議，作法是用 GET 的方式傳送請求至跨來源的伺報器，其中會傳遞一個參數，也就是一個 callback Function，server 端再將資料以 callback Function 的方式包裹 JSON 數據，回傳至 client 端。當資料傳輸完成之後，client 端再執行 server 端回傳的 callback function 以取得結果。其缺點是不支援 POST 其他類型的 HTTP 請求。

雖然 JSONP 的功能和 Ajax 感覺有點類似，總體來說，Ajax 的運作是通過 XmlHttpRequest 取得資訊；而 JSONP 的本質是使用動態添加 `<script>` 標籤來調用跨域服務器的資料。


## 要如何存取跨網域的 API？
主要有二個方式：  
1. 使用上述的 JSONP：缺點是單次可傳送的資料有限，且只能使用 GET 參數來帶資料，無法使用其他的方式。  

2. CORS：這是相較於上述，比較好的方式。全名是 Cross-Origin Resource Sharing，也就是跨來源資源共享的方式。當瀏覽器與伺服器溝通時，是透過 http 的 header 進行資料交換，因此透過 header 的設定，可以針對瀏覽器在跨網域連線時存取資料權限去做規範。也就是 server 端在 response 的 header 中設定 `Access-Control-Allow-Origin`，就可以允許跨來源 request 的資料存取。


## 為什麼我們在第四週時沒碰到跨網域的問題，這週卻碰到了？
本周因為是透過瀏覽器來發送 request，而基於瀏覽器的同源政策的限制，因此會有跨網域的問題需要特別注意。相較於第四周，因為是使用 node.js 來發送 request 給 server 端，而 node.js 不是經由瀏覽器作為中介，所以就不會有瀏覽器同源政策而產生跨網域的問題。
