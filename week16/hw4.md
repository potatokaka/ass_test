## CSS 預處理器是什麼？我們可以不用它嗎？
CSS 預處理器是基於 CSS 擴展出的語言，目的是為了解決 CSS 撰寫時的問題，例如，程式碼重覆性太高、大型專案修改不易…等問題，以提升 CSS 的開發效率以及維護性。預處理器可以使用變數 (variables)、巢狀 (Nesting)、混用 (Mixin)、繼承(extend)…等原生不支援的 CSS，以及切分檔案，最後再透過預處理器將內容轉譯為 CSS。目前常見的是 Sass、Less 和 Stylus。

當然可以不使用 CSS 預處理器，就像是不使用 jQuery 而使用原生的 JavaScript。但是在大型規模專案開發時，就會較難管理和維護。

## 請舉出任何一個跟 HTTP Cache 有關的 Header 並說明其作用。
Cache 的機制是用來減少 Server 負載，以及縮短 Client 端資源等待的時間，來優化網頁載入的速度。藉由下圖可以先從 Client 端向 Server 發出請求的過程來了解 HTTP Cache：
![](https://i.imgur.com/zyfUWfR.png)
圖片來源- [新手坑：讓人又愛又恨的 HTTP Caching](https://medium.com/frochu/http-caching-3382037ab06f)


- Expires：是最早在 HTTP 1.0 就存在的 Header，用法是 `Expires: Wed, 5 Mar 2018 11:00:00 GMT`，但由於 Client 端的日期有可能會和伺服器端時間不同步，因此在 HTTP 1.0 之後都建議使用  Cache-Control Header。Cache-Control 詳細如下圖：

![](https://i.imgur.com/1xyfUd2.png)
圖片來源-[Camel's Blog](Https://blog.camel2243.com/2018/09/23/http-http-header%EF%BC%8C-cache-control-expires-%E7%94%A8%E6%B3%95%E8%AA%AA%E6%98%8E/)

- max-age：直接設定 cache 過期的時間，`max-age=30` 就是過 30 秒會過期
- no-store：設定不要 cache，每次都須發送 request 去要資料
- no-cache：每次都發送 request 去確認檔案是否有更動，如有更動時才會重載資料


## Stack 跟 Queue 的差別是什麼？
- Stack (堆疊)：Last In, First Out，先進後出。可以想像成抽取式衛生紙，一張一張往上疊加，要使用的時候都是從最上面一張(最新放入的)開始拿，而最一開始放入的紙則是最後才會被使用。

- Queue (佇列)：First In, First Out，先進先出。如同排隊一般，先進到隊伍中的人，會依序進行輸出。

## 請去查詢資料並解釋 CSS Selector 的權重是如何計算的（不要複製貼上，請自己思考過一遍再自己寫出來）
- 權重高低：!important > 行內樣式 > id > class、psuedo-class (偽類)、attribute（屬性選擇器） > 標籤 > ＊、繼承

| CSS Selector               | 權重    |
| --------------- | ------- |
| !important      | 1, 0, 0, 0, 0  |
| 行內樣式        | 0, 1, 0, 0, 0 |
| ID              | 0, 0, 1, 0, 0 |
| class、psuedo-class、attribute | 0, 0, 0, 1, 0 |
| 標籤 Element            | 0, 0, 0, 0, 1 |
| ＊、繼承        | 0, 0, 0, 0, 0 |

- 權重可以疊加但不會進位，例如：
    - body div ul li a span 總共 6 個 element ，因此加起來是 (0, 0, 0, 6)
    - form input[type=password] 兩個 element 和一個 attribute，加起來是 (0, 0, 1, 2)

- 權重高的會覆蓋掉權重低的
- 如果權重相同時，會依照就近原則，後寫的會覆蓋過先寫的樣式
