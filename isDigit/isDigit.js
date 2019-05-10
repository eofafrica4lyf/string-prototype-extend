//isDigit function returns true if the string is a digit(one number)
String.prototype.isDigit = function () { 
    var regexTest = /(\b\d\b)$/;//regex pattern to check for a word that contains just one digit
    if (regexTest.test(this)) return true;
    else return false;
}