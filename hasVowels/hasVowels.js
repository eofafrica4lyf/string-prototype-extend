// hasVowels function returns true if the string contains vowels
String.prototype.hasVowels = function() {
  // regex pattern to identify only vowel characters
  var regex = /[aeiou]/;
  // test whether one or more vowels are present
  return regex.test(this);
};
