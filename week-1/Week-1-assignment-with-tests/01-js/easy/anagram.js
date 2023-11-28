/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
 let f =1;

 for(let i=0;i<str1.length;i++){
   if(str2.indexOf(str1[i])==-1)
   {
    f=0
    break;
   }
 }
 return (f==1?true:false)
}

console.log(isAnagram('sam','msa'))
// module.exports = isAnagram;
