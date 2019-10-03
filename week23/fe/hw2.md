## 為什麼我們需要 Redux？
在 React 的程式邏輯中，資料流是單向傳遞的，因此外部组件很難取得内部组件的資料，非父子組件之間需要共享狀態時，也會讓資料的傳遞變得很複雜。而 Redux 透過 Store 來儲存一個共用的狀態，幫助每一個組件分發狀態，減少了中間組件傳遞的環節。

雖然 Redux 能解決組件溝通的問題，但使用 Redux 會讓專案架構變得龐大，小型的 React 專案，如果 UI 結構簡單且組件之間沒多太多互動時，則不適用 Redux，因為用了反而會增加複雜性。

## Redux 是什麼？

Redux 是一個全域的狀態管理物件，Redux 可以與 React 搭配使用，或結合其他的框架。

Redux 三寶：
1. Action: 是一個物件，用來描述事件的類別 (type)，和所承載的資訊 (payload)
2. Reducer: 為一個函式負責將給定的 state 根據 Action 做事件的處理，並得到新的 state
3. Store: 是 Redux 運作的核心，集中管理整個 state tree，整個專案的 state，會被儲存在唯一的 store 裡面

Redux 的運作流程：
![](https://i.imgur.com/jlshrxr.gif)

1. 事件發生： 例如使用者通過 View 點擊元件(onclick)
2. 發送 Action： Action Creator 向 Store 發送 Action
3. 更改 state： Store 會調用 Reducer ，給予 State 和 Action ，而得到新的 State
4. 發佈通知： 需要用到 state 的元件會向 store 訂閱通知，一但 state 有變化，即會收到通知，可重新取得所需 state，重新渲染元件

[參考資料：Redex 核心概念筆記](https://note.pcwu.net/2017/03/04/redux-intro/)

## Single Page Application 是什麼？有哪些頁面一定要用這個架構去設計嗎？
SPA（Single-Page Application）就是人名其名，整個網站實際上只有一個頁面。原理是藉由 AJAX 非同步的方式來解決一般傳統 MPA (Multi-Page Application) 頁面重整的問題，同時 SPA 讓前後端開發分離，並提供使用者更接近 Desktop/Mobile App 的使用者體驗。

SPA 的架構適合換頁時內容不中斷的服務，例如音樂播放器、影音平台這類型的內容。

## Redux 如何解決非同步（例如說 call API 拿資料）的問題

Redux 在引入非同步的 middleware 就可以分派出非同步的 Action。可使用一些非同步 middleware 的套件，例如：redix-thunk, redux-observable, redux-sage。
