// function isPalindrome(word) {
  // Write your algorithm here
// }

/* 
  Add your pseudocode here
// */ 
// use conditional statement if
// compare with strict equality operator
// return true or false depending on argument passed


/*
  Add written explanation of your solution here
*/
const isPalindrome=(str)=>{
  let reversed=str.split("").reverse().join("");

  if (reversed=== str)return true;

  return false;

}


// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
