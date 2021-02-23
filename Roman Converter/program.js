function convertToRoman(num) {
  var data = {
    M:1000,
    CM:900,
    D:500,
    CD:400,
    C:100,
    XC:90,
    L:50,
    XL:40,
    X:10,
    IX:9,
    V:5,
    IV:4,
    I:1
    }
    var result = ""
/* Using a empty string.
Adding a space will make the code not work!! */

// Closest number gets selected.
  for (var i in data) {
    while ( num >= data[i] ) {
      result += i;
      num -= data[i];
    }
  }
  return result;
}
console.log(convertToRoman(16));
// Output - XVI?