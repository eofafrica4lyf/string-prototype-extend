String.prototype.isQuestion = function(){
    var regexTest = /.*?$/;
    return regexTest.test(this);
}