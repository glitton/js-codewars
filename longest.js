/* 1. https://www.codewars.com/kata/5a7f58c00025e917f30000f1/train/javascript
P: Find the longest substring in alphabetical order.
Rules:
There are tests with strings up(to 10 000 characters long so your code will need to be efficient.
The input will only consist of lowercase characters and will be at least one letter long.
If there are multiple solutions, return the one that appears first.

Example: the longest alphabetical substring in "asdfaaaabbbbcttavvfffffdf" is "aaaabbbbctt".

D: input is a string, array maybe?

A:

Variables to keep track of:
  - currStart of substring, initialize to 0
  - maxStart, keep track of idx of longest substring
  - maxLength, length of longest substring found thus far

Iterate over the string
  - compare current letter with previous, if it is in alphabet order:
    - get the length of the curr substring, currLength
      - if currLength is greater than maxLength
        - maxLength is equal to currLength
        - maxStart is equal to currStart
  else: start a new substring count from the current index
  return max substring which is a slice of the string from the maxStart to maxStart plus the maxLength       
*/

function longest(str) {
  let currStart = 0;
  let maxStart = 0;
  let maxLength = 1;

  for (let idx = 1; idx < str.length; idx++) {
    let currLetter = str[idx];
    let prevLetter = str[idx - 1];

    if (currLetter >= prevLetter) {
      let currLength = idx - currStart + 1;
      if (currLength > maxLength) {
        maxLength = currLength;
        maxStart = currStart;
      }
    } else {
      currStart = idx;
    }
  }
  return str.slice(maxStart, maxStart + maxLength);
}

console.log(longest("asdfaaaabbbbcttavvfffffdf")); //"aaaabbbbctt".
