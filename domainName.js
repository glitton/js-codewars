/*
P: Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. 

E: For example:
* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet"

D: input is a string, use an array to parse the string

A:
Create a new URL object by passing in the input string to the constructor
Extract the hostname from the URL object


*/

// function domainName(url) {
//   let urlObj = new URL(checkProtocol(url));
//   let hostname = urlObj.hostname;

//   let hostnameArray = hostname.split(".");
//   if (hostnameArray.includes("www")) {
//     return hostnameArray[1];
//   } else {
//     return hostnameArray[0];
//   }
// }

// function checkProtocol(url) {
//   if (!url.startsWith("http://") && !url.startsWith("https://")) {
//     return "http://" + url;
//   }
//   return url;
// }

//Use the replace method

function domainName(url) {
  return url
    .replace("http://", "")
    .replace("https://", "")
    .replace("www.", "")
    .split(".")[0];
}

console.log(domainName("http://google.com")); // "google");
console.log(domainName("http://google.co.jp")); // "google");
console.log(domainName("www.xakep.ru")); // "xakep");
console.log(domainName("https://youtube.com")); // "youtube");
