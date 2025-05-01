/* 13. Kebabize
P: Modify the kebabize function so that it converts a camel case string into a kebab case.
*/

// p(kebabize("MyCamelCasedString")); // 'my-camel-cased-string'
// p(kebabize("myCamelCasedString")); // 'my-camel-cased-string'
// p(kebabize("MyCamelHas3Humps")); // 'my-camel-has-humps'
// p(kebabize("myCamelHas3Humps")); // 'my-camel-has-humps'
// p(kebabize("CAMEL")); // 'c-a-m-e-l'
// p(kebabize("cAMEL")); // 'c-a-m-e-l'
// p(kebabize("AbstractSingletonProxyFactoryBean")); // 'abstract-singleton-proxy-factory-bean'
// p(kebabize("abstractSingletonProxyFactoryBean")); // 'abstract-singleton-proxy-factory-bean'

/* 19. Title Case ( https://www.codewars.com/kata/5202ef17a402dd033c000009 )
A string is considered to be in title case if each word in the string is either (a) capitalised (that is, only the first letter of
the word is in upper case) or (b) considered to be an exception and put entirely into lower case unless it is the first word,
which is always capitalised.
Write a function that will convert a string into title case, given an optional list of exceptions (minor words). The list of
minor words will be given as a string with each word separated by a space. Your function should ignore the case of the
minor words string -- it should behave in the same way even if the case of the minor word string is changed.

*/

/* 22. Scramblies ( https://www.codewars.com/kata/55c04b4cc56a697bb0000048/train/ruby )

*/

/* 23. Longest alphabetical substring ( https://www.codewars.com/kata/5a7f58c00025e917f30000f1 )

*/

/* 30. Anagram Difference ( https://www.codewars.com/kata/5b1b27c8f60e99a467000041 )

*/
// p(anagramDiff("", "")); // 0
// p(anagramDiff("a", "")); // 1
// p(anagramDiff("ab", "a")); // 1
// p(anagramDiff("ab", "cd")); // 4
// p(anagramDiff("aab", "a")); // 2
// p(anagramDiff("codewars", "hackerrank")); // 10

/* 32. Highest Scoring Word (https://www.codewars.com/kata/57eb8fcdf670e99d9b000272 )

*/

p(highestScore("man i need a taxi up to ubud")); // 'taxi');
p(highestScore("what time are we climbing up the volcano")); // 'volcano');
p(highestScore("take me to semynak")); // 'semynak');
p(highestScore("aa b")); // 'aa');
p(highestScore("b aa")); // 'b');
p(highestScore("bb d")); // 'bb');
p(highestScore("d bb")); // 'd');
p(highestScore("aaa b")); // 'aaa');
