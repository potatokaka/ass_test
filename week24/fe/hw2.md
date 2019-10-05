## Redux 如何解決非同步（例如說 call API 拿資料）的問題
由於 Redux 運作機制是單向資料流的設計模式架構，唯有透過 dispatch(action) 的方式，才能進行狀態的修改。然而，在實際應用上常常會有非同步的場景，此時就可以使用 middleware (中介軟體)，來處理非同步操作或一次分派多個 action 的行為。
![](https://i.imgur.com/HxmPK41.jpg)


換言之，在沒有使用 middleware 之前，當 action 傳入 dispatch 之後會即刻觸發 reducer，但如果不希望立即被觸發，而是等待非同步操作完成之後再觸發，此時就可以使用 middleware 來處理非同步流。流程會是，在觸發 dispatch(action) 之後，action 會在派送的過程中，由 middleware 做出一些對應的處理，因此可以靈活地控制 action 到 reducer 中間的行為。常見的套件有redux-thunk，redux-promise，redux-saga，redux-observable。