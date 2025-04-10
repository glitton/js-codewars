/*
P: The input is a string str of digits. Cut the string into chunks (a chunk here is a substring of the initial string) of size sz (ignore the last chunk if its size is less than sz).

If the sum of a chunk's digits is divisible by 2, reverse that chunk; otherwise rotate it to the left by one position. Put together these modified chunks and return the result as a string.

If
sz is <= 0 or if str == "" return ""
sz is greater (>) than the length of str it is impossible to take a chunk of size sz hence return "".

input: string and integer
output: new string
rules:
- cut string into chunks and add the digits
- if the sum is divisible by 2, reverse the chunk
- if not, rotate it to the left by one position
- return the new string

E: ("123456987654", 6) --> "234561876549" 123456 = 21, rotate 234561 2nd chunk: 987654 = 41, rotate 876549 final: 234561876549
("123456987653", 6) --> "234561356789"
("66443875", 4) --> "44668753"
("66443875", 8) --> "64438756"
("664438769", 8) --> "67834466"
("123456779", 8) --> "23456771"
("", 8) --> ""
("123456779", 0) --> "" 
("563000655734469485", 4) --> "0365065073456944"

D: input string, use array to add numbers

A:
Initialize variables
  - finalString assign to empty string
EDGE CASES: if chunkSize is less than or equal to zero or if string is empty, return ""  
Iterate over the input string
- Get the first chunk 
- if chunk's length is equal to size 
  - add the numbers, assign to sum
  - Is this chunk's sum divisible by 2?
    - yes, reverse the chunk, append to finalString
    - no, rotate the chunk to the left.  Move first digit to the end of the string, append to finalString
- else append chunk as is to finalString  
Return finalString
  
*/

function revRot(str, size) {
  let finalString = "";
  if (size <= 0 || str === "") return "";

  for (let idx = 0; idx < str.length; idx += size) {
    let chunk = str.slice(idx, idx + size);

    if (chunk.length === size) {
      let sum = chunk
        .split("")
        .reduce((acc, curr) => Number(acc) + Number(curr), 0);

      if (sum % 2 === 0) {
        let reversedChunk = chunk.split("").reverse();
        finalString += reversedChunk.join("");
      } else {
        let rotatedChunk = chunk.slice(1) + chunk[0];
        finalString += rotatedChunk;
      }
    }
  }
  return finalString;
}

console.log(revRot("123456987654", 6)); // "234561876549"
console.log(revRot("123456987653", 6)); // "234561356789"
console.log(revRot("66443875", 4)); // "44668753"
console.log(revRot("66443875", 8)); // "64438756"
console.log(revRot("664438769", 8)); // "67834466"
console.log(revRot("123456779", 8)); // "23456771"
console.log(revRot("", 8)); // ""
console.log(revRot("123456779", 0)); // ""
console.log(revRot("563000655734469485", 4)); // "0365065073456944"
