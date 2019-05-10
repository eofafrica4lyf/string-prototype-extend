String.prototype.numberWords = function () { 
    var regexTest = /\d/;
    var wordString = '';
    var extractDigit;
    var digitWords = ['one','two','three','four','five','six','seven','eight','nine','ten'];
    for (index = 0; index < this.length; index++) {
        extractDigit = regexTest.exec(this[index]);
        wordString += this[index].replace(regexTest, digitWords[extractDigit[0] - 1]);
        wordString += (index !== this.length - 1) ? ' ' : '';
    }
    return wordString;
}
console.log('2372934'.numberWords());