/*
P: Write a function which takes two integers num1 and num2 and returns 1 if there is a straight triple of a digit at any place in num1 and also a straight double of the same digit in num2.

If this isn't the case, return 0.
input: two integers
output: 1 or 0
rules
- to return 1, num1 needs to have 3 of the same digits in consecutive order, these digits should appear twice in consecutive order in num2
- else return 0

E:

D: integer, convert to a an array containing a string rep of each integer

A: 
Convert input integers to arrays containing string rep of each integer
Iterate over num1Array
  - check if it has 3 consecutive numbers that are the same
    yes, append the number/s to tripleArray

Iterate over num2Array, check if the element is in tripleArray
      - if yes, see if it occurs 2 consecutive times, yes, return 1
      - if no, check if it contains the second element 
        - yes, return 1
        
  return 0    
*/

function tripleDouble(num1, num2) {
  let num1Array = String(num1).split("");
  let num2Array = String(num2).split("");
  let tripleDigits = [];

  for (let idx = 0; idx < num1Array.length - 2; idx++) {
    if (
      num1Array[idx] === num1Array[idx + 1] &&
      num1Array[idx + 1] === num1Array[idx + 1]
    )
      if (!tripleDigits.includes(num1Array[idx])) {
        tripleDigits.push(num1Array[idx]);
      }
  }

  for (let digit of tripleDigits) {
    for (let jdx = 0; jdx < num2Array.length; jdx++) {
      if (num2Array[jdx] === digit && num2Array[jdx] === num2Array[jdx + 1]) {
        return 1;
      }
    }
  }
  return 0;
}

// Chat GPT version

console.log(tripleDouble(123123123, 123123)); // 0);
console.log(tripleDouble(111, 88)); // 0);
console.log(tripleDouble(111000, 100)); // 1);
console.log(tripleDouble(111888, 1188)); // 1);
console.log(tripleDouble(451999277, 41177722899)); // 1);
console.log(tripleDouble(1222345, 12345)); // 0);
console.log(tripleDouble(12345, 12345)); // 0);
console.log(tripleDouble(666789, 12345667)); // 1);
console.log(tripleDouble(10560002, 100)); // 1);
console.log(tripleDouble(1112, 122)); // 0);
