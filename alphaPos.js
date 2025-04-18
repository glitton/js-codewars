// function alphabetPosition(text) {
//   const ALPHABET = "abcdefghijklmnopqrstuvwxyz";
//   let final = "";
//   let textArray = text.toLowerCase().split("");

//   textArray.forEach((letter) => {
//     if (ALPHABET.includes(letter)) {
//       final += `${ALPHABET.indexOf(letter) + 1} `;
//     }
//   });
//   return String(final);
// }

function alphabetPosition(text) {
  return text
    .toLowerCase()
    .split("")
    .map((letter) => {
      let index = letter.charCodeAt(0);
      return index >= 97 && index <= 122 ? index - 96 : null;
    })
    .filter((char) => char !== null)
    .join(" ");
}

console.log(alphabetPosition("The sunset sets at twelve o' clock.")); // "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
console.log(alphabetPosition("The narwhal bacons at midnight.")); // "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20"
