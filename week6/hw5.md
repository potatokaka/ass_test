## 請找出三個課程裡面沒提到的 HTML 標籤並一一說明作用。
- `<canvas>`：  
HTML5 新增的畫布標籤，需搭配 JavaScript 操作，在網頁上描繪線條、圖形、動畫、遊戲…等功能。  
`＜canvas id=”abc”  width=”500”  height=”500”＞圖形內容＜/canvas＞`  

- `<video>`：  
HTML5 影片標籤，可以在網頁裡加入影片，減輕外掛程式的需求。其中還能透過屬性設定影片尺寸、影片播放控制列、自動播放、重覆播放…等功能。但各主流瀏覽器支援的格式有所不同，使用時需考慮瀏覽器兼容性問題。
`<video src="movie.ogg" controls></video>`  

- `<figure>`：  
HTML5 專門放置圖片的標籤，`<figure>` 是一個完整內容的區塊，再將圖片與標題包覆在 `<figure>` 元素裡面。此為 HTML5 新增的語意化標籤，用以加強文件的結構化，以利搜尋引擎辨識搜尋，以及後續維護管理。  
```
<figure>
    <figcaption>Photo Title</fugcaption>
    <img src="images/pic1.jpg" />
    <img src="images/pic2.jpg" />
    <img src="images/pic3.jpg" />
</figure>
```

## 請問什麼是盒模型（box modal）
網頁中每個元素都被視為一個矩形(盒模型)，包括 `html`、`body` 都是，盒子是一層包著一層建構而來的，由內而外分別是：
- content (內容)：元素內容本身的大小
- padding (內距)：content 到 border 的距離
- border (邊框)：外框線
- margin (外邊距)：border 之外與其他元素的距離

盒子代表元素所占的空間，而透過 CSS box-sizing 的屬性設定，可以去定義元素是怎麼構成的。
- `content-box` ：  
預設的盒模型，元素所占的空間長寬是 content + padding + border。換句話說，元素的總寬高是元素內容的寬度(width) ╱ 高度(height)，另外再加上內距和邊框。  

- `border-box`：  
基於上述的預設盒模型不易算出總寬高，此解析模式目的是方便控制元素的總寬高。讓網頁佈局更加直觀，只需要對元素設定 width 、 height ，總寬度 ╱ 高度就固定不變，也就是將內距和邊框納進來一起計算。

## 請問 display: inline, block 跟 inline-block 的差別是什麼？
- `display: inline` ：  
行內元素，會與其他元素並排在一行顯示，無法對元素設定寬度、高度、padding、border、margin。 `<span>`、`<a>`、`<img>`、`<input>` 的預設值就是 inline。常見於對同一行文字，對特定的文字做超連結設定 `<a>` 樣式。  

- `display: block` ：  
元素會自動佔滿一整行的寬度，可以針對寬度、高度、padding、border、margin 做設定。`<div>`、`<p>`、`<ul>`、`<li>` 的預設值就是 block。常見於文章段落 `<p>` 的設定，可與上下其他元素做區隔。  

- `display: inline-block`：  
同時兼具上述二者的屬性，具有行內元素可與其他元素並排同一行，且可以設定元素寬高…等特性。常用於導覽列的選單設定，各選單排列在同一行，但彼此間可設定間距區隔開來。

## 請問 position: static, relative, absolute 跟 fixed 的差別是什麼？
- `position: static` ：  
網頁元素預設的排版定位方式，由上至下，由左至右的排版方式。無法自定 top、left、bottom、right 的位置。  

- `position: relative` ：  
相對定位，如果沒有特別增加屬性設定時，呈現的方式同 `position: static`。另外可以自行調整元素 top、left、bottom、right的設定，會依據該元素原先的位置，相對地去調整定位，且不會影響到其他元素的位置。  

- `position: absolute` ：  
絕對定位，元素排版會跳離原本的邏輯，往上一層去尋找非 `position: static` 的父元素，作為定位參考點，去做相對的位移。一般的作法是將外層容器的父元素加上 `position: relative`，而將欲調整的內層元素設定為`position: absolute`。但若上層都是找不到定位的參考點時，則會以 `<body>` 作為相對位置的定位。常用於 lightbox 視窗右上角的關閉按鈕。  

- `position: fixed` ：  
概念類似 `position: absolute` 的絕對定位，只不過它是以瀏覽器的 viewport 來作定位點，可將元素固定在頁面上，而不會因為頁面上下捲動而改變位置。常用於網頁的導覽列，將網站 Logo 和選單固定在網頁的上方，方便使用者隨時點選切換頁面。
