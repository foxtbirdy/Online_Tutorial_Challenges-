function rot13(str) {
  var result = []
  var regex = /[A-Z]/g
  function second(str2) {
    var value = []
    for (var i = 0; i<str2.length; i++) {
      var check = str2.charCodeAt(i)-65; // [ 18, 4, 17, 17, -33, 15, 1, 16, 17, -33, 15, 13, 25, 2 ]
      if (check >= 0 || check <= 25) {
        var formatted = String.fromCharCode( ((check + 13) % 26) + 65 );
      } 
      value.push(formatted) // [ 'F', 'R', 'E', 'E', '-', 'C', 'O', 'D', 'E', '-', 'C', 'A', 'M', 'P' ]
    }
    return value
  }
  result = str.replace(regex, second)
  return result
}

console.log(rot13("SERR PBQR PNZC!"));