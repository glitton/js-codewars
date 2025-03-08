/*
P: You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.
input: array
output: integer
rules: return the one number that is the outlier in the array as in it is the only odd or even number in the array

E:
Examples
[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)
[160, 3, 1719, 19, 11, 13,
-21]
Should return: 160 (the only even number)

D: Array

A:
Iterate over the array to count how many odd or even integers there are in the array
  - let evenCounts, oddCounts
  - get the lastEven or lastOdd number
  - if evenCounts is greater than 2, the array is even, there is only one odd, return lastOdd
  - else return lastEven

*/

// function findOutlier(arr) {
//   let evenCounts = 0;
//   let oddCounts = 0;
//   let lastOdd, lastEven;

//   arr.forEach((num) => {
//     if (num % 2 === 0) {
//       evenCounts++;
//       lastEven = num;
//     } else {
//       oddCounts++;
//       lastOdd = num;
//     }
//   });

//   if (evenCounts >= 2) {
//     return lastOdd;
//   } else {
//     return lastEven;
//   }
// }

/*
A:
Filter the array to create
  - odd numbers
  - even numbers
Return the 1st element of the array whose length is equal to 1  

*/

function findOutlier(intArray) {
  let oddNums = intArray.filter((num) => num % 2 === 1);
  let evenNums = intArray.filter((num) => num % 2 !== 1);

  return oddNums.length === 1 ? oddNums[0] : evenNums[0];
}
console.log(findOutlier([0, 1, 2])); // 1);
console.log(findOutlier([1, 2, 3])); // 2);
console.log(findOutlier([2, 6, 8, 10, 3])); // 3);
console.log(findOutlier([0, 0, 3, 0, 0])); // 3);
console.log(findOutlier([1, 1, 0, 1, 1])); // 0);
