function noBoringZeros(n) {
  if (n === 0) return 0;
  let stringArray = String(n).split("");

  for (let idx = stringArray.length - 1; idx >= 0; idx--) {
    if (stringArray[idx] === "0") {
      stringArray.pop();
    } else {
      break;
    }
  }
  return Number(stringArray.join(""));
}

console.log(noBoringZeros(1450)); // 145);
console.log(noBoringZeros(960000)); // 96);
console.log(noBoringZeros(1050)); // 105);
console.log(noBoringZeros(-1050)); // -105);
console.log(noBoringZeros(-105)); // -105);
console.log(noBoringZeros(0)); // 0);
