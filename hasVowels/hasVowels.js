//hasVowels function returns true if the string contains vowels
String.prototype.hasVowels = function() {
  var regex = /[aeiou]/;//regex pattern to identify only vowel characters
  return regex.test(this);// test whether one or more vowels are present
};
