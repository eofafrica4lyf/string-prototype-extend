//numberWords function returns the numbers in words
String.prototype.numberWords = function () { 
    var regexTest = /\d/;//regex pattern to match a single digit character only
    var wordString = '';//final string result
    var extractDigit;//variable to contain and extract the digit matched by the pattern
    var digitWords = ['one','two','three','four','five','six','seven','eight','nine','ten'];//array containing strings to replace the digits with
    for (index = 0; index < this.length; index++) {
        extractDigit = regexTest.exec(this[index]);//for each digit character, take the matched digit character
        wordString += this[index].replace(regexTest, digitWords[extractDigit[0] - 1]);//then, replace it with the corresponding string contained in the array
        wordString += (index !== this.length - 1) ? ' ' : '';//add a space to the final string result until the last digit is reached
    }
    return wordString;
}
console.log('2372934'.numberWords());