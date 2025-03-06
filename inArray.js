/*
P: Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.
input: 2 arrays
output: array containing the strings in array1 that are substrings of strings in array2, sorted alphabetically

E: 
Example 1:
a1 = ["arp", "live", "strong"]
a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
returns ["arp", "live", "strong"]

Example 2:
a1 = ["tarp", "mice", "bull"]
a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
returns []

D: Arrays

A: 
Initialize a result array, []
Iterate over array1
  - check if the currentString is a substring of any string in array2
  - yes, append currentString to result
sort result
return result  
*/

function inArray(array1, array2) {
  let result = [];

  array1.forEach((str) => {
    array2.forEach((word) => {
      if (word.includes(str)) {
        if (!result.includes(str)) {
          result.push(str);
        }
      }
    });
  });
  return result.sort();
}

let a1 = ["arp", "strong", "live"];
let a2 = ["lively", "alive", "harp", "sharp", "armstrong"];

let arr1 = ["tarp", "mice", "bull"];
let arr2 = ["lively", "alive", "harp", "sharp", "armstrong"];

console.log(inArray(a1, a2)); // ["arp", "live", "strong"]
console.log(inArray(arr1, arr2)); // []
