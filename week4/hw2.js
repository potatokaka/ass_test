const request = require('request');
const process = require('process');

if (process.argv[2] === 'list'){
  request('https://lidemy-book-store.herokuapp.com/books?_limit=20', 
  function(error, response, body){
    const obj = JSON.parse(body);
    obj.forEach(function(item){
      console.log(`${item.id} ${item.name}`);
    });
  })
} else if (process.argv[2] === 'read'){
  request('https://lidemy-book-store.herokuapp.com/books/'+ process.argv[3], 
  function(error, response, body){
    const obj = JSON.parse(body);
    console.log(obj.name)
  })
}