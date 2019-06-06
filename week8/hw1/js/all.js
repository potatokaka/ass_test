const request = new XMLHttpRequest();
const container = document.querySelector('.wrapper')
const btn = document.querySelector('.main__btn');
const highlight = document.querySelector('.main__highlight');
const desc = document.querySelector('.main__tx');
const img = document.querySelector('.main__img')

request.onload = () => {
	if (request.status >= 200 && request.status < 400) {
		const response = request.responseText;
		const json = JSON.parse(response);
		const result = json.prize;
		
		switch (result) {
			case 'FIRST':{
				img.classList.remove('hidden');
				img.src = 'https://image.flaticon.com/icons/svg/1077/1077903.svg';
				highlight.innerText = '恭喜你中頭獎了！';
				desc.innerText = '日本東京來回雙人遊！';
				container.style.background = '#bdf0ee';
				container.style.color = '#353535';
				btn.innerText = '再試一次';
				break;
			}

			case 'SECOND':{
				img.classList.remove('hidden');
				img.src = 'https://image.flaticon.com/icons/svg/1838/1838552.svg';
				highlight.innerText = '二獎：';
				desc.innerText = '90 吋電視一台！';
				container.style.background = '#cffbd1';
				container.style.color = '#353535';
				btn.innerText = '再試一次';
				break;
			}

			case 'THIRD':{
				img.classList.remove('hidden');
				img.src = 'https://image.flaticon.com/icons/svg/37/37922.svg';
				highlight.innerText = '恭喜你抽中三獎：';
				desc.innerText = '知名 YouTuber 簽名握手會入場券一張，bang！';
				container.style.background = '#9e8bec';
				container.style.color = '#353535';
				btn.innerText = '再試一次';
				break;
			}

			case 'NONE':{
				img.classList.add('hidden');
				highlight.innerText = '銘謝惠顧';
				desc.innerText = '';
				container.style.background = '#636363';
				container.style.color = 'white';
				btn.innerText = '再試一次';
				break;
			}

			default: {
				alert('系統不穩定，請再試一次');
				break;
			}
		}
	} else {
		alert('系統不穩定，請再試一次');
	}
}

btn.addEventListener('click', () => {
	request.open('GET', 'https://dvwhnbka7d.execute-api.us-east-1.amazonaws.com/default/lottery', true)
	request.send();
})

