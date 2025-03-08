function isIntArray(arr) {
  if (!Array.isArray(arr)) return false;

  return arr.every((num) => Number.isInteger(num));
}

// console.log(isIntArray([])); //true);
// console.log(isIntArray([1, 2, 3, 4])); // true);
// console.log(isIntArray([-11, -12, -13, -14])); // true);
// console.log(isIntArray([1.0, 2.0, 3.0])); // true);
// console.log(isIntArray([1, 2, NaN])); // false);
// console.log(isIntArray(true)); // false);
// console.log(isIntArray(null)); // false);
// console.log(isIntArray(undefined)); // false);
// console.log(isIntArray(NaN)); // false);
// console.log(isIntArray("")); // false);
console.log(isIntArray([null])); // false);
console.log(isIntArray([undefined])); // false);
console.log(isIntArray([NaN])); // false);
console.log(isIntArray([1.0, 2.0, 3.0001])); // false);
console.log(isIntArray(["-1"])); // false);
console.log(isIntArray([1.23e-7, 2])); // false);
console.log(isIntArray([1.2, 1.8, 3])); // false);
