// numberWords function returns the numbers in words
String.prototype.numberWords = function () { 
    // regex pattern to match a single digit character only
    var regexTest = /\d/;
    // final string result
    var wordString = '';
    // variable to contain and extract the digit matched by the pattern
    var extractDigit;
    // array containing strings to replace the digits with
    var digitWords = ['one','two','three','four','five','six','seven','eight','nine','ten'];
    for (index = 0; index < this.length; index++) {
        // for each digit character, take the matched digit character
        extractDigit = regexTest.exec(this[index]);
        // then, replace it with the corresponding string contained in the array
        wordString += this[index].replace(regexTest, digitWords[extractDigit[0] - 1]);
        // add a space to the final string result until the last digit is reached
        wordString += (index !== this.length - 1) ? ' ' : '';
    }
    return wordString;
}
