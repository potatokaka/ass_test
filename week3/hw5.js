function add(a, b) {
  var result = '';
  var carryNum = 0;
  var largerLength = a.length > b.length ? a.length : b.length;

  for( var i = 1; i <= largerLength; i++) {
    var aNum = a.length - i >= 0 ? Number( a[a.length - i]) : 0;
    var bNum = b.length - i >= 0 ? Number( b[b.length - i]) : 0;
    var sum = aNum + bNum + carryNum;
    carryNum = sum >= 10 ? 1 : 0;
    sum = sum >= 10 ? sum - 10 : sum;
    
    result = sum.toString() + result;
    
    if( i == largerLength && carryNum == 1 ){
      result = 1 + result
    }
  }
  return result
}

console.log( add('853', '679') ) 
// function add(a, b) {
// 	var rtnStr = "";
// 	var carryNum = 0;
// 	var largerLength = a.length > b.length ? a.length : b.length;
// 	for(var i = 1; i <= largerLength; i++){
//     var aNum = a.length-i >= 0 ? Number(a[a.length-i]) : 0;
//     var bNum = b.length-i >= 0 ? Number(b[b.length-i]) : 0;
// 		var sum = aNum + bNum + carryNum;
//     carryNum = sum >= 10 ? 1 : 0;
//     sum = sum >= 10 ? sum - 10 : sum;
    
//     rtnStr = sum.toString() + rtnStr;
    
// 		if(i == largerLength && carryNum == 1){
// 			rtnStr = carryNum + rtnStr;
// 		}
// 	}
//   return rtnStr;
// }

// console.log( add('853', '679') ) 
// console.log( add('12312383813881381381', '129018313819319831') ) 



// https://github.com/Lidemy/mentor-program-2nd-YouZhengHua/blob/master/homeworks/week2/hw5.js
//https://github.com/Lidemy/mentor-program-2nd-lmybs112/blob/master/homeworks/week2/hw5.js
// https://github.com/Lidemy/mentor-program-3rd-ishin4554/blob/master/homeworks/week3/hw5.js
//https://github.com/Lidemy/mentor-program-2nd-yuting49/blob/master/homeworks/week2/hw5.js

//module.exports = add;
