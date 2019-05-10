//isQuestion function returns true if the string is a question
String.prototype.isQuestion = function(){
    var regexTest = /.*?$/;//regex pattern to check that the end of the string is strictly a question mark
    return regexTest.test(this);
}