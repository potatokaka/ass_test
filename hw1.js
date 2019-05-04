function stars(n) {
    var result = []
    for(var i=1; i<=n; i++){
       result.push('*'.repeat(i))
    }
    return result;
}

module.exports = stars;

  
// function stars(n){
//     var result = []
//     for(var i=1; i<=n; i++){
//        result.push('*'.repeat(i))
//     }
//     return result;
// }

// console.log( stars(3) )