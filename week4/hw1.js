const request = require('request');

request(
    'https://lidemy-book-store.herokuapp.com/books?_limit=10',
    function(error, response, body){
        const obj = JSON.parse(body);
        obj.forEach(function(item){
            console.log(`${item.id} ${item.name}`);
        })
    }
)