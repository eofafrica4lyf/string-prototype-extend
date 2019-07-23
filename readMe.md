[![CircleCI](https://circleci.com/gh/eofafrica4lyf/string-prototype-extend.svg?style=svg)](https://circleci.com/gh/eofafrica4lyf/string-prototype-extend)
# String Prototype Extend


A mini-prototype project to extend the ​String​ class in Javascript. Using Prototype Oriented Programming, methods, procedures and instance attributes are added to the String class to support more string manipulation features. Listed below is a list of the methods added to the string class.

* **hasVowels** (typeof ​Boolean​): Returns true if the string contains vowels. ​This method implements Regular Expression.
* **toUpper** (typeof ​String​)​: R​eturns the String in question but with all characters in upper cases as applicable. 
* **toLower** (typeof ​String​)​: ​Returns the String in question but with all characters in their lower cases as applicable.
* **ucFirst** (typeof ​String​): Returns the String in question but changes the First Character to an Upper case. ​I made use of my ​toUpper​ method above to implement this method or a one-liner.
* **isQuestion** (typeof ​Boolean​)​: ​Return true if the string is a question (ending with a question mark). 
* **words​**: R​eturns a list of the words in the string, as an Array. 
* **wordCount** (typeof ​Number​): Returns the number of words in the string. It makes use of the ​words​ method above.
* **toCurrency** (typeof ​String​)​: R​eturns a currency representation of the String e.g 11111.11 should be represented as 11,111.11.
* **fromCurrency** (typeof ​Number​): Returns a number representation of the Currency String e.g 11,111.11 should return 11111.11
* **inverseCase** (typeof String): Returns each letter in the string as an inverse of its current case e.g Mr. Ben should return mR. bEN.
* **alternatingCase** (typeof String): Returns the letters in alternating cases. It must start with a lower case e.g Onomatopoeia should return oNoMaToPoEiA.
* **numberWords** (typeof String): Returns the numbers in words e.g 325 should return three two five.
* **isDigit** (typeof Boolean): Returns true if the string is a digit(one number) e.g 3 should return true and 34 should return false.
