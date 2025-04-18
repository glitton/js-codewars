/*
P: Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.
input: string
output: string converted to camel case
rules:
- replace dash/underscore with first letter capitalized
- if first word's letter is capitalized, leave as is

E:
D: string

A:
Variables: camelCaseString
EDGE: if str is empty, return empty string
Iterate over the string
  if char is equal to "-" or "_", 
    - replace it with an empty string
    - convert next letter to upper case
    - append letter plus rest of word to camelCaseString
  else
    append word to camelCaseString
Return camelCaseString    

*/

// function toCamelCase(str) {
//   let strArray = [];
//   if (str === "") return "";

//   if (str.includes("-")) {
//     strArray = str.split("-");
//   } else if (str.includes("_")) {
//     strArray = str.split("_");
//   }

//   let camelCaseString = strArray[0];
//   for (let idx = 1; idx < strArray.length; idx++) {
//     if (strArray[idx][0] === strArray[idx][0].toUpperCase()) {
//       camelCaseString += strArray[idx][0] + strArray[idx].slice(1);
//     } else {
//       camelCaseString +=
//         strArray[idx][0].toUpperCase() + strArray[idx].slice(1);
//     }
//   }
//   return camelCaseString;
// }

function toCamelCase(str) {
  let finalString = "";

  for (let idx = 0; idx < str.length; idx++) {
    let currChar = str[idx];
    let nextChar = str[idx + 1];
    if (currChar === "_" || currChar === "-") {
      // Set currChar as empty when you find an underscore or dash, don't add it to finalString
      if (nextChar) {
        // Check if nextChar exists
        finalString += nextChar.toUpperCase(); // Convert nextChar to uppercase and add it to finalString
        idx++; // Skip the next character since we already processed it
      }
    } else {
      finalString += currChar; // Otherwise, just add currChar to finalString
    }
  }
  return finalString;
}
console.log(toCamelCase("")); //""
console.log(toCamelCase("the_stealth_warrior")); // "theStealthWarrior"
console.log(toCamelCase("The-Stealth-Warrior")); //"TheStealthWarrior"
console.log(toCamelCase("A-B-C")); //"ABC"
