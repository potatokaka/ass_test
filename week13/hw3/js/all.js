$(document).ready(function(){

  // 刪除按鈕 Ajax
  $(".posts").on("click", ".btn-delete", function(e){
      if (!confirm('是否確定要刪除？')) return;
      const id = $(e.target).attr('data-id');

      $.ajax({
        method: "POST",
        url: "handle_delete_post.php",
        data: {
          id //ES6 如果 Key 和 Value 一樣，就不用特別傳值
        }
      }).done(function(response) {
        const msg = JSON.parse(response);
        $(e.target).parent().parent().fadeOut(300);
        alert(msg.message);
      }).fail(function(response){
        alert('刪除失敗');
      })
  })

  $(".main").on("click", ".btn-add", function(e){
    e.preventDefault();  
    const content = $(e.target).parent().find('textarea[name="content"]').val();
    const parent_id = $(e.target).parent().find('input[name="parent_id"]').val();
    const sub_Form = $(e.target).closest('form');

    if (content == '') {
      alert('Please leave a comment');
    } else {
      $.ajax({
        method: "POST",
        url: "handle_add_post.php",
        data: {
          content: content,
          parent_id: parent_id,
        },
      }).done(function(response){
        $('.message #message__box').val('');
        const msg = JSON.parse(response);
        const nickname = msg.nickname;
        const id = msg.id;
        alert(msg.result);

        // 判斷是否為主留言
        if (parent_id === '0') {
          $('.posts').prepend(getMainPost(nickname, content, id));
        } else {
            $('.sub-message #message__box').val('');
            sub_Form.before(getSubPost(nickname, content, id, parent_id));
        }
      }).fail(function(response){
        const msg = JSON.parse(response);
        alert(msg.result);
      })
    }

  })

})

// 主留言 html
function getMainPost(nickname, content, id) {
   const mainPost = `
    <div class='post'>
      <input type="hidden" name="parent_id" value="0" >
      <div class='post__nickname'>${nickname}</div>
      <div class='post__date'> created_at </div>
      <div class='post__content'>${content}</div>
      
      <div class='post__func'>
        <a href='update_post.php?id=${id}' class='btn' data-id='${id}'>Edit</a>
        <button class='btn btn-delete' data-id='${id}'>Delete</button>
      </div>
  ` + getSubForm(id);
    + `</div>`;

  return mainPost;
}

// 子留言表單
function getSubForm(id){
  return `
    <div class='sub-posts'>
      <form method="POST" class="sub-message">
        <input type="hidden" value="${id}" name="parent_id">
        <div class="message-tx">Responses</div>
        <textarea name="content" id="message__box" cols="30" rows="4" placeholder="leave a comment"></textarea>

        <input type='submit' value='Send' class='btn btn-add'>
      </form>
    </div>
  `
}

// 子留言 HTML
function getSubPost(nickname, content, id, parent_id) {
  const subPost = `
  <div class='sub-post active'>
     <input type="hidden" name="parent_id" value="${parent_id}" >
     <div class='post__nickname'>${nickname}</div>
     <div class='post__date'> created_at </div>
     <div class='post__content'>${content}</div>
     
     <div class='post__func'>
       <a href='update_post.php?id=${id}' class='btn' data-id='${id}'>Edit</a>
       <button class='btn btn-delete' data-id='${id}'>Delete</button>
     </div>
 `
 return subPost;
}





{/* <div class='post'>
            <input type="hidden" name="parent_id" value="${msg.id}" >  
            <div class='post__nickname'>nickname</div>
            <div class='post__date'>created_at Time</div>
            <div class='post__content'>${content}</div>
          </div> */}

{/* <div class='post'>
  <div class='post__nickname'>escape($row['nickname'])</div>
  <div class='post__date'>escape($row['created_at']) </div>
  <div class='post__content'>" . escape($row['content'])</div>
</div> */}