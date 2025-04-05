/*
P: Write a function named first_non_repeating_letter† that takes a string input, and returns the first character that is not repeated anywhere in the string.
For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.
As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.
If a string contains all repeating characters, it should return an empty string ("");
input: string
output: string
rules:
- return the letter that occurs only once in the string
- return the letter in its original case
- if the string consists of all repeating characters, return an empty string

E: 

D: input is a string, use an object where the key is the letters in lower case and the value is the frequency

A:
Initialize a letterCount object, assign to {}
Iterate over the string and populate the object with keys in lower case and values
Create an array of the object sorted from lowest to highest value
identify the letter that occurs once, likely the first element in the array at index 0, 0
Find the index of the letter in lower case of the string that is equal to the first element in the array
Return the letter in its original case
*/

function firstNonRepeatingLetter(str) {
  let letterCount = {};
  str
    .toLowerCase()
    .split("")
    .forEach((ltr) => {
      letterCount[ltr] = (letterCount[ltr] || 0) + 1;
    });

  let sortedLetters = Object.entries(letterCount).sort();
  let singleLetters = sortedLetters.filter((arr) => arr[1] === 1);
  let singleLetterIndex = 0;
  let singleLetter = "";

  if (sortedLetters.length === 1 && sortedLetters[0][1] > 1) {
    singleLetter = sortedLetters[0][0];
    return singleLetter;
  }

  if (singleLetters.length === 1) {
    singleLetterIndex = str.toLowerCase().indexOf(singleLetters[0][0]);
    singleLetter = str.toLowerCase()[singleLetterIndex];
  } else {
    let letterIndex = getLowestIndex(str.toLowerCase(), singleLetters);
    singleLetter = str[letterIndex];
  }
  return singleLetter;
}

function getLowestIndex(str, arr) {
  let lowestIndex = [];
  arr.forEach((subArr) =>
    lowestIndex.push(str.toLowerCase().indexOf(subArr[0][0]))
  );
  return lowestIndex.sort((a, b) => a - b)[0];
}

// console.log(
//   getLowestIndex("stress", [
//     ["e", 1],
//     ["r", 1],
//     ["t", 1],
//   ])
// );
console.log(firstNonRepeatingLetter("a")); // "a"
console.log(firstNonRepeatingLetter("sTress")); // "t"
console.log(firstNonRepeatingLetter("moonmen")); // "e"
console.log(firstNonRepeatingLetter("aAaa")); // ""
