function countPositivesSumNegatives(arr) {
  let count = 0;
  let sumNegatives = 0;

  if (arr === null || arr.length === 0) return [];

  arr.forEach((num) => {
    if (num > 0) {
      count++;
    } else {
      sumNegatives += num;
    }
  });
  return [count, sumNegatives];
}

let testData = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14];
console.log(countPositivesSumNegatives(testData));
