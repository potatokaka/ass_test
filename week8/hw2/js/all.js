const request = new XMLHttpRequest();
const container = document.querySelector('.msg_outer')
const btn = document.querySelector('.btn');
let newMsg = document.querySelector('#message__box');

function sendMsg(postContent){
	request.open('POST', 'https://lidemy-book-store.herokuapp.com/posts', true);
	request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	request.send(`content=${postContent}`);

	const msg = document.createElement('div');
	msg.classList.add('main__tx');
	msg.innerText = postContent;
	container.appendChild(msg);
}

btn.addEventListener('click', () => {
	let postContent = newMsg.value;
	if (postContent) {
		sendMsg(postContent);
		newMsg.value = '';
	} else {
		alert('Please leave comments')
	}
})

request.onload = () => {
	if (request.status >= 200 && request.status < 400) {
		const response = request.responseText;
		const json = JSON.parse(response);
		// json.forEach((comments) => {
		// 	const msg = document.createElement('div');
		// 	msg.classList.add('main__tx');
		// 	msg.innerText = comments.content;
		// 	container.appendChild(msg);
		// });

		for (let i = 0; i < json.length; i += 1) {
			const msg = document.createElement('div');
			msg.classList.add('main__tx');
			msg.innerText = json[i].content;
			container.appendChild(msg);
		}

	} else {
		alert('系統不穩定，請再試一次');
	}
}

request.open('GET', 'https://lidemy-book-store.herokuapp.com/posts', true)
request.send();



// btn.addEventListener('click', () => {
// 	request.open('GET', 'https://lidemy-book-store.herokuapp.com/posts', true)
// 	request.send();
// })

