## Bootstrap 是什麼？
Bootstrap 是網站和網路應用程式的前端開發框架，主要包含了 HTML、CSS 及 JavaScript 的內容框架。
- [bootstrap.css](https://github.com/twbs/bootstrap/blob/master/dist/css/bootstrap.css)：CSS 框架
- [bootstrap.js ](https://github.com/twbs/bootstrap/blob/master/dist/js/bootstrap.js)：JavaScript / jQuery 框架
- [glyphicons](https://getbootstrap.com/docs/3.3/components/)：圖示庫 (icon font set)

Bootstrap 原字面上的意思是「靴子的鞋帶」，在《The Adventures of Baron Munchausen》書中，主角靠著一條自己的鞋帶 (bootstrap)，將自身從一灘爛泥中拉上地面來，後來 Bootstrap 也衍生為自力更生、不求人的意涵。

因 Bootstrap 內建多款模組化的版型、表單、按鈕等元件，優點如下：
- 模組化的樣板，避免重工，節省 UI 設計時間
- 跨瀏覽器的兼容性
- 響應式設計
- 不同開發者使用相同的規範，可確保程式撰寫的一致性，加速開發及維護


## 請簡介網格系統以及與 RWD 的關係
網格系統（grid system）基本上以 12 欄系統為主，將一行 (row) 分為 12 個 column（12 欄），在不同的螢幕寬度大小中，去指定合適的 column 數，以達到響應式的效果。

格線系統中，依裝置尺寸可分為 5 個斷點來調整畫面：

1. xs：< 576px
2. sm：≥ 576px
3. md：≥ 768px
4. lg：≥ 992px
5. xl：≥ 1200px

![](https://i.imgur.com/OO7Puio.png)

## 請找出任何一個與 Bootstrap 類似的 library
- [ZURB Foundation](https://zurb.com/responsive)
- [Pure.css
](https://purecss.io/)
- [Google Material Design
](https://material.io/) 

## jQuery 是什麼？
jQuery 是一套以 Javascript 編寫的函式庫，將原本複雜的 JavaScript 簡化成套件功能，讓 HTML 與 JavaScript 之間的操作更簡短，例如：原本在 JavaScript 中的 `document.getElementByID("name")` ，在 jQuery 則簡化成 `${'#name'}` 。優點是縮短開發時間，以及跨瀏覽器整合。然後，隨著近年來各瀏覽器趨向標準化，再加上新框架 React、Vue、Angular 嶄露頭角，jQuery 有漸漸式微的趨勢。


## jQuery 與 vanilla JS 的關係是什麼？
Vanilla JS 是指原生的 JavaScript 語法，有鑑於 jQuery 後來常被濫用且各式框架掘起，因此有人將 JavaScript 戲稱為[ Vanilla.js](http://vanilla-js.com/)，聲稱是世界上最輕量的 JavaScript 框架(沒有之一)；而 jQuery 則是 JavaScript 的 library，目的是減輕 JavaScript 撰寫的複雜性。

可以將 jQuery 想像是三合一咖啡包，已將咖啡粉、糖、奶精包裝成一個現成的套組；而 vanilla JS 則是自己煮咖啡，再加糖(還可以選擇三分糖)、奶精(或是用鮮奶比較好)。意思是，雖然 jQuery 帶來極大的便利性，但因應不同的狀況，有時候原生的 JavaScript 也能輕鬆達成，而可省去下載 jQuery 的負擔，才不會拖慢網頁瀏覽的速度。也因此出現了像 [You might not need jQuery](http://youmightnotneedjquery.com/) 的網站，主張依情況使用原生 JavaScript 程式碼。

