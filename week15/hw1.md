## 十一到十五週心得

### Week11
這幾周都是一步一步優化留言版的過程，覺得老師把留言版的功能分別一項一項拆開出來，一方面可以學習到，寫程式的過程就是這樣一小部份慢慢往上累積優化，透過這個過程，可以告訴自己以後在寫程式的時候不需要那麼心急，想要一步到位；另一方面是發現，一開始的結構規畫很重要，也許可以先在紙上想過一次流程，如何串接，會不會有重覆的功能可以拉出來一起用的…等等，思考過後再往細部去著手，否則之後要再改結構會很痛苦。但這些應該還是很需要依靠經驗值，才有辦法培養寫 code 的結構布局，以及敏銳度。

另外，也雜湊與加密、Session 與 Cookie，了解原理之後會覺得專業度有瞬間升級的感覺。

### Week12
這周重點在資訊安全，學習了關於 XSS、SQL Injection、CSRF 的知識，覺得駭客真的好厲害 (好像搞錯重點 XD)，不知道之後能不能開一個(反)駭客導師計畫，目的是要了解駭客的各種招式與行為，進而防範資安，這樣好像會很有動力把程式學得很精通耶！

子留言的部份，一開始覺得好難，關鍵就在於 `parent_id = 0` 的設定，實在很佩服能用這麼簡便的好招，就達成了主留言與子留言的區分，省去了很多資料庫與程式重覆撰寫的麻煩度。

### Week13
第十三周應該是目前為止遇到最卡的一周，把原本留言版改成 Ajax 的方式，讓資料傳遞時不需要換頁以優化使用者體驗。難度在於要把前端的資料傳入後端，再把後端的資料傳回來前端，就像是傳球與接球，需要對於前後端的資料傳輸流程很清楚，球員們才不會混成一團，看不清楚現在球是傳到哪裡而失去方向。

另外一卡點是上傳作業時的 ESLint 守門員，花了好長的時候調整格式與寫法，最後才終於符合標準交作業。總而言之，這是很有印象的一周，交完作業那瞬間整個很暢快。

### Week14
部署這部份其實還算順利，謝謝前輩的教學文分享，照著步驟複製貼上基本上就完成了。花比較多的時間反而是 FTP 的上傳設定，因為我用的是 cyber duck，爬了很多文才知道要怎麼設定，例如協定要設成 SFTP，而不是AWS S3，使用者是ubuntu，還有金鑰…等細節。

好不容易把網站都上傳到 server 後，發現新增留言的功能居然壞掉了，只好耐著心 debug，在本機的環境再次確認沒問題，也到原本交作業的虛擬空間網址查看，新增的功能都是正常的，但偏偏就是在 AWS 上面的壞掉，實在不科學呀。大膽假設可能是資料庫的問題，因此把本機的資料庫輸出，輸入到 server 上，應該要沒問題才對呀？最後才發現，是在 comments 的資料表多了一個沒使用的欄位 user_id ，因為設定了「不能是 null」，而導致資料無法寫入。雖然在本機的 phpMyAdmin 的欄位也有此設定，但在本機還是可以寫入，也許是雲端的資料比較嚴格？！

完成部署的流程，非常佩服工程師，需要細心照顧和了解每一個環境，否則整個網站就沒辦法運作了。

### Week15
其實複習周大部份的時間都在放空，也剛好 W15 和 W14 工作大部份都在外出差，沒有多餘的腦力複習。但是放了幾天的假再回來看 code 就會覺得他們有點不太認識我了 XD，原來刻意練習真的是要每天進行會比較好，這周充電發懶完之後，就要好好和 code 繼續當好朋友。