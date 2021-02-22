function palindrome(str) {
  // REMOVE ALL THE USELESS STUFF
  var remake = str.replace(/[^A-Za-z0-9]/gi, "")
  // CONVERT TO LOWERCASE
  remake = remake.toLowerCase()
  var backwards = [];
  // REVERSE THE STRING
  for (let i = remake.length; i >= 0; i--)
    backwards.push(remake[i])
  backwards =  backwards.join("")
  // LIVE TESTING BELOW
  if (remake == backwards) {
    return true
  } else {
    return false
  }
// function ends
}



console.log(palindrome("My age is 0, 0 si ega ym."));
