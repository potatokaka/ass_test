/* eslint-env jquery */
// const baseUrl = 'http://localhost:8080/kakaTest/Week19_TodoList/api/api.php';
const baseUrl = 'http://mentor-program.co/group5/potatokaka/todolist_api/api/api.php';
let list = [];


// 渲染畫面
function render() {
  $('.list-group').empty();
  $('.input-underlined').val('');
  $('.input-underlined').blur();

  $('.list-group').append(list.map(({id, content, state}) =>
    `<li class="list-group-item ${Number(state) ? 'active' : ''}" data-id="${id}" }>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" ${Number(state) ? 'checked' : ''}>
        <span class='todo_content'>${content}</span>
        <input class='todo_input'>
      </div>
      <div>
        <span class="btn-edit mr-2">edit-button</span>
        <span class="btn-close"><i aria-hidden="true" class="material-icons">close</i></span>
      </div>
    </li>
    `
  ));
}

function fetchTodo() {
  $.ajax({
    type: 'GET',
    url: baseUrl,
    dataType: 'text',
    success: (data) => {
      list = JSON.parse(data);
      render();
    },
    error: (response) => {
      alert(JSON.parse(response).result);
    }
  })
}

function createTodo() {
  const newTask = $('.input-underlined').val();
  $.ajax({
    type: 'POST',
    url: baseUrl,
    dataType: 'text',
    data: {
      content: newTask,
    },
    success: (response) => {
      fetchTodo();
    },
    error: (response) => {
      alert(JSON.parse(response).result);
    }
  })
}

function removeTodo(id) {
  $.ajax({
    type: 'DELETE',
    url: `${baseUrl}/${id}`,
    dataType: 'text',
    success: () => {
      fetchTodo();
    },
    error: (response) => {
      alert(JSON.parse(response).result);
    }
  })
}

function editTodo(id, newTask) {
  $.ajax({
    type: 'PATCH',
    url: `${baseUrl}/${id}`,
    dataType: 'text',
    data: {
      content: newTask,
    },
    success: () => {
      fetchTodo();
    },
    error: (response) => {
      alert(JSON.parse(response).result);
    }
  })
}

function editStatus(id, newStatus) {
  $.ajax({
    type: 'PATCH',
    url: `${baseUrl}/${id}`,
    data: {
      state: newStatus,
    },
    success: () => {
      fetchTodo();
    },
    error: (response) => {
      alert(JSON.parse(response).result);
    }
  })
}

// 跳出錯誤訊息提醒
function alertError() {
  $('body').append('<p class="alert">Please enter tasks!</p>');
  $('.alert').fadeOut(2000);
}

fetchTodo();

$(document).ready(() => {
  $('.btn-submit').on('click', () => {
    const newTask = $('.input-underlined').val();
    if (newTask.length === 0) {
      alertError();
    } else {
      createTodo();
    }
  });

  // 新增 Todo，按鍵盤"Enter"輸入
  $('.input-underlined').keydown((e) => {
    const newTask = $('.input-underlined').val();
    if (e.key === 'Enter') {
      if (newTask.length === 0) {
        alertError();
      } else {
        createTodo();
      }
    }
  });

  // 事件代理
  $('.list-group')

    // 項目完成狀態
    .on('change', '.form-check-input', (e) => {
      const element = $(e.target);
      const id = $(e.target).closest('li').attr('data-id');
      
      if (element.prop('checked')) {
        let newStatus = 1;
        editStatus(id, newStatus);
      } else {
        let newStatus = 0;
        editStatus(id, newStatus);
      }
    })

    // 刪除按鈕
    .on('click', '.btn-close', (e) => {
      const id = $(e.target).closest('li').attr('data-id');
      removeTodo(id);
    })

    // 編輯按鈕
    .on('click', '.btn-edit', (e) => {
      const element = $(e.target).closest('li');
      const id = element.attr('data-id');
      const taskOuter = e.target.closest('li').querySelector('span');
      const taskContent = taskOuter.innerText;
      const task_input = element.find('.todo_input');

      if (element.hasClass('edit')) {
        element.removeClass('edit');
        const newTask = task_input.val();
        editTodo(id, newTask);
      } else {
        element.addClass('edit');
        task_input.val(taskContent);
      }
    })

    // 編輯按鈕，按下 Enter
    .on('keydown', '.todo_input', (e) => {
      const element = $(e.target).closest('li');
      const id = element.attr('data-id');
      const task_input = element.find('.todo_input');
      const newTask = task_input.val();

      if (e.key === 'Enter') {
        if (newTask.length === 0) {
          alertError();
        } else {
          editTodo(id, newTask);
        }
      }
    });

});
