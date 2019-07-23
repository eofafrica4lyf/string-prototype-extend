require('../toUpper/toUpper');
require('../toLower/toLower');

//AlternatingCase returns the letters in alternating cases starting with a lowercase
String.prototype.alternatingCase = function () {
  // final output initialized to an empty string
  var alternatingCase = "";
  // regex pattern for letters whether in uppercase or lowercase
  var regexTest = /[a-z]/i;
  for (var index = 0; index < this.length; index++) {
  // On each character of string, we check that it is a string character and perform the toLower and toUpper operations alternately
    alternatingCase +=
      regexTest.test(this[index]) === true && index % 2 === 0
        ? this[index].toLowerCase()
        : this[index].toUpperCase();
  }
  return alternatingCase;
};
