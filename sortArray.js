/*
P: You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

E:
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

even index [1, 3, 5, 7, 9] odd [0, 2, 4, 6, 8]
odd numbers sorted [1, 3, 5, 7, 9] even [8, 6, 4, 2, 0]

D: arrays
A:
Initialize a sortedOdds empty arrays
Get all the odd numbers from the input array and sort them, save to sortedOdds
While the sortedOdds length is greater than 0
  - Make a copy of the input array and iterate over it
    - if the currentNumber is odd
      - take the first number from sortedOdds and replace it in the same position as the currentNumber
Return finalArray

*/

function sortArray(arr) {
  let sortedOddNumbers = sortOddNumbers(arr);

  let arrayCopy = arr.slice();
  while (sortedOddNumbers.length > 0) {
    arrayCopy.forEach((num, idx) => {
      if (num % 2 !== 0) {
        let oddNumber = sortedOddNumbers.shift();
        arrayCopy[idx] = oddNumber;
      }
    });
  }
  return arrayCopy;
}

function sortOddNumbers(arr) {
  let sortedOdds = [];

  arr.forEach((num) => {
    if (num % 2 !== 0) {
      sortedOdds.push(num);
    }
  });
  return sortedOdds.sort((a, b) => a - b);
}

// console.log(sortOddNumbers([19, -2, -19, -6, 33, 42, -20]));
// console.log(sortArray([5, 3, 2, 8, 1, 4])); // [1, 3, 2, 8, 5, 4]
// console.log(sortArray([5, 3, 1, 8, 0])); // [1, 3, 5, 8, 0]
console.log(sortArray([19, -2, -19, -6, 33, 42, -20])); // [-19, -2, 19, -6, 33, 42, -20]
