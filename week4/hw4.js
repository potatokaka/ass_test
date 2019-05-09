const request = require('request');

request.get(
    {
        url:'https://api.twitch.tv/helix/games/top', 
        headers: {
            'Client-ID':'k0q61qwn90bapyefs59xka2okfkw7z'
        }
    }, 
    function(error, response, body){
        const obj = JSON.parse(body);
        obj.data.forEach(function(item){
            console.log(`${item.id} ${item.name}`)
        })
    }
)

// const request = require('request');

// request.get({
//   url: 'https://api.twitch.tv/helix/games/top',
//   headers: {
//     'Client-ID': '5q09kxq4nws55298783p9gh7di1hb4',
//   },
// },
// (error, response, body) => {
//   const obj = JSON.parse(body);
//   obj.data.forEach((value) => { console.log(`${value.id} ${value.name}`); });
// });
