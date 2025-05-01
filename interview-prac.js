let p = console.log;
/* Count letters in string
P: In this kata, you've to count lowercase letters in a given string and return the letter count in a hash with 'letter' as key
and count as 'value'
input: string
output: object where the key is the letter and the value is the count of the occurrence of the letter in the string
rules:
- lowercase letters
- no punctuation
Example:
=end
letterCount('arithmetics') #=> {:a=>1, :c=>1, :e=>1, :h=>1, :i=>2, :m=>1, :r=>1, :s=>1, :t=>2}
p letter
_
count('codewars') == {:a=>1, :c=>1, :d=>1, :e=>1, :o=>1, :r=>1, :s=>1, :w=>1})
p letter
_
count('activity') == {:a=>1, :c=>1, :i=>2, :t=>2, :v=>1, :y=>1}
p letter
_
count('arithmetics') == {:a=>1, :c=>1, :e=>1, :h=>1, :i=>2, :m=>1, :r=>1, :s=>1, :t=>2})
D: string and objects
A:
Iterate over the string
Populate the object
return the object
*/

function letterCount(word) {
  let count = {};

  word.split("").forEach((letter) => {
    count[letter] = (count[letter] || 0) + 1;
  });
  return count;
}

// p(letterCount("codewars"));
// p(letterCount("activity"));
// p(letterCount("arithmetics"));

/* 2. Find All Pairs

P:You are given array of integers, your task will be to count all pairs in that array and return their count.
Array can be empty or contain only one value; in this case return 0
If there are more pairs of a certain number, count each pair only once. E.g.: for [0, 0, 0, 0] the return value is 2 (= 2 pairs
of 0s)
input: array of numbers
output: integer which represents the number of pairs in the array
rules:
- if array is empty or contains one value, return 0

E: [1, 2, 2, 20, 6, 20, 2, 6, 2] 4 2s = 2 pairs, 2 20s, 1 pair2 6s, 1 pair, total 4
Sort the array [1, 2, 2, 2, 2, 6, 6, 20, 20]
compare curr and next
  not a pair i increment by 1 [1,2] i=0 and 1, 1,2
  a pair i inc by 2 => 3,4

D: array and int
A:
Initialize a count var, assign to 0
Sort the array
Iterate over the array
- compare curr (idx = 0) with next (idx = 1), are they a pair?
  - yes, idx ++, count++
  - no, continue
return count
*/

function pairs(numbersArr) {
  let count = 0;

  if (numbersArr.length === 0 || numbersArr.length === 1) return count;

  let sortedNumbers = numbersArr.sort((a, b) => a - b);
  for (let i = 0; i < sortedNumbers.length - 1; i++) {
    let current = sortedNumbers[i];
    let next = sortedNumbers[i + 1];

    if (current === next) {
      count++;
      i++;
    }
  }
  return count;
}

// p(pairs([1, 2, 5, 6, 5, 2]) === 2); //true
// p(pairs([1, 2, 2, 20, 6, 20, 2, 6, 2]) === 4);
// p(pairs([0, 0, 0, 0, 0, 0, 0]) === 3);
// p(pairs([1000, 1000]) === 1);
// p(pairs([]) === 0);
// p(pairs([54]) === 0);

/* 3.  Return substring instance count

Complete the solution so that it returns the number of times the search
text is found within the full string
input: string and substring
output: int representing the number of times the substring is found in the main string


E: 

D: strings and integer
A:
Initialize a count var, assign to 0
Iterate over the input string,
- get a slice the length of the search text 
- check if the slice is equal to the search text
  - yes
    - increment count by 1
  - no continue
return count  
*/

function substringCount(mainString, searchText) {
  let count = 0;

  for (let idx = 0; idx < mainString.length; idx++) {
    let strSlice = mainString.slice(idx, idx + searchText.length);

    if (strSlice === searchText) {
      count++;
    }
  }
  return count;
}

// p(substringCount("abcdeb", "b") === 2); //true
// p(substringCount("abcdeb", "a") === 1);
// p(substringCount("abbc", "bb") === 1);

/* 4. Alphabet Symmetry
Consider the word "abode". We can see that the letter a is in position 1 and b is in position 2. In the alphabet, a and b are also in positions 1 and 2. Notice also that d and e in abode occupy the positions they would occupy in the alphabet,
which are positions 4 and 5.

P: Given an array of words, return an array of the number of letters that occupy their positions in the alphabet for each word. 
input: array of strings
output: array of integers where each int represents the number of letters in each string that occupy their respective alphabet position

E: ["IAMDEFANDJKL","thedefgh","xyzDEFghijabc"]=== [6,5,7]
DEFJKL = 6 occupies position 4,5,6 and 10,11, 12 respectively

D: array, strings and integer

A:
Initialize an alphabet constant assign to a string of the alphabet letters
Initialize a count var, assign to zero
Initialize a result array, assign to empty array
Iterate over the array
- for each string, check if the index of the currLetter to Lower case is equal to the index in the alphabet constant
  - yes, increment count by 1
  - no, continue
- after end of string loop, append count to result
- reset count to 0 (or assign count var inside loop so it resets to 0 when a new string is looked at)
Return result array  
*/

const ALPHABET = "abcdefghijklmnopqrstuvwxyz";

function alphabetSymmetry(arr) {
  const ALPHABET = "abcdefghijklmnopqrstuvwxyz";
  let result = [];
  let count = 0;

  arr.forEach((str) => {
    for (let idx = 0; idx < str.length; idx++) {
      if (str[idx].toLowerCase() === ALPHABET[idx]) {
        count++;
      }
    }
    result.push(count);
    count = 0;
  });

  return result;
}

// p(alphabetSymmetry(["abode", "ABc", "xyzD"])); //[4, 3, 1]);
// p(alphabetSymmetry(["abide", "ABc", "xyz"])); //[4, 3, 0]); // true

/* 5.  Longest Vowel Chain

P: The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. 
Given a lowercase string that has alphabetic characters only and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou.
input: string
output: integer that represents the longest vowel substring
rules:
- lowercase only, no spaces or punctuation

E: ultrarevolutionariees 
vowel substrings: io, iee => longest is 3
for the vowels that are at the end, need to check for longest after the loop

D: string and int

A:
Initialize a longest and current vars to 0
Initialize a vowels constant, assign to 'aeiou'
Iterate over the string
- if the currLetter is a vowel
  - increment current by 1
  - check if current is greater than longest
    - yes: reassign longest to equal current
- else: currLetter is not a vowel, reset current to 0
   
return longest    

*/

function longestVowelChain(str) {
  const VOWELS = "aeiou";

  let longest = 0;
  let current = 0;

  for (let idx = 0; idx < str.length; idx++) {
    if (VOWELS.includes(str[idx])) {
      current++;
      if (current > longest) {
        longest = current;
      }
    } else {
      current = 0;
    }
  }
  return longest;
}

// p(longestVowelChain("codewarriors") === 2); // true
// p(longestVowelChain("suoidea") === 3);
// p(longestVowelChain("iuuvgheaae") === 4);
// p(longestVowelChain("ultrarevolutionariees") === 3);
// p(longestVowelChain("strengthlessnesses") === 1);
// p(longestVowelChain("cuboideonavicuare") === 2);
// p(longestVowelChain("chrononhotonthuooaos") === 5);
// p(longestVowelChain("iiihoovaeaaaoougjyaw") === 8);

/*
P: Given a string of integers, return the number of odd-numbered substrings that can be formed.
input: string of digits
output: integer representing the number of odd substrings that can be formed with the string of digits
rules:
- return the number of substrings that can be formed with the string digit that are odd

E: In the case of "1341", they are 1, 13, 1341, 3, 341, 41, 1 a total of 7 numbers.

D: string and int, intermediate, convert string to numbers

A:
Initialize a substringCount var, assign to 0
Iterate over the input string using a nested loop
- get a slice of the string from i, to j (i + 1, inner loop), convert it to a number
  - check if the slice is odd
    - yes increment substringCount by 1
return substringCount

*/

function oddNumberSubs(str) {
  let substringCount = 0;

  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      let numberSlice = Number(str.slice(i, j));
      if (numberSlice % 2 === 1) {
        substringCount++;
      }
    }
  }
  return substringCount;
}

// p(oddNumberSubs("1341") === 7); //true
// p(oddNumberSubs("1357") === 10); //true
// p(oddNumberSubs("13471") === 12); //true
// p(oddNumberSubs("134721") === 13); //true
// p(oddNumberSubs("1347231") === 20); //true
// p(oddNumberSubs("13472315") === 28); //true

/* 7. Substring fun
Complete the function that takes an array of words. You must concatenate the nth letter from each word to construct a new word which should be returned as a string,
where n is the position of the word in the list.
input: array of strings
output: new string
rules:
- concatenate the nth letter of each string in the array to form a new string
- n is the index of each string in the array
- keep case
- if input array is empty, return an empty string

E: ["yoda", "best", "has"] 
n for yoda is 0, n for best is 1, n for has is 2
yoda[0] = y
best[1] = e
has[2] = s
yes

D: array, strings

A:
Initialize a finalString var, assign to empty string
Iterate over the array
  - append letter of the index of the word to finalString
    (Chad) = str[0][0]
return finalString
*/

function nthChar(arr) {
  let finalString = "";

  if (arr.length === 0) return finalString;

  for (let idx = 0; idx < arr.length; idx++) {
    finalString += arr[idx][idx];
  }
  return finalString;
}

// p(nthChar(["yoda", "best", "has"]));
// p(nthChar([]));
// p(nthChar(["X-ray"]));
// p(nthChar(["No", "No"]));
// p(
//   nthChar([
//     "Chad",
//     "Morocco",
//     "India",
//     "Algeria",
//     "Botswana",
//     "Bahamas",
//     "Ecuador",
//     "Micronesia",
//   ])
// );

/* 8. Repeated Substring
P: For a given nonempty string s find a minimum substring t and the maximum number k, such that the entire string s is equal to t repeated k times. The input string consists of lowercase latin letters. 
input: string
output: array that contains the substring and an integer that represents how many times the substring can be repeated to equal the input string
rules:
- return an array that contains the smallest substring 
- the array also contains an integer that when used to repeat the substring equals the input string

E: ababab => a repeat 6 times doesnt equal the original string
ab repeated 3 times equals the original string
['ab', 3]
To find the repeat count: get the length of the input string divided by the substring
IDEAS:
the repeat count needs to be a whole number
if the input string's length is odd, substring length is also odd

D: string, array, int

A:
Initialize an empty array, result
Initialize a repeat = 0
Iterate over the input string
  - get a slice from 0 to index + 1
  - get repeat by dividing input str length by substring length
  - check if slice repeated by repeat is equal to the input string
  - yes
    - append slice and repeat to result
    - break out of the loop
  no: get new slice
return result     

*/

function repeat(str) {
  let result = [];
  let repeatCount = 0;

  for (let idx = 0; idx < str.length; idx++) {
    let subString = str.slice(0, idx + 1);
    repeatCount = str.length / subString.length;

    if (subString.repeat(repeatCount) === str) {
      result.push(subString, repeatCount);
      break;
    }
  }

  return result;
}

// p(repeat("ababab")); //["ab", 3])
// p(repeat("abcde")); //["abcde", 1]

/*
9. Typoglycemia Generator
Requirement, return a string where:
1) the first and last characters remain in original place for each word
2) characters between the first and last characters must be sorted alphabetically
3) punctuation should remain at the same place as it started, for example: shan't -> sahn't

Assumptions:
1) words are seperated by single spaces
2) only spaces separate words, special characters do not, for example: tik-tak -> tai-ktk
3) special characters do not take the position of the non special characters, for example: -dcba -> -dbca
4) for this kata puctuation is limited to 4 characters: hyphen(-), apostrophe('), comma(,) and period(.)
5) ignore capitalisation
input: string
output: revised string
rules:
- leave first and last chars in the same position
- chars between the first and last must be sorted alphabetically
- leave punctuation (hyphen(-), apostrophe('), comma(,) and period(.)) in the same place
- if str length is less than or equal to 3, return the string

E: card-carrying
leave c and g as is, sort ardcarryin, put hypen back in original position
IDEAS
get index of punctuation and insert it back in the same place when forming the new string
separate first and last chars
get a copy of the remaining chars without punctuation and sort it

D:string, use array to store words

A:
Edge case: 
- if string length is less than or equal to 3, return string
- if char at index 0 or at length - 1 is a punctuation
  - get a slice of the string without punctuation
  - store first and last chars in vars
  - sort middle chars
  - concatenate first, middle and last chars with punctuation

Initialize an array of punctuation variable
Initialize a result empty array
Convert the input string to an array of words 
Iterate over the array of words
- iterate over each letter in each word
  - store the first and last letters in variables
  - if there is punctuation 
    - get the index of the punctuation and the punctuation itself
      - create the middle chars of the word without punctuation
      - middle chars: combination of the two below
        - firstHalf: slice of 0 to punctuation index - 1
        - secondHalf: slice from punctuation index
        - middleChars is firstHalf + secondHalf sorted
      - create sortedMiddleChars with punctuation  
       - get a new first half and second half
        - firstHalf: slice of 0 to punctuation index - 1
        - secondHalf: slice from punctuation index
      - sortedMiddleChars = newFirstHalf + punctuation + newSecondHalf
  - else if index is -1, no punctuation, leave punct an empty string
    - create middle chars: sort the remaining chars (helper??)

  CREATE THE NEW WORDS
  - append firstChar, middleChar and last char to result
Return result as a string    

card-carrying
punct = "-"
punctIndex = 4
firstChar = c
lastChar = g
middleChars = aacdinrrry
firstHalf = aac
secondHalf dinrrry
middleChars = aac + - + dinrrry => aac-dinrrry
result = [c, aac-dinrrry, g]
result = caac-dinrrryg

-dcba

*/

function ScrambleWords(str) {
  const punctuation = [".", ",", "-", "'"];
  let scrambled = [];

  if (str.length <= 3) return str;

  if (punctuation.includes(str[0])) {
    let punct = str[0];
    let firstChar = str[1];
    let lastChar = str[str.length - 1];
    let middleChar = str
      .split("")
      .slice(2, str.length - 1)
      .sort()
      .join("");
    return punct + firstChar + middleChar + lastChar;
  }

  if (punctuation.includes(str[str.length - 1])) {
    let result = [];
    strArr = str.split("");
    let punct = strArr.pop();
    let firstChar = strArr.shift();
    let lastChar = strArr.pop();
    let middleChar = strArr.sort();

    result.push(firstChar);
    result = result.concat(middleChar);
    result.push(lastChar, punct);
    return result.join("");
  }

  let words = str.split(" ");

  words.forEach((word) => {
    let firstChar = word[0];
    let lastChar = word[words.length - 1];
    let middleChars = "";
    let finalString = "";

    for (let idx = 1; idx < word.length - 1; idx++) {
      let currentChar = word[idx];
      console.log(currentChar);
      if (punctuation.includes(currentChar)) {
        let punct = word.indexOf(currentChar);
        let firstHalf = word.slice(1, punct);
        let secondHalf = word.slice(punct + 1, -1);
        middleChars = (firstHalf + secondHalf).split("").sort().join("");
        let sortedfirstHalf = middleChars.slice(0, punct - 1);
        let sortedSecondHalf = middleChars.slice(punct);
        middleChars = sortedfirstHalf + currentChar + sortedSecondHalf;
        finalString += middleChars;
      } else {
        middleChars = word.slice(1, -1).split("").sort().join("");
      }
    }
    console.log(firstChar, lastChar);
  });
}

// p(ScrambleWords("professionals")); //
// "paefilnoorsss",
//   "The first and last letters of a word should reamin in place with the inner letters sorted";

// p(ScrambleWords("i")); // "i", "Must handle single charater words");
// p(ScrambleWords("me")); // "me", "Must handle 2 charater words");
// p(ScrambleWords("you")); // "you", "Must handle 3 charater words");
// p(ScrambleWords("card-carrying")); //"caac-dinrrryg",
// // "Only spaces separate words and punctuation should remain at the same place as it started"
// p(ScrambleWords("shan't")); //"sahn't" "Punctuation should remain at the same place as it started"

// p(ScrambleWords("-dcba")); //"-dbca" "Must handle special character at the start"

// p(ScrambleWords("dcba.")); // "dbca.", "Must handle special character at the end");
// p(
//   ScrambleWords(
//     "you've gotta dance like there's nobody watching, love like you'll never be hurt, sing like there's nobody listening, and live like it's heaven on earth."
//   )
// );
// "you've gotta dacne like teehr's nbdooy wachintg, love like ylo'ul neevr be hrut, sing like teehr's nbdooy leiinnstg, and live like it's haeevn on earth.",
//   "Must handle a full sentence";

/* 10. Most frequently used words
P: Write a function that, given a string of text (possibly with punctuation and line-breaks), returns an array of the top-3 most occurring words, in descending order of the number of occurrences.
input: string containing characters separated by spaces
output: array containing the top 3 most occurring strings
rules:
- top 3 strings should be in descending order (most to least)
- string in returned array should be lowercase
- strings may contain punctuation, include it in final output (if applicable)
- if input string doesn't have letters, return an empty array, []

E: 

D: string, array, use an object to get frequency count 
key is the letter and value is the count

A:

Convert input string to an array of chars
EDGE CASE:
If the string length is one and it doesn't include the alphabet, return an empty array else return an array with the char

Populate the charCount object
Create an array of the key value pairs, sorted in descending order
If length of the array is greater than 3, 
  - return the top 3 keys
else if the length of the array is less than or equal to 3, return the keys
*/

// let str = " ,e ..";
// let strArr = str.split(" ");
// console.log(strArr);

function topThreeWords(str) {
  let wordCount = {};
  let words = str.split(" ");
  let result = [];

  words.forEach((word) => {
    wordCount[word] = (wordCount[word] || 0) + 1;
  });

  let topWords = Object.entries(wordCount).sort((a, b) => b[1] - a[1]);

  if (topWords.length > 3) {
    topWords = topWords.slice(0, 3);
    topWords.forEach((arr) => {
      result.push(arr[0]);
    });
  } else if (topWords.length <= 3) {
    topWords.forEach((arr) => {
      result.push(arr[0]);
    });
  }
  return result;
}

// p(topThreeWords("a a a  b  c c  d d d d  e e e e e")); // ["e", "d", "a"]);
// p(topThreeWords("a a a c b b")); // ["a", "b", "c"]);
// p(topThreeWords("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e")); //["e","ddd","aa"]
// p(topThreeWords("  //wont won't won't ")); // ["won't", "wont"]);
// p(topThreeWords("  , e   .. ")); // ["e"]);
// p(topThreeWords("  ...  ")); // []);
// p(topThreeWords("  '  ")); // []
// p(
//   topThreeWords(`In a village of La Mancha, the name of which I have no desire to call to
//  mind, there lived not long since one of those gentlemen that keep a lance
//  in the lance-rack, an old buckler, a lean hack, and a greyhound for
//  coursing. An olla of rather more beef than mutton, a salad on most
//  nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
//  on Sundays, made away with three-quarters of his income.`)
// ); //["a", "of", "on"]

/*
Domain name
*/

/* 12. Detect Pangram
P: A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The
quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation
input: string
output: boolean
rules: 
- check if the string contains every letter in the alphabet
- case insensitive
- ignore numbers and punctuation

E:

D: string, use an object to get each letter as keys

A:
Create a clean version of the string
- convert to lower case
- remove punctuation

Create a letter count object
Iterate over the string
- populate object with letter as the key and occurence as the value

Create an array of the keys
Return true if the array length is 26, false otherwise

*/

function pangram(sentence) {
  let cleanSentence = sentence
    .toLowerCase()
    .split("")
    .filter((char) => char >= "a" && char <= "z");

  let letterCount = {};

  cleanSentence.forEach((letter) => {
    letterCount[letter] = (letterCount[letter] || 0) + 1;
  });

  let letters = Object.keys(letterCount);

  return letters.length === 26;
}

// p(pangram("The quick brown fox jumps over the lazy dog.")) === true;
// p(pangram("This is not a pangram.")) === false;

/* 13. Kebabize
P: Modify the kebabize function so that it converts a camel case string into a kebab case.
input: string 
output: string
rules:
- convert input string to kebab case
- separate strings that start with a capital letter with a hyphen
- replace non-alpha chars with empty string
- kebab case string are all lower case

E:
"camelsHaveThreeHumps"  -->  "camels-have-three-humps"
"camelsHave3Humps"  -->  "camels-have-humps"
"CAMEL"  -->  "c-a-m-e-l"

D: string

A:
Initialize an alphabet constant, assign to a string of alphabet letters
Initialize a kebabString var, assign to first char of the input string in lower case
Create an array of the remaining letters
Iterate over the array
- if letter is part of the alphabet
  - check if the letter is lower case
    - yes, append it to kebabStr
    - no, append hyphen plus lowercase version of the letter
- no: letter is equal to an empty string, append empty string to kebabString  
Return kebabString    
 
*/

const alphabet = "abcdefghijklmnopqrstuvwxyz";

function kebabize(str) {
  let kebabString = str[0].toLowerCase();

  let strArray = str.slice(1).split("");

  strArray.forEach((char) => {
    if (alphabet.includes(char.toLowerCase())) {
      if (char === char.toLowerCase()) {
        kebabString += char;
      } else {
        kebabString += `${"-"}${char.toLowerCase()}`;
      }
    } else {
      kebabString += "";
    }
  });
  return kebabString;
}

// p(kebabize("MyCamelCasedString")); // 'my-camel-cased-string'
// p(kebabize("myCamelCasedString")); // 'my-camel-cased-string'
// p(kebabize("MyCamelHas3Humps")); // 'my-camel-has-humps'
// p(kebabize("myCamelHas3Humps")); // 'my-camel-has-humps'
// p(kebabize("CAMEL")); // 'c-a-m-e-l'
// p(kebabize("cAMEL")); // 'c-a-m-e-l'
// p(kebabize("AbstractSingletonProxyFactoryBean")); // 'abstract-singleton-proxy-factory-bean'
// p(kebabize("abstractSingletonProxyFactoryBean")); // 'abstract-singleton-proxy-factory-bean'

/* 14. Dubstep
Separate string by WUB
Replace WUB with a space
Trim the return value
*/

function songDecoder(str) {
  let strArray = str.split("WUB");

  return strArray.filter((letter) => letter !== "").join(" ");
}

// p(songDecoder("AWUBBWUBC"));
// // "A B C",
// // "WUB should be replaced by 1 space"

// p(songDecoder("AWUBWUBWUBBWUBWUBWUBC"));
// // "A B C",
// // "multiples WUB should be replaced by only 1 space"

// p(songDecoder("WUBAWUBBWUBCWUB"));
// "A B C",
// "heading or trailing spaces should be removed"

/* 15. Take a Ten Minute Walk
P: You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block.

Create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.
input: array
output: boolean 
rules:
- walk should take exactly ten minutes
- it takes 1 minute to walk one direction
- if input array is greater than 10 or less than 10 you are late or early, return false
- you have to return to your starting point

E: 
["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"] = 5 n's, 5 s's => true
["n", "n", "n", "s", "n", "s", "n", "s", "n", "s"] = 6 n's, 4 s's => false
- both directions need to be equal in order to return true

D: array, boolean => use an object to store the direction and count

A:
EDGE CASE:
if array's length is greater than or less than 10, return false
Create and populate a directions object
Iterate over the object
  - if the key is "n"
    - check if the key/value of "n" is equal to the key/value of "s"
      - yes, return true
  else if the key is "w"
    - check if the key/value of "w" is equal to the key/value of "e"
      - yes return true
return false      
*/

function isValidWalk(walk) {
  if (walk.length > 10 || walk.length < 10) return false;

  let walkCount = {};
  walk.forEach((direction) => {
    walkCount[direction] = (walkCount[direction] || 0) + 1;
  });

  for (let heading in walkCount) {
    if (heading === "n") {
      return walkCount[heading] === walkCount["s"];
    } else if (heading === "w") {
      return walkCount[heading] === walkCount["e"];
    }
  }
  return false;
}

// p(isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"])); // true
// p(isValidWalk(["w", "e", "w", "e", "w", "e", "w", "e", "w", "e", "w", "e"])); // false
// p(isValidWalk(["w"])); // false
// p(isValidWalk(["n", "n", "n", "s", "n", "s", "n", "s", "n", "s"])); // false

/* 16. spinWords
p: Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter
words reversed.  Strings passed in will consist of only letters and spaces. Spaces will be
included only when more than one word is present.
input: string
output: new string where words with more than five letters is reversed
rules:
- reverse words that have 5 or more letters
- keep case as is
- keep spaces where included

E:

D: string, use an array to store each word
A:
Initialize an empty result array var
Convert string to an array of words
Iterate over the array of words
  - if word length is greater or equal to 5, reverse it
    - append reversed word to result
  - else append word as is
Return result as a new string    

*/

function spinWords(sentence) {
  return sentence
    .split(" ")
    .map((word) => {
      if (word.length >= 5) {
        word = word.split("").reverse().join("");
        return word;
      } else {
        return word;
      }
    })
    .join(" ");
}

// p(spinWords("Hey fellow warriors")) === "Hey wollef sroirraw";
// p(spinWords("This is a test")) === "This is a test";
// p(spinWords("This is another test")) === "This is rehtona test";
// p(spinWords("test")) === "test";

/* 17. Write Number in Expanded Form

P: You will be given a number and you will need to return it as a string in Expanded Form.
input: integer
output: string that represents the integer in expanded form
rules:
- expanded form is where the number 12 is 10X1 + 1 x 2
- Each position of the digit from the back represents the digit multiplied by 10 exponent 1, 10 exponent 2, etc ..

Example:
expandedForm(12); # Should return '10 + 2'
expandedForm(42); # Should return '40 + 2'
expandedForm(70304); # Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0.

D: Int and string, use an array to store each digit

A:
Initilize an expandedString var, assign to []
Convert input string to an array of string digits
Reverse the array and iterate over it
- for each index, multiply each string digit by 10 exponent index
  - if the result is not zero
  - append the result to expandedString array
Reverse the array so the digits are back in the original order  
Return the array as a string delimited by the plus sign
*/

function expandedForm(digits) {
  let expanded = [];
  let newNum = 0;

  let digitsStrArray = String(digits).split("");
  digitsStrArray.reverse().forEach((num, idx) => {
    newNum = Number(num) * 10 ** idx;

    if (newNum !== 0) {
      expanded.push(newNum);
    }
  });
  return expanded.reverse().join(" + ");
}

// p(expandedForm(12)) === "10 + 2";
// p(expandedForm(42)) === "40 + 2";
// p(expandedForm(70304)) === "7000 + 300 + 4";

/* 30.  Anagram Difference
P: Given two words, how many letters do you have to remove from them to make them anagrams?
input: two strings
output: int
rules:
- return an int that represents how many total letters need to be removed from both words so they are anagrams
- all lower case

E: 
First word : c od e w ar s (4 letters removed od, ar)
Second word : ha c k er r a nk (6 letters removed, ha, er, nk )
Result : 10
remove the letters so that the letters of word1 is equal to word2
if word1 is equal to word2 return 0

D: input string, use an object to get a letter count for word1 and word2
IDEAS:
compare objects key/value pairs
What letters do both objects have?  Are their values different?  
- if so, remove letters so the min values are the same
What letters are unique to both objects?
  - remove all of the unique ones
END: both objects should have the same key/value pairs  

A:
if word1 is equal to word2, return 0
Populate word1Count and word2Count objects
Iterate over word1Count and compare key/value pairs
  - check if word1Count key/value is not present in word2Count
    - if not present, add the value of word1Count key/value 
  - if present: check if the values are equal, 
    - if so, removeLetterCount remains 0
    - if not equal, get the difference and add that value to removeLetterCount
Iterate over word2Count and compare key/value pairs    
 - check if word2Count key/value is not present in word1Count
    - if not present, add the value of word2Count key/value 
Return removeLetterCount 

*/

function anagramDiff(word1, word2) {
  let removeLetterCount = 0;

  if (word1 === word2) return 0;

  let word1Count = createLetterCount(word1);
  let word2Count = createLetterCount(word2);

  for (let letter in word1Count) {
    if (!word2Count[letter]) {
      removeLetterCount += word1Count[letter];
    } else if (word2Count[letter] !== word1Count[letter]) {
      removeLetterCount += Math.abs(word2Count[letter] - word1Count[letter]);
    }
  }

  for (let ltr in word2Count) {
    if (!word1Count[ltr]) {
      removeLetterCount += word2Count[ltr];
    }
  }

  return removeLetterCount;
}

function createLetterCount(word) {
  let letterCount = {};
  word.split("").forEach((letter) => {
    letterCount[letter] = (letterCount[letter] || 0) + 1;
  });
  return letterCount;
}

// p(createLetterCount("codewars"));

p(anagramDiff("", "")); // 0
p(anagramDiff("a", "")); // 1
p(anagramDiff("ab", "a")); // 1
p(anagramDiff("ab", "cd")); // 4
p(anagramDiff("aab", "a")); // 2
p(anagramDiff("codewars", "hackerrank")); // 10
