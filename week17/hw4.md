```javascript
const obj = {
  value: 1,
  hello: function() {
    console.log(this.value)
  },
  inner: {
    value: 2,
    hello: function() {
      console.log(this.value)
    }
  }
}
  
const obj2 = obj.inner
const hello = obj.inner.hello
obj.inner.hello() // ??
obj2.hello() // ??
hello() // ??
```

輸出結果為：  
2  
2  
undefined  

在大部份的情境下，this 代表的就是呼叫 function 的物件 (Owner Object of the function)。而隨著函式執行場合的不同，this 指向的值也會跟著改變。簡單來說， this 的值，只跟「函式的呼叫方法」有關係，而跟宣告的位置在哪裡無關。而其中，呼叫方式只需要將 function 轉換成 call 的形式就可以輕鬆辨識 this 了。

舉例來說：

`func(p1, p2)` 可以轉換為：
`func.call(context, p1, p2)`，意思也就是，第一個傳入的參數就是 this 本身。

`obj.child.method(p1, p2)`，相當於 `obj.child.method(obj.child, p1, p2)`

- obj.inner.hello()：
可轉換成  `obj.inner.hello.call(obj.inner)`，得出 obj.inner 的 value 是 2，也就是 this.value = 2，因此輸出 2。

- obj2.hello()：
可轉換成  `obj2.hello.call(obj2)`，而因為 obj2 等同於 obj.inner ，所以 this.value = 2，因此輸出 2。

- hello()：
可轉換成`hello.call(undefined)`，因為在物件以外的 this 是沒有任何意義，而此時硬要輸出時，會給個預設值，在嚴格模式底下就是undefined；若非嚴格模式，瀏覽器底下就會是window 。
