## React Router 背後的原理你猜是怎麼實作的？
React Router 運作的機制透過 history 去監聽瀏覽器 URL 的變化，來實現實現 URL 與 UI 同步。
![](https://i.imgur.com/5vhx7Xf.png)

History 主要分為二種不同的轉址方式：

### browserHistory：
- 原理：利用 HTML5 的 History API (history.pushState(),  replaceState(), popstate()) 進行網址的修改
- 優點：網址簡潔
- 缺點：History API 是 HTML5 的特性，因此較老舊的瀏覽器則不支援，且需要搭配後端轉址設定


### hashHistory：
- 原理：利用瀏覽器不將錨點變化視做頁面變化的特性來轉址，透過onhashchange 來偵測網址變更
- 優點：適用所有瀏覽器，且不需要搭配後端轉址
- 缺點：網址中會有 # ，視覺上較不簡潔


參考資料：
- [react-router的實現原理](http://zhenhua-lee.github.io/react/history.html)
- [猴子也能看懂的 React 教學](https://j6qup3.github.io/2016/08/19/%E7%8C%B4%E5%AD%90%E4%B9%9F%E8%83%BD%E7%9C%8B%E6%87%82%E7%9A%84-React-%E6%95%99%E5%AD%B8-4/#%E6%A6%82%E5%BF%B5-Front-End-Routing)

## SDK 與 API 的差別是什麼？
SDK (Software Development Kit) 指的是「軟體開發工具組」，通常是由產品的廠商提供給開發者使用的工具組，裡面包含了輔助開發某一軟件的相關文檔、範例和工具的集合，用來幫該產品或平臺開發應用。

API (Application Programming Interface) 指的是「程式溝通介面」，目的是來溝通兩個不同的平臺。也就是在一個平臺下，為了能讓對方取用該平臺的功能，所開放的一個接口。

SDK 就像是一杯密封飲料，而 API 則是吸管的部份。


## 在用 Ajax 的時候，預設是不會把 Cookie 帶上的，要怎麼樣才能把 Cookie 一起帶上？
- 在發出 Ajax request 時，帶上 withCredentials: true
- 在 server 設置 response header ： Access-Control-Allow-Credentials = true 

```
axios
  .get(
    '/cookie-auth-protected-route',
    { withCredentials: true }
  )
  .then(res => res.data)
  .catch(err => { /* not hit since no 401 */ })
```