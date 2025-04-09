/*
input: object
output: array
rules:
- array consists of items that have a score of at least 60
- array values are in descending order
- if values are less than 60, return an empty array

A:
Initialize a result empty array
Create an array from the object and sort it by values in descending order
Iterate over the array
- if value is greater than or equal 60, append the key to result
Return result

*/

function myLanguages(results) {
  let finalResult = [];
  let sortedResults = Object.entries(results).sort((a, b) => b[1] - a[1]);

  for (let score of sortedResults) {
    if (score[1] >= 60) {
      finalResult.push(score[0]);
    }
  }
  return finalResult;
}

console.log(myLanguages({ Java: 10, Ruby: 80, Python: 65 })); // ["Ruby","Python"]
console.log(myLanguages({ Hindi: 60, Greek: 71, Dutch: 93 })); // [ "Dutch","Greek","Hindi"]
console.log(myLanguages({ "C++": 50, ASM: 10, Haskell: 20 })); // []);
