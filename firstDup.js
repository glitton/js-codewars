/*
P: Find the first character that repeats in a String and return that character.
input: string
output: string
rules:
- return the first char that repeats an not the first character that repeats first
- case sensitive "O" is not the same as "o"

E:
translator returns 't' and not 'a'

D: string, use array
A:
Initialize a repeatingChar variable, assign to empty string
Iterate over the input string
  - store currentLetter as index 0
  - get a stringSlice of input string from index + 1
  - if stringSlice includes the current letter
    - break out of the loop   
    return currentLetter
  - else return undefined  
*/

function firstDup(str) {
  let repeatingChar = "";
  for (let idx = 0; idx < str.length; idx++) {
    let currentChar = str[idx];
    let strSlice = str.slice(idx + 1);

    if (strSlice.includes(currentChar)) {
      repeatingChar = currentChar;
      break;
    } else {
      repeatingChar = undefined;
    }
  }
  return repeatingChar;
}

console.log(firstDup("tweet")); // "t");
console.log(firstDup("Ode to Joy")); // " ");
console.log(firstDup("ode to joy")); // "o");
console.log(firstDup("bar")); // undefined);
console.log(firstDup("123123")); // "1");
console.log(firstDup("!@#$!@#$")); // "!");
