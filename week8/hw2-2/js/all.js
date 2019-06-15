const request = new XMLHttpRequest();
const container = document.querySelector('.msg_outer');
const btn = document.querySelector('.btn');
const newMsg = document.querySelector('#message__box');

const showMsg = (json) => {
  // 重新載入頁面
  container.innerHTML = '';
  for (let i = 0; i < json.length; i += 1) {
    let msg = document.createElement('div');
    msg.classList.add('main__tx');
    msg.innerText = json[i].content;
    container.appendChild(msg);
  }
} 

const loadMsg = (req) => {
  req.onload = () => {
    if (req.status >= 200 && req.status < 400) {
      const response = req.responseText;
      const json = JSON.parse(response);
      showMsg(json);
    } else {
      alert('系統不穩定，請再試一次');
    }
  };

  req.open('GET', 'https://lidemy-book-store.herokuapp.com/posts?_limit=20&_sort=id&_order=desc', true);
  req.send();
}

loadMsg(request);

const sendMsg = (postContent) => {
  request.open('POST', 'https://lidemy-book-store.herokuapp.com/posts', true);
  request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  request.send(`content=${postContent}`);

  // 更新頁面
  const newRequest = new XMLHttpRequest();
  loadMsg(newRequest);
}

btn.addEventListener('click', () => {
  const postContent = newMsg.value;
  if (postContent) {
    sendMsg(postContent);
    newMsg.value = '';
  } else {
    alert('Please leave comments');
  }
});