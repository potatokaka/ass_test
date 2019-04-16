## 交作業流程

### 前置作業
1. 連至 GitHub Classroom 的[頁面](https://classroom.github.com/a/V4hZopA2)
2. 接受 Assignment： Authorize github → Accept this assignment
3. 複製 Assignment 的 repo 到本地端：  
在 Terminal 打上 `git clone https://github.com/Lidemy/mentor-program-3rd-potatokaka.git`
***
### 交作業 (GitHub Flow)
1. 新開一支 branch：git branch week1  
**注意：永遠在一個新的 branch 寫作業，不要在 master 上寫作業**
2. 切換到作業的 branch： git checkout week1 
3. 完成全部的作業
4. 提交：`git commit -am "Add assignment"`
5. 把 branch 放上 GitHub：`git push origin week1`
6. 到 GitHub 上發起「compare & pull request」
7. 確認合併的方向「base: master ← compare: week1」
    - 下方打上標題、心得或問題，並 tag 老師
    - 按下按鈕「Create pull request」
8. 到第三期交作業專用 [repo](https://github.com/Lidemy/homeworks-3rd) 裡面的「issues」 
    - 建立一個 New issue，依正確格式建立，格式如下：  
        標題：[Week1]  
        內文：https://github.com/Lidemy/mentor-program-3rd-aszx87410/pull/1 (我的 Pull requests 網址) 或心得
    - Submit new issue
    - 完成後機器人會主動 tag 同學來看作業
9. 若老師 review 完沒問題，就會 Merge branch，並刪除該 branch
    - 同時 issue 也會被關掉，代表作業完成
10. 若還有問題需要修改，老師會把目前的 branch 先 merge，要再新開一個 branch 來做修改
11. 若作業都沒問題 merge 完成後，切到本地 `git checkout master`
12. 把 merge 完成的 master 拉下來同步： `git pull origin master`
13. 再刪除本地的 week1 分支：`git branch -d week1`
14. 即完成一周的作業
