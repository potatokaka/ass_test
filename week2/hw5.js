function join(str, concatStr) {
  var result = str[0];
    for(var i=1; i<str.length; i++){
        result = result + concatStr + str[i];
    }return result
}

function repeat(str, times) {
  var result = ''
  for(var i=0; i<times; i++){
      result += str
  } return result
}

console.log(join('a', '!'));
console.log(repeat('a', 5));

