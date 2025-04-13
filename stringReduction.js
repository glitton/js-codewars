/*
P: Consider two strings "aabcdefg" and "fbd". How many characters do we have to remove from the first string to get the second string? Although not the only way to solve this, we could create a Hash of counts for each string and see which character counts are different. That should get us close to the answer. I will leave the rest to you.

For this example, solve("aabcdefg","fbd") = 5. Also, solve("xyz","yxxz") = 0, because we cannot get second string from the first since the second string is longer.

input: 2 strings where the str2 is a subset of str1
output: integer representing the number of letters needed to remove to make str2 be able to be str1
rules:
- str1 must have the same chars to make str2

E: "aabcdefg","fbd"))//5);
str1: a: 2, b:1, c:1, d:1, e:1, f: 1, g:1
str2: f: 1, b: 1, d: 1

"abcxyz","ayxz"
str1: a:1, b:1, c:1, x:1, y:1, z:1
str2: a:1, y:1, x:1; z:1

"axyyz","yxxz"

str1: a:1, x:1, y:2, z:1
str2: y:2, x:2, z:1
excess of str1: a:1, x:1

D: string, use an object to store counts for str1 and str2

A:
Initialize count to 0
EDGE: if str2 length is greater than str1 length, return count of 0
Create an object to store letter frequencies for str1 and str2

Check for characters in str2 against str1
  - if str1 doesn't have the letter in str2 (key doesn't exist) or if str2 letter count is greater than str1 letter count, str1 can't recreate str2
  return 0

Calculate excess of characters from str1
Iterate over the str1 object
- if str2 has the letter in str1
  - check if str1 value is greater than str2 value
    -yes: count the excess of str1 over str2
    - append the difference to removeCount
- else if str2 doesn't have the letter that is in str1
  - append all occurences of str1 to removeCount
Return removeCount  


*/

function solve(str1, str2) {
  let removeCount = 0;

  if (str2.length > str1.length) return 0;

  let str1Count = createLetterCount(str1);
  let str2Count = createLetterCount(str2);

  for (let letter in str2Count) {
    if (
      str1Count[letter] === undefined ||
      str2Count[letter] > str1Count[letter]
    ) {
      return 0;
    }
  }

  for (let letter in str1Count) {
    if (str2Count[letter]) {
      if (str1Count[letter] > str2Count[letter]) {
        removeCount += str1Count[letter] - str2Count[letter];
      }
    } else {
      removeCount += str1Count[letter];
    }
  }
  return removeCount;
}

function createLetterCount(str) {
  let letterCount = {};
  str.split("").forEach((letter) => {
    letterCount[letter] = (letterCount[letter] || 0) + 1;
  });
  return letterCount;
}

console.log(solve("xyz", "yxz")); //0);
console.log(solve("abcxyz", "ayxz")); //2);
console.log(solve("abcdexyz", "yxz")); //5);
console.log(solve("axyyz", "yxxz")); //0);
console.log(solve("abdegfg", "ffdb")); //0);
console.log(solve("aabcdefg", "fbd")); //5);
console.log(solve("aabcdefg", "fdb")); //5);
