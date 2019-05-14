require('../toUpper/toUpper');

// ucFirst function returns the String in question but changes the First Character to an Upper case
String.prototype.ucFirst = function(){
    // final string output 
    var firstCap = '';
    // holds characters converted to upper case using the toUpper method
    var upperCase = '';
    // regex pattern to basically check for a letter
    var regexTest = /[a-z]/;
    for(var index = 0; index <this.length; index++){
        // Check that the first character is a letter and convert it to upper case, then collect all other characters
        if(index === 0 && regexTest.test(this[index]) === true) {
            upperCase = this[index].toUpper();
            firstCap+=upperCase; 
        }else{
            firstCap+=this[index]; 
        }
    }
    return firstCap;
}
