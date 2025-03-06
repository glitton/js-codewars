/*
P: Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

input: array
output: string 
rules:
- You will always get an valid array. And it will be always exactly one letter be missing. 
- The length of the array will always be at least 2.
- The array will always contain letters in only one case.

E: 
['a','b','c','d','f'] -> 'e'
['O','Q','R','S'] -> 'P'

D: input is an array, use a string to create an alphabet constant

A:
Initialize an alphabet constant, assign to letters in the alphabet
Initialize alphabetIndex
Find the index of the first letter from the input array on the ALPHABET constant, assign it to alphabetIndex


Iterate over the input array
  - compare each letter to the in the alphabet constant starting from alphabetIndex
    - if they are not the same, assign the letter from alphabetIndex to missingLetter

Check Missing Letter Case:
  check if letter at index 0 of the input array is lower case, 
    - if so return missingLetter as lower case
    - else return missingLetter as upper case
*/

const ALPHABET = "abcdefghijklmnopqrstuvwxyz".split("");

function findMissingLetter(lettersArray) {
  let missingLetter = "";
  let alphabetIndex = ALPHABET.indexOf(lettersArray[0].toLowerCase());

  for (let idx = 0; idx < lettersArray.length; idx++) {
    if (lettersArray[idx].toLowerCase() !== ALPHABET[alphabetIndex + idx]) {
      missingLetter = ALPHABET[alphabetIndex + idx];
      break;
    }
  }

  return lettersArray[0] === lettersArray[0].toLowerCase()
    ? missingLetter
    : missingLetter.toUpperCase();
}
console.log(findMissingLetter(["a", "b", "c", "d", "f"])); //e
console.log(findMissingLetter(["O", "Q", "R", "S"])); //P
