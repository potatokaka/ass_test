function alphaSwap(str) {
  var result = '';
  for( var i = 0; i<str.length; i++){
    if( str[i] >= 'A' && str[i] <= 'Z'){
      result += str[i].toLowerCase()
    } else {
      result += str[i].toUpperCase();
    }
  }
  return result;
}

module.exports = alphaSwap;
