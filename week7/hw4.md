## 什麼是 DOM？
DOM 是 Document Object Model 的簡寫，意思是文件物件模型。當網頁載入時，瀏覽器會將 HTML 文件結構化，轉換成物件和節點的樹狀化結構格式，每一個 tag 都被視為一個節點 (node)，讓文件內的元素易於存取與操縱。其主要的用途是讓 javaScript 與瀏覽器之間互動溝通。

## 事件傳遞機制的順序是什麼；什麼是冒泡，什麼又是捕獲？
DOM 的事件傳遞的機制，分成三個階段：
1. 捕獲階段 Capture Phase：從 Window 最外層開始，往 Target 傳遞
2. 目標階段 Target Phase：Target 目標階段
3. 冒泡階段 Bubbling Phase：從 Target 階段往上傳遞  

順序可以理解成「先捕獲，再冒泡」。舉例來說，文件上有三個 `<div>`，分別是 `<outer>` > `<inner>` > `<btn>` 由外而內包覆，當最內層的 `<btn>` 點擊觸發的當下，事件會從文件最外層的根節點 (html > body > div) 往下傳遞，一直傳到 `<outer>` 再到 `<inner>`，這個階段就是上述的第一階段 (捕獲) 。  

一直到傳遞到 `Target` (被點擊的目標)，也就是 `<btn>` 本身，此時為第二階段 (Target Phase)。  

之後會再進入第三階段(Bubbling Phase)，從 `Target` 子節點往上傳至根節點，也就是 `<btn>`往上傳至 `<inner>` 再到 `<outer>`  再往上到 body > html，此階段名稱為冒泡，可以想像是泡泡一層一層往上浮出。因此，如果點擊了最內層的 `<btn>` 節點，外層的 `<inner>` 和 `<outer>` 也會被觸發點擊。

## 什麼是 event delegation，為什麼我們需要它？
Event delegation 是事件指派的意思，可以利用 DOM 的事件傳遞機制，來處理多個事件。  

舉例來說，文件上同時有很多子節點都有相似的 click 監聽事件，與其在每個子節點上一一建立，更有效率的作法是，利用 DOM 的事件冒泡機制，將事件綁定在父節點上，如此一來，可以減少程式重覆性的撰寫，增加效能。

## event.preventDefault() 跟 event.stopPropagation() 差在哪裡，可以舉個範例嗎？
`event.preventDefault()` 會阻止網頁元素預設行為的發生，例如表單提交的按鈕如果加上`event.preventDefault()`，點擊按鈕時，表單就不會提交出去。其中要注意的是，雖然元素的預設行為失效，但不會影響事件的傳遞，事件傳遞的機制仍會持續進行。

`event.stopPropagation()` 則是會阻止事件傳遞機制，主要的作用是阻止目標元素的事件冒泡到父元素上。承第二題的例子，如果在 `<btn>` 的事件加上 `event.stopPropagation()` ，事件就不會再往上傳遞到上層的 `<inner>` > `<outer>`  > body > html。雖然 `event.stopPropagation()` 會停止事件傳遞，但不會影響元素的預設行為。
