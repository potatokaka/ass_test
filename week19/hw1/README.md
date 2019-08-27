# API Documentation
Base URL:  http://mentor-program.co/group5/potatokaka/todolist_api/api/api.php/

| 說明          | Method | 路徑    | 參數                                                   |
| ------------- | ----------- | ------- | ------------------------------------------------------ |
| 讀取所有 todo | GET         | /       | 無                                                     |
| 讀取單一 todo | GET         | /:id | 無    
| 新增 todo     | POST        | /       | content: 內容   |
| 刪除 todo     | DELETE      | /:id       | 無         
| 修改 todo     | PATCH       | /:id       | content: 內容<br/> state: 0（未完成）<br/> state: 1（完成） |
