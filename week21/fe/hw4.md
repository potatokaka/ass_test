## 為什麼我們需要 React？可以不用嗎？
當專案開始複雜，且功能越來越多時，使用 javaScript 去操作 DOM 並改變 UI，會需要複雜的程序，例如 creatElement、append。為了解決網頁上 DOM 狀態的頻繁改變，以及元件難以規模化的問題，因而產生了 React。

React 是一個方便建構 UI 的 JavaScript 函式庫，透過元件 (component) 來產生 UI 介面，好處是將元件模組化，易於重覆使用與維護。另外 React 一個最大的優點是網頁效能，React 產生出的 Virtual Dom，一旦元件的狀態改變時， Virtual Dom 會重新繪製，透過 diff 演算法去判斷有更新的部份，再針對該部分重新渲染畫面，更有效提升網頁效能。

當然不使用 React 也是可以的，只是當專案規模較大時，使用 React 會比較容易維護。

## React 的思考模式跟以前的思考模式有什麼不一樣？
相較於之前的思考是以 DOM 為主要操作的對象，把事件綁定在 DOM 上，且只要畫面一有變動，就要相對應地去操作 DOM 來改變 UI 界面。

React 的核心是由 state 來決定畫面，因此只需要關注 state 的改變，一旦改變畫面就會重新渲染，不需要特別再去操縱 DOM 元素，也比較不會有資料和畫面不同步的問題產生。


## state 跟 props 的差別在哪裡？
- state：是元件用來記錄自身的狀態，可以透過 setState() 來修改狀態。
- props：是父子元件之前溝通的橋樑，是由父元件傳遞給子元件的一個靜態物件，因此 props 的值無法被改變。

## 請列出 React 的 lifecycle 以及其代表的意義
React 元件在不同的生命週期都有相對應的方法來執行，主要可分為三階段：
1. Mounting 加載
2. Updating 更新
3. Unmounting 移除加載

常用的如下：
- consturctor()：開始建立這個物件並初始化，會在這個階段定義 state、綁定method…等設定
- render()：第一次渲染出畫面，或是當狀態改變而執行 setState 時，都會啟動 render
- componentDidMount()：當畫面 render 完成後會立即觸發此方法，常用於綁定 DOM 事件，執行 ajax 的階段
- componentDidUpdate()：當 state 改變後，元件重新 re-render 的階段
- componentWillUnmount()：在元件從 DOM 移除後會立即調用，目的是用來清除綁定eventlistener、cookie、local storage…等。值得注意的是，在這個階段如執行 setState 是不會觸發執行 render