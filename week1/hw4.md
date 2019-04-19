## 跟你朋友介紹 Git

### 什麼是 Git？
菜哥，現在就來和你分享一下我知道的 Git。

Git 就是版本控制系統，在每個開發階段可能會有不一樣的版本，就如同菜哥發展的笑話一樣，每個階段會遇到不同的狀況，例如故事邏輯有 bug ，笑點再優化…等，因此透過版本控制的機制，去紀錄每個階段在某一段時間的變更，什麼時候加入什麼笑點，或是什麼東西被刪除，就像是平行時空時光機的功能一樣，可以隨時恢復到不同階段的狀態。

Git 會將整個專案儲存為一個儲存庫(repository)，可以想像成一個專案的物件資料庫，當有版本變更時，就會將整個專案進行備份。Git 的操作可以在自己的電腦完成自己版本控制，另一方面，也可以透過 GitHub 的遠端服務來達成異地開發，或是與他人共同協作。

### 要怎麼開始用 Git？
在[這裡](https://git-scm.com/download/mac)下載安裝 Git 到 Mac 電腦，就可以開始使用囉，接著再依著下面的 ABC 步驟操作就可以無痛完成笑話的版控了。

#### Step A. 初始化

1. `cd ~/desktop`：將路徑切換到桌面
2. `mkdir project`：建立 project 資料夾(可自行命名)
3. `cd project`：切換至 project 工作目錄
4. `git init`：初始化(Initialise)這個目錄，也就是將一般目錄變成 git working folder，便可開始進行 Git 版本控制
---
#### Step B. 將工作目錄加入 Git

1. `touch story.html`：新增一個檔案(story.html)
2. `vim story.html`：在檔案裡面寫入笑話
3. `git add story.html`：將檔案加入索引，可以理解成舞台暫存區(stage)
4. 如果有很多檔案的話，可以用 `git add .`，如此就可以把全部的檔案都加入
---
#### Step C. 將檔案提交 (commit) 到本地儲存庫 (local repository)
1. `git commit -m '版本敘述'`：將暫存區的檔案保存到儲存庫（Repository）裡面。簡單來說就是，「我完成一次備份了」，也就是在「提交」時，進行一次版本建立的動作。
2. 另外，也可以使用 `git commit -am '版本敘述'`，就可以縮短 `git add` 和 `git commit`的二步驟流程，但這只對於已存入 stage 的檔案才有效；新建立的檔案 (untracked file) 還是需要先 `git add` 噢。
---
#### Step D. 將本地儲存庫 (local repository)上傳到遠端 (remote repository)
1. 在 GitHub 網站上開新專案：在網站右上角「+」並點選「New repository」
2. 填寫專案名稱 → 「Create repository」
3. 依 「push an existing repository from the command line」操作：`git remote add origin https://github.com/potatokaka/test2.git`
`git push -u origin master`。使用 `git push` 指令，就會將整個專案的東西推至遠端的專案裡面，也就是做了一次專案備份的動作。如此一來，菜哥的笑話就可以和夥伴一起發展成更多漫才的段子。
4. 接下來，如果還有新的檔案要上傳遠端，只要輸入 `git push origin master` 就可以了。
---
#### Step E. 同步最新的專案
`git pull origin master`：如果夥伴上傳了最新的段子到遠端的 repo 上，菜哥就可以使用 `git pull` 指令，把最新的檔案下載下來，如此就不會錯過任何一個笑點了。

當然 Git 還有很多功能，建立分支、合併分支、解決衝突…等，下次有機會再和菜哥分享吧。


