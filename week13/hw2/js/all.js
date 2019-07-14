$(document).ready(function(){
    
   // 點擊"按鈕"輸入
   $('.btn-submit').on("click", function(){
    	addTodo();
   })
   // 按鍵盤"Enter"輸入
   $('.input-underlined').keydown(function(e){
		if (e.key == 'Enter') {
			addTodo();
		} 
   })

   // 事件代理
   $('.list-group')
   		//項目完成狀態
		.on('change', '.form-check-input', function(e){
			const element = $(e.target);
			if(element.prop('checked')) {
				element.closest('li').addClass('active');
			} else {
				element.closest('li').removeClass('active');
			}
		})
		//刪除按鈕	
		.on('click', '.btn-close', function(e){
			const element = $(e.target);
			element.closest('li').remove();
		})
})

function addTodo() {
	const newTask = $('.input-underlined').val();
	const result = getTodoHtml(newTask);

	if (newTask.length === 0) {
		alertError();
	} else {
		$('.input-underlined').val('');
		$('.list-group').append(result);
	}
}

// 輸入空白的訊息
function alertError() {
	$('body').append('<p class="alert">Please enter tasks!</p>');
	$('.alert').fadeOut(2000);
}

// 頁面 HTML 加入新的 task
function getTodoHtml(value){
  return `
    <li class="list-group-item">
      <div class="form-check">
        <input class="form-check-input" type="checkbox">
          ${value}
      </div>
      <div class="btn-close"><i aria-hidden="true" class="material-icons">close</i></div>
    </li>
  `
}
