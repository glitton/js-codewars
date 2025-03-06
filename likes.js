/*
P: Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

input: array
output: string
rules:
- return the first two names and the rest as numbers
- if array is empty, return "no one likes this"

E:

D: array and strings

A: 
if array is empty return "no one likes this"
If an array's length is greater than 3
  - Initialize an others variable assign to array's length minus two
  - Iterate over the array until index 1
  - return the string index 0, index 1 and {others} others like this
Else if array length is equal to 2
  - Iterate over the entire array
  - return the string with index0 and index1 like this
else 
  - iterate over the entire array
  - return the string index0, index1 and index2 like this  
*/

function likes(names) {
  if (!Array.isArray(names) || names.length === 0) return "no one likes this";

  if (names.length === 1) {
    return `${names[0]} likes this`;
  } else if (names.length === 2) {
    return `${names[0]} and ${names[1]} likes this`;
  } else if (names.length === 3) {
    return `${names[0]}, ${names[2]} and ${names[2]} likes this`;
  } else {
    let othersNum = names.length - 2;
    return `${names[0]}, ${names[1]} and ${othersNum} likes this`;
  }
}
