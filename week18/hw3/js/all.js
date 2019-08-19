/* eslint-env jquery */

let list = [];

// 渲染畫面
function render(){
  $('.list-group').empty();
  $('.input-underlined').val('');
  var listLength = list.length;
  
  for (let i = 0; i < listLength; i++) {
    $('.list-group').append(`
      <li class="list-group-item ${list[i].isDone ? 'active' : ''}" data-id="${i}" }>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" ${list[i].isDone ? 'checked' : ''}>
            ${list[i].content} 
        </div>
        <div class="btn-close"><i aria-hidden="true" class="material-icons">close</i></div>
      </li>
      `
    )
  }
}

function addTodo(todo) {
  let obj = {
    dataId: '',
    content: todo,
    isDone: false
  };
  
  list.push(obj);
  render();
}

function removeTodo(id) {
  // 把 list 陣列，加上 id 值
  list[id].dataId = id;
  list = list.filter(item => item.dataId !== id);
  render();
}

$(document).ready(() => {
  // 點擊"按鈕"輸入
  $('.btn-submit').on('click', (e) => {
    const newTask = $('.input-underlined').val();
    addTodo(newTask);
  });
  // 按鍵盤"Enter"輸入
  $('.input-underlined').keydown((e) => {
    const newTask = $('.input-underlined').val();
    if (e.key === 'Enter') {
      addTodo(newTask);
    }
  });

  // 事件代理
  $('.list-group')
    // 項目完成狀態
    .on('change', '.form-check-input', (e) => {
      const element = $(e.target);
      const id = $(e.target).closest('li').attr('data-id');
      if (element.prop('checked')) {
        list[id].isDone = true;
      } else {
        list[id].isDone = false;
      };
      render(); // 重新渲染畫面
    })

    // 刪除按鈕
    .on('click', '.btn-close', (e) => {
      const id = $(e.target).closest('li').attr('data-id');
      removeTodo(id);
    })
});
