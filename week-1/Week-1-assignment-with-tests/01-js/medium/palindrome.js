/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str,beg=0,end=str.length-1) {
  
  if(beg>end||beg==end){
    return true;
  }  
  if(beg!=end && str[beg]==str[end]){
      return isPalindrome(str,beg+1,end-1);
    }
}
isPalindrome('nitin')==true?console.log("palindome"):console.log("not palindome");
module.exports = isPalindrome;
