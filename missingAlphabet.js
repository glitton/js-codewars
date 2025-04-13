/*
P: The function should insert only after the first occurrence of each character of the input string, all the alphabet letters that:
-are NOT in the original string
-come after the letter of the string you are processing

Each added letter should be in uppercase, the letters of the original string will always be in lowercase.
input: string
output: modified string
rules:
- insert only after the first occurrence of each letter of the input string all the alphabet letters that are NOT in the original string
- insert alphabet in uppercase after the letter of the string 

Example:
input: "holly"
missing letters: "a,b,c,d,e,f,g,i,j,k,m,n,p,q,r,s,t,u,v,w,x,z"
output: "hIJKMNPQRSTUVWXZoPQRSTUVWXZlMNPQRSTUVWXZlyZ"

D: input string, use an array to store seen letters

A:
Create an alphabet constant
Initialize a finalString variable, assign to empty string
Initialize an array, seen, to store seen letters

Iterate over the input string
- if current letter not in seen, append it to seen
  - append current letter to finalString plus all the alphabet after that letter
    - get the index of the current letter from the alphabet constant
    - find the letter after the current letter in the revised alphabet
      - get an upperCaseLetter slice from index + 1
    - append those letters in uppercase to finalString
- else if in seen , append letter as is
Return finalString    
*/

const ALPHABET = "abcdefghijklmnopqrstuvwxyz";

function insertMissingLetters(word) {
  let finalWord = "";
  let seenLetters = [];

  for (let idx = 0; idx < word.length; idx++) {
    if (!seenLetters.includes(word[idx])) {
      seenLetters.push(word[idx]);
      let index = ALPHABET.indexOf(word[idx]);
      // console.log(word[idx], index);
      let upperCaseAlphabet = ALPHABET.slice(index + 1)
        .replace(/[helo]/g, "")
        .toUpperCase();
      // console.log(upperCaseAlphabet);
      finalWord += word[idx] + upperCaseAlphabet;
    } else {
      finalWord += word[idx];
    }
  }
  return finalWord;
}

console.log(insertMissingLetters("hello"));
//"hIJKMNPQRSTUVWXYZeFGIJKMNPQRSTUVWXYZlMNPQRSTUVWXYZloPQRSTUVWXYZ";
