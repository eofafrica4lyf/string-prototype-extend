require('../toUpper/toUpper');

//ucFirst function returns the String in question but changes the First Character to an Upper case
String.prototype.ucFirst = function(){
    var firstCap = '';//final string output 
    var upperCase = '';//holds characters converted to upper case using the toUpper method
    var regexTest = /[a-z]/;//regex pattern to basically check for a letter
    for(var index = 0; index <this.length; index++){
        //Check that the first character is a letter and convert it to upper case, then collect all other characters
        if(index === 0 && regexTest.test(this[index]) === true) {
            upperCase = this[index].toUpper();
            firstCap+=upperCase; 
        }else{
            firstCap+=this[index]; 
        }
    }
    return firstCap;
}