/*
P: Given a short hand notation as string, calculate the points a player scored in a set.
input: string
output: integer
rules:
- output integer is the total points a player scored based on a specific coding system
- if W is included, return "Foul"
- if total score is more than 147, return 'invalid data'

E: 'Bn14Bn14Bn8P9'
4x14 + 4x14 + 4x8 + 6x9 = 150++ invalid

D: string, use an array to separate letters and numbers

A:
Create an object where key is the ball colors and value is the points
Create vars: ballColor = [], score = []
Initialize totalPoints to 0

SEPARATE LETTERS AND NUMBERS (helper function)
Convert input string to an array of chars
Iterate over the strArray
- if currChar is a letter
  - Yes: check if nextChar is also a letter
    - yes: ballColor is currChar + nextChar, append to ballColor array
    - no: ballColor is currChar, append to ballColor array

- Else: currChar is a number
  - check if nextChar is a number
    - yes: score is equal to currChar + nextChar, append number version to score array
    - no: score is equal to currChar, append number version to score array

CALCULATE TOTALS
Iterate over the ballColor array
  for each ballColor, get the points value
  multiply the points value by the score from the score array at the same index
  update totalPoints with the product of each ballColor points and score
Return totalPoints
*/

const ballPointsObj = {
  W: 0,
  R: 1,
  Y: 2,
  G: 3,
  Bn: 4,
  Be: 5,
  P: 6,
  Bk: 7,
};

function snookerPoints(setScore) {}

const NUMBERS = "0123456789";
function getLetters(str) {
  let letters = [];

  let strArray = str.split("");

  for (let idx = 0; idx < strArray.length; idx++) {
    let currChar = strArray[idx];
    let nextChar = strArray[idx + 1];

    if (!NUMBERS.includes(currChar)) {
      if (!NUMBERS.includes(nextChar)) {
        console.log(currChar, nextChar);
        letters.push(currChar, nextChar);
      }
    } else {
      letters.push(currChar);
    }
    console.log(letters);
  }

  // return letters;
}

function getNumbers(str) {}

console.log(getLetters("R15P3G1Bk4Y1Bn1Be3"));
let p = console.log;

p(snookerPoints("R15P3G1Bk4Y1Bn1Be3")); //85
// p(snookerPoints("R13Bk14YRGBnBkRBePBk1")); //147
// p(snookerPoints("G9G11P9Bn2Bn1Be10G7WBn10G3")); // 'Foul'
// p(snookerPoints("Bn14Bn14Bn8P9")); // 'invalid data'
