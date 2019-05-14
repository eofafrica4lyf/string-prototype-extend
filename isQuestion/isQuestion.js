// isQuestion function returns true if the string is a question
String.prototype.isQuestion = function (){
    // regex pattern to check that the end of the string is strictly a question mark
    var regexTest = /.*?$/;
    return regexTest.test(this);
}
