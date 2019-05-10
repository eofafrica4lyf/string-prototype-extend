String.prototype.isDigit = function () { 
    var regexTest = /(\b\d\b)$/;
    if (regexTest.test(this)) return true;
    else return false;
}