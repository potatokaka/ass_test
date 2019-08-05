
const request = new XMLHttpRequest();
const container = document.querySelector('.stream');

request.open('GET', 'https://api.twitch.tv/kraken/streams/?game=League%20of%20Legends&limit=20', true);
request.setRequestHeader('Content-Type', 'application/vnd.twitchtv.v5+json');
request.setRequestHeader('Client-ID', 'k0q61qwn90bapyefs59xka2okfkw7z');
request.send();

request.onload = () => {
  if (request.status >= 200 && request.status < 400) {
    const response = request.responseText;
    const json = JSON.parse(response);
    const data = json.streams;

    for (let i = 0; i < data.length; i += 1) {
      const streamCard = document.createElement('div');
      streamCard.classList.add('card');
      streamCard.innerHTML = `
        <a href="${data[i].channel.url}" target="_blank">
          <img class="card__img" src="${data[i].preview.large}">
          <div class="card__info">
            <img class="avatar" src="${data[i].channel.logo}">
            <div class="card__name">${data[i].channel.name}</div> 
          </div>    
        </a>
      `;
      container.appendChild(streamCard);
    }
  } else {
    alert('系統不穩定，請再試一次');
  }
};
